"use client";
import "../piramicasa.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import PmHeader from "../components/PmHeader";
import PmParticles from "../components/PmParticles";
import PmFooter from "../components/PmFooter";
import { useGsapAnimations } from "../components/useGsapAnimations";

const testimonios = [
  {
    author: "Santos Murphy Juliá",
    location: "Argentina",
    date: "25 de Enero, 2015",
    category: "Veterinaria",
    title: "Recuperación de perra con pinzamiento medular",
    text: "Anita, una de nuestras perras, quedó totalmente inmovilizada en su tren posterior tras dar a luz. El veterinario diagnosticó pinzamiento medular y dijo que ya no había nada más que hacer. Empecé a hacerle sesiones de piramidoterapia con una pirámide pequeña de aluminio, de 20 a 25 minutos al día sobre la zona de las caderas. Al cuarto día, tras una sesión más larga de约60 minutos, Anita se despertó y empezó a caminar. El veterinario se impresionó al verla recuperada. Anita está viva gracias a la tecnología sagrada de las pirámides.",
    highlight: "Anita pasó de no poder moverse a caminar en 4 días de tratamiento piramidal.",
  },
  {
    author: "Santos Murphy Juliá",
    location: "Argentina",
    date: "18 de Septiembre, 2017",
    category: "Deportiva",
    title: "Curación de esguince de tobillo en una sesión",
    text: "Durante un partido de fútbol sufrí un esguince por eversión en el tobillo derecho. Al llegar a casa, coloqué el pie dentro de una pirámide de aluminio sobre dos sillas de madera, a la altura del vórtice central. Tras una sesión de 30 minutos no noté nada durante el tratamiento, pero al terminar me puse de pie y empecé a caminar normalmente, sin dolor. Podía trotar y saltar sin molestias. Al día siguiente sólo quedaba una pequeña molestia al bajar escalones, que se resolvió con algunas sesiones más. A día de hoy tengo el tobillo totalmente sano y fuerte.",
    highlight: "Esguince por eversión curado en una sola sesión de 30 minutos.",
  },
  {
    author: "Fernando",
    location: "España",
    date: "7 de Agosto, 2014",
    category: "Piramicama",
    title: "4 meses usando la Piramicama: 8 mejoras documentadas",
    text: "Tras cuatro meses durmiendo en la Piramicama: 1) Las infecciones de pequeños cortes se curan rapidísimo, las heridas cicatrizan sin marca. 2) Dejé de sangrar por la nariz, algo que me pasaba cada día desde pequeño en primavera y verano. 3) La rosácea se redujo un 75%. 4) Desapareció el bruxismo nocturno. 5) Las siestas ya no me sientan mal, me levanto como una rosa. 6) Las quemaduras con aloe vera no duelen nada. 7) Siento que la Piramicama no nos deja caer: lesiones que antes me habrían durado semanas se curan en horas. 8) La menstruación de Sonia pasó de ser muy dolorosa 15 días antes a leve y sólo un día.",
    highlight: "8 mejoras documentadas en 4 meses: cicatrización, rosácea, bruxismo, siestas, quemaduras, lesiones y menstruación.",
  },
  {
    author: "Randall Sánchez",
    location: "Costa Rica",
    date: "31 de Agosto, 2014",
    category: "Artrosis",
    title: "Recuperación al 100% de artrosis en columna vertebral",
    text: "Tras 8 años de paciencia, mi paciente se recuperó al 100% de artrosis en la columna vertebral, contra todos los pronósticos médicos. El tratamiento integral incluyó terapia de Amma masaje, agua piramidal y terapia piramidal. En otro caso, una paciente postrada en cama durante casi 3 semanas retomó sus clases de natación y aeróbicos tras colocar una pirámide invertida sobre sus rodillas. Con sólo 2 sesiones de 25 minutos logré ponerla en pie sin ningún dolor.",
    highlight: "Artrosis vertebral recuperada al 100% tras 8 años. Paciente postrada volvió a nadar en 2 sesiones.",
  },
  {
    author: "Luzia",
    location: "Portugal",
    date: "2 de Septiembre, 2014",
    category: "Terapia general",
    title: "Éxito en tratamientos con pirámide",
    text: "Agradezco a todos los emails informativos. He aprendido mucho con vosotros. He tenido éxito en los tratamientos que he hecho con mi pirámide, pero cada vez percibo más que la calidad del tratamiento tiene que ver con la calidad de la pirámide y con el saber del terapeuta. Agradezco a Gabriel y a Randall por sus enseñanzas.",
    highlight: "La calidad de la pirámide y del terapeuta son clave en el éxito del tratamiento.",
  },
  {
    author: "Lupe Catalá",
    location: "España",
    date: "1 de Septiembre, 2014",
    category: "Piramicama",
    title: "6 meses en la piramicama: mejor sueño, digestión y cero medicación",
    text: "Tras casi 6 meses durmiendo en la pirámide: he notado mejora en mis digestiones, se optimizan los procesos biológicos. Duermo mejor, recuerdo más los sueños. Cuando me acostaba con la tripa pesada, se me hacía liviana al poco rato. Y lo más importante: desde que tengo la pirámide no me he tomado ni medio ibuprofeno. Nada de nada, ninguna medicina.",
    highlight: "6 meses sin necesidad de ningún medicamento. Mejora de sueño y digestión.",
  },
  {
    author: "Juan Carlos M.S.",
    location: "Madrid, España",
    date: "17 de Mayo, 2014",
    category: "Piramicama",
    title: "Recuperación muscular, articular y de encías en una semana",
    text: "Tras una semana durmiendo en la Piramicama: excelente descanso nocturno y en siestas, sin pesadez. Noté fuerte sensación de calor en el muslo izquierdo (tenía debilidad muscular) que culminó en buen tono muscular. Misma sensación en la rodilla derecha con molestia de reúma incipiente, que desapareció. El brazo derecho recuperó tono muscular. Una inflamación en la encía superior derecha desapareció tras sensación de calor en la cara. Fuerte evacuación intestinal con grata sensación de limpieza interna. El efecto piramidal existe.",
    highlight: "Recuperación muscular, articular, gingival y limpieza interna en 7 días.",
  },
  {
    author: "J.M.Q.",
    location: "España",
    date: "22 de Febrero, 2010",
    category: "Reuma y Psoriasis",
    title: "Adiós al reuma tras 8 meses en la Piramicama",
    text: "Tras ocho meses con la Piramicama, casi he olvidado que alguna vez tuve reuma. Al principio los dolores aumentaron ligeramente, pero luego fui mejorando progresivamente. Los dedos de las manos se abren más, los pies se desincharon y pude volver a calzarme. La psoriasis casi no me molesta y sólo aparece con estrés. He hecho una excelente inversión. El que diga que el efecto piramidal es un mito es que sólo le sobra ignorancia.",
    highlight: "Reuma desaparecido y psoriasis casi inexistente tras 8 meses.",
  },
  {
    author: "L.P.J.",
    location: "España",
    date: "15 de Agosto, 2006",
    category: "Sangrado intestinal",
    title: "Un año sin sangrado intestinal tras década de sufrimiento",
    text: "Llevo ya un año con la Piramicama y no he vuelto a tener episodios de sangrado intestinal. Era lo único que me amargaba la vida y lo hizo por casi diez años. El sangrado desapareció en pocos días y no volvió nunca. En el sueño se nota mucho: duermo de un tirón, cuando antes me despertaba por cualquier tontería. La piramicama te obliga a quedarte cuando el cuerpo lo necesita.",
    highlight: "10 años de sangrado intestinal eliminados en pocos días. Un año sin recurrencias.",
  },
];

