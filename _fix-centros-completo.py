# -*- coding: utf-8 -*-
import re,shutil,os
from PIL import Image

# ---------- 1) imagenes nuevas ----------
def opt(src,dst,w=900):
    im=Image.open(src).convert('RGB')
    im.thumbnail((w,w*2),Image.LANCZOS)
    im.save(dst,'JPEG',quality=82,optimize=True)
    print('img',dst,im.size)

opt('_dl/camilo.jpg','assets/piramicasa/centros/centro_terapeutico_tipi.jpg')
opt('_dl/centro_piramidal_julio_ceres.jpg','assets/piramicasa/centros/centro_piramidal_julio_ceres.jpg')
opt('_dl/piramide_sekhmet_07.jpg','assets/piramicasa/centros/centro_terapeutico_aurora.jpg')

# ---------- 2) chunk ----------
p='_next/static/chunks/app/centros-terapia/page-ea18f1501f1cc3d3.js'
src=open(p,encoding='utf8').read()

def rep(old,new,tag,n=1):
    global src
    c=src.count(old); print(tag,c); assert c>=1,tag
    src=src.replace(old,new,n)

# -- TIPI: localizacion, descripcion e imagen correctas (Camilo Candel Torres, El Vendrell)
rep('{name:"Centro Terap\\xe9utico T.I.P.I.",location:"Espa\\xf1a",description:"Centro terap\\xe9utico especializado en terapia piramidal integral."',
    '{name:"Centro Terap\\xe9utico T.I.P.I.",location:"El Vendrell, Catalu\\xf1a, Espa\\xf1a",description:"Camilo Candel Torres ofrece terapia con Indiba y pir\\xe1mides en El Vendrell."','tipi-txt')
rep('phone:"669 74 54 29",link:"/piramicasa/centros/centro-tipi.html",img:"/piramicasa/assets/piramicasa/centros/centro_piramidal_el_camino.jpg"',
    'phone:"669 74 54 29",link:"/piramicasa/centros/centro-tipi.html",img:"/piramicasa/assets/piramicasa/centros/centro_terapeutico_tipi.jpg"','tipi-img')

# -- Casa Rural El Camino: insertar tras El Despertar (antes de TIPI), como en la web vieja
camino='{name:"Casa Rural El Camino",location:"Sierra de Gredos, Espa\\xf1a",description:"Casa rural que incorpora Camas Piramidales y pir\\xe1mides modelo H\\xe9rcules a sus servicios.",phone:null,link:null,img:"/piramicasa/assets/piramicasa/centros/centro_piramidal_el_camino.jpg"},'
rep('{name:"Centro Terap\\xe9utico T.I.P.I."',camino+'{name:"Centro Terap\\xe9utico T.I.P.I."','camino-ins')

# -- Julio Ceres: insertar tras Marcelo Bengoechea
julio='{name:"Terapeuta Julio Ceres",location:"Santa Fe, Argentina",description:"Terapeuta piramidal en Santa Fe, Argentina.",phone:null,link:null,img:"/piramicasa/assets/piramicasa/centros/centro_piramidal_julio_ceres.jpg"},'
rep('{name:"Terapeuta Gabriel Garc\\xeda"',julio+'{name:"Terapeuta Gabriel Garc\\xeda"','julio-ins')

# -- Aurora: imagen Sekhmet recuperada de la web vieja
rep('link:null,img:null}]','link:null,img:"/piramicasa/assets/piramicasa/centros/centro_terapeutico_aurora.jpg"}]','aurora-img')

# -- direcciones: Despertar, Rincon y Marcelo ya la tienen; falta Randall
rep('description:"Terapia de Amma, Sekkotsu y Piramidoterapia.",phone:"(506) 8836-1560"',
    'description:"Terapia de Amma, Sekkotsu y Piramidoterapia.",address:"Calle 6, Avenida 15 - Heredia - Costa Rica",phone:"(506) 8836-1560"','dir-randall')

