import json, re, glob, os

# content.json: quitar ' Puede verlo aqui.' (con o sin punto final)
path = 'assets/articulos-content.json'
d = json.load(open(path, encoding='utf8'))
s1 = d['Piramicama transparente']['sections'][1]
for i, p in enumerate(s1['paragraphs']):
    if 'verlo aqu' in p:
        s1['paragraphs'][i] = re.sub(r'\s*Puede verlo aqu..\s*$', '', p)
        print('verlo fix:', s1['paragraphs'][i][-90:])
json.dump(d, open(path, 'w', encoding='utf8'), ensure_ascii=False, indent=2)

# i18n: estado actual de la clave 'verlo aqu' / 'indeseables'
for f in sorted(glob.glob('assets/articulos-i18n-*.json')):
    t = json.load(open(f, encoding='utf8'))
    for k, v in list(t.items()):
        if 'verlo aqu' in k or ('indeseables' in k):
            print(os.path.basename(f), 'KEY-tail:', k[-65:], '| VAL-tail:', v[-65:])
