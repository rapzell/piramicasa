# -*- coding: utf-8 -*-
import re, glob

OLD = '(0,i.jsx)("h4",{children:"Datos de contacto"}),(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"Email:"})," ",(0,i.jsx)("a",{href:"mailto:piramicasa@protonmail.com",children:"piramicasa@protonmail.com"})]}),(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"Tel\\xe9fonos:"})," +34 639 284 787"]}),(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"WhatsApp:"})," +34 639 284 787"]}),(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"Asistencia:"})," Espa\\xf1ol, ingl\\xe9s, franc\\xe9s, alem\\xe1n y \\xe1rabe."]})'

NEW = ('(0,i.jsx)("h4",{children:"Datos de contacto"}),'
  '(0,i.jsxs)("a",{className:"pm-contact-row",href:"mailto:piramicasa@protonmail.com",children:['
    '(0,i.jsx)("span",{className:"pm-contact-ico pm-ico-mail","aria-hidden":"true"}),'
    '(0,i.jsxs)("span",{className:"pm-contact-txt",children:[(0,i.jsx)("strong",{children:"Email"}),(0,i.jsx)("span",{children:"piramicasa@protonmail.com"})]})]}),'
  '(0,i.jsxs)("a",{className:"pm-contact-row",href:"tel:+34639284787",children:['
    '(0,i.jsx)("span",{className:"pm-contact-ico pm-ico-tel","aria-hidden":"true"}),'
    '(0,i.jsxs)("span",{className:"pm-contact-txt",children:[(0,i.jsx)("strong",{children:"Tel\\u00e9fonos"}),(0,i.jsx)("span",{children:"+34 639 284 787 \\u00b7 +34 681 087 539"})]})]}),'
  '(0,i.jsxs)("a",{className:"pm-contact-row",href:"https://wa.me/34639284787",target:"_blank",rel:"noopener",children:['
    '(0,i.jsx)("span",{className:"pm-contact-ico pm-ico-wa","aria-hidden":"true"}),'
    '(0,i.jsxs)("span",{className:"pm-contact-txt",children:[(0,i.jsx)("strong",{children:"WhatsApp"}),(0,i.jsx)("span",{children:"+34 639 284 787"})]})]}),'
  '(0,i.jsxs)("div",{className:"pm-contact-row",children:['
    '(0,i.jsx)("span",{className:"pm-contact-ico pm-ico-lang","aria-hidden":"true"}),'
    '(0,i.jsxs)("span",{className:"pm-contact-txt",children:[(0,i.jsx)("strong",{children:"Asistencia"}),(0,i.jsx)("span",{children:"Espa\\u00f1ol, ingl\\u00e9s, franc\\u00e9s, alem\\u00e1n y \\u00e1rabe"})]})]})')

hit = 0
for f in glob.glob('_next/static/chunks/**/*.js', recursive=True):
    s = open(f, encoding='utf8', errors='replace').read()
    if OLD in s:
        s = s.replace(OLD, NEW)
        open(f, 'w', encoding='utf8').write(s)
        hit += 1
        print('patché:', f)
print('chunks patchés:', hit)
