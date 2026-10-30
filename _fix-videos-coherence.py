import re

# ============ A) COHERENCIA TITULO<->VIDEO en el chunk ============
p='_next/static/chunks/app/videos/page-fe193b5e40eda75b.js'
src=open(p,encoding='utf8').read()

def replace_obj(anchor_start, anchor_end, new_obj):
    global src
    i=src.find(anchor_start)
    j=src.find(anchor_end,i)
    assert i>0 and j>i, (anchor_start,i,j)
    j+=len(anchor_end)
    print('OBJ',anchor_start[:44],'->',src[i:i+70])
    src=src[:i]+new_obj+src[j:]

# 1) Sida: titulo/descripcion coherentes con "Testimonio1"
old_s='description:"Documental sobre la terapia piramidal aplicada a casos de VIH/sida.",img:null,videos:[{title:"Terapia piramidal y sida",youtubeId:"fgBsILHPySQ"}]'
new_s='description:"Testimonio y material documental sobre la terapia piramidal aplicada a casos de VIH/sida.",img:null,videos:[{title:"Testimonio: Terapia piramidal y sida",youtubeId:"fgBsILHPySQ"}]'
print('sida:',src.count(old_s)); src=src.replace(old_s,new_s)

# 2) Revelando Misterios -> Historia de las Piramides (video real: HISTORIA DE LAS PIRAMIDES)
replace_obj('{title:"Revelando Misterios"','lyPJ6AlDcis"}]}',
 '{title:"Historia de las Pir\\xe1mides",description:"Recorrido por la historia de las pir\\xe1mides y sus misterios.",img:null,videos:[{title:"Historia de las Pir\\xe1mides",youtubeId:"lyPJ6AlDcis"}]}')

# 3) Randall Costa Rica -> Vertice Piramidal (video1 muerto LOGIN_REQUIRED; video2 real: Vertice Piramidal)
replace_obj('{title:"Randall S\\xe1nchez - Terapia Piramidal Costa Rica"','9LtdKQWwtCs"}]}',
 '{title:"V\\xe9rtice Piramidal",description:"El v\\xe9rtice piramidal: el punto donde se concentra el efecto de la pir\\xe1mide.",img:null,videos:[{title:"V\\xe9rtice Piramidal",youtubeId:"9LtdKQWwtCs"}]}')

# 4) Mis Enigmas Favoritos -> El Poder de las Piramides (video real)
replace_obj('{title:"Entrevista en Mis Enigmas Favoritos"','5i8n1H7U_wQ"}]}',
 '{title:"El Poder de las Pir\\xe1mides",description:"El poder de las pir\\xe1mides explicado por Gabriel Silva.",img:"/piramicasa/assets/piramicasa/videos/video-entrevista.jpg",videos:[{title:"El Poder de las Pir\\xe1mides",youtubeId:"5i8n1H7U_wQ"}]}')

open(p,'w',encoding='utf8').write(src)

# ============ B) CSS: centrar + borde derecho simetrico ============
h=open('videos.html',encoding='utf8').read()
css='''<style id="pm-videos-center">
.pm-video-category{border-right:4px solid var(--pm-oro)}
.pm-video-category-header{flex-direction:column;align-items:center;text-align:center}
.pm-video-category-title,.pm-video-category-desc{text-align:center}
.pm-video-category-img{margin:0 auto}
.pm-videos-grid{grid-template-columns:repeat(auto-fill,minmax(min(320px,100%),400px));justify-content:center}
.pm-video-title{text-align:center}
</style>
</head>'''
if 'pm-videos-center' not in h:
    assert '</head>' in h
    h=h.replace('</head>',css,1)
    open('videos.html','w',encoding='utf8').write(h)
    print('css insertado')
else: print('css ya estaba')