open(p,'w',encoding='utf8').write(src)
print('---')
print('centros totales:',len(re.findall(r'\{name:"',src)))

# ---------- 3) traducciones ----------
t=open('assets/translations.js',encoding='utf8').read()
NEW={
'en':[("Casa Rural El Camino","El Camino Country House"),
      ("Sierra de Gredos, Espa\xf1a","Sierra de Gredos, Spain"),
      ("Casa rural que incorpora Camas Piramidales y pir\xe1mides modelo H\xe9rcules a sus servicios.","A rural house that incorporates Pyramid Beds and Hercules-model pyramids into its services."),
      ("Terapeuta Julio Ceres","Therapist Julio Ceres"),
      ("Santa Fe, Argentina","Santa Fe, Argentina"),
      ("Terapeuta piramidal en Santa Fe, Argentina.","Pyramid therapist in Santa Fe, Argentina."),
      ("El Vendrell, Catalu\xf1a, Espa\xf1a","El Vendrell, Catalonia, Spain"),
      ("Camilo Candel Torres ofrece terapia con Indiba y pir\xe1mides en El Vendrell.","Camilo Candel Torres offers Indiba and pyramid therapy in El Vendrell."),
      ("Direcci\xf3n:","Address:")],
'pt':[("Casa Rural El Camino","Casa Rural El Camino"),
      ("Sierra de Gredos, Espa\xf1a","Sierra de Gredos, Espanha"),
      ("Casa rural que incorpora Camas Piramidales y pir\xe1mides modelo H\xe9rcules a sus servicios.","Casa rural que incorpora Camas Piramidais e pir\xe2mides modelo Hercules aos seus servi\xe7os."),
      ("Terapeuta Julio Ceres","Terapeuta Julio Ceres"),
      ("Santa Fe, Argentina","Santa Fe, Argentina"),
      ("Terapeuta piramidal en Santa Fe, Argentina.","Terapeuta piramidal em Santa Fe, Argentina."),
      ("El Vendrell, Catalu\xf1a, Espa\xf1a","El Vendrell, Catalunha, Espanha"),
      ("Camilo Candel Torres ofrece terapia con Indiba y pir\xe1mides en El Vendrell.","Camilo Candel Torres oferece terapia com Indiba e pir\xe2mides em El Vendrell."),
      ("Direcci\xf3n:","Endere\xe7o:")],
'fr':[("Casa Rural El Camino","G\xeete Rural El Camino"),
      ("Sierra de Gredos, Espa\xf1a","Sierra de Gredos, Espagne"),
      ("Casa rural que incorpora Camas Piramidales y pir\xe1mides modelo H\xe9rcules a sus servicios.","Maison rurale qui int\xe8gre des Lits Pyramidaux et des pyramides mod\xe8le Hercules dans ses services."),
      ("Terapeuta Julio Ceres","Th\xe9rapeute Julio Ceres"),
      ("Santa Fe, Argentina","Santa Fe, Argentine"),
      ("Terapeuta piramidal en Santa Fe, Argentina.","Th\xe9rapeute pyramidal \xe0 Santa Fe, Argentine."),
      ("El Vendrell, Catalu\xf1a, Espa\xf1a","El Vendrell, Catalogne, Espagne"),
      ("Camilo Candel Torres ofrece terapia con Indiba y pir\xe1mides en El Vendrell.","Camilo Candel Torres propose une th\xe9rapie avec Indiba et des pyramides \xe0 El Vendrell."),
      ("Direcci\xf3n:","Adresse :")],
'de':[("Casa Rural El Camino","Landhaus El Camino"),
      ("Sierra de Gredos, Espa\xf1a","Sierra de Gredos, Spanien"),
      ("Casa rural que incorpora Camas Piramidales y pir\xe1mides modelo H\xe9rcules a sus servicios.","Landhaus, das Pyramidenbetten und Pyramiden des Modells Hercules in seine Angebote integriert."),
      ("Terapeuta Julio Ceres","Therapeut Julio Ceres"),
      ("Santa Fe, Argentina","Santa Fe, Argentinien"),
      ("Terapeuta piramidal en Santa Fe, Argentina.","Pyramidentherapeut in Santa Fe, Argentinien."),
      ("El Vendrell, Catalu\xf1a, Espa\xf1a","El Vendrell, Katalonien, Spanien"),
      ("Camilo Candel Torres ofrece terapia con Indiba y pir\xe1mides en El Vendrell.","Camilo Candel Torres bietet Indiba- und Pyramidentherapie in El Vendrell an."),
      ("Direcci\xf3n:","Adresse:")],
'ru':[("Casa Rural El Camino","\u0417\u0430\u0433\u043e\u0440\u043e\u0434\u043d\u044b\u0439 \u0434\u043e\u043c \u042d\u043b\u044c \u041a\u0430\u043c\u0438\u043d\u043e"),
      ("Sierra de Gredos, Espa\xf1a","\u0421\u044c\u0435\u0440\u0440\u0430-\u0434\u0435-\u0413\u0440\u0435\u0434\u043e\u0441, \u0418\u0441\u043f\u0430\u043d\u0438\u044f"),
      ("Casa rural que incorpora Camas Piramidales y pir\xe1mides modelo H\xe9rcules a sus servicios.","\u0417\u0430\u0433\u043e\u0440\u043e\u0434\u043d\u044b\u0439 \u0434\u043e\u043c, \u0432\u043a\u043b\u044e\u0447\u0430\u044e\u0449\u0438\u0439 \u0432 \u0441\u0432\u043e\u0438 \u0443\u0441\u043b\u0443\u0433\u0438 \u043f\u0438\u0440\u0430\u043c\u0438\u0434\u0430\u043b\u044c\u043d\u044b\u0435 \u043a\u0440\u043e\u0432\u0430\u0442\u0438 \u0438 \u043f\u0438\u0440\u0430\u043c\u0438\u0434\u044b \u043c\u043e\u0434\u0435\u043b\u0438 \u0413\u0435\u0440\u043a\u0443\u043b\u0435\u0441."),
      ("Terapeuta Julio Ceres","\u0422\u0435\u0440\u0430\u043f\u0435\u0432\u0442 \u0425\u0443\u043b\u0438\u043e \u0421\u0435\u0440\u0435\u0441"),
      ("Santa Fe, Argentina","\u0421\u0430\u043d\u0442\u0430-\u0424\u0435, \u0410\u0440\u0433\u0435\u043d\u0442\u0438\u043d\u0430"),
      ("Terapeuta piramidal en Santa Fe, Argentina.","\u041f\u0438\u0440\u0430\u043c\u0438\u0434\u0430\u043b\u044c\u043d\u044b\u0439 \u0442\u0435\u0440\u0430\u043f\u0435\u0432\u0442 \u0432 \u0421\u0430\u043d\u0442\u0430-\u0424\u0435, \u0410\u0440\u0433\u0435\u043d\u0442\u0438\u043d\u0430."),
      ("El Vendrell, Catalu\xf1a, Espa\xf1a","\u042d\u043b\u044c-\u0412\u0435\u043d\u0434\u0440\u0435\u043b\u044c, \u041a\u0430\u0442\u0430\u043b\u043e\u043d\u0438\u044f, \u0418\u0441\u043f\u0430\u043d\u0438\u044f"),
      ("Camilo Candel Torres ofrece terapia con Indiba y pir\xe1mides en El Vendrell.","\u041a\u0430\u043c\u0438\u043b\u043e \u041a\u0430\u043d\u0434\u0435\u043b\u044c \u0422\u043e\u0440\u0440\u0435\u0441 \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u0435\u0442 \u0442\u0435\u0440\u0430\u043f\u0438\u044e \u0441 Indiba \u0438 \u043f\u0438\u0440\u0430\u043c\u0438\u0434\u0430\u043c\u0438 \u0432 \u042d\u043b\u044c-\u0412\u0435\u043d\u0434\u0440\u0435\u043b\u0435."),
      ("Direcci\xf3n:","\u0410\u0434\u0440\u0435\u0441:")],
'ar':[("Casa Rural El Camino","\u0645\u0646\u0632\u0644 \u0625\u0644 \u0643\u0627\u0645\u064a\u0646\u0648 \u0627\u0644\u0631\u064a\u0641\u064a"),
      ("Sierra de Gredos, Espa\xf1a","\u0633\u064a\u064a\u0631\u0627 \u062f\u064a \u063a\u0631\u064a\u062f\u0648\u0633\u060c \u0625\u0633\u0628\u0627\u0646\u064a\u0627"),
      ("Casa rural que incorpora Camas Piramidales y pir\xe1mides modelo H\xe9rcules a sus servicios.","\u0645\u0646\u0632\u0644 \u0631\u064a\u0641\u064a \u064a\u0636\u0645 \u0623\u0633\u0631\u0629 \u0647\u0631\u0645\u064a\u0629 \u0648\u0623\u0647\u0631\u0627\u0645\u0627\u062a \u0645\u0646 \u0637\u0631\u0627\u0632 \u0647\u064a\u0631\u0643\u0648\u0644\u064a\u0633 \u0636\u0645\u0646 \u062e\u062f\u0645\u0627\u062a\u0647."),
      ("Terapeuta Julio Ceres","\u0627\u0644\u0645\u0639\u0627\u0644\u062c \u062e\u0648\u0644\u064a\u0648 \u0633\u064a\u0631\u064a\u0633"),
      ("Santa Fe, Argentina","\u0633\u0627\u0646\u062a\u0627 \u0641\u064a\u060c \u0627\u0644\u0623\u0631\u062c\u0646\u062a\u064a\u0646"),
      ("Terapeuta piramidal en Santa Fe, Argentina.","\u0645\u0639\u0627\u0644\u062c \u0628\u0627\u0644\u0623\u0647\u0631\u0627\u0645\u0627\u062a \u0641\u064a \u0633\u0627\u0646\u062a\u0627 \u0641\u064a\u060c \u0627\u0644\u0623\u0631\u062c\u0646\u062a\u064a\u0646."),
      ("El Vendrell, Catalu\xf1a, Espa\xf1a","\u0625\u0644 \u0641\u0646\u062f\u0631\u064a\u0644\u060c \u0643\u0627\u062a\u0627\u0644\u0648\u0646\u064a\u0627\u060c \u0625\u0633\u0628\u0627\u0646\u064a\u0627"),
      ("Camilo Candel Torres ofrece terapia con Indiba y pir\xe1mides en El Vendrell.","\u064a\u0642\u062f\u0645 \u0643\u0627\u0645\u064a\u0644\u0648 \u0643\u0627\u0646\u062f\u064a\u0644 \u062a\u0648\u0631\u064a\u0633 \u0627\u0644\u0639\u0644\u0627\u062c \u0628\u0640 Indiba \u0648\u0627\u0644\u0623\u0647\u0631\u0627\u0645\u0627\u062a \u0641\u064a \u0625\u0644 \u0641\u0646\u062f\u0631\u064a\u0644."),
      ("Direcci\xf3n:","\u0627\u0644\u0639\u0646\u0648\u0627\u0646:")],
}
ANCHOR="'Pir\xe1mides, Agua y Vida'"
pos=0
for lang in ['en','pt','fr','de','ru','ar']:
    li=t.find(lang+': {',pos)
    ai=t.find(ANCHOR,li)
    eol=t.find('\n',ai)
    ins=''.join("    '%s': '%s',\n"%(k,v) for k,v in NEW[lang])
    t=t[:eol+1]+ins+t[eol+1:]
    pos=eol+len(ins)
    print(lang,'+',len(NEW[lang]),'claves')
open('assets/translations.js','w',encoding='utf8').write(t)

