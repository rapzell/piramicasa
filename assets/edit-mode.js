/* Piramicasa — Modo edición visual
 * Con la sesión del panel iniciada (?pm_edit=1 o flag pm-edit en
 * sessionStorage), permite hacer clic sobre cualquier texto de la web real
 * y sustituirlo. Los cambios se acumulan y se publican en
 * content/overrides.json vía la API de GitHub (token descifrado en /admin).
 */
(function(){
  'use strict';
  var TOKEN = null;
  try { TOKEN = sessionStorage.getItem('pm-admin-token'); } catch(e){}

  var BAR_ID = 'pm-edit-bar', POP_ID = 'pm-edit-pop';
  var REPO = 'rapzell/piramicasa', BRANCH = 'gh-pages';
  var pending = [];            // {original, es}
  var pendingEls = new WeakSet(); // elementos ya marcados
  var armed = false;           // la web navega normal hasta pulsar "Editar"
  var SKIP = ['SCRIPT','STYLE','NOSCRIPT','TEXTAREA','INPUT','CODE','PRE','SVG','PATH','IMG','VIDEO','IFRAME','SELECT','OPTION'];
  // Solo texto de contenido: párrafos, listas, citas, celdas, descripciones.
  // Titulares (H*), navegación, enlaces, botones y nombres de secciones NO son editables.
  var TEXTY = ['P','LI','BLOCKQUOTE','TD','DT','DD','FIGCAPTION','Q','CITE'];
  var NO_ZONE = '#'+BAR_ID+',#'+POP_ID+',.pm-logo,[data-pm-consent-open],#pm-consent,.pm-chatbot-widget,header,nav,footer,.pm-header,.pm-nav,.pm-dropdown,.pm-footer,.pm-mobile-bar,.pm-mobile-drawer,.pm-mobile-overlay,#pm-lang-switcher,#pm-lang-banner,#pm-lang-menu,.pm-toolbar';

  /* ---------- toolbar ---------- */
  function bar(){
    var el = document.createElement('div');
    el.id = BAR_ID;
    el.innerHTML =
      '<style>#'+BAR_ID+'{position:fixed;bottom:18px;left:50%;transform:translateX(-50%);z-index:2147483000;background:rgba(61,74,48,.96);color:#F7F4F0;display:flex;align-items:center;gap:14px;padding:10px 18px;border-radius:16px;font:600 13px Inter,system-ui,sans-serif;box-shadow:0 10px 34px rgba(0,0,0,.35);backdrop-filter:blur(6px);max-width:94vw;white-space:nowrap}' +
      '#'+BAR_ID+' .pm-eb{display:flex;gap:8px}' +
      '#'+BAR_ID+' button{cursor:pointer;border:none;border-radius:8px;padding:7px 14px;font:600 12px Inter,sans-serif}' +
      '#'+BAR_ID+' .pm-pub{background:#C69C6D;color:#2B2B2B}' +
      '#'+BAR_ID+' .pm-arm{background:#B3261E;color:#fff;transition:all .2s}' +
      '#'+BAR_ID+' .pm-arm.on{background:#E03A2E;box-shadow:0 0 0 3px rgba(224,58,46,.45),0 0 16px rgba(224,58,46,.9)}' +
      '#'+BAR_ID+' .pm-exit{background:transparent;color:#F7F4F0;border:1px solid rgba(255,255,255,.4)}' +
      '#'+POP_ID+'{position:fixed;z-index:2147483001;background:#fff;border:1px solid #E0D9D0;border-radius:14px;box-shadow:0 18px 50px rgba(0,0,0,.28);padding:16px;width:min(420px,92vw);font-family:Inter,sans-serif}' +
      '#'+POP_ID+' label{display:block;font-size:.68rem;text-transform:uppercase;letter-spacing:.05em;color:#8A817A;margin:8px 0 3px}' +
      '#'+POP_ID+' textarea{width:100%;padding:9px 11px;border:1px solid #E0D9D0;border-radius:8px;font:400 .9rem Inter;min-height:64px;resize:vertical}' +
      '#'+POP_ID+' textarea:focus{outline:2px solid #C69C6D}' +
      '#'+POP_ID+' .pm-pops{display:flex;gap:8px;margin-top:12px}' +
      '#'+POP_ID+' button{flex:1;cursor:pointer;border:none;border-radius:8px;padding:10px;font:600 .82rem Inter}' +
      '#'+POP_ID+' .ok{background:#3D4A30;color:#fff}#'+POP_ID+' .no{background:#f0ece6;color:#4A4A4A}' +
      '.pm-edit-hover{outline:2px dashed #C69C6D !important;outline-offset:2px;cursor:pointer !important}' +
      '.pm-edit-done{outline:2px solid #5A6B4A !important;outline-offset:2px}</style>' +
      '<span>📝 <b>Modo edición</b> — pulsa «Editar» y luego clic en un texto</span>' +
      '<span class="pm-eb"><button class="pm-arm" type="button">✏️ Editar</button>' +
      '<button class="pm-pub" type="button">Publicar (0)</button>' +
      '<button class="pm-exit pm-gopanel" type="button">Panel</button>' +
      '<button class="pm-exit" type="button">Salir</button></span>';
    document.body.appendChild(el);
    // por si algo la quita tras inyectarla: re-anclar unos segundos
    var n = 0, iv = setInterval(function(){
      if(el.parentNode){ if(++n >= 6) clearInterval(iv); }
      else document.body.appendChild(el);
    }, 700);
    el.querySelector('.pm-arm').addEventListener('click', function(){
      armed = !armed;
      this.classList.toggle('on', armed);
      this.textContent = armed ? '🛑 Dejar de editar' : '✏️ Editar';
      if(!armed && lastHover){ lastHover.classList.remove('pm-edit-hover'); lastHover = null; }
    });
    el.querySelector('.pm-pub').addEventListener('click', publish);
    el.querySelector('.pm-gopanel').addEventListener('click', function(){
      location.href = '/piramicasa/admin/';
    });
    el.querySelector('.pm-exit:not(.pm-gopanel)').addEventListener('click', exit);
    return el;
  }

  function exit(){
    try{ sessionStorage.removeItem('pm-edit'); }catch(e){}
    try{ localStorage.removeItem('pm-edit'); }catch(e){}
    var b=document.getElementById(BAR_ID); if(b)b.remove();
    var p=document.getElementById(POP_ID); if(p)p.remove();
    document.removeEventListener('click', onClick, true);
    document.removeEventListener('mouseover', onOver, true);
    document.querySelectorAll('.pm-edit-hover,.pm-edit-done').forEach(function(x){x.classList.remove('pm-edit-hover','pm-edit-done');});
  }

  /* ---------- selección de texto ---------- */
  function pickEl(t){
    var el = t && t.nodeType === 1 ? t : t && t.parentElement;
    while(el && el !== document.body){
      if (SKIP.indexOf(el.tagName) !== -1) return null;
      if (el.closest(NO_ZONE)) return null;
      if (TEXTY.indexOf(el.tagName) !== -1){
        var txt = (el.textContent||'').trim();
        if (txt && txt.length <= 500) return el;
      }
      el = el.parentElement;
    }
    return null;
  }

  var lastHover = null;
  function onOver(e){
    if (!armed) return;
    var el = pickEl(e.target);
    if (lastHover && lastHover !== el) lastHover.classList.remove('pm-edit-hover');
    lastHover = el;
    if (el && !pendingEls.has(el)) el.classList.add('pm-edit-hover');
  }

  function onClick(e){
    if (e.target.closest('#'+BAR_ID+',#'+POP_ID)) return;
    if (!armed) return; // sin armar: la web navega como un usuario normal
    var el = pickEl(e.target);
    if (!el) return;
    e.preventDefault(); e.stopPropagation();
    openEditor(el);
  }

  /* ---------- popup editor ---------- */
  function openEditor(el){
    var old = document.getElementById(POP_ID); if(old) old.remove();
    var original = el.textContent.trim();
    var pop = document.createElement('div');
    pop.id = POP_ID;
    pop.innerHTML =
      '<label>Texto actual</label>' +
      '<textarea readonly>'+original.replace(/&/g,'&amp;').replace(/</g,'&lt;')+'</textarea>' +
      '<label>Nuevo texto</label>' +
      '<textarea id="pm-edit-new" placeholder="Escribe el nuevo texto…">'+original.replace(/&/g,'&amp;').replace(/</g,'&lt;')+'</textarea>' +
      '<div class="pm-pops"><button class="ok" type="button">Añadir a cambios</button>' +
      '<button class="no" type="button">Cancelar</button></div>';
    // posición junto al elemento
    var r = el.getBoundingClientRect();
    var top = Math.min(r.bottom + 10, window.innerHeight - 260);
    var left = Math.min(Math.max(r.left, 12), window.innerWidth - 440);
    pop.style.top = Math.max(top, 60) + 'px';
    pop.style.left = Math.max(left, 12) + 'px';
    document.body.appendChild(pop);
    pop.querySelector('#pm-edit-new').focus();
    pop.querySelector('.ok').addEventListener('click', function(){
      var nv = pop.querySelector('#pm-edit-new').value.trim();
      if (nv && nv !== original){
        for (var i=pending.length-1;i>=0;i--) if(pending[i].original===original) pending.splice(i,1);
        pending.push({original:original, es:nv});
        pendingEls.add(el); el.classList.remove('pm-edit-hover'); el.classList.add('pm-edit-done');
        el.textContent = nv; // previsualización inmediata
        var pub = document.querySelector('#'+BAR_ID+' .pm-pub');
        if(pub) pub.textContent = 'Publicar ('+pending.length+')';
      }
      pop.remove();
    });
    pop.querySelector('.no').addEventListener('click', function(){ pop.remove(); });
  }

  /* ---------- publicar en GitHub ---------- */
  function gh(path, init){
    init = init || {};
    init.headers = Object.assign({'Authorization':'Bearer '+TOKEN,'Accept':'application/vnd.github+json','X-GitHub-Api-Version':'2022-11-28'}, init.headers||{});
    return fetch('https://api.github.com'+path, init).then(function(r){
      return r.json().catch(function(){return{};}).then(function(j){
        if(!r.ok && r.status!==404) throw new Error(j.message||('HTTP '+r.status));
        return {status:r.status, data:j};
      });
    });
  }
  function b64u(s){var b=new TextEncoder().encode(s),o='';for(var i=0;i<b.length;i++)o+=String.fromCharCode(b[i]);return btoa(o);}
  function b64d(s){var r=atob(String(s).replace(/\n/g,'')),b=Uint8Array.from(r,function(c){return c.charCodeAt(0)});return new TextDecoder().decode(b);}

  function publish(){
    var pub = document.querySelector('#'+BAR_ID+' .pm-pub');
    if(!pending.length){ alert('No hay cambios pendientes.'); return; }
    pub.disabled = true; pub.textContent = 'Publicando…';
    var fp = 'content/overrides.json';
    gh('/repos/'+REPO+'/contents/'+encodeURIComponent(fp)+'?ref='+BRANCH)
      .then(function(r){
        var j = {items:[]};
        if(r.status===200){ try{ j=JSON.parse(b64d(r.data.content)); }catch(e){} }
        if(!j.items) j.items=[];
        pending.forEach(function(p){
          var hit=false;
          j.items.forEach(function(it){ if(it.original===p.original){ it.es=p.es; hit=true; } });
          if(!hit) j.items.push({original:p.original, es:p.es});
        });
        return gh('/repos/'+REPO+'/contents/'+encodeURIComponent(fp),{
          method:'PUT',
          body: JSON.stringify({message:'Edición visual desde el panel', content:b64u(JSON.stringify(j,null,2)), sha:r.status===200?r.data.sha:undefined, branch:BRANCH})
        });
      })
      .then(function(){
        pending.length = 0;
        pub.textContent = 'Publicar (0)'; pub.disabled = false;
        alert('✓ Cambios publicados. Visibles en la web en ~1 minuto.');
        document.querySelectorAll('.pm-edit-done').forEach(function(x){x.classList.remove('pm-edit-done');});
      })
      .catch(function(x){
        pub.disabled = false; pub.textContent = 'Publicar ('+pending.length+')';
        alert('Error al publicar: ' + x.message);
      });
  }

  /* ---------- arranque ---------- */
  function warn(msg){
    var d=document.createElement('div');
    d.style.cssText='position:fixed;top:14px;left:50%;transform:translateX(-50%);z-index:2147483002;background:#a33;color:#fff;padding:10px 18px;border-radius:10px;font:600 .82rem Inter;box-shadow:0 8px 24px rgba(0,0,0,.3)';
    d.textContent=msg; document.body.appendChild(d); setTimeout(function(){d.remove();},5000);
  }
  // Inyectar nodos ajenos mientras React hidrata provoca "client-side
  // exception": esperar a que el árbol deje de mutar antes de montar la barra.
  function whenSettled(cb){
    var root = document.getElementById('__next');
    if(!root){ cb(); return; }   // páginas legacy sin React: al instante
    var done = false, t, obs = null;
    function fire(){ if(done) return; done = true; if(obs) obs.disconnect(); cb(); }
    try {
      obs = new MutationObserver(function(){ clearTimeout(t); t = setTimeout(fire, 400); });
      obs.observe(root, {childList:true, subtree:true});
    } catch(e){}
    t = setTimeout(fire, 1200);       // DOM ya tranquilo / sin mutaciones
    setTimeout(fire, 2600);           // tope duro: nunca esperar más
  }

  function init(){
    var L='es'; try{L=(localStorage.getItem('pm_lang')||'es').slice(0,2);}catch(e){}
    if(L!=='es'){ warn('Modo edición: cambia el idioma a Español para editar textos'); return; }
    whenSettled(function(){
      var b = bar();
      if(!TOKEN){
        // sin sesión: mostrar la barra con aviso en vez de desaparecer en silencio
        var s = b.querySelector('span');
        if(s) s.innerHTML = '⚠️ <b>Sin sesión de edición</b> — abre la web desde «Editar la web» en /admin/';
        ['.pm-arm','.pm-pub'].forEach(function(q){var x=b.querySelector(q); if(x)x.style.display='none';});
        return;
      }
      document.addEventListener('mouseover', onOver, true);
      document.addEventListener('click', onClick, true);
    // propagar ?pm_edit=1 en los enlaces internos: si la pestaña pierde
    // sessionStorage/localStorage, la flag viaja en la propia URL
    document.addEventListener('click', function(e){
      var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
      if(!a) return;
      var h = a.getAttribute('href') || '';
      if(!h || h.charAt(0)==='#' || h.indexOf('pm_edit')!==-1) return;
      if(/^(https?:|mailto:|tel:|javascript:)/i.test(h)) return;
      a.setAttribute('href', h + (h.indexOf('?')>-1 ? '&' : '?') + 'pm_edit=1');
    }, true);
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
