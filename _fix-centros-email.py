p='_next/static/chunks/app/centros-terapia/page-ea18f1501f1cc3d3.js'
src=open(p,encoding='utf8').read()

# 1) Email propio para Leganes (de su ficha de detalle)
old_l='description:"Jacob Mart\\xedn ofrece terapia piramidal en Madrid.",phone:null,link:'
new_l='description:"Jacob Mart\\xedn ofrece terapia piramidal en Madrid.",phone:null,email:"j2mrubio@gmail.com",link:'
print('leganes:',src.count(old_l))
src=src.replace(old_l,new_l)

# 2) Email central para el resto de fichas sin telefono (Khyma, TIPI, Viles, Ithaca, Garcia, Aurora)
pat=',phone:null,link:'
print('sin telefono restantes:',src.count(pat))
src=src.replace(pat,',phone:null,email:"piramicasa@protonmail.com",link:')

# 3) Render: si no hay phone pero si email, mostrar chip mailto
old_r='a.phone&&(0,n.jsxs)("a",{href:"tel:".concat(a.phone.replace(/\\s/g,"")),className:"pm-centro-phone",children:["\\uD83D\\uDCDE ",a.phone]}),'
new_r=old_r+'!a.phone&&a.email&&(0,n.jsxs)("a",{href:"mailto:".concat(a.email),className:"pm-centro-phone",style:{fontSize:".8rem",wordBreak:"break-all"},children:["\\u2709\\uFE0F ",a.email]}),'
print('render:',src.count(old_r))
src=src.replace(old_r,new_r,1)

open(p,'w',encoding='utf8').write(src)
src=open(p,encoding='utf8').read()
print('emails totales:',src.count('email:"'))
print('mailto render:',src.count('mailto:'))
