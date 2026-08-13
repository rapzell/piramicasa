(function () {
  'use strict';

  var initialized = false;

  function init() {
    if (initialized) return;
    var header = document.querySelector('.pm-header');
    if (!header) return;
    if (!header.querySelector('.pm-nav') && !header.querySelector('.pm-header-right')) return;
    if (document.querySelector('.pm-mobile-bar')) { initialized = true; return; }
    initialized = true;

    var nav = header.querySelector('.pm-nav');
    var headerRight = header.querySelector('.pm-header-right');
    var phone = headerRight ? headerRight.querySelector('.pm-phone') : null;
    var lang = headerRight ? headerRight.querySelector('.pm-lang') : null;
    var logo = header.querySelector('.pm-logo');
    var tagline = header.querySelector('.pm-tagline');

    // === Standalone mobile bar (outside React control) ===
    var bar = document.createElement('div');
    bar.className = 'pm-mobile-bar';

    var logoHTML = '';
    if (logo) {
      logoHTML = '<a href="/" class="pm-mobile-logo">' + logo.innerHTML + '</a>';
    }
    if (tagline) {
      logoHTML += '<div class="pm-mobile-tagline">' + tagline.textContent + '</div>';
    }

    bar.innerHTML = logoHTML + '<button class="pm-mobile-btn" aria-label="Abrir menu" aria-expanded="false"><span></span><span></span><span></span></button>';
    document.body.appendChild(bar);

    // Overlay
    var overlay = document.createElement('div');
    overlay.className = 'pm-mobile-overlay';
    document.body.appendChild(overlay);

    // Drawer
    var drawer = document.createElement('div');
    drawer.className = 'pm-mobile-drawer';

    var d = '';
    if (phone) {
      d += '<a href="' + (phone.getAttribute('href') || 'tel:') + '" class="pm-mobile-phone">' + phone.textContent + '</a>';
    }
    if (nav) {
      d += '<div class="pm-mobile-section-label">Navegacion</div>';
      nav.querySelectorAll('.pm-nav-item').forEach(function (item) {
        var link = item.querySelector('a');
        var dd = item.querySelector('.pm-dropdown');
        var eg = item.classList.contains('pm-nav-egipto');
        if (dd) {
          var lh = link ? link.getAttribute('href') : '#';
          var lt = link ? link.textContent.replace(/\s*▼\s*$/, '').trim() : '';
          d += '<div class="pm-mobile-nav-item' + (eg ? ' pm-mobile-egipto' : '') + '">';
          d += '<a href="' + lh + '" data-ts="1">' + lt + ' <span class="pm-mobile-arrow">▼</span></a>';
          d += '<div class="pm-mobile-submenu">';
          dd.querySelectorAll('a').forEach(function (s) {
            d += '<a href="' + s.getAttribute('href') + '">' + s.textContent + '</a>';
          });
          d += '</div></div>';
        } else {
          var h = link ? link.getAttribute('href') : '#';
          var t = link ? link.textContent.trim() : '';
          d += '<div class="pm-mobile-nav-item' + (eg ? ' pm-mobile-egipto' : '') + '"><a href="' + h + '">' + t + '</a></div>';
        }
      });
    }
    if (lang) {
      d += '<div class="pm-mobile-section-label">Idioma</div><div class="pm-mobile-lang">';
      lang.querySelectorAll('span, a').forEach(function (el) {
        if (el.tagName === 'A') {
          d += '<a href="' + el.getAttribute('href') + '"' + (el.getAttribute('target') ? ' target="' + el.getAttribute('target') + '"' : '') + (el.getAttribute('rel') ? ' rel="' + el.getAttribute('rel') + '"' : '') + '>' + el.textContent + '</a>';
        } else {
          d += '<span>' + el.textContent + '</span>';
        }
      });
      d += '</div>';
    }
    drawer.innerHTML = d;
    document.body.appendChild(drawer);

    var btn = bar.querySelector('.pm-mobile-btn');

    function open() {
      btn.classList.add('pm-open');
      overlay.classList.add('pm-open');
      drawer.classList.add('pm-open');
      btn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
    function close() {
      btn.classList.remove('pm-open');
      overlay.classList.remove('pm-open');
      drawer.classList.remove('pm-open');
      btn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      drawer.querySelectorAll('.pm-mobile-submenu.pm-open').forEach(function (s) { s.classList.remove('pm-open'); });
      drawer.querySelectorAll('.pm-mobile-nav-item.pm-expanded').forEach(function (s) { s.classList.remove('pm-expanded'); });
    }

    btn.addEventListener('click', function () { if (btn.classList.contains('pm-open')) close(); else open(); });
    overlay.addEventListener('click', close);

    drawer.querySelectorAll('[data-ts="1"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        var p = link.closest('.pm-mobile-nav-item');
        var sm = p.querySelector('.pm-mobile-submenu');
        if (sm) {
          var io = sm.classList.contains('pm-open');
          drawer.querySelectorAll('.pm-mobile-submenu.pm-open').forEach(function (s) { s.classList.remove('pm-open'); });
          drawer.querySelectorAll('.pm-mobile-nav-item.pm-expanded').forEach(function (s) { s.classList.remove('pm-expanded'); });
          if (!io) { sm.classList.add('pm-open'); p.classList.add('pm-expanded'); }
        }
      });
    });

    drawer.querySelectorAll('a:not([data-ts="1"])').forEach(function (link) {
      link.addEventListener('click', function () { setTimeout(close, 150); });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && btn.classList.contains('pm-open')) close();
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 768 && btn.classList.contains('pm-open')) close();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      setTimeout(init, 100);
      setTimeout(init, 300);
      setTimeout(init, 800);
      setTimeout(init, 1500);
    });
  } else {
    setTimeout(init, 100);
    setTimeout(init, 300);
    setTimeout(init, 800);
    setTimeout(init, 1500);
  }

  var bo = new MutationObserver(function () {
    if (!initialized && document.querySelector('.pm-header')) init();
  });
  if (document.body) {
    bo.observe(document.body, { childList: true, subtree: true });
  } else {
    document.addEventListener('DOMContentLoaded', function () {
      bo.observe(document.body, { childList: true, subtree: true });
    });
  }
})();
