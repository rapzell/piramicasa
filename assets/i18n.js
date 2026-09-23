/* Piramicasa i18n — Language detection, translation & switcher
 * Detects navigator.language, applies translations via DOM,
 * provides a language switcher in the header.
 * Languages: es (default), en, pt, fr, de, ru
 */
(function(){
  'use strict';

  var SUPPORTED = ['es','en','pt','fr','de','ru'];
  var DEFAULT = 'es';
  var STORAGE_KEY = 'pm_lang';
  // Surrogate pairs for flag emojis (works in all browsers, no ES6 needed)
  var FLAGS = {
    es:'\uD83C\uDDEA\uD83C\uDDF8', // 🇪🇸
    en:'\uD83C\uDDEC\uD83C\uDDE7', // 🇬🇧
    pt:'\uD83C\uDDF5\uD83C\uDDF9', // 🇵🇹
    fr:'\uD83C\uDDEB\uD83C\uDDF7', // 🇫🇷
    de:'\uD83C\uDDE9\uD83C\uDDEA', // 🇩🇪
    ru:'\uD83C\uDDF7\uD83C\uDDFA'  // 🇷🇺
  };
  var NAMES = {es:'Espa\u00f1ol',en:'English',pt:'Portugu\u00eas',fr:'Fran\u00e7ais',de:'Deutsch',ru:'\u0420\u0443\u0441\u0441\u043a\u0438\u0439'};

  function detect(){
    var stored = null;
    try{ stored = localStorage.getItem(STORAGE_KEY); }catch(e){}
    if(stored && SUPPORTED.indexOf(stored)!==-1) return stored;
    var langs = navigator.languages || [navigator.language||''];
    for(var i=0;i<langs.length;i++){
      var code = langs[i].toLowerCase().split('-')[0];
      if(SUPPORTED.indexOf(code)!==-1) return code;
    }
    return DEFAULT;
  }

  var current = detect();

  /* ---- DOM translation engine ----
   * T[key] = translation for current language.
   * We walk text nodes and replace exact matches.
   * For elements with data-i18n="key", we replace innerHTML/textContent.
   */
  function applyTranslations(){
    if(current===DEFAULT) return; // Spanish = source, no-op
    var T = window.PM_I18N && window.PM_I18N[current];
    if(!T) return;

    // data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var key = el.getAttribute('data-i18n');
      if(T[key]) el.textContent = T[key];
    });
    // data-i18n-html elements
    document.querySelectorAll('[data-i18n-html]').forEach(function(el){
      var key = el.getAttribute('data-i18n-html');
      if(T[key]) el.innerHTML = T[key];
    });
    // data-i18n-attr elements
    document.querySelectorAll('[data-i18n-attr]').forEach(function(el){
      var key = el.getAttribute('data-i18n-attr');
      var parts = key.split('|');
      if(parts.length===2 && T[parts[0]]) el.setAttribute(parts[1], T[parts[0]]);
    });

    // Text-node walk for common patterns (exact match on trimmed text)
    var skip = ['SCRIPT','STYLE','NOSCRIPT','CODE','PRE','TEXTAREA','INPUT'];
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function(node){
        var p = node.parentNode;
        if(!p || skip.indexOf(p.tagName)!==-1) return NodeFilter.FILTER_REJECT;
        if(!node.textContent.trim()) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var node;
    var replaces = 0;
    while(node = walker.nextNode()){
      var t = node.textContent.trim();
      if(T[t] && t !== T[t]){
        node.textContent = node.textContent.replace(t, T[t]);
        replaces++;
      }
    }
    if(replaces>0) console.log('[i18n] applied',replaces,'translations for',current);
  }

  /* ---- Language switcher UI ---- */
  function buildSwitcher(){
    var header = document.querySelector('.pm-header');
    if(!header) return;
    // Avoid duplicates
    if(document.getElementById('pm-lang-switcher')) return;

    var wrap = document.createElement('div');
    wrap.id = 'pm-lang-switcher';
    wrap.style.cssText = 'position:relative;display:inline-flex;align-items:center;margin-left:12px;';

    var btn = document.createElement('button');
    btn.id = 'pm-lang-btn';
    btn.setAttribute('aria-label','Select language');
    btn.setAttribute('aria-expanded','false');
    btn.style.cssText = 'background:none;border:1px solid rgba(255,255,255,.25);border-radius:6px;padding:4px 8px;cursor:pointer;font-size:1.2rem;line-height:1;color:var(--pm-crema);display:flex;align-items:center;gap:4px;';
    btn.innerHTML = FLAGS[current] + ' <span style="font-size:0.75rem">\u25bc</span>';

    var menu = document.createElement('div');
    menu.id = 'pm-lang-menu';
    menu.setAttribute('role','menu');
    menu.style.cssText = 'position:absolute;top:100%;right:0;margin-top:6px;background:var(--pm-verde-deep,#3D4A30);border:1px solid rgba(255,255,255,.15);border-radius:8px;box-shadow:0 8px 24px rgba(0,0,0,.3);display:none;min-width:160px;z-index:9999;padding:4px 0;';

    SUPPORTED.forEach(function(code){
      var item = document.createElement('button');
      item.setAttribute('role','menuitem');
      item.style.cssText = 'display:flex;align-items:center;gap:8px;width:100%;padding:8px 14px;background:none;border:none;color:'+(code===current?'var(--pm-oro,#C69C6D)':'var(--pm-crema,#F7F4F0)')+';cursor:pointer;font-size:0.9rem;text-align:left;';
      item.innerHTML = FLAGS[code] + ' ' + NAMES[code];
      if(code===current) item.style.fontWeight='600';
      item.addEventListener('click',function(){
        setLang(code);
      });
      menu.appendChild(item);
    });

    btn.addEventListener('click',function(e){
      e.stopPropagation();
      var open = menu.style.display==='block';
      menu.style.display = open?'none':'block';
      btn.setAttribute('aria-expanded', String(!open));
    });
    document.addEventListener('click',function(e){
      if(!wrap.contains(e.target)){ menu.style.display='none'; btn.setAttribute('aria-expanded','false'); }
    });
    document.addEventListener('keydown',function(e){
      if(e.key==='Escape'){ menu.style.display='none'; btn.setAttribute('aria-expanded','false'); }
    });

    wrap.appendChild(btn);
    wrap.appendChild(menu);

    // Insert after the nav, before the CTA button or at end of header-right
    var headerRight = header.querySelector('.pm-header-right') || header;
    var cta = headerRight.querySelector('.pm-cta, .pm-btn-primary, a[href*="contact"]');
    if(cta && cta.parentNode){
      cta.parentNode.insertBefore(wrap, cta);
    } else {
      headerRight.appendChild(wrap);
    }
  }

  /* ---- Language suggestion banner ---- */
  function showBanner(){
    if(current===DEFAULT) return;
    if(document.getElementById('pm-lang-banner')) return;
    var stored = null;
    try{ stored = localStorage.getItem(STORAGE_KEY); }catch(e){}
    if(stored) return; // already chosen

    var banner = document.createElement('div');
    banner.id = 'pm-lang-banner';
    banner.style.cssText = 'position:fixed;bottom:16px;left:50%;transform:translateX(-50%);background:var(--pm-verde-deep,#3D4A30);color:var(--pm-crema,#F7F4F0);padding:12px 20px;border-radius:10px;box-shadow:0 4px 16px rgba(0,0,0,.3);z-index:10000;display:flex;align-items:center;gap:12px;font-size:0.9rem;max-width:90vw;';
    var msg = {
      en:'This page is available in English. Switch?',
      pt:'Esta p\u00e1gina est\u00e1 dispon\u00edvel em Portugu\u00eas. Mudar?',
      fr:'Cette page est disponible en Fran\u00e7ais. Changer?',
      de:'Diese Seite ist auf Deutsch verf\u00fcgbar. Wechseln?',
      ru:'\u042d\u0442\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u043d\u0430 \u0440\u0443\u0441\u0441\u043a\u043e\u043c. \u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0438\u0442\u044c?'
    };
    banner.innerHTML = '<span>'+(msg[current]||msg.en)+'</span>';
    var btnYes = document.createElement('button');
    btnYes.textContent = {en:'Yes',pt:'Sim',fr:'Oui',de:'Ja',ru:'\u0414\u0430'}[current]||'Yes';
    btnYes.style.cssText = 'background:var(--pm-oro,#C69C6D);color:var(--pm-verde-deep,#3D4A30);border:none;padding:6px 14px;border-radius:6px;cursor:pointer;font-weight:600;font-size:0.85rem;';
    btnYes.addEventListener('click',function(){
      setLang(current);
      banner.remove();
    });
    var btnNo = document.createElement('button');
    btnNo.textContent = {en:'No, stay in Spanish',pt:'N\u00e3o, ficar em espanhol',fr:'Non, rester en espagnol',de:'Nein, auf Spanisch bleiben',ru:'\u041d\u0435\u0442, \u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043d\u0430 \u0438\u0441\u043f\u0430\u043d\u0441\u043a\u043e\u043c'}[current]||'No';
    btnNo.style.cssText = 'background:none;color:var(--pm-crema,#F7F4F0);border:1px solid rgba(255,255,255,.3);padding:6px 14px;border-radius:6px;cursor:pointer;font-size:0.85rem;';
    btnNo.addEventListener('click',function(){
      try{ localStorage.setItem(STORAGE_KEY,'es'); }catch(e){}
      banner.remove();
    });
    banner.appendChild(btnYes);
    banner.appendChild(btnNo);
    document.body.appendChild(banner);
    setTimeout(function(){ if(banner.parentNode) banner.remove(); }, 15000);
  }

  function setLang(code){
    if(SUPPORTED.indexOf(code)===-1) return;
    try{ localStorage.setItem(STORAGE_KEY,code); }catch(e){}
    current = code;
    // Update switcher button
    var btn = document.getElementById('pm-lang-btn');
    if(btn) btn.innerHTML = FLAGS[code] + ' <span style="font-size:0.75rem">\u25bc</span>';
    // Rebuild menu
    var menu = document.getElementById('pm-lang-menu');
    if(menu){
      var items = menu.querySelectorAll('button');
      items.forEach(function(it,i){
        var c = SUPPORTED[i];
        it.style.color = c===current?'var(--pm-oro,#C69C6D)':'var(--pm-crema,#F7F4F0)';
        it.style.fontWeight = c===current?'600':'400';
      });
      menu.style.display='none';
    }
    applyTranslations();
  }

  /* ---- Init ---- */
  function init(){
    buildSwitcher();
    applyTranslations();
    showBanner();
    // Re-apply after React hydration / mutations
    var debounce;
    var observer = new MutationObserver(function(){
      clearTimeout(debounce);
      debounce = setTimeout(function(){
        applyTranslations();
      }, 300);
    });
    observer.observe(document.body, {childList:true,subtree:true,characterData:true});
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',init);
  } else {
    init();
  }
})();
