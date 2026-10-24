# -*- coding: utf-8 -*-
import os, re

OLD = '''<script id="pm-hash-scroll">(function(){function s(){var h=decodeURIComponent(location.hash||"");if(!h||h.length<2)return;var id=h.slice(1),n=0,m=400;var t=setInterval(function(){var el=document.getElementById(id);if(el){clearInterval(t);setTimeout(function(){try{el.scrollIntoView({behavior:"smooth",block:"start"})}catch(e){el.scrollIntoView(true)}setTimeout(function(){var r=el.getBoundingClientRect();if(Math.abs(r.top)>80){try{el.scrollIntoView({behavior:"smooth",block:"start"})}catch(e){el.scrollIntoView(true)}}},1000)},140)}else if(++n>=m){clearInterval(t)}},50)}window.addEventListener("hashchange",s);window.addEventListener("load",function(){if(location.hash)setTimeout(s,200)});if(location.hash)setTimeout(s,400)})();</script>'''

NEW = '''<script id="pm-hash-scroll">(function(){function s(){var h=decodeURIComponent(location.hash||"");if(!h||h.length<2)return;var id=h.slice(1),n=0,m=400;var t=setInterval(function(){var el=document.getElementById(id);if(el){clearInterval(t);watch(el)}else if(++n>=m){clearInterval(t)}},50)}function watch(el){var stop=false,checks=0;function cancel(){stop=true}["wheel","touchstart","keydown"].forEach(function(v){window.addEventListener(v,cancel,{once:true,passive:true})});function go(){try{el.scrollIntoView({behavior:"smooth",block:"start"})}catch(e){el.scrollIntoView(true)}}setTimeout(go,140);var w=setInterval(function(){if(stop||++checks>14){clearInterval(w);return}var r=el.getBoundingClientRect();if(Math.abs(r.top)>80)go()},450)}window.addEventListener("hashchange",s);window.addEventListener("load",function(){if(location.hash)setTimeout(s,200)});if(location.hash)setTimeout(s,400)})();</script>'''

count = 0
for root, dirs, files in os.walk('.'):
    if '_next' in root or '.git' in root:
        continue
    for f in files:
        if f.endswith('.html'):
            p = os.path.join(root, f)
            src = open(p, encoding='utf8').read()
            if OLD in src:
                src = src.replace(OLD, NEW)
                open(p, 'w', encoding='utf8').write(src)
                count += 1
            elif 'pm-hash-scroll' in src:
                print('variante distinta:', p)
print('archivos parcheados:', count)
