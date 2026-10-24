# -*- coding: utf-8 -*-
import re

# ---------- 1) chunk ----------
p = '_next/static/chunks/app/viaje-egipto/page-b7a208dbfdc9f056.js'
src = open(p, encoding='utf8').read()

# 1a) rutas con mayusculas -> minusculas (GitHub Pages es case-sensitive)
for bad, good in [
    ('egipto/Djozer-piramide-escalonada.jpg', 'egipto/djozer-piramide-escalonada.jpg'),
    ('egipto/Giza-camellos.jpg', 'egipto/giza-camellos.jpg'),
    ('egipto/Meidum-01.jpg', 'egipto/meidum-01.jpg'),
    ('egipto/Valle-de-los-Reyes-118a.jpg', 'egipto/valle-de-los-reyes-118a.jpg'),
]:
    print(bad, '->', src.count(bad))
    src = src.replace(bad, good)

# 1b) tarjeta de precio: sin cifra, varía por edición
old_price = re.compile(r'children:\["4\.650 [^\]]*?todo incluido"\]')
m = old_price.search(src)
print('price match:', bool(m))
if m:
    src = src.replace(m.group(0),
        'children:["A consultar en cada convocatoria",(0,s.jsx)("br",{}),"El precio var\\xeda seg\\xfan el a\\xf1o y el programa"]')

# 1c) lead del itinerario: marcar como ejemplo orientativo
old_lead = 'Con la experiencia desde 2004 con grupos. Vemos tantas cosas como ninguna otra organizaci\\xf3n ofrece. Gabriel Silva dar\\xe1 conferencias y charlas en buena parte del recorrido, haci\\xe9ndonos ver y comprender m\\xe1s all\\xe1 de lo acad\\xe9micamente establecido.'
new_lead = old_lead[:-1] + ' El itinerario publicado es un ejemplo orientativo de una edici\\xf3n anterior: cada a\\xf1o el viaje se revisa y mejora, por lo que el recorrido, las visitas y las condiciones pueden variar.'
print('lead:', src.count('children:"' + old_lead))
src = src.replace('children:"' + old_lead, 'children:"' + new_lead)

open(p, 'w', encoding='utf8').write(src)

# ---------- 2) translations.js ----------
p = 'assets/translations.js'
lines = open(p, encoding='utf8').read().split('\n')

K_P1 = 'A consultar en cada convocatoria'
K_P2 = 'El precio var\xeda seg\xfan el a\xf1o y el programa'
OLD_LEAD_KEY = 'Con la experiencia desde 2004 con grupos. Vemos tantas cosas como ninguna otra organizaci\xf3n ofrece. Gabriel Silva dar\xe1 conferencias y charlas en buena parte del recorrido, haci\xe9ndonos ver y comprender m\xe1s all\xe1 de lo acad\xe9micamente establecido.'
K_LEAD = OLD_LEAD_KEY + ' El itinerario publicado es un ejemplo orientativo de una edici\xf3n anterior: cada a\xf1o el viaje se revisa y mejora, por lo que el recorrido, las visitas y las condiciones pueden variar.'

