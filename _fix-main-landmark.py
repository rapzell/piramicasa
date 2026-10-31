# -*- coding: utf-8 -*-
import re, glob, os

OLD_ENSURE = 'function ensureMain(){var ex=document.querySelector("main#pm-main-content");if(ex){if(!ex.hasAttribute("role"))ex.setAttribute("role","main");if(!ex.hasAttribute("aria-label"))ex.setAttribute("aria-label","Contenido principal");return;}var page=document.querySelector(".pm-page");if(!page)return;if(page.closest("main"))return;var m=document.createElement("main");m.id="pm-main-content";m.setAttribute("role","main");m.setAttribute("aria-label","Contenido principal");page.parentNode.insertBefore(m,page);m.appendChild(page);}'
NEW_ENSURE = 'function ensureMain(){var ex=document.querySelector("main#pm-main-content");var host=ex||document.querySelector(".pm-page");if(!host)return;if(!host.id)host.id="pm-main-content";if(!host.hasAttribute("role"))host.setAttribute("role","main");if(!host.hasAttribute("aria-label"))host.setAttribute("aria-label","Contenido principal");if(host.tagName!=="MAIN"&&!host.hasAttribute("tabindex"))host.setAttribute("tabindex","-1");}'

OLD_NORM = re.compile(r'function normalize\(\)\{var scope=document\.querySelector\("\.pm-page"\)\|\|document\.body;if\(!scope\)return;var list=scope\.querySelectorAll\("h1,h2,h3,h4,h5,h6"\);var last=0;for\(var i=0;i<list\.length;i\+\+\)\{var el=list\[i\];var lv=parseInt\(el\.tagName\.slice\(1\),10\);if\(last&&lv-last>1\)\{var t=Math\.min\(6,last\+1\);if\(t!==lv&&el\.parentNode\)\{var r=document\.createElement\("h"\+t\);for\(var j=0;j<el\.attributes\.length;j\+\+\)\{var at=el\.attributes\[j\];r\.setAttribute\(at\.name,at\.value\);\}r\.innerHTML=el\.innerHTML;el\.parentNode\.replaceChild\(r,el\);el=r;lv=t;\}\}last=lv;\}\}')
NEW_NORM = 'function normalize(){var scope=document.querySelector(".pm-page")||document.body;if(!scope)return;var list=scope.querySelectorAll("h1,h2,h3,h4,h5,h6");var last=0;for(var i=0;i<list.length;i++){var el=list[i];var lv=parseInt(el.tagName.slice(1),10);if(last&&lv-last>1){el.setAttribute("aria-level",String(Math.min(6,last+1)));}last=lv;}}'

files = []
for root, _, names in os.walk('.'):
    if '_next' in root or 'node_modules' in root:
        continue
    for n in names:
        if n.endswith('.html'):
            files.append(os.path.join(root, n))

patched, unwrapped = 0, 0
for f in files:
    s = open(f, encoding='utf8', errors='replace').read()
    orig = s
    has_script = 'pm-home-a11y' in s
    if has_script:
        if OLD_ENSURE in s:
            s = s.replace(OLD_ENSURE, NEW_ENSURE)
        s = OLD_NORM.sub(NEW_NORM, s)
        # déballer le <main> statique étranger (React retire pm-page de body → crash)
        m = re.search(r'<main id="pm-main-content"[^>]*>', s)
        if m:
            j = s.find('</main>', m.end())
            if j > 0:
                s = s[:m.start()] + s[m.end():j] + s[j + len('</main>'):]
                unwrapped += 1
    if s != orig:
        open(f, 'w', encoding='utf8').write(s)
        patched += 1

print('fichiers modifiés:', patched, '| mains déballés:', unwrapped)
