/* Piramicasa Chatbot i18n — Translated chatbot responses and keywords
 * Provides translated responses for each category based on PM_lang
 */
(function(){
"use strict";

var PM_CB_I18N = {
  pageLink: {
    en: 'See more on the website',
    pt: 'Ver mais no site',
    fr: 'Voir plus sur le site',
    de: 'Mehr auf der Website',
    ru: 'Подробнее на сайте',
    ar: 'المزيد على الموقع',
  },
  article: {
    es: 'Tenemos un artículo sobre este tema: «{t}». En él encontrarás información más detallada.',
    en: 'We have an article about this topic: "{t}". You will find more detailed information there.',
    pt: 'Temos um artigo sobre este tema: «{t}». Nele encontrará informação mais detalhada.',
    fr: 'Nous avons un article sur ce sujet : « {t} ». Vous y trouverez des informations plus détaillées.',
    de: 'Wir haben einen Artikel zu diesem Thema: „{t}“. Dort finden Sie ausführlichere Informationen.',
    ru: 'У нас есть статья на эту тему: «{t}». В ней вы найдёте более подробную информацию.',
    ar: 'لدينا مقال حول هذا الموضوع: «{t}». ستجد فيه معلومات أكثر تفصيلاً.',
  },
  articleBtn: {
    es: 'Leer el artículo',
    en: 'Read the article',
    pt: 'Ler o artigo',
    fr: "Lire l'article",
    de: 'Artikel lesen',
    ru: 'Читать статью',
    ar: 'اقرأ المقال',
  },
  greeting: {
    en: 'Hello! 👋 I am the virtual assistant of <strong>Piramicasa</strong>. I can guide you through our website and help you with:\n• 📋 Information about pyramids and models\n• 💰 Prices and quotes\n• 📅 Book a consultation or advice\n• 🔬 Science and research on the pyramid effect\n• 🏥 Pyramid therapy centers\n• 📹 Videos and testimonials\n• 📦 Shipping and contact\n\nHow can I help you? Type your question or use the buttons below.',
    pt: 'Olá! 👋 Sou o assistente virtual da <strong>Piramicasa</strong>. Posso guiá-lo pelo nosso site e ajudá-lo com:\n• 📋 Informações sobre pirâmides e modelos\n• 💰 Preços e orçamentos\n• 📅 Agendar uma consulta ou aconselhamento\n• 🔬 Ciência e pesquisa do efeito piramidal\n• 🏥 Centros de terapia piramidal\n• 📹 Vídeos e testemunhos\n• 📦 Envios e contacto\n\nEm que posso ajudar? Escreva a sua pergunta ou use os botões abaixo.',
    fr: 'Bonjour ! 👋 Je suis l\'assistant virtuel de <strong>Piramicasa</strong>. Je peux vous guider sur notre site et vous aider avec :\n• 📋 Informations sur les pyramides et modèles\n• 💰 Prix et devis\n• 📅 Prendre un rendez-vous ou consultation\n• 🔬 Science et recherche sur l\'effet pyramidal\n• 🏥 Centres de thérapie pyramidale\n• 📹 Vidéos et témoignages\n• 📦 Expédition et contact\n\nComment puis-je vous aider ? Tapez votre question ou utilisez les boutons ci-dessous.',
    de: 'Hallo! 👋 Ich bin der virtuelle Assistent von <strong>Piramicasa</strong>. Ich kann Sie durch unsere Website führen und Ihnen helfen bei:\n• 📋 Informationen über Pyramiden und Modelle\n• 💰 Preise und Angebote\n• 📅 Beratung oder Termin vereinbaren\n• 🔬 Wissenschaft und Forschung zum Pyramiden-Effekt\n• 🏥 Pyramiden-Therapiezentren\n• 📹 Videos und Testimonials\n• 📦 Versand und Kontakt\n\nWie kann ich Ihnen helfen? Geben Sie Ihre Frage ein oder nutzen Sie die Schaltflächen unten.',
    ru: 'Здравствуйте! 👋 Я виртуальный ассистент <strong>Piramicasa</strong>. Я могу провести вас по нашему сайту и помочь с:\n• 📋 Информация о пирамидах и моделях\n• 💰 Цены и расчёты\n• 📅 Запись на консультацию или совет\n• 🔬 Наука и исследования эффекта пирамиды\n• 🏥 Центры пирамидальной терапии\n• 📹 Видео и отзывы\n• 📦 Доставка и контакт\n\nЧем я могу вам помочь? Напишите ваш вопрос или используйте кнопки ниже.',
    ar: 'مرحبًا! 👋 أنا المساعد الافتراضي لـ<strong>بيراميكاسا</strong>. يمكنني إرشادك عبر موقعنا ومساعدتك في:\n• 📋 معلومات عن الأهرامات والنماذج\n• 💰 الأسعار والعروض\n• 📅 حجز استشارة أو نصيحة\n• 🔬 العلم والبحث في تأثير الهرم\n• 🏥 مراكز العلاج بالأهرامات\n• 📹 فيديوهات وشهادات\n• 📦 الشحن والاتصال\n\nكيف يمكنني مساعدتك؟ اكتب سؤالك أو استخدم الأزرار أدناه.',
  },
  precios: {
    en: 'The prices of our pyramids vary according to model, size and materials. We also offer personalized quotes with no obligation.\n\nWould you like us to send you a personalized quote via WhatsApp?',
    pt: 'Os preços das nossas pirâmides variam consoante o modelo, tamanho e materiais. Também oferecemos orçamentos personalizados sem compromisso.\n\nQuer que lhe enviemos um orçamento personalizado por WhatsApp?',
    fr: 'Les prix de nos pyramides varient selon le modèle, la taille et les matériaux. Nous proposons également des devis personnalisés sans engagement.\n\nSouhaitez-vous que nous vous envoyions un devis personnalisé par WhatsApp ?',
    de: 'Die Preise unserer Pyramiden variieren je nach Modell, Größe und Materialien. Wir bieten auch unverbindliche individuelle Angebote an.\n\nMöchten Sie, dass wir Ihnen ein individuelles Angebot per WhatsApp senden?',
    ru: 'Цены на наши пирамиды варьируются в зависимости от модели, размера и материалов. Мы также предлагаем персональные расчёты без обязательств.\n\nХотите, чтобы мы отправили вам персональный расчёт через WhatsApp?',
    ar: 'تختلف أسعار أهراماتنا حسب النموذج والحجم والمواد. نقدم أيضًا عروض أسعار مخصصة بدون التزام.\n\nهل تريد أن نرسل لك عرض سعر مخصص عبر واتساب؟',
  },
  compra: {
    en: 'You can purchase our pyramids directly from us. The process is simple:\n1. We advise you on the ideal model for you\n2. We send you a quote\n3. We manufacture and ship worldwide\n\nWould you like us to advise you now via WhatsApp?',
    pt: 'Pode adquirir as nossas pirâmides diretamente connosco. O processo é simples:\n1. Aconselhamo-lo sobre o modelo ideal para si\n2. Enviamos-lhe um orçamento\n3. Fabricamos e enviamos para todo o mundo\n\nQuer que o aconselhemos agora por WhatsApp?',
    fr: 'Vous pouvez acheter nos pyramides directement chez nous. Le processus est simple :\n1. Nous vous conseillons sur le modèle idéal\n2. Nous vous envoyons un devis\n3. Nous fabriquons et expédions dans le monde entier\n\nSouhaitez-vous que nous vous conseillions maintenant par WhatsApp ?',
    de: 'Sie können unsere Pyramiden direkt bei uns kaufen. Der Prozess ist einfach:\n1. Wir beraten Sie zum idealen Modell für Sie\n2. Wir senden Ihnen ein Angebot\n3. Wir fertigen und versenden weltweit\n\nMöchten Sie jetzt per WhatsApp beraten werden?',
    ru: 'Вы можете приобрести наши пирамиды напрямую у нас. Процесс прост:\n1. Мы посоветуем вам идеальную модель\n2. Отправим вам расчёт\n3. Изготовим и отправим в любую страну мира\n\nХотите, чтобы мы проконсультировали вас сейчас через WhatsApp?',
    ar: 'يمكنك شراء أهراماتنا مباشرة منا. العملية بسيطة:\n1. ننصحك بالنموذج المثالي لك\n2. نرسل لك عرض سعر\n3. نصنع ونشحن إلى جميع أنحاء العالم\n\nهل تريد أن ننصحك الآن عبر واتساب؟',
  },
  envios: {
    en: 'We ship <strong>worldwide</strong>. The pyramid arrives assembled or with clear instructions depending on the model. Delivery times vary by destination.\n\nWould you like shipping information for your country?',
    pt: 'Realizamos <strong>envios para todo o mundo</strong>. A pirâmide chega montada ou com instruções claras consoante o modelo. Os prazos variam consoante o destino.\n\nQuer informações de envio para o seu país?',
    fr: 'Nous expédions <strong>dans le monde entier</strong>. La pyramide arrive montée ou avec des instructions claires selon le modèle. Les délais varient selon la destination.\n\nSouhaitez-vous des informations d\'expédition pour votre pays ?',
    de: 'Wir versenden <strong>weltweit</strong>. Die Pyramide kommt montiert oder mit klaren Anweisungen je nach Modell. Die Lieferzeiten variieren je nach Ziel.\n\nMöchten Sie Versandinformationen für Ihr Land?',
    ru: 'Мы осуществляем <strong>доставку по всему миру</strong>. Пирамида приходит собранной или с чёткими инструкциями в зависимости от модели. Сроки варьируются по назначению.\n\nХотите информацию о доставке в вашу страну?',
    ar: 'نشحن إلى <strong>جميع أنحاء العالم</strong>. يصل الهرم مركبًا أو مع تعليمات واضحة حسب النموذج. تختلف مواعيد التسليم حسب الوجهة.\n\nهل تريد معلومات الشحن لبلدك؟',
  },
  piramicama: {
    en: 'The <strong>Piramicama</strong> is our main therapeutic pyramid, designed to sleep under it. Its benefits include:\n• 💤 Deep and restful sleep\n• 🧬 Accelerated cell regeneration\n• 💪 Strengthened immune system\n• 😌 Reduced stress and anxiety\n• 🩹 Relief of pain and tension\n\nWould you like to see more details or request a quote?',
    pt: 'A <strong>Piramicama</strong> é a nossa pirâmide terapêutica principal, concebida para dormir sob ela. Os seus benefícios incluem:\n• 💤 Sono profundo e reparador\n• 🧬 Regeneração celular acelerada\n• 💪 Sistema imunológico reforçado\n• 😌 Redução de stress e ansiedade\n• 🩹 Alívio de dores e tensões\n\nQuer ver mais detalhes ou solicitar um orçamento?',
    fr: 'La <strong>Piramicama</strong> est notre pyramide thérapeutique principale, conçue pour dormir dessous. Ses bienfaits incluent :\n• 💤 Sommeil profond et réparateur\n• 🧬 Régénération cellulaire accélérée\n• 💪 Système immunitaire renforcé\n• 😌 Réduction du stress et de l\'anxiété\n• 🩹 Soulagement des douleurs et tensions\n\nSouhaitez-vous voir plus de détails ou demander un devis ?',
    de: 'Die <strong>Piramicama</strong> ist unsere wichtigste therapeutische Pyramide, zum Schlafen darunter konzipiert. Ihre Vorteile umfassen:\n• 💤 Tiefen und erholsamen Schlaf\n• 🧬 Beschleunigte Zellregeneration\n• 💪 Gestärktes Immunsystem\n• 😌 Reduzierter Stress und Angst\n• 🩹 Linderung von Schmerzen und Verspannungen\n\nMöchten Sie mehr Details sehen oder ein Angebot anfordern?',
    ru: '<strong>Пирамикама</strong> — наша основная терапевтическая пирамида, предназначенная для сна под ней. Её преимущества:\n• 💤 Глубокий и восстанавливающий сон\n• 🧬 Ускоренная клеточная регенерация\n• 💪 Укрепленная иммунная система\n• 😌 Снижение стресса и тревожности\n• 🩹 Снятие боли и напряжения\n\nХотите увидеть больше деталей или запросить расчёт?',
    ar: '<strong>بيراميكاما</strong> هي هرمنا العلاجي الرئيسي، مصممة للنوم تحتها. تشمل فوائدها:\n• 💤 نوم عميق ومريح\n• 🧬 تجديد خلوي مسرع\n• 💪 جهاز مناعي معزز\n• 😌 تقليل التوتر والقلق\n• 🩹 تخفيف الآلام والتوترات\n\nهل تريد رؤية مزيد من التفاصيل أو طلب عرض سعر؟',
  },
  hygia: {
    en: 'The <strong>Hygia Pyramid</strong> is a portable antipyramid model, ideal for local and spot therapies. It is used for:\n• 🩹 Relief of joint and muscle pain\n• 🦴 Recovery from injuries and sprains\n• 🧬 Wound regeneration\n• 🔥 Inflammation reduction\n\nWould you like more information?',
    pt: 'A <strong>Pirâmide Hygia</strong> é um modelo de antipirâmide portátil, ideal para terapias locais e pontuais. É usada para:\n• 🩹 Alívio de dores articulares e musculares\n• 🦴 Recuperação de lesões e entorses\n• 🧬 Regeneração de feridas\n• 🔥 Redução de inflamação\n\nQuer mais informações?',
    fr: 'La <strong>Pyramide Hygia</strong> est un modèle d\'antipyramide portable, idéale pour les thérapies locales et ponctuelles. Elle est utilisée pour :\n• 🩹 Soulagement des douleurs articulaires et musculaires\n• 🦴 Récupération des blessures et entorses\n• 🧬 Régénération des plaies\n• 🔥 Réduction de l\'inflammation\n\nSouhaitez-vous plus d\'informations ?',
    de: 'Die <strong>Hygia-Pyramide</strong> ist ein tragbares Antipyramiden-Modell, ideal für lokale und punktuelle Therapien. Sie wird verwendet für:\n• 🩹 Linderung von Gelenk- und Muskelschmerzen\n• 🦴 Heilung von Verletzungen und Verstauchungen\n• 🧬 Wundregeneration\n• 🔥 Entzündungshemmung\n\nMöchten Sie mehr Informationen?',
    ru: '<strong>Пирамида Хигия</strong> — портативная модель антипирамиды, идеальная для локальных и точечных терапий. Используется для:\n• 🩹 Снятия боли в суставах и мышцах\n• 🦴 Восстановления после травм и растяжений\n• 🧬 Регенерации ран\n• 🔥 Снижения воспаления\n\nХотите больше информации?',
    ar: '<strong>هرم هيجيا</strong> هو نموذج هرم مضاد محمول، مثالي للعلاجات الموضعية والمحددة. يُستخدم في:\n• 🩹 تخفيف آلام المفاصل والعضلات\n• 🦴 التعافي من الإصابات والالتواءات\n• 🧬 تجديد الجروح\n• 🔥 تقليل الالتهاب\n\nهل تريد مزيدًا من المعلومات؟',
  },
  hercules: {
    en: 'The <strong>Hercules Pyramid</strong> is our most powerful model, designed for intensive therapy and immune system reinforcement. Ideal for:\n• 🛡️ Immune system reinforcement\n• 🏋️ Sports recovery\n• 🧠 Deep and prolonged therapies\n• 💆 Intense relaxation\n\nWould you like more details?',
    pt: 'A <strong>Pirâmide Hércules</strong> é o nosso modelo mais potente, concebido para terapia intensiva e reforço do sistema imunológico. Ideal para:\n• 🛡️ Reforço imunológico\n• 🏋️ Recuperação desportiva\n• 🧠 Terapias profundas e prolongadas\n• 💆 Relaxamento intenso\n\nQuer mais detalhes?',
    fr: 'La <strong>Pyramide Hercule</strong> est notre modèle le plus puissant, conçue pour la thérapie intensive et le renforcement du système immunitaire. Idéale pour :\n• 🛡️ Renforcement immunitaire\n• 🏋️ Récupération sportive\n• 🧠 Thérapies profondes et prolongées\n• 💆 Relaxation intense\n\nSouhaitez-vous plus de détails ?',
    de: 'Die <strong>Herkules-Pyramide</strong> ist unser leistungsstärkstes Modell, für intensive Therapie und Immunsystem-Stärkung konzipiert. Ideal für:\n• 🛡️ Immunsystem-Stärkung\n• 🏋️ Sportliche Erholung\n• 🧠 Tiefe und langanhaltende Therapien\n• 💆 Intensive Entspannung\n\nMöchten Sie mehr Details?',
    ru: '<strong>Пирамида Геркулес</strong> — наша самая мощная модель, разработанная для интенсивной терапии и укрепления иммунной системы. Идеальна для:\n• 🛡️ Укрепления иммунитета\n• 🏋️ Спортивного восстановления\n• 🧠 Глубокой и продолжительной терапии\n• 💆 Интенсивного расслабления\n\nХотите больше деталей?',
    ar: '<strong>هرم هرقل</strong> هو أقوى نموذج لدينا، مصمم للعلاج المكثف وتعزيز الجهاز المناعي. مثالي لـ:\n• 🛡️ تعزيز المناعة\n• 🏋️ التعافي الرياضي\n• 🧠 العلاجات العميقة والمطولة\n• 💆 الاسترخاء المكثف\n\nهل تريد مزيدًا من التفاصيل؟',
  },
  pirajardin: {
    en: 'The <strong>Garden Pyramid</strong> is applied in agriculture and beekeeping. Demonstrated benefits:\n• 🌱 More vigorous plant growth\n• 🐝 Treatment of ascospherosis in bees\n• 🌿 Crop improvement without chemicals\n\nWould you like to see more about these applications?',
    pt: 'A <strong>Pirâmide Jardim</strong> é aplicada na agricultura e apicultura. Benefícios demonstrados:\n• 🌱 Crescimento mais vigoroso das plantas\n• 🐝 Tratamento da ascosferose em abelhas\n• 🌿 Melhoria de cultivos sem químicos\n\nQuer ver mais sobre estas aplicações?',
    fr: 'La <strong>Pyramide Jardin</strong> s\'applique en agriculture et apiculture. Bienfaits démontrés :\n• 🌱 Croissance plus vigoureuse des plantes\n• 🐝 Traitement de l\'ascosphérose chez les abeilles\n• 🌿 Amélioration des cultures sans produits chimiques\n\nSouhaitez-vous voir plus sur ces applications ?',
    de: 'Die <strong>Gartenpyramide</strong> wird in der Landwirtschaft und Imkerei eingesetzt. Nachgewiesene Vorteile:\n• 🌱 Kräftigeres Pflanzenwachstum\n• 🐝 Behandlung von Askosphärose bei Bienen\n• 🌿 Verbesserung der Ernten ohne Chemikalien\n\nMöchten Sie mehr über diese Anwendungen sehen?',
    ru: '<strong>Садовая Пирамида</strong> применяется в сельском хозяйстве и пчеловодстве. Доказанные преимущества:\n• 🌱 Более сильный рост растений\n• 🐝 Лечение аскосфероза у пчёл\n• 🌿 Улучшение урожая без химикатов\n\nХотите узнать больше об этих применениях?',
    ar: 'يُستخدم <strong>هرم الحديقة</strong> في الزراعة وتربية النحل. الفوائد المُثبتة:\n• 🌱 نمو نباتي أكثر قوة\n• 🐝 علاج الأسكوسفيروسيس في النحل\n• 🌿 تحسين المحاصيل بدون مواد كيميائية\n\nهل تريد رؤية المزيد عن هذه التطبيقات؟',
  },
  faraday: {
    en: 'The <strong>Faraday Ark</strong> protects from ambient electromagnetism (WiFi, 5G, power lines). It is a pyramidal Faraday cage that:\n• 📡 Blocks electromagnetic radiation\n• 🛡️ Creates an EMF-free space\n• 😴 Improves rest quality\n\nWould you like more information?',
    pt: 'A <strong>Arca Faraday</strong> protege do electromagnetismo ambiente (WiFi, 5G, linhas elétricas). É uma gaiola de Faraday piramidal que:\n• 📡 Bloqueia radiação electromagnética\n• 🛡️ Cria um espaço livre de EMF\n• 😴 Melhora a qualidade do descanso\n\nQuer mais informações?',
    fr: 'L\'<strong>Arche Faraday</strong> protège de l\'électromagnétisme ambiant (WiFi, 5G, lignes électriques). C\'est une cage de Faraday pyramidale qui :\n• 📡 Bloque les radiations électromagnétiques\n• 🛡️ Crée un espace sans CEM\n• 😴 Améliore la qualité du repos\n\nSouhaitez-vous plus d\'informations ?',
    de: 'Die <strong>Faraday-Arche</strong> schützt vor Umgebungselektromagnetismus (WiFi, 5G, Stromleitungen). Es ist ein pyramidenförmiger Faraday-Käfig, der:\n• 📡 Elektromagnetische Strahlung blockiert\n• 🛡️ Einen EMF-freien Raum schafft\n• 😴 Die Ruhequalität verbessert\n\nMöchten Sie mehr Informationen?',
    ru: '<strong>Арка Фарадея</strong> защищает от окружающего электромагнетизма (WiFi, 5G, линии электропередач). Это пирамидальная клетка Фарадея, которая:\n• 📡 Блокирует электромагнитное излучение\n• 🛡️ Создаёт пространство без ЭМП\n• 😴 Улучшает качество отдыха\n\nХотите больше информации?',
    ar: 'تحمي <strong>سفينة فاراداي</strong> من المغناطيسية الكهرومغناطيسية المحيطة (WiFi و5G وخطوط الكهرباء). إنها قفص فاراداي هرمي:\n• 📡 يحجب الإشعاع الكهرومغناطيسي\n• 🛡️ يخلق مساحة خالية من EMF\n• 😴 يحسن جودة الراحة\n\nهل تريد مزيدًا من المعلومات؟',
  },
  mascotas: {
    en: 'The <strong>Piramascota</strong> is a pyramid designed for the well-being of your pets. It helps with:\n• 🐕 Recovery from injuries in animals\n• 🐱 Stress reduction in pets\n• 🐴 Therapy for farm animals\n\nWould you like more information?',
    pt: 'A <strong>Piramascota</strong> é uma pirâmide concebida para o bem-estar dos seus animais de estimação. Ajuda com:\n• 🐕 Recuperação de lesões em animais\n• 🐱 Redução de stress em animais de estimação\n• 🐴 Terapia para animais de quinta\n\nQuer mais informações?',
    fr: 'La <strong>Piramascota</strong> est une pyramide conçue pour le bien-être de vos animaux. Elle aide avec :\n• 🐕 Récupération de blessures chez les animaux\n• 🐱 Réduction du stress chez les animaux de compagnie\n• 🐴 Thérapie pour les animaux de ferme\n\nSouhaitez-vous plus d\'informations ?',
    de: 'Die <strong>Piramascota</strong> ist eine Pyramide für das Wohlbefinden Ihrer Haustiere. Sie hilft bei:\n• 🐕 Heilung von Verletzungen bei Tieren\n• 🐱 Stressreduktion bei Haustieren\n• 🐴 Therapie für Nutztiere\n\nMöchten Sie mehr Informationen?',
    ru: '<strong>Пирамаксота</strong> — пирамида, разработанная для благополучия ваших питомцев. Она помогает при:\n• 🐕 Восстановлении после травм у животных\n• 🐱 Снижении стресса у питомцев\n• 🐴 Терапии для сельскохозяйственных животных\n\nХотите больше информации?',
    ar: '<strong>بيراماسكوتا</strong> هي هرم مصمم لرفاهية حيواناتك الأليفة. تساعد في:\n• 🐕 التعافي من الإصابات في الحيوانات\n• 🐱 تقليل التوتر في الحيوانات الأليفة\n• 🐴 العلاج لحيوانات المزرعة\n\nهل تريد مزيدًا من المعلومات؟',
  },
  vital: {
    en: 'The <strong>Piramicasa Vital</strong> is our portable pyramid. Ideal for traveling and taking pyramid therapy with you anywhere.\n\nWould you like more details?',
    pt: 'A <strong>Piramicasa Vital</strong> é a nossa pirâmide portátil. Ideal para viajar e levar a terapia piramidal consigo para qualquer lugar.\n\nQuer mais detalhes?',
    fr: 'La <strong>Piramicasa Vital</strong> est notre pyramide portable. Idéale pour voyager et emporter la thérapie pyramidale partout avec vous.\n\nSouhaitez-vous plus de détails ?',
    de: 'Die <strong>Piramicasa Vital</strong> ist unsere tragbare Pyramide. Ideal zum Reisen und Mitnehmen der Pyramidentherapie überallhin.\n\nMöchten Sie mehr Details?',
    ru: '<strong>Пирамикаса Витал</strong> — наша портативная пирамида. Идеальна для путешествий и для того, чтобы брать пирамидальную терапию с собой.\n\nХотите больше деталей?',
    ar: '<strong>بيراميكاسا فيتال</strong> هي هرمنا المحمول. مثالية للسفر وأخذ العلاج بالأهرامات معك إلى أي مكان.\n\nهل تريد مزيدًا من التفاصيل؟',
  },
  piramide: {
    en: 'We have several <strong>pyramid models</strong> according to your needs:\n• 🛏️ <strong>Piramicama</strong> — to sleep under\n• 💪 <strong>Hercules</strong> — intensive and immunological therapy\n• 🩹 <strong>Hygia</strong> — portable antipyramid for local therapy\n• 🌱 <strong>Garden Pyramid</strong> — agriculture and beekeeping\n• 📡 <strong>Faraday Ark</strong> — electromagnetic protection\n• 🐾 <strong>Piramascota</strong> — for pets\n• 🧳 <strong>Piramicasa Vital</strong> — portable for travel\n\nWhich model would you like more information about?',
    pt: 'Temos vários <strong>modelos de pirâmides</strong> consoante a sua necessidade:\n• 🛏️ <strong>Piramicama</strong> — para dormir debaixo\n• 💪 <strong>Hércules</strong> — terapia intensiva e imunológica\n• 🩹 <strong>Hygia</strong> — antipirâmide portátil para terapia local\n• 🌱 <strong>Pirâmide Jardim</strong> — agricultura e apicultura\n• 📡 <strong>Arca Faraday</strong> — proteção electromagnética\n• 🐾 <strong>Piramascota</strong> — para animais de estimação\n• 🧳 <strong>Piramicasa Vital</strong> — portátil para viajar\n\nSobre que modelo quer mais informações?',
    fr: 'Nous avons plusieurs <strong>modèles de pyramides</strong> selon vos besoins :\n• 🛏️ <strong>Piramicama</strong> — pour dormir dessous\n• 💪 <strong>Hercule</strong> — thérapie intensive et immunologique\n• 🩹 <strong>Hygia</strong> — antipyramide portable pour thérapie locale\n• 🌱 <strong>Pyramide Jardin</strong> — agriculture et apiculture\n• 📡 <strong>Arche Faraday</strong> — protection électromagnétique\n• 🐾 <strong>Piramascota</strong> — pour animaux de compagnie\n• 🧳 <strong>Piramicasa Vital</strong> — portable pour voyager\n\nSur quel modèle souhaitez-vous plus d\'informations ?',
    de: 'Wir haben mehrere <strong>Pyramidenmodelle</strong> je nach Ihren Bedürfnissen:\n• 🛏️ <strong>Piramicama</strong> — zum Darunterschlafen\n• 💪 <strong>Herkules</strong> — intensive und immunologische Therapie\n• 🩹 <strong>Hygia</strong> — tragbare Antipyramide für lokale Therapie\n• 🌱 <strong>Gartenpyramide</strong> — Landwirtschaft und Imkerei\n• 📡 <strong>Faraday-Arche</strong> — elektromagnetischer Schutz\n• 🐾 <strong>Piramascota</strong> — für Haustiere\n• 🧳 <strong>Piramicasa Vital</strong> — tragbar für unterwegs\n\nÜber welches Modell möchten Sie mehr Informationen?',
    ru: 'У нас есть несколько <strong>моделей пирамид</strong> в зависимости от ваших потребностей:\n• 🛏️ <strong>Пирамикама</strong> — для сна под ней\n• 💪 <strong>Геркулес</strong> — интенсивная и иммунологическая терапия\n• 🩹 <strong>Хигия</strong> — портативная антипирамида для локальной терапии\n• 🌱 <strong>Садовая Пирамида</strong> — сельское хозяйство и пчеловодство\n• 📡 <strong>Арка Фарадея</strong> — электромагнитная защита\n• 🐾 <strong>Пирамаксота</strong> — для домашних животных\n• 🧳 <strong>Пирамикаса Витал</strong> — портативная для путешествий\n\nО какой модели вы хотите больше информации?',
    ar: 'لدينا عدة <strong>نماذج أهرامات</strong> حسب احتياجاتك:\n• 🛏️ <strong>بيراميكاما</strong> — للنوم تحتها\n• 💪 <strong>هرقل</strong> — العلاج المكثف والمناعي\n• 🩹 <strong>هيجيا</strong> — هرم مضاد محمول للعلاج الموضعي\n• 🌱 <strong>هرم الحديقة</strong> — الزراعة وتربية النحل\n• 📡 <strong>سفينة فاراداي</strong> — الحماية الكهرومغناطيسية\n• 🐾 <strong>بيراماسكوتا</strong> — للحيوانات الأليفة\n• 🧳 <strong>بيراميكاسا فيتال</strong> — محمولة للسفر\n\nأي نموذج تريد مزيدًا من المعلومات عنه؟',
  },
  efecto: {
    en: 'The <strong>pyramid effect</strong> is a proven physical phenomenon that occurs inside a pyramid with the correct proportion and orientation. Its main effects are:\n• 🧬 Anti-inflammatory and analgesic\n• 💤 Deep relaxation and improved sleep\n• 🛡️ Bacteriostatic (inhibits bacteria)\n• 🩹 Accelerates cell regeneration\n• ⚡ Balances the body\'s electromagnetic field\n\nIt is backed by more than 20 years of research and scientific endorsements.\n\nWould you like to see the complete information?',
    pt: 'O <strong>efeito piramidal</strong> é um fenómeno físico comprovado que ocorre dentro de uma pirâmide com a proporção e orientação correctas. Os seus principais efeitos são:\n• 🧬 Anti-inflamatório e analgésico\n• 💤 Relaxamento profundo e melhoria do sono\n• 🛡️ Bacteriostático (inibe bactérias)\n• 🩹 Acelera a regeneração celular\n• ⚡ Equilibra o campo electromagnético do corpo\n\nÉ apoiado por mais de 20 anos de pesquisa e avales científicos.\n\nQuer ver a informação completa?',
    fr: 'L\'<strong>effet pyramidal</strong> est un phénomène physique prouvé qui se produit à l\'intérieur d\'une pyramide aux proportions et à l\'orientation correctes. Ses principaux effets sont :\n• 🧬 Anti-inflammatoire et analgésique\n• 💤 Relaxation profonde et amélioration du sommeil\n• 🛡️ Bactériostatique (inhibe les bactéries)\n• 🩹 Accélère la régénération cellulaire\n• ⚡ Équilibre le champ électromagnétique du corps\n\nIl est soutenu par plus de 20 ans de recherche et d\'avals scientifiques.\n\nSouhaitez-vous voir les informations complètes ?',
    de: 'Der <strong>Pyramiden-Effekt</strong> ist ein nachgewiesenes physikalisches Phänomen, das in einer Pyramide mit den richtigen Proportionen und Ausrichtung auftritt. Seine Hauptwirkungen sind:\n• 🧬 Entzündungshemmend und schmerzstillend\n• 💤 Tiefe Entspannung und verbesserter Schlaf\n• 🛡️ Bakteriostatisch (hemmt Bakterien)\n• 🩹 Beschleunigt die Zellregeneration\n• ⚡ Balanciert das elektromagnetische Feld des Körpers\n\nEs wird durch mehr als 20 Jahre Forschung und wissenschaftliche Anerkennungen gestützt.\n\nMöchten Sie die vollständigen Informationen sehen?',
    ru: '<strong>Эффект пирамиды</strong> — это доказанное физическое явление, возникающее внутри пирамиды с правильными пропорциями и ориентацией. Его основные эффекты:\n• 🧬 Противовоспалительное и обезболивающее\n• 💤 Глубокое расслабление и улучшение сна\n• 🛡️ Бактериостатическое (подавляет бактерии)\n• 🩹 Ускоряет клеточную регенерацию\n• ⚡ Выравнивает электромагнитное поле тела\n\nПодтверждён более чем 20 годами исследований и научными одобрениями.\n\nХотите увидеть полную информацию?',
    ar: '<strong>تأثير الهرم</strong> هو ظاهرة فيزيائية مُثبتة تحدث داخل هرم بالنسب والاتجاه الصحيحين. تأثيراته الرئيسية:\n• 🧬 مضاد للالتهاب ومسكن للألم\n• 💤 استرخاء عميق وتحسين النوم\n• 🛡️ مثبط للبكتيريا\n• 🩹 يسرع تجديد الخلايا\n• ⚡ يوازن المجال الكهرومغناطيسي للجسم\n\nمدعوم بأكثر من 20 عامًا من البحث والاعتمادات العلمية.\n\nهل تريد رؤية المعلومات الكاملة؟',
  },
  salud: {
    en: 'Therapeutic pyramids help with numerous <strong>diseases and ailments</strong>:\n• 😴 Insomnia and sleep disorders\n• 😣 Fibromyalgia and chronic pain\n• 🦴 Osteoarthritis, arthritis and bone problems\n• 🧠 Stress, anxiety and depression\n• 💪 Sports injuries and recovery\n• 🩹 Wounds and cell regeneration\n• 🛡️ Immune system reinforcement\n\nWould you like to see the complete list of treated conditions?',
    pt: 'As pirâmides terapêuticas ajudam com numerosas <strong>doenças e dolências</strong>:\n• 😴 Insónia e distúrbios do sono\n• 😣 Fibromialgia e dor crónica\n• 🦴 Osteoartrose, artrite e problemas ósseos\n• 🧠 Stress, ansiedade e depressão\n• 💪 Lesões desportivas e recuperação\n• 🩹 Feridas e regeneração celular\n• 🛡️ Reforço do sistema imunológico\n\nQuer ver a lista completa de doenças tratadas?',
    fr: 'Les pyramides thérapeutiques aident avec de nombreuses <strong>maladies et affections</strong> :\n• 😴 Insomnie et troubles du sommeil\n• 😣 Fibromyalgie et douleur chronique\n• 🦴 Arthrose, arthrite et problèmes osseux\n• 🧠 Stress, anxiété et dépression\n• 💪 Blessures sportives et récupération\n• 🩹 Plaies et régénération cellulaire\n• 🛡️ Renforcement du système immunitaire\n\nSouhaitez-vous voir la liste complète des affections traitées ?',
    de: 'Therapeutische Pyramiden helfen bei zahlreichen <strong>Krankheiten und Beschwerden</strong>:\n• 😴 Schlaflosigkeit und Schlafstörungen\n• 😣 Fibromyalgie und chronische Schmerzen\n• 🦴 Arthrose, Arthritis und Knochenprobleme\n• 🧠 Stress, Angst und Depression\n• 💪 Sportverletzungen und Erholung\n• 🩹 Wunden und Zellregeneration\n• 🛡️ Stärkung des Immunsystems\n\nMöchten Sie die vollständige Liste der behandelten Erkrankungen sehen?',
    ru: 'Терапевтические пирамиды помогают при многочисленных <strong>заболеваниях и недугах</strong>:\n• 😴 Бессонница и нарушения сна\n• 😣 Фибромиалгия и хроническая боль\n• 🦴 Остеоартроз, артрит и проблемы с костями\n• 🧠 Стресс, тревожность и депрессия\n• 💪 Спортивные травмы и восстановление\n• 🩹 Раны и клеточная регенерация\n• 🛡️ Укрепление иммунной системы\n\nХотите увидеть полный список лечимых заболеваний?',
    ar: 'تساعد الأهرامات العلاجية في العديد من <strong>الأمراض والعلل</strong>:\n• 😴 الأرق واضطرابات النوم\n• 😣 الفيبروميالغيا والألم المزمن\n• 🦴 هشاشة العظام والتهاب المفاصل ومشاكل العظام\n• 🧠 التوتر والقلق والاكتئاب\n• 💪 الإصابات الرياضية والتعافي\n• 🩹 الجروح وتجديد الخلايا\n• 🛡️ تعزيز الجهاز المناعي\n\nهل تريد رؤية القائمة الكاملة للأمراض المعالجة؟',
  },
  testimonios: {
    en: 'We have numerous <strong>real testimonials</strong> from users and therapists who have experienced the benefits of the pyramid effect.\n\nWould you like to see the testimonials?',
    pt: 'Temos numerosos <strong>testemunhos reais</strong> de usuários e terapeutas que experimentaram os benefícios do efeito piramidal.\n\nQuer ver os testemunhos?',
    fr: 'Nous avons de nombreux <strong>témoignages réels</strong> d\'utilisateurs et de thérapeutes qui ont expérimenté les bienfaits de l\'effet pyramidal.\n\nSouhaitez-vous voir les témoignages ?',
    de: 'Wir haben zahlreiche <strong>echte Testimonials</strong> von Nutzern und Therapeuten, die die Vorteile des Pyramiden-Effekts erlebt haben.\n\nMöchten Sie die Testimonials sehen?',
    ru: 'У нас есть многочисленные <strong>реальные отзывы</strong> пользователей и терапевтов, испытавших преимущества эффекта пирамиды.\n\nХотите увидеть отзывы?',
    ar: 'لدينا العديد من <strong>الشهادات الحقيقية</strong> من المستخدمين والمعالجين الذين اختبروا فوائد تأثير الهرم.\n\nهل تريد رؤية الشهادات؟',
  },
  historia: {
    en: '<strong>Piramicasa</strong> was founded by <strong>Gabriel Silva (Osiris)</strong>, researcher and manufacturer of therapeutic pyramids since 2001. Together with Virginia Hator, they form the scientific team that has developed and perfected the pyramid effect for over 20 years.\n\nWould you like to know the complete story?',
    pt: 'A <strong>Piramicasa</strong> foi fundada por <strong>Gabriel Silva (Osiris)</strong>, investigador e fabricante de pirâmides terapêuticas desde 2001. Juntamente com Virginia Hator, formam a equipa científica que desenvolveu e aperfeiçoou o efeito piramidal durante mais de 20 anos.\n\nQuer conhecer a história completa?',
    fr: '<strong>Piramicasa</strong> a été fondée par <strong>Gabriel Silva (Osiris)</strong>, chercheur et fabricant de pyramides thérapeutiques depuis 2001. Avec Virginia Hator, ils forment l\'équipe scientifique qui a développé et perfectionné l\'effet pyramidal pendant plus de 20 ans.\n\nSouhaitez-vous connaître l\'histoire complète ?',
    de: '<strong>Piramicasa</strong> wurde von <strong>Gabriel Silva (Osiris)</strong> gegründet, Forscher und Hersteller therapeutischer Pyramiden seit 2001. Zusammen mit Virginia Hator bilden sie das wissenschaftliche Team, das den Pyramiden-Effekt über 20 Jahre entwickelt und verfeinert hat.\n\nMöchten Sie die vollständige Geschichte erfahren?',
    ru: '<strong>Пирамикаса</strong> была основана <strong>Габриэлем Сильвой (Осирисом)</strong>, исследователем и производителем терапевтических пирамид с 2001 года. Вместе с Вирджинией Хатор они образуют научную команду, которая развивала и совершенствовала эффект пирамиды более 20 лет.\n\nХотите узнать полную историю?',
    ar: 'تأسست <strong>بيراميكاسا</strong> على يد <strong>غابرييل سيلفا (أوزيريس)</strong>، باحث ومصنّع للأهرامات العلاجية منذ عام 2001. مع فيرجينيا هاتور، يشكلان الفريق العلمي الذي طور وأتقن تأثير الهرم لأكثر من 20 عامًا.\n\nهل تريد معرفة القصة الكاملة؟',
  },
  presentacion: {
    en: 'The <strong>Piramicasa team</strong> consists of:\n• 👨‍🔬 <strong>Gabriel Silva (Osiris)</strong> — Lead researcher and manufacturer\n• 👩‍🔬 <strong>Virginia Hator</strong> — Researcher and co-manufacturer\n\nThey have been researching and perfecting the pyramid effect for over 20 years.\n\nWould you like to see the complete presentation?',
    pt: 'A <strong>equipa da Piramicasa</strong> é formada por:\n• 👨‍🔬 <strong>Gabriel Silva (Osiris)</strong> — Investigador principal e fabricante\n• 👩‍🔬 <strong>Virginia Hator</strong> — Investigadora e co-fabricante\n\nLevam mais de 20 anos a investigar e aperfeiçoar o efeito piramidal.\n\nQuer ver a apresentação completa?',
    fr: 'L\'<strong>équipe de Piramicasa</strong> est composée de :\n• 👨‍🔬 <strong>Gabriel Silva (Osiris)</strong> — Chercheur principal et fabricant\n• 👩‍🔬 <strong>Virginia Hator</strong> — Chercheuse et co-fabricante\n\nIls étudient et perfectionnent l\'effet pyramidal depuis plus de 20 ans.\n\nSouhaitez-vous voir la présentation complète ?',
    de: 'Das <strong>Piramicasa-Team</strong> besteht aus:\n• 👨‍🔬 <strong>Gabriel Silva (Osiris)</strong> — Leitender Forscher und Hersteller\n• 👩‍🔬 <strong>Virginia Hator</strong> — Forscherin und Mitherstellerin\n\nSie erforschen und verfeinern den Pyramiden-Effekt seit über 20 Jahren.\n\nMöchten Sie die vollständige Präsentation sehen?',
    ru: '<strong>Команда Пирамикасы</strong> состоит из:\n• 👨‍🔬 <strong>Габриэля Сильвы (Осириса)</strong> — ведущего исследователя и производителя\n• 👩‍🔬 <strong>Вирджинии Хатор</strong> — исследователя и совместного производителя\n\nОни изучают и совершенствуют эффект пирамиды более 20 лет.\n\nХотите увидеть полную презентацию?',
    ar: 'يتكون <strong>فريق بيراميكاسا</strong> من:\n• 👨‍🔬 <strong>غابرييل سيلفا (أوزيريس)</strong> — الباحث الرئيسي والمصنّع\n• 👩‍🔬 <strong>فيرجينيا هاتور</strong> — الباحثة والشريكة في التصنيع\n\nيبحثان ويتقنان تأثير الهرم لأكثر من 20 عامًا.\n\nهل تريد رؤية العرض الكامل؟',
  },
  construccion: {
    en: 'Building a therapeutic pyramid requires:\n• 📐 <strong>Exact proportion</strong> (golden ratio)\n• 🧭 <strong>Orientation</strong> magnetic north-south\n• 🪵 <strong>Materials</strong> non-ferromagnetic (wood, copper, aluminum)\n• ⚡ <strong>No metallic parts</strong> that interfere\n\nWould you like to see the videos about construction?',
    pt: 'A construção de uma pirâmide terapêutica requer:\n• 📐 <strong>Proporção exacta</strong> (proporção áurea)\n• 🧭 <strong>Orientação</strong> norte-sul magnética\n• 🪵 <strong>Materiais</strong> não ferromagnéticos (madeira, cobre, alumínio)\n• ⚡ <strong>Sem peças metálicas</strong> que interfiram\n\nQuer ver os vídeos sobre construção?',
    fr: 'La construction d\'une pyramide thérapeutique requiert :\n• 📐 <strong>Proportion exacte</strong> (nombre d\'or)\n• 🧭 <strong>Orientation</strong> nord-sud magnétique\n• 🪵 <strong>Matériaux</strong> non ferromagnétiques (bois, cuivre, aluminium)\n• ⚡ <strong>Sans pièces métalliques</strong> qui interfèrent\n\nSouhaitez-vous voir les vidéos sur la fabrication ?',
    de: 'Der Bau einer therapeutischen Pyramide erfordert:\n• 📐 <strong>Exakte Proportion</strong> (Goldener Schnitt)\n• 🧭 <strong>Ausrichtung</strong> magnetisch Nord-Süd\n• 🪵 <strong>Materialien</strong> nicht ferromagnetisch (Holz, Kupfer, Aluminium)\n• ⚡ <strong>Keine Metallteile</strong>, die stören\n\nMöchten Sie die Videos zum Bau sehen?',
    ru: 'Строительство терапевтической пирамиды требует:\n• 📐 <strong>Точной пропорции</strong> (золотое сечение)\n• 🧭 <strong>Ориентации</strong> магнитный север-юг\n• 🪵 <strong>Материалов</strong> не ферромагнитных (дерево, медь, алюминий)\n• ⚡ <strong>Без металлических деталей</strong>, которые мешают\n\nХотите увидеть видео о строительстве?',
    ar: 'يتطلب بناء هرم علاجي:\n• 📐 <strong>نسبة دقيقة</strong> (النسبة الذهبية)\n• 🧭 <strong>الاتجاه</strong> الشمال-الجنوب المغناطيسي\n• 🪵 <strong>مواد</strong> غير مغناطيسية حديدية (خشب، نحاس، ألمنيوم)\n• ⚡ <strong>بدون أجزاء معدنية</strong> تتداخل\n\nهل تريد رؤية فيديوهات عن البناء؟',
  },
  libros: {
    en: 'We have <strong>books and publications</strong> on pyramidology, the pyramid effect and its therapeutic applications.\n\nWould you like to see our book catalog?',
    pt: 'Temos <strong>livros e publicações</strong> sobre piramidologia, o efeito piramidal e as suas aplicações terapêuticas.\n\nQuer ver o nosso catálogo de livros?',
    fr: 'Nous avons des <strong>livres et publications</strong> sur la pyramidologie, l\'effet pyramidal et ses applications thérapeutiques.\n\nSouhaitez-vous voir notre catalogue de livres ?',
    de: 'Wir haben <strong>Bücher und Veröffentlichungen</strong> über Pyramidologie, den Pyramiden-Effekt und seine therapeutischen Anwendungen.\n\nMöchten Sie unseren Buchkatalog sehen?',
    ru: 'У нас есть <strong>книги и публикации</strong> по пирамидологии, эффекту пирамиды и его терапевтическим применениям.\n\nХотите увидеть наш каталог книг?',
    ar: 'لدينا <strong>كتب ومنشورات</strong> عن علم الأهرامات وتأثير الهرم وتطبيقاته العلاجية.\n\nهل تريد رؤية كتالوج الكتب؟',
  },
  videos: {
    en: 'In our <strong>videos</strong> section you will find 19 videos about:\n• 📹 Videos and testimonials of the pyramid effect\n• 🏗️ Manufacturing and construction of pyramids\n• 🧪 Materials for building pyramids\n• 📐 Pyramids, geometry and energy\n• ✨ Orgonites, spirituality and paranormal effects\n• ❓ Questions and answers about pyramid and antipyramid\n• 🌍 Randall Sánchez - Pyramid Therapy Costa Rica\n• 🎥 Interview on Mis Enigmas Favoritos\n• 🗝️ The Eight Kybalions\n• 🐝 Pyramids and beekeeping\n\nWould you like to see the videos?',
    pt: 'Na nossa secção de <strong>vídeos</strong> encontrará 19 vídeos sobre:\n• 📹 Vídeos e testemunhos do efeito piramidal\n• 🏗️ Fabricação e construção de pirâmides\n• 🧪 Materiais para fabricar pirâmides\n• 📐 Pirâmides, geometria e energia\n• ✨ Orgonites, espiritualidade e efeitos paranormais\n• ❓ Perguntas e respostas sobre pirâmide e antipirâmide\n• 🌍 Randall Sánchez - Terapia Piramidal Costa Rica\n• 🎥 Entrevista em Mis Enigmas Favoritos\n• 🗝️ Os Oito Kybaliones\n• 🐝 Pirâmides e apicultura\n\nQuer ver os vídeos?',
    fr: 'Dans notre section <strong>vidéos</strong>, vous trouverez 19 vidéos sur :\n• 📹 Vidéos et témoignages de l\'effet pyramidal\n• 🏗️ Fabrication et construction de pyramides\n• 🧪 Matériaux pour fabriquer des pyramides\n• 📐 Pyramides, géométrie et énergie\n• ✨ Orgonites, spiritualité et effets paranormaux\n• ❓ Questions et réponses sur pyramide et antipyramide\n• 🌍 Randall Sánchez - Thérapie pyramidale Costa Rica\n• 🎥 Interview sur Mis Enigmas Favoritos\n• 🗝️ Les Huit Kybalions\n• 🐝 Pyramides et apiculture\n\nSouhaitez-vous voir les vidéos ?',
    de: 'In unserem <strong>Videos</strong>-Bereich finden Sie 19 Videos über:\n• 📹 Videos und Testimonials des Pyramiden-Effekts\n• 🏗️ Herstellung und Bau von Pyramiden\n• 🧪 Materialien zum Bau von Pyramiden\n• 📐 Pyramiden, Geometrie und Energie\n• ✨ Orgonite, Spiritualität und paranormale Effekte\n• ❓ Fragen und Antworten zu Pyramide und Antipyramide\n• 🌍 Randall Sánchez - Pyramidtherapie Costa Rica\n• 🎥 Interview bei Mis Enigmas Favoritos\n• 🗝️ Die Acht Kybalionen\n• 🐝 Pyramiden und Imkerei\n\nMöchten Sie die Videos sehen?',
    ru: 'В разделе <strong>видео</strong> вы найдёте 19 видео о:\n• 📹 Видео и отзывы об эффекте пирамиды\n• 🏗️ Производство и строительство пирамид\n• 🧪 Материалы для изготовления пирамид\n• 📐 Пирамиды, геометрия и энергия\n• ✨ Оргониты, духовность и паранормальные эффекты\n• ❓ Вопросы и ответы о пирамиде и антипирамиде\n• 🌍 Рэндалл Санчес - Пирамидальная терапия Коста-Рика\n• 🎥 Интервью на Mis Enigmas Favoritos\n• 🗝️ Восемь Кибалионов\n• 🐝 Пирамиды и пчеловодство\n\nХотите посмотреть видео?',
    ar: 'في قسم <strong>الفيديوهات</strong> ستجد 19 فيديو عن:\n• 📹 فيديوهات وشهادات عن تأثير الهرم\n• 🏗️ تصنيع وبناء الأهرامات\n• 🧪 مواد لصنع الأهرامات\n• 📐 أهرامات، هندسة وطاقة\n• ✨ أورغونيت، روحانية وتأثيرات خارقة\n• ❓ أسئلة وأجوبة عن الهرم والهرم المضاد\n• 🌍 راندال سانشيز - العلاج الهرمي كوستاريكا\n• 🎥 مقابلة في Mis Enigmas Favoritos\n• 🗝️ الكيباليونات الثمانية\n• 🐝 أهرامات وتربية النحل\n\nهل تريد مشاهدة الفيديوهات؟',
  },
  egipto: {
    en: 'We organize a <strong>scientific and initiatic trip to Egypt</strong> with Gabriel Silva, where you can visit the pyramids of Giza, temples of the Nile and places of pyramidological interest.\n\nWould you like more information about the trip?',
    pt: 'Organizamos uma <strong>viagem científica e iniciática ao Egito</strong> com Gabriel Silva, onde poderá visitar as pirâmides de Gizé, templos do Nilo e lugares de interesse piramidológico.\n\nQuer mais informações sobre a viagem?',
    fr: 'Nous organisons un <strong>voyage scientifique et initiatique en Égypte</strong> avec Gabriel Silva, où vous pourrez visiter les pyramides de Gizeh, les temples du Nil et les lieux d\'intérêt pyramidologique.\n\nSouhaitez-vous plus d\'informations sur le voyage ?',
    de: 'Wir organisieren eine <strong>wissenschaftliche und initiatische Reise nach Ägypten</strong> mit Gabriel Silva, bei der Sie die Pyramiden von Gizeh, Tempel am Nil und Orte von pyramidologischem Interesse besuchen können.\n\nMöchten Sie mehr Informationen über die Reise?',
    ru: 'Мы организуем <strong>научную и инициатическую поездку в Египет</strong> с Габриэлем Сильвой, где вы сможете посетить пирамиды Гизы, храмы Нила и места пирамидологического интереса.\n\nХотите больше информации о поездке?',
    ar: 'ننظم <strong>رحلة علمية وتنشيطية إلى مصر</strong> مع غابرييل سيلفا، حيث يمكنك زيارة أهرامات الجيزة ومعابد النيل وأماكن ذات اهتمام هرمي.\n\nهل تريد مزيدًا من المعلومات عن الرحلة؟',
  },
  centros: {
    en: 'We have a <strong>directory of pyramid therapy centers</strong> where you can receive professional treatment with Piramicasa pyramids.\n\nAvailable centers are in:\n• 🇪🇸 Barcelona (Karl and Ania)\n• 🇪🇸 Madrid (Alfredo Martín, Juan Antonio López)\n• 🇪🇸 Leganés (Jacob Martín)\n• 🇪🇸 Lleida (Sebastián Viles)\n• 🇪🇸 El Vendrell (T.I.P.I. Center)\n• 🇪🇸 Valencia (Antahkarana - Amparo Vilanova)\n• 🇨🇷 Costa Rica (Randall Sánchez)\n\nWould you like to see the complete directory?',
    pt: 'Temos um <strong>diretório de centros de terapia piramidal</strong> onde pode receber tratamento profissional com pirâmides Piramicasa.\n\nOs centros disponíveis estão em:\n• 🇪🇸 Barcelona (Karl e Ania)\n• 🇪🇸 Madrid (Alfredo Martín, Juan Antonio López)\n• 🇪🇸 Leganés (Jacob Martín)\n• 🇪🇸 Lleida (Sebastián Viles)\n• 🇪🇸 El Vendrell (Centro T.I.P.I.)\n• 🇪🇸 Valência (Antahkarana - Amparo Vilanova)\n• 🇨🇷 Costa Rica (Randall Sánchez)\n\nQuer ver o diretório completo?',
    fr: 'Nous avons un <strong>annuaire de centres de thérapie pyramidale</strong> où vous pouvez recevoir un traitement professionnel avec des pyramides Piramicasa.\n\nLes centres disponibles sont à :\n• 🇪🇸 Barcelone (Karl et Ania)\n• 🇪🇸 Madrid (Alfredo Martín, Juan Antonio López)\n• 🇪🇸 Leganés (Jacob Martín)\n• 🇪🇸 Lleida (Sebastián Viles)\n• 🇪🇸 El Vendrell (Centre T.I.P.I.)\n• 🇪🇸 Valence (Antahkarana - Amparo Vilanova)\n• 🇨🇷 Costa Rica (Randall Sánchez)\n\nSouhaitez-vous voir l\'annuaire complet ?',
    de: 'Wir haben ein <strong>Verzeichnis von Pyramiden-Therapiezentren</strong>, wo Sie professionelle Behandlung mit Piramicasa-Pyramiden erhalten können.\n\nVerfügbare Zentren befinden sich in:\n• 🇪🇸 Barcelona (Karl und Ania)\n• 🇪🇸 Madrid (Alfredo Martín, Juan Antonio López)\n• 🇪🇸 Leganés (Jacob Martín)\n• 🇪🇸 Lleida (Sebastián Viles)\n• 🇪🇸 El Vendrell (T.I.P.I.-Zentrum)\n• 🇪🇸 Valencia (Antahkarana - Amparo Vilanova)\n• 🇨🇷 Costa Rica (Randall Sánchez)\n\nMöchten Sie das vollständige Verzeichnis sehen?',
    ru: 'У нас есть <strong>справочник центров пирамидальной терапии</strong>, где вы можете получить профессиональное лечение с пирамидами Piramicasa.\n\nДоступные центры находятся в:\n• 🇪🇸 Барселона (Карл и Аня)\n• 🇪🇸 Мадрид (Альфредо Мартин, Хуан Антонио Лопес)\n• 🇪🇸 Леганес (Хакоб Мартин)\n• 🇪🇸 Льейда (Себастьян Вилес)\n• 🇪🇸 Эль-Вендрель (Центр T.I.P.I.)\n• 🇪🇸 Валенсия (Антахкарана - Ампаро Виланова)\n• 🇨🇷 Коста-Рика (Рэндалл Санчес)\n\nХотите увидеть полный справочник?',
    ar: 'لدينا <strong>دليل لمراكز العلاج بالأهرامات</strong> حيث يمكنك تلقي علاج احترافي بأهرامات بيراميكاسا.\n\nالمراكز المتاحة في:\n• 🇪🇸 برشلونة (كارل وآنيا)\n• 🇪🇸 مدريد (ألفريدو مارتن، خوان أنطونيو لوبيز)\n• 🇪🇸 ليغانيس (جاكوب مارتن)\n• 🇪🇸 يييدا (سيباستيان فيليس)\n• 🇪🇸 إل فيندريل (مركز T.I.P.I.)\n• 🇪🇸 فالنسيا (أنتاكارانا - أمبارو فيلانوفا)\n• 🇨🇷 كوستاريكا (راندال سانشيز)\n\nهل تريد رؤية الدليل الكامل؟',
  },
  contacto: {
    en: 'You can contact us by:\n• 📞 <strong>Phone/WhatsApp:</strong> +34 639 284 787\n• 💬 Direct WhatsApp for immediate response\n• 📧 Through the contact form on the website\n\nWould you like to contact us now?',
    pt: 'Pode contactar-nos por:\n• 📞 <strong>Telefone/WhatsApp:</strong> +34 639 284 787\n• 💬 WhatsApp direto para resposta imediata\n• 📧 Através do formulário de contacto no site\n\nQuer contactar agora?',
    fr: 'Vous pouvez nous contacter par :\n• 📞 <strong>Téléphone/WhatsApp :</strong> +34 639 284 787\n• 💬 WhatsApp direct pour une réponse immédiate\n• 📧 Via le formulaire de contact sur le site\n\nSouhaitez-vous nous contacter maintenant ?',
    de: 'Sie können uns kontaktieren über:\n• 📞 <strong>Telefon/WhatsApp:</strong> +34 639 284 787\n• 💬 Direktes WhatsApp für sofortige Antwort\n• 📧 Über das Kontaktformular auf der Website\n\nMöchten Sie uns jetzt kontaktieren?',
    ru: 'Вы можете связаться с нами через:\n• 📞 <strong>Телефон/WhatsApp:</strong> +34 639 284 787\n• 💬 Прямой WhatsApp для немедленного ответа\n• 📧 Через контактную форму на сайте\n\nХотите связаться сейчас?',
    ar: 'يمكنك التواصل معنا عبر:\n• 📞 <strong>الهاتف/واتساب:</strong> +34 639 284 787\n• 💬 واتساب مباشر للرد الفوري\n• 📧 عبر نموذج الاتصال على الموقع\n\nهل تريد التواصل الآن؟',
  },
  cita: {
    en: 'You can <strong>book a personalized consultation or appointment</strong>. We will help you choose the ideal pyramid model for your case.\n\nWould you like to book now?',
    pt: 'Pode <strong>agendar uma consulta ou aconselhamento</strong> personalizado. Ajudamo-lo a escolher o modelo de pirâmide ideal para o seu caso.\n\nQuer agendar agora?',
    fr: 'Vous pouvez <strong>prendre rendez-vous pour une consultation ou un conseil</strong> personnalisé. Nous vous aiderons à choisir le modèle de pyramide idéal pour votre cas.\n\nSouhaitez-vous prendre rendez-vous maintenant ?',
    de: 'Sie können eine <strong>persönliche Beratung oder einen Termin vereinbaren</strong>. Wir helfen Ihnen bei der Auswahl des idealen Pyramidenmodells für Ihren Fall.\n\nMöchten Sie jetzt einen Termin vereinbaren?',
    ru: 'Вы можете <strong>записаться на персональную консультацию или приём</strong>. Мы поможем вам выбрать идеальную модель пирамиды для вашего случая.\n\nХотите записаться сейчас?',
    ar: 'يمكنك <strong>حجز استشارة أو موعد شخصي</strong>. سنساعدك في اختيار نموذج الهرم المثالي لحالتك.\n\nهل تريد الحجز الآن؟',
  },
  critica: {
    en: 'We understand skepticism. We have a <strong>critical document</strong> that addresses the most common doubts about the pyramid effect, with answers based on research and experience.\n\nWould you like to see the critical document?',
    pt: 'Compreendemos o cepticismo. Temos um <strong>documento crítico</strong> que aborda as dúvidas mais comuns sobre o efeito piramidal, com respostas baseadas em pesquisa e experiência.\n\nQuer ver o documento crítico?',
    fr: 'Nous comprenons le scepticisme. Nous avons un <strong>document critique</strong> qui aborde les doutes les plus courants sur l\'effet pyramidal, avec des réponses basées sur la recherche et l\'expérience.\n\nSouhaitez-vous voir le document critique ?',
    de: 'Wir verstehen die Skepsis. Wir haben ein <strong>kritisches Dokument</strong>, das die häufigsten Zweifel am Pyramiden-Effekt behandelt, mit Antworten auf Basis von Forschung und Erfahrung.\n\nMöchten Sie das kritische Dokument sehen?',
    ru: 'Мы понимаем скептицизм. У нас есть <strong>критический документ</strong>, который рассматривает наиболее распространённые сомнения об эффекте пирамиды, с ответами, основанными на исследованиях и опыте.\n\nХотите увидеть критический документ?',
    ar: 'نفهم التشكك. لدينا <strong>وثيقة نقدية</strong> تتناول أكثر الشكوك شيوعًا حول تأثير الهرم، بإجابات مبنية على البحث والتجربة.\n\nهل تريد رؤية الوثيقة النقدية؟',
  },
  dossier: {
    en: 'We have a <strong>basic dossier</strong> with complete technical information about Piramicasa pyramids, their effects, endorsements and applications.\n\nWould you like to see the dossier?',
    pt: 'Temos um <strong>dossier básico</strong> com informação técnica completa sobre as pirâmides Piramicasa, os seus efeitos, avales e aplicações.\n\nQuer ver o dossier?',
    fr: 'Nous avons un <strong>dossier de base</strong> avec des informations techniques complètes sur les pyramides Piramicasa, leurs effets, avales et applications.\n\nSouhaitez-vous voir le dossier ?',
    de: 'Wir haben ein <strong>Basis-Dossier</strong> mit vollständigen technischen Informationen über Piramicasa-Pyramiden, ihre Wirkungen, Anerkennungen und Anwendungen.\n\nMöchten Sie das Dossier sehen?',
    ru: 'У нас есть <strong>базовое досье</strong> с полной технической информацией о пирамидах Piramicasa, их эффектах, одобрениях и применениях.\n\nХотите увидеть досье?',
    ar: 'لدينا <strong>ملف أساسي</strong> يحتوي على معلومات تقنية كاملة عن أهرامات بيراميكاسا وتأثيراتها واعتماداتها وتطبيقاتها.\n\nهل تريد رؤية الملف؟',
  },
  medico: {
    en: 'Pyramids <strong>do not replace</strong> medical treatment. They are a <strong>complementary therapy</strong> that can enhance the effects of conventional medicine. Always consult your doctor.\n\nWould you like more information on how to combine them?',
    pt: 'As pirâmides <strong>não substituem</strong> o tratamento médico. São uma <strong>terapia complementar</strong> que pode potenciar os efeitos da medicina convencional. Consulte sempre o seu médico.\n\nQuer mais informações sobre como combiná-las?',
    fr: 'Les pyramides <strong>ne remplacent pas</strong> le traitement médical. Ce sont une <strong>thérapie complémentaire</strong> qui peut potentialiser les effets de la médecine conventionnelle. Consultez toujours votre médecin.\n\nSouhaitez-vous plus d\'informations sur comment les combiner ?',
    de: 'Pyramiden <strong>ersetzen nicht</strong> die medizinische Behandlung. Sie sind eine <strong>komplementäre Therapie</strong>, die die Wirkungen der konventionellen Medizin verstärken kann. Konsultieren Sie immer Ihren Arzt.\n\nMöchten Sie mehr Informationen zur Kombination?',
    ru: 'Пирамиды <strong>не заменяют</strong> медицинское лечение. Это <strong>дополнительная терапия</strong>, которая может усилить эффекты традиционной медицины. Всегда консультируйтесь с врачом.\n\nХотите больше информации о сочетании?',
    ar: 'الأهرامات <strong>لا تحل محل</strong> العلاج الطبي. إنها <strong>علاج تكميلي</strong> يمكن أن يعزز آثار الطب التقليدي. استشر طبيبك دائمًا.\n\nهل تريد مزيدًا من المعلومات عن كيفية دمجها؟',
  },
  thanks: {
    en: 'You\'re welcome! 😊 I\'m here to help you. If you have more questions, don\'t hesitate to ask. You can also contact our team directly via WhatsApp.',
    pt: 'De nada! 😊 Estou aqui para ajudar. Se tiver mais perguntas, não hesite em perguntar. Também pode contactar diretamente a nossa equipa por WhatsApp.',
    fr: 'De rien ! 😊 Je suis là pour vous aider. Si vous avez d\'autres questions, n\'hésitez pas à les poser. Vous pouvez aussi contacter notre équipe directement par WhatsApp.',
    de: 'Gern geschehen! 😊 Ich bin hier, um Ihnen zu helfen. Wenn Sie weitere Fragen haben, zögern Sie nicht zu fragen. Sie können unser Team auch direkt über WhatsApp kontaktieren.',
    ru: 'Пожалуйста! 😊 Я здесь, чтобы помочь. Если у вас есть ещё вопросы, не стесняйтесь спрашивать. Вы также можете связаться с нашей командой напрямую через WhatsApp.',
    ar: 'عفوًا! 😊 أنا هنا لمساعدتك. إذا كان لديك المزيد من الأسئلة، لا تتردد في السؤال. يمكنك أيضًا التواصل مع فريقنا مباشرة عبر واتساب.',
  },
  identity: {
    en: 'I am the <strong>virtual assistant of Piramicasa</strong> 🤖. I\'m here to guide you through our website and answer your questions about therapeutic pyramids. Although I\'m a bot, our human team is available on WhatsApp to assist you personally.',
    pt: 'Sou o <strong>assistente virtual da Piramicasa</strong> 🤖. Estou aqui para guiá-lo pelo nosso site e responder às suas perguntas sobre pirâmides terapêuticas. Embora eu seja um bot, a nossa equipa humana está disponível no WhatsApp para o atender pessoalmente.',
    fr: 'Je suis l\'<strong>assistant virtuel de Piramicasa</strong> 🤖. Je suis là pour vous guider sur notre site et répondre à vos questions sur les pyramides thérapeutiques. Bien que je sois un bot, notre équipe humaine est disponible sur WhatsApp pour vous assister personnellement.',
    de: 'Ich bin der <strong>virtuelle Assistent von Piramicasa</strong> 🤖. Ich bin hier, um Sie durch unsere Website zu führen und Ihre Fragen zu therapeutischen Pyramiden zu beantworten. Obwohl ich ein Bot bin, ist unser menschliches Team auf WhatsApp verfügbar, um Sie persönlich zu betreuen.',
    ru: 'Я — <strong>виртуальный ассистент Пирамикасы</strong> 🤖. Я здесь, чтобы провести вас по нашему сайту и ответить на ваши вопросы о терапевтических пирамидах. Хотя я бот, наша человеческая команда доступна в WhatsApp для личной помощи.',
    ar: 'أنا <strong>المساعد الافتراضي لبيراميكاسا</strong> 🤖. أنا هنا لإرشادك عبر موقعنا والإجابة على أسئلتك حول الأهرامات العلاجية. رغم أنني روبوت، فريقنا البشري متاح على واتساب لخدمتك شخصيًا.',
  },
  joyas: {
    en: '<strong>Piramijoyas</strong> are small portable pyramids in the form of jewelry, to carry the pyramid effect with you throughout the day.\n\nWould you like more information?',
    pt: 'As <strong>Piramijóias</strong> são pequenas pirâmides portáteis em forma de joia, para levar o efeito piramidal consigo durante o dia.\n\nQuer mais informações?',
    fr: 'Les <strong>Piramijoyas</strong> sont de petites pyramides portables sous forme de bijou, pour emporter l\'effet pyramidal avec vous toute la journée.\n\nSouhaitez-vous plus d\'informations ?',
    de: '<strong>Piramijoyas</strong> sind kleine tragbare Pyramiden in Schmuckform, um den Pyramiden-Effekt den ganzen Tag mitzunehmen.\n\nMöchten Sie mehr Informationen?',
    ru: '<strong>Пирамихояс</strong> — маленькие портативные пирамиды в виде украшений, чтобы носить эффект пирамиды с собой весь день.\n\nХотите больше информации?',
    ar: '<strong>بيراميخوias</strong> هي أهرامات صغيرة محمولة على شكل مجوهرات، لتحمل تأثير الهرم معك طوال اليوم.\n\nهل تريد مزيدًا من المعلومات؟',
  },
  avales: {
    en: 'The pyramid effect has <strong>endorsements and certifications</strong> from scientific institutions. Among them:\n• 📜 Scientific Council of the National Center for Natural and Traditional Medicine (CENAMENT)\n• 🔬 Studies on anti-inflammatory, analgesic, bacteriostatic, muscle-relaxing and sedative effects\n• 🏆 More than 20 years of research and clinical application\n\nWould you like to see the endorsements?',
    pt: 'O efeito piramidal conta com <strong>avales e certificações</strong> de instituições científicas. Entre eles:\n• 📜 Conselho Científico do Centro Nacional de Medicina Natural e Tradicional (CENAMENT)\n• 🔬 Estudos sobre efeitos anti-inflamatório, analgésico, bacteriostático, miorrelaxante e sedativo\n• 🏆 Mais de 20 anos de pesquisa e aplicação clínica\n\nQuer ver os avales?',
    fr: 'L\'effet pyramidal bénéficie d\'<strong>avals et certifications</strong> d\'institutions scientifiques. Parmi eux :\n• 📜 Conseil Scientifique du Centre National de Médecine Naturelle et Traditionnelle (CENAMENT)\n• 🔬 Études sur les effets anti-inflammatoire, analgésique, bactériostatique, myorelaxant et sédatif\n• 🏆 Plus de 20 ans de recherche et d\'application clinique\n\nSouhaitez-vous voir les avales ?',
    de: 'Der Pyramiden-Effekt hat <strong>Anerkennungen und Zertifizierungen</strong> wissenschaftlicher Institutionen. Darunter:\n• 📜 Wissenschaftlicher Rat des Nationalen Zentrums für Natur- und Traditionsmedizin (CENAMENT)\n• 🔬 Studien über entzündungshemmende, schmerzstillende, bakteriostatische, muskelentspannende und beruhigende Wirkungen\n• 🏆 Mehr als 20 Jahre Forschung und klinische Anwendung\n\nMöchten Sie die Anerkennungen sehen?',
    ru: 'Эффект пирамиды имеет <strong>одобрения и сертификации</strong> научных учреждений. Среди них:\n• 📜 Научный Совет Национального Центра Естественной и Традиционной Медицины (CENAMENT)\n• 🔬 Исследования противовоспалительного, обезболивающего, бактериостатического, миорелаксирующего и седативного эффектов\n• 🏆 Более 20 лет исследований и клинического применения\n\nХотите увидеть одобрения?',
    ar: 'تأثير الهرم لديه <strong>اعتمادات وشهادات</strong> من مؤسسات علمية. منها:\n• 📜 المجلس العلمي للمركز الوطني للطب الطبيعي والتقليدي (CENAMENT)\n• 🔬 دراسات عن التأثيرات المضادة للالتهاب والمسكنة والمثبطة للبكتيريا والمرخية للعضلات والمهدئة\n• 🏆 أكثر من 20 عامًا من البحث والتطبيق السريري\n\nهل تريد رؤية الاعتمادات؟',
  },
  conferencias: {
    en: 'We organize <strong>conferences, courses and workshops</strong> on pyramidology and pyramid therapy. We also participate in events and dissemination programs.\n\nWould you like to see the upcoming conferences?',
    pt: 'Organizamos <strong>conferências, cursos e workshops</strong> sobre piramidologia e piramidoterapia. Também participamos em eventos e programas de divulgação.\n\nQuer ver as próximas conferências?',
    fr: 'Nous organisons des <strong>conférences, cours et ateliers</strong> sur la pyramidologie et la pyramidothérapie. Nous participons également à des événements et programmes de diffusion.\n\nSouhaitez-vous voir les prochaines conférences ?',
    de: 'Wir organisieren <strong>Konferenzen, Kurse und Workshops</strong> über Pyramidologie und Pyramidotherapie. Wir nehmen auch an Veranstaltungen und Verbreitungsprogrammen teil.\n\nMöchten Sie die kommenden Konferenzen sehen?',
    ru: 'Мы организуем <strong>конференции, курсы и мастер-классы</strong> по пирамидологии и пирамидотерапии. Также участвуем в мероприятиях и просветительских программах.\n\nХотите увидеть предстоящие конференции?',
    ar: 'ننظم <strong>مؤتمرات ودورات وورش عمل</strong> حول علم الأهرامات والعلاج بالأهرامات. نشارك أيضًا في الفعاليات وبرامج النشر.\n\nهل تريد رؤية المؤتمرات القادمة؟',
  },
  envio_info: {
    en: '<strong>Pyramid shipping</strong> is done worldwide:\n• 📦 Safe and protected packaging\n• 🚚 Specialized transport according to model\n• ⏱️ Estimated time: 3-15 days depending on destination\n• 🌍 International shipping available\n\nWould you like to check shipping to your location?',
    pt: 'Os <strong>envios de pirâmides</strong> realizam-se para todo o mundo:\n• 📦 Embalagem segura e protegida\n• 🚚 Transporte especializado consoante o modelo\n• ⏱️ Prazo estimado: 3-15 dias consoante o destino\n• 🌍 Envio internacional disponível\n\nQuer consultar o envio para a sua localização?',
    fr: 'L\'<strong>expédition de pyramides</strong> se fait dans le monde entier :\n• 📦 Emballage sûr et protégé\n• 🚚 Transport spécialisé selon le modèle\n• ⏱️ Délai estimé : 3-15 jours selon la destination\n• 🌍 Expédition internationale disponible\n\nSouhaitez-vous vérifier l\'expédition vers votre localisation ?',
    de: 'Der <strong>Pyramidenversand</strong> erfolgt weltweit:\n• 📦 Sichere und geschützte Verpackung\n• 🚚 Spezialtransport je nach Modell\n• ⏱️ Geschätzte Zeit: 3-15 Tage je nach Ziel\n• 🌍 Internationaler Versand verfügbar\n\nMöchten Sie den Versand an Ihren Standort prüfen?',
    ru: '<strong>Доставка пирамид</strong> осуществляется по всему миру:\n• 📦 Безопасная и защищённая упаковка\n• 🚚 Специализированный транспорт в зависимости от модели\n• ⏱️ Примерное время: 3-15 дней в зависимости от назначения\n• 🌍 Доступна международная доставка\n\nХотите проверить доставку в ваш регион?',
    ar: 'يتم <strong>شحن الأهرامات</strong> إلى جميع أنحاء العالم:\n• 📦 تغليف آمن ومحمي\n• 🚚 نقل متخصص حسب النموذج\n• ⏱️ الوقت المقدر: 3-15 يومًا حسب الوجهة\n• 🌍 الشحن الدولي متاح\n\nهل تريد التحقق من الشحن إلى موقعك؟',
  },
  legal: {
    en: 'You can consult our <strong>terms and conditions, legal notices and copyrights</strong> by contacting us directly.\n\nWould you like to see the legal terms?',
    pt: 'Pode consultar os nossos <strong>termos e condições, avisos legais e direitos de autor</strong> contactando-nos diretamente.\n\nQuer ver os termos legais?',
    fr: 'Vous pouvez consulter nos <strong>termes et conditions, mentions légales et droits d\'auteur</strong> en nous contactant directement.\n\nSouhaitez-vous voir les conditions légales ?',
    de: 'Sie können unsere <strong>Geschäftsbedingungen, rechtlichen Hinweise und Urheberrechte</strong> einsehen, indem Sie uns direkt kontaktieren.\n\nMöchten Sie die rechtlichen Bedingungen sehen?',
    ru: 'Вы можете ознакомиться с нашими <strong>условиями и положениями, правовыми уведомлениями и авторскими правами</strong>, связавшись с нами напрямую.\n\nХотите увидеть правовые условия?',
    ar: 'يمكنك الاطلاع على <strong>الشروط والأحكام والإشعارات القانونية وحقوق النشر</strong> بالتواصل معنا مباشرة.\n\nهل تريد رؤية الشروط القانونية؟',
  },
};

var PM_CB_QUICK = {
  en: [
    {label:'💰 Prices',text:'How much do the pyramids cost?'},
    {label:'🛏️ Piramicama',text:'Tell me about the Piramicama'},
    {label:'🔬 Pyramid Effect',text:'What is the pyramid effect?'},
    {label:'🏥 Therapy Centers',text:'Where are the therapy centers?'},
    {label:'📹 Videos',text:'I want to see videos about pyramids'},
    {label:'📅 Book Appointment',text:'I want to book an appointment'},
    {label:'📦 International Shipping',text:'Do you ship internationally?'},
    {label:'📞 Contact',text:'How can I contact you?'},
  ],
  pt: [
    {label:'💰 Preços',text:'Quanto custam as pirâmides?'},
    {label:'🛏️ Piramicama',text:'Fale-me da Piramicama'},
    {label:'🔬 Efeito Piramidal',text:'O que é o efeito piramidal?'},
    {label:'🏥 Centros de Terapia',text:'Onde estão os centros de terapia?'},
    {label:'📹 Vídeos',text:'Quero ver vídeos sobre pirâmides'},
    {label:'📅 Agendar Consulta',text:'Quero agendar uma consulta'},
    {label:'📦 Envios Internacionais',text:'Fazem envios internacionais?'},
    {label:'📞 Contacto',text:'Como posso contactar?'},
  ],
  fr: [
    {label:'💰 Prix',text:'Combien coûtent les pyramides ?'},
    {label:'🛏️ Piramicama',text:'Parlez-moi de la Piramicama'},
    {label:'🔬 Effet Pyramidal',text:'Qu\'est-ce que l\'effet pyramidal ?'},
    {label:'🏥 Centres de Thérapie',text:'Où sont les centres de thérapie ?'},
    {label:'📹 Vidéos',text:'Je veux voir des vidéos sur les pyramides'},
    {label:'📅 Prendre RDV',text:'Je veux prendre rendez-vous'},
    {label:'📦 Envoi International',text:'Livrez-vous à l\'international ?'},
    {label:'📞 Contact',text:'Comment puis-je vous contacter ?'},
  ],
  de: [
    {label:'💰 Preise',text:'Was kosten die Pyramiden?'},
    {label:'🛏️ Piramicama',text:'Erzählen Sie mir von der Piramicama'},
    {label:'🔬 Pyramiden-Effekt',text:'Was ist der Pyramiden-Effekt?'},
    {label:'🏥 Therapiezentren',text:'Wo sind die Therapiezentren?'},
    {label:'📹 Videos',text:'Ich möchte Videos über Pyramiden sehen'},
    {label:'📅 Termin Buchen',text:'Ich möchte einen Termin buchen'},
    {label:'📦 Internationaler Versand',text:'Versenden Sie international?'},
    {label:'📞 Kontakt',text:'Wie kann ich Sie kontaktieren?'},
  ],
  ru: [
    {label:'💰 Цены',text:'Сколько стоят пирамиды?'},
    {label:'🛏️ Пирамикама',text:'Расскажите мне о Пирамикаме'},
    {label:'🔬 Эффект Пирамиды',text:'Что такое эффект пирамиды?'},
    {label:'🏥 Центры Терапии',text:'Где находятся центры терапии?'},
    {label:'📹 Видео',text:'Я хочу посмотреть видео о пирамидах'},
    {label:'📅 Записаться',text:'Я хочу записаться на приём'},
    {label:'📦 Международная Доставка',text:'Доставляете ли вы за границу?'},
    {label:'📞 Контакт',text:'Как я могу связаться с вами?'},
  ],
  ar: [
    {label:'💰 الأسعار',text:'كم تكلف الأهرامات؟'},
    {label:'🛏️ بيراميكاما',text:'أخبرني عن بيراميكاما'},
    {label:'🔬 تأثير الهرم',text:'ما هو تأثير الهرم؟'},
    {label:'🏥 مراكز العلاج',text:'أين مراكز العلاج؟'},
    {label:'📹 فيديوهات',text:'أريد مشاهدة فيديوهات عن الأهرامات'},
    {label:'📅 حجز موعد',text:'أريد حجز موعد'},
    {label:'📦 الشحن الدولي',text:'هل تشحنون دوليًا؟'},
    {label:'📞 اتصال',text:'كيف يمكنني التواصل معكم؟'},
  ],
};

// --- generated: full keyword + action + fallback i18n ---
var PM_CB_KEYWORDS = {
  greeting: {
    en: ['hello','good','good morning','good afternoon','good night','greetings','hey','wave','how about','help','menu','options'],
    pt: ['olá','bom','bom dia','boa tarde','boa noite','saudações','ei','onda','que tal','ajuda','cardápio','opções'],
    fr: ['bonjour','bien','bonne nuit','salutations','hé','vague','que diriez-vous','aide','menus','choix'],
    de: ['hallo','gut','guten morgen','guten tag','gute nacht','grüße','welle','wie wäre es mit','hilfe','menü','optionen'],
    ru: ['привет','хорошо','доброе утро','добрый день','спокойной ночи','приветствия','эй','волна','как насчет','помочь','меню','варианты'],
    ar: ['مرحبا','جيد','صباح الخير','مساء الخير','ليلة سعيدة','تحياتي','مهلا','موجة','ماذا عن','مساعدة','القائمة','خيارات'],
  },
  precios: {
    en: ['price','prices','cost','costs','how much does it cost','how much is it worth','rate','rates','price list','how much','budget','how much do they charge','pay'],
    pt: ['preço','preços','custo','custos','quanto custa','quanto vale','taxa','taxas','lista de preços','quanto','orçamento','quanto eles cobram','pagar'],
    fr: ['prix','coût','les coûts','combien ça coûte','combien ça vaut','taux','tarifs','liste de prix','combien','budget','combien facturent-ils','payer'],
    de: ['preis','preise','kosten','wie viel kostet es?','wie viel ist es wert?','rate','tarife','preisliste','wie viel','budget','wie viel verlangen sie?','zahlen'],
    ru: ['цена','цены','стоимость','затраты','сколько это стоит','ставка','ставки','прайс-лист','сколько','бюджет','сколько они берут','платить'],
    ar: ['السعر','الأسعار','التكلفة','التكاليف','كم يكلف','كم هو يستحق','معدل','معدلات','قائمة الأسعار','كم','الميزانية','كم يتقاضون','دفع'],
  },
  compra: {
    en: ['buy','buy pyramid','acquire','where do i buy','request','order','i would like one','i want one','i need one','how do i buy','get'],
    pt: ['comprar','comprar pirâmide','adquirir','onde eu compro','solicitação','ordem','eu gostaria de um','eu quero um','eu preciso de um','como faço para comprar','obter'],
    fr: ['acheter','acheter une pyramide','acquérir','où puis-je acheter','demande','commande','j\'en voudrais un','j\'en veux un','j\'en ai besoin d\'un','comment puis-je acheter','obtenir'],
    de: ['kaufen','pyramide kaufen','erwerben','wo kaufe ich','anfrage','bestellen','ich hätte gerne eins','ich will eins','ich brauche eins','wie kaufe ich','bekommen'],
    ru: ['купить','купить пирамиду','приобретать','где мне купить','запрос','заказать','я бы хотел один','я хочу один','мне нужен один','как мне купить','получить'],
    ar: ['شراء','شراء الهرم','الحصول على','أين أشتري','طلب','النظام','أريد واحدة','انا بحاجة الى واحدة','كيف يمكنني شراء','احصل على'],
  },
  envios: {
    en: ['shipping','send','shipments','delivery','send to','international','another country','foreigner','outside of spain','how does it arrive','transportation','logistics','customs'],
    pt: ['envio','enviar','remessas','entrega','enviar para','internacional','outro país','estrangeiro','fora da espanha','como chega','transporte','logística','costumes'],
    fr: ['expédition','envoyer','expéditions','livraison','envoyer à','internationale','un autre pays','étranger','en dehors de l\'espagne','comment ça arrive','transport','logistique','douane'],
    de: ['versand','senden','sendungen','lieferung','senden an','international','ein anderes land','ausländer','außerhalb spaniens','wie kommt es an','transport','logistik','zoll'],
    ru: ['доставка','отправить','поставки','отправить в','международный','другая страна','иностранец','за пределами испании','как оно приходит','транспорт','логистика','таможня'],
    ar: ['الشحن','إرسال','شحنات','تسليم','أرسل إلى','دولي','بلد آخر','أجنبي','خارج اسبانيا','كيف تصل','النقل','اللوجستية','الجمارك'],
  },
  piramicama: {
    en: ['pyramidbed','pyramid bed','bed','sleep','i dream','dream','rest','insomnia','therapeutic bed','relaxation','deep sleep'],
    pt: ['pirâmide','cama pirâmide','cama','dormir','eu sonho','sonho','descansar','insônia','cama terapêutica','relaxamento','sono profundo'],
    fr: ['lit pyramidal','lit','dormir','je rêve','rêve','repos','insomnie','lit thérapeutique','détente','sommeil profond'],
    de: ['pyramidenbett','bett','schlafen','ich träume','traum','ruhe','schlaflosigkeit','therapeutisches bett','entspannung','tiefer schlaf'],
    ru: ['пирамидакровать','пирамидальная кровать','кровать','спать','я мечтаю','мечтать','отдых','бессонница','терапевтическая кровать','расслабление','глубокий сон'],
    ar: ['معرف com لهذا التطبيق هو com.pyramidebed','سرير الهرم','سرير','نوم','أنا أحلم','حلم','راحة','الأرق','سرير علاجي','الاسترخاء','نوم عميق'],
  },
  hygia: {
    en: ['hygia','hygienic pyramid','antipyramid','hygia horus','small pyramid','minor pyramid'],
    pt: ['higia','pirâmide higiênica','antipirâmide','hígia hórus','pequena pirâmide','pirâmide menor'],
    fr: ['hygie','pyramide hygiénique','antipyramide','hygie horus','petite pyramide','pyramide mineure'],
    de: ['hygiene','hygienepyramide','antipyramide','hygie horus','kleine pyramide'],
    ru: ['гигия','гигиеническая пирамида','антипирамида','гигия гор','маленькая пирамида','малая пирамида'],
    ar: ['هيجيا','الهرم الصحي','مضاد الهرم','هيجيا حورس','هرم صغير','الهرم الصغير'],
  },
  hercules: {
    en: ['hercules','immunological','immunity','immune booster','intensive therapy','powerful','big pyramid'],
    pt: ['hércules','imunológico','imunidade','reforço imunológico','terapia intensiva','poderoso','grande pirâmide'],
    fr: ['hercule','immunologique','immunité','booster immunitaire','thérapie intensive','puissant','grande pyramide'],
    de: ['herkules','immunologisch','immunität','immunverstärker','intensivtherapie','mächtig','große pyramide'],
    ru: ['геркулес','иммунологический','иммунитет','иммунный усилитель','интенсивная терапия','мощный','большая пирамида'],
    ar: ['هرقل','المناعية','الحصانة','مقوي للمناعة','العلاج المكثف','قوية','الهرم الكبير'],
  },
  pirajardin: {
    en: ['pirajardin','garden','agriculture','beekeeping','bees','plants','cultivation','orchard','ascospherosis','pyramid bees'],
    pt: ['pirajardin','jardim','agricultura','apicultura','abelhas','plantas','cultivo','pomar','ascosferose','abelhas pirâmide'],
    fr: ['pirajardin','jardin','agriculture','apiculture','les abeilles','plantes','culture','verger','ascosphérose','abeilles pyramidales'],
    de: ['pirajardin','garten','landwirtschaft','bienenzucht','bienen','pflanzen','anbau','obstgarten','askospherose','pyramidenbienen'],
    ru: ['пиражарден','сад','сельское хозяйство','пчеловодство','пчелы','растения','выращивание','фруктовый сад','аскосфероз','пирамидальные пчелы'],
    ar: ['بيراجاردين','حديقة','الزراعة','تربية النحل','النحل','النباتات','زراعة','بستان','داء الاسكوسفير','النحل الهرم'],
  },
  faraday: {
    en: ['faraday','chest','chests','electromagnetic','emf','electromagnetic radiation','wifi','5g','faraday cage','emf protection'],
    pt: ['faraday','peito','baús','eletromagnético','fem','radiação eletromagnética','wi-fi','5g','gaiola de faraday','proteção fem'],
    fr: ['faraday','poitrine','coffres','électromagnétique','fem','rayonnement électromagnétique','wi-fi','5g','cage de faraday','protection contre les champs électromagnétiques'],
    de: ['faraday','brust','truhen','elektromagnetisch','emk','elektromagnetische strahlung','wlan','5g','faradayscher käfig','emf-schutz'],
    ru: ['фарадей','грудь','сундуки','электромагнитный','эдс','электромагнитное излучение','wi-fi','5г','клетка фарадея','защита от эдс'],
    ar: ['فاراداي','الصدر','الصناديق','الكهرومغناطيسي','emf','الإشعاع الكهرومغناطيسي','wifi','5 جرام','قفص فاراداي','حماية emf'],
  },
  mascotas: {
    en: ['pet','pets','dog','dogs','cat','cats','animal','animals','veterinarian','pyramascotas','pet pyramid'],
    pt: ['animal de estimação','animais de estimação','cachorro','cães','gato','gatos','animal','animais','veterinário','piramascotas','pirâmide de animais de estimação'],
    fr: ['animal de compagnie','animaux de compagnie','chien','chiens','chat','chats','animal','animaux','vétérinaire','pyramascotas','pyramide pour animaux de compagnie'],
    de: ['haustier','haustiere','hund','hunde','katze','katzen','tier','tiere','tierarzt','pyramascotas','haustierpyramide'],
    ru: ['домашнее животное','домашние животные','собака','собаки','кот','кошки','животное','животные','ветеринар','пирамаскоты','пирамида для домашних животных'],
    ar: ['حيوان أليف','الحيوانات الأليفة','كلب','كلاب','قطة','القطط','حيوان','الحيوانات','طبيب بيطري','بيراماسكوتاس','الهرم الحيوانات الأليفة'],
  },
  vital: {
    en: ['vital','vital pyramid house','laptop','carry','travel','transportable','mobile'],
    pt: ['essencial','casa pirâmide vital','computador portátil','carregar','viajar','transportável','celular'],
    fr: ['vital','maison pyramidale vitale','ordinateur portable','porter','voyage','transportable','mobile'],
    de: ['lebenswichtig','lebenswichtiges pyramidenhaus','laptop','tragen','reisen','transportabel','mobil'],
    ru: ['жизненно важный','жизненно важный дом-пирамида','ноутбук','нести','путешествовать','транспортабельный','мобильный'],
    ar: ['حيوي','بيت الهرم الحيوي','كمبيوتر محمول','حمل','سفر','قابلة للنقل','المحمول'],
  },
  piramide: {
    en: ['standard pyramid','normal pyramid','basic pyramid','therapeutic pyramid','what a pyramid','what model','what pyramid did i buy?','types of pyramids','models','catalog','pyramid catalog'],
    pt: ['pirâmide padrão','pirâmide normal','pirâmide básica','pirâmide terapêutica','que pirâmide','qual modelo','que pirâmide eu comprei?','tipos de pirâmides','modelos','catálogo','catálogo de pirâmide'],
    fr: ['pyramide standard','pyramide normale','pyramide de base','pyramide thérapeutique','quelle pyramide','quel modèle','quelle pyramide ai-je achetée ?','types de pyramides','modèles','catalogue','catalogue pyramidal'],
    de: ['standardpyramide','normale pyramide','grundpyramide','therapeutische pyramide','was für eine pyramide','welches modell','welche pyramide habe ich gekauft?','arten von pyramiden','modelle','katalog','pyramidenkatalog'],
    ru: ['стандартная пирамида','обычная пирамида','основная пирамида','терапевтическая пирамида','что за пирамида','какая модель','какую пирамиду я купил?','виды пирамид','модели','каталог','каталог пирамид'],
    ar: ['الهرم القياسي','الهرم العادي','الهرم الأساسي','الهرم العلاجي','يا له من هرم','ما النموذج','ما الهرم الذي اشتريته؟','أنواع الأهرامات','نماذج','كتالوج','كتالوج الهرم'],
  },
  efecto: {
    en: ['what is','what is a pyramid','pyramid effect','how it works','it really works','pyramidotherapy','pyramidology','pyramid energy','antipyramid','antipyramids','what is pyramidotherapy?','what are they for?'],
    pt: ['o que é','o que é uma pirâmide','efeito pirâmide','como funciona','realmente funciona','piramidaloterapia','piramidologia','energia da pirâmide','antipirâmide','antipirâmides','o que é piramidaloterapia?','para que servem?'],
    fr: ['qu\'est-ce que c\'est','qu\'est-ce qu\'une pyramide','effet pyramidal','comment ça marche','ça marche vraiment','pyramidothérapie','pyramidologie','énergie pyramidale','antipyramide','antipyramides','qu’est-ce que la pyramidothérapie ?','a quoi servent-ils ?'],
    de: ['was ist','was ist eine pyramide?','pyramideneffekt','wie es funktioniert','es funktioniert wirklich','pyramidotherapie','pyramidologie','pyramidenenergie','antipyramide','antipyramiden','was ist pyramidotherapie?','wozu dienen sie?'],
    ru: ['что такое','что такое пирамида','эффект пирамиды','как это работает','это действительно работает','пирамидотерапия','пирамидология','энергия пирамиды','антипирамида','антипирамиды','что такое пирамидотерапия?','для чего они нужны?'],
    ar: ['ما هو','ما هو الهرم','تأثير الهرم','كيف يعمل','إنه يعمل حقًا','العلاج الهرمي','علم الأهرامات','طاقة الهرم','مضاد الهرم','مضادات الأهرامات','ما هو العلاج الهرمي؟','لماذا هم؟'],
  },
  salud: {
    en: ['health','benefit','benefits','improvement','illness','diseases','treatment','cure','pain','pains','symptoms','relief','relieve','insomnia','stress','anxiety','fibromyalgia','osteoarthritis','arthritis','chronic pain'],
    pt: ['saúde','benefício','benefícios','melhoria','doença','doenças','tratamento','cura','dor','dores','sintomas','alívio','aliviar','insônia','estresse','ansiedade','fibromialgia','osteoartrite','artrite','dor crônica'],
    fr: ['santé','bénéfice','avantages','amélioration','maladie','maladies','traitement','guérir','douleur','douleurs','symptômes','soulagement','soulager','insomnie','stress','anxiété','fibromyalgie','arthrose','arthrite','douleur chronique'],
    de: ['gesundheit','vorteil','vorteile','verbesserung','krankheit','krankheiten','behandlung','heilen','schmerz','schmerzen','symptome','erleichterung','entlasten','schlaflosigkeit','stress','angst','fibromyalgie','arthrose','arthritis','chronische schmerzen'],
    ru: ['здоровье','выгода','преимущества','улучшение','болезнь','болезни','лечение','вылечить','боль','боли','симптомы','облегчение','облегчить','бессонница','стресс','тревога','фибромиалгия','остеоартрит','артрит','хроническая боль'],
    ar: ['الصحة','فائدة','فوائد','تحسين','مرض','الأمراض','العلاج','علاج','ألم','آلام','الأعراض','إغاثة','تخفيف','الأرق','الإجهاد','القلق','فيبروميالجيا','هشاشة العظام','التهاب المفاصل','ألم مزمن'],
  },
  testimonios: {
    en: ['testimony','testimonials','opinion','opinions','review','experience','experiences','it really works','results','real cases','it works'],
    pt: ['testemunho','depoimentos','opinião','opiniões','revisão','experiência','experiências','realmente funciona','resultados','casos reais','funciona'],
    fr: ['témoignage','témoignages','avis','examen','expérience','expériences','ça marche vraiment','résultats','cas réels','ça marche'],
    de: ['zeugnis','erfahrungsberichte','meinung','meinungen','rezension','erfahrung','erfahrungen','es funktioniert wirklich','ergebnisse','echte fälle','es funktioniert'],
    ru: ['показания','отзывы','мнение','мнения','обзор','опыт','это действительно работает','результаты','реальные дела','это работает'],
    ar: ['شهادة','شهادات','الرأي','الآراء','مراجعة','تجربة','الخبرات','إنه يعمل حقًا','النتائج','حالات حقيقية','إنه يعمل'],
  },
  historia: {
    en: ['history','who','founder','osiris','gabriel','gabriel silva','since when','antiquity','when did it start','origin','when it was founded'],
    pt: ['história','quem','fundador','osíris','gabriel','gabriel silva','desde quando','antiguidade','quando isso começou','origem','quando foi fundado'],
    fr: ['histoire','qui','fondateur','osiris','gabriel','gabriel silva','depuis quand','antiquité','quand est-ce que ça a commencé','origine','quand il a été fondé'],
    de: ['geschichte','wer','gründer','osiris','gabriel','gabriel silva','seit wann','antike','wann hat es angefangen','herkunft','als es gegründet wurde'],
    ru: ['история','кто','основатель','осирис','габриэль','габриэль сильва','с каких это пор','древность','когда это началось','происхождение','когда он был основан'],
    ar: ['التاريخ','من','مؤسس','أوزوريس','غابرييل','غابرييل سيلفا','منذ متى','العصور القديمة','متى بدأت','أصل','عندما تأسست'],
  },
  presentacion: {
    en: ['presentation','team','who are you','who we are','virginia','hator','who works','who makes the pyramids','who is behind','gabriel osiris','scientific team'],
    pt: ['apresentação','equipe','quem é você','quem somos','virgínia','odiador','quem trabalha','quem faz as pirâmides','quem está por trás','gabriel osíris','equipe científica'],
    fr: ['présentation','équipe','qui es-tu','qui nous sommes','virginie','haineux','qui travaille','qui fait les pyramides','qui est derrière','gabriel osiris','équipe scientifique'],
    de: ['präsentation','team','wer bist du?','wer wir sind','virginia','hasser','wer arbeitet','wer macht die pyramiden?','wer dahinter steckt','gabriel osiris','wissenschaftliches team'],
    ru: ['презентация','команда','кто ты','кто мы','вирджиния','ненавистник','кто работает','кто делает пирамиды','кто позади','габриэль осирис','научная группа'],
    ar: ['العرض التقديمي','فريق','من أنت','من نحن','فرجينيا','كاره','من يعمل','من يصنع الأهرامات','من هو وراء','غابرييل أوزوريس','الفريق العلمي'],
  },
  construccion: {
    en: ['construction','build','materials','proportion','proportions','assembly','orientation','how to do it','how to build','manufacturing','make pyramid','pyramid materials'],
    pt: ['construção','construir','materiais','proporção','proporções','montagem','orientação','como fazer','como construir','fabricação','fazer pirâmide','materiais de pirâmide'],
    fr: ['bâtiment','construire','matériaux','proportion','proportions','assemblage','orientation','comment faire','comment construire','fabrication','faire une pyramide','matériaux pyramidaux'],
    de: ['bau','bauen','materialien','anteil','proportionen','montage','orientierung','wie es geht','wie man baut','herstellung','pyramide machen','pyramidenmaterialien'],
    ru: ['строительство','строить','материалы','пропорция','пропорции','сборка','ориентация','как это сделать','как построить','производство','сделать пирамиду','материалы пирамиды'],
    ar: ['البناء','بناء','المواد','نسبة','النسب','التجميع','التوجه','كيفية القيام بذلك','كيفية البناء','التصنيع','اصنع الهرم','مواد الهرم'],
  },
  libros: {
    en: ['book','books','read','publication','publications','bibliography','where to read','written information','documentation','pyramid books'],
    pt: ['livro','livros','leia','publicação','publicações','bibliografia','onde ler','informação escrita','documentação','livros de pirâmide'],
    fr: ['livre','livres','lire','publication','publications','bibliographie','où lire','informations écrites','documents','livres pyramidaux'],
    de: ['buch','bücher','lesen','veröffentlichung','veröffentlichungen','bibliographie','wo man lesen kann','schriftliche informationen','dokumentation','pyramidenbücher'],
    ru: ['книга','книги','читать','публикация','публикации','библиография','где читать','письменная информация','документация','книги-пирамиды'],
    ar: ['كتاب','كتب','قراءة','النشر','المنشورات','ببليوغرافيا','أين تقرأ','معلومات مكتوبة','الوثائق','كتب الهرم'],
  },
  videos: {
    en: ['video','videos','youtube','conference','talk','documentary','see explanation','tutorial','watch videos','pyramid videos'],
    pt: ['vídeo','vídeos','youtube','conferência','falar','documentário','veja a explicação','tutorial','assistir vídeos','vídeos de pirâmide'],
    fr: ['vidéo','vidéos','youtube','conférence','parler','documentaire','voir explication','tutoriel','regarder des vidéos','vidéos de pyramide'],
    de: ['video','videos','youtube','konferenz','reden','dokumentarfilm','siehe erklärung','tutorial','videos ansehen','pyramidenvideos'],
    ru: ['видео','ютуб','конференция','говорить','документальный фильм','см. объяснение','учебник','смотреть видео','видео пирамиды'],
    ar: ['فيديو','أشرطة الفيديو','يوتيوب','مؤتمر','تحدث','وثائقي','انظر الشرح','تعليمي','مشاهدة أشرطة الفيديو','فيديوهات الهرم'],
  },
  egipto: {
    en: ['egypt','trip','trip to egypt','egypt pyramids','cheops','cairo','giza','nile','temples','pyramids of egypt','pyramid trip'],
    pt: ['egito','viagem','viagem ao egito','pirâmides do egito','quéops','cairo','gizé','nilo','templos','viagem pirâmide'],
    fr: ['egypte','voyage','voyage en egypte','pyramides d\'egypte','bon marché','le caire','gizeh','nil','temples','voyage pyramidal'],
    de: ['ägypten','reise','reise nach ägypten','ägypten pyramiden','cheops','kairo','gizeh','nil','tempel','pyramiden von ägypten','pyramidenfahrt'],
    ru: ['египет','поездка','поездка в египет','египетские пирамиды','хеопс','каир','гиза','нил','храмы','пирамиды египта','путешествие по пирамиде'],
    ar: ['مصر','رحلة','رحلة إلى مصر','أهرامات مصر','خوفو','القاهرة','الجيزة','النيل','المعابد','رحلة الهرم'],
  },
  centros: {
    en: ['center','centers','therapy center','where to receive','treatment','professional therapy','therapeutic center','go to a center','therapist','therapists','where there are centers','centers directory','pyramid centers','pyramid therapy centers'],
    pt: ['centro','centros','centro de terapia','onde receber','tratamento','terapia profissional','centro terapêutico','ir para um centro','terapeuta','terapeutas','onde existem centros','diretório de centros','centros de pirâmide','centros de terapia em pirâmide'],
    fr: ['centre','centres','centre de thérapie','où recevoir','traitement','thérapie professionnelle','centre thérapeutique','aller dans un centre','thérapeute','thérapeutes','où il y a des centres','répertoire des centres','centres pyramidaux','centres de thérapie pyramidale'],
    de: ['zentrum','zentren','therapiezentrum','wo zu empfangen','behandlung','professionelle therapie','therapeutisches zentrum','in ein zentrum gehen','therapeut','therapeuten','wo es zentren gibt','verzeichnis der zentren','pyramidenzentren','pyramidentherapiezentren'],
    ru: ['центр','центры','терапевтический центр','где получить','лечение','профессиональная терапия','пойти в центр','терапевт','терапевты','где есть центры','каталог центров','центры пирамид','центры пирамидальной терапии'],
    ar: ['مركز','مراكز','مركز العلاج','أين يمكن الحصول عليها','العلاج','العلاج المهني','مركز علاجي','اذهب إلى المركز','المعالج','المعالجين','حيث توجد مراكز','دليل المراكز','مراكز الهرم','مراكز العلاج الهرمي'],
  },
  centro_karl: {
    en: ['karl','ania','karl and ania','barcelona center','barcelona therapist','barcelona pyramid','holistic barcelona'],
    pt: ['carlos','ania','karl e ania','centro de barcelona','terapeuta barcelona','pirâmide de barcelona','barcelona holística'],
    fr: ['karl','ania','karl et ania','centre de barcelone','thérapeute de barcelone','pyramide de barcelone','barcelone holistique'],
    de: ['karl','ania','karl und ania','zentrum von barcelona','barcelona-therapeut','barcelona-pyramide','ganzheitliches barcelona'],
    ru: ['карл','аня','карл и аня','центр барселоны','барселонский терапевт','пирамида барселоны','целостный барселона'],
    ar: ['كارل','أنيا','كارل وأنيا','مركز برشلونة','المعالج برشلونة','الهرم برشلونة','برشلونة الشامل'],
  },
  centro_randall: {
    en: ['randall','sanchez','costa rica','randall sanchez','pyramid therapy costa rica','pyramid costa rica','heredia'],
    pt: ['randall','sanches','costa rica','randall sanchez','terapia pirâmide costa rica','pirâmide costa rica','heredia'],
    fr: ['randall','sánchez','costa rica','randall sánchez','thérapie pyramidale costa rica','pyramide costa rica','héréditaire'],
    de: ['randall','sánchez','costa rica','randall sánchez','pyramidentherapie costa rica','pyramide costa rica','heredia'],
    ru: ['рэндалл','санчес','коста-рика','рэндалл санчес','пирамидная терапия, коста-рика','пирамида коста-рика','эредия'],
    ar: ['راندال','سانشيز','كوستاريكا','راندال سانشيز','العلاج الهرمي في كوستاريكا','الهرم كوستاريكا','هيريديا'],
  },
  centro_alfredo: {
    en: ['alfred','alfredo martin','kinesiology madrid','therapist madrid','madrid center','kinesiology'],
    pt: ['alfredo','alfredo martins','cinesiologia madri','terapeuta madrid','centro de madri','cinesiologia'],
    fr: ['alfred','alfred martin','kinésiologie madrid','thérapeute madrid','centre de madrid','kinésiologie'],
    de: ['alfred','alfredo martin','kinesiologie madrid','therapeut madrid','madrid zentrum','kinesiologie'],
    ru: ['альфред','альфредо мартин','кинезиология мадрид','терапевт мадрид','мадридский центр','кинезиология'],
    ar: ['ألفريد','ألفريدو مارتن','علم الحركة مدريد','المعالج مدريد','مركز مدريد','علم الحركة'],
  },
  centro_antahkarana: {
    en: ['antahkarana','protection','vilanova','valencia center','reiki valencia','acupuncture valencia','amparo vilanova'],
    pt: ['antahkarana','proteção','vilanova','centro de valência','reiki valência','acupuntura valência','amparo vilanova'],
    fr: ['antahkarana','protection','vilanova','centre de valence','reiki valence','acupuncture valence','amparo vilanova'],
    de: ['antahkarana','schutz','vilanova','valencia zentrum','reiki valencia','akupunktur valencia','amparo vilanova'],
    ru: ['антахкарана','защита','виланова','центр валенсии','рейки валенсия','иглоукалывание валенсия','ампаро виланова'],
    ar: ['antahkarana','الحماية','فيلانوفا','مركز فالنسيا','الريكي فالنسيا','الوخز بالإبر فالنسيا','امبارو فيلانوفا'],
  },
  centro_jacob: {
    en: ['jacob','jacob martin','leganes','leganés','psychobiotherapy','reiki leganes','leganes holistic center'],
    pt: ['jacó','jacob martins','leganes','leganés','psicobioterapia','reiki leganes','centro holístico leganes'],
    fr: ['jacob','jacob martin','léganes','leganés','psychobiothérapie','reiki léganes','centre holistique de leganes'],
    de: ['jakob','jacob martin','leganes','leganés','psychobiotherapie','reiki leganes','ganzheitliches zentrum leganes'],
    ru: ['джейкоб','джейкоб мартин','леганес','психобиотерапия','рейки леганес','леганес комплексный центр'],
    ar: ['يعقوب','جاكوب مارتن','ليجانيس','com.leganés','العلاج النفسي','الريكي ليجانيس','مركز ليجانيس الشامل'],
  },
  centro_tipi: {
    en: ['tipi','tipi center','center therapy','pyramid session','go to therapy','receive therapy','face-to-face session','vendrell','camilo candel','the vendrell'],
    pt: ['tipi','centro tipi','terapia central','sessão de pirâmide','ir para terapia','receber terapia','sessão presencial','vendedor','camilo candel','o vendedor'],
    fr: ['tipi','centre de tipis','centre de thérapie','séance pyramidale','aller en thérapie','recevoir une thérapie','séance en face à face','vendrell','bougie camilo','le vendrell'],
    de: ['tipi','tipi-zentrum','zentrumstherapie','pyramidensitzung','zur therapie gehen','eine therapie erhalten','persönliche sitzung','vendrell','camilo candel','der vendrell'],
    ru: ['типи','типи центр','центральная терапия','сессия пирамиды','пойти на терапию','получать терапию','очная сессия','вендрелл','камило кандел','вендрел'],
    ar: ['تيبي','مركز تيبي','العلاج المركزي','جلسة الهرم','اذهب إلى العلاج','تلقي العلاج','جلسة وجها لوجه','فيندريل','شمعة كاميلو'],
  },
  centro_sebastian: {
    en: ['sebastian','vile','lleida','sebastian viles','therapy','lleida pyramid'],
    pt: ['sebastião','vil','léida','sebastian viles','terapia','pirâmide de léida'],
    fr: ['sébastien','vil','lérida','sébastien viles','thérapie','pyramide de lérida'],
    de: ['sebastian','abscheulich','leida','sebastian viles','therapie','leida-pyramide'],
    ru: ['себастьян','мерзкий','лерида','себастьян вайлз','терапия','пирамида лериды'],
    ar: ['سيباستيان','حقير','ليدا','حقير سيباستيان','العلاج','هرم ليدا'],
  },
  centro_juan: {
    en: ['juan antonio','juan lopez','ithaca','ithaca center','bioenergetic therapy madrid','juan antonio lopez'],
    pt: ['joão antonio','juan lopes','ítaca','centro de ithaca','terapia bioenergética madrid','juan antonio lopez'],
    fr: ['juan-antonio','juan lópez','ithaque','centre d\'ithaque','thérapie bioénergétique madrid','juan antonio lópez'],
    de: ['juan antonio','juan lopez','ithaka','ithaka-zentrum','bioenergetische therapie madrid','juan antonio lopez'],
    ru: ['хуан антонио','хуан лопес','итака','центр итаки','биоэнергетическая терапия мадрид','хуан антонио лопес'],
    ar: ['خوان أنطونيو','خوان لوبيز','إيثاكا','مركز إيثاكا','العلاج بالطاقة الحيوية مدريد','خوان أنطونيو لوبيز'],
  },
  geobiologia: {
    en: ['geobiology','terrestrial radiation','hartmann','curry','lines','lines of force','subsoil radiation','geological fault','underground water','geo'],
    pt: ['geobiologia','radiação terrestre','hartmann','caril','linhas','linhas de força','radiação do subsolo','falha geológica','água subterrânea','localização geográfica'],
    fr: ['géobiologie','rayonnement terrestre','hartmann','curry','lignes','lignes de force','rayonnement souterrain','faille géologique','eau souterraine','géo'],
    de: ['geobiologie','terrestrische strahlung','hartmann','curry','linien','kraftlinien','untergrundstrahlung','geologische verwerfung','grundwasser','geo'],
    ru: ['геобиология','земная радиация','хартманн','карри','линии','силовые линии','подпочвенная радиация','геологический разлом','подземные воды','гео'],
    ar: ['الجيولوجيا','الإشعاع الأرضي','هارتمان','كاري','خطوط','خطوط القوة','الإشعاع تحت الأرض','خطأ جيولوجي','المياه الجوفية','جغرافي'],
  },
  reich: {
    en: ['reich','wilhelm reich','orgone','bions','orbs','orgone energy'],
    pt: ['reich','guilherme reich','orgone','bíons','orbes','energia orgone'],
    fr: ['reich','guillaume reich','orgone','biones','orbes','énergie orgonale'],
    de: ['reich','wilhelm reich','orgon','bionen','kugeln','orgon-energie'],
    ru: ['рейх','вильгельм райх','оргонный','бионы','сферы','оргонная энергия'],
    ar: ['الرايخ','فيلهلم رايخ','أورجون','بيونات','الأجرام السماوية','طاقة أورجون'],
  },
  contacto: {
    en: ['contact','phone','email','mail','whatsapp','call','number','as contact','where contact','contact phone','phone number'],
    pt: ['contato','telefone','e-mail','correio','whatsapp','ligar','número','como contato','onde contato','telefone de contato','número de telefone'],
    fr: ['contacter','téléphone','email','courrier','whatsapp','appeler','numéro','comme contact','où contacter','téléphone de contact','numéro de téléphone'],
    de: ['kontakt','telefon','e-mail','post','whatsapp','anrufen','nummer','als kontakt','wo kontakt','kontakttelefon','telefonnummer'],
    ru: ['контакт','телефон','электронная почта','почта','whatsapp','позвонить','номер','как контакт','где связаться','контактный телефон','номер телефона'],
    ar: ['اتصال','هاتف','البريد الإلكتروني','بريد','واتس اب','اتصل','رقم','كجهة اتصال','حيث الاتصال','هاتف الاتصال','رقم الهاتف'],
  },
  cita: {
    en: ['quote','schedule','schedule appointment','reserve','prior appointment','consultation','advice','meeting','make an appointment','request an appointment','ask for time'],
    pt: ['citar','agendar','agendar consulta','reserva','marcação prévia','consulta','conselho','reunião','marque uma consulta','solicitar um agendamento','peça um tempo'],
    fr: ['citation','calendrier','planifier un rendez-vous','réserve','rendez-vous préalable','consultation','conseils','réunion','prendre rendez-vous','demander un rendez-vous','demander du temps'],
    de: ['zitat','zeitplan','termin vereinbaren','reservieren','vorherige terminvereinbarung','beratung','rat','treffen','vereinbaren sie einen termin','einen termin anfragen','bitte um zeit'],
    ru: ['цитата','расписание','назначить встречу','резерв','предварительная встреча','консультация','совет','встреча','запросить встречу','попросить время'],
    ar: ['اقتباس','الجدول الزمني','تحديد موعد','احتياطي','موعد مسبق','التشاور','نصيحة','اجتماع','طلب موعد','اسأل عن الوقت'],
  },
  critica: {
    en: ['criticize','critical','skeptical','it doesn\'t work','fraud','deception','deny','critical document','skepticism','it\'s a scam','i don\'t think'],
    pt: ['criticar','crítico','cético','não funciona','fraude','engano','negar','documento crítico','ceticismo','é uma farsa','eu não acho'],
    fr: ['critiquer','critique','sceptique','ça ne marche pas','fraude','tromperie','nier','document critique','scepticisme','c\'est une arnaque','je ne pense pas'],
    de: ['kritisieren','kritisch','skeptisch','es funktioniert nicht','betrug','täuschung','leugnen','kritisches dokument','skepsis','es ist ein betrug','ich glaube nicht'],
    ru: ['критиковать','критический','скептический','это не работает','мошенничество','обман','отрицать','критический документ','скептицизм','это мошенничество','я не думаю'],
    ar: ['انتقد','حرجة','متشكك','لا يعمل','الاحتيال','الخداع','ينكر','وثيقة حرجة','الشك','إنها عملية احتيال','لا أعتقد'],
  },
  dossier: {
    en: ['dossier','complete information','download info','documentation','pdf catalog','brochure','technical information','basic dossier'],
    pt: ['dossiê','informações completas','baixar informações','documentação','catálogo em pdf','folheto','informações técnicas','dossiê básico'],
    fr: ['dossier','informations complètes','informations sur le téléchargement','documents','catalogue pdf','dépliant','informations techniques','dossier de base'],
    de: ['dossier','vollständige informationen','informationen herunterladen','dokumentation','pdf-katalog','broschüre','technische informationen','basisdossier'],
    ru: ['досье','полная информация','скачать информацию','документация','pdf-каталог','брошюра','техническая информация','базовое досье'],
    ar: ['ملف','معلومات كاملة','معلومات التحميل','الوثائق','كتالوج قوات الدفاع الشعبي','كتيب','المعلومات التقنية','الملف الأساسي'],
  },
  medico: {
    en: ['doctor','medicine','replaces','medical treatment','recipe','cure','medical cure','traditional doctor','substitute medicine'],
    pt: ['médico','remédio','substitui','tratamento médico','receita','cura','cura médica','médico tradicional','medicamento substituto'],
    fr: ['docteur','médecine','remplace','traitement médical','recette','guérir','remède médical','médecin traditionnel','médecine de substitution'],
    de: ['arzt','medizin','ersetzt','medizinische behandlung','rezept','heilen','medizinische heilung','traditioneller arzt','ersatzmedizin'],
    ru: ['врач','медицина','заменяет','медицинское лечение','рецепт','вылечить','традиционный врач','заместительное лекарство'],
    ar: ['طبيب','الطب','يستبدل','العلاج الطبي','وصفة','علاج','علاج طبي','الطبيب التقليدي','الطب البديل'],
  },
  thanks: {
    en: ['thank you','thank you very much','perfect','great','excellent','very kind','thanks for'],
    pt: ['obrigado','muito obrigado','perfeito','ótimo','excelente','muito gentil','obrigado por'],
    fr: ['merci','merci beaucoup','parfait','super','excellent','très gentil','merci pour'],
    de: ['danke','vielen dank','perfekt','großartig','ausgezeichnet','sehr nett','danke für'],
    ru: ['спасибо','большое спасибо','идеальный','отлично','очень добрый','спасибо за'],
    ar: ['شكرا لك','شكرا جزيلا لك','مثالي','عظيم','ممتاز','لطيف جدا','شكرا ل'],
  },
  identity: {
    en: ['who are you','what are you','bot','chatbot','assistant','you are a robot','you are ia','you are artificial intelligence','what\'s your name'],
    pt: ['quem é você','o que você é','robô','bot de bate-papo','assistente','você é um robô','você é eu','você é inteligência artificial','qual é o seu nome'],
    fr: ['qui es-tu','qu\'est-ce que tu es','robot','chatbot','assistant','tu es un robot','tu es moi','tu es une intelligence artificielle','quel est ton nom'],
    de: ['wer bist du?','was bist du?','bot','chatbot','assistent','du bist ein roboter','du bist ia','du bist künstliche intelligenz','wie heißt du?'],
    ru: ['кто ты','что ты','бот','чат-бот','помощник','ты робот','ты есть','ты искусственный интеллект','как тебя зовут'],
    ar: ['من أنت','ما أنت','بوت','chatbot','مساعد','أنت روبوت','أنت أنا','أنت الذكاء الاصطناعي','ما اسمك'],
  },
  joyas: {
    en: ['jewel','jewelry','ring','rings','pyramidjewels','pyramid jewel'],
    pt: ['joia','jóias','anel','anéis','pirâmidejóias','jóia da pirâmide'],
    fr: ['bijou','bijoux','bague','anneaux','bijoux pyramidaux','bijou pyramidal'],
    de: ['juwel','schmuck','klingeln','ringe','pyramidenjuwelen','pyramidenjuwel'],
    ru: ['драгоценность','ювелирные изделия','кольцо','кольца','пирамидадрагоценности','пирамидальная жемчужина'],
    ar: ['جوهرة','مجوهرات','حلقة','حلقات','جواهر الهرم','جوهرة الهرم'],
  },
  avales: {
    en: ['endorsement','endorsements','certification','certifications','backup','official guarantee','recognition','scientist','scientific study','studies','research'],
    pt: ['endosso','endossos','certificação','certificações','cópia de segurança','garantia oficial','reconhecimento','cientista','estudo científico','estudos','pesquisa'],
    fr: ['approbation','mentions','attestation','attestations','sauvegarde','garantie officielle','reconnaissance','scientifique','étude scientifique','études','recherche'],
    de: ['billigung','vermerke','zertifizierung','zertifizierungen','sicherung','offizielle garantie','anerkennung','wissenschaftler','wissenschaftliche studie','studien','forschung'],
    ru: ['одобрение','одобрения','сертификация','сертификаты','резервное копирование','официальная гарантия','признание','учёный','научное исследование','исследования','исследование'],
    ar: ['تأييد','موافقات','شهادة','الشهادات','نسخة احتياطية','الضمان الرسمي','الاعتراف','عالم','دراسة علمية','دراسات','بحث'],
  },
  conferencias: {
    en: ['conference','conferences','event','events','talk','speaker','exhibition','live presentation','course','workshop','courses','workshops'],
    pt: ['conferência','conferências','evento','eventos','falar','alto-falante','exposição','apresentação ao vivo','curso','oficina','cursos','oficinas'],
    fr: ['conférence','conférences','événement','événements','parler','haut-parleur','exposition','présentation en direct','cours','atelier','ateliers'],
    de: ['konferenz','konferenzen','ereignis','ereignisse','reden','sprecher','ausstellung','live-präsentation','natürlich','werkstatt','kurse','werkstätten'],
    ru: ['конференция','конференции','событие','события','говорить','оратор','выставка','живая презентация','курс','мастерская','курсы','семинары'],
    ar: ['مؤتمر','المؤتمرات','حدث','الأحداث','تحدث','المتكلم','معرض','عرض حي','بالطبع','ورشة عمل','الدورات','ورش العمل'],
  },
  datos_contacto: {
    en: ['contact details','where are you','address','location','where are they','where are you located'],
    pt: ['detalhes de contato','onde você está','endereço','localização','onde eles estão','onde você está localizado'],
    fr: ['coordonnées','où es-tu','adresse','emplacement','où sont-ils','où es-tu situé'],
    de: ['kontaktdaten','wo bist du?','adresse','standort','wo sind sie?','wo befinden sie sich?'],
    ru: ['контактные данные','где ты','адрес','местоположение','где они','где вы находитесь'],
    ar: ['تفاصيل الاتصال','أين أنت','عنوان','الموقع','أين هم','أين تتواجد'],
  },
  envio_info: {
    en: ['shipping pyramids','send pyramid','how does it arrive','how does it get to me','transportation','logistics','customs','delivery time','how long does it take','shipping time'],
    pt: ['pirâmides marítimas','enviar pirâmide','como chega','como isso chega até mim','transporte','logística','costumes','prazo de entrega','quanto tempo leva','tempo de envio'],
    fr: ['pyramides d\'expédition','envoyer une pyramide','comment ça arrive','comment ça m\'arrive','transport','logistique','douane','délai de livraison','combien de temps ça prend','délai d\'expédition'],
    de: ['versandpyramiden','pyramide senden','wie kommt es an','wie kommt es zu mir?','transport','logistik','zoll','lieferzeit','wie lange dauert es'],
    ru: ['судоходные пирамиды','отправить пирамиду','как оно приходит','как это до меня дошло','транспорт','логистика','таможня','время доставки','сколько времени это займет'],
    ar: ['أهرامات الشحن','إرسال الهرم','كيف تصل','كيف يحصل لي','النقل','اللوجستية','الجمارك','وقت التسليم','كم من الوقت يستغرق','وقت الشحن'],
  },
  legal: {
    en: ['terms','conditions','legal notice','legal','copyright','privacy','politics','terms and conditions','privacy policy'],
    pt: ['termos','condições','aviso legal','jurídico','direitos autorais','privacidade','política','termos e condições','política de privacidade'],
    fr: ['termes','conditions','mentions légales','légal','droit d\'auteur','confidentialité','politique','termes et conditions','politique de confidentialité'],
    de: ['begriffe','bedingungen','rechtlicher hinweis','legal','urheberrecht','privatsphäre','politik','allgemeine geschäftsbedingungen','datenschutzrichtlinie'],
    ru: ['термины','условия','официальное уведомление','юридический','авторское право','конфиденциальность','политика','условия использования','политика конфиденциальности'],
    ar: ['الشروط','الظروف','إشعار قانوني','قانوني','حقوق الطبع والنشر','الخصوصية','السياسة','الشروط والأحكام','سياسة الخصوصية'],
  },
};
var PM_CB_Q = {
  precios: {en:'Request quote',pt:'Solicitar orçamento',fr:'Demander un devis',de:'Angebot anfordern',ru:'Запросить цену',ar:'طلب الاقتباس'},
  compra: {en:'Start purchase via WhatsApp',pt:'Inicie a compra pelo WhatsApp',fr:'Commencer l\'achat via WhatsApp',de:'Kauf über WhatsApp starten',ru:'Начать покупку через WhatsApp',ar:'ابدأ الشراء عبر الواتساب'},
  envios: {en:'Check shipping by WhatsApp',pt:'Consulte frete pelo WhatsApp',fr:'Vérifiez l\'expédition par WhatsApp',de:'Überprüfen Sie den Versand per WhatsApp',ru:'Проверить доставку по WhatsApp',ar:'التحقق من الشحن عن طريق الواتساب'},
  piramicama: {en:'See health benefits',pt:'Veja os benefícios para a saúde',fr:'Voir les bienfaits pour la santé',de:'Siehe gesundheitliche Vorteile',ru:'Посмотрите преимущества для здоровья',ar:'انظر الفوائد الصحية'},
  hygia: {en:'Info Hygia by WhatsApp',pt:'Informações Hygia por WhatsApp',fr:'Info Hygia par WhatsApp',de:'Infos Hygia per WhatsApp',ru:'Информация о Хигии от WhatsApp',ar:'معلومات هيجيا عن طريق ال WhatsApp'},
  hercules: {en:'Info Hercules by WhatsApp',pt:'Informações Hércules por WhatsApp',fr:'Infos Hercules par WhatsApp',de:'Infos Herkules per WhatsApp',ru:'Информация о Геркулесе по WhatsApp',ar:'معلومات هرقل عن طريق ال WhatsApp'},
  pirajardin: {en:'Watch videos about pyramids and beekeeping',pt:'Assista a vídeos sobre pirâmides e apicultura',fr:'Regardez des vidéos sur les pyramides et l\'apiculture',de:'Sehen Sie sich Videos über Pyramiden und Imkerei an',ru:'Посмотрите видео о пирамидах и пчеловодстве',ar:'شاهد فيديوهات عن الأهرامات وتربية النحل'},
  faraday: {en:'Info Ark Faraday by WhatsApp',pt:'Informações Arca Faraday por WhatsApp',fr:'Infos Arche Faraday par WhatsApp',de:'Infos zu Ark Faraday per WhatsApp',ru:'Информация Ковчег Фарадея от WhatsApp',ar:'معلومات ارك فاراداي عن طريق ال WhatsApp'},
  mascotas: {en:'Piramascota Info by WhatsApp',pt:'Informações sobre Piramascota por WhatsApp',fr:'Informations sur Piramascota par WhatsApp',de:'Piramascota-Infos per WhatsApp',ru:'Информация о Пирамаскоте через WhatsApp',ar:'معلومات بيراماسكوتا عن طريق ال WhatsApp'},
  vital: {en:'Vital Info by WhatsApp',pt:'Informações vitais por WhatsApp',fr:'Informations vitales par WhatsApp',de:'Wichtige Informationen per WhatsApp',ru:'Важная информация от WhatsApp',ar:'معلومات حيوية عن طريق الواتساب'},
  piramide: {en:'See health benefits',pt:'Veja os benefícios para a saúde',fr:'Voir les bienfaits pour la santé',de:'Siehe gesundheitliche Vorteile',ru:'Посмотрите преимущества для здоровья',ar:'انظر الفوائد الصحية'},
  efecto: {en:'See team presentation',pt:'Veja apresentação da equipe',fr:'Voir la présentation de l\'équipe',de:'Siehe Teampräsentation',ru:'Посмотреть презентацию команды',ar:'شاهد العرض التقديمي للفريق'},
  salud: {en:'See treated diseases',pt:'Veja doenças tratadas',fr:'Voir les maladies traitées',de:'Siehe behandelte Krankheiten',ru:'См. вылеченные заболевания',ar:'انظر الأمراض المعالجة'},
  testimonios: {en:'See testimonials',pt:'Veja depoimentos',fr:'Voir les témoignages',de:'Siehe Erfahrungsberichte',ru:'Посмотреть отзывы',ar:'انظر الشهادات'},
  historia: {en:'See history of Piramicasa',pt:'Veja a história da Piramicasa',fr:'Voir l’histoire de Piramicasa',de:'Sehen Sie sich die Geschichte von Piramicasa an',ru:'Посмотреть историю Пирамикасы',ar:'انظر تاريخ بيراميكاسا'},
  presentacion: {en:'See team presentation',pt:'Veja apresentação da equipe',fr:'Voir la présentation de l\'équipe',de:'Siehe Teampräsentation',ru:'Посмотреть презентацию команды',ar:'شاهد العرض التقديمي للفريق'},
  construccion: {en:'Watch construction videos',pt:'Assista a vídeos de construção',fr:'Regarder des vidéos de construction',de:'Sehen Sie sich Bauvideos an',ru:'Посмотрите видео о строительстве',ar:'شاهد فيديوهات البناء'},
  libros: {en:'See book catalog',pt:'Ver catálogo de livros',fr:'Voir le catalogue de livres',de:'Siehe Buchkatalog',ru:'Посмотреть каталог книг',ar:'انظر كتالوج الكتب'},
  videos: {en:'Watch videos about pyramids',pt:'Assista a vídeos sobre pirâmides',fr:'Regardez des vidéos sur les pyramides',de:'Sehen Sie sich Videos über Pyramiden an',ru:'Посмотрите видео о пирамидах',ar:'شاهد فيديوهات عن الأهرامات'},
  egipto: {en:'See trip to Egypt',pt:'Veja viagem ao Egito',fr:'Voir voyage en Egypte',de:'Siehe Reise nach Ägypten',ru:'Посмотреть поездку в Египет',ar:'شاهد الرحلة إلى مصر'},
  centros: {en:'See therapy centers',pt:'Veja centros de terapia',fr:'Voir les centres de thérapie',de:'Siehe Therapiezentren',ru:'Посмотреть терапевтические центры',ar:'انظر مراكز العلاج'},
  centro_karl: {en:'See Karl and Ania\'s profile',pt:'Veja o perfil de Karl e Ania',fr:'Voir le profil de Karl et Ania',de:'Sehen Sie sich das Profil von Karl und Ania an',ru:'Посмотреть профиль Карла и Ани',ar:'انظر الملف الشخصي لكارل وأنيا'},
  centro_randall: {en:'See file of Randall Sánchez',pt:'Veja arquivo de Randall Sánchez',fr:'Voir le dossier de Randall Sánchez',de:'Siehe Akte von Randall Sánchez',ru:'См. досье Рэндалла Санчеса.',ar:'انظر ملف راندال سانشيز'},
  centro_alfredo: {en:'See file of Alfredo Martín',pt:'Veja arquivo de Alfredo Martín',fr:'Voir le dossier d\'Alfredo Martín',de:'Siehe Akte von Alfredo Martín',ru:'См. досье Альфредо Мартина.',ar:'انظر ملف ألفريدو مارتن'},
  centro_antahkarana: {en:'See Antahkarana\'s profile',pt:'Veja o perfil de Antahkarana',fr:'Voir le profil de Antahkarana',de:'Siehe Antahkaranas Profil',ru:'Посмотреть профиль Антакараны',ar:'انظر ملف Antahkarana الشخصي'},
  centro_jacob: {en:'See Jacob Martín\'s profile',pt:'Veja o perfil de Jacob Martín',fr:'Voir le profil de Jacob Martin',de:'Siehe Jacob Martíns Profil',ru:'Посмотреть профиль Джейкоба Мартина',ar:'انظر الملف الشخصي لجاكوب مارتن'},
  centro_tipi: {en:'See file of the T.I.P.I Center.',pt:'Ver arquivo do Centro T.I.P.I.',fr:'Voir dossier du Centre T.I.P.I.',de:'Siehe Datei des T.I.P.I Center.',ru:'См. файл Центра ТИПИ.',ar:'انظر ملف مركز T.I.P.I.'},
  centro_sebastian: {en:'See Sebastián Viles\' profile',pt:'Veja o perfil de Sebastián Viles',fr:'Voir le profil de Sebastián Viles',de:'Sehen Sie sich das Profil von Sebastián Viles an',ru:'Посмотреть профиль Себастьяна Вайлса',ar:'انظر الملف الشخصي لـ Sebastián Viles'},
  centro_juan: {en:'See profile of Juan Antonio López',pt:'Veja o perfil de Juan Antonio López',fr:'Voir le profil de Juan Antonio López',de:'Siehe Profil von Juan Antonio López',ru:'Посмотреть профиль Хуана Антонио Лопеса',ar:'انظر الملف الشخصي لخوان أنطونيو لوبيز'},
  geobiologia: {en:'Geobiology info by WhatsApp',pt:'Informações de geobiologia por WhatsApp',fr:'Informations géobiologiques par WhatsApp',de:'Geobiologische Informationen per WhatsApp',ru:'Информация о геобиологии через WhatsApp',ar:'معلومات الجيولوجيا عن طريق WhatsApp'},
  reich: {en:'Info by WhatsApp',pt:'Informações por WhatsApp',fr:'Infos par WhatsApp',de:'Infos per WhatsApp',ru:'Информация через WhatsApp',ar:'المعلومات عبر الواتساب'},
  contacto: {en:'Contact by WhatsApp',pt:'Contato por WhatsApp',fr:'Contacter par WhatsApp',de:'Kontakt per WhatsApp',ru:'Связаться по WhatsApp',ar:'التواصل عبر الواتساب'},
  cita: {en:'Schedule an appointment via WhatsApp',pt:'Agende um horário pelo WhatsApp',fr:'Prendre rendez-vous via WhatsApp',de:'Vereinbaren Sie einen Termin per WhatsApp',ru:'Запишитесь на прием через WhatsApp',ar:'تحديد موعد عبر الواتساب'},
  critica: {en:'View critical document',pt:'Ver documento crítico',fr:'Afficher le document critique',de:'Kritisches Dokument anzeigen',ru:'Посмотреть критический документ',ar:'عرض الوثيقة الهامة'},
  dossier: {en:'See basic dossier',pt:'Veja dossiê básico',fr:'Voir dossier de base',de:'Siehe Basisdossier',ru:'Посмотреть базовое досье',ar:'انظر الملف الأساسي'},
  medico: {en:'Info by WhatsApp',pt:'Informações por WhatsApp',fr:'Infos par WhatsApp',de:'Infos per WhatsApp',ru:'Информация через WhatsApp',ar:'المعلومات عبر الواتساب'},
  thanks: {en:'Contact by WhatsApp',pt:'Contato por WhatsApp',fr:'Contacter par WhatsApp',de:'Kontakt per WhatsApp',ru:'Связаться по WhatsApp',ar:'التواصل عبر الواتساب'},
  joyas: {en:'Info Piramijoyas by WhatsApp',pt:'Informações Piramijoyas por WhatsApp',fr:'Informations Piramijoyas par WhatsApp',de:'Infos Piramijoyas per WhatsApp',ru:'Информация о Пирамихоясе от WhatsApp',ar:'معلومات بيراميجوياس عن طريق ال WhatsApp'},
  avales: {en:'See conferences and endorsements',pt:'Veja conferências e endossos',fr:'Voir les conférences et les mentions',de:'Siehe Konferenzen und Empfehlungen',ru:'Посмотреть конференции и одобрения',ar:'انظر المؤتمرات والتصديقات'},
  conferencias: {en:'View conferences',pt:'Ver conferências',fr:'Voir les conférences',de:'Konferenzen anzeigen',ru:'Посмотреть конференции',ar:'عرض المؤتمرات'},
  datos_contacto: {en:'Contact by WhatsApp',pt:'Contato por WhatsApp',fr:'Contacter par WhatsApp',de:'Kontakt per WhatsApp',ru:'Связаться по WhatsApp',ar:'التواصل عبر الواتساب'},
  envio_info: {en:'Check shipping by WhatsApp',pt:'Consulte frete pelo WhatsApp',fr:'Vérifiez l\'expédition par WhatsApp',de:'Überprüfen Sie den Versand per WhatsApp',ru:'Проверить доставку по WhatsApp',ar:'التحقق من الشحن عن طريق الواتساب'},
  legal: {en:'See legal terms by WhatsApp',pt:'Consulte os termos legais pelo WhatsApp',fr:'Voir les mentions légales par WhatsApp',de:'Siehe rechtliche Bestimmungen von WhatsApp',ru:'Ознакомьтесь с юридическими условиями WhatsApp',ar:'راجع المصطلحات القانونية عبر WhatsApp'},
};
var PM_CB_QEXTRA = {
  precios: {en:'See health benefits',pt:'Veja os benefícios para a saúde',fr:'Voir les bienfaits pour la santé',de:'Siehe gesundheitliche Vorteile',ru:'Посмотрите преимущества для здоровья',ar:'انظر الفوائد الصحية'},
  piramicama: {en:'Info Piramicama by WhatsApp',pt:'Informações Piramicama por WhatsApp',fr:'Informations Piramicama par WhatsApp',de:'Infos Piramicama per WhatsApp',ru:'Информация Пирамикама от WhatsApp',ar:'معلومات بيراميكاما عن طريق ال WhatsApp'},
  pirajardin: {en:'Info Pyramid Garden by WhatsApp',pt:'Informações Jardim Pirâmide por WhatsApp',fr:'Informations sur le jardin des pyramides par WhatsApp',de:'Infos Pyramid Garden per WhatsApp',ru:'Информация о саду пирамид от WhatsApp',ar:'المعلومات عن حديقة الهرم عبر الواتساب'},
  efecto: {en:'See treated diseases',pt:'Veja doenças tratadas',fr:'Voir les maladies traitées',de:'Siehe behandelte Krankheiten',ru:'См. вылеченные заболевания',ar:'انظر الأمراض المعالجة'},
  salud: {en:'See testimonials',pt:'Veja depoimentos',fr:'Voir les témoignages',de:'Siehe Erfahrungsberichte',ru:'Посмотреть отзывы',ar:'انظر الشهادات'},
  testimonios: {en:'Watch testimonial videos',pt:'Assista a vídeos de depoimentos',fr:'Regardez des vidéos de témoignages',de:'Sehen Sie sich Testimonial-Videos an',ru:'Посмотрите видео-отзывы',ar:'شاهد فيديوهات الشهادة'},
  egipto: {en:'Trip info via WhatsApp',pt:'Informações da viagem via WhatsApp',fr:'Informations sur le voyage via WhatsApp',de:'Reiseinfos per WhatsApp',ru:'Информация о поездке через WhatsApp',ar:'معلومات الرحلة عبر الواتس اب'},
  critica: {en:'See team presentation',pt:'Veja apresentação da equipe',fr:'Voir la présentation de l\'équipe',de:'Siehe Teampräsentation',ru:'Посмотреть презентацию команды',ar:'شاهد العرض التقديمي للفريق'},
};
var PM_CB_A = {
  precios: {en:'https://wa.me/34639284787?text=Hello%2C%20I%20would%20like%20to%20request%20a%20personalized%20quote%20for%20pyramids',pt:'https://wa.me/34639284787?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20personalizado%20para%20pir%C3%A2mides',fr:'https://wa.me/34639284787?text=Bonjour%2C%20je%20souhaite%20demander%20un%20devis%20personnalis%C3%A9%20pour%20des%20pyramides',de:'https://wa.me/34639284787?text=Hallo%2C%20ich%20m%C3%B6chte%20ein%20individuelles%20Angebot%20f%C3%BCr%20Pyramiden%20anfordern',ru:'https://wa.me/34639284787?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%8F%20%D1%85%D0%BE%D1%82%D0%B5%D0%BB%20%D0%B1%D1%8B%20%D0%B7%D0%B0%D0%BF%D1%80%D0%BE%D1%81%D0%B8%D1%82%D1%8C%20%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%83%D1%8E%20%D1%80%D0%B0%D1%81%D1%86%D0%B5%D0%BD%D0%BA%D1%83%20%D0%BD%D0%B0%20%D0%BF%D0%B8%D1%80%D0%B0%D0%BC%D0%B8%D0%B4%D1%8B',ar:'https://wa.me/34639284787?text=%D9%85%D8%B1%D8%AD%D8%A8%D9%8B%D8%A7%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A3%D9%86%20%D8%A3%D8%B7%D9%84%D8%A8%20%D8%B9%D8%B1%D8%B6%20%D8%A3%D8%B3%D8%B9%D8%A7%D8%B1%20%D8%AE%D8%A7%D8%B5%D9%8B%D8%A7%20%D9%84%D8%B4%D8%B1%D9%83%D8%A9%20%D8%A8%D9%8A%D8%B1%D8%A7%D9%85%D9%8A%D8%AF%D8%B2'},
  compra: {en:'https://wa.me/34639284787?text=Hello%2C%20I%20would%20like%20to%20buy%20a%20therapeutic%20pyramid',pt:'https://wa.me/34639284787?text=Ol%C3%A1%2C%20gostaria%20de%20comprar%20uma%20pir%C3%A2mide%20terap%C3%AAutica',fr:'https://wa.me/34639284787?text=Bonjour%2C%20je%20souhaite%20acheter%20une%20pyramide%20th%C3%A9rapeutique',de:'https://wa.me/34639284787?text=Hallo%2C%20ich%20m%C3%B6chte%20eine%20Therapiepyramide%20kaufen',ru:'https://wa.me/34639284787?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%85%D0%BE%D1%82%D0%B5%D0%BB%D0%B0%20%D0%B1%D1%8B%20%D0%BA%D1%83%D0%BF%D0%B8%D1%82%D1%8C%20%D0%BB%D0%B5%D1%87%D0%B5%D0%B1%D0%BD%D1%83%D1%8E%20%D0%BF%D0%B8%D1%80%D0%B0%D0%BC%D0%B8%D0%B4%D0%BA%D1%83.',ar:'https://wa.me/34639284787?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%B4%D8%B1%D8%A7%D8%A1%20%D8%A7%D9%84%D9%87%D8%B1%D9%85%20%D8%A7%D9%84%D8%B9%D9%84%D8%A7%D8%AC%D9%8A'},
  envios: {en:'https://wa.me/34639284787?text=Hello%2C%20I%20would%20like%20to%20know%20about%20shipping%20to%20my%20country',pt:'https://wa.me/34639284787?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20sobre%20o%20envio%20para%20o%20meu%20pa%C3%ADs',fr:'https://wa.me/34639284787?text=Bonjour%2C%20j%27aimerais%20conna%C3%AEtre%20les%20modalit%C3%A9s%20d%27exp%C3%A9dition%20vers%20mon%20pays',de:'https://wa.me/34639284787?text=Hallo%2C%20ich%20w%C3%BCrde%20gerne%20Informationen%20zum%20Versand%20in%20mein%20Land%20erhalten',ru:'https://wa.me/34639284787?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%8F%20%D1%85%D0%BE%D1%82%D0%B5%D0%BB%20%D0%B1%D1%8B%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BE%20%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B5%20%D0%B2%20%D0%BC%D0%BE%D1%8E%20%D1%81%D1%82%D1%80%D0%B0%D0%BD%D1%83.',ar:'https://wa.me/34639284787?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A3%D9%86%20%D8%A3%D8%B9%D8%B1%D9%81%20%D8%B9%D9%86%20%D8%A7%D9%84%D8%B4%D8%AD%D9%86%20%D8%A5%D9%84%D9%89%20%D8%A8%D9%84%D8%AF%D9%8A'},
  hygia: {en:'https://wa.me/34639284787?text=Hello%2C%20I%20would%20like%20information%20about%20the%20Hygia%20pyramid',pt:'https://wa.me/34639284787?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20pir%C3%A2mide%20H%C3%ADgia',fr:'https://wa.me/34639284787?text=Bonjour%2C%20je%20souhaite%20des%20informations%20sur%20la%20pyramide%20Hygia',de:'https://wa.me/34639284787?text=Hallo%2C%20ich%20h%C3%A4tte%20gerne%20Informationen%20zur%20Hygia-Pyramide',ru:'https://wa.me/34639284787?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%8F%20%D1%85%D0%BE%D1%82%D0%B5%D0%BB%20%D0%B1%D1%8B%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D1%8E%20%D0%BE%20%D0%BF%D0%B8%D1%80%D0%B0%D0%BC%D0%B8%D0%B4%D0%B5%20%D0%A5%D0%B8%D0%B3%D0%B8%D0%B8.',ar:'https://wa.me/34639284787?text=%D9%85%D8%B1%D8%AD%D8%A8%D9%8B%D8%A7%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%AD%D8%B5%D9%88%D9%84%20%D8%B9%D9%84%D9%89%20%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%AD%D9%88%D9%84%20%D9%87%D8%B1%D9%85%20%D9%87%D9%8A%D8%AC%D9%8A%D8%A7'},
  hercules: {en:'https://wa.me/34639284787?text=Hello%2C%20I%20would%20like%20information%20about%20the%20Hercules%20pyramid',pt:'https://wa.me/34639284787?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20pir%C3%A2mide%20de%20H%C3%A9rcules',fr:'https://wa.me/34639284787?text=Bonjour%2C%20je%20souhaite%20des%20informations%20sur%20la%20pyramide%20d%27Hercule',de:'https://wa.me/34639284787?text=Hallo%2C%20ich%20h%C3%A4tte%20gerne%20Informationen%20zur%20Herkulespyramide',ru:'https://wa.me/34639284787?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%85%D0%BE%D1%82%D0%B5%D0%BB%D0%BE%D1%81%D1%8C%20%D0%B1%D1%8B%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D1%8E%20%D0%BE%20%D0%BF%D0%B8%D1%80%D0%B0%D0%BC%D0%B8%D0%B4%D0%B5%20%D0%93%D0%B5%D1%80%D0%BA%D1%83%D0%BB%D0%B5%D1%81%D0%B0.',ar:'https://wa.me/34639284787?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%AD%D8%B5%D9%88%D9%84%20%D8%B9%D9%84%D9%89%20%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%AD%D9%88%D9%84%20%D9%87%D8%B1%D9%85%20%D9%87%D8%B1%D9%82%D9%84'},
  faraday: {en:'https://wa.me/34639284787?text=Hello%2C%20I%20would%20like%20information%20about%20the%20Faraday%20Ark',pt:'https://wa.me/34639284787?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20Arca%20de%20Faraday',fr:'https://wa.me/34639284787?text=Bonjour%2C%20je%20voudrais%20des%20informations%20sur%20l%27Arche%20de%20Faraday',de:'https://wa.me/34639284787?text=Hallo%2C%20ich%20h%C3%A4tte%20gerne%20Informationen%20%C3%BCber%20die%20Faraday-Arche',ru:'https://wa.me/34639284787?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%8F%20%D1%85%D0%BE%D1%82%D0%B5%D0%BB%20%D0%B1%D1%8B%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D1%8E%20%D0%BE%20%D0%BA%D0%BE%D0%B2%D1%87%D0%B5%D0%B3%D0%B5%20%D0%A4%D0%B0%D1%80%D0%B0%D0%B4%D0%B5%D1%8F.',ar:'https://wa.me/34639284787?text=%D9%85%D8%B1%D8%AD%D8%A8%D9%8B%D8%A7%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%AD%D8%B5%D9%88%D9%84%20%D8%B9%D9%84%D9%89%20%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%AD%D9%88%D9%84%20%D8%B3%D9%81%D9%8A%D9%86%D8%A9%20%D9%81%D8%A7%D8%B1%D8%A7%D8%AF%D8%A7%D9%8A'},
  mascotas: {en:'https://wa.me/34639284787?text=Hello%2C%20I%20would%20like%20information%20about%20Piramascota',pt:'https://wa.me/34639284787?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20Piramascota',fr:'https://wa.me/34639284787?text=Bonjour%2C%20je%20voudrais%20des%20informations%20sur%20Piramascota',de:'https://wa.me/34639284787?text=Hallo%2C%20ich%20h%C3%A4tte%20gerne%20Informationen%20%C3%BCber%20Piramascota',ru:'https://wa.me/34639284787?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%8F%20%D1%85%D0%BE%D1%82%D0%B5%D0%BB%20%D0%B1%D1%8B%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D1%8E%20%D0%BE%20%D0%9F%D0%B8%D1%80%D0%B0%D0%BC%D0%B0%D1%81%D0%BA%D0%BE%D1%82%D0%B5.',ar:'https://wa.me/34639284787?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%AD%D8%B5%D9%88%D9%84%20%D8%B9%D9%84%D9%89%20%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%AD%D9%88%D9%84%20%D8%A8%D9%8A%D8%B1%D8%A7%D9%85%D8%A7%D8%B3%D9%83%D9%88%D8%AA%D8%A7'},
  vital: {en:'https://wa.me/34639284787?text=Hello%2C%20I%20would%20like%20information%20about%20Piramicasa%20Vital',pt:'https://wa.me/34639284787?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20Piramicasa%20Vital',fr:'https://wa.me/34639284787?text=Bonjour%2C%20je%20souhaite%20des%20informations%20sur%20Piramicasa%20Vital',de:'https://wa.me/34639284787?text=Hallo%2C%20ich%20h%C3%A4tte%20gerne%20Informationen%20zu%20Piramicasa%20Vital',ru:'https://wa.me/34639284787?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%8F%20%D1%85%D0%BE%D1%82%D0%B5%D0%BB%20%D0%B1%D1%8B%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D1%8E%20%D0%BE%20Piramicasa%20Vital.',ar:'https://wa.me/34639284787?text=%D9%85%D8%B1%D8%AD%D8%A8%D9%8B%D8%A7%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%AD%D8%B5%D9%88%D9%84%20%D8%B9%D9%84%D9%89%20%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%AD%D9%88%D9%84%20Piramicasa%20Vital'},
  geobiologia: {en:'https://wa.me/34639284787?text=Hello%2C%20I%20would%20like%20information%20about%20geobiology%20and%20pyramids',pt:'https://wa.me/34639284787?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20geobiologia%20e%20pir%C3%A2mides',fr:'https://wa.me/34639284787?text=Bonjour%2C%20je%20souhaite%20des%20informations%20sur%20la%20g%C3%A9obiologie%20et%20les%20pyramides',de:'https://wa.me/34639284787?text=Hallo%2C%20ich%20h%C3%A4tte%20gerne%20Informationen%20%C3%BCber%20Geobiologie%20und%20Pyramiden',ru:'https://wa.me/34639284787?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%8F%20%D1%85%D0%BE%D1%82%D0%B5%D0%BB%20%D0%B1%D1%8B%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D1%8E%20%D0%BE%20%D0%B3%D0%B5%D0%BE%D0%B1%D0%B8%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D0%B8%20%D0%B8%20%D0%BF%D0%B8%D1%80%D0%B0%D0%BC%D0%B8%D0%B4%D0%B0%D1%85.',ar:'https://wa.me/34639284787?text=%D9%85%D8%B1%D8%AD%D8%A8%D9%8B%D8%A7%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%AD%D8%B5%D9%88%D9%84%20%D8%B9%D9%84%D9%89%20%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%AD%D9%88%D9%84%20%D8%A7%D9%84%D8%AC%D9%8A%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7%20%D9%88%D8%A7%D9%84%D8%A3%D9%87%D8%B1%D8%A7%D9%85%D8%A7%D8%AA'},
  reich: {en:'https://wa.me/34639284787?text=Hello%2C%20I%20would%20like%20information%20about%20Wilhelm%20Reich%20and%20pyramids',pt:'https://wa.me/34639284787?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20Wilhelm%20Reich%20e%20pir%C3%A2mides',fr:'https://wa.me/34639284787?text=Bonjour%2C%20je%20voudrais%20des%20informations%20sur%20Wilhelm%20Reich%20et%20les%20pyramides',de:'https://wa.me/34639284787?text=Hallo%2C%20ich%20h%C3%A4tte%20gerne%20Informationen%20%C3%BCber%20Wilhelm%20Reich%20und%20Pyramiden',ru:'https://wa.me/34639284787?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%8F%20%D1%85%D0%BE%D1%82%D0%B5%D0%BB%20%D0%B1%D1%8B%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D1%8E%20%D0%BE%20%D0%92%D0%B8%D0%BB%D1%8C%D0%B3%D0%B5%D0%BB%D1%8C%D0%BC%D0%B5%20%D0%A0%D0%B0%D0%B9%D1%85%D0%B5%20%D0%B8%20%D0%BF%D0%B8%D1%80%D0%B0%D0%BC%D0%B8%D0%B4%D0%B0%D1%85.',ar:'https://wa.me/34639284787?text=%D9%85%D8%B1%D8%AD%D8%A8%D9%8B%D8%A7%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%AD%D8%B5%D9%88%D9%84%20%D8%B9%D9%84%D9%89%20%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%AD%D9%88%D9%84%20%D9%81%D9%8A%D9%84%D9%87%D9%84%D9%85%20%D8%B1%D8%A7%D9%8A%D8%AE%20%D9%88%D8%A7%D9%84%D8%A3%D9%87%D8%B1%D8%A7%D9%85%D8%A7%D8%AA'},
  contacto: {en:'https://wa.me/34639284787?text=Hello%2C%20I%20would%20like%20to%20contact%20you',pt:'https://wa.me/34639284787?text=Ol%C3%A1%2C%20gostaria%20de%20entrar%20em%20contato%20com%20voc%C3%AA',fr:'https://wa.me/34639284787?text=Bonjour%2C%20je%20souhaite%20vous%20contacter',de:'https://wa.me/34639284787?text=Hallo%2C%20ich%20m%C3%B6chte%20mit%20Ihnen%20Kontakt%20aufnehmen',ru:'https://wa.me/34639284787?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%8F%20%D1%85%D0%BE%D1%82%D0%B5%D0%BB%20%D0%B1%D1%8B%20%D1%81%D0%B2%D1%8F%D0%B7%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D1%81%20%D0%B2%D0%B0%D0%BC%D0%B8',ar:'https://wa.me/34639284787?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%AA%D8%B5%D8%A7%D9%84%20%D8%A8%D9%83'},
  cita: {en:'https://wa.me/34639284787?text=Hello%2C%20I%20would%20like%20to%20schedule%20an%20appointment%20or%20advice',pt:'https://wa.me/34639284787?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20ou%20aconselhamento',fr:'https://wa.me/34639284787?text=Bonjour%2C%20je%20souhaite%20prendre%20rendez-vous%20ou%20un%20conseil',de:'https://wa.me/34639284787?text=Hallo%2C%20ich%20m%C3%B6chte%20einen%20Termin%20oder%20eine%20Beratung%20vereinbaren',ru:'https://wa.me/34639284787?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%8F%20%D1%85%D0%BE%D1%82%D0%B5%D0%BB%20%D0%B1%D1%8B%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D0%BF%D1%80%D0%B8%D0%B5%D0%BC%20%D0%B8%D0%BB%D0%B8%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8E.',ar:'https://wa.me/34639284787?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%AA%D8%AD%D8%AF%D9%8A%D8%AF%20%D9%85%D9%88%D8%B9%D8%AF%20%D8%A3%D9%88%20%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9'},
  medico: {en:'https://wa.me/34639284787?text=Hello%2C%20I%20would%20like%20information%20about%20pyramids%20and%20conventional%20medicine',pt:'https://wa.me/34639284787?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20pir%C3%A2mides%20e%20medicina%20convencional',fr:'https://wa.me/34639284787?text=Bonjour%2C%20je%20souhaite%20des%20informations%20sur%20les%20pyramides%20et%20la%20m%C3%A9decine%20conventionnelle',de:'https://wa.me/34639284787?text=Hallo%2C%20ich%20h%C3%A4tte%20gerne%20Informationen%20zum%20Thema%20Pyramiden%20und%20Schulmedizin',ru:'https://wa.me/34639284787?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D0%BC%D0%BD%D0%B5%20%D1%85%D0%BE%D1%82%D0%B5%D0%BB%D0%BE%D1%81%D1%8C%20%D0%B1%D1%8B%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D1%8E%20%D0%BE%20%D0%BF%D0%B8%D1%80%D0%B0%D0%BC%D0%B8%D0%B4%D0%B0%D1%85%20%D0%B8%20%D1%82%D1%80%D0%B0%D0%B4%D0%B8%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%D0%B9%20%D0%BC%D0%B5%D0%B4%D0%B8%D1%86%D0%B8%D0%BD%D0%B5.',ar:'https://wa.me/34639284787?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%AD%D8%B5%D9%88%D9%84%20%D8%B9%D9%84%D9%89%20%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%AD%D9%88%D9%84%20%D8%A7%D9%84%D8%A3%D9%87%D8%B1%D8%A7%D9%85%D8%A7%D8%AA%20%D9%88%D8%A7%D9%84%D8%B7%D8%A8%20%D8%A7%D9%84%D8%AA%D9%82%D9%84%D9%8A%D8%AF%D9%8A'},
  thanks: {en:'https://wa.me/34639284787?text=Hello%2C%20thanks%20for%20the%20information%2C%20I%20have%20a%20question',pt:'https://wa.me/34639284787?text=Ol%C3%A1%2C%20obrigado%20pela%20informa%C3%A7%C3%A3o%2C%20tenho%20uma%20d%C3%BAvida',fr:'https://wa.me/34639284787?text=Bonjour%2C%20merci%20pour%20l%27information%2C%20j%27ai%20une%20question',de:'https://wa.me/34639284787?text=Hallo%2C%20danke%20f%C3%BCr%20die%20Information%2C%20ich%20habe%20eine%20Frage',ru:'https://wa.me/34639284787?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%81%D0%BF%D0%B0%D1%81%D0%B8%D0%B1%D0%BE%20%D0%B7%D0%B0%20%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D1%8E%2C%20%D1%83%20%D0%BC%D0%B5%D0%BD%D1%8F%20%D0%B5%D1%81%D1%82%D1%8C%20%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81',ar:'https://wa.me/34639284787?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%B4%D9%83%D8%B1%D8%A7%20%D8%B9%D9%84%D9%89%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%D8%8C%20%D9%84%D8%AF%D9%8A%20%D8%B3%D8%A4%D8%A7%D9%84'},
  joyas: {en:'https://wa.me/34639284787?text=Hello%2C%20I%20would%20like%20information%20about%20Piramijoyas',pt:'https://wa.me/34639284787?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20Piramijoyas',fr:'https://wa.me/34639284787?text=Bonjour%2C%20je%20voudrais%20des%20informations%20sur%20Piramijoyas',de:'https://wa.me/34639284787?text=Hallo%2C%20ich%20h%C3%A4tte%20gerne%20Informationen%20%C3%BCber%20Piramijoyas',ru:'https://wa.me/34639284787?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%8F%20%D1%85%D0%BE%D1%82%D0%B5%D0%BB%20%D0%B1%D1%8B%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D1%8E%20%D0%BE%20%D0%9F%D0%B8%D1%80%D0%B0%D0%BC%D0%B8%D1%85%D0%BE%D1%8F%D1%81.',ar:'https://wa.me/34639284787?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%AD%D8%B5%D9%88%D9%84%20%D8%B9%D9%84%D9%89%20%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%AD%D9%88%D9%84%20%D8%A8%D9%8A%D8%B1%D8%A7%D9%85%D9%8A%D8%AC%D9%88%D9%8A%D8%A7%D8%B3'},
  envio_info: {en:'https://wa.me/34639284787?text=Hello%2C%20I%20would%20like%20to%20know%20the%20delivery%20time%20and%20cost%20to%20my%20location.',pt:'https://wa.me/34639284787?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20o%20prazo%20e%20custo%20de%20entrega%20para%20minha%20localidade.',fr:'https://wa.me/34639284787?text=Bonjour%2C%20j%27aimerais%20conna%C3%AEtre%20le%20d%C3%A9lai%20et%20le%20co%C3%BBt%20de%20livraison%20jusqu%27%C3%A0%20chez%20moi.',de:'https://wa.me/34639284787?text=Hallo%2C%20ich%20w%C3%BCrde%20gerne%20die%20Lieferzeit%20und%20die%20Kosten%20f%C3%BCr%20die%20Lieferung%20an%20meinen%20Standort%20erfahren.',ru:'https://wa.me/34639284787?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%85%D0%BE%D1%82%D0%B5%D0%BB%D0%BE%D1%81%D1%8C%20%D0%B1%D1%8B%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D1%81%D1%80%D0%BE%D0%BA%D0%B8%20%D0%B8%20%D1%81%D1%82%D0%BE%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D1%8C%20%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B8%20%D0%B4%D0%BE%20%D0%BC%D0%BE%D0%B5%D0%B3%D0%BE%20%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%B0.',ar:'https://wa.me/34639284787?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A3%D9%86%20%D8%A3%D8%B9%D8%B1%D9%81%20%D9%85%D8%AF%D8%A9%20%D8%A7%D9%84%D8%AA%D8%B3%D9%84%D9%8A%D9%85%20%D9%88%D8%A7%D9%84%D8%AA%D9%83%D9%84%D9%81%D8%A9%20%D9%84%D9%85%D9%88%D9%82%D8%B9%D9%8A.'},
  legal: {en:'https://wa.me/34639284787?text=Hello%2C%20I%20would%20like%20to%20see%20the%20legal%20terms%20and%20conditions',pt:'https://wa.me/34639284787?text=Ol%C3%A1%2C%20gostaria%20de%20ver%20os%20termos%20e%20condi%C3%A7%C3%B5es%20legais',fr:'https://wa.me/34639284787?text=Bonjour%2C%20j%27aimerais%20voir%20les%20conditions%20l%C3%A9gales',de:'https://wa.me/34639284787?text=Hallo%2C%20ich%20m%C3%B6chte%20die%20rechtlichen%20Gesch%C3%A4ftsbedingungen%20einsehen',ru:'https://wa.me/34639284787?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%8F%20%D1%85%D0%BE%D1%82%D0%B5%D0%BB%20%D0%B1%D1%8B%20%D1%83%D0%B2%D0%B8%D0%B4%D0%B5%D1%82%D1%8C%20%D1%8E%D1%80%D0%B8%D0%B4%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F',ar:'https://wa.me/34639284787?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A3%D9%86%20%D8%A3%D8%B1%D9%89%20%D8%A7%D9%84%D8%B4%D8%B1%D9%88%D8%B7%20%D9%88%D8%A7%D9%84%D8%A3%D8%AD%D9%83%D8%A7%D9%85%20%D8%A7%D9%84%D9%82%D8%A7%D9%86%D9%88%D9%86%D9%8A%D8%A9'},
};
var PM_CB_AEXTRA = {
  piramicama: {en:'https://wa.me/34639284787?text=Hello%2C%20I%20would%20like%20information%20about%20the%20Piramicama',pt:'https://wa.me/34639284787?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20Piramicama',fr:'https://wa.me/34639284787?text=Bonjour%2C%20je%20voudrais%20des%20informations%20sur%20le%20Piramicama',de:'https://wa.me/34639284787?text=Hallo%2C%20ich%20h%C3%A4tte%20gerne%20Informationen%20%C3%BCber%20die%20Piramicama',ru:'https://wa.me/34639284787?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%8F%20%D1%85%D0%BE%D1%82%D0%B5%D0%BB%20%D0%B1%D1%8B%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D1%8E%20%D0%BE%20%D0%9F%D0%B8%D1%80%D0%B0%D0%BC%D0%B8%D0%BA%D0%B0%D0%BC%D0%B5.',ar:'https://wa.me/34639284787?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%AD%D8%B5%D9%88%D9%84%20%D8%B9%D9%84%D9%89%20%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%AD%D9%88%D9%84%20%D8%A8%D9%8A%D8%B1%D8%A7%D9%85%D9%8A%D9%83%D8%A7%D9%85%D8%A7'},
  pirajardin: {en:'https://wa.me/34639284787?text=Hello%2C%20I%20would%20like%20information%20about%20the%20Garden%20Pyramid',pt:'https://wa.me/34639284787?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20Pir%C3%A2mide%20do%20Jardim',fr:'https://wa.me/34639284787?text=Bonjour%2C%20je%20souhaite%20des%20informations%20sur%20la%20Pyramide%20du%20Jardin',de:'https://wa.me/34639284787?text=Hallo%2C%20ich%20h%C3%A4tte%20gerne%20Informationen%20zur%20Gartenpyramide',ru:'https://wa.me/34639284787?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%8F%20%D1%85%D0%BE%D1%82%D0%B5%D0%BB%20%D0%B1%D1%8B%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D1%8E%20%D0%BE%20%D0%A1%D0%B0%D0%B4%D0%BE%D0%B2%D0%BE%D0%B9%20%D0%BF%D0%B8%D1%80%D0%B0%D0%BC%D0%B8%D0%B4%D0%B5.',ar:'https://wa.me/34639284787?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%AD%D8%B5%D9%88%D9%84%20%D8%B9%D9%84%D9%89%20%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%AD%D9%88%D9%84%20%D9%87%D8%B1%D9%85%20%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D9%82%D8%A9'},
  egipto: {en:'https://wa.me/34639284787?text=Hello%2C%20I%20would%20like%20information%20about%20the%20trip%20to%20Egypt',pt:'https://wa.me/34639284787?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20viagem%20ao%20Egito',fr:'https://wa.me/34639284787?text=Bonjour%2C%20je%20voudrais%20des%20informations%20sur%20le%20voyage%20en%20Egypte',de:'https://wa.me/34639284787?text=Hallo%2C%20ich%20h%C3%A4tte%20gerne%20Informationen%20zur%20Reise%20nach%20%C3%84gypten',ru:'https://wa.me/34639284787?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%85%D0%BE%D1%82%D0%B5%D0%BB%D0%BE%D1%81%D1%8C%20%D0%B1%D1%8B%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D1%8E%20%D0%BE%20%D0%BF%D0%BE%D0%B5%D0%B7%D0%B4%D0%BA%D0%B5%20%D0%B2%20%D0%95%D0%B3%D0%B8%D0%BF%D0%B5%D1%82.',ar:'https://wa.me/34639284787?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%AD%D8%B5%D9%88%D9%84%20%D8%B9%D9%84%D9%89%20%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%20%D8%AD%D9%88%D9%84%20%D8%A7%D9%84%D8%B1%D8%AD%D9%84%D8%A9%20%D8%A5%D9%84%D9%89%20%D9%85%D8%B5%D8%B1'},
};
var PM_CB_FALLBACK = {
  en: ['I can help you with: prices, pyramid models, pyramid effect, health, testimonials, shipping, scheduling an appointment, endorsements, or contact.\n\nWhich of these topics do you want information on? You can also write to us directly on WhatsApp.','I don\'t have an exact answer for that, but I can connect you to our team. Write to us on WhatsApp and we will assist you personally.','I don\'t seem to have specific information on that. Try asking me about: prices, models (Piramicama, Hygia, Hércules), pyramid effect, health, testimonials, construction, books, videos, trip to Egypt, endorsements, or schedule an appointment.'],
  pt: ['Posso te ajudar com: preços, modelos de pirâmide, efeito pirâmide, saúde, depoimentos, frete, agendamento de consulta, endossos ou contato.\n\nSobre quais destes tópicos você deseja informações? Você também pode nos escrever diretamente no WhatsApp.','Não tenho uma resposta exata para isso, mas posso conectar você à nossa equipe. Escreva-nos no WhatsApp e iremos atendê-lo pessoalmente.','Parece que não tenho informações específicas sobre isso. Experimente me perguntar sobre: ​​preços, modelos (Piramicama, Hygia, Hércules), efeito pirâmide, saúde, depoimentos, construção, livros, vídeos, viagem ao Egito, endossos, ou agende um horário.'],
  fr: ['Je peux vous aider sur : les prix, les modèles pyramidaux, l\'effet pyramide, la santé, les témoignages, les frais d\'expédition, la prise de rendez-vous, les mentions ou le contact.\n\nSur lequel de ces sujets souhaitez-vous des informations ? Vous pouvez également nous écrire directement sur WhatsApp.','Je n\'ai pas de réponse exacte à cela, mais je peux vous mettre en contact avec notre équipe. Écrivez-nous sur WhatsApp et nous vous aiderons personnellement.','Je ne semble pas avoir d\'informations précises à ce sujet. Essayez de me poser des questions sur : les prix, les modèles (Piramicama, Hygia, Hércules), l\'effet pyramide, la santé, les témoignages, la construction, les livres, les vidéos, le voyage en Egypte, les recommandations ou prendre rendez-vous.'],
  de: ['Ich kann Ihnen helfen bei: Preisen, Pyramidenmodellen, Pyramideneffekt, Gesundheit, Erfahrungsberichten, Versand, Terminvereinbarung, Empfehlungen oder Kontakt.\n\nZu welchen dieser Themen wünschen Sie Informationen? Sie können uns auch direkt über WhatsApp schreiben.','Darauf habe ich keine genaue Antwort, aber ich kann Sie mit unserem Team verbinden. Schreiben Sie uns auf WhatsApp und wir helfen Ihnen persönlich weiter.','Ich scheine dazu keine konkreten Informationen zu haben. Fragen Sie mich nach: Preisen, Modellen (Piramicama, Hygia, Hércules), Pyramideneffekt, Gesundheit, Erfahrungsberichten, Bau, Büchern, Videos, Reise nach Ägypten, Empfehlungen oder vereinbaren Sie einen Termin.'],
  ru: ['Я могу помочь вам с: ценами, моделями пирамид, эффектом пирамиды, здоровьем, отзывами, доставкой, назначением встречи, одобрениями или контактами.\n\nПо какой из этих тем вам нужна информация? Вы также можете написать нам прямо в WhatsApp.','У меня нет точного ответа на этот вопрос, но я могу связать вас с нашей командой. Напишите нам в WhatsApp и мы поможем вам лично.','Кажется, у меня нет конкретной информации по этому поводу. Попробуйте спросить меня о: ценах, моделях (Пирамикама, Гигия, Геркулес), эффекте пирамиды, здоровье, отзывах, строительстве, книгах, видео, поездке в Египет, одобрениях или назначении встречи.'],
  ar: ['يمكنني مساعدتك فيما يلي: الأسعار، النماذج الهرمية، التأثير الهرمي، الصحة، الشهادات، الشحن، تحديد موعد، الموافقات، أو الاتصال.\n\nأي من هذه المواضيع تريد معلومات عنها؟ يمكنك أيضًا مراسلتنا مباشرة على WhatsApp.','ليس لدي إجابة محددة لذلك، لكن يمكنني توصيلك بفريقنا. راسلنا على الواتساب وسنقوم بمساعدتك شخصيًا.','ويبدو أنه ليس لدي معلومات محددة عن ذلك. حاول أن تسألني عن: الأسعار، النماذج (Piramicama، Hygia، Hércules)، تأثير الهرم، الصحة، الشهادات، البناء، الكتب، مقاطع الفيديو، رحلة إلى مصر، التأييد، أو تحديد موعد.'],
};
var PM_CB_FALLBACK_Q = {
  en:'Contact by WhatsApp',pt:'Contato por WhatsApp',fr:'Contacter par WhatsApp',de:'Kontakt per WhatsApp',ru:'Связаться по WhatsApp',ar:'التواصل عبر الواتساب',
};

var PM_CB_KW_EXTRA = {
  contacto: {
    en: ['how do i contact','get in touch','reach you','talk to someone','speak to'],
    pt: ['como contacto','entrar em contato','falar convosco','falar com alguem'],
    fr: ['comment vous contacter','vous joindre','entrer en contact','parler a quelqu'],
    de: ['wie kontaktieren','sie erreichen','in kontakt treten','mit jemandem sprechen','kontaktieren','erreichen'],
    ru: ['связаться','как связаться','написать вам','позвонить вам','контакт с вами','контакты','связи','написать'],
    ar: ['كيف أتصل','أتواصل معكم','التواصل','أتحدث مع','رقمكم','أتصل','اتصال','تواصل'],
  },
  envios: {
    en: ['ship','deliver','send abroad','ship to my country','postage','worldwide','world'],
    pt: ['enviam','entregam','mandam para','envio para o estrangeiro','mundo','mundo todo'],
    fr: ['livrez','envoyez','expediez','livraison internationale','envoi a l','monde entier','international'],
    de: ['liefern','verschicken','versenden','ins ausland','versandkosten','weltweit','ausland'],
    ru: ['доставляете','отправляете','высылаете','доставка за границу','почтой','доставку','всему миру','заграницу','мир'],
    ar: ['تشحنون','ترسلون','شحن دولي','إلى بلدي','الشحن','دوليا','عالميا','للخارج','العالم'],
  },
  cita: {
    en: ['book','appointment','schedule','consultation','session'],
    pt: ['marcar','consulta','sessao','hora marcada'],
    fr: ['rendez-vous','reserver','seance','consultation'],
    de: ['termin','buchen','beratung','sitzung','vereinbaren'],
    ru: ['записаться','приём','консультация','сеанс','встреча'],
    ar: ['موعد','حجز','استشارة','جلسة','أحجز'],
  },
  efecto: {
    en: ['how does it work','does it work','pyramid effect','energy','what does it do'],
    pt: ['como funciona','funciona mesmo','efeito piramidal','energia','para que serve'],
    fr: ['comment ca marche','est-ce que ca marche','effet pyramidal','energie','a quoi ca sert'],
    de: ['wie funktioniert','funktioniert es','pyramideneffekt','energie','wofur'],
    ru: ['как работает','работает ли','эффект пирамиды','энергия','для чего'],
    ar: ['كيف يعمل','هل يعمل','تأثير الهرم','طاقة','لما يستخدم'],
  },
  precios: {
    en: ['how much','cost','price','expensive','cheap'],
    pt: ['quanto custa','preco','valor','caro'],
    fr: ['combien','cout','prix','cher'],
    de: ['wie viel','kosten','preis','teuer'],
    ru: ['сколько стоит','цена','стоимость','дорого'],
    ar: ['كم السعر','سعر','تكلفة','ثمن','غالي'],
  },
  piramicama: {
    en: ['bed','pyramid bed','sleep','mattress'],
    pt: ['cama','dormir','colchao','piramide de cama'],
    fr: ['lit','dormir','matelas','pyramide de lit'],
    de: ['bett','schlafen','matratze','bettpyramide'],
    ru: ['кровать','спать','матрас','пирамида кровать'],
    ar: ['سرير','نوم','مرتبة','هرم السرير'],
  },
  centros: {
    en: ['center','centre','clinic','therapy center','where can i try','locations'],
    pt: ['centro','clinica','onde experimentar','locais','terapeuta'],
    fr: ['centre','clinique','ou essayer','endroits','therapeute'],
    de: ['zentrum','klinik','wo ausprobieren','standorte','therapeut'],
    ru: ['центр','клиника','где попробовать','адреса','терапевт'],
    ar: ['مركز','عيادة','أين أجرب','أماكن','معالج'],
  },
  salud: {
    en: ['health','disease','illness','pain','treatment','cure','arthritis','cancer'],
    pt: ['saude','doenca','dor','tratamento','cura','artrite','cancer'],
    fr: ['sante','maladie','douleur','traitement','guerison','arthrite','cancer'],
    de: ['gesundheit','krankheit','schmerz','behandlung','heilung','arthritis','krebs'],
    ru: ['здоровье','болезнь','боль','лечение','лечить','артрит','рак'],
    ar: ['صحة','مرض','ألم','علاج','شفاء','التهاب','سرطان'],
  },
  testimonios: {
    en: ['testimonial','review','experience','opinion','does it really work'],
    pt: ['testemunho','avaliacao','experiencia','opiniao','funciona mesmo'],
    fr: ['temoignage','avis','experience','opinion','ca marche vraiment'],
    de: ['erfahrungsbericht','bewertung','erfahrung','meinung','wirkt es wirklich'],
    ru: ['отзыв','опыт','мнение','действительно работает'],
    ar: ['شهادة','رأي','تجربة','تقييم','هل يعمل حقاً'],
  },
  videos: {
    en: ['video','watch','youtube','film'],
    pt: ['video','assistir','filme'],
    fr: ['video','regarder','film'],
    de: ['video','ansehen','film'],
    ru: ['видео','смотреть','фильм'],
    ar: ['فيديو','مشاهدة','فيلم'],
  },
  libros: {
    en: ['book','books','read','publication','pdf'],
    pt: ['livro','livros','ler','leitura','publicacao'],
    fr: ['livre','livres','lire','publication'],
    de: ['buch','bucher','büchern','lesen','lese','publikation'],
    ru: ['книга','книги','книгах','книге','книгу','читать','почитать','публикация'],
    ar: ['كتاب','كتب','الكتب','قراءة','القراءة','كتابي','منشور'],
  },
  egipto: {
    en: ['egypt','trip','travel','tour','giza'],
    pt: ['egito','viagem','tour','gize'],
    fr: ['egypte','voyage','excursion','gizeh'],
    de: ['agypten','reise','tour','gizeh'],
    ru: ['египет','поездка','путешествие','тур','гиза'],
    ar: ['مصر','رحلة','سفر','جولة','الجيزة'],
  },
  compra: {
    en: ['buy','purchase','order','get one'],
    pt: ['comprar','encomendar','adquirir'],
    fr: ['acheter','commander','achetant'],
    de: ['kaufen','bestellen','erwerben'],
    ru: ['купить','заказать','приобрести'],
    ar: ['شراء','أشتري','طلب','أطلب'],
  },
  greeting: {
    en: ['hello','hi','hey','good morning'],
    pt: ['ola','oi','bom dia','boa tarde'],
    fr: ['bonjour','salut','bonsoir','coucou'],
    de: ['hallo','guten tag','hi','servus'],
    ru: ['привет','здравствуйте','добрый день'],
    ar: ['مرحبا','أهلا','السلام عليكم','صباح الخير'],
  },
  construccion: {
    en: ['build','construction','install','assembly','orient'],
    pt: ['construir','construcao','instalar','montagem','orientar'],
    fr: ['construire','construction','installer','montage','orienter'],
    de: ['bauen','konstruktion','installieren','montage','ausrichten'],
    ru: ['строить','строительство','установить','монтаж','ориентировать'],
    ar: ['بناء','تركيب','تجميع','توجيه'],
  },
};

// Extra keyword synonyms for article cards (art-* slugs in articulos.html).
// Titles and their localized forms are matched automatically; these add
// synonyms and related terms the titles don't cover.
var PM_CB_ART_KW = {
  'art-borreliasis': {
    es: ['borrelia','lyme','garrapata','garrapatas','enfermedad de lyme'],
    en: ['lyme','borrelia','tick','ticks','lyme disease'],
    pt: ['lyme','borrelia','carrapato','carrapatos'],
    fr: ['lyme','tique','tiques','maladie de lyme'],
    de: ['lyme','borreliose','zecke','zecken','lyme-krankheit'],
    ru: ['боррелия','клещ','клещи','лайм','болезнь лайма','боррелиоз'],
    ar: ['لايم','قراد','مرض لايم','بوريليا'],
  },
  'art-candidiasis': {
    es: ['candida','hongos','infeccion por hongos','candida albicans','micosis'],
    en: ['candida','yeast','yeast infection','thrush','fungal','fungus','candida albicans'],
    pt: ['candida','fungos','candida albicans','micose'],
    fr: ['candida','mycose','champignons','candida albicans','infection fongique'],
    de: ['candida','pilz','pilzinfektion','soor','candida albicans','candidose'],
    ru: ['кандида','молочница','грибок','кандидоз','грибковая инфекция'],
    ar: ['كانديدا','فطريات','مبيضات','قلاع','عدوى فطرية'],
  },
  'art-dolencias': {
    es: ['dolencias','enfermedades','enfermedades tratadas','que enfermedades'],
    en: ['ailments','diseases','treated conditions','which diseases','conditions treated'],
    pt: ['doencas','enfermidades','doencas tratadas'],
    fr: ['maladies','affections','maladies traitees'],
    de: ['beschwerden','krankheiten','behandelte krankheiten','leiden'],
    ru: ['болезни','недуги','заболевания','какие болезни'],
    ar: ['أمراض','علل','أمراض معالجة','أي أمراض'],
  },
  'art-fibromialgia': {
    es: ['dolor cronico','dolor muscular','fatiga cronica'],
    en: ['fibromyalgia','chronic pain','muscle pain','chronic fatigue'],
    pt: ['dor cronica','dor muscular'],
    fr: ['fibromyalgie','douleur chronique','fatigue chronique'],
    de: ['fibromyalgie','chronische schmerzen','muskelschmerzen'],
    ru: ['фибромиалгия','хроническая боль','мышечная боль'],
    ar: ['فيبروميالغيا','ألم مزمن','ألم عضلي'],
  },
  'art-hidradenitis': {
    en: ['hidradenitis','acne inversa','skin boils'],
    fr: ['hidradenite','acne inverse'],
    de: ['hidradenitis','akne inversa'],
    ru: ['гидраденит'],
    ar: ['التهاب الغدد العرقية'],
  },
  'art-meditacion': {
    es: ['meditacion','meditar','relajacion','mindfulness'],
    en: ['meditation','meditate','relaxation','mindfulness'],
    pt: ['meditacao','meditar','relaxamento'],
    fr: ['meditation','mediter','relaxation'],
    de: ['meditation','meditieren','entspannung'],
    ru: ['медитация','медитировать','релаксация'],
    ar: ['تأمل','استرخاء','تأمل في هرم'],
  },
  'art-prostata': {
    es: ['prostata','prostatitis'],
    en: ['prostate','prostatitis'],
    pt: ['prostata','prostatite'],
    fr: ['prostate','prostatite'],
    de: ['prostata','prostatitis'],
    ru: ['простата','простатит'],
    ar: ['بروستاتا','التهاب البروستاتا'],
  },
  'art-renales': {
    es: ['rinon','rinones','renal','riñon','riñones','calculos renales'],
    en: ['kidney','kidneys','renal','kidney stones','kidney recovery'],
    pt: ['rim','rins','renal','pedras nos rins'],
    fr: ['rein','reins','renal','calculs renaux'],
    de: ['niere','nieren','renal','nierensteine'],
    ru: ['почки','почка','почечный','камни в почках'],
    ar: ['كلى','كلية','حصوات الكلى','كلوي'],
  },
  'art-efecto': {
    es: ['efecto piramidal','que es el efecto','como funciona la piramide'],
    en: ['pyramid effect','what is the effect'],
    fr: ['effet pyramidal'],
    de: ['pyramideneffekt'],
    ru: ['эффект пирамиды'],
    ar: ['تأثير الهرم'],
  },
  'art-energia': {
    es: ['energia piramidal','energia de las piramides'],
    en: ['pyramid energy','energy of pyramids'],
    pt: ['energia piramidal'],
    fr: ['energie pyramidale'],
    de: ['pyramidenenergie'],
    ru: ['энергия пирамид'],
    ar: ['طاقة الهرم'],
  },
  'art-experiencias': {
    es: ['experiencias','casos reales'],
    en: ['experiences','real cases'],
    fr: ['experiences','cas reels'],
    de: ['erfahrungen','echte falle'],
    ru: ['опыт','реальные случаи'],
    ar: ['تجارب','حالات حقيقية'],
  },
  'art-exp-cientificos': {
    es: ['experimentos cientificos','investigacion','estudios cientificos'],
    en: ['scientific experiments','research','scientific studies'],
    fr: ['experiences scientifiques','recherche','etudes scientifiques'],
    de: ['wissenschaftliche experimente','forschung','studien'],
    ru: ['научные эксперименты','исследования','научные исследования'],
    ar: ['تجارب علمية','بحث','دراسات علمية'],
  },
  'art-exp-caseros': {
    es: ['experimentos caseros','experimentos en casa','probar en casa'],
    en: ['home experiments','experiments at home','try at home'],
    fr: ['experiences maison','experiences a la maison'],
    de: ['heimexperimente','experimente zu hause'],
    ru: ['домашние эксперименты','эксперименты дома'],
    ar: ['تجارب منزلية','تجارب في المنزل'],
  },
  'art-magnetico': {
    es: ['magnetismo','funcion magnetica','campo magnetico'],
    en: ['magnetism','magnetic function','magnetic field'],
    fr: ['magnetisme','fonction magnetique','champ magnetique'],
    de: ['magnetismus','magnetische funktion','magnetfeld'],
    ru: ['магнетизм','магнитная функция','магнитное поле'],
    ar: ['مغناطيسية','وظيفة مغناطيسية','مجال مغناطيسي'],
  },
  'art-orientacion': {
    es: ['brujula','orientacion','norte','orientar la piramide'],
    en: ['compass','orientation','north','how to orient'],
    pt: ['bussola','orientacao','norte'],
    fr: ['boussole','orientation','nord','orienter la pyramide'],
    de: ['kompass','ausrichtung','norden','pyramide ausrichten'],
    ru: ['компас','ориентация','север','ориентировать пирамиду'],
    ar: ['بوصلة','اتجاه','شمال','توجيه الهرم'],
  },
  'art-avales': {
    es: ['avales','certificados','certificaciones','reconocimientos'],
    en: ['endorsements','certificates','certifications','credentials'],
    pt: ['avales','certificados','certificacoes'],
    fr: ['aval','certificats','certifications'],
    de: ['zertifikate','zertifizierungen','anerkennungen'],
    ru: ['сертификаты','сертификации','признания'],
    ar: ['شهادات','اعتمادات','اعترافات'],
  },
  'art-testimonios': {
    es: ['testimonios escritos','opiniones escritas'],
    en: ['written testimonials','written reviews'],
    fr: ['temoignages ecrits','avis ecrits'],
    de: ['schriftliche erfahrungsberichte'],
    ru: ['письменные отзывы'],
    ar: ['شهادات مكتوبة'],
  },
  'art-faraday': {
    es: ['faraday','jaula faraday','caja faraday','arcon faraday'],
    en: ['faraday','faraday cage','faraday box'],
    pt: ['faraday','gaiola de faraday'],
    fr: ['faraday','cage de faraday'],
    de: ['faraday','faradayscher kafig','faraday kafig'],
    ru: ['фарадей','клетка фарадея'],
    ar: ['فاراداي','قفص فاراداي'],
  },
  'art-bungalow': {
    es: ['bungalow','bungalow piramidal','casa piramidal'],
    en: ['bungalow','pyramid bungalow','pyramid house'],
    fr: ['bungalow','bungalow pyramidal'],
    de: ['bungalow','pyramidenbungalow'],
    ru: ['бунгало','пирамидальное бунгало'],
    ar: ['بنغل','بنغل هرمي','بيت هرمي'],
  },
  'art-piramascota': {
    es: ['mascotas','animales','perros','gatos','piramide para mascotas'],
    en: ['pets','animals','dogs','cats','pet pyramid'],
    pt: ['animais','cachorros','gatos','piramide para animais'],
    fr: ['animaux','chiens','chats','pyramide pour animaux'],
    de: ['haustiere','tiere','hunde','katzen','pyramide fur haustiere'],
    ru: ['питомцы','животные','собаки','кошки','пирамида для животных'],
    ar: ['حيوانات أليفة','كلاب','قطط','هرم للحيوانات'],
  },
  'art-jardin': {
    es: ['jardin','piramides de jardin','piramide jardin'],
    en: ['garden','garden pyramids','garden pyramid'],
    pt: ['jardim','piramides de jardim'],
    fr: ['jardin','pyramides de jardin'],
    de: ['garten','gartenpyramiden'],
    ru: ['сад','садовые пирамиды','пирамида для сада'],
    ar: ['حديقة','أهرامات الحديقة'],
  },
  'art-refugios': {
    es: ['refugios','refugio piramidal'],
    en: ['shelters','pyramid shelter','refuge'],
    fr: ['refuges','abris'],
    de: ['unterschlupf','schutzhutte','zuflucht'],
    ru: ['убежища','приюты'],
    ar: ['ملاجئ','مأوى هرمي'],
  },
  'art-planos': {
    es: ['planos','hacer piramide','construir piramide','planos piramidales','medidas piramide'],
    en: ['plans','blueprints','build a pyramid','pyramid plans','pyramid dimensions','measurements'],
    pt: ['plantas','construir piramide','medidas'],
    fr: ['plans','construire une pyramide','dimensions pyramide','mesures'],
    de: ['plane','bauplane','pyramide bauen','masse','abmessungen'],
    ru: ['планы','чертежи','построить пирамиду','размеры пирамиды','чертёж'],
    ar: ['خطط','مخططات','بناء هرم','قياسات الهرم','أبعاد'],
  },
  'art-vendedores': {
    es: ['representantes','vendedores','distribuidores','ser distribuidor'],
    en: ['representatives','distributors','resellers','become a distributor','sellers'],
    pt: ['representantes','vendedores','distribuidores'],
    fr: ['representants','distributeurs','revendeurs','vendeurs'],
    de: ['vertreter','handler','handler werden','vertriebspartner','verkaufer'],
    ru: ['представители','дистрибьюторы','продавцы','стать дистрибьютором'],
    ar: ['مندوبون','موزعون','بائعون','كن موزعًا'],
  },
  'art-centros': {
    es: ['centros de terapia','donde probar','donde hay centros'],
    en: ['therapy centers','where to try','center locations'],
    fr: ['centres de therapie','ou essayer'],
    de: ['therapiezentren','wo ausprobieren'],
    ru: ['центры терапии','где попробовать'],
    ar: ['مراكز العلاج','أين أجرب'],
  },
  'art-faq': {
    es: ['faq','preguntas frecuentes','dudas frecuentes'],
    en: ['faq','frequently asked questions','common questions'],
    pt: ['perguntas frequentes','duvidas frequentes'],
    fr: ['faq','questions frequentes','foire aux questions'],
    de: ['faq','haufige fragen','oft gestellte fragen'],
    ru: ['частые вопросы','вопросы и ответы'],
    ar: ['أسئلة شائعة','أسئلة متكررة'],
  },
  'art-historica': {
    es: ['piramidologia','historia de las piramides','piramides antiguas'],
    en: ['pyramidology','history of pyramids','ancient pyramids'],
    fr: ['pyramidologie','histoire des pyramides','pyramides anciennes'],
    de: ['pyramidologie','geschichte der pyramiden','antike pyramiden'],
    ru: ['пирамидология','история пирамид','древние пирамиды'],
    ar: ['علم الأهرامات','تاريخ الأهرامات','أهرامات قديمة'],
  },
  'art-egipto': {
    es: ['egipto','giza','viaje a egipto','piramides de egipto'],
    en: ['egypt','giza','trip to egypt','pyramids of egypt'],
    pt: ['egito','gize','viagem ao egito'],
    fr: ['egypte','gizeh','voyage en egypte'],
    de: ['agypten','gizeh','reise nach agypten'],
    ru: ['египет','гиза','поездка в египет','пирамиды египта'],
    ar: ['مصر','الجيزة','رحلة إلى مصر','أهرامات مصر'],
  },
  'art-sujok': {
    es: ['sujok','su jok','manual sujok'],
    en: ['sujok','su jok','sujok manual'],
    pt: ['sujok','su jok'],
    fr: ['sujok','su jok'],
    de: ['sujok','su jok'],
    ru: ['суджок','су джок'],
    ar: ['سوجوك','سو جوك'],
  },
  'art-hammer': {
    es: ['hammer','dr hammer','nueva medicina germanica'],
    en: ['hammer','dr hammer','german new medicine'],
    fr: ['hammer','dr hammer','nouvelle medecine germanique'],
    de: ['hammer','dr hammer','germanische neue medizin'],
    ru: ['хаммер','доктор хаммер','германская новая медицина'],
    ar: ['هامر','دكتور هامر'],
  },
  'art-mosquitos': {
    es: ['mosquitos','insectos','plagas','trampa mosquitos','picaduras'],
    en: ['mosquitoes','mosquito','insects','pests','mosquito trap','bites'],
    pt: ['mosquitos','insetos','pragas'],
    fr: ['moustiques','insectes','piege a moustiques','piqures'],
    de: ['mucken','stechmucken','insekten','muckenfalle','stiche'],
    ru: ['комары','насекомые','ловушка для комаров','укусы'],
    ar: ['بعوض','ناموس','حشرات','مصيدة البعوض','لدغات'],
  },
  'art-cucarachas': {
    es: ['cucarachas','insectos','plagas','trampa cucarachas'],
    en: ['cockroaches','cockroach','insects','pests','cockroach trap'],
    pt: ['baratas','insetos','pragas'],
    fr: ['cafards','blattes','insectes','piege a cafards'],
    de: ['kakerlaken','schaben','insekten','kakerlakenfalle'],
    ru: ['тараканы','насекомые','ловушка для тараканов'],
    ar: ['صراصير','حشرات','مصيدة الصراصير'],
  },
};

// Expose dictionaries so chatbot.js can use them regardless of load order
window.PM_CB_ART_KW = PM_CB_ART_KW;
window.PM_CB_I18N = PM_CB_I18N;
window.PM_CB_KEYWORDS = PM_CB_KEYWORDS;
window.PM_CB_QUICK = PM_CB_QUICK;
window.PM_CB_Q = PM_CB_Q;
window.PM_CB_QEXTRA = PM_CB_QEXTRA;
window.PM_CB_A = PM_CB_A;
window.PM_CB_AEXTRA = PM_CB_AEXTRA;
window.PM_CB_FALLBACK = PM_CB_FALLBACK;
window.PM_CB_FALLBACK_Q = PM_CB_FALLBACK_Q;
PM_CB_I18N.fallback = PM_CB_FALLBACK;
PM_CB_I18N.fallbackBtn = PM_CB_FALLBACK_Q;

// Patch chatbot to use translations
function pmCbGetLang() {
  var l = (typeof PM_lang !== "undefined" ? PM_lang : null) || (window.PM_lang) || "es";
  return l.split("-")[0];
}

// PM_I18N_RESPONSES / PM_I18N_QUICK are created by chatbot.js, which may load
// after this file (dynamic scripts execute in download order). Retry until
// they exist, then patch once.
var pmCbPatchTries = 0;
function pmCbPatchAll() {
  if (typeof PM_I18N_RESPONSES === "undefined" || !PM_I18N_RESPONSES || !PM_I18N_RESPONSES.length) {
    if (++pmCbPatchTries < 60) setTimeout(pmCbPatchAll, 250);
    return;
  }

  // Override response text when non-Spanish
  PM_I18N_RESPONSES.forEach(function(resp) {
    if (!resp || !resp.cat) return;
    var orig = resp._origR;
    if (orig) return; // already patched
    resp._origR = resp.r;
    resp._origK = resp.k ? resp.k.slice() : [];
    Object.defineProperty(resp, "r", {
      get: function() {
        var l = pmCbGetLang();
        if (l === "es") return this._origR;
        var t = PM_CB_I18N[this.cat];
        if (t && t[l]) return t[l];
        return this._origR;
      },
      set: function(v) { this._origR = v; }
    });
    // Localised action button label (q) and WhatsApp prefill link (a)
    resp._origQ = resp.q;
    resp._origA = resp.a;
    if (resp.q !== undefined) Object.defineProperty(resp, "q", {
      get: function() {
        var l = pmCbGetLang();
        if (l === "es") return this._origQ;
        var t = PM_CB_Q[this.cat];
        return (t && t[l]) || this._origQ;
      },
      set: function(v) { this._origQ = v; }
    });
    if (resp.a !== undefined && PM_CB_A[resp.cat]) Object.defineProperty(resp, "a", {
      get: function() {
        var l = pmCbGetLang();
        if (l === "es") return this._origA;
        var t = PM_CB_A[this.cat];
        return (t && t[l]) || this._origA;
      },
      set: function(v) { this._origA = v; }
    });
    // Localised secondary action (extra.q / extra.a)
    var ex = resp.extra;
    if (ex && ex.q !== undefined && PM_CB_QEXTRA[resp.cat]) {
      ex._origQ = ex.q;
      Object.defineProperty(ex, "q", {
        get: function() {
          var l = pmCbGetLang();
          if (l === "es") return this._origQ;
          var t = PM_CB_QEXTRA[resp.cat];
          return (t && t[l]) || this._origQ;
        },
        set: function(v) { this._origQ = v; }
      });
    }
    if (ex && ex.a !== undefined && PM_CB_AEXTRA[resp.cat]) {
      ex._origA = ex.a;
      Object.defineProperty(ex, "a", {
        get: function() {
          var l = pmCbGetLang();
          if (l === "es") return this._origA;
          var t = PM_CB_AEXTRA[resp.cat];
          return (t && t[l]) || this._origA;
        },
        set: function(v) { this._origA = v; }
      });
    }
  });

  // Add translated keywords for non-Spanish matching. They go to resp._i18nK
  // and are matched with word boundaries (+ inflection variants) so e.g. the
  // French "livre" (book) can't match inside "livrez-vous" (deliver).
  PM_I18N_RESPONSES.forEach(function(resp) {
    if (!resp || !resp.cat) return;
    var extra = PM_CB_KEYWORDS[resp.cat];
    if (!extra) return;
    var l = pmCbGetLang();
    var curated = (typeof PM_CB_KW_EXTRA !== "undefined" && PM_CB_KW_EXTRA[resp.cat]) || {};
    if (extra[l] || curated[l]) {
      var list = (extra[l] || []).concat(curated[l] || []);
      // English keywords are universally understood — merge them into every
      // non-Spanish language too
      if (l !== 'en' && extra.en) list = list.concat(extra.en);
      var base = list.slice();
      base.forEach(function(kw) {
        if (kw.indexOf(' ') === -1) {
          // inflection variants per script so flexed forms still match
          var sfx = ['s', 'e', 'es', 'n', 'en', 'er', 'em', 'x', 'ez', 'ent'];
          if (/[А-ӿ]/.test(kw)) sfx = sfx.concat(['а', 'у', 'е', 'и', 'ы', 'ой', 'ах', 'ам', 'ом', 'ов', 'ей', 'х']);
          if (/[؀-ۿ]/.test(kw)) sfx = sfx.concat(['ة', 'ات', 'ين', 'ون', 'ان', 'ه', 'ي']);
          sfx.forEach(function(sfx2) { if (list.indexOf(kw + sfx2) === -1) list.push(kw + sfx2); });
          // Cyrillic soft-sign stems decline by dropping ь: болезнь → болезни
          if (/ь$/.test(kw)) {
            var stem0 = kw.slice(0, -1);
            ['и', 'ей', 'ю', 'ям', 'ями', 'ях', 'ью'].forEach(function(sfx3) {
              if (list.indexOf(stem0 + sfx3) === -1) list.push(stem0 + sfx3);
            });
          }
          // Arabic definite article is a prefix: add ال + word variants
          if (/[؀-ۿ]/.test(kw) && kw.indexOf('ال') !== 0 && list.indexOf('ال' + kw) === -1) list.push('ال' + kw);
          var stem = kw.replace(/(es|e|s)$/i, '');
          if (stem !== kw && stem.length >= 4 && list.indexOf(stem) === -1) list.push(stem);
        } else {
          // individual words of phrases become standalone keywords too
          kw.split(/[\s\-]+/).forEach(function(w) {
            if (w.length >= 5 && list.indexOf(w) === -1) list.push(w);
          });
        }
      });
      resp._i18nK = list;
    }
  });

  pmCbTranslateButtons();
}
pmCbPatchAll();

// Translate quick reply buttons. The button click handlers in chatbot.js close
// over the PM_I18N_QUICK item objects, so the items are mutated in place —
// that localises both the labels and the text each button sends.
function pmCbTranslateButtons() {
  var l = pmCbGetLang();
  var labels = PM_CB_QUICK[l];
  if (labels && typeof PM_I18N_QUICK !== "undefined" && PM_I18N_QUICK) {
    for (var i = 0; i < PM_I18N_QUICK.length && i < labels.length; i++) {
      PM_I18N_QUICK[i].label = labels[i].label;
      PM_I18N_QUICK[i].text = labels[i].text;
    }
  }
  if (l === "es" || !labels) return;
  var btns = document.querySelectorAll(".pm-chat-quick-btn");
  if (!btns || !btns.length) return;
  btns.forEach(function(btn, i) {
    if (i < labels.length) btn.textContent = labels[i].label;
  });
}

// Re-run translation when language changes
var origSetLang = window.PM_setLang;
window.PM_setLang = function(code) {
  if (origSetLang) origSetLang(code);
  setTimeout(pmCbTranslateButtons, 300);
};

// Initial translation of quick buttons (chatbot creates them ~300ms after load)
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(pmCbTranslateButtons, 1000);
    setTimeout(pmCbTranslateButtons, 2500);
  });
} else {
  setTimeout(pmCbTranslateButtons, 1000);
  setTimeout(pmCbTranslateButtons, 2500);
}

// Also re-translate buttons when the chatbot is opened
document.addEventListener("click", function(e) {
  if (e.target && e.target.closest && e.target.closest(".pm-chat-toggle")) {
    setTimeout(pmCbTranslateButtons, 200);
  }
});

})();