T = {
 'en': {
   K_P1: 'Available on request for each edition',
   K_P2: 'The price varies by year and programme',
   K_LEAD: 'With group experience since 2004. We see more things than any other organisation offers. Gabriel Silva gives lectures and talks during much of the journey, helping us see and understand beyond what is academically established. The published itinerary is an illustrative example from a previous edition: each year the trip is reviewed and improved, so the route, visits and conditions may vary.',
 },
 'pt': {
   K_P1: 'A consultar em cada edi\xe7\xe3o',
   K_P2: 'O pre\xe7o varia consoante o ano e o programa',
   K_LEAD: 'Com experi\xeancia desde 2004 com grupos. Vemos tantas coisas como nenhuma outra organiza\xe7\xe3o oferece. Gabriel Silva dar\xe1 confer\xeancias e palestras em boa parte do percurso, fazendo-nos ver e compreender al\xe9m do academicamente estabelecido. O itiner\xe1rio publicado \xe9 um exemplo orientativo de uma edi\xe7\xe3o anterior: cada ano a viagem \xe9 revista e melhorada, pelo que o percurso, as visitas e as condi\xe7\xf5es podem variar.',
 },
 'fr': {
   K_P1: '\xc0 consulter pour chaque \xe9dition',
   K_P2: 'Le prix varie selon l\'ann\xe9e et le programme',
   K_LEAD: 'Avec l\'exp\xe9rience depuis 2004 avec des groupes. Nous voyons tant de choses qu\'aucune autre organisation n\'offre. Gabriel Silva donnera des conf\xe9rences et des causeries pendant une grande partie du parcours, nous faisant voir et comprendre au-del\xe0 de ce qui est acad\xe9miquement \xe9tabli. L\'itin\xe9raire publi\xe9 est un exemple indicatif d\'une \xe9dition pr\xe9c\xe9dente : chaque ann\xe9e, le voyage est revu et am\xe9lior\xe9, de sorte que le parcours, les visites et les conditions peuvent varier.',
 },
 'de': {
   K_P1: 'Auf Anfrage f\xfcr jede Ausgabe',
   K_P2: 'Der Preis variiert je nach Jahr und Programm',
   K_LEAD: 'Mit der Erfahrung seit 2004 mit Gruppen. Wir sehen so viele Dinge, wie keine andere Organisation bietet. Gabriel Silva wird auf einem Gro\xdfteil der Reise Vortr\xe4ge und Gespr\xe4che halten und uns \xfcber das akademisch Festgelegte hinaus sehen und verstehen lassen. Die ver\xf6ffentlichte Reiseroute ist ein Beispiel einer fr\xfcheren Ausgabe: Jedes Jahr wird die Reise \xfcberpr\xfcft und verbessert, sodass Route, Besuche und Konditionen variieren k\xf6nnen.',
 },
 'ru': {
   K_P1: '\u041f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u043f\u043e\u0435\u0437\u0434\u043a\u0438',
   K_P2: '\u0426\u0435\u043d\u0430 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0433\u043e\u0434\u0430 \u0438 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b',
   K_LEAD: '\u0421 \u043e\u043f\u044b\u0442\u043e\u043c \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0433\u0440\u0443\u043f\u043f\u0430\u043c\u0438 \u0441 2004 \u0433\u043e\u0434\u0430. \u041c\u044b \u0443\u0432\u0438\u0434\u0438\u043c \u0441\u0442\u043e\u043b\u044c\u043a\u043e, \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043d\u0435 \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u0435\u0442 \u043d\u0438 \u043e\u0434\u043d\u0430 \u0434\u0440\u0443\u0433\u0430\u044f \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f. \u0413\u0430\u0431\u0440\u0438\u044d\u043b\u044c \u0421\u0438\u043b\u044c\u0432\u0430 \u043f\u0440\u043e\u0432\u0435\u0434\u0451\u0442 \u043b\u0435\u043a\u0446\u0438\u0438 \u0438 \u0431\u0435\u0441\u0435\u0434\u044b \u043d\u0430 \u0431\u043e\u043b\u044c\u0448\u0435\u0439 \u0447\u0430\u0441\u0442\u0438 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0430, \u043f\u043e\u043c\u043e\u0433\u0430\u044f \u043d\u0430\u043c \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u0438 \u043f\u043e\u043d\u044f\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435, \u0447\u0435\u043c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e \u0430\u043a\u0430\u0434\u0435\u043c\u0438\u0447\u0435\u0441\u043a\u0438. \u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043c\u0430\u0440\u0448\u0440\u0443\u0442 \u2014 \u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u043e\u0447\u043d\u044b\u0439 \u043f\u0440\u0438\u043c\u0435\u0440 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u0439 \u043f\u043e\u0435\u0437\u0434\u043a\u0438: \u043a\u0430\u0436\u0434\u044b\u0439 \u0433\u043e\u0434 \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435 \u043f\u0435\u0440\u0435\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0438 \u0443\u043b\u0443\u0447\u0448\u0430\u0435\u0442\u0441\u044f, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043c\u0430\u0440\u0448\u0440\u0443\u0442, \u043f\u043e\u0441\u0435\u0449\u0435\u043d\u0438\u044f \u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u043c\u043e\u0433\u0443\u0442 \u043c\u0435\u043d\u044f\u0442\u044c\u0441\u044f.',
 },
 'ar': {
   K_P1: '\u0639\u0646\u062f \u0627\u0644\u0637\u0644\u0628 \u0644\u0643\u0644 \u0631\u062d\u0644\u0629',
   K_P2: '\u064a\u062e\u062a\u0644\u0641 \u0627\u0644\u0633\u0639\u0631 \u062d\u0633\u0628 \u0627\u0644\u0633\u0646\u0629 \u0648\u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062c',
   K_LEAD: '\u0628\u062e\u0628\u0631\u0629 \u0645\u0646\u0630 \u0639\u0627\u0645 2004 \u0645\u0639 \u0627\u0644\u0645\u062c\u0645\u0648\u0639\u0627\u062a. \u0646\u0631\u0649 \u0623\u0634\u064a\u0627\u0621 \u0643\u062b\u064a\u0631\u0629 \u0644\u0627 \u062a\u0642\u062f\u0645\u0647\u0627 \u0623\u064a \u0645\u0646\u0638\u0645\u0629 \u0623\u062e\u0631\u0649. \u0633\u064a\u0642\u062f\u0645 \u063a\u0627\u0628\u0631\u064a\u064a\u0644 \u0633\u064a\u0644\u0641\u0627 \u0645\u062d\u0627\u0636\u0631\u0627\u062a \u0648\u0623\u062d\u0627\u062f\u064a\u062b \u0641\u064a \u0645\u0639\u0638\u0645 \u0627\u0644\u0631\u062d\u0644\u0629\u060c \u0645\u0645\u0627 \u064a\u062c\u0639\u0644\u0646\u0627 \u0646\u0631\u0649 \u0648\u0646\u0641\u0647\u0645 \u0645\u0627 \u0647\u0648 \u0623\u0628\u0639\u062f \u0645\u0646 \u0627\u0644\u0645\u0642\u0631\u0631 \u0623\u0643\u0627\u062f\u064a\u0645\u064a\u0627\u064b. \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062c \u0627\u0644\u0645\u0646\u0634\u0648\u0631 \u0645\u062b\u0627\u0644 \u0627\u0633\u062a\u0631\u0634\u0627\u062f\u064a \u0645\u0646 \u0631\u062d\u0644\u0629 \u0633\u0627\u0628\u0642\u0629: \u062a\u062a\u0645 \u0645\u0631\u0627\u062c\u0639\u0629 \u0627\u0644\u0631\u062d\u0644\u0629 \u0648\u062a\u062d\u0633\u064a\u0646\u0647\u0627 \u0643\u0644 \u0639\u0627\u0645\u060c \u0644\u0630\u0627 \u0642\u062f \u064a\u062e\u062a\u0644\u0641 \u0627\u0644\u0645\u0633\u0627\u0631 \u0648\u0627\u0644\u0632\u064a\u0627\u0631\u0627\u062a \u0648\u0627\u0644\u0634\u0631\u0648\u0637.',
 },
}

