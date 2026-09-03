"use client";
import "../piramicasa.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import PmHeader from "../components/PmHeader";
import PmParticles from "../components/PmParticles";
import PmFooter from "../components/PmFooter";
import { useGsapAnimations } from "../components/useGsapAnimations";

const conferencias = [
  {
    title: "Taller de Piramidología y Terapia Piramidal - El Escorial",
    status: "Realizado",
    date: "27-29 de Marzo, 2015",
    location: "San Lorenzo de El Escorial, Madrid",
    price: "280€ por persona (pensión completa)",
    contact: "Viky - 639 28 47 87",
    description: "Taller intensivo de fin de semana con experimentos prácticos, física cuántica y pirámides, terapia piramidal presencial y certificados de asistencia.",
    temario: [
      "Viernes: Inicio de experimentos. Introducción a las dimensiones universales y la Llave de la Vida en la Pirámide. Física cuántica y pirámides.",
      "Sábado mañana: Pautas de funcionamiento, materiales seguros y peligrosos.",
      "Sábado tarde: Terapia piramidal práctica, enfermedades tratadas, desarrollo del criterio terapéutico.",
      "Domingo: Armando la propia pirámide. Verificación de experimentos. Entrega de certificados.",
    ],
  },
  {
    title: "Talher de Piramidoterapia e Psicologia Transcendental - Portugal",
    status: "Realizado",
    date: "28 de Febrero - 1 de Marzo, 2015",
    location: "Portugal",
    price: "Consultar",
    contact: "Sra. Ana Pimenta - 962 80 15 69",
    description: "Taller en portugués sobre piramidoterapia y psicología transcendental. Útil para terapeutas, médicos, veterinarios, geobiólogos, biólogos, arquitectos e ingenieros.",
    temario: [
      "Día 1: Presentación, experimentos prácticos, historia de la investigación (1927-2011), pirámides y templos antiguos, el secreto de los Templarios.",
      "Día 1 tarde: Aplicaciones terapéuticas, fabricación simple de pirámides, sesión de preguntas.",
      "Día 2: Práctica de piramidoterapia, colocación y orientación, tratamiento del agua piramidalizada.",
      "Día 2 tarde: Experimentos de aplicación terapéutica, demostraciones sobre pacientes, entrega de certificados.",
    ],
  },
  {
    title: "Taller de Psicología Trascendental y Piramidoterapia - Montseny",
    status: "Realizado",
    date: "6-8 de Febrero, 2015",
    location: "El Montseny, Girona",
    price: "290€ por persona (pensión completa)",
    contact: "Viky - 639 28 47 87",
    description: "Taller de fin de semana combinando psicología transcendental y piramidoterapia. Incluye proceso de catarsis, trilogía terapéutica y experimentos prácticos.",
    temario: [
      "Viernes: Experimentos con pirámides. Introducción a la Psicología Trascendental. El Sentido de la Vida y la Búsqueda de la Felicidad. Proceso de Catarsis.",
      "Sábado mañana: Encauzando la vida, la vocación, el trabajo y la economía.",
      "Sábado tarde: Trilogía Terapéutica Maravillosa. Reflexológicas, Bioneuroemocionalidad y Piramidoterapia.",
      "Domingo: Repaso general, verificación de experimentos y entrega de certificados.",
    ],
  },
  {
    title: "III Jornada Nacional de Enfermería en Terapias Naturales - Alicante",
    status: "Realizado",
    date: "26 de Abril, 2014",
    location: "Hotel AC, Alicante",
    price: "Consultar",
    contact: "info@adeata.org",
    description: "Conferencia sobre 'La forma Piramidal y su influencia en la Salud' dentro de la III Jornada Nacional de Enfermería en Terapias Naturales. Trilogía Terapéutica del Siglo XXI: Piramidoterapia, Bioneuroemocionalidad y Su-Jok.",
    temario: [
      "Conferencia a las 10:15h - Sala 2",
      "Ponente: Gabriel Silva - Psicólogo, Antropólogo e investigador del Efecto Piramidal",
      "Trilogía Terapéutica del Siglo XXI",
    ],
  },
  {
    title: "Las Pirámides y la Terapia Piramidal - Donostia",
    status: "Realizado",
    date: "25-26 de Mayo, 2013",
    location: "Donostia (San Sebastián)",
    price: "Consultar",
    contact: "Viky - 639 28 47 87",
    description: "Dos jornadas de taller y conferencia. Incluye historia de la investigación, descubrimientos en Egipto, cámaras del caos, aplicaciones terapéuticas y práctica de piramidoterapia.",
    temario: [
      "Jornada 1: Conferencia con más de 300 imágenes. Historia 1927-2011. Pirámides del mundo. El mayor secreto de los Templarios. Cámaras de presurización. Cómo y porqué funcionan las pirámides.",
      "Jornada 1 tarde: Aplicaciones terapéuticas, fabricación sencilla, preguntas.",
      "Jornada 2: Práctica de piramidoterapia. Experimentos de retardo de oxidación. Agua piramidalizada.",
    ],
  },
  {
    title: "Conferencia y Taller en Candeleda",
    status: "Realizado",
    date: "26-27 de Noviembre, 2011",
    location: "Candeleda, cerca de Madrid",
    price: "Consultar",
    contact: "Viky - 639 28 47 87",
    description: "Conferencia y taller en Candeleda, Ávila. Próximo a Madrid, en un entorno natural ideal para experimentar el efecto piramidal en contacto con la naturaleza.",
    temario: [
      "Conferencia teórica y práctica",
      "Experimentos presenciales",
      "Aplicaciones terapéuticas",
    ],
  },
  {
    title: "Taller y Conferencia en Valencia (Venezuela)",
    status: "Realizado",
    date: "Consultar",
    location: "Valencia, Venezuela",
    price: "Consultar",
    contact: "Viky - 639 28 47 87",
    description: "Taller y conferencia internacional en Venezuela, extendiendo la enseñanza de la terapia piramidal a Sudamérica.",
    temario: [
      "Conferencia teórica",
      "Prácticas de piramidoterapia",
      "Experimentos presenciales",
    ],
  },
  {
    title: "Taller y Conferencia en Bogotá (Colombia)",
    status: "Realizado",
    date: "Consultar",
    location: "Bogotá, Colombia",
    price: "Consultar",
    contact: "Viky - 639 28 47 87",
    description: "Taller y conferencia internacional en Bogotá, Colombia. Llevando el conocimiento del efecto piramidal a nuevos públicos en Sudamérica.",
    temario: [
      "Conferencia teórica",
      "Prácticas de piramidoterapia",
      "Experimentos presenciales",
    ],
  },
];

