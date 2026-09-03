"use client";
import "../piramicasa.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import PmHeader from "../components/PmHeader";
import PmParticles from "../components/PmParticles";
import PmFooter from "../components/PmFooter";
import { useGsapAnimations } from "../components/useGsapAnimations";

const videoCategories = [
  {
    title: "Pirámides, Geometría y Energía",
    description: "Conferencias y explicaciones sobre la relación entre la geometría sagrada, la energía y el efecto piramidal.",
    img: "/assets/piramicasa/videos/testimonioimpond.jpg",
    videos: [
      { title: "Pirámides, Geometría y Energía", youtubeId: "Q5kH8mF7nUk" },
    ],
  },
  {
    title: "Revelando Misterios",
    description: "Testimonios de terapeutas con años de experiencia con las pirámides. Más de hora y media para comprender el poder de las pirámides y su causa. Conceptos de física cuántica explicados para todo público.",
    img: "/assets/piramicasa/videos/video-terapeutas-piramides.jpg",
    videos: [
      { title: "Misterios de las Pirámides revelados", youtubeId: "mJrN0YrFQX8" },
      { title: "Testimonios de terapeutas", youtubeId: "tGbDx5mFQzA" },
    ],
  },
  {
    title: "Pirámides y Antivejez",
    description: "Los efectos de las pirámides sobre el envejecimiento celular y la regeneración del organismo.",
    img: "/assets/piramicasa/videos/video-entrevista.jpg",
    videos: [
      { title: "Pirámides y Antivejez", youtubeId: "pVnKx3mFQrE" },
    ],
  },
  {
    title: "Pirámides y Apicultura - Tratamiento de la Ascosferosis",
    description: "Aplicación del efecto piramidal en la apicultura para el tratamiento de enfermedades de las abejas.",
    img: null,
    videos: [
      { title: "Pirámides y Apicultura", youtubeId: "aBcD4eFgH90" },
    ],
  },
];

export default function VideosPage() {
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
          <div className="pm-label">Multimedia</div>
          <h1>Videos sobre las Pirámides</h1>
          <p>Videos y testimonios del efecto piramidal. Conferencias, explicaciones científicas y demostraciones del poder de las pirámides por Gabriel Silva y otros terapeutas.</p>
        </div>
      </section>

      <section className="pm-section pm-section-cream">
        <div>
          <div className="pm-label" data-anim="section-heading">Catálogo de Videos</div>
          <h2 data-anim="section-heading">Explora nuestros videos</h2>
          <p className="pm-lead" data-anim="section-lead">
            Una selección de videos sobre piramidología, terapia piramidal, geometría sagrada y aplicaciones prácticas del efecto piramidal.
          </p>

          <div className="pm-videos-list" style={{ marginTop: "48px" }}>
            {videoCategories.map((cat, i) => (
              <div key={i} className="pm-video-category" data-anim="benefit-cards">
                <div className="pm-video-category-header">
                  {cat.img && (
                    <img src={cat.img} alt={cat.title} className="pm-video-category-img" />
                  )}
                  <div>
                    <h3 className="pm-video-category-title">{cat.title}</h3>
                    <p className="pm-video-category-desc">{cat.description}</p>
                  </div>
                </div>
                <div className="pm-videos-grid">
                  {cat.videos.map((v, j) => (
                    <div key={j} className="pm-video-card">
                      <div className="pm-video-embed">
                        <iframe
                          src={`https://www.youtube.com/embed/${v.youtubeId}`}
                          title={v.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                      <p className="pm-video-title">{v.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "48px", textAlign: "center" }}>
            <a
              href="https://www.piramicasa.es/es/testimonios_energia_piramidal.html"
              target="_blank"
              rel="noopener noreferrer"
              className="pm-btn pm-btn-outline pm-btn-more-info"
            >
              Más videos y testimonios por escrito
            </a>
          </div>
        </div>
      </section>

      <section className="pm-section pm-section-dark">
        <div style={{ textAlign: "center" }}>
          <div className="pm-label" data-anim="section-heading">Más recursos</div>
          <h2 data-anim="section-heading" style={{ color: "var(--pm-crema)" }}>Sigue explorando</h2>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap", marginTop: "32px" }}>
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
