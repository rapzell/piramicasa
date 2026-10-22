# -*- coding: utf-8 -*-
import re

p = 'assets/translations.js'
lines = open(p, encoding='utf8').read().split('\n')

OLD_TITLE = 'Conferencia sobre Pir\xe1mides en La Garrotxa, Barcelona'
OLD_P1 = OLD_TITLE + ' (Parte 1)'
OLD_P2 = OLD_TITLE + ' (Parte 2)'
OLD_DESC = 'Conferencia sobre pir\xe1mides, piramidolog\xed y piramidoterapia en La Garrotxa, Barcelona. Dos partes.'
OLD_ENT  = 'Entrevista a Gabriel Silva por Jhonny Guzm\xe1n'
OLD_ENTD = 'Entrevista a Gabriel Silva realizada por Jhonny Guzm\xe1n.'

K_TITLE = 'Metaf\xedsica y Pir\xe1mides: no son lo que nos han contado'
K_P1 = 'Metaf\xedsica y Pir\xe1mides (Parte 1)'
K_P2 = 'Metaf\xedsica y Pir\xe1mides (Parte 2)'
K_DESC = 'Conferencia de Gabriel Silva: Metaf\xedsica y Pir\xe1mides, la T\xe1bula M\xe1xima Hiperb\xf3rea, los Ocho Principios y las Siete Leyes Herm\xe9ticas. Dos partes.'
K_KYB_DESC = 'Los Ocho Kybaliones y la T\xe1bula M\xe1xima Hiperb\xf3rea, el conocimiento herm\xe9tico legado por los constructores de las pir\xe1mides.'
K_ENT = 'Entrevista a Gabriel Silva sobre Pir\xe1mides'
K_ENTD = 'Entrevista a Gabriel Silva sobre las pir\xe1mides, el efecto piramidal y la investigaci\xf3n de Piramicasa.'

