var fs = require('fs');

// Read the 9547 chunk which contains the page content
var chunk = fs.readFileSync('_next/static/chunks/9547-dc2ddb0c5eae8482.js', 'utf8');

// Extract the content - this chunk has the page data as strings
// Let's find the main sections

// Find product data
var products = [];
var productRegex = /title:"([^"]+)"/g;
var match;
while ((match = productRegex.exec(chunk)) !== null) {
  if (match[1].length > 5 && match[1].indexOf('function') === -1) {
    products.push(match[1]);
  }
}

console.log('Found titles:', products.slice(0, 20));

// Find text content
var texts = [];
var textRegex = /text:"([^"]{20,})"/g;
while ((match = textRegex.exec(chunk)) !== null) {
  texts.push(match[1]);
}
console.log('\nFound texts:', texts.length);
console.log('First 5 texts:', texts.slice(0, 5));

// Check if there's HTML in the chunk
var htmlIdx = chunk.indexOf('<div');
console.log('\nHas HTML divs:', htmlIdx > -1);

// Check for section markers
var sections = ['hero', 'header', 'nav', 'footer', 'contact', 'producto', 'benefit'];
sections.forEach(function(s) {
  var idx = chunk.indexOf(s);
  if (idx > -1) {
    console.log('Found section "' + s + '" at:', idx, '->', chunk.substring(idx - 10, idx + 30));
  }
});
