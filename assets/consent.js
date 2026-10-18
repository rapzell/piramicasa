/* Piramicasa — Gestor de consentimiento de cookies (CMP ligero)
 * Bloquea Google Tag Manager hasta que el usuario acepta cookies de analítica.
 * Cumple ePrivacy/RGPD: consentimiento previo, explícito, granular y revocable.
 * El estado se guarda en localStorage 'pm-consent-v1': {a:bool, ts:number}
 */
(function(){
  'use strict';
  var KEY = 'pm-consent-v1';
  var GTM_ID = 'GTM-MPS65G9X';

  var T = {
    es:{title:'Tu privacidad',text:'Utilizamos cookies propias necesarias para el funcionamiento de la web y, solo con tu consentimiento, cookies de analítica (Google Analytics) para mejorar nuestros contenidos. Puedes aceptar, rechazar o configurar tu elección.',accept:'Aceptar todas',reject:'Rechazar',config:'Configurar',save:'Guardar preferencias',nec:'Necesarias',necD:'Imprescindibles para el funcionamiento básico de la web (sesión de acceso, preferencias). No requieren consentimiento.',always:'Siempre activas',ana:'Analítica',anaD:'Google Tag Manager / Google Analytics. Miden el uso de la web de forma anónima. Solo se activan si las aceptas.',note:'Puedes cambiar o retirar tu consentimiento en cualquier momento desde el enlace «Configuración de cookies» del pie de página.',policy:'Más información en nuestra política de cookies',apply:'Los cambios se aplican en la próxima carga de página.',open:'Configuración de cookies'},
    en:{title:'Your privacy',text:'We use our own cookies required for the website to work and, only with your consent, analytics cookies (Google Analytics) to improve our content. You can accept, reject or configure your choice.',accept:'Accept all',reject:'Reject',config:'Configure',save:'Save preferences',nec:'Necessary',necD:'Essential for basic website operation (access session, preferences). They do not require consent.',always:'Always on',ana:'Analytics',anaD:'Google Tag Manager / Google Analytics. They measure website usage anonymously. They only activate if you accept them.',note:'You can change or withdraw your consent at any time from the "Cookie settings" link in the footer.',policy:'More information in our cookie policy',apply:'Changes will apply on the next page load.',open:'Cookie settings'},
    pt:{title:'A sua privacidade',text:'Utilizamos cookies próprios necessários ao funcionamento do site e, apenas com o seu consentimento, cookies de análise (Google Analytics) para melhorar os nossos conteúdos. Pode aceitar, recusar ou configurar a sua escolha.',accept:'Aceitar todas',reject:'Recusar',config:'Configurar',save:'Guardar preferências',nec:'Necessárias',necD:'Essenciais para o funcionamento básico do site (sessão de acesso, preferências). Não requerem consentimento.',always:'Sempre ativas',ana:'Análise',anaD:'Google Tag Manager / Google Analytics. Medem a utilização do site de forma anónima. Só são ativadas se as aceitar.',note:'Pode alterar ou retirar o seu consentimento a qualquer momento a partir do link «Configuração de cookies» no rodapé.',policy:'Mais informação na nossa política de cookies',apply:'As alterações aplicam-se no próximo carregamento da página.',open:'Configuração de cookies'},
    fr:{title:'Votre vie privée',text:'Nous utilisons des cookies propres nécessaires au fonctionnement du site et, uniquement avec votre consentement, des cookies d’analyse (Google Analytics) pour améliorer nos contenus. Vous pouvez accepter, refuser ou configurer votre choix.',accept:'Tout accepter',reject:'Refuser',config:'Configurer',save:'Enregistrer',nec:'Nécessaires',necD:'Essentiels au fonctionnement de base du site (session d’accès, préférences). Ils ne nécessitent pas de consentement.',always:'Toujours actifs',ana:'Analyse',anaD:'Google Tag Manager / Google Analytics. Mesurent l’utilisation du site de façon anonyme. Ils ne s’activent que si vous les acceptez.',note:'Vous pouvez modifier ou retirer votre consentement à tout moment via le lien « Paramètres des cookies » en pied de page.',policy:'Plus d’informations dans notre politique de cookies',apply:'Les changements s’appliqueront au prochain chargement de page.',open:'Paramètres des cookies'},
    de:{title:'Ihre Privatsphäre',text:'Wir verwenden eigene, für den Betrieb der Website notwendige Cookies und – nur mit Ihrer Einwilligung – Analyse-Cookies (Google Analytics) zur Verbesserung unserer Inhalte. Sie können akzeptieren, ablehnen oder Ihre Auswahl konfigurieren.',accept:'Alle akzeptieren',reject:'Ablehnen',config:'Konfigurieren',save:'Auswahl speichern',nec:'Notwendig',necD:'Für den Grundbetrieb der Website unverzichtbar (Zugangssitzung, Einstellungen). Sie benötigen keine Einwilligung.',always:'Immer aktiv',ana:'Analyse',anaD:'Google Tag Manager / Google Analytics. Messen die Website-Nutzung anonym. Sie werden nur aktiviert, wenn Sie zustimmen.',note:'Sie können Ihre Einwilligung jederzeit über den Link „Cookie-Einstellungen“ im Footer ändern oder widerrufen.',policy:'Weitere Informationen in unserer Cookie-Richtlinie',apply:'Änderungen werden beim nächsten Laden der Seite wirksam.',open:'Cookie-Einstellungen'},
    ru:{title:'Ваша конфиденциальность',text:'Мы используем собственные файлы cookie, необходимые для работы сайта, и — только с вашего согласия — аналитические cookie (Google Analytics) для улучшения содержимого. Вы можете принять, отклонить или настроить выбор.',accept:'Принять все',reject:'Отклонить',config:'Настроить',save:'Сохранить выбор',nec:'Необходимые',necD:'Обязательны для базовой работы сайта (сеанс доступа, настройки). Согласие не требуется.',always:'Всегда активны',ana:'Аналитика',anaD:'Google Tag Manager / Google Analytics. Измеряют использование сайта анонимно. Активируются только при вашем согласии.',note:'Вы можете изменить или отозвать согласие в любое время по ссылке «Настройки cookie» в подвале сайта.',policy:'Подробнее в нашей политике cookie',apply:'Изменения применятся при следующей загрузке страницы.',open:'Настройки cookie'},
    ar:{title:'خصوصيتك',text:'نستخدم ملفات تعريف ارتباط خاصة ضرورية لعمل الموقع، وفقط بموافقتك ملفات تحليلية (Google Analytics) لتحسين محتوانا. يمكنك القبول أو الرفض أو تخصيص اختيارك.',accept:'قبول الكل',reject:'رفض',config:'إعدادات',save:'حفظ التفضيلات',nec:'ضرورية',necD:'أساسية لعمل الموقع (جلسة الدخول، التفضيلات). لا تتطلب موافقة.',always:'مفعّلة دائمًا',ana:'تحليلية',anaD:'Google Tag Manager / Google Analytics. تقيس استخدام الموقع بشكل مجهول. لا تُفعَّل إلا إذا قبلتها.',note:'يمكنك تغيير موافقتك أو سحبها في أي وقت من رابط «إعدادات ملفات تعريف الارتباط» في تذييل الصفحة.',policy:'مزيد من المعلومات في سياسة ملفات تعريف الارتباط',apply:'تُطبَّق التغييرات عند التحميل التالي للصفحة.',open:'إعدادات ملفات تعريف الارتباط'}
  };

  function lang(){
    var l = null;
    try { l = localStorage.getItem('pm_lang'); } catch(e){}
    if(!l) l = document.documentElement.getAttribute('lang') || 'es';
    l = String(l).toLowerCase().slice(0,2);
    return T[l] ? l : 'es';
  }

  function read(){
    try {
      var s = JSON.parse(localStorage.getItem(KEY) || 'null');
      return (s && typeof s.a === 'boolean') ? s : null;
    } catch(e){ return null; }
  }
  function save(a){
    try { localStorage.setItem(KEY, JSON.stringify({a:!!a, ts:Date.now()})); } catch(e){}
  }

  function injectGTM(){
    if (window.__pmGtmLoaded) return;
    window.__pmGtmLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({'gtm.start': new Date().getTime(), event:'gtm.js'});
    var j = document.createElement('script');
    j.async = true;
    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + GTM_ID + '&l=dataLayer';
    var f = document.getElementsByTagName('script')[0];
    (f && f.parentNode) ? f.parentNode.insertBefore(j, f) : document.head.appendChild(j);
  }

  var CSS = '#pm-consent{position:fixed;left:0;right:0;bottom:0;z-index:100000;background:#fff;border-top:1px solid #E0D9D0;box-shadow:0 -8px 30px rgba(0,0,0,.12);font-family:Inter,system-ui,sans-serif;color:#2B2B2B;animation:pmConsentUp .4s ease}' +
    '@keyframes pmConsentUp{from{transform:translateY(100%)}to{transform:translateY(0)}}' +
    '.pm-consent-in{max-width:1100px;margin:0 auto;padding:18px 20px;display:flex;flex-wrap:wrap;align-items:center;gap:14px}' +
    '.pm-consent-txt{flex:1 1 480px;min-width:260px}' +
    '.pm-consent-txt h2{margin:0 0 6px;font-family:"Playfair Display",serif;font-size:1.05rem;color:#3D4A30}' +
    '.pm-consent-txt p{margin:0;font-size:.82rem;line-height:1.5;color:#4A4A4A}' +
    '.pm-consent-txt a{color:#5A6B4A;text-decoration:underline}' +
    '.pm-consent-btns{display:flex;gap:8px;flex-wrap:wrap}' +
    '.pm-consent-btns button{cursor:pointer;border-radius:999px;padding:9px 18px;font-size:.82rem;font-weight:600;font-family:inherit;transition:all .2s}' +
    '.pm-cb-acc{background:#3D4A30;color:#fff;border:1px solid #3D4A30}' +
    '.pm-cb-acc:hover{background:#2c3623}' +
    '.pm-cb-rej{background:#fff;color:#3D4A30;border:1px solid #c8bfae}' +
    '.pm-cb-rej:hover{border-color:#3D4A30}' +
    '.pm-cb-cfg{background:transparent;color:#5A6B4A;border:none;text-decoration:underline;padding:9px 8px}' +
    '.pm-consent-cats{width:100%;display:none;margin-top:4px;border-top:1px solid #EDE7DE;padding-top:12px}' +
    '#pm-consent.pm-consent-open .pm-consent-cats{display:block}' +
    '.pm-consent-cat{display:flex;gap:12px;align-items:flex-start;padding:10px 0}' +
    '.pm-consent-cat input{margin-top:3px;accent-color:#3D4A30;width:18px;height:18px}' +
    '.pm-consent-cat b{display:block;font-size:.86rem;color:#2B2B2B}' +
    '.pm-consent-cat span{font-size:.78rem;color:#8A817A;line-height:1.4}' +
    '.pm-consent-note{width:100%;font-size:.72rem;color:#8A817A;margin:4px 0 0}' +
    '@media(max-width:640px){.pm-consent-in{padding:14px 14px calc(14px + env(safe-area-inset-bottom));gap:10px}.pm-consent-btns{width:100%}.pm-consent-btns button{flex:1;padding:10px 12px}}';

  var bar = null;

  function build(openConfig){
    if (bar) { if(openConfig) bar.classList.add('pm-consent-open'); return; }
    var t = T[lang()];
    var st = document.createElement('style');
    st.textContent = CSS;
    document.head.appendChild(st);

    bar = document.createElement('div');
    bar.id = 'pm-consent';
    bar.setAttribute('role','dialog');
    bar.setAttribute('aria-label', t.title);
    var policyHref = '/piramicasa/es/terminos_y_condiciones_avisos_legales_derechos_de_autor.htm.html#cookies';
    bar.innerHTML =
      '<div class="pm-consent-in">' +
        '<div class="pm-consent-txt">' +
          '<h2>'+t.title+'</h2>' +
          '<p>'+t.text+' <a href="'+policyHref+'">'+t.policy+'</a>.</p>' +
        '</div>' +
        '<div class="pm-consent-btns">' +
          '<button type="button" class="pm-cb-acc" data-act="accept">'+t.accept+'</button>' +
          '<button type="button" class="pm-cb-rej" data-act="reject">'+t.reject+'</button>' +
          '<button type="button" class="pm-cb-cfg" data-act="config">'+t.config+'</button>' +
        '</div>' +
        '<div class="pm-consent-cats">' +
          '<label class="pm-consent-cat"><input type="checkbox" checked disabled><span><b>'+t.nec+' — '+t.always+'</b><span>'+t.necD+'</span></span></label>' +
          '<label class="pm-consent-cat"><input type="checkbox" id="pm-consent-ana"><span><b>'+t.ana+'</b><span>'+t.anaD+'</span></span></label>' +
          '<div class="pm-consent-btns">' +
            '<button type="button" class="pm-cb-acc" data-act="save">'+t.save+'</button>' +
            '<button type="button" class="pm-cb-rej" data-act="accept">'+t.accept+'</button>' +
          '</div>' +
          '<p class="pm-consent-note">'+t.note+' '+t.apply+'</p>' +
        '</div>' +
      '</div>';

    var cur = read();
    if (cur) { var chk = bar.querySelector('#pm-consent-ana'); if(chk) chk.checked = !!cur.a; }
    if (openConfig) bar.classList.add('pm-consent-open');

    bar.addEventListener('click', function(e){
      var b = e.target.closest('button[data-act]');
      if (!b) return;
      var act = b.getAttribute('data-act');
      if (act === 'config') {
        bar.classList.toggle('pm-consent-open');
      } else if (act === 'accept') {
        save(true); injectGTM(); close();
      } else if (act === 'reject') {
        save(false); close();
      } else if (act === 'save') {
        var c = bar.querySelector('#pm-consent-ana');
        var on = !!(c && c.checked);
        save(on); if(on) injectGTM(); close();
      }
    });
    document.body.appendChild(bar);
  }

  function close(){
    if (!bar) return;
    bar.style.transition = 'transform .3s ease';
    bar.style.transform = 'translateY(110%)';
    setTimeout(function(){ if(bar){ bar.remove(); bar=null; } }, 320);
  }

  // Reapertura desde cualquier enlace marcado (footer, página legal)
  document.addEventListener('click', function(e){
    var el = e.target.closest('[data-pm-consent-open]');
    if (el) { e.preventDefault(); build(true); }
  });
  window.PM_openConsent = function(){ build(true); };

  function init(){
    var cur = read();
    if (cur) {
      if (cur.a) injectGTM();
      return; // decisión previa: sin banner
    }
    build(false);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
