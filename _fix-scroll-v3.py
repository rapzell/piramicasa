# -*- coding: utf-8 -*-
import re,glob

# ---------- 1) hash-scroll v3 dentro de overrides.js (sobrevive a nav Next) ----------
o=open('assets/overrides.js',encoding='utf8').read()
old_block=re.search(r'/\* pm-hash-scroll v3 \*/.*?\}\)\(\);',o,re.S)
HS='''/* pm-hash-scroll v3 */
(function(){
var cur=0,lastHash="";
function offY(){var h=document.querySelector(".pm-header")||document.querySelector("header");return ((h&&h.offsetHeight)||80)+14}
function watch(id){
  var stop=false,stable=0,n=0;
  function cancel(){stop=true}
  window.addEventListener("wheel",cancel,{once:true,passive:true});
  window.addEventListener("touchmove",cancel,{once:true,passive:true});
  var t=setInterval(function(){
    if(stop||++n>60){clearInterval(t);return}
    var el=document.getElementById(id);
    if(!el)return;
    var d=el.getBoundingClientRect().top-offY();
    if(Math.abs(d)>24){stable=0;try{window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY-offY(),behavior:"smooth"})}catch(e){el.scrollIntoView()}}
    else if(++stable>=4){clearInterval(t)}
  },300);
}
function fire(){
  var h=decodeURIComponent(location.hash||"");
  if(h.length<2||h===lastHash)return;
  lastHash=h;watch(h.slice(1));
}
window.addEventListener("hashchange",fire);
window.addEventListener("load",function(){setTimeout(fire,150)});
document.addEventListener("click",function(e){
  var a=e.target&&e.target.closest?e.target.closest("a[href]"):null;
  if(!a)return;
  var h=a.getAttribute("href")||"";
  if(h.indexOf("#")===-1)return;
  lastHash="";
  setTimeout(fire,60);setTimeout(fire,400);
},true);
setInterval(fire,400);
if(location.hash)setTimeout(fire,200);
})();'''
if old_block:
    o=o[:old_block.start()]+HS+o[old_block.end():]
    print('overrides: bloque v3 reemplazado')
else:
    o=o.rstrip()+'\n\n'+HS+'\n'
    print('overrides: bloque v3 anadido')
open('assets/overrides.js','w',encoding='utf8').write(o)

# quitar los <script id="pm-hash-scroll"> inline (ahora viven en overrides.js)
n=0
for f in glob.glob('*.html')+glob.glob('centros/*.html')+glob.glob('admin/*.html'):
    h=open(f,encoding='utf8').read()
    h2=re.sub(r'\s*<script id="pm-hash-scroll">.*?</script>','',h,flags=re.S)
    if h2!=h:
        open(f,'w',encoding='utf8').write(h2);n+=1
print('inline eliminados:',n)

# ---------- 2) acordeon: encuadre correcto del titulo desplegado ----------
old_a='onClick:a=>{n(s===e.id?null:e.id),setTimeout(function(){window.dispatchEvent(new Event("resize"))},50),s!==e.id&&setTimeout(function(){var t=a.currentTarget&&a.currentTarget.closest(".pm-accordion-item");if(t){var h=document.querySelector(".pm-header")||document.querySelector("header");var y=t.getBoundingClientRect().top+window.scrollY-((h&&h.offsetHeight)||80)-16;window.scrollTo({top:y,behavior:"smooth"})}},250)}'
new_a='onClick:a=>{var t=a.currentTarget&&a.currentTarget.closest(".pm-accordion-item");n(s===e.id?null:e.id),setTimeout(function(){window.dispatchEvent(new Event("resize"))},50),s!==e.id&&t&&function(){var stop=false,c=function(){stop=true};window.addEventListener("wheel",c,{once:true,passive:true});window.addEventListener("touchmove",c,{once:true,passive:true});[500,1100].forEach(function(d){setTimeout(function(){if(stop||!t.isConnected)return;var h=document.querySelector(".pm-header")||document.querySelector("header");var oy=((h&&h.offsetHeight)||80)+14;if(Math.abs(t.getBoundingClientRect().top-oy)>10)window.scrollTo({top:t.getBoundingClientRect().top+window.scrollY-oy,behavior:"smooth"})},d)})}()}'
for f in ['_next/static/chunks/app/salud/page-eabc09a75db00e79.js','_next/static/chunks/app/enfermedades/page-ba5eac5ee7a7a276.js']:
    s=open(f,encoding='utf8').read()
    print(f.split("/")[4],s.count(old_a))
    open(f,'w',encoding='utf8').write(s.replace(old_a,new_a))
