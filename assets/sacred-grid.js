/* Sacred Grid Background Animation - Piramicasa */
(function () {
  'use strict';

  // Auto-detect dark green sections by class name
  var AUTO_CLASSES = [
    '.pm-hero',
    '.pm-section-dark',
    '.pm-cta',
    '.pm-subpage-hero'
  ];

  var initialized = new WeakSet();

  function getTargetSections() {
    var selectors = '.pm-sacred-bg, ' + AUTO_CLASSES.join(', ');
    return document.querySelectorAll(selectors);
  }

  function initSection(section) {
    if (initialized.has(section)) return;
    if (section.querySelector('.pm-sacred-canvas')) return;
    initialized.add(section);

    // Ensure position relative for canvas positioning
    if (getComputedStyle(section).position === 'static') {
      section.style.position = 'relative';
    }
    // Ensure overflow hidden so canvas doesn't spill
    if (getComputedStyle(section).overflow === 'visible') {
      section.style.overflow = 'hidden';
    }

      var canvas = document.createElement('canvas');
      canvas.className = 'pm-sacred-canvas';
      section.insertBefore(canvas, section.firstChild);

      var ctx = canvas.getContext('2d');
      var w, h, dpr;
      var t = 0;
      var gridCols = 6;
      var gridRows = 6;
      var sides = 3; // triangle
      var rafId = null;
      var running = true;

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
      }

      function drawPolygon(cx, cy, radius, rotation, sidesNum) {
        ctx.beginPath();
        for (var i = 0; i <= sidesNum; i++) {
          var angle = rotation + (i / sidesNum) * Math.PI * 2;
          var x = cx + Math.cos(angle) * radius;
          var y = cy + Math.sin(angle) * radius;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
      }

      function draw() {
        if (!running) return;
        ctx.clearRect(0, 0, w, h);

        var cellW = w / gridCols;
        var cellH = h / gridRows;
        var baseRadius = Math.min(cellW, cellH) * 0.38;

        for (var row = 0; row < gridRows; row++) {
          for (var col = 0; col < gridCols; col++) {
            var cx = col * cellW + cellW / 2;
            var cy = row * cellH + cellH / 2;

            var distFromCenter = Math.sqrt(
              Math.pow((col + 0.5) / gridCols - 0.5, 2) +
              Math.pow((row + 0.5) / gridRows - 0.5, 2)
            );

            var pulse = Math.sin(t * 0.015 + distFromCenter * 6) * 0.5 + 0.5;
            var radius = baseRadius * (0.5 + pulse * 0.5);
            var rotation = t * 0.008 + (col + row) * 0.3;

            // Outer triangle
            drawPolygon(cx, cy, radius, rotation, sides);
            ctx.strokeStyle = 'rgba(198, 156, 109, ' + (0.3 + pulse * 0.4) + ')';
            ctx.lineWidth = 1;
            ctx.stroke();

            // Inner triangle (counter-rotating)
            drawPolygon(cx, cy, radius * 0.5, -rotation * 1.3, sides);
            ctx.strokeStyle = 'rgba(198, 156, 109, ' + (0.15 + pulse * 0.25) + ')';
            ctx.lineWidth = 0.8;
            ctx.stroke();

            // Center dot
            ctx.beginPath();
            ctx.arc(cx, cy, 1.5 + pulse * 1, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(198, 156, 109, ' + (0.2 + pulse * 0.3) + ')';
            ctx.fill();

            // Connecting lines to center of grid
            if (col === Math.floor(gridCols / 2) && row === Math.floor(gridRows / 2)) {
              // center cell - draw flower of life pattern
              for (var k = 0; k < 6; k++) {
                var a = (k / 6) * Math.PI * 2 + t * 0.005;
                var r2 = radius * 0.6;
                drawPolygon(
                  cx + Math.cos(a) * r2,
                  cy + Math.sin(a) * r2,
                  radius * 0.35,
                  rotation + a,
                  sides
                );
                ctx.strokeStyle = 'rgba(198, 156, 109, ' + (0.1 + pulse * 0.15) + ')';
                ctx.lineWidth = 0.5;
                ctx.stroke();
              }
            }
          }
        }

        // Draw connecting grid lines
        ctx.strokeStyle = 'rgba(198, 156, 109, 0.05)';
        ctx.lineWidth = 0.5;
        for (var c2 = 0; c2 <= gridCols; c2++) {
          ctx.beginPath();
          ctx.moveTo(c2 * cellW, 0);
          ctx.lineTo(c2 * cellW, h);
          ctx.stroke();
        }
        for (var r2 = 0; r2 <= gridRows; r2++) {
          ctx.beginPath();
          ctx.moveTo(0, r2 * cellH);
          ctx.lineTo(w, r2 * cellH);
          ctx.stroke();
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
    }

  function initSacredGrid() {
    var sections = getTargetSections();
    sections.forEach(function (section) {
      initSection(section);
    });
  }

  // Re-scan after React hydration adds new sections
  function scheduleReScan() {
    setTimeout(function () {
      initSacredGrid();
    }, 500);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initSacredGrid();
      scheduleReScan();
    });
  } else {
    initSacredGrid();
    scheduleReScan();
  }

  // MutationObserver to catch React-hydrated content
  if ('MutationObserver' in window) {
    var mo = new MutationObserver(function (mutations) {
      var needsReScan = false;
      for (var i = 0; i < mutations.length; i++) {
        if (mutations[i].addedNodes.length > 0) {
          needsReScan = true;
          break;
        }
      }
      if (needsReScan) {
        clearTimeout(window._sacredGridReScan);
        window._sacredGridReScan = setTimeout(initSacredGrid, 300);
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });
  }
})();