T = {
 'en': {
   K_TITLE: 'Metaphysics and Pyramids: They Are Not What We Have Been Told',
   K_P1: 'Metaphysics and Pyramids (Part 1)',
   K_P2: 'Metaphysics and Pyramids (Part 2)',
   K_DESC: 'Conference by Gabriel Silva: Metaphysics and Pyramids, the Hyperborean T\xe1bula M\xe1xima, the Eight Principles and the Seven Hermetic Laws. Two parts.',
   K_KYB_DESC: 'The Eight Kybaliones and the Hyperborean T\xe1bula M\xe1xima, the hermetic knowledge left by the builders of the pyramids.',
   K_ENT: 'Interview with Gabriel Silva about Pyramids',
   K_ENTD: 'Interview with Gabriel Silva about pyramids, the pyramid effect and Piramicasa research.',
 },
 'pt': {
   K_TITLE: 'Metaf\xedsica e Pir\xe2mides: n\xe3o s\xe3o o que nos contaram',
   K_P1: 'Metaf\xedsica e Pir\xe2mides (Parte 1)',
   K_P2: 'Metaf\xedsica e Pir\xe2mides (Parte 2)',
   K_DESC: 'Confer\xeancia de Gabriel Silva: Metaf\xedsica e Pir\xe2mides, a T\xe1bula M\xe1xima Hiperb\xf3rea, os Oito Princ\xedpios e as Sete Leis Herm\xe9ticas. Duas partes.',
   K_KYB_DESC: 'Os Oito Kybaliones e a T\xe1bula M\xe1xima Hiperb\xf3rea, o conhecimento herm\xe9tico legado pelos construtores das pir\xe2mides.',
   K_ENT: 'Entrevista com Gabriel Silva sobre Pir\xe2mides',
   K_ENTD: 'Entrevista com Gabriel Silva sobre as pir\xe2mides, o efeito piramidal e a investiga\xe7\xe3o da Piramicasa.',
 },
 'fr': {
   K_TITLE: "M\xe9taphysique et Pyramides : elles ne sont pas ce qu'on nous a racont\xe9",
   K_P1: 'M\xe9taphysique et Pyramides (Partie 1)',
   K_P2: 'M\xe9taphysique et Pyramides (Partie 2)',
   K_DESC: 'Conf\xe9rence de Gabriel Silva : M\xe9taphysique et Pyramides, la T\xe1bula M\xe1xima Hyperbor\xe9enne, les Huit Principes et les Sept Lois Herm\xe9tiques. Deux parties.',
   K_KYB_DESC: 'Les Huit Kybaliones et la T\xe1bula M\xe1xima Hyperbor\xe9enne, le savoir herm\xe9tique l\xe9gu\xe9 par les b\xe2tisseurs des pyramides.',
   K_ENT: 'Entretien avec Gabriel Silva sur les Pyramides',
   K_ENTD: "Entretien avec Gabriel Silva sur les pyramides, l'effet pyramidal et la recherche de Piramicasa.",
 },
 'de': {
   K_TITLE: 'Metaphysik und Pyramiden: sie sind nicht, was uns erz\xe4hlt wurde',
   K_P1: 'Metaphysik und Pyramiden (Teil 1)',
   K_P2: 'Metaphysik und Pyramiden (Teil 2)',
   K_DESC: 'Vortrag von Gabriel Silva: Metaphysik und Pyramiden, die Hyperbor\xe4ische T\xe1bula M\xe1xima, die Acht Prinzipien und die Sieben Hermetischen Gesetze. Zwei Teile.',
   K_KYB_DESC: 'Die Acht Kybaliones und die Hyperbor\xe4ische T\xe1bula M\xe1xima, das hermetische Wissen der Erbauer der Pyramiden.',
   K_ENT: 'Interview mit Gabriel Silva \xfcber Pyramiden',
   K_ENTD: 'Interview mit Gabriel Silva \xfcber Pyramiden, den Pyramiden-Effekt und die Forschung von Piramicasa.',
 },
 'ru': {
   K_TITLE: 'Метафизика и пирамиды: они не такие, как нам рассказывали',
   K_P1: 'Метафизика и пирамиды (Часть 1)',
   K_P2: 'Метафизика и пирамиды (Часть 2)',
   K_DESC: 'Конференция Габриэля Сильвы: Метафизика и пирамиды, Гиперборейская Табула Максима, Восемь Принципов и Семь Герметических Законов. Две части.',
   K_KYB_DESC: 'Восемь Кибалионов и Гиперборейская Табула Максима — герметическое знание, оставленное строителями пирамид.',
   K_ENT: 'Интервью с Габриэлем Сильвой о пирамидах',
   K_ENTD: 'Интервью с Габриэлем Сильвой о пирамидах, пирамидальном эффекте и исследованиях Piramicasa.',
 },
 'ar': {
   K_TITLE: 'الميتافيزيقا والأهرامات: ليست كما أخبرونا',
   K_P1: 'الميتافيزيقا والأهرامات (الجزء 1)',
   K_P2: 'الميتافيزيقا والأهرامات (الجزء 2)',
   K_DESC: 'محاضرة غابرييل سيلفا: الميتافيزيقا والأهرامات، لوح ماكسيما الهيبربوري، المبادئ الثمانية والقوانين الهرمسية السبعة. جزءان.',
   K_KYB_DESC: 'الكيباليونات الثمانية ولوح ماكسيما الهيبربوري، المعرفة الهرمسية التي تركها بناة الأهرامات.',
   K_ENT: 'مقابلة مع غابرييل سيلفا حول الأهرامات',
   K_ENTD: 'مقابلة مع غابرييل سيلفا حول الأهرامات وتأثير الهرم وأبحاث Piramicasa.',
 },
}

MAP_OLD = {OLD_TITLE: K_TITLE, OLD_P1: K_P1, OLD_P2: K_P2, OLD_DESC: K_DESC, OLD_ENT: K_ENT, OLD_ENTD: K_ENTD}
KYB_KEY = 'Los Ocho Kybaliones: El Conocimiento Herm\xe9tico'

def esc(v):
    return v.replace('\\', '\\\\').replace("'", "\\'")

lang = None
out = []
n_rep = n_add = 0
for ln in lines:
    m = re.match(r'^  ([a-z]{2}): \{', ln)
    if m:
        lang = m.group(1)
    replaced = False
    if lang in T:
        for ok, nk in MAP_OLD.items():
            if ln.lstrip().startswith("'" + ok + "':"):
                out.append("    '" + nk + "': '" + esc(T[lang][nk]) + "',")
                n_rep += 1
                replaced = True
                break
    out.append(ln)
    if not replaced and lang in T and ln.lstrip().startswith("'" + KYB_KEY + "':"):
        out.append("    '" + K_KYB_DESC + "': '" + esc(T[lang][K_KYB_DESC]) + "',")
        n_add += 1
    if lang and ln.rstrip() == '},':
        lang = None

open(p, 'w', encoding='utf8').write('\n'.join(out))
print('replaced:', n_rep, 'added:', n_add)
