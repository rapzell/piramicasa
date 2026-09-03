"use client";
import "../piramicasa.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import PmHeader from "../components/PmHeader";
import { useGsapAnimations } from "../components/useGsapAnimations";
import PmParticles from "../components/PmParticles";
import PmFooter from "../components/PmFooter";

export default function PresentacionPage() {
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
          <div className="pm-label">El Director</div>
          <h1>Presentación de Gabriel Silva</h1>
          <p>Una vida dedicada a la investigación piramidal y al bienestar de la Humanidad.</p>
        </div>
      </section>

      <section className="pm-section pm-section-cream">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div className="pm-label" data-anim="section-heading">Bienvenida</div>
          <h2 data-anim="section-heading">Hola a todos y bienvenidos a Piramicasa</h2>

          <div style={{ margin: "32px 0", borderRadius: "16px", overflow: "hidden", boxShadow: "var(--pm-shadow-lg)" }}>
            <img
              src="/assets/piramicasa/vital_urbanizacion-de-lujjo-01.jpg"
              alt="Gabriel Silva - Director Piramicasa"
              style={{ width: "100%", display: "block" }}
            />
          </div>

          <p style={{ lineHeight: 1.8, color: "var(--pm-ink)", marginTop: "24px" }}>
            Desde antes de cumplir seis años de edad, comenzaron a apasionarme las pirámides. Y a muy poco andar,
            ya sabía que no fueron tumbas y que no sólo las había en Egipto. Gracias a mi padre, que era ingeniero,
            pude comprender que la construcción de pirámides no pudo ser hecha por los faraones con la tecnología
            que se supone que tenían.
          </p>

          <p style={{ lineHeight: 1.8, color: "var(--pm-ink)", marginTop: "20px" }}>
            Hasta antes de cumplir 14 años, las teorías sobre las pirámides y la energía piramidal inundaban mi vida
            y comprendí que ninguna era suficiente. Había que pasar a la práctica y me puse a fabricar pirámides y
            hacer experimentos. Un centenar de pirámides y más de quinientos experimentos en diez años de ardua labor.
            La suerte estaba echada y aunque tenía otras inquietudes vocacionales, estaba definido como Piramidólogo.
          </p>

          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", margin: "40px 0 16px", color: "var(--pm-verde-deep)" }}>
            La curación que cambió todo
          </h3>

          <p style={{ lineHeight: 1.8, color: "var(--pm-ink)" }}>
            A los 24 años, ya en 1984, tuve un brote reumático de progreso galopante y salí del trance fabricando la
            primera pirámide para mí. Había curado gatos, canarios, abejas y plantas de muy diversas especies, pero
            había que probar conmigo mismo porque la medicina no me daba alternativa alguna a la condena de vivir lo
            que me quedara de vida en una silla de ruedas. En pocos meses mi salud y mi vida volvieron a la normalidad.
          </p>

          <p style={{ lineHeight: 1.8, color: "var(--pm-ink)", marginTop: "20px" }}>
            Emprendí entonces una investigación sin precedentes, al darme cuenta de la importancia extraordinaria de
            lo descubierto. Dos físicos, un matemático, varios biólogos y médicos involucrados, dieron por resultado
            que tuviera en mis manos un conocimiento imposible de valorar económicamente.
          </p>

          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", margin: "40px 0 16px", color: "var(--pm-verde-deep)" }}>
            La fundación de Piramicasa
          </h3>

          <p style={{ lineHeight: 1.8, color: "var(--pm-ink)" }}>
            En el año 2001, merced a una conversación con el Dr. Ulises Sosa Salinas, tuve que aceptar la idea de que
            nadie había puesto tanto empeño ni dedicación vitalicia en la investigación, ni todos sus recursos
            económicos de toda la vida, así que no podía pretender que otra persona creara Piramicasa con la misma
            pasión, la misma responsabilidad y el mismo Amor, tanto a las pirámides como a su destinataria, la Humanidad.
          </p>

          <p style={{ lineHeight: 1.8, color: "var(--pm-ink)", marginTop: "20px" }}>
            La única forma consistía en cambiar toda mi actividad profesional. Un desafío formidable para cualquier
            persona con más de cuarenta años. Sólo tenía el incondicional apoyo de mi esposa Viky Sánchez y decidimos
            crear Piramicasa.
          </p>

          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", margin: "40px 0 16px", color: "var(--pm-verde-deep)" }}>
            Hoy y mañana
          </h3>

          <p style={{ lineHeight: 1.8, color: "var(--pm-ink)" }}>
            Hoy ya son miles los amigos, Usuarios, colaboradores y científicos interesados en que Piramicasa siga
            creciendo. Basta dormir unas semanas en una Piramicama, tratarse una infección grave o curarse un esguince
            severo con una pirámide en sólo dos días, para comprobar que no exagero sobre la importancia de lo que
            hacemos. Hoy fabricamos Pirámides Perfectas que instalamos o enviamos a todo el mundo.
          </p>

          <p style={{ lineHeight: 1.8, color: "var(--pm-ink)", marginTop: "20px" }}>
            <strong>Actualización 2019:</strong> Hay más de cien países donde la Piramidología es conocida y los
            terapeutas, médicos y usuarios particulares siguen aumentando.
          </p>

          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <img src="/assets/piramicasa/logo-dorado.png" alt="Piramicasa" style={{ width: "100px", opacity: 0.85 }} />
          </div>

          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <Link href="/" className="pm-btn pm-btn-dark">Volver al inicio</Link>
          </div>
        </div>
      </section>

      <PmFooter />
    </div>
  );
}
