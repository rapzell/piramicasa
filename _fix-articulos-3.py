import json, glob, os

path = 'assets/articulos-content.json'
d = json.load(open(path, encoding='utf8'))
deleted = set()

def del_par(art, si, pred):
    ps = d[art]['sections'][si]['paragraphs']
    keep = []
    for p in ps:
        if pred(p):
            deleted.add(p)
        else:
            keep.append(p)
    d[art]['sections'][si]['paragraphs'] = keep

CAPS_LINKS = {
    'REMEDIO CASERO PARA TRATAR LAS PICADURAS DE MOSQUITOS Y OTROS INSECTOS',
    'REPELENTE NATURAL CONTRA CASI TODOS LOS INSECTOS',
    'TESTIMONIO EFECTOS CURATIVOS EN UNA CAMA PIRAMIDAL',
}

# 1) Trampa mosquitos s0: 3 enlaces en mayusculas
del_par('Trampa para mosquitos', 0, lambda p: p.strip() in CAPS_LINKS)
# 2) Trampa cucarachas s1: mismo enlace al final
del_par('Trampa para cucarachas', 1, lambda p: p.strip() == 'TESTIMONIO EFECTOS CURATIVOS EN UNA CAMA PIRAMIDAL')
# 3) Experimentos caseros s4: mismo enlace (mismo resto)
del_par('Experimentos caseros', 4, lambda p: p.strip() == 'TESTIMONIO EFECTOS CURATIVOS EN UNA CAMA PIRAMIDAL')
# 4) FAQ s1: 'Disclaimer especial: ...'
del_par('FAQ Pir\u00e1mides', 1, lambda p: 'Disclaimer especial' in p)
# 5) Viaje a Egipto s0: linea Pinterest
del_par('Viaje a Egipto', 0, lambda p: 'tablero VIAJE A EGIPTO' in p)
# 6) Viaje a Egipto: borrar bloque 2 entero (sections[1])
sec = d['Viaje a Egipto']['sections'].pop(1)
for p in sec.get('paragraphs', []):
    deleted.add(p)
if sec.get('sourceTitle'):
    deleted.add(sec['sourceTitle'])
# 7) Representantes: vaciar imagenes de todas las secciones
for s in d['Representantes']['sections']:
    s['images'] = []
# 8) Piramidologia historica s3 (NUESTRO VIAJE A CUBA): vaciar imagenes
d['Piramidolog\u00eda hist\u00f3rica']['sections'][3]['images'] = []

json.dump(d, open(path, 'w', encoding='utf8'), ensure_ascii=False, indent=2)
print('parrafos eliminados:', len(deleted))

# i18n: borrar claves de los textos eliminados
for f in glob.glob('assets/articulos-i18n-*.json'):
    t = json.load(open(f, encoding='utf8'))
    n = 0
    for k in list(t.keys()):
        if k in deleted:
            del t[k]
            n += 1
    json.dump(t, open(f, 'w', encoding='utf8'), ensure_ascii=False, indent=2)
    print(os.path.basename(f), 'claves borradas:', n)
