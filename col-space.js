/* ============================================================================
 * col-space.js  v1.0.0
 * "The Supernova Plate" — interactive WebGL layer over real space footage.
 * Raw WebGL1 fullscreen quad (no deps). Falls back to plain <video> + CSS.
 *
 * API:
 *   ColSpace.mount(root, {
 *     video: 'loop.mp4',        // required
 *     poster: 'poster.jpg',     // required (no-JS/reduced-motion/fallback)
 *     parallax: 0.02,           // uv shift strength (default 0.02)
 *     onReady: fn,              // fires when the experience is running
 *     onState: fn(state)        // 'gl' | 'video' | 'poster'
 *   }) -> { detonate(), state(), destroy() }
 *
 * States: gl (desktop WebGL) > video (plain autoplay) > poster (static).
 * Every failure degrades DOWN the ladder, never to black.
 * ========================================================================== */
(function () {
  'use strict';

  var REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var SAVE_DATA = navigator.connection && navigator.connection.saveData;

  var VERT = [
    'attribute vec2 aPos;',
    'varying vec2 vUv;',
    'void main(){ vUv = aPos * 0.5 + 0.5; gl_Position = vec4(aPos, 0.0, 1.0); }'
  ].join('\n');

  var FRAG = [
    'precision mediump float;',
    'varying vec2 vUv;',
    'uniform sampler2D uTex;',
    'uniform vec2 uParallax;',   /* lerped cursor offset in uv */
    'uniform vec2 uCover;',      /* cover-fit scale */
    'uniform float uBlast;',     /* 0..1 detonation envelope */
    'uniform float uTime;',
    'uniform vec2 uCenter;',     /* blast epicenter (uv, pre-cover) */
    '',
    'void main(){',
    '  vec2 uv = (vUv - 0.5) * uCover + 0.5 + uParallax;',
    '',
    '  /* shockwave: refract around an expanding ring */',
    '  float d = distance(vUv, uCenter);',
    '  float ringR = uBlast * 1.4;',
    '  float ringW = 0.035 + uBlast * 0.05;',
    '  float ring = smoothstep(ringW, 0.0, abs(d - ringR)) * (1.0 - uBlast);',
    '  vec2 dir = d > 0.0001 ? (vUv - uCenter) / d : vec2(0.0);',
    '  uv += dir * ring * 0.03;',
    '',
    '  /* chromatic aberration spike during blast */',
    '  float ca = uBlast * (1.0 - uBlast) * 4.0 * 0.006;',
    '  vec4 c;',
    '  c.r = texture2D(uTex, uv + dir * ca).r;',
    '  c.g = texture2D(uTex, uv).g;',
    '  c.b = texture2D(uTex, uv - dir * ca).b;',
    '  c.a = 1.0;',
    '',
    '  /* core bloom: push brights, harder during blast */',
    '  float luma = dot(c.rgb, vec3(0.299, 0.587, 0.114));',
    '  float bloom = smoothstep(0.55 - uBlast * 0.25, 1.0, luma);',
    '  c.rgb += bloom * (0.25 + uBlast * 0.9) * vec3(0.9, 0.95, 1.0);',
    '',
    '  /* shockwave ring glow + white flash envelope */',
    '  c.rgb += ring * vec3(0.65, 0.8, 1.0) * 1.6;',
    '  float flash = uBlast < 0.25 ? uBlast * 4.0 : (1.0 - uBlast) * 1.333;',
    '  c.rgb = mix(c.rgb, vec3(1.0), clamp(flash, 0.0, 1.0) * 0.85);',
    '',
    '  gl_FragColor = c;',
    '}'
  ].join('\n');

  function compile(gl, type, src) {
    var s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s));
    return s;
  }

  function mount(root, opts) {
    opts = opts || {};
    var state = 'poster';
    var destroyed = false;
    var raf = null;
    var glCanvas = null, gl = null, tex = null, prog = null, U = {};
    var video = null;
    var blast = { v: 0, active: false, t0: 0 };
    var mouse = { x: 0, y: 0, lx: 0, ly: 0 };
    var running = false, inView = true;

    if (getComputedStyle(root).position === 'static') root.style.position = 'relative';

    /* ---- layer 0: poster (always present = no-JS/no-anything floor) ---- */
    var poster = document.createElement('img');
    poster.src = opts.poster;
    poster.alt = '';
    poster.setAttribute('aria-hidden', 'true');
    poster.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0;pointer-events:none;';
    root.insertBefore(poster, root.firstChild);

    function setState(s) {
      state = s;
      if (opts.onState) opts.onState(s);
      if (s !== 'poster' && opts.onReady) opts.onReady(s);
    }

    /* ---- reduced motion / save-data: poster only ---- */
    if (REDUCED || SAVE_DATA) { setState('poster'); return api; }

    /* ---- layer 1: plain video (fallback AND the GL texture source) ---- */
    video = document.createElement('video');
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.setAttribute('playsinline', '');
    video.setAttribute('muted', '');
    video.preload = 'auto';
    video.poster = opts.poster;
    video.src = opts.video;
    /* crossOrigin only where CORS exists (http cross-origin); file:// has none */
    if (location.protocol !== 'file:') video.crossOrigin = 'anonymous';
    video.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:1;pointer-events:none;';
    root.insertBefore(video, poster.nextSibling);

    var playBlocked = false;
    var playTimeout = setTimeout(function () {
      if (video.readyState < 2) { playBlocked = true; teardownToPoster(); }
    }, 6000);

    video.play().then(function () {
      clearTimeout(playTimeout);
      if (destroyed) return;
      if (!initGL()) {
        setState('video'); /* plain video path (mobile / no WebGL) */
        attachDomParallax();
      }
    }).catch(function () {
      clearTimeout(playTimeout);
      playBlocked = true;
      teardownToPoster();
    });

    function teardownToPoster() {
      if (video) { video.removeAttribute('src'); video.load(); video.remove(); video = null; }
      setState('poster');
    }

    /* ---- layer 2: WebGL (desktop enhancement) ---- */
    function initGL() {
      var small = window.innerWidth < 768;
      if (small) return false;
      glCanvas = document.createElement('canvas');
      gl = glCanvas.getContext('webgl', { alpha: true, antialias: false, powerPreference: 'low-power' })
        || glCanvas.getContext('experimental-webgl');
      if (!gl) { glCanvas = null; return false; }

      try {
        var vs = compile(gl, gl.VERTEX_SHADER, VERT);
        var fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
        prog = gl.createProgram();
        gl.attachShader(prog, vs);
        gl.attachShader(prog, fs);
        gl.linkProgram(prog);
        if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(prog));
        gl.useProgram(prog);

        var buf = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buf);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
        var loc = gl.getAttribLocation(prog, 'aPos');
        gl.enableVertexAttribArray(loc);
        gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

        ['uTex', 'uParallax', 'uCover', 'uBlast', 'uTime', 'uCenter'].forEach(function (n) {
          U[n] = gl.getUniformLocation(prog, n);
        });

        tex = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, tex);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      } catch (e) {
        gl = null; glCanvas = null;
        return false;
      }

      glCanvas.setAttribute('aria-hidden', 'true');
      glCanvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;z-index:2;pointer-events:none;';
      root.insertBefore(glCanvas, video.nextSibling);
      video.style.opacity = '0'; /* GL renders the frames now; video stays as decode source */
      fit();
      window.addEventListener('resize', fit, { passive: true });
      setState('gl');
      startLoop();
      return true;
    }

    function fit() {
      if (!glCanvas) return;
      var r = root.getBoundingClientRect();
      var d = Math.min(window.devicePixelRatio || 1, 2);
      glCanvas.width = Math.round(r.width * d);
      glCanvas.height = Math.round(r.height * d);
      gl.viewport(0, 0, glCanvas.width, glCanvas.height);
    }

    function coverScale() {
      /* object-fit: cover math in uv space */
      var cw = glCanvas.width, ch = glCanvas.height;
      var vw = video.videoWidth || 16, vh = video.videoHeight || 9;
      var ca = cw / ch, va = vw / vh;
      if (ca > va) return [1, va / ca];
      return [ca / va, 1];
    }

    function frame(t) {
      if (destroyed || !running) return;
      raf = requestAnimationFrame(frame);
      if (!inView || document.hidden) return;

      /* lerp cursor */
      mouse.lx += (mouse.x - mouse.lx) * 0.06;
      mouse.ly += (mouse.y - mouse.ly) * 0.06;

      if (video.readyState >= 2) {
        gl.bindTexture(gl.TEXTURE_2D, tex);
        try { gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, video); } catch (e) {}
      }

      /* blast envelope */
      if (blast.active) {
        var p = (performance.now() / 1000 - blast.t0) / 1.6;
        blast.v = Math.min(1, p);
        if (p >= 1) { blast.active = false; blast.v = 0; }
      }

      var cs = coverScale();
      gl.uniform2f(U.uCover, cs[0], cs[1]);
      gl.uniform2f(U.uParallax, mouse.lx * (opts.parallax || 0.02), -mouse.ly * (opts.parallax || 0.02));
      gl.uniform1f(U.uBlast, blast.active ? blast.v : 0);
      gl.uniform1f(U.uTime, t / 1000);
      gl.uniform2f(U.uCenter, 0.5, 0.5);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }

    function startLoop() {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(frame);
    }
    function stopLoop() {
      running = false;
      if (raf) cancelAnimationFrame(raf);
      raf = null;
    }

    /* cursor parallax (GL path) */
    root.addEventListener('mousemove', function (e) {
      var r = root.getBoundingClientRect();
      mouse.x = ((e.clientX - r.left) / r.width - 0.5) * 2;
      mouse.y = ((e.clientY - r.top) / r.height - 0.5) * 2;
    }, { passive: true });
    root.addEventListener('mouseleave', function () { mouse.x = mouse.y = 0; }, { passive: true });

    /* DOM fallback parallax (plain-video path) */
    var domParallaxHandler = null;
    function attachDomParallax() {
      if (!video) return;
      domParallaxHandler = function (e) {
        var r = root.getBoundingClientRect();
        var x = ((e.clientX - r.left) / r.width - 0.5);
        var y = ((e.clientY - r.top) / r.height - 0.5);
        video.style.transform = 'scale(1.08) translate(' + (-x * 14) + 'px,' + (-y * 10) + 'px)';
      };
      root.addEventListener('mousemove', domParallaxHandler, { passive: true });
      video.style.transition = 'transform 300ms ease-out';
      video.style.transform = 'scale(1.08)';
    }

    /* DOM blast overlay (plain-video path) */
    function domDetonate() {
      if (!video) return;
      var flash = document.createElement('div');
      flash.setAttribute('aria-hidden', 'true');
      flash.style.cssText = 'position:absolute;inset:0;z-index:3;pointer-events:none;background:radial-gradient(circle at 50% 50%, rgba(255,255,255,0.95) 0%, rgba(160,200,255,0.5) 30%, transparent 70%);opacity:1;transition:opacity 900ms ease-out;';
      root.appendChild(flash);
      var ringEl = document.createElement('div');
      ringEl.setAttribute('aria-hidden', 'true');
      ringEl.style.cssText = 'position:absolute;top:50%;left:50%;width:40px;height:40px;border:3px solid rgba(180,215,255,0.9);border-radius:50%;transform:translate(-50%,-50%) scale(1);z-index:3;pointer-events:none;transition:transform 1.2s cubic-bezier(0.1,0.6,0.2,1), opacity 1.2s ease-out;';
      root.appendChild(ringEl);
      requestAnimationFrame(function () {
        ringEl.style.transform = 'translate(-50%,-50%) scale(30)';
        ringEl.style.opacity = '0';
        flash.style.opacity = '0';
      });
      setTimeout(function () { flash.remove(); ringEl.remove(); }, 1400);
    }

    /* detonation — click/tap, never on interactive elements */
    root.addEventListener('pointerdown', function (e) {
      if (e.target.closest('a, button, input, textarea')) return;
      api.detonate();
    });

    /* pause off-screen */
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        inView = entries[0].isIntersecting;
        if (video) { if (inView) video.play().catch(function () {}); else video.pause(); }
      }, { threshold: 0.1 }).observe(root);
    }

    var api = {
      detonate: function () {
        if (state === 'gl') {
          blast.active = true;
          blast.t0 = performance.now() / 1000;
          blast.v = 0;
        } else if (state === 'video') {
          domDetonate();
        }
        /* poster state: no blast (static by design) */
      },
      state: function () { return state; },
      destroy: function () {
        destroyed = true;
        stopLoop();
        if (gl) { var lose = gl.getExtension('WEBGL_lose_context'); if (lose) lose.loseContext(); }
        if (glCanvas) glCanvas.remove();
        if (video) video.remove();
        if (poster) poster.remove();
      }
    };
    return api;
  }

  window.ColSpace = { mount: mount, version: '1.0.0' };
})();