const categorias = [
  { name: "Veterinaria", icon: "🐾", count: 1 },
  { name: "Deportiva", icon: "⚽", count: 1 },
  { name: "Piramicama", icon: "🛏️", count: 4 },
  { name: "Artrosis", icon: "🦴", count: 1 },
  { name: "Reuma y Psoriasis", icon: "✋", count: 1 },
  { name: "Sangrado intestinal", icon: "🩸", count: 1 },
];

const videoTestimonios = [
  {
    id: "WPX04rEwO50",
    title: "Video Testimonial - Terapia Piramidal",
    description: "Los escépticos, detractores y nihilistas pueden empezar por este vídeo. Cedido por Fernando Fernandez Hoyos en 2015.",
    group: "Generales",
  },
  {
    id: "sbq_0mzrSQY",
    title: "Caso tratado con APS - Terapeuta Randall Sánchez",
    description: "Una vez más te envío un caso tratado con APS, definitivamente esta modalidad es una maravilla. Cuando vino no podía ni siquiera dar un paso, hoy con tan sólo 5 sesiones la di de alta. Su felicidad es palpable!",
    group: "Randall Sánchez",
  },
  {
    id: "VZdKge_uILs",
    title: "No sacrifique a su perro, hágale Piramidoterapia",
    description: "Santos Murphy muestra la recuperación de Anita, la perra que tras ser diagnosticada con pinzamiento medular y sentenciada a eutanasia, volvió a caminar gracias a la piramidoterapia.",
    group: "Santos Murphy",
  },
  {
    id: "vCbMyVaNQGQ",
    title: "Energía Piramidal en la Agricultura 1",
    description: "Realizaciones del equipo peruano dirigido por José Humberto Gamonal Cruz. Aplicación de energía piramidal en cultivos.",
    group: "Agricultura",
  },
  {
    id: "tJolH5AI6zA",
    title: "Energía Piramidal en la Agricultura 2",
    description: "Segunda parte de las realizaciones del equipo peruano sobre energía piramidal aplicada a la agricultura.",
    group: "Agricultura",
  },
  {
    id: "HRPJ1uOOzcc",
    title: "Recuperación de Artrosis en Columna Vertebral",
    description: "Randall Sánchez comparte el testimonio de recuperación al 100% de artrosis en la columna vertebral tras 8 años de tratamiento integral con terapia piramidal, Amma masaje y agua piramidal.",
    group: "Randall Sánchez",
  },
  {
    id: "1lG_qYhI6bo",
    title: "Recuperación de Rodilla - Caso 1",
    description: "Randall Sánchez trata a una paciente con dolor en rodillas usando pirámide invertida. Tras 2 sesiones de 25 minutos, la paciente pudo ponerse en pie sin dolor.",
    group: "Randall Sánchez",
  },
  {
    id: "YKaN7hsWfdI",
    title: "Recuperación de Rodilla - Caso 2",
    description: "Segundo caso de recuperación de rodilla tratado por Randall Sánchez con terapia piramidal.",
    group: "Randall Sánchez",
  },
  {
    id: "lKqi5kOxN7Y",
    title: "Recuperación de Pie",
    description: "Randall Sánchez trata un caso de recuperación de pie con terapia piramidal.",
    group: "Randall Sánchez",
  },
  {
    id: "uFoYUlWzTPk",
    title: "Tratamiento de Ciática",
    description: "Randall Sánchez trata un caso de ciática con terapia piramidal.",
    group: "Randall Sánchez",
  },
  {
    id: "k2D2p2T_hxc",
    title: "Esclerosis Múltiple Tipo RR",
    description: "Randall Sánchez comparte el tratamiento de un caso de esclerosis múltiple tipo remitente-recurrente con terapia piramidal.",
    group: "Randall Sánchez",
  },
];

