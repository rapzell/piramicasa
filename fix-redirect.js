var fs = require('fs');
var f = '_next/static/chunks/app/layout-6ab3fd84bfd4d543.js';
var c = fs.readFileSync(f, 'utf8');

// Remove the redirect useEffect
var redirectEffect = '(0,r.useEffect)(()=>{i&&!s&&"/acceso"!==c&&l.replace("/acceso")},[i,s,c,l]),';
if (c.indexOf(redirectEffect) > -1) {
  c = c.replace(redirectEffect, '');
  console.log('Redirect useEffect removed');
} else {
  console.log('Redirect useEffect not found');
}

fs.writeFileSync(f, c, 'utf8');
console.log('Done. Length: ' + c.length);
