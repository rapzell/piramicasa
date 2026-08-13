var fs = require('fs');
var c = fs.readFileSync('_next/static/chunks/app/layout-6ab3fd84bfd4d543.js', 'utf8');

// Count braces
var open = 0, close = 0;
for (var i = 0; i < c.length; i++) {
  if (c[i] === '{') open++;
  if (c[i] === '}') close++;
}
console.log('Open braces:', open, 'Close braces:', close, 'Diff:', open - close);

// Find the function a(e) and show its structure
var funcStart = c.indexOf('function a(e)');
var funcEnd = c.indexOf('7834:');
console.log('\nFunction a(e):');
console.log(c.substring(funcStart, funcEnd));

// Show the end of the function
var lastBrace = c.lastIndexOf('}', funcEnd);
console.log('\nLast 50 chars before module end:');
console.log(c.substring(funcEnd - 50, funcEnd));
