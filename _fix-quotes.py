p='assets/translations.js'
s=open(p,encoding='utf8').read()
fixes={
 "l'histoire":"l\\'histoire",
 "l'effet":"l\\'effet",
}
for a,b in fixes.items():
    print(a,s.count(a))
    s=s.replace(a,b)
open(p,'w',encoding='utf8').write(s)
