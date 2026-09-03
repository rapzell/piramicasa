"use client";
import "../piramicasa.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import PmHeader from "../components/PmHeader";
import PmParticles from "../components/PmParticles";
import PmFooter from "../components/PmFooter";
import { useGsapAnimations } from "../components/useGsapAnimations";

const itinerario = [
  { dia: "Día 1", titulo: "Salida – Madrid/Barcelona → El Cairo/Aswan", desc: "Salida desde Madrid o Barcelona, llegada a El Cairo donde un representante de la agencia espera con los visados. Cena frente a las pirámides y alojamiento en hotel.", img: "/assets/piramicasa/egipto/piramides-gize.jpg" },
  { dia: "Día 2", titulo: "Sakkara", desc: "Visita a la necrópolis más antigua de Egipto: pirámide escalonada, pirámide del Rey Unas, Serapeum, mastaba de Idut Kagmeni y pirámide del Rey Teti. Comida en Sakkara y visita a casa de Gamal para aceites naturales y aromaterapia.", img: "/assets/piramicasa/egipto/Djozer-piramide-escalonada.jpg" },
  { dia: "Día 3", titulo: "Dashur y Meidum", desc: "Pirámide Roja (entrada interior), pirámide romboidal o \"la Acodada\", pirámide de Meidum, ciudad antigua de Menfis. Comida en restaurante local y visita a casa del Algodón Egipcio.", img: "/assets/piramicasa/egipto/Meidum-01.jpg" },
  { dia: "Día 4", titulo: "Giza", desc: "Visita panorámica del complejo de Giza con la Gran Pirámide de Keops. Entrada a las pirámides y exploración del complejo monumental más icónico del mundo.", img: "/assets/piramicasa/egipto/Giza-camellos.jpg" },
  { dia: "Día 5", titulo: "El Cairo – Museo y Ciudad", desc: "Museo Egipcio con tesoros de faraones, barrio copto, sinagoga, mezquita de Amr. Recorrido por la ciudad histórica y sus bazares.", img: "/assets/piramicasa/egipto/llave_de_la_vida_egipto.jpg" },
  { dia: "Día 6", titulo: "Vuelo a Luxor – Templo de Karnak", desc: "Vuelo a Luxor. Visita al impresionante complejo del Templo de Karnak y paseo por la avenida de las esfinges.", img: "/assets/piramicasa/egipto/karnak-58.jpg" },
  { dia: "Día 7", titulo: "Valle de los Reyes – Crucero por el Nilo", desc: "Valle de los Reyes, templo de Hatshepsut, Colosos de Memnón. Embarque en crucero por el Nilo.", img: "/assets/piramicasa/egipto/Valle-de-los-Reyes-118a.jpg" },
  { dia: "Día 8", titulo: "Crucero – Edfu y Kom Ombo", desc: "Navegación por el Nilo. Templo de Horus en Edfu y templo de Kom Ombo dedicado a Sobek y Haroeris.", img: "/assets/piramicasa/egipto/horus.jpg" },
  { dia: "Día 9", titulo: "Aswan – Philae y Presa", desc: "Llegada a Aswan. Templo de Philae, presa de Aswan, obelisco inacabado. Paseo en faluca por el Nilo.", img: "/assets/piramicasa/egipto/filae.jpg" },
  { dia: "Día 10", titulo: "Abu Simbel", desc: "Vuelo opcional a Abu Simbel para visitar los templos de Ramsés II y Nefertari, una de las maravillas del mundo antiguo reubicada por la UNESCO.", img: null },
  { dia: "Día 11", titulo: "Regreso a El Cairo", desc: "Vuelo de Aswan a El Cairo. Tiempo libre para compras y exploración personal.", img: "/assets/piramicasa/egipto/esfinge.jpg" },
  { dia: "Día 12", titulo: "El Cairo – Conferencias y Despedida", desc: "Conferencias de Gabriel Silva sobre neoarqueología y piramidología. Cena de despedida con vistas a las pirámides.", img: "/assets/piramicasa/egipto/luxor_noche_egipto.jpg" },
  { dia: "Día 13", titulo: "Regreso a España", desc: "Vuelo de regreso a Madrid o Barcelona. Fin del viaje.", img: null },
];

