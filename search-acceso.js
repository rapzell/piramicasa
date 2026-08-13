var fs = require('fs');
var path = require('path');

function searchDir(dir) {
  var files = fs.readdirSync(dir);
  for (var i = 0; i < files.length; i++) {
    var fp = path.join(dir, files[i]);
    var st = fs.statSync(fp);
    if (st.isDirectory()) {
      searchDir(fp);
    } else if (files[i].endsWith('.js')) {
      var c = fs.readFileSync(fp, 'utf8');
      var idx = c.indexOf('acceso');
      if (idx > -1) {
        console.log('\n=== ' + fp + ' ===');
        var pos = 0;
        while ((pos = c.indexOf('acceso', pos)) > -1) {
          console.log('  at ' + pos + ': ' + c.substring(Math.max(0, pos - 40), pos + 40));
          pos++;
        }
      }
    }
  }
}

console.log('Searching for "acceso" in JS files...');
searchDir('_next');
