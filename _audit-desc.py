import re
src=open('_next/static/chunks/app/centros-terapia/page-ea18f1501f1cc3d3.js',encoding='utf8').read()
for m in re.finditer(r'\{name:"((?:[^"\\]|\\.)*)",location:"((?:[^"\\]|\\.)*)",description:"((?:[^"\\]|\\.)*)"',src):
    print(m.group(1).encode().decode('unicode_escape'))
    print('   loc :',m.group(2).encode().decode('unicode_escape'))
    print('   desc:',m.group(3).encode().decode('unicode_escape')[:120])
