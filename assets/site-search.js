/* ==========================================================================
   PIRAMICASA — BUSCADOR GLOBAL, BOTÓN WHATSAPP Y MEJORAS DE NAVEGACIÓN
   No muta nodos internos de React (.pm-page); inyecta modales en document.body
   y añade el disparador de búsqueda de forma segura.
   ========================================================================== */
(function () {
  'use strict';

  var INDEX = [
    { t: 'Inicio — Portada Piramicasa', c: 'Portada', u: '/' },
    { t: 'Nuestros modelos de pirámides', c: 'Modelos', u: '/#modelos' },
    { t: 'Piramicama (Estándar y Templaria)', c: 'Modelo', u: '/piramides/estructura_piramicama.htm.html', k: 'cama dormir sueño descanso tatami' },
    { t: 'Piramicama Hércules (Alta potencia)', c: 'Modelo', u: '/piramides/estructura_hercules.htm.html', k: 'reuma esclerosis potente aluminio' },
    { t: 'Pirámides Hygia y Horus (Meditación y Terapia)', c: 'Modelo', u: '/piramides/estructura_hygia.htm.html', k: 'portatil camilla local terapeuta piramicuna' },
    { t: 'Casa y Bungalow Piramidal Sekhmet', c: 'Modelo', u: '/piramides/piramide.htm.html', k: 'vivienda cabaña madera habitable' },
    { t: 'Piramicasa Vital (Vivienda completa)', c: 'Modelo', u: '/piramides/piramicasa_vital.html.html', k: 'casa llave en mano arquitectura ecologica' },
    { t: 'Pirámides de Jardín y Pérgolas', c: 'Modelo', u: '/piramides/estructura_pirajardin.htm.html', k: 'exterior zen plantas naturaleza' },
    { t: 'Piramascota (Perros, gatos y apicultura)', c: 'Modelo', u: '/piramides/mascotas.html.html', k: 'animales veterinaria abejas' },
    { t: 'Arcón y Jaula de Faraday Piramidal', c: 'Modelo', u: '/piramides/arcones-faraday.html.html', k: 'electromagnetismo radiacion 5g wifi' },
    { t: 'Lista de precios orientativos y presupuestos', c: 'Compra', u: '/piramides/listadecostos.htm.html', k: 'coste tarifas cuanto cuesta comprar' },
    { t: 'Envíos e instalación a todo el mundo', c: 'Compra', u: '/es/envio_de_piramides_a_todo_el_mundo.html.html', k: 'transporte españa europa america aduanas' },
    { t: 'Presentación de Gabriel Silva (Director)', c: 'Equipo', u: '/presentacion.html', k: 'quienes somos fundador osiris biografia' },
    { t: 'Historia de Piramicasa desde 1972', c: 'Equipo', u: '/historia.html', k: 'trayectoria bovis drbal cronologia' },
    { t: 'Salud, bienestar y 13 beneficios', c: 'Ciencia', u: '/salud.html', k: 'sueño relajacion antioxidante bacteriostatico' },
    { t: 'Aplicaciones y dolencias documentadas', c: 'Ciencia', u: '/enfermedades.html', k: 'artrosis fibromialgia insomnio lesiones' },
    { t: 'Avales y certificados verificables (CENAMENT)', c: 'Garantías', u: '/es/avales_terapia_piramidal_oficial.html.html', k: 'cuba hospitales ulises sosa salinas' },
    { t: 'Biblioteca completa de Artículos (37+ temas)', c: 'Artículos', u: '/articulos.html', k: 'lecturas estudios manuales experimentos' },
    { t: 'Documento Crítico (Respuestas al escepticismo)', c: 'Ciencia', u: '/documento-critico.html', k: 'dudas pruebas fisica debate' },
    { t: 'Dossier Básico Técnico Piramicasa (PDF)', c: 'Ciencia', u: '/dossier-basico-piramicasa.html', k: 'descargar catalogo manual' },
    { t: 'Testimonios reales de usuarios', c: 'Confianza', u: '/testimonios.html', k: 'opiniones experiencias clientes casos' },
    { t: 'Centros de terapia piramidal y terapeutas', c: 'Centros', u: '/centros-terapia.html', k: 'madrid lleida costa rica consultas probar' },
    { t: 'Vídeos y entrevistas', c: 'Multimedia', u: '/videos.html', k: 'youtube documentales explicaciones' },
    { t: 'Conferencias, cursos y talleres', c: 'Eventos', u: '/conferencias.html', k: 'formacion charlas' },
    { t: 'Libros de Gabriel Silva', c: 'Libros', u: '/libros.html', k: 'tecnologia sagrada revolucion terapeutica kybalion' },
    { t: 'Viaje científico e iniciático a Egipto', c: 'Egipto', u: '/viaje-egipto.html', k: 'guiza keops templos nilo' },
    { t: 'Construcción, materiales, proporciones y orientación', c: 'Técnica', u: '/construccion/index.html', k: 'brujula norte aluminio madera medidas' },
    { t: 'Geobiología, Biómetro de Bovis y Biones', c: 'Geobiología', u: '/geobiologia/geobiologia.html.html', k: 'wilhelm reich orgon radiestesia' },
    { t: 'Piramijoyas exclusivas', c: 'Joyas', u: '/joyas/joyas.htm.html', k: 'anillos ankh oro esmeraldas' },
    { t: 'Contacto directo (WhatsApp, teléfono y email)', c: 'Contacto', u: '/es/datos-de-contacto.html.html', k: 'llamar escribir horario consulta' },
    { t: 'Aviso legal, privacidad, envíos y garantías', c: 'Legal', u: '/es/terminos_y_condiciones_avisos_legales_derechos_de_autor.htm.html', k: 'condiciones devoluciones cookies estatuto' }
  ];

  // Añadir los 37 artículos si están disponibles o por catálogo base
  var ARTS = [
    ['art-efecto', 'Efecto piramidal'], ['art-energia', 'Energía piramidal'],
    ['art-exp-cientificos', 'Experimentos científicos'], ['art-exp-caseros', 'Experimentos caseros'],
    ['art-magnetico', 'Función magnética'], ['art-orientacion', 'Orientación con brújula'],
    ['art-avales', 'Avales oficiales'], ['art-faq', 'Preguntas frecuentes sobre pirámides'],
    ['art-historica', 'Piramidología histórica'], ['art-meditacion', 'Meditación en pirámides'],
    ['art-fibromialgia', 'Fibromialgia'], ['art-borreliasis', 'Borreliasis'],
    ['art-candidiasis', 'Candidiasis'], ['art-dolencias', 'Dolencias tratadas'],
    ['art-prostata', 'Próstata'], ['art-renales', 'Riñón y recuperación'],
    ['art-piramicama', 'Piramicama en detalle'], ['art-transparente', 'Piramicama transparente'],
    ['art-luxor', 'Piramicama Luxor'], ['art-bungalow', 'Bungalow piramidal'],
    ['art-vital', 'Piramicasa Vital'], ['art-hygia', 'Hygia y Horus'],
    ['art-piramascota', 'Piramascota'], ['art-jardin', 'Pirámides de jardín'],
    ['art-faraday', 'Arcones Faraday'], ['art-planos', 'Planos piramidales'],
    ['art-sujok', 'Manual Su-Jok'], ['art-hammer', 'Manual Dr. Hammer']
  ];
  for (var i = 0; i < ARTS.length; i++) {
    INDEX.push({ t: ARTS[i][1], c: 'Artículo', u: '/articulos.html#' + ARTS[i][0] });
  }

  function norm(s) {
    return (s || '').toLowerCase()
      .replace(/[áàä]/g, 'a').replace(/[éèë]/g, 'e')
      .replace(/[íìï]/g, 'i').replace(/[óòö]/g, 'o')
      .replace(/[úùü]/g, 'u').replace(/ñ/g, 'n');
  }

  function buildModal() {
    if (document.getElementById('pm-search-modal')) return;
    var m = document.createElement('div');
    m.id = 'pm-search-modal';
    m.setAttribute('role', 'dialog');
    m.setAttribute('aria-modal', 'true');
    m.setAttribute('aria-label', 'Buscar en Piramicasa');
    m.innerHTML =
      '<div class="pm-search-dialog">' +
        '<div class="pm-search-top">' +
          '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2F5D57" stroke-width="2.2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>' +
          '<input type="search" class="pm-search-input" id="pm-search-q" placeholder="Buscar modelos, precios, artículos, certificados, envíos…" autocomplete="off" />' +
          '<button type="button" class="pm-search-close" id="pm-search-close">Cerrar</button>' +
        '</div>' +
        '<div class="pm-search-results" id="pm-search-results"></div>' +
      '</div>';
    document.body.appendChild(m);

    var input = document.getElementById('pm-search-q');
    var list = document.getElementById('pm-search-results');

    function render(q) {
      var nq = norm(q).trim();
      var terms = nq ? nq.split(/\s+/) : [];
      var matches = INDEX.filter(function (item) {
        if (!terms.length) return item.c !== 'Artículo';
        var hay = norm(item.t + ' ' + item.c + ' ' + (item.k || ''));
        return terms.every(function (w) { return hay.indexOf(w) !== -1; });
      }).slice(0, 14);

      if (!matches.length) {
        list.innerHTML = '<div style="padding:20px;text-align:center;color:#4A5754;font-size:.92rem">No hay coincidencias exactas. <a href="/articulos.html">Ver los 37 artículos</a> o <a href="https://wa.me/34639284787">consultar por WhatsApp</a>.</div>';
        return;
      }
      list.innerHTML = matches.map(function (it) {
        return '<a class="pm-search-hit" href="' + it.u + '"><strong>' + it.t + '</strong><span>' + it.c + ' →</span></a>';
      }).join('');
    }

    input.addEventListener('input', function () { render(input.value); });
    list.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeSearch();
    });
    document.getElementById('pm-search-close').addEventListener('click', closeSearch);
    m.addEventListener('click', function (e) { if (e.target === m) closeSearch(); });
    render('');
  }

  function openSearch() {
    buildModal();
    var m = document.getElementById('pm-search-modal');
    m.classList.add('is-open');
    var inp = document.getElementById('pm-search-q');
    if (inp) { inp.value = ''; inp.dispatchEvent(new Event('input')); setTimeout(function () { inp.focus(); }, 30); }
  }

  function closeSearch() {
    var m = document.getElementById('pm-search-modal');
    if (m) m.classList.remove('is-open');
  }

  window.PM_openSearch = openSearch;

  document.addEventListener('click', function (e) {
    if (e.target && e.target.closest && e.target.closest('[data-pm-search-open]')) {
      e.preventDefault();
      openSearch();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeSearch();
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openSearch();
    }
  });

  // Botón flotante rápido de WhatsApp (izquierda inferior, no colisiona con chatbot a la derecha)
  function injectWhatsAppFab() {
    if (document.querySelector('.pm-wa-fab') || location.pathname.indexOf('/admin') === 0) return;
    var a = document.createElement('a');
    a.className = 'pm-wa-fab';
    a.href = 'https://wa.me/34639284787?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20las%20pir%C3%A1mides%20Piramicasa';
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.setAttribute('aria-label', 'Escribir por WhatsApp a Piramicasa');
    a.innerHTML =
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>' +
      '<span class="pm-wa-fab-txt">WhatsApp directo</span>';
    document.body.appendChild(a);
  }

  // En páginas sin buscador en cabecera (ej. subpáginas estáticas o móvil), añadir acceso en el cajón móvil
  function enhanceMobileDrawer() {
    var drawer = document.querySelector('.pm-mobile-drawer');
    if (drawer && !drawer.querySelector('[data-pm-search-open]')) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.setAttribute('data-pm-search-open', '1');
      btn.style.cssText = 'display:flex;align-items:center;gap:8px;width:calc(100% - 32px);margin:0 16px 12px;padding:10px 14px;background:#FFFFFF;border:1px solid #D9CFB8;border-radius:999px;font:600 0.9rem Inter,sans-serif;color:#1F2A28;cursor:pointer';
      btn.innerHTML = '🔍 Buscar en toda la web…';
      drawer.insertBefore(btn, drawer.firstChild);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      injectWhatsAppFab();
      setTimeout(enhanceMobileDrawer, 900);
    });
  } else {
    injectWhatsAppFab();
    setTimeout(enhanceMobileDrawer, 900);
  }
})();
