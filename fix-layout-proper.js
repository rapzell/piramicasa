var fs = require('fs');

// Read the ORIGINAL layout from the deploy source
var orig = fs.readFileSync('../deploy-6a75bf8b43448edb339acf63/_next/static/chunks/app/layout-6ab3fd84bfd4d543.js', 'utf8');

console.log('Original length:', orig.length);

// The original layout has this auth gate at the end of the component:
// i)?s||"/acceso"===c?(0,n.jsx)(n.Fragment,{children:t}):null:(0,n.jsx)("div",{style:{...},children:(0,n.jsx)("div",{style:{...},children:"△"})})
// We need to replace it with just: (0,n.jsx)(n.Fragment,{children:t})

// Also need to remove the redirect useEffect:
// (0,r.useEffect)(()=>{i&&!s&&"/acceso"!==c&&l.replace("/acceso")},[i,s,c,l]),

// Step 1: Remove the redirect useEffect
var redirectEffect = '(0,r.useEffect)(()=>{i&&!s&&"/acceso"!==c&&l.replace("/acceso")},[i,s,c,l]),';
if (orig.indexOf(redirectEffect) > -1) {
  orig = orig.replace(redirectEffect, '');
  console.log('Removed redirect useEffect');
}

// Step 2: Replace the auth gate ternary with just rendering children
// Find: i)?s||"/acceso"===c?(0,n.jsx)(n.Fragment,{children:t}):null:(0,n.jsx)("div",...
// Replace with: (0,n.jsx)(n.Fragment,{children:t})

var authGateStart = orig.indexOf('i)?s||');
if (authGateStart > -1) {
  // Find the end of the ternary - it's the last part of the return statement
  // The ternary ends with }))} at the end of the function
  // Let me find the end more carefully
  
  // The function a(e) ends with ...})} 
  // The auth gate starts at "i)?s||" and goes to the end of the return
  // The return statement is: ...useEffect...),i)?s||...triangle...})}
  
  // Find the position of the last })}} in the function
  var funcEnd = orig.indexOf('})}', authGateStart);
  if (funcEnd > -1) {
    // Check if the next chars are }
    var remaining = orig.substring(funcEnd);
    // The auth gate ends right before the function closing
    // Let me just replace from authGateStart to the end of the function body
    // The function ends with: ...})}},7834:
    var moduleEnd = orig.indexOf('7834:');
    if (moduleEnd > -1) {
      // The module ends right before 7834:
      // Go back to find the closing of module 4358
      var modEnd = orig.lastIndexOf('}}', moduleEnd);
      // Now find the auth gate end
      // The auth gate is the last part before the module closing
      var gateEnd = orig.lastIndexOf(')', modEnd);
      // Actually, let me just do a simple replacement
      var oldPart = orig.substring(authGateStart, modEnd);
      var newPart = '(0,n.jsx)(n.Fragment,{children:t})';
      orig = orig.substring(0, authGateStart) + newPart + orig.substring(modEnd);
      console.log('Replaced auth gate');
    }
  }
}

// Verify the fix
console.log('New length:', orig.length);
console.log('Has acceso redirect:', orig.indexOf('l.replace("/acceso")') > -1);
console.log('Has auth gate:', orig.indexOf('i)?s||') > -1);

// Write the fixed layout
fs.writeFileSync('_next/static/chunks/app/layout-6ab3fd84bfd4d543.js', orig, 'utf8');
console.log('Layout fixed and written');
