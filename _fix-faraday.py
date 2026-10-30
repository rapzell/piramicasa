import re, os
ROOT = r'C:\Users\David\Desktop\PROGRAMAR\Web piramicasa\piramicasa-ghpages'

files = [
 '_next/static/chunks/9547-dc2ddb0c5eae8482.js',
 '_next/static/chunks/app/centros-terapia/page-ea18f1501f1cc3d3.js',
 '_next/static/chunks/app/conferencias/page-ebae971b1f6d4b15.js',
 '_next/static/chunks/app/documento-critico/page-9785609c9ca12390.js',
 '_next/static/chunks/app/enfermedades/page-ba5eac5ee7a7a276.js',
 '_next/static/chunks/app/historia/page-bce7cfd60b642d3e.js',
 '_next/static/chunks/app/libros/page-b00393a236634f2e.js',
 '_next/static/chunks/app/menu-principal/page-58ccbe60ce95e6a2.js',
 '_next/static/chunks/app/page-221e7bed060c6ec9.js',
 '_next/static/chunks/app/presentacion/page-848ae4e5788b1f8f.js',
 '_next/static/chunks/app/salud/page-eabc09a75db00e79.js',
 '_next/static/chunks/app/testimonios/page-635fdef58fd242af.js',
 '_next/static/chunks/app/viaje-egipto/page-b7a208dbfdc9f056.js',
 '_next/static/chunks/app/videos/page-fe193b5e40eda75b.js',
]

# match the nav element ending with children:"Pir\xe1mide Faraday" or UTF-8 variant
END_ESC = 'children:"Pir\\xe1mide Faraday"})'
END_UTF = 'children:"Pir\u00e1mide Faraday"})'

for rel in files:
    p = os.path.join(ROOT, rel)
    s = open(p, encoding='utf8').read()
    removed = 0
    for END in (END_ESC, END_UTF):
        while True:
            i = s.find(END)
            if i < 0:
                break
            end = i + len(END)
            # walk backwards to the ",(0,X.jsx" separator that starts this element
            m = None
            for mm in re.finditer(r',\(0,\w+\.jsx', s[max(0, i-600):i]):
                m = mm
            if m is None:
                print(rel, 'NO START FOUND near', i)
                break
            start = max(0, i-600) + m.start()
            s = s[:start] + s[end:]
            removed += 1
    # counter fix
    c1 = s.count('children:"+10.000"')
    s = s.replace('children:"+10.000"', 'children:"10.000+"')
    c2 = s.count('M\\u00E1s de\\n10.000')
    s = s.replace('M\\u00E1s de\\n10.000', '10.000+')
    open(p, 'w', encoding='utf8').write(s)
    print(rel, '| faraday removed:', removed, '| +10.000->10.000+:', c1, '| Mas de fix:', c2)
