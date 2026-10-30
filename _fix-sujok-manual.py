import re, html, json

s = open('_sujok.htm', encoding='utf8', errors='replace').read()
s = re.sub(r'<script.*?</script>', '', s, flags=re.S | re.I)
s = re.sub(r'<style.*?</style>', '', s, flags=re.S | re.I)
s = re.sub(r'<!--.*?-->', '', s, flags=re.S)

START = s.find('LIBRO GRATUITO DE TRATAMIENTO SU JOK')
END = len(s)
for m in ['viaje_a_egipto_gabriel_silva', 'idiomas-piramicasa', 'footer']:
    i = s.find(m)
    if START < i < END:
        END = i
body = s[START:END]

# --- extraer secuencia de items ---
parts = re.split(r'(<(?:h[1-4]|p|li|img|ul|/ul|br)\b[^>]*>)', body, flags=re.I)
items, in_ul, li_buf = [], False, []
for part in parts:
    pm = re.match(r'<(h[1-4]|p|li|img|ul|/ul|br)\b', part, re.I)
    if pm:
        t = pm.group(1).lower()
        if t == 'img':
            m2 = re.search(r'src=["\']?([^"\' >]+)', part)
            if m2:
                items.append(('img', m2.group(1)))
        elif t == 'ul':
            in_ul = True
        elif t == '/ul':
            in_ul = False
            if li_buf:
                items.append(('list', li_buf)); li_buf = []
        continue
    txt = html.unescape(re.sub(r'<[^>]+>', ' ', part))
    txt = re.sub(r'\s+', ' ', txt).strip()
    if not txt:
        continue
    if in_ul:
        li_buf.append(txt)
    else:
        items.append(('p', txt))

DROP = {
    'OTRO REGALO MÁS DE PIRAMICASA',
    'Efecto Antiinflamatorio de la Pirámide',
}
def drop_p(p):
    t = p.strip()
    if t in DROP: return True
    if 'Visita el perfil de Gabriel' in t: return True
    if t.startswith('ÍNDICE DE COSAS GRATIS'): return True
    if t == 'FIN': return True
    if t.startswith('LOCALIZACIÓN PUNTOS DE PRESIÓN'): return True
    if t.startswith('SEMILLAS PARA SU JOK'): return True
    return False

def build_paragraphs(seq):
    out = []
    for typ, v in seq:
        if typ == 'p':
            if not drop_p(v):
                out.append(v)
        elif typ == 'list':
            # unir en chunks de <=6 items para maybeListItems (3-7 items, <130 c/u)
            chunk = []
            for li in v:
                if len(li) >= 130:
                    if chunk:
                        out.append('; '.join(chunk)); chunk = []
                    out.append(li)
                else:
                    chunk.append(li)
                    if len(chunk) == 6:
                        out.append('; '.join(chunk)); chunk = []
            if chunk:
                out.append('; '.join(chunk))
    return out

def build_images(seq, imgmap):
    out = []
    for typ, v in seq:
        if typ == 'img' and '/cosas_gratis/' in v:
            name = v.rsplit('/', 1)[-1]
            if name in imgmap:
                out.append('/piramicasa/assets/articulos-imported/' + imgmap[name])
    return out

imgmap = json.load(open('_sujok_imgmap.json'))

# split en dos partes: antes y desde 'REFLEJO SU JOK'
cut = next(i for i, (t, v) in enumerate(items) if t == 'p' and v.startswith('REFLEJO SU JOK'))
seq0 = items[:cut]
seq1 = [x for x in items[cut:] if not (x[0] == 'img' and 'servicios' in x[1])]
seq0 = [x for x in seq0 if not (x[0] == 'img' and 'servicios' in x[1])]

SRC = 'https://www.piramicasa.es/GRATIS/manual-diagnostico-tratamiento-su-jok.htm'
d = json.load(open('assets/articulos-content.json', encoding='utf8'))

d['Manual Su-Jok']['sections'] = [
    {
        'sourceUrl': SRC,
        'sourceTitle': 'MANUAL DIAGNÓSTICO Y TERAPÉUTICO "SU JOK" — Instituto Superior de Ciencias Médicas "Carlos J. Finlay" (Camagüey)',
        'paragraphs': build_paragraphs(seq0),
        'images': build_images(seq0, imgmap),
    },
    {
        'sourceUrl': SRC,
        'sourceTitle': 'REFLEJO SU JOK — Estructura energética de la mano',
        'paragraphs': build_paragraphs(seq1),
        'images': build_images(seq1, imgmap),
    },
    {
        'sourceUrl': SRC,
        'sourceTitle': 'Documentos del manual (PDF)',
        'paragraphs': [
            'Aquí puedes consultar y descargar los dos documentos en PDF que complementan este manual de Su Jok.'
        ],
        'images': [],
        'pdfs': [
            {'file': '/piramicasa/assets/archivos/Encontrar-puntos-Su-Jok.pdf',
             'title': 'Localización de puntos de presión Su Jok (PDF, 0,25 MB)'},
            {'file': '/piramicasa/assets/archivos/Semillas-con-Su-Jok.pdf',
             'title': 'Semillas para Su Jok (PDF, 2 MB)'},
        ],
    },
]

# Dr. Hammer: anexar mgh.pdf
d['Manual Dr. Hammer']['sections'][0]['pdfs'] = [
    {'file': '/piramicasa/assets/archivos/mgh.pdf',
     'title': 'Manual del Dr. Hammer (PDF)'}
]

json.dump(d, open('assets/articulos-content.json', 'w', encoding='utf8'), ensure_ascii=False, indent=2)

for si, s in enumerate(d['Manual Su-Jok']['sections']):
    print('s' + str(si), '| pars:', len(s['paragraphs']), '| imgs:', len(s.get('images', [])), '| pdfs:', len(s.get('pdfs', [])))
print('hammer pdfs:', d['Manual Dr. Hammer']['sections'][0]['pdfs'])
