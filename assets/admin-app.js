/* Piramicasa — Panel de administración (textos y artículos)
 * Habla con el Cloudflare Worker (_cms-setup/worker.js), que guarda los
 * cambios como commits en gh-pages usando un token que vive en el worker.
 * La clienta solo necesita la contraseña del panel.
 */
(function(){
  'use strict';
  var API = window.PM_ADMIN_API || '';
  var PW_KEY = 'pm-admin-pw';
  var FILES = { textos: 'content/overrides.json', articulos: 'content/articles.json' };
  var state = { overrides: {items:[], sha:null}, articles: {items:[], sha:null}, editing: -1 };
  var $ = function(id){ return document.getElementById(id); };

  function pw(){ try { return sessionStorage.getItem(PW_KEY) || ''; } catch(e){ return ''; } }
  function setPw(v){ try { sessionStorage.setItem(PW_KEY, v); } catch(e){} }

  function api(path, opts){
    opts = opts || {};
    opts.headers = Object.assign({ 'Authorization': 'Bearer ' + pw() }, opts.headers || {});
    if (opts.body && !opts.headers['Content-Type']) opts.headers['Content-Type'] = 'application/json';
    return fetch(API + path, opts).then(function(r){
      return r.json().catch(function(){ return {}; }).then(function(j){
        if (!r.ok) throw new Error(j.error || ('HTTP ' + r.status));
        return j;
      });
    });
  }
  function getFile(which){
    return api('/api/file?path=' + encodeURIComponent(FILES[which])).then(function(r){
      var j; try { j = JSON.parse(r.content || '{"items":[]}'); } catch(e){ j = {items:[]}; }
      if (!j.items) j.items = [];
      state[which === 'textos' ? 'overrides' : 'articles'] = { items: j.items, sha: r.sha };
    });
  }
  function putFile(which, msg){
    var s = state[which === 'textos' ? 'overrides' : 'articles'];
    return api('/api/file', {
      method: 'PUT',
      body: JSON.stringify({ path: FILES[which], content: JSON.stringify({items: s.items}, null, 2), sha: s.sha, message: msg })
    }).then(function(r){ s.sha = r.sha; });
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
    btn.disabled = true; err.textContent = '';
    setPw($('pm-pw').value);
    api('/login', {method:'POST', body:'{}'})
      .then(showApp)
      .catch(function(x){ err.textContent = x.message; setPw(''); })
      .then(function(){ btn.disabled = false; });
  });
  $('pm-logout').addEventListener('click', function(){ setPw(''); location.reload(); });
  if (pw()) {
    api('/login', {method:'POST', body:'{}'}).then(showApp).catch(function(){ setPw(''); });
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

  /* ---------- TEXTOS ---------- */
  var LANGS = [['es','Nuevo texto (español)'],['en','Inglés'],['pt','Portugués'],['fr','Francés'],['de','Alemán'],['ru','Ruso'],['ar','Árabe']];
  function renderTextos(){
    var list = $('pm-tx-list');
    list.innerHTML = state.overrides.items.map(function(it, i){
      var fields = '<div><label>Texto actual (tal cual aparece)</label><input data-k="original" value="'+esc(it.original)+'"></div>' +
        '<div><label>Nuevo texto (español)</label><input data-k="es" value="'+esc(it.es)+'"></div>';
      var langs = LANGS.slice(1).map(function(l){
        return '<div><label>'+l[1]+'</label><input data-k="'+l[0]+'" value="'+esc(it[l[0]])+'"></div>';
      }).join('');
      return '<div class="pm-row" data-i="'+i+'">' +
        '<div class="pm-row-head"><span class="t">'+esc(it.original || '(vacío)')+' → '+esc(it.es || '…')+'</span>' +
        '<button class="pm-more" type="button">+ idiomas</button>' +
        '<button class="pm-btn pm-btn-danger" type="button">Eliminar</button></div>' +
        '<div class="pm-row-fields">'+fields+'</div>' +
        '<div class="pm-langs">'+langs+'</div></div>';
    }).join('') || '<p class="pm-hint">Todavía no hay textos modificados.</p>';
  }
  function collectTextos(){
    document.querySelectorAll('#pm-tx-list .pm-row').forEach(function(row){
      var i = +row.dataset.i;
      row.querySelectorAll('input').forEach(function(inp){
        var k = inp.dataset.k;
        if (inp.value) state.overrides.items[i][k] = inp.value; else delete state.overrides.items[i][k];
      });
    });
  }
  $('pm-tx-list').addEventListener('click', function(e){
    var row = e.target.closest('.pm-row'); if(!row) return;
    if (e.target.classList.contains('pm-btn-danger')) {
      collectTextos(); state.overrides.items.splice(+row.dataset.i, 1); renderTextos();
    } else if (e.target.classList.contains('pm-more')) {
      row.classList.toggle('expanded');
    }
  });
  $('pm-tx-add').addEventListener('click', function(){
    collectTextos(); state.overrides.items.push({original:'', es:''}); renderTextos();
  });
  $('pm-tx-save').addEventListener('click', function(){
    var st = $('pm-tx-status'), btn = $('pm-tx-save');
    collectTextos();
    state.overrides.items = state.overrides.items.filter(function(it){ return it.original && it.es; });
    btn.disabled = true; status(st, 'Publicando…', true);
    putFile('textos', 'Cambios de texto desde el panel')
      .then(function(){ status(st, 'Publicado ✓ visible en ~1 minuto', true); renderTextos(); })
      .catch(function(x){ status(st, 'Error: ' + x.message, false); })
      .then(function(){ btn.disabled = false; });
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
  // subir imagen (portada o en el cuerpo)
  function uploadImg(cb){
    var f = $('pm-art-file'); f.value = '';
    f.onchange = function(){
      if (!f.files[0]) return;
      var fr = new FileReader();
      fr.onload = function(){
        status($('pm-art-status'), 'Subiendo imagen…', true);
        api('/api/upload', {method:'POST', body: JSON.stringify({name: f.files[0].name, data: fr.result})})
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
      .then(function(){ renderTextos(); renderArts(); })
      .catch(function(x){
        status($('pm-tx-status'), 'Error cargando datos: ' + x.message, false);
        status($('pm-art-status'), 'Error cargando datos: ' + x.message, false);
      });
  }
})();