const videoGroups = ["Generales", "Santos Murphy", "Randall Sánchez", "Agricultura"];

export default function TestimoniosPage() {
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useGsapAnimations();

  const filtered = activeCategory
    ? testimonios.filter((t) => t.category === activeCategory)
    : testimonios;

  return (
    <div className="pm-page">
      <PmParticles />
      <PmHeader />

      <section className="pm-subpage-hero" data-anim="subpage-hero">
        <div className="pm-subpage-hero-content">
          <div className="pm-label">Testimonios Reales</div>
          <h1>Testimonios de la Energía Piramidal</h1>
          <p>Curaciones y experimentos reales. Más de doscientos reportes documentados de personas y animales que han experimentado los beneficios de la terapia piramidal.</p>
        </div>
      </section>

      <section className="pm-section pm-section-cream">
        <div>
          <div className="pm-label" data-anim="section-heading">Casos documentados</div>
          <h2 data-anim="section-heading">Experiencias reales de curación</h2>
          <p className="pm-lead" data-anim="section-lead">
            Por razones de privacidad no suministramos datos personales. Aquí mostramos sólo algunos de los más de doscientos reportes por escrito, con los textos tal cual nos los envían, corrigiendo sólo la ortografía.
          </p>

          <div className="pm-testimonios-filters" data-anim="benefit-cards">
            <button
              className={`pm-testimonio-filter${activeCategory === null ? " pm-testimonio-filter-active" : ""}`}
              onClick={() => setActiveCategory(null)}
            >
              Todos ({testimonios.length})
            </button>
            {categorias.map((cat) => (
              <button
                key={cat.name}
                className={`pm-testimonio-filter${activeCategory === cat.name ? " pm-testimonio-filter-active" : ""}`}
                onClick={() => setActiveCategory(cat.name)}
              >
                {cat.icon} {cat.name} ({cat.count})
              </button>
            ))}
          </div>

          <div className="pm-testimonios-grid" data-anim="benefit-cards" style={{ marginTop: "40px" }}>
            {filtered.map((t, i) => (
              <div key={i} className="pm-testimonio-card">
                <div className="pm-testimonio-card-header">
                  <div className="pm-testimonio-avatar">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <h3 className="pm-testimonio-author">{t.author}</h3>
                    <div className="pm-testimonio-meta">
                      <span className="pm-testimonio-location">📍 {t.location}</span>
                      <span className="pm-testimonio-date">📅 {t.date}</span>
                    </div>
                  </div>
                  <span className="pm-testimonio-category">{t.category}</span>
                </div>
                <h4 className="pm-testimonio-title">{t.title}</h4>
                <p className="pm-testimonio-text">{t.text}</p>
                <div className="pm-testimonio-highlight">
                  <span className="pm-testimonio-highlight-icon">✦</span>
                  {t.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pm-section pm-section-alt">
        <div>
          <div className="pm-label" data-anim="section-heading">Videos Testimoniales</div>
          <h2 data-anim="section-heading">Terapia Piramidal en acción</h2>
          <p className="pm-lead" data-anim="section-lead">
            Videos reales de tratamientos piramidales: curaciones documentadas, experimentos en agricultura y casos clínicos tratados por terapeutas profesionales.
          </p>

          {videoGroups.map((group) => (
            <div key={group} style={{ marginTop: "48px" }}>
              <h3 className="pm-testimonio-video-group-title">{group}</h3>
              <div className="pm-testimonios-video-grid">
                {videoTestimonios.filter((v) => v.group === group).map((v) => (
                  <div key={v.id} className="pm-testimonio-video-card">
                    <div className="pm-testimonio-video-embed">
                      <iframe
                        src={`https://www.youtube.com/embed/${v.id}?rel=0`}
                        title={v.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <h4 className="pm-testimonio-video-title">{v.title}</h4>
                    <p className="pm-testimonio-video-desc">{v.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="pm-testimonio-video-extra">
            <div className="pm-testimonio-video-extra-item">
              <h4>Tratamiento de septicemia (gangrena en las dos piernas)</h4>
              <p>Equipo peruano dirigido por José Humberto Gamonal Cruz.</p>
              <a href="https://vimeo.com/268962401" target="_blank" rel="noopener noreferrer" className="pm-btn pm-btn-dark">Ver en Vimeo (contraseña: TERAPIAPIRAMIDAL)</a>
            </div>
            <div className="pm-testimonio-video-extra-item">
              <h4>Más videos de Randall Sánchez</h4>
              <p>Canal completo con todos los testimonios de tratamientos piramidales.</p>
              <a href="https://www.youtube.com/user/mapaseb/videos" target="_blank" rel="noopener noreferrer" className="pm-btn pm-btn-dark">Ver canal de YouTube</a>
            </div>
            <div className="pm-testimonio-video-extra-item">
              <h4>Tratamiento Piramidal en Peces Betta</h4>
              <p>Experimento documentado del efecto piramidal en peces.</p>
              <a href="https://www.piramicasa.es/es/tratamiento_piramidal_peces.html" target="_blank" rel="noopener noreferrer" className="pm-btn pm-btn-dark">Ver experimento</a>
            </div>
          </div>
        </div>
      </section>

      <section className="pm-section-pyramid">
        <div className="pm-section-pyramid-inner">
          <div className="pm-label" data-anim="section-heading">¿Tienes tu propio testimonio?</div>
          <h2 data-anim="section-heading" className="pm-section-pyramid-title">Comparte tu experiencia</h2>
          <p className="pm-lead pm-section-pyramid-lead" data-anim="section-lead">
            Si has experimentado los beneficios de la terapia piramidal, nos encantaría conocer tu historia. Únete al foro de Piramicasa y comparte tu experiencia con la comunidad.
          </p>
          <div className="pm-section-pyramid-buttons">
            <Link href="/" className="pm-btn pm-btn-primary">Volver al inicio</Link>
            <Link href="/centros-terapia" className="pm-btn pm-btn-pyramid">Ver centros de terapia</Link>
            <Link href="/videos" className="pm-btn pm-btn-pyramid">Ver videos</Link>
          </div>
        </div>
      </section>

      <PmFooter />
    </div>
  );
}
