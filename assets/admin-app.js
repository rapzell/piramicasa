/* Piramicasa — Panel de administración (textos y artículos)
 * Dos modos:
 *  - directo: el token de GitHub va cifrado en PM_ADMIN_VAULT; la contraseña
 *    del panel lo descifra en el navegador (PBKDF2 600k + AES-GCM-256) y se
 *    llama a api.github.com directamente. Sin servidor.
 *  - servidor: si PM_ADMIN_API apunta a un worker propio, se usa su API.
 */
(function(){
  'use strict';
  var API = window.PM_ADMIN_API || '';
  var VAULT = window.PM_ADMIN_VAULT || null;
  var DIRECT = !API && !!VAULT;
  var PW_KEY = 'pm-admin-pw';
  var TOK_KEY = 'pm-admin-token';
  var REPO = 'rapzell/piramicasa';
  var BRANCH = 'gh-pages';
  var GH = 'https://api.github.com';
  var FILES = { textos: 'content/overrides.json', articulos: 'content/articles.json' };
  var state = { overrides: {items:[], sha:null}, articles: {items:[], sha:null}, editing: -1 };
  var TOKEN = null;
  var $ = function(id){ return document.getElementById(id); };

  function pw(){ try { return sessionStorage.getItem(PW_KEY) || ''; } catch(e){ return ''; } }
  function setPw(v){ try { sessionStorage.setItem(PW_KEY, v); } catch(e){} }

  /* ---------- descifrado del token (modo directo) ---------- */
  function b64(s){ return Uint8Array.from(atob(s), function(c){return c.charCodeAt(0);}); }
  function unlock(password){
    var blob = b64(VAULT.ct);
    var ct = blob.slice(0, -16), tag = blob.slice(-16);
    var both = new Uint8Array(ct.length + tag.length);
    both.set(ct); both.set(tag, ct.length);
    return crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveKey'])
      .then(function(k){
        return crypto.subtle.deriveKey(
          {name:'PBKDF2', salt: b64(VAULT.salt), iterations: 600000, hash:'SHA-256'},
          k, {name:'AES-GCM', length:256}, false, ['decrypt']);
      })
      .then(function(key){
        return crypto.subtle.decrypt({name:'AES-GCM', iv: b64(VAULT.iv)}, key, both.buffer);
      })
      .then(function(buf){ return new TextDecoder().decode(buf); });
  }

  /* ---------- capa API ---------- */
  function ghApi(path, init){
    init = init || {};
    init.headers = Object.assign({
      'Authorization': 'Bearer ' + TOKEN,
      'Accept': 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28'
    }, init.headers || {});
    return fetch(GH + path, init).then(function(r){
      return r.json().catch(function(){ return {}; }).then(function(j){
        if (!r.ok && r.status !== 404) throw new Error(j.message || ('GitHub HTTP ' + r.status));
        return { status: r.status, data: j };
      });
    });
  }
  function b64u(str){
    var bytes = new TextEncoder().encode(str), bin = '';
    for (var i=0;i<bytes.length;i++) bin += String.fromCharCode(bytes[i]);
    return btoa(bin);
  }

  function apiLogin(){
    if (DIRECT) {
      return ghApi('/user').then(function(r){
        if (r.status !== 200) throw new Error('Token no válido');
        return {ok:true};
      });
    }
    return fetch(API + '/login', {method:'POST', headers:{'Authorization':'Bearer '+pw(),'Content-Type':'application/json'}, body:'{}'})
      .then(function(r){ return r.json().then(function(j){ if(!r.ok) throw new Error(j.error||'Error'); return j; }); });
  }
  function getFile(which){
    var fp = FILES[which];
    var done = function(j, sha){
      var p; try { p = JSON.parse(j || '{"items":[]}'); } catch(e){ p = {items:[]}; }
      if (!p.items) p.items = [];
      state[which === 'textos' ? 'overrides' : 'articles'] = { items: p.items, sha: sha };
    };
    if (DIRECT) {
      return ghApi('/repos/' + REPO + '/contents/' + encodeURIComponent(fp) + '?ref=' + BRANCH)
        .then(function(r){
          if (r.status === 404) return done('', null);
          var raw = r.data.content ? atob(r.data.content.replace(/\n/g,'')) : '';
          var bytes = Uint8Array.from(raw, function(c){return c.charCodeAt(0);});
          return done(new TextDecoder().decode(bytes), r.data.sha);
        });
    }
    return fetch(API + '/api/file?path=' + encodeURIComponent(fp), {headers:{'Authorization':'Bearer '+pw()}})
      .then(function(r){ return r.json().then(function(j){ if(!r.ok) throw new Error(j.error||'Error'); return j; }); })
      .then(function(j){ return done(j.content, j.sha); });
  }
  function putFile(which, msg){
    var s = state[which === 'textos' ? 'overrides' : 'articles'];
    var content = JSON.stringify({items: s.items}, null, 2);
    if (DIRECT) {
      return ghApi('/repos/' + REPO + '/contents/' + encodeURIComponent(FILES[which]), {
        method: 'PUT',
        body: JSON.stringify({ message: msg, content: b64u(content), sha: s.sha, branch: BRANCH })
      }).then(function(r){ s.sha = r.data.content && r.data.content.sha; });
    }
    return fetch(API + '/api/file', {method:'PUT', headers:{'Authorization':'Bearer '+pw(),'Content-Type':'application/json'},
      body: JSON.stringify({path: FILES[which], content: content, sha: s.sha, message: msg})})
      .then(function(r){ return r.json().then(function(j){ if(!r.ok) throw new Error(j.error||'Error'); s.sha = j.sha; }); });
  }
  function upload(name, dataUrl){
    var safe = String(name||'').toLowerCase().replace(/[^a-z0-9._-]+/g,'-');
    if (!/\.(png|jpe?g|webp|gif|svg)$/.test(safe)) return Promise.reject(new Error('Tipo de imagen no válido'));
    var fp = 'assets/uploads/' + Date.now() + '-' + safe;
    var b64data = String(dataUrl||'').replace(/^data:[^,]+,/, '');
    if (DIRECT) {
      return ghApi('/repos/' + REPO + '/contents/' + encodeURIComponent(fp), {
        method: 'PUT',
        body: JSON.stringify({ message:'Subida de imagen desde el panel', content: b64data, branch: BRANCH })
      }).then(function(){ return {path:'/piramicasa/' + fp}; });
    }
    return fetch(API + '/api/upload', {method:'POST', headers:{'Authorization':'Bearer '+pw(),'Content-Type':'application/json'},
      body: JSON.stringify({name: safe, data: dataUrl})})
      .then(function(r){ return r.json().then(function(j){ if(!r.ok) throw new Error(j.error||'Error'); return j; }); });
  }

  function esc(s){ return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
  function status(el, msg, ok){ el.textContent = msg; el.className = 'pm-status ' + (ok ? 'ok' : 'err'); }

  /* ---------- LOGIN ---------- */
  function showApp(){
    $('pm-login').style.display = 'none';
    $('pm-app').style.display = 'block';
    loadAll();
  }
  $('pm-login-form').addEventListener('submit', function(e){
    e.preventDefault();
    var btn = $('pm-login-btn'), err = $('pm-login-err');
    btn.disabled = true; err.textContent = 'Verificando…';
    var password = $('pm-pw').value;
    if (DIRECT) {
      unlock(password)
        .then(function(t){ TOKEN = t; setPw(password); try{sessionStorage.setItem(TOK_KEY, t);}catch(e){} })
        .then(apiLogin).then(function(){ err.textContent=''; showApp(); })
        .catch(function(){ err.textContent = 'Contraseña incorrecta'; setPw(''); TOKEN = null; })
        .then(function(){ btn.disabled = false; });
    } else {
      setPw(password);
      apiLogin().then(function(){ err.textContent=''; showApp(); })
        .catch(function(x){ err.textContent = x.message; setPw(''); })
        .then(function(){ btn.disabled = false; });
    }
  });
  $('pm-edit-site').addEventListener('click', function(){
    if (TOKEN) { try{sessionStorage.setItem(TOK_KEY, TOKEN);}catch(e){} }
    // handoff a la pestaña nueva: sessionStorage no cruza pestañas,
    // así que pasamos el token por localStorage con caducidad de 5 min
    // (edit-mode lo mueve a sessionStorage y lo borra de localStorage)
    if (TOKEN) { try{ localStorage.setItem('pm-edit-handoff', JSON.stringify({t:TOKEN, ts:Date.now()})); }catch(e){} }
    try{ sessionStorage.setItem('pm-edit', '1'); localStorage.setItem('pm-edit', '1'); }catch(e){}
    window.open('/piramicasa/?pm_edit=1', '_blank');
  });
  $('pm-logout').addEventListener('click', function(){ setPw(''); TOKEN = null; try{sessionStorage.removeItem(TOK_KEY);sessionStorage.removeItem('pm-edit');}catch(e){} location.reload(); });
  if (pw() && DIRECT) {
    unlock(pw()).then(function(t){ TOKEN = t; try{sessionStorage.setItem(TOK_KEY, t);}catch(e){} }).then(apiLogin).then(showApp)
      .catch(function(){ setPw(''); TOKEN = null; });
  } else if (pw()) {
    apiLogin().then(showApp).catch(function(){ setPw(''); });
  }

  /* ---------- TABS ---------- */
  document.querySelectorAll('.pm-tab').forEach(function(t){
    t.addEventListener('click', function(){
      document.querySelectorAll('.pm-tab').forEach(function(x){x.classList.remove('on');});
      document.querySelectorAll('.pm-panel').forEach(function(x){x.classList.remove('on');});
      t.classList.add('on');
      $('pm-panel-' + t.dataset.tab).classList.add('on');
    });
  });

  /* ---------- ARTÍCULOS ---------- */
  function slugify(s){ return String(s||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'').slice(0,60); }
  function renderArts(){
    var list = $('pm-art-list');
    list.innerHTML = state.articles.items.map(function(a, i){
      return '<div class="pm-row"><div class="pm-row-head"><span class="t">'+esc(a.title||'(sin título)')+
        (a.date?' <span style="font-weight:400;color:#8A817A">· '+esc(a.date)+'</span>':'')+'</span>' +
        '<button class="pm-btn pm-btn-ghost" data-act="edit" type="button" style="font-size:.78rem;padding:7px 12px">Editar</button>' +
        '<button class="pm-btn pm-btn-danger" data-act="del" type="button">Eliminar</button></div></div>';
    }).join('') || '<p class="pm-hint">Todavía no hay artículos.</p>';
    list.querySelectorAll('.pm-row').forEach(function(row, i){
      row.querySelector('[data-act="edit"]').addEventListener('click', function(){ editArt(i); });
      row.querySelector('[data-act="del"]').addEventListener('click', function(){
        if (!confirm('¿Eliminar este artículo?')) return;
        state.articles.items.splice(i, 1); saveArts();
      });
    });
  }
  function editArt(i){
    state.editing = i;
    var a = state.articles.items[i] || {};
    $('pm-art-title').value = a.title || '';
    $('pm-art-slug').value = a.slug || '';
    $('pm-art-date').value = a.date || new Date().toISOString().slice(0,10);
    $('pm-art-excerpt').value = a.excerpt || '';
    $('pm-art-image').value = a.image || '';
    $('pm-art-body').value = a.body || '';
    $('pm-art-form').classList.add('on');
    $('pm-art-title').focus();
  }
  $('pm-art-new').addEventListener('click', function(){ editArt(-1); });
  $('pm-art-cancel').addEventListener('click', function(){ $('pm-art-form').classList.remove('on'); });
  $('pm-art-title').addEventListener('input', function(){
    if (state.editing === -1) $('pm-art-slug').value = slugify($('pm-art-title').value);
  });
  function saveArts(){
    var st = $('pm-art-status');
    status(st, 'Publicando…', true);
    putFile('articulos', 'Artículos actualizados desde el panel')
      .then(function(){ status(st, 'Publicado ✓ visible en ~1 minuto', true); renderArts(); $('pm-art-form').classList.remove('on'); })
      .catch(function(x){ status(st, 'Error: ' + x.message, false); });
  }
  $('pm-art-save').addEventListener('click', function(){
    var a = {
      title: $('pm-art-title').value.trim(),
      slug: $('pm-art-slug').value.trim() || slugify($('pm-art-title').value),
      date: $('pm-art-date').value,
      excerpt: $('pm-art-excerpt').value.trim(),
      image: $('pm-art-image').value.trim(),
      body: $('pm-art-body').value
    };
    if (!a.title || !a.slug) { alert('Faltan título o URL'); return; }
    if (state.editing === -1) state.articles.items.push(a); else state.articles.items[state.editing] = a;
    saveArts();
  });
  function uploadImg(cb){
    var f = $('pm-art-file'); f.value = '';
    f.onchange = function(){
      if (!f.files[0]) return;
      var fr = new FileReader();
      fr.onload = function(){
        status($('pm-art-status'), 'Subiendo imagen…', true);
        upload(f.files[0].name, fr.result)
          .then(function(r){ status($('pm-art-status'), 'Imagen subida ✓', true); cb(r.path); })
          .catch(function(x){ status($('pm-art-status'), 'Error: ' + x.message, false); });
      };
      fr.readAsDataURL(f.files[0]);
    };
    f.click();
  }
  $('pm-art-upload').addEventListener('click', function(){ uploadImg(function(p){ $('pm-art-image').value = p; }); });
  $('pm-art-imgbody').addEventListener('click', function(){ uploadImg(function(p){ insertMd('\n![imagen](' + p + ')\n'); }); });
  function insertMd(snippet){
    var ta = $('pm-art-body');
    var s = ta.selectionStart || ta.value.length;
    ta.value = ta.value.slice(0, s) + snippet + ta.value.slice(ta.selectionEnd || s);
    ta.focus();
  }
  document.querySelectorAll('.pm-toolbar [data-md]').forEach(function(b){
    b.addEventListener('click', function(){ insertMd(b.dataset.md + ' '); });
  });

  /* ---------- CARGA ---------- */
  function loadAll(){
    Promise.all([getFile('textos'), getFile('articulos')])
      .then(function(){ renderArts(); })
      .catch(function(x){
        status($('pm-art-status'), 'Error cargando datos: ' + x.message, false);
      });
  }
})();
