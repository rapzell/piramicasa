import re,os
src=open('_next/static/chunks/app/centros-terapia/page-ea18f1501f1cc3d3.js',encoding='utf8').read()
for m in re.finditer(r'\{name:"((?:[^"\\]|\\.)*)".*?img:(null|"(?:[^"\\]|\\.)*")',src):
    name=m.group(1).encode().decode('unicode_escape')
    img=m.group(2)
    if img=='null':
        print('%-42s img: NULL'%name); continue
    path=img.strip('"')
    if path.startswith('/piramicasa/'): path=path[len('/piramicasa/'):]
    ok=os.path.exists(path)
    print('%-42s %s %s'%(name,img,('OK' if ok else 'FALTA!!')))
