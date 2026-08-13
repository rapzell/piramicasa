var fs = require('fs');

// Patch webpack runtime to disable trustedTypes
var wp = fs.readFileSync('_next/static/chunks/webpack-675bd502956fde6d.js', 'utf8');

// Replace the trustedTypes section to just return a simple policy
// Original: r.tt=()=>(void 0===e&&(e={createScriptURL:e=>e},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("nextjs#bundler",e))),e)
// Replace with: r.tt=()=>({createScriptURL:e=>e})
wp = wp.replace(
  /r\.tt=\(\)=>\(void 0===e&&\(e=\{createScriptURL:e=>e\},"undefined"!=typeof trustedTypes&&trustedTypes\.createPolicy&&\(e=trustedTypes\.createPolicy\("nextjs#bundler",e\)\)\),e\)/,
  'r.tt=()=>({createScriptURL:e=>e})'
);

fs.writeFileSync('_next/static/chunks/webpack-675bd502956fde6d.js', wp, 'utf8');
console.log('Patched trustedTypes');

// Also add the chunk 9547 as a direct script tag in index.html
// so it loads without needing dynamic import
var idx = fs.readFileSync('index.html', 'utf8');

// Check if 9547 is already loaded as a script tag
if (idx.indexOf('9547-dc2ddb0c5eae8482') === -1) {
  // Add it before the page chunk
  var pageChunkTag = '<script src="/piramicasa/_next/static/chunks/app/page-221e7bed060c6ec9.js"';
  var preloadTag = '<script src="/piramicasa/_next/static/chunks/9547-dc2ddb0c5eae8482.js" async=""></script>\n';
  idx = idx.replace(pageChunkTag, preloadTag + pageChunkTag);
  fs.writeFileSync('index.html', idx, 'utf8');
  console.log('Added 9547 chunk as direct script tag');
} else {
  console.log('9547 already loaded as script tag');
}

// Also add 7962 and 1462 as direct script tags
['7962-a62aac6482e58e5e', '1462-dd50189e811660a4'].forEach(function(chunk) {
  if (idx.indexOf(chunk) === -1) {
    var tag = '<script src="/piramicasa/_next/static/chunks/' + chunk + '.js" async=""></script>\n';
    idx = idx.replace(pageChunkTag, tag + pageChunkTag);
    fs.writeFileSync('index.html', idx, 'utf8');
    console.log('Added ' + chunk + ' as direct script tag');
  }
});