MAP = {OLD_LEAD_KEY: K_LEAD}
ADD_AFTER_ANCHOR = "'Precio':"  # insertamos las claves nuevas tras la clave 'Precio' de cada idioma

def esc(v):
    return v.replace(chr(92), chr(92) + chr(92)).replace(chr(39), chr(92) + chr(39))

lang = None
out = []
n_rep = n_add = 0
for ln in lines:
    m = re.match(r'^  ([a-z]{2}): \{', ln)
    if m:
        lang = m.group(1)
    done = False
    if lang in T:
        for ok, nk in MAP.items():
            if ln.lstrip().startswith("'" + ok + "':"):
                out.append("    '" + nk + "': '" + esc(T[lang][nk]) + "',")
                n_rep += 1
                done = True
                break
    out.append(ln)
    if not done and lang in T and ln.lstrip().startswith(ADD_AFTER_ANCHOR):
        out.append("    '" + K_P1 + "': '" + esc(T[lang][K_P1]) + "',")
        out.append("    '" + K_P2 + "': '" + esc(T[lang][K_P2]) + "',")
        n_add += 1
    if lang and ln.rstrip() == '},':
        lang = None

open(p, 'w', encoding='utf8').write('\n'.join(out))
print('lead replaced:', n_rep, 'price keys added:', n_add)
