import re
p='_next/static/chunks/app/centros-terapia/page-ea18f1501f1cc3d3.js'
src=open(p,encoding='utf8').read()

# 1) Quitar el duplicado UTF-8 que anadi al final en el commit anterior
dup='terapeuta-piramidal-costa-rica-randall.jpg"},{name:"Centro Terapéutico Aurora",location:"Nicaragua",description:"El primer Centro Terapéutico de estas características, pues su sala de consultas es una pirámide modelo Sekhmet.",phone:null,link:null,img:null}]'
print('dup tail:',src.count(dup))
src=src.replace(dup,'terapeuta-piramidal-costa-rica-randall.jpg"}]')

# 2) Mover el Aurora original (con escapes \x) al final del array
aur='{name:"Centro Terap\\xe9utico Aurora",location:"Nicaragua",description:"El primer Centro Terap\\xe9utico de estas caracter\\xedsticas, pues su sala de consultas es una pir\\xe1mide modelo Sekhmet.",phone:null,link:null,img:null}'
aur_comma=aur+','
print('aurora head:',src.count(aur_comma))
src=src.replace(aur_comma,'',1)
tail='terapeuta-piramidal-costa-rica-randall.jpg"}]'
print('tail:',src.count(tail))
src=src.replace(tail,'terapeuta-piramidal-costa-rica-randall.jpg"},'+aur+']')

# 3) Viles: asignar la imagen de tarjeta (su 2a foto de galeria)
old_v='link:"/piramicasa/centros/lleida-sebastian-viles.html",img:null'
new_v='link:"/piramicasa/centros/lleida-sebastian-viles.html",img:"/piramicasa/assets/piramicasa/centros/centro_piramidal_sebastian_viles.jpg"'
print('viles:',src.count(old_v))
src=src.replace(old_v,new_v)

open(p,'w',encoding='utf8').write(src)

# verificacion
src=open(p,encoding='utf8').read()
print('Aurora total:',src.count('Aurora'))
print('Aurora al final:',src.rfind('Aurora')>src.rfind('randall.jpg'))
print('viles img:',src.count('centro_piramidal_sebastian_viles'))
