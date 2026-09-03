"use client";
import "../piramicasa.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import PmHeader from "../components/PmHeader";
import { useGsapAnimations } from "../components/useGsapAnimations";
import PmParticles from "../components/PmParticles";
import PmFooter from "../components/PmFooter";

const enlaces = [
  { title: "Por qué y para qué sirven", desc: "Descubre el propósito y la utilidad de las pirámides terapéuticas.", href: "/#ciencia" },
  { title: "Beneficios en la salud", desc: "Efectos benéficos de la pirámide en el organismo humano.", href: "/#beneficios" },
  { title: "Enfermedades tratadas", desc: "Dolencias tratadas con éxito mediante piramidoterapia.", href: "/enfermedades" },
  { title: "La casa piramidal", desc: "Construcción de casas piramidales completas. Piramicasa Vital.", href: "/#productos" },
  { title: "La Piramicama", desc: "Cama piramidal para mejorar la calidad del sueño.", href: "/#productos" },
  { title: "Todas las pirámides", desc: "Catálogo completo de productos piramidales.", href: "/#productos" },
  { title: "Energía escalar", desc: "Tecnología de energía escalar y su relación con las pirámides.", href: "/documento-critico" },
  { title: "Historia de Piramicasa", desc: "La trayectoria de más de medio siglo de investigación.", href: "/historia" },
  { title: "Presentación del Director", desc: "Carta de Gabriel Silva, fundador de Piramicasa.", href: "/presentacion" },
];

export default function MenuPrincipalPage() {
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
          <div className="pm-label">Menú principal</div>
          <h1>Bienvenidos a Piramicasa</h1>
          <p>Asesoría científica sobre construcción de pirámides, energía, climatización y geobiología.</p>
        </div>
      </section>

      <section className="pm-section pm-section-cream">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div className="pm-label" data-anim="section-heading">Filosofía</div>
          <h2 data-anim="section-heading">Herramientas naturales para el bienestar</h2>
          <p className="pm-lead" data-anim="section-lead">
            En Piramicasa compartimos herramientas naturales y energéticas orientadas al bienestar, el equilibrio
            y el crecimiento personal. Nuestro objetivo es ofrecer productos que apoyen un estilo de vida más
            consciente, en armonía con tu cuerpo, tu mente y tu entorno.
          </p>
          <p style={{ marginTop: "20px", lineHeight: 1.8, color: "var(--pm-ink)" }}>
            Ya puedes vivir o dormir en una pirámide perfecta. Las pirámides fueron, son y serán cámaras terapéuticas
            muy revitalizantes. Sus efectos tienen causas puramente físicas. Nunca fueron tumbas, sino aparatos cuyas
            utilidades hemos descubierto y aplicamos para tratar varias enfermedades o evitar que se sufran.
          </p>
          <p style={{ marginTop: "20px", lineHeight: 1.8, color: "var(--pm-ink)" }}>
            La pirámide es el mejor remedio para la gripe y muchas otras enfermedades reumáticas, escleróticas,
            traumáticas y fisiológicas. Fortalece el sistema inmunitario sin intoxicación medicamentosa. La
            piramidoterapia quizá no sea la panacea absoluta… pero es lo que más se le aproxima.
          </p>
        </div>
      </section>

      <section className="pm-section-full pm-section-dark">
        <div className="pm-section" style={{ maxWidth: "1000px" }}>
          <div className="pm-label" style={{ color: "var(--pm-oro)" }}>Navegación</div>
          <h2>Explora el mundo de las pirámides</h2>
          <p className="pm-lead">
            Selecciona el tema que más te interese para profundizar.
          </p>

          <div className="pm-cards" style={{ marginTop: "40px" }}>
            {enlaces.map((enlace, i) => (
              <Link
                key={i}
                href={enlace.href}
                className="pm-glass"
                data-anim="menu-link"
                style={{ textDecoration: "none", display: "block", cursor: "pointer" }}
              >
                <h3 className="pm-glass-title">{enlace.title}</h3>
                <p className="pm-glass-text">{enlace.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="pm-section pm-section-cream" style={{ textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <img src="/assets/piramicasa/logo-dorado.png" alt="Piramicasa" style={{ width: "100px", opacity: 0.85 }} />
          <p className="pm-lead" style={{ marginTop: "24px" }}>
            Puedes contactarnos por teléfono al +34 639284787 por llamada directa o por WhatsApp o Telegram.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginTop: "24px" }}>
            <Link href="/" className="pm-btn pm-btn-dark">Volver al inicio</Link>
            <Link href="/#contacto" className="pm-btn pm-btn-outline">Contactar</Link>
          </div>
        </div>
      </section>

      <PmFooter />
    </div>
  );
}
