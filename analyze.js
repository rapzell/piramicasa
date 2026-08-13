var fs = require('fs');
var c = fs.readFileSync('index.html', 'utf8');

// The RSC payload in the HTML contains the server-rendered content
// but it's empty because the auth gate blocked SSR.
// We need to inject a script that renders the page client-side.

// Read the page chunk to get the component
var pageChunk = fs.readFileSync('_next/static/chunks/app/page-221e7bed060c6ec9.js', 'utf8');
var contentChunk = fs.readFileSync('_next/static/chunks/9547-dc2ddb0c5eae8482.js', 'utf8');

// Check what CSS files are referenced
var cssMatch = c.match(/href="([^"]*\.css)"/g);
console.log('CSS files:', cssMatch);

// Check what JS files are referenced
var jsMatch = c.match(/src="([^"]*\.js)"/g);
console.log('JS files count:', jsMatch ? jsMatch.length : 0);
jsMatch.forEach(function(m) { console.log('  ' + m); });

// The issue is that the SSR content is empty (<!--$--><!--/$-->)
// React needs to hydrate and render the content client-side
// But hydration is failing silently

// Let's check if there's an error by adding error handling
console.log('\nPage chunk length:', pageChunk.length);
console.log('Content chunk length:', contentChunk.length);

// Check if the content chunk has the default export
var hasDefault = contentChunk.indexOf('default:()=>d') > -1;
console.log('Has default export:', hasDefault);
