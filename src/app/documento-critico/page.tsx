"use client";
import "../piramicasa.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import PmHeader from "../components/PmHeader";
import { useGsapAnimations } from "../components/useGsapAnimations";
import PmParticles from "../components/PmParticles";
import PmFooter from "../components/PmFooter";

const analisis = [
  {
    title: "Hechos y documentos comprobables",
    text: "Aparte de los avales científicos oficiales, tenemos una trayectoria que supera en porcentajes lo imaginado por cualquier médico o terapeuta, sin ningún fallo en tratamientos de reumáticas e infecciosas de cualquier etiología (hablamos de muchos miles de casos) y con mínimos fallos en dolencias causadas por derivadas etiológicas.",
  },
  {
    title: "Resultados experimentales",
    text: "En 1984, el primer caso de reuma (artritis deformante severa) con casi invalidez física total, desapareció en cinco meses de pernoctar en una pirámide. Luego, antes de 1991, otros cinco casos avanzados, con recuperación entre dos y ocho meses. Desde 2001 los usuarios han pasado a ser unos cuantos miles, de los cuales al menos dos mil han sido por problemas reumáticos. Ningún caso de terapia fallada.",
  },
  {
    title: "Observaciones repetidas",
    text: "No sólo las que hemos hecho infinidad de veces en nuestros laboratorios, como los terapeutas y médicos en sus consultorios, sino que cualquier persona puede hacer unos pequeños experimentos caseros para probar los principios y función de las pirámides.",
  },
  {
    title: "Testimonios personales",
    text: "Hay pocos públicos, porque cuando la enfermedad es causa de pago de pensiones, los enfermos no quieren perder esas pagas y se acogen a leyes de protección de datos. Se pueden ver algunos videos testimoniales en el canal de Telegram de Piramicasa y algunos en Youtube.",
  },
  {
    title: "Hipótesis científicas",
    text: "Lo que eran hipótesis sobre el funcionamiento de las pirámides y las causas de sus efectos al principio, fueron verificadas durante seis años (entre 1984 y 1991) mediante investigación cuántica como campo principal, con unos quinientos experimentos periféricos, con análisis de médicos, químicos y biólogos independientes.",
  },
  {
    title: "Interpretaciones aún abiertas",
    text: "No quedan muchas, dado el tiempo de más de medio siglo de investigación. El problema a resolver es la difusión y que se interesen más científicos investigadores. Seguimos estudiando las causas de soluciones espectaculares en dolencias degenerativas y todas las relacionadas a los procesos colinérgicos.",
  },
  {
    title: "Cuestiones que necesitan nuevos ensayos",
    text: "Principalmente en el área práctica de la medicina, tal como lo vienen haciendo más de tres mil médicos en todo el mundo. Lo empírico es indiscutible: cuando la curación del reuma en cualquiera de sus formas es un hecho harto repetido, al paciente no le importan las teorías ni fundamentos.",
  },
  {
    title: "Cómo comprobarlo en casa",
    text: "Con el Manual Básico de Piramidología es posible hacer experimentos caseros muy claros y reveladores, así como construir pirámides de emergencia para diversas terapias. Lo que uno comprueba con hechos, es más importante que todas las discusiones.",
  },
];

export default function DocumentoCriticoPage() {
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
          <div className="pm-label">Análisis</div>
          <h1>Documento Crítico del Efecto Piramidal</h1>
          <p>No se trata de teorías ni de especulaciones, sino de más de medio siglo consiguiendo resultados reales.</p>
        </div>
      </section>

      <section className="pm-section pm-section-cream">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div className="pm-label" data-anim="section-heading">Introducción</div>
          <h2 data-anim="section-heading">Constructores y Fabricantes de Pirámides en todo el mundo</h2>
          <p className="pm-lead" data-anim="section-lead">
            Documento de análisis crítico del efecto piramidal y sus beneficios. Más de medio siglo de investigación
            con resultados reales en medicina, veterinaria, agricultura, apicultura y aplicaciones industriales.
          </p>
          <p style={{ marginTop: "20px", lineHeight: 1.8, color: "var(--pm-ink)" }}>
            En Piramicasa compartimos herramientas naturales y energéticas orientadas al bienestar, el equilibrio y
            el crecimiento personal. Nuestro objetivo es ofrecer productos que apoyen un estilo de vida más consciente,
            en armonía con tu cuerpo, tu mente y tu entorno.
          </p>
        </div>
      </section>

      <section className="pm-section-full pm-section-dark">
        <div className="pm-section" style={{ maxWidth: "900px" }}>
          <div className="pm-label" style={{ color: "var(--pm-oro)" }}>Análisis</div>
          <h2>El efecto piramidal desde las perspectivas más escépticas</h2>

          <div className="pm-cards" style={{ marginTop: "40px" }}>
            {analisis.map((item, i) => (
              <div key={i} className="pm-glass" data-anim="analysis-card">
                <h3 className="pm-glass-title">{item.title}</h3>
                <p className="pm-glass-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PmFooter />
    </div>
  );
}
