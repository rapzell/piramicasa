# -*- coding: utf-8 -*-
import re
# A) Contactos reales en las fichas de centros
p='_next/static/chunks/app/centros-terapia/page-ea18f1501f1cc3d3.js'
src=open(p,encoding='utf8').read()

def fix(anchor, oldfrag, newfrag):
    global src
    i=src.find(anchor)
    assert i>0, anchor
    seg=src[i:i+900]
    assert oldfrag in seg, (anchor,oldfrag,seg[:300])
    seg=seg.replace(oldfrag,newfrag,1)
    src=src[:i]+seg+src[i+900:]
    print('OK',anchor[:50])

CENT='email:"piramicasa@protonmail.com"'
# fichas con telefono real en su pagina de detalle -> phone + quitar email generico
fix('T.I.P.I.','phone:null,'+CENT,'phone:"669 74 54 29"')
fix('Sebasti\\xe1n Viles','phone:null,'+CENT,'phone:"678 650 652"')
fix('Centro Ithaca','phone:null,'+CENT,'phone:"680 51 37 773"')
# fichas sin contacto propio -> quitar el email generico (enganoso)
fix('Khyma',','+CENT,'')
fix('Gabriel Garc\\xeda',','+CENT,'')
fix('Aurora',','+CENT,'')

open(p,'w',encoding='utf8').write(src)
print('emails genericos restantes:',src.count(CENT))
print('leganes propio:',src.count('j2mrubio@gmail.com'))

# B) Videos: quitar imagenes de cabecera restantes + centrar de verdad
p2='_next/static/chunks/app/videos/page-fe193b5e40eda75b.js'
v=open(p2,encoding='utf8').read()
print('imgs cabecera:',v.count('img:"/piramicasa/assets/piramicasa/videos/'))
v=re.sub(r'img:"/piramicasa/assets/piramicasa/videos/[^"]*"','img:null',v)
open(p2,'w',encoding='utf8').write(v)

h=open('videos.html',encoding='utf8').read()
old_css='grid-template-columns:repeat(auto-fill,minmax(min(320px,100%),400px))'
new_css='grid-template-columns:repeat(auto-fit,minmax(min(320px,100%),400px))'
print('css:',h.count(old_css))
open('videos.html','w',encoding='utf8').write(h.replace(old_css,new_css))
