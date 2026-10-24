# -*- coding: utf-8 -*-
import os

OLD = '''<script id="pm-hash-scroll">(function(){function s(){var h=decodeURIComponent(location.hash||"");if(!h||h.length<2)return;var id=h.slice(1),n=0,m=400;var t=setInterval(function(){var el=document.getElementById(id);if(el){clearInterval(t);watch(el)}else if(++n>=m){clearInterval(t)}},50)}function watch(el){var stop=false,checks=0;function cancel(){stop=true}["wheel","touchstart","keydown"].forEach(function(v){window.addEventListener(v,cancel,{once:true,passive:true})});function go(){try{el.scrollIntoView({behavior:"smooth",block:"start"})}catch(e){el.scrollIntoView(true)}}setTimeout(go,140);var w=setInterval(function(){if(stop||++checks>14){clearInterval(w);return}var r=el.getBoundingClientRect();if(Math.abs(r.top)>80)go()},450)}window.addEventListener("hashchange",s);window.addEventListener("load",function(){if(location.hash)setTimeout(s,200)});if(location.hash)setTimeout(s,400)})();</script>'''

NEW = '''<script id="pm-hash-scroll">(function(){var last="";function s(){var h=decodeURIComponent(location.hash||"");if(!h||h.length<2)return;last=h;var id=h.slice(1),n=0;var t=setInterval(function(){var el=document.getElementById(id);if(el){clearInterval(t);watch(el)}else if(++n>=400){clearInterval(t)}},50)}function watch(el){var stable=0,checks=0;function go(){try{el.scrollIntoView({behavior:"smooth",block:"start"})}catch(e){el.scrollIntoView(true)}}setTimeout(go,140);var w=setInterval(function(){var r=el.getBoundingClientRect();if(Math.abs(r.top)>80){stable=0;go()}else if(++stable>=3){clearInterval(w);return}if(++checks>40){clearInterval(w)}},350)}window.addEventListener("hashchange",s);window.addEventListener("load",function(){if(location.hash)setTimeout(s,200)});if(location.hash)setTimeout(s,400);setInterval(function(){var h=location.hash||"";if(h&&h!==last)s()},500)})();</script>'''

count = 0
for root, dirs, files in os.walk('.'):
    if '_next' in root or '.git' in root:
        continue
    for f in files:
        if f.endswith('.html'):
            p = os.path.join(root, f)
            src = open(p, encoding='utf8').read()
            if OLD in src:
                open(p, 'w', encoding='utf8').write(src.replace(OLD, NEW))
                count += 1
            elif 'pm-hash-scroll' in src and NEW not in src:
                print('variante distinta:', p)
print('parcheados:', count)
