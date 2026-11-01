/* Carrusel de videos de redes sociales - Piramicasa
   Lee assets/social-videos.json (generado por el agregador), mezcla aleatorio
   y renderiza un carrusel con fachada de miniatura (iframe solo al hacer click). */
(function () {
  "use strict";

  function t(s) {
    var l = window.PM_lang || "es";
    var d = window.PM_I18N && window.PM_I18N[l];
    return (d && d[s]) || s;
  }

  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var x = a[i]; a[i] = a[j]; a[j] = x;
    }
    return a;
  }

  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  function slide(v) {
    var s = el("div", "pm-social-slide");
    if (v.type === "youtube") {
      var b = el("button", "pm-social-thumb");
      b.type = "button";
      b.setAttribute("aria-label", t("Reproducir vídeo") + ": " + v.title);
      var img = el("img");
      img.src = v.thumb;
      img.alt = v.title;
      img.loading = "lazy";
      img.decoding = "async";
      b.appendChild(img);
      b.appendChild(el("span", "pm-social-play", "<svg viewBox='0 0 24 24' width='26' height='26' fill='currentColor' aria-hidden='true'><path d='M8 5v14l11-7z'/></svg>"));
      b.appendChild(el("span", "pm-social-src", "YouTube"));
      b.addEventListener("click", function () {
        var f = document.createElement("iframe");
        f.src = "https://www.youtube.com/embed/" + v.id + "?autoplay=1&rel=0";
        f.title = v.title;
        f.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
        f.setAttribute("allowfullscreen", "");
        f.className = "pm-social-iframe";
        s.replaceChild(f, b);
      });
      s.appendChild(b);
    } else {
      var a = el("a", "pm-social-thumb pm-social-ext");
      a.href = v.url;
      a.target = "_blank";
      a.rel = "noopener";
      a.setAttribute("aria-label", t("Ver en") + " " + (v.source || "social") + ": " + v.title);
      if (v.thumb) {
        var img = el("img");
        img.src = v.thumb;
        img.alt = v.title;
        img.loading = "lazy";
        img.decoding = "async";
        img.addEventListener("error", function () { img.style.display = "none"; });
        a.appendChild(img);
      }
      a.appendChild(el("span", "pm-social-play", "<svg viewBox='0 0 24 24' width='26' height='26' fill='currentColor' aria-hidden='true'><path d='M8 5v14l11-7z'/></svg>"));
      a.appendChild(el("span", "pm-social-src", v.source || "Social"));
      s.appendChild(a);
    }
    var cap = el("p", "pm-social-title");
    cap.textContent = v.title && v.title !== "Video" ? v.title : (v.source || "Video");
    cap.title = v.title;
    s.appendChild(cap);
    return s;
  }

  function build(videos) {
    var sec = el("section", "pm-social-carousel");
    sec.id = "pm-social";
    sec.setAttribute("aria-label", t("Síguenos en redes"));

    var head = el("div", "pm-social-head");
    head.appendChild(el("span", "pm-social-kicker", t("Contenido fresco")));
    head.appendChild(el("h2", "pm-social-h2", t("Síguenos en redes")));
    head.appendChild(el("p", "pm-social-sub", t("Los últimos vídeos de nuestras redes sociales")));
    var links = el("div", "pm-social-links");
    [["https://youtube.com/piramicasa", "YouTube", "M23 7.2s-.2-1.6-.9-2.3c-.9-.9-1.9-.9-2.4-1C16.6 3.6 12 3.6 12 3.6s-4.6 0-7.7.3c-.5.1-1.5.1-2.4 1-.7.7-.9 2.3-.9 2.3S.8 9.1.8 11v1.8c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.9.9 2 .9 2.5 1 1.8.2 7.6.3 7.6.3s4.6 0 7.7-.4c.5-.1 1.5-.1 2.4-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8V11c0-1.9-.2-3.8-.2-3.8zM9.9 15.1V8.4l6.1 3.4-6.1 3.3z"],
     ["https://instagram.com/osiris5293", "Instagram", "M12 2.2c3.2 0 3.6 0 4.8.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-3.3-.1-4.8-1.7-4.9-4.9-.1-1.3-.1-1.6-.1-4.8s0-3.6.1-4.8C2.4 4 4 2.4 7.2 2.3c1.2-.1 1.6-.1 4.8-.1zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zm5.2-9.6a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4z"],
     ["https://x.com/piramicasa", "X", "M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.4L6.4 22H3.2l7.3-8.3L1.2 2h6.4l4.4 5.8L18.9 2zm-1.1 18h1.7L7.1 3.8H5.3L17.8 20z"]]
      .forEach(function (p) {
        var a = el("a");
        a.href = p[0];
        a.target = "_blank";
        a.rel = "noopener";
        a.setAttribute("aria-label", p[1]);
        a.innerHTML = "<svg viewBox='0 0 24 24' width='18' height='18' fill='currentColor' aria-hidden='true'><path d='" + p[2] + "'/></svg>";
        links.appendChild(a);
      });
    head.appendChild(links);
    sec.appendChild(head);

    var wrap = el("div", "pm-social-viewport");
    var prev = el("button", "pm-social-btn pm-social-prev", "<svg viewBox='0 0 24 24' width='20' height='20' fill='none' stroke='currentColor' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'><path d='M15 18l-6-6 6-6'/></svg>");
    var next = el("button", "pm-social-btn pm-social-next", "<svg viewBox='0 0 24 24' width='20' height='20' fill='none' stroke='currentColor' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'><path d='M9 18l6-6-6-6'/></svg>");
    prev.type = next.type = "button";
    prev.setAttribute("aria-label", t("Vídeos anteriores"));
    next.setAttribute("aria-label", t("Vídeos siguientes"));

    var track = el("div", "pm-social-track");
    videos.forEach(function (v) { track.appendChild(slide(v)); });

    prev.addEventListener("click", function () { track.scrollBy({ left: -track.clientWidth * 0.8, behavior: "smooth" }); });
    next.addEventListener("click", function () { track.scrollBy({ left: track.clientWidth * 0.8, behavior: "smooth" }); });

    var dots = el("div", "pm-social-dots");
    function visibleCount() { return Math.max(1, Math.round(track.clientWidth / (track.querySelector(".pm-social-slide") || track).offsetWidth || 1)); }
    function pageCount() { return Math.max(1, Math.ceil(track.scrollWidth / track.clientWidth)); }
    function renderDots() {
      dots.innerHTML = "";
      var n = pageCount();
      for (var i = 0; i < n; i++) {
        (function (i) {
          var d = el("button", "pm-social-dot");
          d.type = "button";
          d.setAttribute("aria-label", t("Página") + " " + (i + 1));
          d.addEventListener("click", function () { track.scrollTo({ left: i * track.clientWidth, behavior: "smooth" }); });
          dots.appendChild(d);
        })(i);
      }
      updateDots();
    }
    function updateDots() {
      var n = pageCount();
      var cur = Math.min(n - 1, Math.round(track.scrollLeft / track.clientWidth));
      Array.prototype.forEach.call(dots.children, function (d, i) {
        d.classList.toggle("pm-social-dot-on", i === cur);
        d.setAttribute("aria-current", i === cur ? "true" : "false");
      });
    }
    var rt;
    track.addEventListener("scroll", function () { clearTimeout(rt); rt = setTimeout(updateDots, 60); }, { passive: true });
    window.addEventListener("resize", function () { renderDots(); });
    renderDots();

    wrap.appendChild(prev);
    wrap.appendChild(track);
    wrap.appendChild(next);
    sec.appendChild(wrap);
    sec.appendChild(dots);
    return sec;
  }

  function insert() {
    if (document.querySelector(".pm-social-carousel")) return true;
    var anchor = document.querySelector("footer, .pm-footer, .pm-legal-disclaimer");
    if (!anchor) return false;
    fetch("/assets/social-videos.json")
      .then(function (r) { return r.json(); })
      .then(function (d) {
        if (!d || !d.videos || !d.videos.length) return;
        var vids = shuffle(d.videos.slice()).slice(0, 12);
        var sec = build(vids);
        anchor.parentNode.insertBefore(sec, anchor);
        if (location.hash === "#pm-social") {
          setTimeout(function () { sec.scrollIntoView({ behavior: "smooth", block: "start" }); }, 300);
        }
      })
      .catch(function () {});
    return true;
  }

  var tries = 0;
  var iv = setInterval(function () {
    if (insert() || ++tries > 60) clearInterval(iv);
  }, 250);
})();
