var fs = require('fs');
var path = require('path');

function patchAllHTML(dir) {
  var files = fs.readdirSync(dir);
  for (var i = 0; i < files.length; i++) {
    var fp = path.join(dir, files[i]);
    var st = fs.statSync(fp);
    if (st.isDirectory()) {
      if (files[i] === '.git' || files[i] === 'node_modules' || files[i] === '_next') continue;
      patchAllHTML(fp);
    } else if (files[i].endsWith('.html') && files[i] !== '404.html') {
      var c = fs.readFileSync(fp, 'utf8');
      var changed = false;
      
      // 1. Remove the loading triangle div completely
      var loadingDiv = '<div style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg, #3d4a30, #5a6b4a)"><div style="font-size:2rem;color:#f7f4f0">\u25b3</div></div>';
      if (c.indexOf(loadingDiv) > -1) {
        c = c.split(loadingDiv).join('');
        changed = true;
      }
      
      // 2. Unhide the hidden div - React puts content here during SSR
      if (c.indexOf('<div hidden="">') > -1) {
        c = c.split('<div hidden="">').join('<div>');
        changed = true;
      }
      
      if (changed) {
        fs.writeFileSync(fp, c, 'utf8');
        console.log('Patched: ' + fp);
      }
    }
  }
}

patchAllHTML('.');
console.log('Done.');