const recomendaciones = [
  "No hace falta vacunarse. Egipto no es un país de riesgo biológico ni peligroso.",
  "Llevar riñonera para dinero y documentos.",
  "Mochila pequeña para excursiones (agua, cámara, chaqueta).",
  "Se aconseja brújula, linterna de manivela, lupa y bolígrafo. Los expertos: cinta métrica y calibre.",
  "Llevar abrigo para la noche en el barco y templos que se visitan de noche.",
  "Llevar billetes pequeños para los primeros días (5 y 10 euros/dólares).",
  "En hoteles hay bancos para retirar o cambiar dinero al cambio oficial.",
  "Dejar hueco en la maleta para compras. 23 Kg máximo sin extras en el avión.",
  "Calzado cómodo con tobillero para andar mucho sobre piedras, arena y túneles.",
  "En Egipto se compran túnicas muy baratas (15-20 euros). Siempre se regatea.",
  "Bañador para tiempo libre en el barco y zapatillas. No llevar toallas.",
];

export default function ViajeEgiptoPage() {
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

      <section className="pm-subpage-hero pm-egipto-hero" data-anim="subpage-hero">
        <div className="pm-subpage-hero-content">
          <div className="pm-label">Viaje Científico e Iniciático</div>
          <h1>Viaje a Egipto con Gabriel Silva</h1>
          <p>Una experiencia inolvidable para todas las edades. 13 días todo incluido en pensión completa, visitando las pirámides, templos y tesoros de la civilización más antigua del mundo.</p>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap", marginTop: "32px" }} data-anim="hero-cta">
            <a href="#inscripcion" className="pm-btn pm-btn-primary">Inscríbete ahora</a>
            <a href="#itinerario" className="pm-btn pm-btn-outline pm-btn-more-info">Ver itinerario</a>
          </div>
        </div>
      </section>

      <section className="pm-section pm-section-cream">
        <div>
          <div className="pm-label" data-anim="section-heading">Próximas salidas</div>
          <h2 data-anim="section-heading">2 viajes al año</h2>
          <p className="pm-lead" data-anim="section-lead">
            Realizamos dos viajes a Egipto cada año. El próximo viaje es en <strong>Septiembre 2026</strong>.
            13 días, 12 noches (o 15 días si es posible), con el mejor itinerario que puede hacerse en ese enorme y extraordinario país.
            Sin reventones, sin carreras, viendo todas las cosas más importantes y muchas que no se muestran al turismo normal.
          </p>

          <div className="pm-egipto-info-grid" data-anim="benefit-cards" style={{ marginTop: "48px" }}>
            <div className="pm-egipto-info-card">
              <div className="pm-egipto-info-icon">📅</div>
              <h3>Próxima salida</h3>
              <p>Septiembre 2026<br/>(fecha exacta por confirmar)</p>
            </div>
            <div className="pm-egipto-info-card">
              <div className="pm-egipto-info-icon">⏱️</div>
              <h3>Duración</h3>
              <p>13 días / 12 noches<br/>(o 15 días si es posible)</p>
            </div>
            <div className="pm-egipto-info-card">
              <div className="pm-egipto-info-icon">💰</div>
              <h3>Precio</h3>
              <p>4.650 € en habitación doble<br/>Pensión completa, casi todo incluido</p>
            </div>
            <div className="pm-egipto-info-card">
              <div className="pm-egipto-info-icon">✈️</div>
              <h3>Salidas</h3>
              <p>Desde Madrid y Barcelona<br/>(otros países: consultar)</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pm-section pm-section-white" id="itinerario">
        <div className="pm-section">
          <div>
            <div className="pm-label" data-anim="section-heading">Itinerario</div>
            <h2 data-anim="section-heading">Un recorrido bien planificado</h2>
            <p className="pm-lead" data-anim="section-lead">
              Con la experiencia desde 2004 con grupos. Vemos tantas cosas como ninguna otra organización ofrece.
              Gabriel Silva dará conferencias y charlas en buena parte del recorrido, haciéndonos ver y comprender más allá de lo académicamente establecido.
            </p>
          </div>

          <div className="pm-egipto-timeline" data-anim="benefit-cards" style={{ marginTop: "48px" }}>
            {itinerario.map((item, i) => (
              <div key={i} className="pm-egipto-timeline-item">
                <div className="pm-egipto-timeline-day">{item.dia}</div>
                <div className="pm-egipto-timeline-content">
                  <h3>{item.titulo}</h3>
                  <p>{item.desc}</p>
                  {item.img && (
                    <img src={item.img} alt={`${item.dia} - ${item.titulo}`} className="pm-egipto-timeline-img" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pm-section pm-section-cream">
        <div>
          <div className="pm-label" data-anim="section-heading">Recomendaciones</div>
          <h2 data-anim="section-heading">Para nuestros viajeros</h2>
          <p className="pm-lead" data-anim="section-lead">
            Estas son las recomendaciones para quienes nos acompañan en este viaje extraordinario.
          </p>

          <div className="pm-egipto-recomendaciones" data-anim="benefit-cards" style={{ marginTop: "32px" }}>
            {recomendaciones.map((rec, i) => (
              <div key={i} className="pm-egipto-recomendacion">
                <span className="pm-egipto-recomendacion-num">{i + 1}</span>
                <span className="pm-egipto-recomendacion-text">{rec}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pm-section pm-section-dark" id="inscripcion">
        <div style={{ textAlign: "center" }}>
          <div className="pm-label" data-anim="section-heading">Inscripción</div>
          <h2 data-anim="section-heading" style={{ color: "var(--pm-crema)" }}>¿Cómo reservar tu plaza?</h2>
          <p className="pm-lead" data-anim="section-lead" style={{ margin: "0 auto 32px", maxWidth: "700px" }}>
            Las plazas son limitadas. Para hacer la reserva envía un email a <strong>piramicasa@gmail.com</strong> indicando nombre y apellidos tal como aparecen en el pasaporte, con una copia de éste.
            También puedes llamar al <strong>+34 72222 5857</strong>. Realizar un pago del 50% o del total y enviar fotocopia del pasaporte, dirección completa y un teléfono de contacto.
          </p>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap", marginTop: "32px" }}>
            <a href="mailto:piramicasa@gmail.com" className="pm-btn pm-btn-primary">Enviar email</a>
            <a href="tel:+34722225857" className="pm-btn pm-btn-outline pm-btn-more-info">Llamar por teléfono</a>
            <a href="https://t.me/+34639284787" target="_blank" rel="noopener noreferrer" className="pm-btn pm-btn-outline pm-btn-more-info">Contactar por Telegram</a>
          </div>
          <p style={{ marginTop: "24px", fontSize: "0.85rem", opacity: 0.7 }}>
            También puedes contactar con Viky Hator al +34 72222 5857 por WhatsApp o Telegram, o a piramiamor@gmail.com
          </p>
        </div>
      </section>

      <section className="pm-section pm-section-cream">
        <div style={{ textAlign: "center" }}>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/" className="pm-btn pm-btn-primary">Volver al inicio</Link>
            <Link href="/libros" className="pm-btn pm-btn-outline pm-btn-more-info">Ver libros</Link>
            <Link href="/conferencias" className="pm-btn pm-btn-outline pm-btn-more-info">Conferencias</Link>
          </div>
        </div>
      </section>

      <PmFooter />
    </div>
  );
}