export default function ConferenciasPage() {
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
          <div className="pm-label">Educación y Formación</div>
          <h1>Cursos, Talleres y Conferencias sobre las Pirámides</h1>
          <p>Enseñamos la terapia piramidal para la salud integral. Más de 50 talleres y 100 conferencias realizadas a lo largo de nuestro camino entre las pirámides.</p>
        </div>
      </section>

      <section className="pm-section pm-section-cream">
        <div>
          <div className="pm-label" data-anim="section-heading">Próximos eventos</div>
          <h2 data-anim="section-heading">Información de contacto</h2>
          <p className="pm-lead" data-anim="section-lead">
            Para información sobre próximos talleres, cursos y conferencias, contacta con nosotros.
            Puedes ver videos instructivos cortos en TikTok de @gabrielpiramicasa y en los canales de Telegram t.me/Piramicasa.
            Los mejores cursos los damos directamente en las Pirámides de Egipto.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "24px" }}>
            <a href="mailto:piramicasa@protonmail.com" className="pm-btn pm-btn-primary">Contactar por email</a>
            <Link href="/#contacto" className="pm-btn pm-btn-outline pm-btn-more-info">Ver formulario de contacto</Link>
          </div>
        </div>
      </section>

      <section className="pm-section-full pm-section-alt">
        <div className="pm-section">
          <div>
            <div className="pm-label" data-anim="section-heading">Historial</div>
            <h2 data-anim="section-heading">Algunos talleres y conferencias realizados</h2>
            <p className="pm-lead" data-anim="section-lead">
              Las pirámides y sus efectos deben ser mostrados. Lo hacemos a través de cursos, talleres y conferencias
              donde los asistentes comprueban la realidad del efecto piramidal. A continuación mostramos algunos ejemplos,
              ya que es imposible poner los más de cincuenta talleres y cien conferencias realizadas.
            </p>
          </div>

          <div className="pm-conferencias-list" data-anim="benefit-cards" style={{ marginTop: "40px" }}>
            {conferencias.map((conf, i) => (
              <div key={i} className="pm-conferencia-card">
                <div className="pm-conferencia-header">
                  <h3>{conf.title}</h3>
                  <span className="pm-conferencia-status">{conf.status}</span>
                </div>
                <div className="pm-conferencia-meta">
                  <div className="pm-conferencia-meta-item">
                    <span className="pm-conferencia-meta-label">📅 Fecha</span>
                    <span>{conf.date}</span>
                  </div>
                  <div className="pm-conferencia-meta-item">
                    <span className="pm-conferencia-meta-label">📍 Ubicación</span>
                    <span>{conf.location}</span>
                  </div>
                  {conf.price !== "Consultar" && (
                    <div className="pm-conferencia-meta-item">
                      <span className="pm-conferencia-meta-label">💰 Precio</span>
                      <span>{conf.price}</span>
                    </div>
                  )}
                  <div className="pm-conferencia-meta-item">
                    <span className="pm-conferencia-meta-label">📞 Contacto</span>
                    <span>{conf.contact}</span>
                  </div>
                </div>
                <p className="pm-conferencia-desc">{conf.description}</p>
                <div className="pm-conferencia-temario">
                  <h4>Temario</h4>
                  <ul>
                    {conf.temario.map((t, ti) => (
                      <li key={ti}>{t}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pm-section pm-section-dark">
        <div style={{ textAlign: "center" }}>
          <div className="pm-label" data-anim="section-heading">¿Para quién es útil?</div>
          <h2 data-anim="section-heading" style={{ color: "var(--pm-crema)" }}>Terapias y utilidades</h2>
          <p className="pm-lead" data-anim="section-lead" style={{ margin: "0 auto 32px" }}>
            El taller de Piramidología es profesionalmente útil a terapeutas, médicos, veterinarios, ortopedias,
            geobiólogos, biólogos, arquitectos, ingenieros, agricultores, apicultores e higiene de la alimentación.
            También para afectados de enfermedades reumáticas, degenerativas, del sistema circulatorio, digestivas,
            infecciones bacterianas, migrañas, cansancio y estrés.
          </p>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/" className="pm-btn pm-btn-primary">Volver al inicio</Link>
            <Link href="/libros" className="pm-btn pm-btn-outline pm-btn-more-info">Ver libros</Link>
          </div>
        </div>
      </section>

      <PmFooter />
    </div>
  );
}
