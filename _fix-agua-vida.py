# -*- coding: utf-8 -*-
import re

# ---------- 1) chunk ----------
p = '_next/static/chunks/app/videos/page-fe193b5e40eda75b.js'
src = open(p, encoding='utf8').read()

old = r'{title:"Videos y Testimonios del Efecto Piramidal",description:"Serie de v\xeddeos de preguntas y respuestas sobre las pir\xe1mides, sus usos, las causas de su poder y todo lo que interesa a usuarios y futuros usuarios.",img:"/piramicasa/assets/piramicasa/videos/testimonioimpond.jpg",videos:[{title:"Videos y Testimonios del Efecto Piramidal",youtubeId:"A00TvfPvhf4"}]}'
new = r'{title:"Pir\xe1mides, Agua y Vida",description:"El agua como llave de la vida: c\xf3mo el efecto piramidal act\xfaa sobre el agua y su relaci\xf3n con los procesos vitales.",img:null,videos:[{title:"Pir\xe1mides, Agua y Vida",youtubeId:"A00TvfPvhf4"}]}'

print('chunk occurrences:', src.count(old))
src = src.replace(old, new)
open(p, 'w', encoding='utf8').write(src)

# ---------- 2) translations.js ----------
p = 'assets/translations.js'
lines = open(p, encoding='utf8').read().split('\n')

OLD_T = 'V\xeddeos y Testimonios del Efecto Piramidal'
OLD_D = 'Serie de v\xeddeos de preguntas y respuestas sobre las pir\xe1mides, sus usos, las causas de su poder y todo lo que interesa a usuarios y futuros usuarios.'
K_T = 'Pir\xe1mides, Agua y Vida'
K_D = 'El agua como llave de la vida: c\xf3mo el efecto piramidal act\xfaa sobre el agua y su relaci\xf3n con los procesos vitales.'

T = {
 'en': {K_T: 'Pyramids, Water and Life',
        K_D: 'Water as the key to life: how the pyramid effect acts on water and its relationship with vital processes.'},
 'pt': {K_T: 'Pir\xe2mides, \xc1gua e Vida',
        K_D: 'A \xe1gua como chave da vida: como o efeito piramidal atua sobre a \xe1gua e a sua rela\xe7\xe3o com os processos vitais.'},
 'fr': {K_T: 'Pyramides, Eau et Vie',
        K_D: "L'eau comme cl\xe9 de la vie : comment l'effet pyramidal agit sur l'eau et sa relation avec les processus vitaux."},
 'de': {K_T: 'Pyramiden, Wasser und Leben',
        K_D: 'Wasser als Schl\xfcssel des Lebens: wie der Pyramiden-Effekt auf Wasser wirkt und seine Beziehung zu den Lebensprozessen.'},
 'ru': {K_T: 'Пирамиды, вода и жизнь',
        K_D: 'Вода как ключ к жизни: как пирамидальный эффект воздействует на воду и её связь с жизненными процессами.'},
 'ar': {K_T: 'الأهرامات والماء والحياة',
        K_D: 'الماء مفتاح الحياة: كيف يؤثر تأثير الهرم على الماء وعلاقته بالعمليات الحيوية.'},
}

MAP = {OLD_T: K_T, OLD_D: K_D}

def esc(v):
    return v.replace('\\', '\\\\').replace("'", "\\'")

lang = None
out = []
n = 0
for ln in lines:
    m = re.match(r'^  ([a-z]{2}): \{', ln)
    if m:
        lang = m.group(1)
    done = False
    if lang in T:
        for ok, nk in MAP.items():
            if ln.lstrip().startswith("'" + ok + "':"):
                out.append("    '" + nk + "': '" + esc(T[lang][nk]) + "',")
                n += 1
                done = True
                break
    out.append(ln)
    if lang and ln.rstrip() == '},':
        lang = None

open(p, 'w', encoding='utf8').write('\n'.join(out))
print('translations replaced:', n)