# ============ C) traducciones nuevas ============
t=open('assets/translations.js',encoding='utf8').read()
NEW={
'en':[("Historia de las Pir\xe1mides","History of the Pyramids"),
      ("Recorrido por la historia de las pir\xe1mides y sus misterios.","A journey through the history of the pyramids and their mysteries."),
      ("V\xe9rtice Piramidal","Pyramidal Vertex"),
      ("El v\xe9rtice piramidal: el punto donde se concentra el efecto de la pir\xe1mide.","The pyramidal vertex: the point where the pyramid's effect is concentrated."),
      ("El Poder de las Pir\xe1mides","The Power of the Pyramids"),
      ("El poder de las pir\xe1mides explicado por Gabriel Silva.","The power of the pyramids explained by Gabriel Silva."),
      ("Testimonio: Terapia piramidal y sida","Testimony: Pyramid therapy and AIDS"),
      ("Testimonio y material documental sobre la terapia piramidal aplicada a casos de VIH/sida.","Testimony and documentary material on pyramid therapy applied to HIV/AIDS cases.")],
'pt':[("Historia de las Pir\xe1mides","Hist\xf3ria das Pir\xe2mides"),
      ("Recorrido por la historia de las pir\xe1mides y sus misterios.","Um percurso pela hist\xf3ria das pir\xe2mides e seus mist\xe9rios."),
      ("V\xe9rtice Piramidal","V\xe9rtice Piramidal"),
      ("El v\xe9rtice piramidal: el punto donde se concentra el efecto de la pir\xe1mide.","O v\xe9rtice piramidal: o ponto onde se concentra o efeito da pir\xe2mide."),
      ("El Poder de las Pir\xe1mides","O Poder das Pir\xe2mides"),
      ("El poder de las pir\xe1mides explicado por Gabriel Silva.","O poder das pir\xe2mides explicado por Gabriel Silva."),
      ("Testimonio: Terapia piramidal y sida","Testemunho: Terapia piramidal e sida"),
      ("Testimonio y material documental sobre la terapia piramidal aplicada a casos de VIH/sida.","Testemunho e material documental sobre a terapia piramidal aplicada a casos de HIV/sida.")],
'fr':[("Historia de las Pir\xe1mides","Histoire des Pyramides"),
      ("Recorrido por la historia de las pir\xe1mides y sus misterios.","Un parcours \xe0 travers l'histoire des pyramides et leurs myst\xe8res."),
      ("V\xe9rtice Piramidal","Sommet Pyramidal"),
      ("El v\xe9rtice piramidal: el punto donde se concentra el efecto de la pir\xe1mide.","Le sommet pyramidal : le point o\xf9 se concentre l'effet de la pyramide."),
      ("El Poder de las Pir\xe1mides","Le Pouvoir des Pyramides"),
      ("El poder de las pir\xe1mides explicado por Gabriel Silva.","Le pouvoir des pyramides expliqu\xe9 par Gabriel Silva."),
      ("Testimonio: Terapia piramidal y sida","T\xe9moignage : Th\xe9rapie pyramidale et sida"),
      ("Testimonio y material documental sobre la terapia piramidal aplicada a casos de VIH/sida.","T\xe9moignage et documents sur la th\xe9rapie pyramidale appliqu\xe9e aux cas de VIH/sida.")],
'de':[("Historia de las Pir\xe1mides","Geschichte der Pyramiden"),
      ("Recorrido por la historia de las pir\xe1mides y sus misterios.","Eine Reise durch die Geschichte der Pyramiden und ihre Geheimnisse."),
      ("V\xe9rtice Piramidal","Pyramidenspitze"),
      ("El v\xe9rtice piramidal: el punto donde se concentra el efecto de la pir\xe1mide.","Die Pyramidenspitze: der Punkt, an dem sich die Wirkung der Pyramide konzentriert."),
      ("El Poder de las Pir\xe1mides","Die Kraft der Pyramiden"),
      ("El poder de las pir\xe1mides explicado por Gabriel Silva.","Die Kraft der Pyramiden erkl\xe4rt von Gabriel Silva."),
      ("Testimonio: Terapia piramidal y sida","Zeugnis: Pyramidentherapie und AIDS"),
      ("Testimonio y material documental sobre la terapia piramidal aplicada a casos de VIH/sida.","Zeugnis und Dokumentation zur Pyramidentherapie bei HIV/AIDS-F\xe4llen.")],
'ru':[("Historia de las Pir\xe1mides","\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u043f\u0438\u0440\u0430\u043c\u0438\u0434"),
      ("Recorrido por la historia de las pir\xe1mides y sus misterios.","\u041f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435 \u043f\u043e \u0438\u0441\u0442\u043e\u0440\u0438\u0438 \u043f\u0438\u0440\u0430\u043c\u0438\u0434 \u0438 \u0438\u0445 \u0442\u0430\u0439\u043d\u0430\u043c."),
      ("V\xe9rtice Piramidal","\u0412\u0435\u0440\u0448\u0438\u043d\u0430 \u043f\u0438\u0440\u0430\u043c\u0438\u0434\u044b"),
      ("El v\xe9rtice piramidal: el punto donde se concentra el efecto de la pir\xe1mide.","\u0412\u0435\u0440\u0448\u0438\u043d\u0430 \u043f\u0438\u0440\u0430\u043c\u0438\u0434\u044b: \u0442\u043e\u0447\u043a\u0430, \u0433\u0434\u0435 \u043a\u043e\u043d\u0446\u0435\u043d\u0442\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u044d\u0444\u0444\u0435\u043a\u0442 \u043f\u0438\u0440\u0430\u043c\u0438\u0434\u044b."),
      ("El Poder de las Pir\xe1mides","\u0421\u0438\u043b\u0430 \u043f\u0438\u0440\u0430\u043c\u0438\u0434"),
      ("El poder de las pir\xe1mides explicado por Gabriel Silva.","\u0421\u0438\u043b\u0430 \u043f\u0438\u0440\u0430\u043c\u0438\u0434 \u0432 \u043e\u0431\u044a\u044f\u0441\u043d\u0435\u043d\u0438\u0438 \u0413\u0430\u0431\u0440\u0438\u044d\u043b\u044f \u0421\u0438\u043b\u044c\u0432\u044b."),
      ("Testimonio: Terapia piramidal y sida","\u0421\u0432\u0438\u0434\u0435\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e: \u043f\u0438\u0440\u0430\u043c\u0438\u0434\u0430\u043b\u044c\u043d\u0430\u044f \u0442\u0435\u0440\u0430\u043f\u0438\u044f \u0438 \u0421\u041f\u0418\u0414"),
      ("Testimonio y material documental sobre la terapia piramidal aplicada a casos de VIH/sida.","\u0421\u0432\u0438\u0434\u0435\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e \u0438 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b \u043e \u043f\u0438\u0440\u0430\u043c\u0438\u0434\u0430\u043b\u044c\u043d\u043e\u0439 \u0442\u0435\u0440\u0430\u043f\u0438\u0438 \u043f\u0440\u0438 \u0412\u0418\u0427/\u0421\u041f\u0418\u0414\u0435.")],
'ar':[("Historia de las Pir\xe1mides","\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0623\u0647\u0631\u0627\u0645\u0627\u062a"),
      ("Recorrido por la historia de las pir\xe1mides y sus misterios.","\u0631\u062d\u0644\u0629 \u0639\u0628\u0631 \u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0623\u0647\u0631\u0627\u0645\u0627\u062a \u0648\u0623\u0633\u0631\u0627\u0631\u0647\u0627."),
      ("V\xe9rtice Piramidal","\u0642\u0645\u0629 \u0627\u0644\u0647\u0631\u0645"),
      ("El v\xe9rtice piramidal: el punto donde se concentra el efecto de la pir\xe1mide.","\u0642\u0645\u0629 \u0627\u0644\u0647\u0631\u0645: \u0627\u0644\u0646\u0642\u0637\u0629 \u0627\u0644\u062a\u064a \u064a\u062a\u0631\u0643\u0632 \u0641\u064a\u0647\u0627 \u062a\u0623\u062b\u064a\u0631 \u0627\u0644\u0647\u0631\u0645."),
      ("El Poder de las Pir\xe1mides","\u0642\u0648\u0629 \u0627\u0644\u0623\u0647\u0631\u0627\u0645\u0627\u062a"),
      ("El poder de las pir\xe1mides explicado por Gabriel Silva.","\u0642\u0648\u0629 \u0627\u0644\u0623\u0647\u0631\u0627\u0645\u0627\u062a \u064a\u0634\u0631\u062d\u0647\u0627 \u063a\u0627\u0628\u0631\u064a\u064a\u0644 \u0633\u064a\u0644\u0641\u0627."),
      ("Testimonio: Terapia piramidal y sida","\u0634\u0647\u0627\u062f\u0629: \u0627\u0644\u0639\u0644\u0627\u062c \u0628\u0627\u0644\u0623\u0647\u0631\u0627\u0645\u0627\u062a \u0648\u0627\u0644\u0625\u064a\u062f\u0632"),
      ("Testimonio y material documental sobre la terapia piramidal aplicada a casos de VIH/sida.","\u0634\u0647\u0627\u062f\u0629 \u0648\u0645\u0648\u0627\u062f \u0648\u062b\u0627\u0626\u0642\u064a\u0629 \u0639\u0646 \u0627\u0644\u0639\u0644\u0627\u062c \u0628\u0627\u0644\u0623\u0647\u0631\u0627\u0645\u0627\u062a \u0627\u0644\u0645\u0637\u0628\u0642 \u0639\u0644\u0649 \u062d\u0627\u0644\u0627\u062a \u0627\u0644\u0625\u064a\u062f\u0632.")],
}
ANCHOR="'Pir\xe1mides, Agua y Vida'"
pos=0
for lang in ['en','pt','fr','de','ru','ar']:
    li=t.find(lang+': {',pos)
    ai=t.find(ANCHOR,li)
    eol=t.find('\n',ai)
    ins=''.join("    '%s': '%s',\n"%(k,v) for k,v in NEW[lang] if "'%s':"%k not in t[li:t.find(lang+': {',li+10) if t.find(lang+': {',li+10)>0 else len(t)])
    ins=''.join("    '%s': '%s',\n"%(k,v) for k,v in NEW[lang])
    t=t[:eol+1]+ins+t[eol+1:]
    pos=eol+len(ins)
    print(lang,'+',len(NEW[lang]),'claves')
open('assets/translations.js','w',encoding='utf8').write(t)
