import re
src=open('_next/static/chunks/app/videos/page-fe193b5e40eda75b.js',encoding='utf8').read()
i=src.find('let m=[')
j=src.find('];',i)
data=src[i:j+1]
dec=lambda s:s.encode().decode('unicode_escape')
for m in re.finditer(r'\{title:"((?:[^"\\]|\\.)*)",description:"((?:[^"\\]|\\.)*)",img:(null|"(?:[^"\\]|\\.)*"),videos:\[(.*?)\]',data):
    print('## SECCION:',dec(m.group(1)))
    print('   desc:',dec(m.group(2))[:120])
    if m.group(3)!='null': print('   img:',m.group(3))
    for v in re.finditer(r'title:"((?:[^"\\]|\\.)*)",youtubeId:"([^"]+)"',m.group(4)):
        print('   -',dec(v.group(1)),'->',v.group(2))
    print()
