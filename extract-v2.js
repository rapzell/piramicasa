var fs = require('fs');
var c = fs.readFileSync('_next/static/chunks/9547-dc2ddb0c5eae8482.js', 'utf8');

// Extract all the data from the chunk
// Find the products array
var productsStart = c.indexOf('let j=[');
var productsEnd = c.indexOf('];', productsStart) + 1;
var productsStr = c.substring(productsStart + 6, productsEnd);

// Parse the products - they're JS object literals
// Let's extract names, descs, imgs, features
var products = [];
var nameRegex = /name:"([^"]+)"/g;
var descRegex = /desc:"([^"]+)"/g;
var imgRegex = /img:"([^"]+)"/g;
var featuresRegex = /features:\[([^\]]+)\]/g;

var names = [], descs = [], imgs = [], featuresArr = [];
var m;
while (m = nameRegex.exec(c)) names.push(m[1]);
while (m = descRegex.exec(c)) descs.push(m[1]);
while (m = imgRegex.exec(c)) imgs.push(m[1]);
while (m = featuresRegex.exec(c)) {
  var feats = m[1].match(/"([^"]+)"/g);
  featuresArr.push(feats ? feats.map(function(f) { return f.replace(/"/g, ''); }) : []);
}

console.log('Products found:', names.length);
for (var i = 0; i < names.length; i++) {
  console.log('  ' + i + ': ' + names[i] + ' | img: ' + (imgs[i]||'none') + ' | features: ' + (featuresArr[i]||[]).length);
}

// Also find the sections - hero, benefits, etc.
// Find hero text
var heroIdx = c.indexOf('pm-hero');
console.log('\nHero section at:', heroIdx);
if (heroIdx > -1) {
  console.log(c.substring(heroIdx - 50, heroIdx + 500));
}

// Find benefits
var benefitIdx = c.indexOf('benefit');
console.log('\nBenefit section:');
var bIdx = 0;
while ((bIdx = c.indexOf('benefit', bIdx)) > -1) {
  console.log('  at', bIdx, ':', c.substring(bIdx - 20, bIdx + 50));
  bIdx++;
  if (bIdx > 10) break;
}
