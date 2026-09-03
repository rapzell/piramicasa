"use client";
import "./piramicasa.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useGsapAnimations } from "./components/useGsapAnimations";
import PmParticles from "./components/PmParticles";
import PmFooter from "./components/PmFooter";

export default function Page() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [expandedProduct, setExpandedProduct] = useState<number | null>(null);
  const [avalIdx, setAvalIdx] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useGsapAnimations();

  const products = [
    {
      name: "Piramicama Estándar",
      desc: "Estructura piramidal de aluminio de extrema pureza sobre base de madera tatami. Diseñada para colocar sobre la cama y mejorar la calidad del sueño, la regeneración física y el bienestar general.",
      img: "/assets/piramicasa/piramicama_piramicama-dorada-alta-01.jpg",
      features: ["Antirreumática", "Miorrelajante", "Antibacterias", "Antioxidante", "Desinflamatoria", "Sedante"],
      moreInfo: [
        { title: "Estructura piramidal", text: "De 25 a 30 Kg de aluminio de extrema pureza, de 1,50 a 2,30 m de lado, con más silicio y magnesio (paramagnéticos). Calidad garantizada por escrito. Pirámide de 3 mm de espesor y 100 mm de ala, en ángulos perfectos. Incluye cuatro orgonitas de perfecta calidad." },
        { title: "Modelo Ulises reforzado", text: "El modelo reforzado Ulises duplica la masa de la Piramicama estándar, alcanzando 2,6 veces más potencia a efectos orgánicos. Acelera procesos en todos los tratamientos, haciendo más cortos los momentos de crisis curativas." },
        { title: "Base de madera (tatami)", text: "Fabricada con tableros marinos especiales y melaminas de excelente calidad. Suma otros 30 a 55 Kg e incluye somieres integrados. Amplio catálogo de colores y símiles de maderas." },
        { title: "Colchón opcional", text: "Puede incluir un colchón a medida (a precio de coste), fabricado en espuma de alta densidad y viscoelástica, o adaptar uno preexistente sin metales." },
        { title: "Colores personalizados", text: "Imprimadas y pintadas en colores a elección o decoraciones personalizadas, sin tóxicos. Amplia gama de colores ecológicos disponibles." },
      ],
    },
    {
      name: "Piramicama Hércules",
      desc: "Modelo reforzado, casi cuatro veces más potente que la Piramicama estándar. Destinada al tratamiento de reumatismo crónico, esclerosis e infecciones. Para quienes necesitan máxima potencia terapéutica.",
      img: "/assets/piramicasa/hercules_piramide-hercules-verde.jpg",
      features: ["4x potencia", "Reumatismo crónico", "Esclerosis", "Infecciones crónicas", "Alta pureza", "Certificada"],
      moreInfo: [
        { title: "Indicaciones terapéuticas", text: "Tratamiento efectivo contra dolencias reumáticas, escleróticas, fibromialgia e infecciosas incluyendo septicemia grave. Sin efectos secundarios indeseables. Usada por bomberos, policías y deportistas de élite para recuperación rápida." },
        { title: "Estructura piramidal", text: "De 100 a 150 Kg de aluminio de alta pureza, 2,40 m de lado y 1,528 m de altura. Caras con puertas corredizas sobre riel de aluminio o pivotantes. El modelo Superior lleva 30 Kg más en pletinas, equivaliendo a 6x la potencia de la Piramicama Estándar." },
        { title: "Versión Laboratorio", text: "Para tratamiento de semillas, agua, mejora de licores y potenciación de medicamentos. Permite descontaminar muestras, deteniendo proliferación bacteriana. Produce deshidratación y momización de productos." },
        { title: "Base de madera y colchón", text: "Tatami de 60 a 80 Kg con somier integrado, fabricado en tableros marinos con melamina de excelente calidad. Colchón opcional de 220x220 cm en espuma de alta densidad y viscoelástica." },
      ],
    },
    {
      name: "Hygia & Horus",
      desc: "Pirámides terapéuticas menores para médicos y terapeutas. Terapias localizadas: esguinces, heridas, infecciones. Complemento ideal antes del masaje o ejercicios fisioterapéuticos.",
      img: "/assets/piramicasa/hygia_piramides_hygia_horus.jpg",
      features: ["Terapia localizada", "Esguinces", "Heridas", "Pre-masaje", "Portátil", "Consultorio"],
      moreInfo: [
        { title: "Hygia: para consultorio", text: "80 cm de lado, 10 Kg (17 Kg versión HP). Ideal para tratar superficies y volúmenes mayores: infecciones intestinales, gangrenas en personas grandes. Fabricada en aluminio de alta pureza." },
        { title: "Horus: para domicilios", text: "60 cm de lado, 6,7 Kg (10 Kg versión HP). Más práctica para consultas y atenciones domiciliarias. Cabe en cualquier maletero. Se envía por correo con todos sus accesorios." },
        { title: "Experiencia documentada", text: "Tenemos experiencias documentadas sobre septicemias y necrosis tratadas con éxito utilizando sólo una pirámide Hygia. Ambas cubren todo el espectro antropométrico, desde niños pequeños hasta personas corpulentas." },
        { title: "Precios orientativos", text: "Hygia simple: aproximadamente 950€. Horus simple: aproximadamente 700€. Mesa terapéutica en PVC: 100-200€. Adquisición de ambas con descuento importante." },
      ],
    },
    {
      name: "Bungalow Piramidal Sekhmet",
      desc: "Caseta piramidal habitable de 25 a 36 m². Estructura de aluminio con caras en tablero marino. Cabinas terapéuticas con todos los beneficios de la pirámide. No requiere permisos de obra en zonas rurales.",
      img: "/assets/piramicasa/bungalow_casa_piramidal_sekhmet.jpg",
      features: ["25-36 m²", "Habitable", "Aluminio + madera", "Baño completo", "Jaula Faraday opcional", "30 días montaje"],
      moreInfo: [
        { title: "Versatilidad", text: "No son casas prefabricadas. Ideales como casita de fin de semana en parcelas rurales, casita de invitados, complejos de bungalows comerciales, consultorios terapéuticos o para veterinarios y agricultores." },
        { title: "Estructura y materiales", text: "Estructura totalmente en aluminio de extrema pureza. Caras interior y exterior en tablero marino derivado de madera de abedul, primera calidad. Puerta pivotante lateral. Ventanas corredizas o pivotantes." },
        { title: "Baño y accesorios", text: "Baño completo según modelo: inodoro, bidet y lavabo (ducha según tamaño). Mampara interior de policarbonato traslúcido. Armarios aprovechando el ángulo inferior. Cubierta en pinturas especiales, polímeros o cerámica." },
        { title: "Opción Jaula Faraday", text: "Caras cubiertas con placas para cerrar la Jaula Faraday, impermeable a radiaciones electromagnéticas (contra tormentas solares, 5G y otras ondas no ionizantes deletéreas para la salud)." },
        { title: "Plazo de construcción", text: "Una semana después de hecha la base, se comienza el montaje. Tiempo aproximado: 30 días, dependiendo del clima y las opciones constructivas." },
      ],
    },
    {
      name: "Piramicasa Vital",
      desc: "Construcción de casa piramidal completa en su terreno. Ecológica, confortable, con todas las ventajas de la Pirámide Perfecta. Servicio llave en mano en cualquier país o asesoría técnica.",
      img: "/assets/piramicasa/vital_piramicasa_vital_01.jpg",
      features: ["Llave en mano", "Ecológica", "Internacional", "Asesoría técnica", "Impermeabilización", "Climatización"],
      moreInfo: [
        { title: "Una vivienda superior", text: "La Piramicasa Vital es mucho más que una casa. Es un tipo de vivienda superior a todo lo construido en la arquitectura moderna, con características ecológicas y energía ilimitada del campo magnético terrestre." },
        { title: "Dimensiones", text: "Modelo Vital: 11 metros de base, 121 m² de planta baja y 7 metros de altura total. Planta superior con 25 m² útiles. Dos dormitorios en planta baja, segundo dormitorio u oficina en planta alta con baño." },
        { title: "Materiales y calidades", text: "Estructura completamente de aluminio especial de extrema pureza. Ventanas adecuadas a las caras inclinadas. La memoria de calidades total se define junto con el cliente. Maderas laminadas, vidrio y aluminio de las mejores calidades homologadas." },
        { title: "Ecológica y sismorresistente", text: "Desarrollada merced a investigación científica. Ecológica, eolorresistente y sismorresistente. No comparable a ninguna casa prefabricada convencional." },
      ],
    },
    {
      name: "Pirámide Jardín",
      desc: "Pirámide para meditación en patio, jardín o habitación zen. De 6,25 m² (2,5x2,5m) hasta 16 m² (4x4m). Con o sin base de madera. Un espacio de calma y conexión.",
      img: "/assets/piramicasa/pirajardin_piramide_zen.jpg",
      features: ["Meditación", "6-16 m²", "Interior/exterior", "Base opcional", "Zen", "Calma"],
      moreInfo: [
        { title: "Para jardines zen y hoteles rurales", text: "Adecuadas para jardines de estilo zen, hoteles rurales con zonas de relajación o cualquier lugar donde se desee disfrutar de su estética y efectos terapéuticos. Efecto relajante muscular y tonificador del sistema nervioso." },
        { title: "Estructura piramidal", text: "Mínimo 25 Kg de aluminio de alta pureza, hasta 2,50 m de lado. Pirámide de 3 mm de espesor y 100 mm de ala en ángulos perfectos. Modelo reforzado Ulises disponible con aumento importante de potencia." },
        { title: "Base de madera opcional", text: "Tatami calzado fabricado con materiales de calidad, adecuado para interiores. Sin base para exteriores." },
        { title: "Envío e instalación", text: "Estructura prearmada lista para ensamblar en 20 minutos. Envío por avión hasta 2,40 m de lado. En España, Francia, Portugal y Argentina se hacen instalaciones personalizadas." },
        { title: "Precios orientativos", text: "Hasta 2,5 m: aproximadamente 3.000€. Con tatami: 3.000-3.500€. De 3 m: aproximadamente 4.200€. De 4 m: 7.500-12.600€. Piramipérgola: aproximadamente 25.000€." },
      ],
    },
    {
      name: "Piramascota",
      desc: "Caseta piramidal para mascotas. Los animales también se benefician del efecto piramidal: mejor descanso, mejor salud, menos estrés. Disponible en varios tamaños para perros, gatos y otros animales.",
      img: "/assets/piramicasa/mascotas_piramascota01.jpg",
      features: ["Para perros y gatos", "Mejor descanso", "Menos estrés", "Salud mejorada", "Varios tamaños", "Aluminio puro"],
      moreInfo: [
        { title: "Los animales también se benefician", text: "Igual que las personas, los animales se benefician del efecto piramidal. Ellos no pueden ser sugestionados con el efecto placebo, así que son los mejores referentes. Además de gustarles estar en las pirámides, demuestran que el efecto piramidal es real." },
        { title: "Estructura y materiales", text: "Aluminio de alta pureza endurecido al sílice. Pirámide de 3 mm de espesor y 100 mm de ala en ángulos perfectos. Cubierta de policarbonato alveolar o tablero marino tratado según tamaño y lugar." },
        { title: "Dimensiones", text: "Desde 60 cm para animales pequeños hasta casitas para caballos. Las de 2 metros son ideales para la mayoría de perros, especialmente si hay más de uno en casa." },
        { title: "Usos especiales: apicultura", text: "El efecto piramidal protege de varias enfermedades y elimina la ascosferosis mediante antipirámide. La producción de miel aumenta entre 20 y 25% en colmenas tratadas. Erradicación con costos mínimos." },
        { title: "Instalación y precios", text: "En España, Portugal y Francia instalamos personalmente. Modelo exterior 2,5 m: 5.400€ instalada. Modelos de 2,10 m y 1,20 m para interior: según diseño y tamaño." },
      ],
    },
  ];

  const tabLabels = ["Camas Piramidales", "Pirámides Menores", "Casas y Bungalows", "Pirámide Jardín", "Piramascota"];
  const tabGroups = [[0, 1], [2], [3, 4], [5], [6]];

  const goToTab = (tabIdx: number) => {
    setActiveTab(tabIdx);
    setTimeout(() => {
      document.getElementById("productos")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setAvalIdx((prev) => (prev + 1) % avales.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const avales = [
    { img: "/assets/piramicasa/aval_efecto_piramidal_consejo_cientifico_camaguey_lg_01.jpg", title: "Consejo Científico de Camagüey" },
    { img: "/assets/piramicasa/aval_efecto_piramidal_ministerio_salud_lg_02.jpg", title: "Ministerio de Salud" },
    { img: "/assets/piramicasa/aval_efecto_piramidal_direccion_provincial_salud_lg_03.jpg", title: "Dirección Provincial de Salud" },
    { img: "/assets/piramicasa/aval_efecto_piramidal_hospital_manuel_domenech_lg_04.jpg", title: "Hospital Manuel Domenech" },
    { img: "/assets/piramicasa/aval_efecto_piramidal_grupo_provincial_ortopedia_lg_05.jpg", title: "Grupo Provincial de Ortopedia" },
    { img: "/assets/piramicasa/aval_efecto_piramidal_delegacion_provincial_citma_lg_06.jpg", title: "Delegación Provincial CITMA" },
    { img: "/assets/piramicasa/aval_efecto_piramidal_instituto_superior_ciencias_medicas_lg_07.jpg", title: "Instituto Superior de Ciencias Médicas" },
    { img: "/assets/piramicasa/aval_efecto_piramidal_complejo_cientifico_frank_pais_lg_08.jpg", title: "Complejo Científico Frank País" },
    { img: "/assets/piramicasa/aval_efecto_piramidal_catedra_medicina_camaguey_lg_09.jpg", title: "Cátedra de Medicina de Camagüey" },
    { img: "/assets/piramicasa/aval_efecto_piramidal_hospital_militar_mnt_lg_10.jpg", title: "Hospital Militar MNT" },
    { img: "/assets/piramicasa/aval_efecto_piramidal_hospital_militar_ortopedia_lg_11.jpg", title: "Hospital Militar de Ortopedia" },
    { img: "/assets/piramicasa/aval_efecto_piramidal_certificacion_notarial_lg_12.jpg", title: "Certificación Notarial" },
    { img: "/assets/piramicasa/aval_efecto_piramidal_cenament_13.jpg", title: "Cenament" },
  ];

  return (
    <div className="pm-page">
      <PmParticles />
      {/* HEADER */}
      <header className={`pm-header${scrolled ? " pm-scrolled" : ""}`}>
        <div className="pm-header-left">
          <div>
            <a href="/" className="pm-logo">Pirami<span>casa</span></a>
            <div className="pm-tagline">Ciencia y Técnica de las Pirámides</div>
          </div>
        </div>

        <nav className="pm-nav">
          <div className="pm-nav-item">
            <a href="#inicio">Inicio</a>
          </div>
          <div className="pm-nav-item"
            onMouseEnter={() => setOpenDropdown("piramides")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <a href="#productos" onClick={(e) => { e.preventDefault(); setOpenDropdown(openDropdown === "piramides" ? null : "piramides"); }}>Pirámides <span className="pm-nav-arrow">▼</span></a>
            <div className={`pm-dropdown${openDropdown === "piramides" ? " pm-dropdown-show" : ""}`}>
              <a href="#productos" onClick={(e) => { e.preventDefault(); goToTab(0); setOpenDropdown(null); }}>Camas Piramidales</a>
              <a href="#productos" onClick={(e) => { e.preventDefault(); goToTab(2); setOpenDropdown(null); }}>Casas y Bungalows</a>
              <a href="#productos" onClick={(e) => { e.preventDefault(); goToTab(1); setOpenDropdown(null); }}>Pirámides Menores</a>
              <a href="#productos" onClick={(e) => { e.preventDefault(); goToTab(3); setOpenDropdown(null); }}>Pirámide Jardín</a>
              <a href="#productos" onClick={(e) => { e.preventDefault(); goToTab(2); setOpenDropdown(null); }}>Pirámide Faraday</a>
              <a href="#productos" onClick={(e) => { e.preventDefault(); goToTab(4); setOpenDropdown(null); }}>Piramascota</a>
            </div>
          </div>
          <div className="pm-nav-item"
            onMouseEnter={() => setOpenDropdown("ciencia")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <a href="#ciencia" onClick={(e) => { e.preventDefault(); setOpenDropdown(openDropdown === "ciencia" ? null : "ciencia"); }}>Ciencia <span className="pm-nav-arrow">▼</span></a>
            <div className={`pm-dropdown${openDropdown === "ciencia" ? " pm-dropdown-show" : ""}`}>
              <a href="#beneficios" onClick={() => setOpenDropdown(null)}>13 Beneficios</a>
              <Link href="/salud" onClick={() => setOpenDropdown(null)}>Salud y Terapias</Link>
              <Link href="/enfermedades" onClick={() => setOpenDropdown(null)}>Enfermedades Tratadas</Link>
              <a href="#estudios" onClick={() => setOpenDropdown(null)}>Estudios Científicos</a>
              <a href="#avales" onClick={() => setOpenDropdown(null)}>Avales y Certificados</a>
              <a href="#faq" onClick={() => setOpenDropdown(null)}>Preguntas Frecuentes</a>
            </div>
          </div>
          <div className="pm-nav-item"
            onMouseEnter={() => setOpenDropdown("nosotros")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <a href="#nosotros" onClick={(e) => { e.preventDefault(); setOpenDropdown(openDropdown === "nosotros" ? null : "nosotros"); }}>Nosotros <span className="pm-nav-arrow">▼</span></a>
            <div className={`pm-dropdown${openDropdown === "nosotros" ? " pm-dropdown-show" : ""}`}>
              <Link href="/historia" onClick={() => setOpenDropdown(null)}>Historia de Piramicasa</Link>
              <Link href="/presentacion" onClick={() => setOpenDropdown(null)}>Presentación del Director</Link>
              <Link href="/documento-critico" onClick={() => setOpenDropdown(null)}>Documento Crítico</Link>
              <Link href="/conferencias" onClick={() => setOpenDropdown(null)}>Conferencias y Talleres</Link>
              <Link href="/videos" onClick={() => setOpenDropdown(null)}>Videos</Link>
              <Link href="/centros-terapia" onClick={() => setOpenDropdown(null)}>Centros de Terapia</Link>
              <Link href="/testimonios" onClick={() => setOpenDropdown(null)}>Testimonios</Link>
              <Link href="/menu-principal" onClick={() => setOpenDropdown(null)}>Menú Principal</Link>
            </div>
          </div>
          <div className="pm-nav-item">
            <Link href="/libros">Libros</Link>
          </div>
          <div className="pm-nav-item pm-nav-egipto">
            <Link href="/viaje-egipto">Viaje a Egipto</Link>
          </div>
          <div className="pm-nav-item">
            <a href="#contacto">Contacto</a>
          </div>
        </nav>

        <div className="pm-header-right">
          <a href="tel:+34681087539" className="pm-phone">+34 681 087 539</a>
          <div className="pm-lang">
            <a href="#" className="pm-active">ES</a>
            <a href="#">EN</a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="pm-hero" id="inicio">
        <div className="pm-hero-label" data-anim="hero-label">Desde 1972 · Investigación piramidal</div>
        <h1 data-anim="hero-title">
          Duerme en una <em>pirámide</em><br />y recupera tu energía
        </h1>
        <p data-anim="hero-text">
          Descubre el poder del Efecto Piramidal. Ciencia y bienestar en un solo lugar.
          Fabricamos pirámides terapéuticas con precisión técnica desde 2001.
        </p>
        <div className="pm-hero-ctas">
          <a href="#productos" className="pm-btn pm-btn-primary" data-anim="hero-cta">Descubre cómo</a>
          <a href="#contacto" className="pm-btn pm-btn-outline" data-anim="hero-cta">Solicita información</a>
        </div>
        <div className="pm-scroll-indicator" data-anim="scroll-indicator">
          <span>Scroll</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* TRIANGLE DIVIDER */}
      <div style={{ background: "var(--pm-verde-deep)", paddingBottom: "48px" }}>
        <div className="pm-triangle pm-triangle-cream" />
      </div>

      {/* ABOUT */}
      <section className="pm-section pm-section-cream" id="nosotros">
        <div>
          <div className="pm-label" data-anim="section-heading">Sobre Piramicasa</div>
          <h2 data-anim="section-heading">Inversión en salud, no en gasto</h2>
          <p className="pm-lead" data-anim="section-lead">
            Desde 1972 investigamos el Efecto Piramidal y desde 2001 fabricamos con enfoque técnico.
            Combinamos la sabiduría ancestral con la ingeniería moderna para ofrecerte bienestar,
            descanso y vitalidad. Miles de usuarios en todo el mundo ya disfrutan de nuestras pirámides.
          </p>
          <a href="#nosotros" className="pm-btn pm-btn-dark">Conoce nuestra historia</a>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="pm-section-full pm-section-dark">
        <div className="pm-section" style={{ maxWidth: "1100px" }}>
          <div className="pm-stats">
            <div className="pm-stat" data-anim="stat">
              <div className="pm-stat-num">50+</div>
              <div className="pm-stat-label">Años de investigación</div>
            </div>
            <div className="pm-stat" data-anim="stat">
              <div className="pm-stat-num">20+</div>
              <div className="pm-stat-label">Años fabricando</div>
            </div>
            <div className="pm-stat" data-anim="stat">
              <div className="pm-stat-num">1000s</div>
              <div className="pm-stat-label">Usuarios en el mundo</div>
            </div>
            <div className="pm-stat" data-anim="stat">
              <div className="pm-stat-num">5</div>
              <div className="pm-stat-label">Idiomas de asistencia</div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS WITH TABS */}
      <section className="pm-section pm-section-white" id="productos">
        <div>
          <div className="pm-label" data-anim="section-heading">Catálogo</div>
          <h2 data-anim="section-heading">Nuestros modelos</h2>
          <p className="pm-lead" data-anim="section-lead">
            Cada pirámide está diseñada con proporciones exactas y materiales nobles.
            Elige la categoría que mejor se adapta a tus necesidades.
          </p>
        </div>

        <div>
          <div className="pm-tabs">
            {tabLabels.map((label, i) => (
              <button
                key={i}
                className={`pm-tab${activeTab === i ? " pm-tab-active" : ""}`}
                onClick={() => setActiveTab(i)}
              >
                {label}
              </button>
            ))}
          </div>

          {tabGroups.map((group, tabIdx) => (
            <div key={tabIdx} className={`pm-tab-content${activeTab === tabIdx ? " pm-tab-active" : ""}`}>
              {group.map((prodIdx) => {
                const p = products[prodIdx];
                return (
                  <div key={prodIdx} className="pm-product-showcase" data-anim="product-showcase" style={{ marginBottom: "64px" }}>
                    <div className="pm-product-info">
                      <h3>{p.name}</h3>
                      <p>{p.desc}</p>
                      <div className="pm-product-features">
                        {p.features.map((f, fi) => (
                          <div key={fi} className="pm-feature">
                            <div className="pm-feature-icon">✓</div>
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                      <div className="pm-product-actions">
                        <a href="#contacto" className="pm-btn pm-btn-primary">Solicitar presupuesto</a>
                        <button
                          className="pm-btn pm-btn-more-info"
                          onClick={() => setExpandedProduct(expandedProduct === prodIdx ? null : prodIdx)}
                        >
                          {expandedProduct === prodIdx ? "▲ Menos información" : "▼ Más información"}
                        </button>
                      </div>
                    </div>
                    <div className="pm-product-image" data-anim="product-image-parallax">
                      <img src={p.img} alt={p.name} />
                    </div>
                    {expandedProduct === prodIdx && p.moreInfo && (
                      <div className="pm-product-expanded">
                        {p.moreInfo.map((info, ii) => (
                          <div key={ii} className="pm-product-info-block">
                            <h4>{info.title}</h4>
                            <p>{info.text}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="pm-section-full pm-section-alt" id="beneficios">
        <div className="pm-section">
          <div>
            <div className="pm-label" data-anim="section-heading">Bienestar</div>
            <h2 data-anim="section-heading">13 ventajas de vivir en una pirámide</h2>
            <p className="pm-lead" data-anim="section-lead">
              La pirámide correctamente construida es antirreumática, miorrelajante,
              antibacterias, desinflamatoria, antioxidante y sedante. Todo sin efectos secundarios.
            </p>
          </div>
          <div className="pm-cards pm-cards-13" data-anim="benefit-cards" style={{ marginTop: "40px" }}>
            <div className="pm-card"><div className="pm-card-icon">✦</div><h3>1. Antirreumática</h3><p>Efecto antirreumático y antiesclerótico por reestructuración molecular natural. Sin efectos secundarios.</p></div>
            <div className="pm-card"><div className="pm-card-icon">⚔</div><h3>2. Bacteriostática</h3><p>Nada se pudre en el interior de la pirámide. Las bacterias infecciosas no prosperan.</p></div>
            <div className="pm-card"><div className="pm-card-icon">☀</div><h3>3. Antioxidante</h3><p>Elimina radicales libres sin químicos. Retrasa el envejecimiento celular en todos los órganos.</p></div>
            <div className="pm-card"><div className="pm-card-icon">⚖</div><h3>4. Miorrelajante</h3><p>Relajación profunda muscular y nerviosa. Corrige trastornos del sueño desde la primera noche.</p></div>
            <div className="pm-card"><div className="pm-card-icon">❄</div><h3>5. Desinflamatoria</h3><p>Antiinflamatorio potente y rápido sin efectos secundarios. Reduce hinchazón un 80% en la primera hora.</p></div>
            <div className="pm-card"><div className="pm-card-icon">☮</div><h3>6. Antiestrés</h3><p>Desaparecen la mayor parte de los trastornos del sueño. Más vitalidad y mejor calidad de descanso.</p></div>
            <div className="pm-card"><div className="pm-card-icon">∞</div><h3>7. Antivejez</h3><p>Prolongación de la vida celular. Efecto antiaging natural comprobado en insectos, plantas y animales.</p></div>
            <div className="pm-card"><div className="pm-card-icon">⚡</div><h3>8. Más vitalidad</h3><p>Acumulación de bio-energía (ORBs) por tensioactivación. Mayor resistencia orgánica y menos fatiga.</p></div>
            <div className="pm-card"><div className="pm-card-icon">✚</div><h3>9. Regeneración celular</h3><p>Acelera la recuperación de heridas, quemaduras y fracturas. Suelda huesos rápidamente y evita cicatrices.</p></div>
            <div className="pm-card"><div className="pm-card-icon">🛡</div><h3>10. Sistema inmunitario</h3><p>Refuerza las defensas naturales. Casi invulnerabilidad ante bacterias infecciosas, incluidas superbacterias.</p></div>
            <div className="pm-card"><div className="pm-card-icon">⚛</div><h3>11. Equilibrio biomagnético</h3><p>Recomposición del Par Biomagnético utilizando el campo magnético terrestre. No es invasiva.</p></div>
            <div className="pm-card"><div className="pm-card-icon">✓</div><h3>12. Sin efectos secundarios</h3><p>No crea dependencia ni efectos nocivos. No gasta electricidad. Respetuosa con el medio ambiente.</p></div>
            <div className="pm-card"><div className="pm-card-icon">⊕</div><h3>13. Compatible</h3><p>Compatible con cualquier otra terapia y generalmente coadyuvante. De fácil aplicación para terapeutas.</p></div>
          </div>
          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <Link href="/salud" className="pm-btn pm-btn-outline">Conocer todos los beneficios en detalle →</Link>
          </div>
        </div>
      </section>

      {/* SCIENCE SECTION */}
      <section className="pm-section-full pm-section-dark" id="ciencia">
        <div className="pm-section" style={{ maxWidth: "1200px" }}>
          <div>
            <div className="pm-label" style={{ color: "var(--pm-oro)" }} data-anim="section-heading">Fundamento</div>
            <h2 data-anim="section-heading">Ciencia y evidencia</h2>
            <p className="pm-lead" data-anim="section-lead">
              Recopilamos contenido técnico, divulgación y documentación para quienes desean
              comprender el fundamento práctico de la piramidología aplicada.
            </p>
          </div>

          {/* Estudios Científicos */}
          <div id="estudios" style={{ marginTop: "56px", scrollMarginTop: "80px" }}>
            <div className="pm-label" style={{ color: "var(--pm-oro)" }}>Investigación</div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", marginBottom: "16px", color: "var(--pm-crema)" }}>Estudios Científicos</h3>
            <p className="pm-glass-text" style={{ marginBottom: "32px" }}>
              Desde 1972 investigamos el efecto piramidal. Documentación técnica accesible y rigurosa
              sobre los efectos antirreumáticos, antibacterias y antioxidantes de las pirámides correctamente construidas.
            </p>
            <div className="pm-cards" data-anim="glass-cards">
              <div className="pm-glass">
                <h3 className="pm-glass-title">Precipitación salina</h3>
                <p className="pm-glass-text">Experimentos de precipitación salina que demuestran el efecto piramidal sobre la cristalización.</p>
              </div>
              <div className="pm-glass">
                <h3 className="pm-glass-title">Efecto bacteriostático</h3>
                <p className="pm-glass-text">Estudios que verifican la acción antibacterias sin dañar la flora intestinal.</p>
              </div>
              <div className="pm-glass">
                <h3 className="pm-glass-title">Regeneración celular</h3>
                <p className="pm-glass-text">Investigación sobre la mejora en la calidad del sueño y la regeneración física nocturna.</p>
              </div>
            </div>
          </div>

          {/* Avales y Certificados */}
          <div id="avales" style={{ marginTop: "56px", scrollMarginTop: "80px" }}>
            <div className="pm-label" style={{ color: "var(--pm-oro)" }}>Garantías</div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", marginBottom: "16px", color: "var(--pm-crema)" }}>Avales y Certificados</h3>
            <p className="pm-glass-text" style={{ marginBottom: "32px" }}>
              Organismos oficiales han demostrado las propiedades terapéuticas de las pirámides.
              Certificamos por escrito la calidad de todos nuestros productos.
            </p>

            <div className="pm-aval-carousel" data-anim="aval-carousel">
              <div className="pm-aval-main">
                <img src={avales[avalIdx].img} alt={avales[avalIdx].title} />
                <div className="pm-aval-caption">{avales[avalIdx].title}</div>
              </div>
              <div className="pm-aval-thumbs">
                {avales.map((a, i) => (
                  <button
                    key={i}
                    className={`pm-aval-thumb${avalIdx === i ? " pm-aval-thumb-active" : ""}`}
                    onClick={() => setAvalIdx(i)}
                  >
                    <img src={a.img} alt={a.title} />
                  </button>
                ))}
              </div>
            </div>

            <div className="pm-aval-recognition">
              <div className="pm-label" style={{ color: "var(--pm-oro)", marginTop: "32px" }}>Reconocimiento</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", marginBottom: "16px", color: "var(--pm-crema)" }}>
                Documento acreditativo de reconocimiento al Director
              </h3>
              <div className="pm-aval-doc">
                <img src="/assets/piramicasa/asociacion-Egipto-TB.jpg" alt="Reconocimiento al Director Gabriel Silva" />
              </div>
            </div>
          </div>

          {/* Preguntas Frecuentes */}
          <div id="faq" style={{ marginTop: "56px", scrollMarginTop: "80px" }}>
            <div className="pm-label" style={{ color: "var(--pm-oro)" }}>Dudas</div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", marginBottom: "16px", color: "var(--pm-crema)" }}>Preguntas Frecuentes</h3>
            <div style={{ display: "grid", gap: "16px", maxWidth: "800px" }}>
              <div className="pm-glass" data-anim="faq-item">
                <h3 className="pm-glass-title">¿La pirámide tiene efectos secundarios?</h3>
                <p className="pm-glass-text">No. La pirámide correctamente construida no tiene efectos secundarios. Es antirreumática, miorrelajante y sedante de forma natural.</p>
              </div>
              <div className="pm-glass" data-anim="faq-item">
                <h3 className="pm-glass-title">¿Cabe en mi dormitorio?</h3>
                <p className="pm-glass-text">Envíanos las medidas de tu habitación y las estaturas de los usuarios, y verificamos si cabe y cómo orientarla.</p>
              </div>
              <div className="pm-glass" data-anim="faq-item">
                <h3 className="pm-glass-title">¿Envían a todo el mundo?</h3>
                <p className="pm-glass-text">Sí. Fabricamos y enviamos a cualquier país. Para España, Portugal y Sur de Francia incluimos instalación.</p>
              </div>
              <div className="pm-glass" data-anim="faq-item">
                <h3 className="pm-glass-title">¿Qué materiales se usan?</h3>
                <p className="pm-glass-text">Aluminio de extrema pureza con más silicio y magnesio (paramagnéticos). Base de madera con tableros marinos de primera calidad.</p>
              </div>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <Link href="/salud" className="pm-btn pm-btn-primary">Explorar base científica</Link>
          </div>
        </div>
      </section>

      {/* TRUST / GLASS */}
      <section className="pm-section-full pm-section-alt">
        <div className="pm-section" style={{ maxWidth: "900px" }}>
          <div className="pm-glass-light">
            <div className="pm-label">Confianza</div>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>Experiencia, transparencia y respaldo</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "var(--pm-ink)", marginTop: "16px", fontWeight: 300 }}>
              Piramicasa integra investigación, fabricación y divulgación técnica con acompañamiento
              personalizado para usuarios y profesionales en todo el mundo.
            </p>
            <ul style={{ listStyle: "none", padding: 0, marginTop: "24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "12px" }}>
              <li className="pm-trust-item" data-anim="trust-item">✓ Atención directa por email y mensajería</li>
              <li className="pm-trust-item" data-anim="trust-item">✓ Información legal y garantías</li>
              <li className="pm-trust-item" data-anim="trust-item">✓ Red de centros terapéuticos</li>
              <li className="pm-trust-item" data-anim="trust-item">✓ Consultas especializadas</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pm-cta" data-anim="cta-section">
        <div>
          <div className="pm-label" style={{ color: "var(--pm-oro)" }}>Asesoría personalizada</div>
          <h3>¿Quieres una recomendación personalizada?</h3>
          <p>
            Te ayudamos a elegir el modelo, dimensiones y configuración más adecuada
            según tu uso terapéutico, habitacional o profesional.
          </p>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#contacto" className="pm-btn pm-btn-primary">Solicitar asesoramiento</a>
            <a href="#productos" className="pm-btn pm-btn-outline">Ver catálogo</a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="pm-section pm-section-cream" id="contacto">
        <div>
          <div className="pm-label">Contacto</div>
          <h2>Hablemos</h2>
          <p className="pm-lead">
            Atención personalizada para resolver dudas técnicas, elegir modelos y definir
            presupuesto según cada necesidad.
          </p>
        </div>
        <div className="pm-contact-grid">
          <div className="pm-contact-card" data-anim="contact-card">
            <h4>Datos de contacto</h4>
            <p><strong>Email:</strong> <a href="mailto:piramicasa@protonmail.com">piramicasa@protonmail.com</a></p>
            <p><strong>Teléfonos:</strong> +34 681087539 / +34 639284787</p>
            <p><strong>WhatsApp:</strong> +34 681087539</p>
            <p><strong>Asistencia:</strong> Español, inglés, francés, alemán y árabe.</p>
          </div>
          <div className="pm-contact-card" data-anim="contact-card">
            <h4>Horario de llamada (España)</h4>
            <ul className="pm-schedule">
              <li><span className="day">Lunes</span><span>12:00 - 21:00</span></li>
              <li><span className="day">Martes</span><span>12:00 - 21:00</span></li>
              <li><span className="day">Miércoles</span><span>12:00 - 21:00</span></li>
              <li><span className="day">Jueves</span><span>12:00 - 21:00</span></li>
              <li><span className="day">Viernes</span><span>12:00 - 21:00</span></li>
              <li><span className="day">Sábado</span><span>12:00 - 18:00</span></li>
              <li><span className="day">Domingo</span><span className="closed">Cerrado</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <PmFooter />

      <img src="/assets/piramicasa/logo-dorado.png" alt="Piramicasa" className="pm-logo-seal" data-anim="logo-seal" />
    </div>
  );
}
