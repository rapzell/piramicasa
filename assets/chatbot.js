/* ===== PIRAMICASA ASISTENTE VIRTUAL v2 ===== */
(function () {
  'use strict';

  // Do NOT show on access/login page
  if (location.pathname.indexOf('acceso') !== -1) return;

  var WHATSAPP = '34639284787';
  var PHONE = '+34 639 284 787';
  var LOGO_URL = '/assets/piramicasa/logo-dorado.png';

  // === Knowledge base with categories and weighted matching ===
  var knowledge = [
    // Greetings
    { cat: 'greeting', k: ['hola', 'buenas', 'buenos dias', 'buenas tardes', 'buenas noches', 'saludos', 'hey', 'ola', 'que tal'], r: '¡Hola! 👋 Soy el asistente virtual de <strong>Piramicasa</strong>. Puedo guiarte por nuestra web y ayudarte con:\n• 📋 Información sobre pirámides y modelos\n• 💰 Precios y presupuestos\n• 📅 Agendar una consulta o asesoría\n• 🔬 Ciencia e investigación del efecto piramidal\n• 📦 Envíos y contacto\n\n¿En qué puedo ayudarte? Escribe tu pregunta o usa los botones de abajo.' },

    // Prices
    { cat: 'precios', k: ['precio', 'precios', 'coste', 'costo', 'cuesta', 'cuanto cuesta', 'cuanto vale', 'tarifa', 'tarifas', 'listado de precios', 'cuanto', 'presupuesto', 'cuanto cobran', 'pagar'], r: 'Los precios de nuestras pirámides varían según modelo, tamaño y materiales. También ofrecemos presupuestos personalizados sin compromiso.\n\n¿Quieres que te enviemos un presupuesto personalizado por WhatsApp?', a: 'https://wa.me/' + WHATSAPP + '?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20un%20presupuesto%20personalizado%20de%20pir%C3%A1mides', q: 'Solicitar presupuesto', extra: { a: '/menu-principal.html', q: 'Ver menú principal' } },

    // Buy / Order
    { cat: 'compra', k: ['comprar', 'comprar piramide', 'adquirir', 'donde compro', 'pedido', 'encargar', 'quisiera una', 'quiero una', 'necesito una', 'como compro', 'obtener'], r: 'Puedes adquirir nuestras pirámides directamente con nosotros. El proceso es sencillo:\n1. Te asesoramos sobre el modelo ideal para ti\n2. Te enviamos un presupuesto\n3. Fabricamos y enviamos a todo el mundo\n\n¿Quieres que te asesoremos ahora por WhatsApp?', a: 'https://wa.me/' + WHATSAPP + '?text=Hola%2C%20me%20gustar%C3%ADa%20comprar%20una%20pir%C3%A1mide%20terap%C3%A9utica', q: 'Iniciar compra por WhatsApp' },

    // Shipping
    { cat: 'envios', k: ['envio', 'enviar', 'envios', 'entrega', 'enviar a', 'internacional', 'otro pais', 'extranjero', 'fuera de espa', 'mundial', 'enviar a mi'], r: '¡Sí! Realizamos envíos a todo el mundo. El coste y plazo dependen del país de destino y el tamaño de la pirámide. Hemos enviado pirámides a clientes en Europa, América y Asia.\n\n¿Quieres consultar el envío a tu país?', a: 'https://wa.me/' + WHATSAPP + '?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20env%C3%ADos%20a%20mi%20pa%C3%ADs', q: 'Consultar envío a mi país' },

    // Piramicama
    { cat: 'piramicama', k: ['piramicama', 'cama piramidal', 'cama', 'dormir', 'sueno', 'sueño', 'descanso', 'insomnio', 'cama terapeutica'], r: 'La <strong>Piramicama</strong> es nuestra cama piramidal terapéutica estrella. Está diseñada para:\n• Mejorar la calidad del sueño\n• Reducir el estrés y la ansiedad\n• Potenciar el sistema inmunológico\n• Efecto bacteriostático (elimina bacterias y virus en su interior)\n\nMás de 50 años de investigación respaldan su eficacia. Es ideal para personas con problemas de sueño, reumatismo o que buscan mejorar su bienestar general.\n\n¿Quieres más información o ver precios?', a: 'https://wa.me/' + WHATSAPP + '?text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20la%20Piramicama', q: 'Info Piramicama por WhatsApp', extra: { a: '/salud.html', q: 'Ver beneficios en salud' } },

    // Hygia
    { cat: 'hygia', k: ['hygia', 'piramide hygia'], r: 'La pirámide <strong>Hygia</strong> es un modelo compacto para uso personal, ideal para terapia diaria en casa. Su tamaño permite tratar una persona sentada o tumbada parcialmente.\n\nEs perfecta para quienes empiezan con la terapia piramidal o tienen espacio limitado. Diseño eficiente con la misma calidad Piramicasa.\n\n¿Quieres más información?', a: 'https://wa.me/' + WHATSAPP + '?text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20la%20pir%C3%A1mide%20Hygia', q: 'Info Hygia por WhatsApp', extra: { a: '/salud.html', q: 'Ver beneficios en salud' } },

    // Hercules
    { cat: 'hercules', k: ['hercules', 'hercules', 'inmunologico', 'inmunidad', 'refuerzo inmunologico', 'terapia intensiva', 'potente'], r: 'La pirámide <strong>Hércules</strong> es nuestro modelo más potente. Diseñada para:\n• Refuerzo intensivo del sistema inmunológico\n• Terapias de larga duración\n• Tratamiento de dolencias crónicas\n• Máxima superficie de efecto piramidal\n\nEs la opción ideal para quienes necesitan una terapia más intensiva o tienen condiciones de salud que requieren mayor exposición al efecto piramidal.\n\n¿Quieres más información?', a: 'https://wa.me/' + WHATSAPP + '?text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20la%20pir%C3%A1mide%20H%C3%A9rcules', q: 'Info Hércules por WhatsApp', extra: { a: '/salud.html', q: 'Ver beneficios en salud' } },

    // Pirajardin
    { cat: 'pirajardin', k: ['pirajardin', 'pirajardin', 'jardin', 'agricultura', 'apicultura', 'abejas', 'plantas', 'cultivo', 'huerto', 'semillas', 'germinacion'], r: 'El <strong>Pirajardín</strong> aplica el efecto piramidal a la naturaleza:\n• Mejora el crecimiento de plantas y cultivos\n• Beneficia la apicultura (las abejas producen más miel)\n• Acelera la germinación de semillas\n• Mejora la salud de animales de granja\n\nEs ideal para agricultores, jardineros y apicultores que buscan resultados naturales sin químicos.\n\n¿Quieres más información?', a: 'https://wa.me/' + WHATSAPP + '?text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20el%20Pirajard%C3%ADn', q: 'Info Pirajardín por WhatsApp' },

    // Faraday
    { cat: 'faraday', k: ['faraday', 'arcon', 'arcones', 'electromagnetico', 'electromagneticos', 'emf', 'radiacion electromagnetica', 'proteccion electromagnetica', 'blindexe', 'jaula de faraday', 'wifi', 'antenas', 'torres', '5g', 'microondas'], r: 'Los <strong>Arcones Faraday</strong> de Piramicasa ofrecen doble función:\n• Protección contra campos electromagnéticos (EMF, WiFi, 5G, antenas)\n• Conservación de alimentos (los mantiene frescos más tiempo)\n\nSon ideales para personas sensibles a la radiación electromagnética o que viven cerca de antenas, torres eléctricas o en entornos urbanos con alta contaminación EMF.\n\n¿Quieres más información?', a: 'https://wa.me/' + WHATSAPP + '?text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20los%20Arcones%20Faraday', q: 'Info Faraday por WhatsApp' },

    // Mascotas
    { cat: 'mascotas', k: ['mascota', 'mascotas', 'perro', 'perros', 'gato', 'gatos', 'animal', 'animales', 'veterinario', 'piramascotas'], r: 'Las <strong>Piramascotas</strong> están diseñadas para mejorar la salud y bienestar de tus animales:\n• Acelera la recuperación de lesiones\n• Mejora el pelaje y la vitalidad\n• Reduce el estrés en animales nerviosos\n• Efecto bacteriostático para prevenir infecciones\n\nFunciona con perros, gatos, aves y otros animales.\n\n¿Quieres más información?', a: 'https://wa.me/' + WHATSAPP + '?text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20Piramascotas', q: 'Info Piramascotas por WhatsApp' },

    // Vital
    { cat: 'vital', k: ['vital', 'piramicasa vital', 'portatil', 'portátil', 'llevar', 'viajar', 'transportable', 'movil'], r: 'La <strong>Piramicasa Vital</strong> es nuestra pirámide portátil. Puedes llevar el efecto piramidal contigo donde quieras. Es una pirámide de tamaño medio, transportable, ideal para:\n• Uso en diferentes habitaciones\n• Llevar de viaje\n• Usar en el trabajo\n• Terapias en diferentes ubicaciones\n\n¿Te interesa?', a: 'https://wa.me/' + WHATSAPP + '?text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20la%20Piramicasa%20Vital', q: 'Info Vital por WhatsApp' },

    // Piramide estandar
    { cat: 'piramide', k: ['piramide estandar', 'piramide normal', 'piramide basica', 'piramide terapeutica', 'que piramide', 'que modelo', 'cual recomiendan', 'que piramide compro', 'tipos de piramides', 'modelos'], r: 'Tenemos varios modelos de pirámides terapéuticas según tus necesidades:\n• <strong>Piramicama</strong>: cama piramidal para dormir y terapia nocturna\n• <strong>Hygia</strong>: compacta, para uso personal diario\n• <strong>Hércules</strong>: la más potente, para terapia intensiva\n• <strong>Vital</strong>: portátil, para llevar contigo\n• <strong>Pirajardín</strong>: para agricultura y jardines\n• <strong>Faraday</strong>: protección electromagnética\n• <strong>Piramascotas</strong>: para animales\n\n¿Qué uso le quieres dar? Cuéntame y te recomiendo el modelo ideal. También puedes ver el menú principal de la web.', a: '/menu-principal.html', q: 'Ver menú principal', extra: { a: 'https://wa.me/' + WHATSAPP + '?text=Hola%2C%20no%20s%C3%A9%20qu%C3%A9%20pir%C3%A1mide%20me%20conviene%2C%20%C2%BFpod%C3%A9is%20asesorarme%3F', q: 'Asesoramiento por WhatsApp' } },

    // Efecto piramidal
    { cat: 'efecto', k: ['que es', 'que es una piramide', 'efecto piramidal', 'como funciona', 'funciona de verdad', 'piramidoterapia', 'terapia piramidal', 'piramide terapeutica', 'que hace', 'para que sirve', 'beneficios de las piramides', 'efecto', 'funcionamiento'], r: 'El <strong>efecto piramidal</strong> es el conjunto de fenómenos físicos que ocurren dentro de una pirámide construida con las proporciones correctas (fórmula de Keops) y orientada al norte magnético:\n\n• <strong>Efecto bacteriostático</strong>: impide la proliferación de bacterias y virus\n• <strong>Mejora del sueño</strong>: sueño más profundo y reparador\n• <strong>Reducción del estrés</strong>: disminuye la ansiedad y mejora el estado de ánimo\n• <strong>Efecto antiinflamatorio</strong>: alivia dolores e inflamaciones\n• <strong>Conservación</strong>: los alimentos se conservan más tiempo\n\nNo es magia ni mística: es física. Más de 50 años de investigación lo respaldan.\n\n¿Quieres profundizar en la ciencia?', a: '/salud.html', q: 'Ver investigación científica' },

    // Salud
    { cat: 'salud', k: ['salud', 'beneficio', 'beneficios', 'mejora', 'enfermedad', 'enfermedades', 'tratamiento', 'cura', 'dolor', 'reumatismo', 'artritis', 'inflamacion', 'infeccion', 'estres', 'ansiedad', 'depresion', 'fatiga', 'fibromialgia', 'dolencia', 'dolencias'], r: 'La terapia piramidal puede beneficiar diversas condiciones de salud:\n\n• <strong>Reumatismo y artritis</strong>: reduce la inflamación y el dolor\n• <strong>Problemas de sueño</strong>: mejora el descanso y el insomnio\n• <strong>Estrés y ansiedad</strong>: produce relajación profunda\n• <strong>Infecciones</strong>: efecto bacteriostático ayuda al sistema inmune\n• <strong>Fibromialgia y fatiga crónica</strong>: alivia síntomas\n• <strong>Dolencias metabólicas</strong>: ayuda a regular el metabolismo\n\n⚠️ Importante: Es un complemento de bienestar. No sustituye el tratamiento médico. Consulta siempre con tu médico.\n\n¿Quieres ver la sección completa de salud?', a: '/salud.html', q: 'Ver sección de salud' },

    // Testimonios
    { cat: 'testimonios', k: ['testimonio', 'testimonios', 'opinion', 'opiniones', 'review', 'experiencia', 'experiencias', 'funciona de verdad', 'alguien ha probado', 'resultados reales', 'prueba'], r: 'Tenemos numerosos <strong>testimonios reales</strong> de personas que han mejorado su calidad de vida con nuestras pirámides. Incluyen casos de:\n\n• Mejoría del sueño desde la primera semana\n• Reducción de dolores articulares\n• Mejora de infecciones recurrentes\n• Bienestar general y más energía\n\nTambién tenemos testimonios en video. ¿Quieres verlos?', a: '/testimonios.html', q: 'Ver testimonios' },

    // Historia
    { cat: 'historia', k: ['historia', 'quien', 'fundador', 'osiris', 'gabriel', 'gabriel silva', 'desde cuando', 'antiguedad', 'cuando empezo', 'quien fundo', 'quien esta detras'], r: 'Piramicasa investiga el efecto piramidal desde <strong>1972</strong>, fundada por <strong>Gabriel Silva (Osiris)</strong>. Más de 50 años de:\n• Investigación científica rigurosa\n• Fabricación de pirámides terapéuticas\n• Divulgación y publicación de libros\n• Conferencias y eventos internacionales\n\nNuestra trayectoria nos respalda como pioneros en piramidología científica.\n\n¿Quieres conocer nuestra historia completa?', a: '/historia.html', q: 'Ver historia' },

    // Presentacion / equipo
    { cat: 'presentacion', k: ['presentacion', 'equipo', 'quienes sois', 'quienes somos', 'virginia', 'hator', 'quien trabaja', 'quien hace'], r: 'El equipo de Piramicasa está formado por investigadores y fabricantes con décadas de experiencia. Conoce nuestra trayectoria, formación y compromiso con la ciencia piramidal.\n\n¿Quieres ver la presentación del equipo?', a: '/presentacion.html', q: 'Ver presentación' },

    // Construccion
    { cat: 'construccion', k: ['construccion', 'construir', 'materiales', 'proporcion', 'proporciones', 'montaje', 'orientacion', 'como se hace', 'como se construye', 'fórmula de keops', 'keops', 'norte magnetico', 'medidas'], r: 'La construcción de pirámides terapéuticas requiere precisión técnica:\n\n• <strong>Proporciones exactas</strong>: fórmula de la pirámide de Keops\n• <strong>Materiales específicos</strong>: conductividad y propiedades magnéticas\n• <strong>Orientación al norte magnético</strong>: fundamental para el efecto\n• <strong>Montaje correcto</strong>: sin errores que anulen el efecto\n\nSi quieres construir tu propia pirámide, contáctanos para la guía técnica completa.', a: 'https://wa.me/' + WHATSAPP + '?text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20construcci%C3%B3n%20de%20pir%C3%A1mides', q: 'Info construcción por WhatsApp' },

    // Libros
    { cat: 'libros', k: ['libro', 'libros', 'leer', 'publicacion', 'publicaciones', 'bibliografia', 'donde leer', 'informacion escrita'], r: 'Tenemos un catálogo de <strong>libros sobre ciencia piramidal</strong>, geobiología y terapia con pirámides. Obras de Gabriel Osiris y otros investigadores.\n\nLos libros cubren desde la teoría científica del efecto piramidal hasta guías prácticas de aplicación.\n\n¿Quieres ver el catálogo?', a: '/libros.html', q: 'Ver catálogo de libros' },

    // Videos
    { cat: 'videos', k: ['video', 'videos', 'youtube', 'conferencia', 'charla', 'documental', 'ver explicacion', 'tutorial'], r: 'Dispones de una <strong>biblioteca de videos</strong> con:\n• Conferencias de Gabriel Osiris\n• Explicaciones científicas del efecto piramidal\n• Demostraciones prácticas\n• Entrevistas y eventos\n\n¿Quieres acceder a la biblioteca?', a: '/videos.html', q: 'Ver videos' },

    // Egipto
    { cat: 'egipto', k: ['egipto', 'viaje', 'viaje a egipto', 'piramides egipto', 'keops', 'cairo', 'guiza', 'nilo', 'templos', 'piramidologia egipto'], r: 'Organizamos <strong>viajes a Egipto</strong> con guía científico especializado en piramidología. Una experiencia única:\n\n• Visita las grandes pirámides de Guiza con un experto\n• Recorre templos y yacimientos arqueológicos\n• Aprende la ciencia detrás de las pirámides egipcias\n• Grupo reduto y atención personalizada\n\n¿Quieres ver el itinerario completo y fechas?', a: '/viaje-egipto.html', q: 'Ver viaje a Egipto' },

    // Centros de terapia
    { cat: 'centros', k: ['centro', 'centros', 'centro de terapia', 'donde recibir', 'tratamiento', 'terapia profesional', 'centro terapeutico', 'ir a un centro'], r: 'Tenemos un <strong>directorio de centros de terapia piramidal</strong> donde puedes recibir tratamiento profesional con pirámides Piramicasa.\n\nLos centros están disponibles en varias ciudades. Si no hay uno cerca de ti, podemos asesorarte sobre el uso de una pirámide en casa.\n\n¿Quieres ver el directorio?', a: '/centros-terapia.html', q: 'Ver centros de terapia' },

    // Geobiologia
    { cat: 'geobiologia', k: ['geobiologia', 'radiacion terrestre', 'hartmann', 'curry', 'lineas', 'lineas de fuerza', 'radiaciones del subsuelo', 'falla geologica', 'agua subterranea', 'geo'], r: 'La <strong>geobiología</strong> estudia las radiaciones terrestres nocivas y su impacto en la salud:\n\n• <strong>Líneas Hartmann</strong>: red global de radiación\n• <strong>Líneas Curry</strong>: red diagonal\n• <strong>Fallas geológicas</strong> y corrientes de agua subterránea\n• <strong>Efectos en la salud</strong>: sueño, inmunidad, bienestar\n\nLas pirámides pueden neutralizar estas radiaciones. ¿Quieres saber más?', a: '/salud.html', q: 'Ver sección de salud', extra: { a: 'https://wa.me/' + WHATSAPP + '?text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20geobiolog%C3%ADa', q: 'Info geobiología por WhatsApp' } },

    // Reich / Biones
    { cat: 'reich', k: ['reich', 'wilhelm reich', 'orgona', 'orgone', 'biones', 'orbs', 'energia orgona'], r: 'La obra de <strong>Wilhelm Reich</strong> sobre la energía orgón y los biones está relacionada con el efecto piramidal. Reich descubrió vesículas de energía (biones) que se relacionan con los fenómenos observados dentro de las pirámides.\n\n¿Quieres conocer más sobre esta conexión científica?', a: '/salud.html', q: 'Ver sección de salud', extra: { a: 'https://wa.me/' + WHATSAPP + '?text=Hola%2C%20me%20gustar%C3%ADa%20saber%20sobre%20Wilhelm%20Reich%20y%20los%20biones', q: 'Info biones por WhatsApp' } },

    // Contacto
    { cat: 'contacto', k: ['contacto', 'contactar', 'telefono', 'email', 'correo', 'whatsapp', 'llamar', 'numero', 'como contacto', 'donde llamais', 'horario', 'atencion'], r: 'Puedes contactar con nosotros por varios medios:\n\n📞 <strong>Teléfono/WhatsApp:</strong> ' + PHONE + '\n💬 <strong>WhatsApp directo</strong> (clic abajo para chatear)\n📧 Email: a través del formulario de contacto\n\nEstamos para ayudarte y asesorarte sin compromiso.\n\n¿Quieres contactar ahora?', a: 'https://wa.me/' + WHATSAPP, q: 'Abrir WhatsApp', extra: { a: 'tel:+34639284787', q: 'Llamar por teléfono' } },

    // Agendar cita
    { cat: 'cita', k: ['cita', 'agendar', 'agendar cita', 'reservar', 'cita previa', 'consulta', 'asesoria', 'asesoramiento', 'reunion', 'programar', 'pedir hora', 'sacar cita', 'visita'], r: '¡Perfecto! Puedes agendar una <strong>consulta o asesoría personalizada</strong> con el equipo de Piramicasa. Te ayudaremos a:\n\n• Elegir el modelo de pirámide adecuado para ti\n• Resolver todas tus dudas técnicas y de salud\n• Conocer los precios y opciones de envío\n• Recibir asesoramiento profesional sin compromiso\n\n¿Quieres abrir WhatsApp para agendar tu cita?', a: 'https://wa.me/' + WHATSAPP + '?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta%20sobre%20pir%C3%A1mides%20terap%C3%A9uticas', q: '📅 Agendar cita por WhatsApp' },

    // Documento critico
    { cat: 'critica', k: ['critica', 'critico', 'escéptico', 'esceptico', 'no funciona', 'fraude', 'engaño', 'desmentir', 'documento critico', 'evidencia cientifica', 'demostracion', 'prueba cientifica'], r: 'Entendemos el escepticismo. Por eso tenemos un <strong>documento crítico</strong> que analiza la piramidología con rigor científico, responde a los detractores y presenta la evidencia del efecto piramidal.\n\nLa diferencia entre piramidología científica y pseudociencia está en la metodología. Nosotros seguimos métodos rigurosos desde 1972.\n\n¿Quieres leer el documento crítico?', a: '/documento-critico.html', q: 'Ver documento crítico' },

    // Dossier
    { cat: 'dossier', k: ['dossier', 'informacion completa', 'descargar info', 'documentacion', 'catalogo pdf', 'folleto', 'brochure'], r: 'Tenemos un <strong>dossier básico informativo</strong> con toda la información sobre Piramicasa, nuestros productos y la ciencia del efecto piramidal.\n\n¿Quieres que te enviemos el dossier?', a: 'https://wa.me/' + WHATSAPP + '?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20el%20dossier%20informativo%20de%20Piramicasa', q: 'Recibir dossier por WhatsApp' },

    // Aviso medico
    { cat: 'medico', k: ['medico', 'medicina', 'sustituye', 'tratamiento medico', 'receta', 'medicamento', 'doctor', 'curar', 'cura medica', 'peligro', 'contraindicacion', 'seguro'], r: '⚠️ <strong>Aviso importante:</strong> Las pirámides terapéuticas Piramicasa son un <strong>complemento de bienestar</strong> y NO sustituyen ningún tratamiento médico.\n\n• No prescribimos tratamientos médicos\n• La información de esta web es divulgativa\n• Consulta siempre con tu médico antes de iniciar cualquier terapia\n• Si tienes una condición médica, consúltalo con tu profesional de la salud\n\nLa terapia piramidal es un complemento, no un sustituto de la medicina.' },

    // Thanks
    { cat: 'thanks', k: ['gracias', 'muchas gracias', 'perfecto', 'genial', 'excelente', 'muy amable', 'gracias por'], r: '¡De nada! 😊 Estamos para ayudarte. Si tienes más dudas, pregúntame. También puedes contactarnos directamente por WhatsApp al ' + PHONE + ' cuando quieras.' },

    // Identity
    { cat: 'identity', k: ['quien eres', 'que eres', 'bot', 'chatbot', 'asistente', 'eres un robot', 'eres ia', 'eres inteligencia artificial', 'como te llamas'], r: 'Soy el <strong>asistente virtual de Piramicasa</strong>. Estoy aquí para:\n• Guiarte por nuestra web\n• Responder tus dudas sobre pirámides terapéuticas\n• Recomendarte el producto adecuado\n• Ayudarte a agendar consultas\n• Conectarte con el equipo humano cuando lo necesites\n\nNo sustituyo la atención personalizada, pero puedo orientarte 24/7. ¿En qué puedo ayudarte?' },

    // Joyas
    { cat: 'joyas', k: ['joya', 'joyas', 'anillo', 'anillos', 'piramijoyas', 'joyeria', 'joya piramidal'], r: 'Las <strong>PiramiJoyas</strong> son joyas exclusivas inspiradas en la geometría sagrada y el efecto piramidal. Piezas únicas con diseño egipcio y mineral.\n\n¿Quieres ver el catálogo de joyas?', a: 'https://wa.me/' + WHATSAPP + '?text=Hola%2C%20me%20gustar%C3%ADa%20ver%20el%20cat%C3%A1logo%20de%20PiramiJoyas', q: 'Ver joyas por WhatsApp' },

    // Avales / Certificaciones
    { cat: 'avales', k: ['aval', 'avales', 'certificacion', 'certificaciones', 'respaldo', 'respaldos', 'garantia oficial', 'reconocimiento', 'aval oficial', 'avales de terapia', 'avales piramidal'], r: 'Contamos con <strong>avales y certificaciones oficiales</strong> de la terapia piramidal. Estos avales respaldan la seriedad y eficacia de nuestros productos tras décadas de investigación.\n\n¿Quieres ver la documentación de los avales?', a: 'https://wa.me/' + WHATSAPP + '?text=Hola%2C%20me%20gustar%C3%ADa%20ver%20la%20documentaci%C3%B3n%20de%20los%20avales%20oficiales', q: 'Ver avales por WhatsApp' },

    // Conferencias / Eventos
    { cat: 'conferencias', k: ['conferencia', 'conferencias', 'evento', 'eventos', 'charla', 'ponente', 'exposicion', 'presentacion en vivo', 'donde os veo', 'acto publico'], r: 'Organizamos y participamos en <strong>conferencias y eventos</strong> sobre el efecto piramidal a nivel internacional. Son una oportunidad para conocer al equipo en persona y profundizar en la ciencia piramidal.\n\n¿Quieres ver las próximas conferencias?', a: '/conferencias.html', q: 'Ver conferencias' },

    // Datos de contacto específico
    { cat: 'datos_contacto', k: ['datos de contacto', 'datos contacto', 'donde estais', 'direccion', 'donde os encontrais', 'ubicacion', 'localizacion', 'donde quedeis', 'pais', 'donde estan'], r: 'Puedes encontrar todos nuestros <strong>datos de contacto</strong> (teléfono, email, dirección y horarios) en la sección de contacto.\n\n¿Quieres ver la página de contacto?', a: 'https://wa.me/' + WHATSAPP, q: 'Abrir WhatsApp', extra: { a: 'tel:+34639284787', q: 'Llamar por teléfono' } },

    // Envío específico
    { cat: 'envio_info', k: ['envio de piramides', 'enviar piramide', 'como llega', 'como me llega', 'transporte', 'logistica', 'aduana'], r: 'Realizamos envíos de pirámides a todo el mundo con embalaje especial para proteger el producto. El envío incluye seguro y seguimiento.\n\n¿Quieres más información sobre envíos?', a: 'https://wa.me/' + WHATSAPP + '?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20env%C3%ADos%20de%20pir%C3%A1mides', q: 'Info envíos por WhatsApp' },

    // Terapias en centros
    { cat: 'centro_tipi', k: ['tipi', 'centro tipi', 'terapia en centro', 'sesion piramidal', 'ir a terapia', 'recibir terapia', 'sesion presencial'], r: 'El <strong>Centro Terapéutico Tipi</strong> ofrece sesiones presenciales de terapia piramidal. Es ideal si quieres probar el efecto piramidal antes de comprar.\n\n¿Quieres más información sobre el centro?', a: '/centros-terapia.html', q: 'Ver centros de terapia', extra: { a: 'https://wa.me/' + WHATSAPP + '?text=Hola%2C%20me%20gustar%C3%ADa%20info%20sobre%20el%20Centro%20Tipi', q: 'Info Tipi por WhatsApp' } },

    // Términos legales
    { cat: 'legal', k: ['terminos', 'condiciones', 'aviso legal', 'legal', 'derechos de autor', 'privacidad', 'politica', 'terminos y condiciones'], r: 'Puedes consultar nuestros <strong>términos y condiciones, avisos legales y derechos de autor</strong> contactándonos directamente.\n\n¿Quieres ver los términos legales?', a: 'https://wa.me/' + WHATSAPP + '?text=Hola%2C%20me%20gustar%C3%ADa%20ver%20los%20t%C3%A9rminos%20legales%20y%20condiciones', q: 'Ver términos legales por WhatsApp' }
  ];

  var quickActions = [
    { label: '💰 Precios', text: '¿Cuánto cuestan las pirámides?' },
    { label: '🛏️ Piramicama', text: 'Háblame de la Piramicama' },
    { label: '🔬 Efecto piramidal', text: '¿Qué es el efecto piramidal?' },
    { label: '📅 Agendar cita', text: 'Quiero agendar una cita' },
    { label: '📦 Envíos', text: '¿Hacéis envíos internacionales?' },
    { label: '📞 Contacto', text: '¿Cómo puedo contactar?' }
  ];

  // Normalize text: remove accents, lowercase
  function normalize(text) {
    return text.toLowerCase().trim()
      .replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i')
      .replace(/ó/g, 'o').replace(/ú/g, 'u').replace(/ü/g, 'u')
      .replace(/ñ/g, 'n').replace(/¿/g, '').replace(/¡/g, '');
  }

  function findResponse(text) {
    var lower = normalize(text);
    var words = lower.split(/\s+/).filter(function(w) { return w.length > 0; });
    var results = [];

    for (var i = 0; i < knowledge.length; i++) {
      var entry = knowledge[i];
      var entryScore = 0;
      for (var j = 0; j < entry.k.length; j++) {
        var kw = normalize(entry.k[j]);
        if (lower.indexOf(kw) !== -1) {
          // Score: longer keywords get exponentially higher score
          // This ensures "avales" (6 chars) beats "vale" (4 chars) when "avales" is matched
          var s = kw.length * kw.length;
          if (s > entryScore) entryScore = s;
        }
      }
      if (entryScore > 0) {
        results.push({ entry: entry, score: entryScore });
      }
    }

    // Sort by score descending
    results.sort(function (a, b) { return b.score - a.score; });

    if (results.length > 0) {
      var best = results[0].entry;
      // If greeting is matched but there are other matches, prefer the other
      if (best.cat === 'greeting' && results.length > 1) {
        best = results[1].entry;
      }
      // If thanks is matched but there are other matches with similar score, prefer the other
      if (best.cat === 'thanks' && results.length > 1 && results[1].score >= best.score * 0.5) {
        best = results[1].entry;
      }
      return best;
    }

    // Fallback: suggest topics + WhatsApp
    var suggestions = [
      'Puedo ayudarte con: precios, modelos de pirámides, efecto piramidal, salud, testimonios, envíos, agendar una cita, avales, o contacto.\n\n¿Sobre cuál de estos temas quieres información? También puedes escribirnos directamente por WhatsApp.',
      'No tengo una respuesta exacta para eso, pero puedo conectarte con nuestro equipo. Escríbenos por WhatsApp y te atenderemos personalmente.',
      'Parece que no tengo información específica sobre eso. Prueba a preguntarme sobre: precios, modelos (Piramicama, Hygia, Hércules), efecto piramidal, salud, testimonios, construcción, libros, videos, viaje a Egipto, avales, o agendar una cita.'
    ];
    return {
      r: suggestions[Math.floor(Math.random() * suggestions.length)],
      a: 'https://wa.me/' + WHATSAPP,
      q: 'Contactar por WhatsApp'
    };
  }

  function createChatbot() {
    if (document.querySelector('.pm-chat-widget')) return;

    var widget = document.createElement('div');
    widget.className = 'pm-chat-widget';

    var toggle = document.createElement('button');
    toggle.className = 'pm-chat-toggle';
    toggle.innerHTML = '<img src="' + LOGO_URL + '" alt="Asistente Piramicasa" />';
    toggle.setAttribute('aria-label', 'Abrir asistente Piramicasa');

    var badge = document.createElement('span');
    badge.className = 'pm-chat-badge';
    badge.textContent = '1';
    toggle.appendChild(badge);

    var panel = document.createElement('div');
    panel.className = 'pm-chat-panel';

    var header = document.createElement('div');
    header.className = 'pm-chat-header';
    header.innerHTML = '<div class="pm-chat-header-info"><div class="pm-chat-avatar"><img src="' + LOGO_URL + '" alt="Piramicasa" /></div><div><div class="pm-chat-name">Asistente Piramicasa</div><div class="pm-chat-status">En línea · Responde al instante</div></div></div><a href="https://wa.me/' + WHATSAPP + '" class="pm-chat-wa-btn" target="_blank" rel="noopener" aria-label="WhatsApp"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></a><button class="pm-chat-close" aria-label="Cerrar">×</button>';

    var messages = document.createElement('div');
    messages.className = 'pm-chat-messages';

    var inputArea = document.createElement('div');
    inputArea.className = 'pm-chat-input-area';

    var input = document.createElement('input');
    input.type = 'text';
    input.className = 'pm-chat-input';
    input.placeholder = 'Escribe tu pregunta...';

    var sendBtn = document.createElement('button');
    sendBtn.className = 'pm-chat-send';
    sendBtn.innerHTML = '➤';
    sendBtn.setAttribute('aria-label', 'Enviar');

    inputArea.appendChild(input);
    inputArea.appendChild(sendBtn);

    panel.appendChild(header);
    panel.appendChild(messages);
    panel.appendChild(inputArea);
    widget.appendChild(toggle);
    widget.appendChild(panel);
    document.body.appendChild(widget);

    // Welcome message
    function addMessage(text, isBot, action) {
      var msg = document.createElement('div');
      msg.className = 'pm-chat-msg ' + (isBot ? 'pm-chat-bot' : 'pm-chat-user');
      var bubble = document.createElement('div');
      bubble.className = 'pm-chat-bubble';
      bubble.innerHTML = text.replace(/\n/g, '<br>');
      msg.appendChild(bubble);
      if (action) {
        var btn = document.createElement('a');
        btn.className = 'pm-chat-action';
        btn.textContent = action.q;
        btn.href = action.a;
        if (action.a.indexOf('http') === 0) {
          btn.target = '_blank';
          btn.rel = 'noopener';
        }
        bubble.appendChild(btn);
        // Extra action button if available
        if (action.extra) {
          var btn2 = document.createElement('a');
          btn2.className = 'pm-chat-action pm-chat-action-2';
          btn2.textContent = action.extra.q;
          btn2.href = action.extra.a;
          if (action.extra.a.indexOf('http') === 0 || action.extra.a.indexOf('tel:') === 0) {
            if (action.extra.a.indexOf('http') === 0) { btn2.target = '_blank'; btn2.rel = 'noopener'; }
          }
          bubble.appendChild(btn2);
        }
      }
      messages.appendChild(msg);
      messages.scrollTop = messages.scrollHeight;
    }

    function addQuickActions() {
      var qa = document.createElement('div');
      qa.className = 'pm-chat-quick';
      quickActions.forEach(function (action) {
        var btn = document.createElement('button');
        btn.className = 'pm-chat-quick-btn';
        btn.textContent = action.label;
        btn.addEventListener('click', function () {
          qa.remove();
          addMessage(action.text, false);
          setTimeout(function () {
            var resp = findResponse(action.text);
            addMessage(resp.r, true, resp.a ? resp : null);
          }, 500);
        });
        qa.appendChild(btn);
      });
      messages.appendChild(qa);
      messages.scrollTop = messages.scrollHeight;
    }

    function sendMessage() {
      var text = input.value.trim();
      if (!text) return;
      addMessage(text, false);
      input.value = '';
      // Typing indicator
      var typing = document.createElement('div');
      typing.className = 'pm-chat-msg pm-chat-bot pm-chat-typing';
      typing.innerHTML = '<div class="pm-chat-bubble"><span class="pm-chat-dot"></span><span class="pm-chat-dot"></span><span class="pm-chat-dot"></span></div>';
      messages.appendChild(typing);
      messages.scrollTop = messages.scrollHeight;
      setTimeout(function () {
        typing.remove();
        var resp = findResponse(text);
        addMessage(resp.r, true, resp.a ? resp : null);
      }, 600 + Math.random() * 400);
    }

    // Show welcome
    setTimeout(function () {
      addMessage('¡Hola! 👋 Soy el <strong>asistente virtual de Piramicasa</strong>. Puedo guiarte por nuestra web y ayudarte con:\n• 📋 Información sobre pirámides y modelos\n• 💰 Precios y presupuestos\n• 📅 Agendar una consulta\n• 🔬 Ciencia del efecto piramidal\n• 📦 Envíos y contacto\n\nEscribe tu pregunta o usa los botones de abajo 👇', true);
      addQuickActions();
    }, 300);

    // Events
    toggle.addEventListener('click', function () {
      panel.classList.toggle('pm-chat-open');
      toggle.classList.toggle('pm-chat-active');
      if (badge.style.display !== 'none') {
        badge.style.display = 'none';
      }
      if (panel.classList.contains('pm-chat-open')) {
        input.focus();
      }
    });

    header.querySelector('.pm-chat-close').addEventListener('click', function () {
      panel.classList.remove('pm-chat-open');
      toggle.classList.remove('pm-chat-active');
    });

    sendBtn.addEventListener('click', sendMessage);
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') sendMessage();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      setTimeout(createChatbot, 500);
      setTimeout(createChatbot, 1500);
    });
  } else {
    setTimeout(createChatbot, 500);
    setTimeout(createChatbot, 1500);
  }
})();
