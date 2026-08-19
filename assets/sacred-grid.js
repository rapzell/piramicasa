/* Sacred Grid Background Animation - Piramicasa */
(function () {
  'use strict';

  function initSacredGrid() {
    var sections = document.querySelectorAll('.pm-sacred-bg, .pm-section-full.pm-section-dark, .pm-section.pm-section-dark');
    sections.forEach(function (section) {
      if (section.querySelector('.pm-sacred-canvas')) return;

      var canvas = document.createElement('canvas');
      canvas.className = 'pm-sacred-canvas';
      section.insertBefore(canvas, section.firstChild);

      var ctx = canvas.getContext('2d');
      var w, h, dpr;
      var t = 0;
      var rafId = null;
      var running = true;
      var motifs = [];

      function randomBetween(min, max) {
        return min + Math.random() * (max - min);
      }

      function createMotif() {
        var size = randomBetween(14, 34);
        return {
          x: randomBetween(0, w),
          y: randomBetween(0, h),
          vy: randomBetween(-0.2, -0.06),
          drift: randomBetween(-0.12, 0.12),
          size: size,
          opacity: randomBetween(0.2, 0.42),
          pulse: randomBetween(0, Math.PI * 2),
          kind: Math.random() > 0.5 ? 'pyramid' : 'flower'
        };
      }

      function resize() {
        dpr = window.devicePixelRatio || 1;
        var rect = section.getBoundingClientRect();
        w = rect.width;
        h = rect.height;
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        canvas.style.width = w + 'px';
        canvas.style.height = h + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        var targetCount = Math.max(14, Math.min(34, Math.floor((w * h) / 42000)));
        motifs = [];
        for (var i = 0; i < targetCount; i++) {
          motifs.push(createMotif());
        }
      }

      function drawPyramid(x, y, size, rot, alpha) {
        var hTri = size * 0.95;
        var half = size * 0.58;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rot);

        ctx.beginPath();
        ctx.moveTo(0, -hTri * 0.64);
        ctx.lineTo(-half, hTri * 0.5);
        ctx.lineTo(half, hTri * 0.5);
        ctx.closePath();
        ctx.strokeStyle = 'rgba(198, 156, 109, ' + alpha + ')';
        ctx.lineWidth = 1.1;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, -hTri * 0.64);
        ctx.lineTo(0, hTri * 0.5);
        ctx.moveTo(-half, hTri * 0.5);
        ctx.lineTo(half, hTri * 0.5);
        ctx.strokeStyle = 'rgba(212, 184, 150, ' + (alpha * 0.75) + ')';
        ctx.lineWidth = 0.9;
        ctx.stroke();

        ctx.restore();
      }

      function drawFlower(x, y, size, phase, alpha) {
        var ring = size * 0.46;
        ctx.strokeStyle = 'rgba(198, 156, 109, ' + alpha + ')';
        ctx.lineWidth = 0.9;

        ctx.beginPath();
        ctx.arc(x, y, ring, 0, Math.PI * 2);
        ctx.stroke();

        for (var i = 0; i < 6; i++) {
          var a = (i / 6) * Math.PI * 2 + phase;
          var cx = x + Math.cos(a) * ring;
          var cy = y + Math.sin(a) * ring;
          ctx.beginPath();
          ctx.arc(cx, cy, ring, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      function draw() {
        if (!running) return;
        ctx.clearRect(0, 0, w, h);

        for (var i = 0; i < motifs.length; i++) {
          var m = motifs[i];
          m.y += m.vy;
          m.x += Math.sin(t * 0.009 + i) * m.drift;
          m.pulse += 0.012;

          if (m.y < -80) {
            m.y = h + randomBetween(20, 120);
            m.x = randomBetween(0, w);
          }

          var pulse = 0.9 + Math.sin(m.pulse) * 0.12;
          var size = m.size * pulse;
          var alpha = m.opacity * (0.9 + Math.sin(m.pulse * 0.7) * 0.15);

          if (m.kind === 'pyramid') {
            drawPyramid(m.x, m.y, size, Math.sin(m.pulse * 0.25) * 0.15, alpha);
          } else {
            drawFlower(m.x, m.y, size, m.pulse * 0.15, alpha * 0.9);
          }
        }

        t++;
        rafId = requestAnimationFrame(draw);
      }

      function start() {
        if (!running) {
          running = true;
          draw();
        }
      }

      function stop() {
        running = false;
        if (rafId) cancelAnimationFrame(rafId);
      }

      // Intersection Observer to pause when off-screen
      if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) start();
            else stop();
          });
        }, { threshold: 0 });
        io.observe(section);
      }

      resize();
      draw();

      // Resize handler
      window.addEventListener('resize', function () {
        clearTimeout(canvas._resizeTimer);
        canvas._resizeTimer = setTimeout(resize, 200);
      });
    });
  }

  function bootSacredGrid() {
    initSacredGrid();

    var tries = 0;
    var timer = setInterval(function () {
      initSacredGrid();
      tries++;
      if (tries > 40) clearInterval(timer);
    }, 500);

    if ('MutationObserver' in window && document.body) {
      var mo = new MutationObserver(function () {
        initSacredGrid();
      });
      mo.observe(document.body, { childList: true, subtree: true });
    }

    window.addEventListener('load', initSacredGrid);
    window.addEventListener('hashchange', initSacredGrid);
    window.addEventListener('pageshow', initSacredGrid);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootSacredGrid);
  } else {
    bootSacredGrid();
  }
})();
