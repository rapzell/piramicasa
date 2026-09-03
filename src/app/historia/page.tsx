"use client";
import "../piramicasa.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import PmHeader from "../components/PmHeader";
import { useGsapAnimations } from "../components/useGsapAnimations";
import PmParticles from "../components/PmParticles";
import PmFooter from "../components/PmFooter";

const timeline = [
  { year: "1927", text: "Antoine Bovis descubre el efecto piramidal en la Gran Pirámide y lo reproduce a pequeña escala." },
  { year: "1949", text: "Karel Drbal pide la primera patente piramidal, capaz de regenerar el filo de las cuchillas de afeitar." },
  { year: "1959", text: "Tras rigurosas comprobaciones militares, se adjudica la patente piramidal Nº 91.304/59. Nadie cambió su hoja de afeitar en tres meses." },
  { year: "1971", text: "El Lic. Julio Gutiérrez de Mendoza realiza experimentos y se dedica a la divulgación del tema en Argentina." },
  { year: "1973", text: "Gabriel Silva comienza en Mendoza, Argentina, con menos de 14 años, sus experimentos con pirámides de cartón a partir de los trabajos de Gutiérrez." },
  { year: "1984-1991", text: "Tras curarse de la artritis deformante con una pirámide, funda el Primer Equipo Osiris con físicos y matemáticos. Descubren las causas físicas del Efecto Piramidal. En 1987-88 se diseñan dos casas piramidales en Brasil." },
  { year: "2000-2006", text: "Contacto con el Dr. Ulises Sosa Salinas en Cuba. Intercambio de información e impulso a la divulgación mundial. Físicos y médicos cubanos realizan experiencias bajo protocolos oficiales." },
  { year: "2001", text: "Fundación de Piramicasa por Viky Sánchez y Gabriel Silva. Comienza la fabricación de pirámides experimentales y la primera Piramicama." },
  { year: "2003", text: "Sumamos esfuerzos con Markus y José Luis García. Matricería industrial para el modelo Piramicama. Fabricación con perfiles extruidos de aluminio de máxima pureza." },
  { year: "2005", text: "El Dr. Sosa Salinas consigue una docena de avales de hospitales y clínicas militares y civiles. El Consejo Científico Nacional de Medicina Natural y Tradicional de La Habana emite dictamen sobre el Efecto Piramidal." },
  { year: "2006", text: "Se edita el libro «Tecnología Sagrada de las Pirámides». Comienza la colaboración con el Dr. Sosa Salinas en «Revolución Terapéutica de las Pirámides»." },
  { year: "2007", text: "Crece el interés por las Casas Piramidales. Se pone en marcha el Proyecto Geoda. Difusión por Europa, Asia y África." },
  { year: "2008", text: "13 conferencias en instituciones médicas, de ingeniería y universidades de La Habana, Pinar del Río, Camagüey y Cienfuegos. 138 Piramicamas instaladas." },
  { year: "2009", text: "14 talleres y 8 conferencias en países europeos y americanos. 585 Piramicamas instaladas en Europa." },
  { year: "2010", text: "Exportación intensiva a América (70% de pedidos). Contacto con Osmanagic, descubridor de las Pirámides de Bosnia." },
  { year: "2017", text: "Tras cuatro años de investigación, se determinan nuevas aplicaciones. La interacción con terapeutas enriquece el conocimiento en medicina, agricultura, apicultura y veterinaria." },
  { year: "2019", text: "Fabricación en Argentina de todos los modelos. Más de 100 países donde la Piramidología es conocida." },
];

export default function HistoriaPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useGsapAnimations();

  return (
    <div className="pm-page">
      <PmParticles />
      <PmHeader />

      <section className="pm-subpage-hero" data-anim="subpage-hero">
        <div className="pm-subpage-hero-content">
          <div className="pm-label">Nuestra trayectoria</div>
          <h1>Historia de la Fundación de Piramicasa</h1>
          <p>Desde 1927 hasta hoy, un recorrido de más de medio siglo de investigación, descubrimientos y bienestar.</p>
        </div>
      </section>

      <section className="pm-section pm-section-cream">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div className="pm-label" data-anim="section-heading">Fundación</div>
          <h2 data-anim="section-heading">¿Cómo nació Piramicasa?</h2>
          <p className="pm-lead" data-anim="section-lead">
            Piramicasa fue fundada por Viky Sánchez y Gabriel Silva en 2001. Consta de un conjunto de Derechos
            Intelectuales registrados en varios países. La filosofía es clara: trabajar para la Nueva Humanidad,
            atenidos a las reglas del mercado pero con un propósito mayor.
          </p>
          <p style={{ marginTop: "20px", lineHeight: 1.8, color: "var(--pm-ink)" }}>
            El Equipo Osiris, que da apoyo científico, se compone de más de cuarenta profesionales que viven en
            España, Cuba, Nicaragua, Colombia, Perú, México, Venezuela, Costa Rica, USA, Canadá, Argentina, Brasil
            y Francia, con muchos colaboradores en otros países.
          </p>
          <p style={{ marginTop: "20px", lineHeight: 1.8, color: "var(--pm-ink)" }}>
            Piramicasa no es una «empresa» comercial ni está registrada en ningún país, porque es mucho más que una
            empresa. Posee registros de derechos intelectuales en cinco países y matricería industrial en Argentina,
            Brasil y España. Los materiales básicos son producidos en Alemania, Francia y España.
          </p>
        </div>
      </section>

      <section className="pm-section-full pm-section-dark">
        <div className="pm-section" style={{ maxWidth: "900px" }}>
          <div className="pm-label" style={{ color: "var(--pm-oro)" }}>Cronología</div>
          <h2>Historia de la Piramidología</h2>
          <p className="pm-lead">
            El resumen de lo logrado en el campo de investigación y difusión de las pirámides y sus usos terapéuticos
            desde 1927.
          </p>

          <div className="pm-timeline">
            {timeline.map((item, i) => (
              <div key={i} className="pm-timeline-item" data-anim="timeline-item">
                <div className="pm-timeline-year">{item.year}</div>
                <div className="pm-timeline-text">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pm-section pm-section-cream" style={{ textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <img src="/assets/piramicasa/logo-dorado.png" alt="Piramicasa" style={{ width: "120px", margin: "0 auto 24px", opacity: 0.85 }} />
          <h2>Gracias a todos</h2>
          <p className="pm-lead">
            A quienes nos apoyan en esta etapa de crecimiento, nuestro agradecimiento personal y el de todo nuestro equipo.
            Gracias a ellos, la Piramidología se va conociendo por todo el mundo.
          </p>
          <Link href="/" className="pm-btn pm-btn-dark" style={{ marginTop: "24px" }}>Volver al inicio</Link>
        </div>
      </section>

      <PmFooter />
    </div>
  );
}
