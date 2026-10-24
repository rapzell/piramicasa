# -*- coding: utf-8 -*-
import re

# ---------- chunk ----------
p = '_next/static/chunks/app/page-221e7bed060c6ec9.js'
src = open(p, encoding='utf8').read()
old = '{img:"/piramicasa/assets/piramicasa/aval_efecto_piramidal_cenament_13.jpg",title:"Cenament"}]'
new = ('{img:"/piramicasa/assets/piramicasa/aval_efecto_piramidal_cenament_13.jpg",title:"Cenament"},'
       '{img:"/piramicasa/assets/piramicasa/aval_coesida_oaxaca_lg_14.jpg",title:"COESIDA \\u2014 Oaxaca (M\\xe9xico)"},'
       '{img:"/piramicasa/assets/piramicasa/aval_sida_publicacion_lg_15.jpg",title:"Publicaci\\xf3n: Resultados en SIDA (M\\xe9xico)"}]')
print('chunk occurrences:', src.count(old))
src = src.replace(old, new)
open(p, 'w', encoding='utf8').write(src)

# ---------- translations ----------
p = 'assets/translations.js'
lines = open(p, encoding='utf8').read().split('\n')
K1 = 'COESIDA \u2014 Oaxaca (M\xe9xico)'
K2 = 'Publicaci\xf3n: Resultados en SIDA (M\xe9xico)'
T = {
 'en': {K1: 'COESIDA \u2014 Oaxaca (Mexico)', K2: 'Publication: Results on AIDS (Mexico)'},
 'pt': {K1: 'COESIDA \u2014 Oaxaca (M\xe9xico)', K2: 'Publica\xe7\xe3o: Resultados em SIDA (M\xe9xico)'},
 'fr': {K1: 'COESIDA \u2014 Oaxaca (Mexique)', K2: 'Publication : R\xe9sultats sur le SIDA (Mexique)'},
 'de': {K1: 'COESIDA \u2014 Oaxaca (Mexiko)', K2: 'Ver\xf6ffentlichung: Ergebnisse zu AIDS (Mexiko)'},
 'ru': {K1: 'COESIDA \u2014 \u041e\u0430\u0445\u0430\u043a\u0430 (\u041c\u0435\u043a\u0441\u0438\u043a\u0430)', K2: '\u041f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u044f: \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u043f\u043e \u0421\u041f\u0418\u0414\u0443 (\u041c\u0435\u043a\u0441\u0438\u043a\u0430)'},
 'ar': {K1: 'COESIDA \u2014 \u0623\u0648\u0627\u0643\u0633\u0627\u0643\u0627 (\u0627\u0644\u0645\u0643\u0633\u064a\u0643)', K2: '\u0645\u0646\u0634\u0648\u0631: \u0646\u062a\u0627\u0626\u062c \u0639\u0646 \u0627\u0644\u0625\u064a\u062f\u0632 (\u0627\u0644\u0645\u0643\u0633\u064a\u0643)'},
}
ANCHOR = "'Cenament':"

def esc(v):
    return v.replace(chr(92), chr(92) + chr(92)).replace(chr(39), chr(92) + chr(39))

lang = None
out = []
n = 0
for ln in lines:
    m = re.match(r'^  ([a-z]{2}): \{', ln)
    if m:
        lang = m.group(1)
    out.append(ln)
    if lang in T and ln.lstrip().startswith(ANCHOR):
        out.append("    '" + K1 + "': '" + esc(T[lang][K1]) + "',")
        out.append("    '" + K2 + "': '" + esc(T[lang][K2]) + "',")
        n += 1
    if lang and ln.rstrip() == '},':
        lang = None

open(p, 'w', encoding='utf8').write('\n'.join(out))
print('langs patched:', n)
