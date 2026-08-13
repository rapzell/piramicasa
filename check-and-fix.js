var fs = require('fs');
var path = require('path');

// 1. Delete acceso.html so there's no form to redirect to
try { fs.unlinkSync('acceso.html'); console.log('Deleted acceso.html'); } catch(e) { console.log('acceso.html not found'); }

// 2. Check if index.html still has hidden div
var c = fs.readFileSync('index.html', 'utf8');
console.log('Has hidden div:', c.indexOf('<div hidden="">') > -1);
console.log('Has visible div:', c.indexOf('<div>') > -1);

// 3. Check if loading triangle is still there
var loadingDiv = '<div style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg, #3d4a30, #5a6b4a)"><div style="font-size:2rem;color:#f7f4f0">\u25b3</div></div>';
console.log('Has loading triangle:', c.indexOf(loadingDiv) > -1);

// 4. Check what's in the body
var b = c.indexOf('<body');
var s = c.indexOf('<script', b);
console.log('\nBody content before scripts:');
console.log(c.substring(b, s));
