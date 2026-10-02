/* Piramicasa Chatbot i18n — Translated chatbot responses and keywords
 * Provides translated responses for each category based on PM_lang
 */
(function(){
"use strict";

var PM_CB_I18N = {
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

var PM_CB_KEYWORDS = {
  greeting: {
    en: ['hello','hi','hey','good morning','good afternoon','help','menu'],
    pt: ['olá','oi','bom dia','boa tarde','boa noite','ajuda','menu'],
    fr: ['bonjour','salut','bonsoir','aide','menu'],
    de: ['hallo','guten tag','guten morgen','guten abend','hilfe','menü'],
    ru: ['привет','здравствуйте','добрый день','добрый вечер','помощь','меню'],
    ar: ['مرحبا','أهلا','صباح الخير','مساء الخير','مساعدة','قائمة'],
  },
  precios: {
    en: ['price','prices','cost','costs','how much','quote','budget','fee'],
    pt: ['preço','preços','custo','quanto custa','orçamento','valor'],
    fr: ['prix','coût','combien','devis','budget','tarif'],
    de: ['preis','preise','kosten','wie viel','angebot','budget','tarif'],
    ru: ['цена','цены','стоимость','сколько','расчёт','бюджет','тариф'],
    ar: ['سعر','أسعار','تكلفة','كم','عرض سعر','ميزانية','رسوم'],
  },
  compra: {
    en: ['buy','purchase','order','get','acquire'],
    pt: ['comprar','adquirir','encomendar','obter'],
    fr: ['acheter','commander','acquérir','obtenir'],
    de: ['kaufen','bestellen','erwerben','bekommen'],
    ru: ['купить','заказать','приобрести','получить'],
    ar: ['شراء','طلب','اقتناء','حصول'],
  },
  envios: {
    en: ['shipping','ship','delivery','international','send','transport'],
    pt: ['envio','enviar','entrega','internacional','transporte'],
    fr: ['envoi','expédition','livraison','international','transport'],
    de: ['versand','lieferung','international','senden','transport'],
    ru: ['доставка','отправка','международная','транспорт'],
    ar: ['شحن','توصيل','دولي','إرسال','نقل'],
  },
  salud: {
    en: ['health','benefit','disease','pain','symptom','relief','insomnia','stress','anxiety'],
    pt: ['saúde','benefício','doença','dor','sintoma','alívio','insónia','stress','ansiedade'],
    fr: ['santé','bénéfice','maladie','douleur','symptôme','soulagement','insomnie','stress','anxiété'],
    de: ['gesundheit','vorteil','krankheit','schmerz','symptom','linderung','schlaflosigkeit','stress','angst'],
    ru: ['здоровье','польза','болезнь','боль','симптом','облегчение','бессонница','стресс','тревожность'],
    ar: ['صحة','فائدة','مرض','ألم','عرض','تخفيف','أرق','توتر','قلق'],
  },
  centros: {
    en: ['center','centers','therapy center','therapist','clinic'],
    pt: ['centro','centros','centro de terapia','terapeuta','clínica'],
    fr: ['centre','centres','centre de thérapie','thérapeute','clinique'],
    de: ['zentrum','zentren','therapiezentrum','therapeut','klinik'],
    ru: ['центр','центры','центр терапии','терапевт','клиника'],
    ar: ['مركز','مراكز','مركز علاج','معالج','عيادة'],
  },
  videos: {
    en: ['video','videos','watch','documentary'],
    pt: ['vídeo','vídeos','ver','documentário'],
    fr: ['vidéo','vidéos','regarder','documentaire'],
    de: ['video','videos','ansehen','dokumentation'],
    ru: ['видео','смотреть','документальный'],
    ar: ['فيديو','مشاهدة','وثائقي'],
  },
  contacto: {
    en: ['contact','phone','email','whatsapp','call'],
    pt: ['contacto','telefone','email','whatsapp','ligar'],
    fr: ['contact','téléphone','email','whatsapp','appeler'],
    de: ['kontakt','telefon','e-mail','whatsapp','anrufen'],
    ru: ['контакт','телефон','почта','whatsapp','звонок'],
    ar: ['اتصال','هاتف','بريد','واتساب','اتصال'],
  },
  cita: {
    en: ['appointment','book','schedule','consultation','session'],
    pt: ['consulta','marcar','agendar','sessão'],
    fr: ['rendez-vous','réserver','planifier','consultation','séance'],
    de: ['termin','buchen','beratung','sitzung','vereinbaren'],
    ru: ['запись','приём','консультация','сеанс','запланировать'],
    ar: ['موعد','حجز','جدولة','استشارة','جلسة'],
  },
};

// Patch chatbot to use translations
function pmCbGetLang() {
  var l = (typeof PM_lang !== "undefined" ? PM_lang : null) || (window.PM_lang) || "es";
  return l.split("-")[0];
}

// Override response text when non-Spanish
if (typeof PM_I18N_RESPONSES !== "undefined") {
  // Find the original responses array
  var origMatch = PM_findResponse || null;

  // Patch each response object to check for translation
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
  });
}
// Add translated keywords for non-Spanish matching
if (typeof PM_I18N_RESPONSES !== "undefined") {
  PM_I18N_RESPONSES.forEach(function(resp) {
    if (!resp || !resp.cat) return;
    var extra = PM_CB_KEYWORDS[resp.cat];
    if (!extra) return;
    var l = pmCbGetLang();
    if (extra[l] && resp._origK) {
      var merged = resp._origK.concat(extra[l]);
      // deduplicate
      resp.k = merged.filter(function(v, i, a) { return a.indexOf(v) === i; });
    }
  });
}
// Translate quick reply buttons
function pmCbTranslateButtons() {
  var l = pmCbGetLang();
  if (l === "es") return;
  var btns = document.querySelectorAll(".pm-chatbot-quick-btn");
  if (!btns || !btns.length) return;
  var labels = PM_CB_QUICK[l];
  if (!labels) return;
  btns.forEach(function(btn, i) {
    if (i < labels.length) {
      btn.textContent = labels[i].label;
      btn.dataset.text = labels[i].text;
    }
  });
}

// Re-run translation when language changes
var origSetLang = PM_setLang;
PM_setLang = function(code) {
  if (origSetLang) origSetLang(code);
  setTimeout(pmCbTranslateButtons, 300);
};

// Initial translation of quick buttons
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(pmCbTranslateButtons, 1000);
  });
} else {
  setTimeout(pmCbTranslateButtons, 1000);
}

// Also hook into when chatbot is opened to re-translate buttons
document.addEventListener("click", function(e) {
  if (e.target && (e.target.id === "pm-chatbot-btn" || e.target.closest("#pm-chatbot-btn"))) {
    setTimeout(pmCbTranslateButtons, 200);
  }
});

})();