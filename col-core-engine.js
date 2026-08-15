/* ============================================================================
 * col-core-engine.js  v1.0.0
 * "The Core" — real-time motion engine for Circle of Light / Nexus.
 * Canvas 2D only (no WebGL). Runs on gsap.ticker when present, own rAF else.
 *
 * API:
 *   ColCore.mount(root, opts)   — starfield + particle-eye + HUD rings in root
 *   ColCore.decode(el, opts)    — hacker-flip label decode (short labels only)
 *   ColCore.reveal(el, opts)    — mask/clip reveal on scroll into view
 *   ColCore.trackBox(parent, opts) — teal L-bracket reticle inside parent
 *
 * Non-negotiables: progressive enhancement (DOM works without this file),
 * reduced-motion static fallback, idle sleep, DPR cap 2, seeded determinism.
 * ========================================================================== */
(function () {
  'use strict';

  var GOLD = '#E5BA6E';
  var TEAL = '#5FE0EA';
  var VOID = '#06060C';

  var REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------- utilities ---------------- */

  function hash(n) {
    /* Knuth multiplicative, well-decorrelated for sequential n */
    var h = (n * 2654435761) % 4294967296;
    h = (h ^ (h >>> 13)) * 2246822519 % 4294967296;
    return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
  }

  function dpr() { return Math.min(window.devicePixelRatio || 1, 2); }

  function makeCanvas(root, zIndex) {
    var c = document.createElement('canvas');
    c.setAttribute('aria-hidden', 'true');
    c.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:' + zIndex + ';';
    root.appendChild(c);
    return c;
  }

  function fitCanvas(c) {
    var r = c.getBoundingClientRect();
    var d = dpr();
    var w = Math.max(1, Math.round(r.width * d));
    var h = Math.max(1, Math.round(r.height * d));
    if (c.width !== w || c.height !== h) { c.width = w; c.height = h; return true; }
    return false;
  }

  /* pre-rendered dot sprite (no per-frame arc) */
  var SPRITES = {};
  function dotSprite(color) {
    if (SPRITES[color]) return SPRITES[color];
    var s = document.createElement('canvas');
    s.width = s.height = 16;
    var g = s.getContext('2d');
    var grad = g.createRadialGradient(8, 8, 0, 8, 8, 8);
    grad.addColorStop(0, color);
    grad.addColorStop(0.4, color);
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = grad;
    g.fillRect(0, 0, 16, 16);
    SPRITES[color] = s;
    return s;
  }

  /* ---------------- scheduler ---------------- */
  /* one ticker for the whole engine; gsap.ticker when available */

  var listeners = [];
  var running = false;
  var lastT = -1;

  function tick() {
    /* always self-clocked — gsap/rAF timestamp conventions differ */
    var now = performance.now() / 1000;
    var dt = lastT < 0 ? 0.016 : Math.min(0.05, now - lastT);
    lastT = now;
    for (var i = 0; i < listeners.length; i++) listeners[i](now, dt);
  }

  function rafLoop(ts) { if (running) { tick(ts); requestAnimationFrame(rafLoop); } }

  /* pump for rAF-starved but visible contexts (throttled tabs, headless):
     keeps the engine alive at ~20fps when rAF doesn't fire */
  setInterval(function () {
    if (running && !document.hidden && lastT >= 0 && (performance.now() / 1000 - lastT) > 0.3) tick();
  }, 50);

  function engineStart() {
    if (running) return;
    running = true;
    lastT = performance.now() / 1000 - 0.016;
    if (window.gsap && window.gsap.ticker) window.gsap.ticker.add(tick);
    else requestAnimationFrame(rafLoop);
  }

  function engineStop() {
    running = false;
    if (window.gsap && window.gsap.ticker) window.gsap.ticker.remove(tick);
  }

  function onTick(fn) { listeners.push(fn); engineStart(); }
  function offTick(fn) {
    var i = listeners.indexOf(fn);
    if (i >= 0) listeners.splice(i, 1);
    if (!listeners.length) engineStop();
  }

  /* global pause: hidden tab */
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) engineStop();
    else if (listeners.length && !REDUCED) engineStart();
  });

  /* ---------------- idle sleep ---------------- */

  var lastActivity = 0;
  var sleeping = false;
  function poke() {
    lastActivity = Date.now();
    if (sleeping) { sleeping = false; if (listeners.length && !document.hidden) engineStart(); }
  }
  ['scroll', 'mousemove', 'touchstart', 'resize'].forEach(function (ev) {
    window.addEventListener(ev, poke, { passive: true });
  });
  setInterval(function () {
    if (!sleeping && Date.now() - lastActivity > 3000) { sleeping = true; engineStop(); }
  }, 1000);

  /* ============================================================================
   * STARFIELD — 3 parallax layers, mouse + scroll drift
   * ========================================================================== */

  function Starfield(canvas, opts) {
    opts = opts || {};
    var ctx = canvas.getContext('2d');
    var density = opts.density || (window.innerWidth < 768 ? 0.00012 : 0.00016);
    var stars = [];
    var mx = 0, my = 0, scrollV = 0, lastScroll = 0;

    function seed() {
      stars = [];
      var area = canvas.width * canvas.height;
      var n = Math.min(420, Math.round(area * density));
      for (var i = 0; i < n; i++) {
        var layer = i % 3; /* 0 far, 1 mid, 2 near */
        stars.push({
          x: hash(i * 7 + 1),
          y: hash(i * 7 + 2),
          layer: layer,
          r: (layer + 1) * 0.9 + hash(i * 7 + 3) * 1.4,
          tw: hash(i * 7 + 4) * Math.PI * 2, /* twinkle phase */
          teal: hash(i * 7 + 5) > 0.82,
          gold: ! (hash(i * 7 + 5) > 0.82) && hash(i * 7 + 6) > 0.75
        });
      }
    }

    window.addEventListener('mousemove', function (e) {
      mx = (e.clientX / window.innerWidth - 0.5);
      my = (e.clientY / window.innerHeight - 0.5);
    }, { passive: true });

    window.addEventListener('scroll', function () {
      var s = window.scrollY;
      scrollV += (s - lastScroll) * 0.002;
      lastScroll = s;
    }, { passive: true });

    var goldSprite = dotSprite(GOLD), tealSprite = dotSprite(TEAL), whiteSprite = dotSprite('#E8EEF6');

    this.draw = function (t, dt) {
      scrollV *= 0.92;
      var w = canvas.width, h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      for (var i = 0; i < stars.length; i++) {
        var st = stars[i];
        var depth = (st.layer + 1) / 3;
        var x = (st.x * w + mx * depth * 60 * dpr()) % w;
        var y = (st.y * h + my * depth * 40 * dpr() + t * depth * 4 * dpr() + scrollV * depth * 300) % h;
        if (x < 0) x += w; if (y < 0) y += h;
        var a = 0.35 + 0.65 * Math.abs(Math.sin(st.tw + t * (0.4 + depth * 0.6)));
        ctx.globalAlpha = a * (0.4 + depth * 0.6);
        var spr = st.teal ? tealSprite : (st.gold ? goldSprite : whiteSprite);
        var sz = st.r * dpr() * 4;
        ctx.drawImage(spr, x - sz / 2, y - sz / 2, sz, sz);
      }
      ctx.globalAlpha = 1;
    };

    this.refit = seed;
    seed();
  }

  /* ============================================================================
   * PARTICLE EYE — procedural glyph sample, particles converge (arc reactor)
   * ========================================================================== */

  function sampleEyeGlyph(size) {
    /* draw the Nexus eye procedurally — no image, no CORS */
    var off = document.createElement('canvas');
    off.width = off.height = size;
    var g = off.getContext('2d');
    g.clearRect(0, 0, size, size);
    var cx = size / 2, cy = size / 2;
    var W = size * 0.42, H = size * 0.21; /* almond half-width/height */

    g.strokeStyle = '#fff';
    g.fillStyle = '#fff';

    /* almond outline — two arcs */
    g.lineWidth = size * 0.026;
    g.beginPath();
    g.moveTo(cx - W, cy);
    g.quadraticCurveTo(cx, cy - H * 2.1, cx + W, cy);
    g.quadraticCurveTo(cx, cy + H * 2.1, cx - W, cy);
    g.stroke();

    /* iris ring + pupil */
    g.lineWidth = size * 0.03;
    g.beginPath(); g.arc(cx, cy, size * 0.115, 0, Math.PI * 2); g.stroke();
    g.beginPath(); g.arc(cx, cy, size * 0.055, 0, Math.PI * 2); g.fill();

    /* radial lash ticks around the almond */
    g.lineWidth = size * 0.011;
    for (var i = 0; i < 24; i++) {
      var a = (i / 24) * Math.PI * 2;
      var rx = Math.cos(a), ry = Math.sin(a);
      var ex = cx + rx * W * 1.06, ey = cy + ry * H * 2.35;
      var ix2 = cx + rx * W * 0.92, iy2 = cy + ry * H * 1.95;
      if (i % 2 === 0) { g.beginPath(); g.moveTo(ix2, iy2); g.lineTo(ex, ey); g.stroke(); }
    }

    /* sample bright pixels */
    var data = g.getImageData(0, 0, size, size).data;
    var pts = [];
    var step = 2;
    for (var y = 0; y < size; y += step) {
      for (var x = 0; x < size; x += step) {
        if (data[(y * size + x) * 4 + 3] > 120) pts.push({ x: x / size - 0.5, y: y / size - 0.5 });
      }
    }

    /* glowing twin — the "ignite" layer revealed once particles land */
    var glow = document.createElement('canvas');
    glow.width = glow.height = size;
    var gg = glow.getContext('2d');
    gg.filter = 'blur(' + Math.round(size * 0.02) + 'px)';
    gg.drawImage(off, 0, 0);
    gg.filter = 'none';
    gg.drawImage(off, 0, 0);
    /* tint the whole glyph gold */
    gg.globalCompositeOperation = 'source-in';
    gg.fillStyle = GOLD;
    gg.fillRect(0, 0, size, size);
    gg.globalCompositeOperation = 'source-over';

    return { pts: pts, canvas: off, glow: glow };
  }

  function ParticleEye(canvas, opts) {
    opts = opts || {};
    var ctx = canvas.getContext('2d');
    var mobile = window.innerWidth < 768;
    var MAX = opts.particles || (mobile ? 300 : 700);
    var self = this;
    self.progress = 0;      /* 0 scattered -> 1 assembled */
    self.holdGlow = 0;      /* post-assemble breathe */

    var glyphSize = 400;
    var glyph = sampleEyeGlyph(glyphSize);
    var glyphPts = glyph.pts;
    var particles = [];

    function seed() {
      particles = [];
      /* unique glyph points, seeded shuffle — crisp formation, no clustering */
      var order = glyphPts.map(function (_, i) { return i; });
      for (var s = order.length - 1; s > 0; s--) {
        var j = Math.floor(hash(s * 17 + 31) * (s + 1));
        var tmp = order[s]; order[s] = order[j]; order[j] = tmp;
      }
      var n = Math.min(MAX, glyphPts.length);
      for (var i = 0; i < n; i++) {
        var gp = glyphPts[order[i]];
        var a1 = hash(i * 3 + 1) * Math.PI * 2;
        var sxn, syn;
        if (opts.scatter === 'out') {
          /* supernova: blast outward along (mostly) the target's own direction */
          var dl = Math.hypot(gp.x, gp.y);
          var dx = dl > 0.02 ? gp.x / dl : Math.cos(a1);
          var dy = dl > 0.02 ? gp.y / dl : Math.sin(a1);
          var rad = 0.85 + hash(i * 3 + 3) * 1.3;
          var jitter = (hash(i * 3 + 2) - 0.5) * 0.6;
          sxn = gp.x + (dx * rad - dy * jitter);
          syn = gp.y + (dy * rad + dx * jitter);
        } else {
          /* scatter: sphere-ish cloud via seeded angles */
          var a2 = hash(i * 3 + 2) * Math.PI;
          var rad2 = 0.55 + hash(i * 3 + 3) * 0.75;
          sxn = Math.cos(a1) * Math.sin(a2) * rad2;
          syn = Math.sin(a1) * Math.sin(a2) * rad2 * 0.72;
        }
        particles.push({
          sx: sxn, sy: syn,
          tx: gp.x, ty: gp.y,
          teal: hash(i * 5 + 2) > 0.78,
          sz: 0.5 + hash(i * 5 + 3) * 1.0,
          delay: hash(i * 5 + 4) * 0.35,     /* stagger into formation */
          wob: hash(i * 5 + 5) * Math.PI * 2 /* idle wobble phase */
        });
      }
    }

    var goldSprite = dotSprite(GOLD), tealSprite = dotSprite(TEAL);

    function ease(p) { return 1 - Math.pow(1 - p, 3); }

    this.draw = function (t, dt) {
      var w = canvas.width, h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      var cx = w / 2, cy = h / 2;
      var scale = Math.min(w, h) * 0.66;

      /* ignite: the true glyph burns in as the particles land */
      var ignite = Math.max(0, Math.min(1, (self.progress - 0.88) / 0.12));
      if (ignite > 0) {
        var breathe = 0.85 + Math.sin(t * 1.6) * 0.15;
        ctx.globalAlpha = ignite * 0.55 * breathe;
        ctx.drawImage(glyph.glow, cx - scale / 2, cy - scale / 2, scale, scale);
        ctx.globalAlpha = 1;
      }

      for (var i = 0; i < particles.length; i++) {
        var pt = particles[i];
        var lp = Math.max(0, Math.min(1, (self.progress - pt.delay) / (1 - pt.delay || 1)));
        var e = ease(lp);
        var wob = e >= 1 ? Math.sin(t * 1.4 + pt.wob) * 1.6 * dpr() : 0;
        var x = cx + (pt.sx * (1 - e) + pt.tx * e) * scale + wob;
        var y = cy + (pt.sy * (1 - e) + pt.ty * e) * scale + wob * 0.6;
        var alpha = 0.25 + e * 0.75;
        if (e >= 1) alpha = 0.85 + Math.sin(t * 1.8 + pt.wob) * 0.15;
        ctx.globalAlpha = Math.max(0.05, Math.min(1, alpha));
        var spr = pt.teal ? tealSprite : goldSprite;
        var sz = pt.sz * dpr() * (1.8 + e * 1.2);
        ctx.drawImage(spr, x - sz / 2, y - sz / 2, sz, sz);
      }
      ctx.globalAlpha = 1;
    };

    /* static end-state for reduced motion / poster */
    this.drawStatic = function () {
      self.progress = 1;
      this.draw(1.2, 0.016);
    };

    this.refit = seed;
    seed();
    window.__eyeDebug = { glyph: glyphPts.length, particles: particles.length };
  }

  /* ============================================================================
   * HUD RINGS — SVG dashed/tick rings, counter-rotating, lock-on
   * ========================================================================== */

  function hudRings(root, opts) {
    opts = opts || {};
    var size = opts.size || 520;
    var NS = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('viewBox', '0 0 100 100');
    svg.setAttribute('aria-hidden', 'true');
    var s = size + 'px';
    svg.style.cssText = 'position:absolute;top:50%;left:50%;width:min(' + s + ',80vmin);height:min(' + s + ',80vmin);transform:translate(-50%,-50%);pointer-events:none;z-index:2;opacity:0;transition:opacity 900ms ease;';
    root.appendChild(svg);

    function ring(r, dash, color, width, opacity) {
      var c = document.createElementNS(NS, 'circle');
      c.setAttribute('cx', 50); c.setAttribute('cy', 50); c.setAttribute('r', r);
      c.setAttribute('fill', 'none');
      c.setAttribute('stroke', color);
      c.setAttribute('stroke-width', width);
      c.setAttribute('stroke-dasharray', dash);
      c.setAttribute('opacity', opacity);
      svg.appendChild(c);
      return c;
    }

    var r1 = ring(46, '2 3', TEAL, 0.35, 0.9);
    var r2 = ring(40, '8 5 1 5', GOLD, 0.3, 0.75);
    var r3 = ring(33, '1 2', TEAL, 0.25, 0.6);

    /* tick marks outer */
    for (var i = 0; i < 48; i++) {
      var a = (i / 48) * Math.PI * 2;
      var l = document.createElementNS(NS, 'line');
      var long = i % 4 === 0;
      l.setAttribute('x1', 50 + Math.cos(a) * 48.4);
      l.setAttribute('y1', 50 + Math.sin(a) * 48.4);
      l.setAttribute('x2', 50 + Math.cos(a) * (long ? 49.6 : 49));
      l.setAttribute('y2', 50 + Math.sin(a) * (long ? 49.6 : 49));
      l.setAttribute('stroke', TEAL);
      l.setAttribute('stroke-width', long ? 0.4 : 0.2);
      l.setAttribute('opacity', long ? 0.9 : 0.5);
      svg.appendChild(l);
    }

    var angle = 0;
    var api = {
      el: svg,
      show: function () { svg.style.opacity = '1'; },
      draw: function (t, dt) {
        angle += dt * 6;
        r1.style.transform = 'rotate(' + angle + 'deg)';
        r2.style.transform = 'rotate(' + (-angle * 1.7) + 'deg)';
        r3.style.transform = 'rotate(' + (angle * 0.6) + 'deg)';
        r1.style.transformOrigin = r2.style.transformOrigin = r3.style.transformOrigin = '50% 50%';
      }
    };
    return api;
  }

  /* ============================================================================
   * SUPERNOVA — interactive detonation: pulsing star -> flash -> shockwave ->
   * ejecta blast -> debris settles into the eye remnant (SN 1987A aesthetic)
   * ========================================================================== */

  function supernova(root, opts) {
    opts = opts || {};
    if (getComputedStyle(root).position === 'static') root.style.position = 'relative';

    var starCanvas = makeCanvas(root, 0);
    var fxCanvas = makeCanvas(root, 1);
    var eyeCanvas = makeCanvas(root, 2);
    var stars = new Starfield(starCanvas, { density: window.innerWidth < 768 ? 0.00016 : 0.00022 });
    var eye = new ParticleEye(eyeCanvas, { scatter: 'out', particles: opts.particles });
    var rings = opts.rings === false ? null : hudRings(root, opts.rings || {});

    var fx = fxCanvas.getContext('2d');
    var state = 'star'; /* star -> firing -> done */
    var mouse = { x: -9999, y: -9999 };
    var fire = null;    /* {t0} when detonated */

    function refit() {
      fitCanvas(starCanvas); fitCanvas(fxCanvas); fitCanvas(eyeCanvas);
      stars.refit(); eye.refit();
      if (REDUCED) eye.drawStatic();
    }
    refit();
    window.addEventListener('resize', refit, { passive: true });

    root.addEventListener('mousemove', function (e) {
      var r = fxCanvas.getBoundingClientRect();
      mouse.x = (e.clientX - r.left) * dpr();
      mouse.y = (e.clientY - r.top) * dpr();
    }, { passive: true });
    root.addEventListener('mouseleave', function () { mouse.x = mouse.y = -9999; }, { passive: true });

    function detonate() {
      if (state === 'firing') return;
      state = 'firing';
      fire = { t0: performance.now() / 1000 };
      eye.progress = 0;
    }

    root.addEventListener('pointerdown', function (e) {
      if (e.target.closest('a, button, input, textarea')) return; /* never hijack CTAs */
      if (state === 'star') detonate();
      else if (state === 'done') { state = 'star'; setTimeout(detonate, 350); }
    });

    var whiteSprite = dotSprite('#FFFFFF');
    var blueSprite = dotSprite('#9FD8FF');

    /* the pre-blast star: breathing white-blue point, flares near cursor */
    function drawStar(t) {
      var w = fxCanvas.width, h = fxCanvas.height;
      var cx = w / 2, cy = h / 2;
      var breathe = 1 + Math.sin(t * 2.4) * 0.18;
      var dist = Math.hypot(mouse.x - cx, mouse.y - cy);
      var flare = Math.max(0, 1 - dist / (260 * dpr()));
      var R = (10 + flare * 22) * breathe * dpr();

      ctx0(fx, function () {
        fx.globalAlpha = 0.85;
        var gs = R * 6;
        fx.drawImage(blueSprite, cx - gs / 2, cy - gs / 2, gs, gs);
        fx.globalAlpha = 1;
        fx.drawImage(whiteSprite, cx - R, cy - R, R * 2, R * 2);
        /* pulsing hint ring */
        var rp = (t % 2.2) / 2.2;
        fx.globalAlpha = (1 - rp) * 0.35;
        fx.strokeStyle = '#9FD8FF';
        fx.lineWidth = 1.5 * dpr();
        fx.beginPath();
        fx.arc(cx, cy, R * (1.6 + rp * 2.2), 0, Math.PI * 2);
        fx.stroke();
      });
    }

    function ctx0(c, fn) { c.save(); fn(); c.restore(); }

    /* flash + shockwave + star collapse, then hand off to the eye */
    function drawFiring(t) {
      var w = fxCanvas.width, h = fxCanvas.height;
      var cx = w / 2, cy = h / 2;
      var el = t - fire.t0;

      /* white flash: 0 -> 0.35s */
      if (el < 0.5) {
        var fa = el < 0.12 ? el / 0.12 : Math.max(0, 1 - (el - 0.12) / 0.38);
        var fg = fx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(w, h) * 0.7);
        fg.addColorStop(0, 'rgba(255,255,255,' + (fa * 0.95) + ')');
        fg.addColorStop(0.25, 'rgba(190,225,255,' + (fa * 0.55) + ')');
        fg.addColorStop(1, 'rgba(120,170,255,0)');
        fx.fillStyle = fg;
        fx.fillRect(0, 0, w, h);
      }

      /* collapsing star core (survives inside the flash) */
      if (el < 0.9) {
        var shrink = Math.max(0.1, 1 - el * 1.4);
        var R = 26 * shrink * dpr();
        fx.globalAlpha = Math.min(1, 1.2 - el);
        fx.drawImage(whiteSprite, cx - R, cy - R, R * 2, R * 2);
        fx.globalAlpha = 1;
      }

      /* shockwave: 0.15s -> 1.4s */
      if (el > 0.12 && el < 1.5) {
        var sp = (el - 0.12) / 1.38;
        var sr = ease(sp) * Math.max(w, h) * 0.72;
        fx.globalAlpha = (1 - sp) * 0.9;
        fx.strokeStyle = '#CFE8FF';
        fx.lineWidth = (3.5 - sp * 2.5) * dpr();
        fx.beginPath(); fx.arc(cx, cy, sr, 0, Math.PI * 2); fx.stroke();
        fx.globalAlpha = (1 - sp) * 0.4;
        fx.lineWidth = (14 - sp * 10) * dpr();
        fx.strokeStyle = '#7FB8FF';
        fx.beginPath(); fx.arc(cx, cy, sr * 0.96, 0, Math.PI * 2); fx.stroke();
        fx.globalAlpha = 1;
      }

      /* debris drive: blast begins inside the flash, settles over ~2.4s */
      if (el > 0.2) {
        eye.progress = Math.min(1, (el - 0.2) / 2.4);
      }
      if (eye.progress >= 1 && state === 'firing') {
        state = 'done';
        if (rings) rings.show();
        if (opts.onRemnant) opts.onRemnant();
      }
    }

    function ease(p) { return 1 - Math.pow(1 - p, 3); }

    if (REDUCED) {
      stars.draw(1.2, 0.016);
      eye.drawStatic();
      if (rings) { rings.show(); rings.draw(1, 0.016); }
      return { detonate: function () {}, eye: eye, stars: stars, rings: rings };
    }

    var tickFn = function (t, dt) {
      stars.draw(t, dt);
      fx.clearRect(0, 0, fxCanvas.width, fxCanvas.height);
      if (state === 'star') drawStar(t);
      else if (fire) drawFiring(t);
      eye.draw(t, dt);
      if (rings) rings.draw(t, dt);
    };
    onTick(tickFn);

    /* auto-detonate for passive visitors */
    var auto = setTimeout(function () { if (state === 'star') detonate(); }, opts.autoDelay || 2600);

    return {
      detonate: detonate,
      eye: eye, stars: stars, rings: rings,
      destroy: function () { offTick(tickFn); clearTimeout(auto); }
    };
  }

  function mount(root, opts) {
    opts = opts || {};
    if (getComputedStyle(root).position === 'static') root.style.position = 'relative';

    var starCanvas = makeCanvas(root, 0);
    var eyeCanvas = makeCanvas(root, 1);
    var stars = new Starfield(starCanvas, opts.starfield || {});
    var eye = new ParticleEye(eyeCanvas, opts.eye || {});
    var rings = opts.rings === false ? null : hudRings(root, opts.rings || {});

    function refit() {
      fitCanvas(starCanvas); fitCanvas(eyeCanvas);
      stars.refit(); eye.refit();
      if (REDUCED) eye.drawStatic();
    }
    refit();
    window.addEventListener('resize', refit, { passive: true });

    if (REDUCED) {
      /* static fallback: one composed frame, no loops */
      stars.draw(1.2, 0.016);
      eye.drawStatic();
      if (rings) { rings.show(); rings.draw(1, 0.016); }
      return {
        eye: eye, rings: rings, stars: stars,
        play: function () {}, destroy: function () {}
      };
    }

    var tickFn = function (t, dt) {
      stars.draw(t, dt);
      eye.draw(t, dt);
      if (rings) rings.draw(t, dt);
    };
    onTick(tickFn);

    var api = {
      eye: eye, rings: rings, stars: stars,
      /* choreographed boot: particles converge, rings lock on */
      play: function (dur) {
        dur = dur || 2.2;
        var t0 = null;
        var fn = function (t) {
          if (t0 === null) t0 = t;
          var p = Math.min(1, (t - t0) / dur);
          eye.progress = p;
          if (p >= 1) {
            offTick(fn2);
            if (rings) rings.show();
            if (opts.onAssembled) opts.onAssembled();
          }
        };
        var fn2 = function (t) { fn(t); };
        onTick(fn2);
      },
      destroy: function () { offTick(tickFn); }
    };
    return api;
  }

  /* ============================================================================
   * decode(el) — hacker-flip label decode (SHORT labels only)
   * keeps the real string in a visually-hidden span for AT
   * ========================================================================== */

  var GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*';

  function decode(el, opts) {
    opts = opts || {};
    var word = opts.text || el.textContent.trim();
    var dur = opts.duration || 0.55;
    var stagger = opts.stagger || 0.045;
    var threshold = 0.6;

    /* preserve the accessible string */
    el.textContent = '';
    var sr = document.createElement('span');
    sr.className = 'col-sr-only';
    sr.style.cssText = 'position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;';
    sr.textContent = word;
    el.appendChild(sr);

    var live = document.createElement('span');
    live.setAttribute('aria-hidden', 'true');
    live.style.cssText = 'display:inline-block;';
    el.appendChild(live);

    var ghost = document.createElement('span');
    ghost.style.cssText = 'opacity:0;pointer-events:none;';
    ghost.textContent = word;
    live.appendChild(ghost);

    var chars = [];
    for (var i = 0; i < word.length; i++) {
      var sp = document.createElement('span');
      sp.style.cssText = 'display:inline-block;position:absolute;left:0;transform-origin:bottom;';
      sp.textContent = word[i] === ' ' ? ' ' : word[i];
      sp.dataset.target = word[i];
      chars.push(sp);
    }
    /* absolute chars over the ghost: measure after layout */
    function layout() {
      var x = 0;
      for (var j = 0; j < chars.length; j++) {
        var g = document.createElement('span');
        g.style.cssText = 'opacity:0;display:inline-block;';
        g.textContent = chars[j].dataset.target === ' ' ? ' ' : chars[j].dataset.target;
        live.appendChild(g);
        chars[j].style.left = x + 'px';
        x += g.getBoundingClientRect().width;
        live.appendChild(chars[j]);
        live.removeChild(g);
      }
    }

    if (REDUCED) {
      el.textContent = word;
      return { play: function () {} };
    }

    var played = false;
    function play() {
      if (played) return;
      played = true;
      layout();
      var t0 = null;
      var fn = function (t) {
        if (t0 === null) t0 = t;
        for (var i = 0; i < chars.length; i++) {
          var el2 = chars[i];
          var p = Math.max(0, Math.min(1, (t - t0 - i * stagger) / dur));
          if (p <= 0) { el2.style.opacity = '0'; continue; }
          if (p < threshold) {
            el2.textContent = GLYPHS[Math.floor(hash(i * 1000 + Math.floor(p * 40)) * GLYPHS.length)];
          } else {
            el2.textContent = el2.dataset.target === ' ' ? ' ' : el2.dataset.target;
          }
          el2.style.transform = 'rotateX(' + (90 - p * 90) + 'deg)';
          el2.style.opacity = String(Math.min(1, p * 2));
        }
        if (t - t0 > chars.length * stagger + dur) offTick(fn);
      };
      onTick(fn);
    }

    return { play: play };
  }

  /* ============================================================================
   * reveal(el) — mask reveal when scrolled into view
   * ========================================================================== */

  function reveal(el, opts) {
    opts = opts || {};
    if (REDUCED) { el.style.opacity = '1'; el.style.transform = 'none'; el.style.clipPath = 'none'; return; }
    el.style.opacity = '0';
    el.style.transform = 'translateY(' + (opts.y || 18) + 'px)';
    el.style.transition = 'opacity ' + (opts.dur || 600) + 'ms cubic-bezier(0.2,0,0,1), transform ' + (opts.dur || 600) + 'ms cubic-bezier(0.2,0,0,1)';
    if (!('IntersectionObserver' in window)) { el.style.opacity = '1'; el.style.transform = 'none'; return; }
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'none';
          ro.unobserve(el);
        }
      });
    }, { threshold: opts.threshold || 0.2 });
    ro.observe(el);
  }

  /* ============================================================================
   * trackBox(parent, opts) — teal L-bracket reticle inside a positioned parent
   * ========================================================================== */

  function trackBox(parent, opts) {
    opts = opts || {};
    if (getComputedStyle(parent).position === 'static') parent.style.position = 'relative';
    var box = document.createElement('div');
    box.setAttribute('aria-hidden', 'true');
    box.style.cssText = 'position:absolute;inset:0;pointer-events:none;z-index:3;opacity:0;transition:opacity 500ms ease;';
    var corners = ['top:0;left:0;border-top:2px solid ' + TEAL + ';border-left:2px solid ' + TEAL,
      'top:0;right:0;border-top:2px solid ' + TEAL + ';border-right:2px solid ' + TEAL,
      'bottom:0;left:0;border-bottom:2px solid ' + TEAL + ';border-left:2px solid ' + TEAL,
      'bottom:0;right:0;border-bottom:2px solid ' + TEAL + ';border-right:2px solid ' + TEAL];
    corners.forEach(function (cs) {
      var c = document.createElement('div');
      c.style.cssText = 'position:absolute;width:22px;height:22px;' + cs + ';';
      box.appendChild(c);
    });
    if (opts.label) {
      var l = document.createElement('div');
      l.style.cssText = 'position:absolute;top:-1.6em;left:0;font-family:ui-monospace,monospace;font-size:11px;letter-spacing:0.12em;color:' + TEAL + ';white-space:nowrap;';
      l.textContent = opts.label;
      box.appendChild(l);
    }
    /* scanline sweep */
    if (!REDUCED) {
      var scan = document.createElement('div');
      scan.style.cssText = 'position:absolute;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,' + TEAL + ',transparent);opacity:0.7;top:0;';
      box.appendChild(scan);
      var scanFn = function (t) {
        var p = (t % 3.2) / 3.2;
        scan.style.transform = 'translateY(' + (p * 100) + '%)';
        scan.style.transform = 'translateY(' + (p * parent.clientHeight) + 'px)';
      };
      onTick(scanFn);
    }
    parent.appendChild(box);
    return {
      show: function () { box.style.opacity = '1'; },
      hide: function () { box.style.opacity = '0'; }
    };
  }

  /* ---------------- export ---------------- */

  window.ColCore = {
    mount: mount,
    supernova: supernova,
    decode: decode,
    reveal: reveal,
    trackBox: trackBox,
    reduced: REDUCED,
    version: '1.1.0'
  };

})();
