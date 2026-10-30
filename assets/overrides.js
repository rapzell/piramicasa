/* Piramicasa — Content overrides
 * Aplica los cambios de texto que la clienta guarda desde el panel /admin
 * (Decap CMS -> content/overrides.json -> commit -> GitHub Pages).
 * Para cada item {original, es, en, pt, fr, de, ru, ar}:
 *   - en español: el texto "original" se sustituye por "es"
 *   - en otro idioma: si el item trae traducción, se sustituye la versión
 *     traducida actual (o el original si no la tenía); si no la trae,
 *     se conserva la traducción antigua.
 */
(function(){
  'use strict';
  var URL = '/piramicasa/content/overrides.json';
  var SKIP = ['SCRIPT','STYLE','NOSCRIPT','CODE','PRE','TEXTAREA','INPUT'];
  var data = null;
  var mapCache = null;

  function lang(){
    var l = null;
    try { l = localStorage.getItem('pm_lang'); } catch(e){}
    if(!l) l = document.documentElement.getAttribute('lang') || 'es';
    return String(l).toLowerCase().slice(0,2);
  }

  function buildMap(){
    var L = lang();
    var dict = (window.PM_I18N && window.PM_I18N[L]) || {};
    var m = {};
    (data.items || []).forEach(function(it){
      if(!it || !it.original) return;
      var val = null;
      if(L === 'es'){
        val = it.es || null;
        if(val) m[it.original] = val;
      } else {
        // en otros idiomas solo aplicamos si el item trae traducción propia
        if(it[L]){
          val = it[L];
          m[dict[it.original] || it.original] = val;  // texto traducido actual -> nuevo
          m[it.original] = val;                        // por si no estaba traducido
        }
      }
    });
    return m;
  }

  function apply(){
    if(!data) return;
    if(!mapCache || mapCache.lang !== lang()) mapCache = {lang: lang(), m: buildMap()};
    var M = mapCache.m;
    var keys = Object.keys(M).sort(function(a,b){return b.length-a.length});
    if(!keys.length) return;
    var LETTER = /[A-Za-zÁÉÍÓÚÜÑáéíóúüñÀ-öø-ÿА-яЁё]/;
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function(node){
        var p = node.parentNode;
        if(!p || SKIP.indexOf(p.tagName) !== -1) return NodeFilter.FILTER_REJECT;
        if(p.closest && p.closest('#pm-consent,#pm-lang-menu,.pm-logo,[translate="no"],.notranslate')) return NodeFilter.FILTER_REJECT;
        if(!node.textContent.trim()) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var node;
    while(node = walker.nextNode()){
      var t = node.textContent;
      var trimmed = t.trim();
      if(M[trimmed]){ node.textContent = t.replace(trimmed, M[trimmed]); continue; }
      for(var i=0;i<keys.length;i++){
        var k = keys[i];
        if(k.length < 12 || M[k] === k) continue;
        var idx = t.indexOf(k);
        if(idx === -1) continue;
        var before = idx>0 ? t.charAt(idx-1) : ' ';
        var after = idx+k.length < t.length ? t.charAt(idx+k.length) : ' ';
        if(!LETTER.test(before) && !LETTER.test(after)){
          node.textContent = t.substring(0, idx) + M[k] + t.substring(idx+k.length);
          break;
        }
      }
    }
  }

  var timer = null;
  function schedule(){
    if(timer) clearTimeout(timer);
    timer = setTimeout(apply, 120);
  }

  /* modo edición visual: si la clienta abrió la web desde el panel
   * (?pm_edit=1, flag en sessionStorage, o handoff localStorage
   * de un solo uso), cargar edit-mode.js */
  try {
    var editOn = sessionStorage.getItem('pm-edit') === '1' ||
      localStorage.getItem('pm-edit') === '1' ||
      (typeof URLSearchParams !== 'undefined' && new URLSearchParams(location.search).has('pm_edit'));
    var hand = null;
    try { hand = localStorage.getItem('pm-edit-handoff'); } catch(e1){}
    if (hand) {
      try { localStorage.removeItem('pm-edit-handoff'); } catch(e1){}
      try {
        var h = JSON.parse(hand);
        if (h && h.t && Date.now() - h.ts < 300000) {
          sessionStorage.setItem('pm-admin-token', h.t);
          sessionStorage.setItem('pm-edit', '1');
          editOn = true;
        }
      } catch(e1){}
    }
    if (editOn) {
      try { sessionStorage.setItem('pm-edit', '1'); } catch(e2){}
      try { localStorage.setItem('pm-edit', '1'); } catch(e2){}
      var es = document.createElement('script');
      es.src = '/piramicasa/assets/edit-mode.js?v=20261022a';
      es.defer = true;
      (document.body || document.documentElement).appendChild(es);
    }
  } catch(e){}

  fetch(URL, {cache:'no-store'})
    .then(function(r){ return r.ok ? r.json() : null; })
    .then(function(j){
      data = j || {items:[]};
      if(document.readyState === 'loading'){
        document.addEventListener('DOMContentLoaded', apply);
      }
      apply();
      var deb;
      var obs = new MutationObserver(function(){
        clearTimeout(deb); deb = setTimeout(schedule, 300);
      });
      obs.observe(document.documentElement, {childList:true, subtree:true});
      // re-apply when language changes (i18n reloads page, but keep safe)
      var orig = window.PM_setLang;
      window.PM_setLang = function(){ mapCache = null; if(orig) return orig.apply(this, arguments); };
    })
    .catch(function(){ /* sin overrides: nada que hacer */ });
})();

/* pm-hash-scroll v4 */
(function(){
var cur=null,lastHash="";
function offY(){var h=document.querySelector(".pm-header")||document.querySelector("header");return ((h&&h.offsetHeight)||80)+14}
function fixUrl(id){
  try{
    if(location.hash==="#"+id)return;
    history.replaceState(history.state,"",location.pathname+location.search+"#"+id);
  }catch(e){}
}
function watch(id){
  if(!id)return;
  if(cur){cur.stop=true;cur=null}
  var w={stop:false};cur=w;
  var stable=0,n=0,urlDone=false;
  function cancel(){w.stop=true}
  window.addEventListener("wheel",cancel,{once:true,passive:true});
  window.addEventListener("touchmove",cancel,{once:true,passive:true});
  var t=setInterval(function(){
    if(w.stop||++n>60){clearInterval(t);if(cur===w)cur=null;return}
    var el=document.getElementById(id);
    if(!el)return;
    if(!urlDone){urlDone=true;fixUrl(id)}
    var anchor=el.querySelector(".pm-label")||el.querySelector("h1,h2")||el;
    var ty=0;
    try{var m=getComputedStyle(anchor).transform;if(m&&m!=="none")ty=(new DOMMatrixReadOnly(m)).m42||0}catch(e){}
    var d=anchor.getBoundingClientRect().top-ty-offY();
    if(Math.abs(d)>24){
      stable=0;
      try{window.scrollTo({top:anchor.getBoundingClientRect().top-ty+window.scrollY-offY(),behavior:"smooth"})}
      catch(e){el.scrollIntoView()}
    }
    else if(++stable>=4&&n>=20){clearInterval(t);if(cur===w)cur=null}
  },300);
}
function pendingFlag(){
  var id=null;
  try{
    var v=sessionStorage.getItem("pm-h");
    if(v){
      sessionStorage.removeItem("pm-h");
      var p=v.split("|"),ts=+p[1]||0;
      if(Date.now()-ts<60000)id=p[0];
    }
  }catch(e){}
  return id;
}
function checkHash(){
  var h="";try{h=decodeURIComponent(location.hash||"")}catch(e){}
  if(h.length<2){
    var pid=pendingFlag();
    if(pid&&pid!==lastHash){lastHash="#"+pid;watch(pid)}
    return;
  }
  if(h===lastHash)return;
  lastHash=h;watch(h.slice(1));
}
window.addEventListener("hashchange",checkHash);
window.addEventListener("popstate",function(){lastHash="";setTimeout(checkHash,80);setTimeout(checkHash,600)});
window.addEventListener("load",function(){setTimeout(checkHash,150)});
document.addEventListener("click",function(e){
  var a=e.target&&e.target.closest?e.target.closest("a[href]"):null;
  if(!a)return;
  var h="";
  try{h=a.hash||""}catch(_){}
  if(!h){var g=a.getAttribute("href")||"";var i=g.indexOf("#");if(i>-1)h=g.slice(i)}
  if(h.length<2)return;
  var id="";try{id=decodeURIComponent(h.slice(1))}catch(_){id=h.slice(1)}
  if(!id)return;
  lastHash="#"+id;
  try{sessionStorage.setItem("pm-h",id+"|"+Date.now())}catch(_){}
  setTimeout(function(){watch(id)},120);
  setTimeout(function(){watch(id)},700);
},true);
setInterval(checkHash,400);
if(location.hash)setTimeout(checkHash,200);
})();
