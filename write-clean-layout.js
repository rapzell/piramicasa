var fs = require('fs');

// Write a clean layout JS that just renders children
// This is the exact same structure as the original but with the auth gate removed
var layout = '(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7177],{63:(e,t,s)=>{"use strict";var n=s(7260);s.o(n,"usePathname")&&s.d(t,{usePathname:function(){return n.usePathname}}),s.o(n,"useRouter")&&s.d(t,{useRouter:function(){return n.useRouter}})},3673:()=>{},3839:()=>{},4358:(e,t,s)=>{"use strict";s.d(t,{default:()=>a});var n=s(5155),r=s(2115),u=s(63);function a(e){var t=e.children;return(0,r.useEffect)(function(){document.cookie},[]),(0,n.jsx)(n.Fragment,{children:t})}},7834:(e,t,s)=>{Promise.resolve().then(s.bind(s,4358)),Promise.resolve().then(s.t.bind(s,3673,23)),Promise.resolve().then(s.t.bind(s,3839,23))}},function(e){e.O(0,[2978,4288,8441,1255,7358],function(){e(e.s=7834)}),_N_E=e.O()}]);';

fs.writeFileSync('_next/static/chunks/app/layout-6ab3fd84bfd4d543.js', layout, 'utf8');
console.log('Written clean layout');
console.log('Length:', layout.length);

// Verify syntax
try {
  new Function(layout);
  console.log('Syntax OK');
} catch(e) {
  console.log('Syntax error:', e.message);
}
