# -*- coding: utf-8 -*-
import re,glob

# 1) Contador "Mas de 10.000" -> "+10.000" (como los demas)
p='_next/static/chunks/app/page-221e7bed060c6ec9.js'
src=open(p,encoding='utf8').read()
old='children:"M\\u00E1s de\\n10.000"'
new='children:"+10.000"'
print('stat:',src.count(old)); src=src.replace(old,new)
open(p,'w',encoding='utf8').write(src)

# 2) + 3) En las 9 paginas de centros: quitar nota de fuente antigua
#    y mejorar la galeria (fondo difuminado + contain, sin recorte)
NEW_JS='<script id="pm-gallery-swap">(function(){var st=document.createElement("style");st.textContent=".pm-gallery-thumb img.pm-thumb-active{outline:3px solid var(--pm-oro);outline-offset:-3px}.pm-gallery-thumb img:focus-visible{outline:3px solid var(--pm-oro);outline-offset:-3px}.pm-gallery-featured{overflow:hidden}.pm-featured-blur{position:absolute;inset:-40px;background-size:cover;background-position:center;filter:blur(26px) brightness(.82);transform:scale(1.15)}.pm-gallery-featured img{position:relative;z-index:1;object-fit:contain}.pm-gallery-featured::after{z-index:2}";document.head.appendChild(st);document.querySelectorAll(".pm-centro-gallery").forEach(function(g){var fig=g.querySelector(".pm-gallery-featured"),f=fig&&fig.querySelector("img");if(!f)return;var b=document.createElement("div");b.className="pm-featured-blur";b.setAttribute("aria-hidden","true");function bg(){b.style.backgroundImage="url(\'"+f.getAttribute("src")+"\')"}fig.insertBefore(b,f);bg();g.querySelectorAll(".pm-gallery-thumb img").forEach(function(t){function s(){var u=t.getAttribute("src");if(!u)return;f.setAttribute("src",u);f.setAttribute("alt",t.getAttribute("alt")||"");f.removeAttribute("srcset");bg();g.querySelectorAll(".pm-gallery-thumb img").forEach(function(x){x.classList.remove("pm-thumb-active")});t.classList.add("pm-thumb-active")}t.addEventListener("click",s);t.setAttribute("tabindex","0");t.setAttribute("role","button");t.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();s()}})})})})();</script>'

n=0
for f in glob.glob('centros/*.html'):
    h=open(f,encoding='utf8').read()
    h2=re.sub(r'<div class="pm-source-note">.*?</div>\s*','',h,flags=re.S)
    h2=re.sub(r'<script id="pm-gallery-swap">.*?</script>',lambda m:NEW_JS,h2,flags=re.S)
    if h2!=h:
        open(f,'w',encoding='utf8').write(h2); n+=1
print('paginas actualizadas:',n)
