var fs = require('fs');

// Read the ORIGINAL layout
var orig = fs.readFileSync('../deploy-6a75bf8b43448edb339acf63/_next/static/chunks/app/layout-6ab3fd84bfd4d543.js', 'utf8');

console.log('Original:', orig);

// Simple approach: find the exact auth gate text and replace it
// Original has: i)?s||"/acceso"===c?(0,n.jsx)(n.Fragment,{children:t}):null:(0,n.jsx)("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, #3d4a30, #5a6b4a)"},children:(0,n.jsx)("div",{style:{fontSize:"2rem",color:"#f7f4f0"},children:"△"})})

// We want to replace the entire ternary with just: (0,n.jsx)(n.Fragment,{children:t})
// But we need to keep the closing braces intact

// Find the start of the auth gate
var startMarker = 'i)?s||"/acceso"===c?';
var startIdx = orig.indexOf(startMarker);
console.log('Start marker at:', startIdx);

if (startIdx > -1) {
  // Find where the auth gate ends - it's the end of the return statement
  // The return ends with })}} for the module
  // Let's find the module end (7834:)
  var moduleEnd = orig.indexOf('7834:');
  console.log('Module 7834 at:', moduleEnd);
  
  // The auth gate is between startMarker and the end of module 4358
  // Module 4358 ends with }} before 7834:
  var mod4358End = orig.lastIndexOf('}}', moduleEnd);
  console.log('Module 4358 ends at:', mod4358End);
  
  // Extract what's before and after the auth gate
  var before = orig.substring(0, startIdx);
  var after = orig.substring(mod4358End);
  
  // The auth gate should be replaced with just the children render
  // But we need to keep the closing braces for the function and module
  var replacement = '(0,n.jsx)(n.Fragment,{children:t})';
  
  var fixed = before + replacement + after;
  
  console.log('Fixed length:', fixed.length);
  console.log('Fixed preview:', fixed.substring(fixed.length-100));
  
  fs.writeFileSync('_next/static/chunks/app/layout-6ab3fd84bfd4d543.js', fixed, 'utf8');
  console.log('Written');
}
