/* ============================================================================
 * ColRain — the Nexus app's MatrixRain (NEX-303/NEX-304), ported 1:1 to canvas.
 * Source of truth: everything-app/src/components/ui/MatrixRain.tsx +
 * matrix-rain-motion.ts + theme/tokens.ts (motion.rain). Same motion model
 * (position = pure function of elapsed time, seeded mulberry32, no accumulators),
 * same glyph alphabet (65% katakana / 35% Latin), same colors:
 * head #FFFFFF, near #F2D08A (goldBright), far #E5BA6E (gold).
 *
 * Renderer mirrors the app's "one native view per column" trick: each column is
 * pre-rendered to an offscreen canvas (re-drawn ONLY when a glyph swap hits it),
 * so the per-frame cost is ~columns drawImage calls, not ~9k fillText calls.
 *
 * API: ColRain.mount(canvas, { seed?, opacity? }) -> { destroy() }
 * Honors prefers-reduced-motion: renders the frozen FROZEN_TIME_MS frame, no loop.
 * ========================================================================== */
(function () {
  'use strict';

  var VERSION = '1.0.0';

  // ── tokens.motion.rain (verbatim from the app) ────────────────────────────
  var RAIN = {
    // near field
    glyphSizePt: 13, glyphLeadingPt: 16, trailGlyphs: 34,
    speedMinPtPerS: 180, speedMaxPtPerS: 420,
    swapIntervalMs: 55, swapsPerTick: 6,
    trailAlphaMax: 0.75, trailFalloff: 1.6,
    nearPitchPt: 14.0,                    // 393pt / 28 columns
    // far field
    farGlyphSizePt: 11, farGlyphLeadingPt: 13, farTrailGlyphs: 46,
    farSpeedMinPtPerS: 110, farSpeedMaxPtPerS: 260,
    farAlphaMax: 0.85, farTrailFalloff: 0.8, farLayerOpacity: 0.3,
    farPitchPt: 10.9,                     // 393pt / 36 columns
    // web perf guardrails (desktop fields are much wider than a phone)
    maxNearColumns: 120, maxFarColumns: 150
  };

  var FROZEN_TIME_MS = 2200;

  var COLOR_HEAD = [255, 255, 255];   // tokens.color.text
  var COLOR_NEAR = [242, 208, 138];   // tokens.color.goldBright
  var COLOR_FAR = [229, 186, 110];    // tokens.color.gold

  var KATAKANA = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
  var LATIN = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  // ── matrix-rain-motion.ts, 1:1 ────────────────────────────────────────────
  function mulberry32(seed) {
    var a = seed >>> 0;
    return function () {
      a = (a + 0x6d2b79f5) >>> 0;
      var t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function pmod(n, m) { return ((n % m) + m) % m; }

  function columnTravel(fieldHeight, trailGlyphs, glyphLeadingPt) {
    return fieldHeight + 2 * trailGlyphs * glyphLeadingPt;
  }

  function columnHeadY(col, elapsedMs, fieldHeight, glyphLeadingPt) {
    var travel = columnTravel(fieldHeight, col.trailGlyphs, glyphLeadingPt);
    var raw = col.phasePt + col.speedPtPerS * (elapsedMs / 1000);
    return pmod(raw, travel) - col.trailGlyphs * glyphLeadingPt;
  }

  function glyphAlpha(i, trailGlyphs, trailAlphaMax, falloff) {
    if (i <= 0) return 1;
    if (i >= trailGlyphs - 1) return 0;
    var t = (i - 1) / (trailGlyphs - 2);
    return trailAlphaMax * (1 - t) * Math.exp(-falloff * t);
  }

  function glyphTier(i) { return i <= 0 ? COLOR_HEAD : (i === 1 ? COLOR_NEAR : COLOR_FAR); }

  function pickGlyphs(rand, count, katakanaRatio) {
    var ratio = katakanaRatio == null ? 0.65 : katakanaRatio;
    var out = [];
    for (var i = 0; i < count; i++) {
      var set = rand() < ratio ? KATAKANA : LATIN;
      out.push(set[Math.floor(rand() * set.length)]);
    }
    return out;
  }

  function buildColumns(opts) {
    var rand = mulberry32(opts.seed);
    var pitch = opts.fieldWidth / Math.max(1, opts.columns);
    var out = [];
    for (var i = 0; i < opts.columns; i++) {
      var active = rand() < opts.columnFill;
      var speed = opts.speedMinPtPerS + rand() * (opts.speedMaxPtPerS - opts.speedMinPtPerS);
      var jitter = Math.round((rand() - 0.5) * 4);
      var len = Math.max(3, opts.trailGlyphs + jitter);
      var phase = rand() * columnTravel(opts.fieldHeight, len, opts.glyphLeadingPt);
      out.push({ index: i, x: i * pitch + pitch / 2, speedPtPerS: speed, phasePt: phase, trailGlyphs: len, active: active });
    }
    return out;
  }

  // ── Renderer ──────────────────────────────────────────────────────────────
  function mount(canvas, opts) {
    opts = opts || {};
    var seed = opts.seed == null ? 0x9e37 : opts.seed;
    var ctx = canvas.getContext('2d');
    if (!ctx) return { destroy: function () {} };

    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var W = 0, H = 0;
    var near = null, far = null;
    var swapRand = mulberry32(seed ^ 0x5bf0);
    var rafId = 0, swapId = 0, destroyed = false;

    var reduceMotion = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

    function fontFor(g, size) {
      // Katakana is not in mono faces' Latin subset; give it a JP-capable stack.
      return size + 'px ' + (KATAKANA.indexOf(g) >= 0
        ? '"Hiragino Sans","Helvetica Neue",sans-serif'
        : '"IBM Plex Mono",ui-monospace,Menlo,monospace');
    }

    function makeLayer(columns, glyphSize, leading, alphaMax, falloff, glyphsSeed) {
      var layer = { columns: columns, leading: leading, glyphSize: glyphSize, canvases: [], glyphs: [] };
      for (var i = 0; i < columns.length; i++) {
        layer.glyphs.push(pickGlyphs(mulberry32(glyphsSeed + columns[i].index), columns[i].trailGlyphs));
        layer.canvases.push(null); // lazily rendered on first visible frame
      }
      layer.alphaMax = alphaMax;
      layer.falloff = falloff;
      return layer;
    }

    // Pre-render one column to its offscreen canvas (tail-first: head last).
    function renderColumn(layer, ci) {
      var col = layer.columns[ci];
      var glyphs = layer.glyphs[ci];
      var n = glyphs.length;
      var blockW = layer.glyphSize * 2;
      var c = layer.canvases[ci];
      if (!c) {
        c = document.createElement('canvas');
        c.width = Math.ceil(blockW * dpr);
        c.height = Math.ceil(n * layer.leading * dpr);
        layer.canvases[ci] = c;
      }
      var g = c.getContext('2d');
      g.setTransform(dpr, 0, 0, dpr, 0, 0);
      g.clearRect(0, 0, blockW, n * layer.leading);
      g.textAlign = 'center';
      g.textBaseline = 'alphabetic';
      for (var j = 0; j < n; j++) {
        var i = n - 1 - j; // line j carries trail index n-1-j (head last, at bottom)
        var rgb = glyphTier(i);
        var a = glyphAlpha(i, n, layer.alphaMax, layer.falloff);
        g.fillStyle = 'rgba(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ',' + a.toFixed(3) + ')';
        g.font = fontFor(glyphs[i], layer.glyphSize);
        // baseline so each line's pitch == leading
        g.fillText(glyphs[i], blockW / 2, (j + 1) * layer.leading - (layer.leading - layer.glyphSize) / 2 - 1);
      }
    }

    function build() {
      var rect = canvas.getBoundingClientRect();
      W = Math.max(1, rect.width); H = Math.max(1, rect.height);
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);

      var nearCount = Math.min(RAIN.maxNearColumns, Math.round(W / RAIN.nearPitchPt));
      var farCount = Math.min(RAIN.maxFarColumns, Math.round(W / RAIN.farPitchPt));
      var sizeSeed = Math.floor(W * 31 + H);

      near = makeLayer(
        buildColumns({ fieldWidth: W, fieldHeight: H, columns: nearCount, columnFill: 1, trailGlyphs: RAIN.trailGlyphs,
          speedMinPtPerS: RAIN.speedMinPtPerS, speedMaxPtPerS: RAIN.speedMaxPtPerS, glyphLeadingPt: RAIN.glyphLeadingPt, seed: seed + sizeSeed }),
        RAIN.glyphSizePt, RAIN.glyphLeadingPt, RAIN.trailAlphaMax, RAIN.trailFalloff, seed);
      far = makeLayer(
        buildColumns({ fieldWidth: W, fieldHeight: H, columns: farCount, columnFill: 1, trailGlyphs: RAIN.farTrailGlyphs,
          speedMinPtPerS: RAIN.farSpeedMinPtPerS, speedMaxPtPerS: RAIN.farSpeedMaxPtPerS, glyphLeadingPt: RAIN.farGlyphLeadingPt, seed: (seed ^ 0x77c3) + sizeSeed }),
        RAIN.farGlyphSizePt, RAIN.farGlyphLeadingPt, RAIN.farAlphaMax, RAIN.farTrailFalloff, seed ^ 0x77c3);
    }

    function drawLayer(layer, elapsedMs, layerOpacity) {
      ctx.globalAlpha = layerOpacity;
      for (var ci = 0; ci < layer.columns.length; ci++) {
        var col = layer.columns[ci];
        if (!col.active) continue;
        var headY = columnHeadY(col, elapsedMs, H, layer.leading);
        var n = layer.glyphs[ci].length;
        var top = headY - (n - 1) * layer.leading;
        if (top > H || top + n * layer.leading < 0) continue; // fully offscreen
        if (!layer.canvases[ci]) renderColumn(layer, ci);
        ctx.drawImage(layer.canvases[ci], col.x - layer.glyphSize, top);
      }
      ctx.globalAlpha = 1;
    }

    function frame(elapsedMs) {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      drawLayer(far, elapsedMs, RAIN.farLayerOpacity);
      drawLayer(near, elapsedMs, 1);
    }

    // ── Clock: position is a pure function of elapsed time (app rule 1) ──────
    var start = 0;
    function tick() {
      if (destroyed) return;
      frame(performance.now() - start);
      rafId = requestAnimationFrame(tick);
    }

    // ── Glyph churn: characters flicker in place (app's swap ticker) ─────────
    function swaps() {
      if (destroyed || document.hidden) return;
      var nearCount = near.columns.length * RAIN.trailGlyphs;
      var farCount = far.columns.length * RAIN.farTrailGlyphs;
      var farShare = farCount / (nearCount + farCount);
      for (var k = 0; k < RAIN.swapsPerTick; k++) {
        var layer = swapRand() < farShare ? far : near;
        var ci = Math.min(layer.columns.length - 1, Math.floor(swapRand() * layer.columns.length));
        var row = layer.glyphs[ci];
        var slot = Math.min(row.length - 1, Math.floor(swapRand() * row.length));
        var g = pickGlyphs(swapRand, 1)[0];
        if (row[slot] === g) continue;
        row[slot] = g;
        renderColumn(layer, ci);
        if (reduceMotion) frame(FROZEN_TIME_MS); // keep frozen frame fresh after a swap
      }
    }

    function startLoops() {
      if (reduceMotion) {
        frame(FROZEN_TIME_MS);
        swapId = setInterval(swaps, RAIN.swapIntervalMs * 20); // rare churn on the still frame
        return;
      }
      start = performance.now();
      rafId = requestAnimationFrame(tick);
      swapId = setInterval(swaps, RAIN.swapIntervalMs);
    }

    var resizeT = 0;
    function onResize() {
      clearTimeout(resizeT);
      resizeT = setTimeout(function () {
        if (destroyed) return;
        build();
        if (reduceMotion) frame(FROZEN_TIME_MS);
      }, 150);
    }

    build();
    startLoops();
    window.addEventListener('resize', onResize);

    return {
      destroy: function () {
        destroyed = true;
        cancelAnimationFrame(rafId);
        clearInterval(swapId);
        clearTimeout(resizeT);
        window.removeEventListener('resize', onResize);
      }
    };
  }

  window.ColRain = { mount: mount, VERSION: VERSION };
})();
