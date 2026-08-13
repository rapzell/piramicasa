var fs = require('fs');

// Fix webpack runtime to include all chunk hashes
var webpackPath = '_next/static/chunks/webpack-675bd502956fde6d.js';
var c = fs.readFileSync(webpackPath, 'utf8');

// Current map: {1646:"9123ee47220ed70b",5139:"c5e46d26064a85db"}
// Need to add all chunks that exist in the chunks directory

var chunksDir = '_next/static/chunks';
var files = fs.readdirSync(chunksDir);
var chunkMap = {};

files.forEach(function(f) {
  // Match pattern: NUMBER-HASH.js
  var m = f.match(/^(\d+)-([a-f0-9]+)\.js$/);
  if (m) {
    chunkMap[m[1]] = m[2];
  }
});

console.log('Found chunks:', JSON.stringify(chunkMap));

// Also check app directory
var appDir = '_next/static/chunks/app';
if (fs.existsSync(appDir)) {
  var appFiles = fs.readdirSync(appDir);
  appFiles.forEach(function(f) {
    var m = f.match(/^(\d+)-([a-f0-9]+)\.js$/);
    if (m) {
      chunkMap[m[1]] = m[2];
    }
  });
}

console.log('All chunks:', JSON.stringify(chunkMap));

// Build the new chunk map string
var newMapStr = '{';
var first = true;
for (var id in chunkMap) {
  if (!first) newMapStr += ',';
  newMapStr += id + ':"' + chunkMap[id] + '"';
  first = false;
}
newMapStr += '}';

// Replace the old map
var oldMap = '{1646:"9123ee47220ed70b",5139:"c5e46d26064a85db"}';
if (c.indexOf(oldMap) > -1) {
  c = c.replace(oldMap, newMapStr);
  fs.writeFileSync(webpackPath, c, 'utf8');
  console.log('Updated chunk map in webpack runtime');
  console.log('Old: ' + oldMap);
  console.log('New: ' + newMapStr);
} else {
  console.log('ERROR: Could not find old chunk map');
}
