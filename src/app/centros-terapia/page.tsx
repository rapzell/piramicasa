"use client";
import "../piramicasa.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import PmHeader from "../components/PmHeader";
import PmParticles from "../components/PmParticles";
import PmFooter from "../components/PmFooter";
import { useGsapAnimations } from "../components/useGsapAnimations";

const centros = [
  {
    name: "Centro Terapéutico Aurora",
    location: "Nicaragua",
    description: "El primer Centro Terapéutico de estas características, pues su sala de consultas es una pirámide modelo Sekhmet.",
    phone: null,
    link: null,
    img: null,
  },
  {
    name: "Centro Terapéutico Khyma",
    location: "Catalunya, España",
    description: "Mark Pulido realiza terapias de armonización integral con campanas planas especiales, llamadas \"bilas\". A su obra se añade el efecto piramidal, logrando una revitalización y armonización vibracional desde el cuerpo físico hasta los cuerpos sutiles.",
    phone: null,
    link: "http://markpulido.net/terapias/piramide/",
    img: "/assets/piramicasa/centros/centro_piramidal_khyma.jpg",
  },
  {
    name: "Centro Terapéutico Leganés",
    location: "Madrid, España",
    description: "Jacob Martín ofrece terapia piramidal en Madrid.",
    phone: null,
    link: "https://www.piramicasa.es/es/centro-terapeutico-leganes.html",
    img: "/assets/piramicasa/centros/Jacob-martin-2.jpg",
  },
  {
    name: "Centro Terapéutico Antahkarana",
    location: "Valencia, España",
    description: "La terapeuta holística Amparo Vilanova realiza un completo procedimiento terapéutico que incluye Reiki, Desprogramación neurolingüística, reflexología, biodescodificación y piramidoterapia.",
    phone: "615 07 40 51",
    link: "https://www.piramicasa.es/es/centro-terapeutico-antahkarana.html",
    img: "/assets/piramicasa/centros/amparo.jpg",
  },
  {
    name: "Herboristería El Despertar",
    location: "Valencia, España",
    description: "Tienda y herboristería con productos naturales y medicina alternativa. Pilar y Andrés ofrecen formación en terapia holística, kinesiología, piramidoterapia, meditación, yoga, taichí, pilates y talleres. Incluye alimentos ecológicos, cosmética, fitoterapia, cuencos de cuarzo y metal, minerales, inciensos y más.",
    phone: "676 33 78 41",
    link: null,
    address: "c/ Los Centelles, 28 (Barrio Ruzafa), Valencia",
    img: "/assets/piramicasa/centros/centro_piramidal_el_despertar.jpg",
  },
  {
    name: "Centro Terapéutico T.I.P.I.",
    location: "España",
    description: "Centro terapéutico especializado en terapia piramidal integral.",
    phone: null,
    link: "http://www.piramicasa.es/es/centro-terapeutico-tipi.html",
    img: "/assets/piramicasa/centros/centro_piramidal_el_camino.jpg",
  },
  {
    name: "Centro Terapéutico Sebastián Viles",
    location: "Lleida, Cataluña, España",
    description: "Terapia piramidal en Lleida, Cataluña.",
    phone: null,
    link: "https://www.piramicasa.es/es/centro-terapeutico-Lleida-Viles.html",
    img: null,
  },
  {
    name: "Centro Ithaca",
    location: "Madrid, España",
    description: "Terapia Bioenergética en Madrid.",
    phone: null,
    link: "https://www.piramicasa.es/es/terapeuta-juan-lopez.html",
    img: "/assets/piramicasa/centros/centro-ithaca.jpg",
  },
  {
    name: "Centro Terapéutico Juan Donate",
    location: "Itinerante (Tenerife y Albacete), España",
    description: "Terapia de integración Piramidal y Magnetoterapia. Liberación Emocional. Investigador avanzado de terapias alternativas. Atiende en modo itinerante en diversos sitios de España.",
    phone: "630 91 57 38",
    link: "https://www.piramicasa.es/es/centro-terapeutico-donate.html",
    img: null,
  },
  {
    name: "Centro Terapéutico El Rincón del Alma",
    location: "Madrid, España",
    description: "Beatriz García, terapeuta holística en Madrid.",
    phone: "629 128 121",
    link: null,
    address: "c/ Lima, 37 - Bajo A - Fuenlabrada, Madrid",
    img: "/assets/piramicasa/centros/centro_piramidal_el_rincon_del_alma.jpg",
  },
  {
    name: "Terapeuta Alfredo Martín",
    location: "Madrid, España",
    description: "Kinesiología y Terapia Holística en Madrid.",
    phone: "619 18 34 09",
    link: "https://www.piramicasa.es/es/terapeuta-madrid-alfredo-martin.html",
    img: "/assets/piramicasa/centros/centro_piramidal_alfredo.jpg",
  },
  {
    name: "Terapeutas Holísticos Karl y Ania",
    location: "Barcelona, España",
    description: "Terapia Holística en Barcelona.",
    phone: "627 67 27 45",
    link: "https://www.piramicasa.es/es/terapeutas-holisticos-karl-y-ania.html",
    img: "/assets/piramicasa/centros/centro_piramidal_karl_y_ania.jpg",
  },
  {
    name: "Terapeuta Marcelo Bengoechea",
    location: "Buenos Aires, Argentina",
    description: "Kinesiólogo, Terapeuta Clínico y Holístico.",
    phone: "011-4694-6543",
    link: null,
    address: "Andalgala 3768 - Isidro Casanova, La Matanza, Buenos Aires",
    img: "/assets/piramicasa/centros/terapeuta_piramidal_marcelo.jpg",
  },
  {
    name: "Terapeuta Gabriel García",
    location: "Francia",
    description: "Gabriel García, terapeuta en el norte de Francia e itinerante en varios países.",
    phone: null,
    link: null,
    img: "/assets/piramicasa/centros/centro_piramidal_gabriel_garcia.jpg",
  },
  {
    name: "Terapeuta Randall Sánchez",
    location: "Heredia, Costa Rica",
    description: "Terapia de Amma, Sekkotsu y Piramidoterapia.",
    phone: "(506) 8836-1560",
    link: "https://www.piramicasa.es/es/Piramicasa-Costa-Rica.html",
    img: "/assets/piramicasa/centros/terapeuta-piramidal-costa-rica-randall.jpg",
  },
];

export default function CentrosTerapiaPage() {
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
          <div className="pm-label">Directorio</div>
          <h1>Centros de Terapia Piramidal</h1>
          <p>La mejor terapia para sanar. Directorio de centros y terapeutas especializados en piramidoterapia en España y alrededor del mundo.</p>
        </div>
      </section>

      <section className="pm-section pm-section-cream">
        <div>
          <div className="pm-label" data-anim="section-heading">Directorio completo</div>
          <h2 data-anim="section-heading">Centros y terapeutas</h2>
          <p className="pm-lead" data-anim="section-lead">
            Profesionales formados y certificados en terapia piramidal. Contacta con el centro más cercano para iniciar tu tratamiento.
          </p>

          <div className="pm-centros-grid" data-anim="benefit-cards" style={{ marginTop: "48px" }}>
            {centros.map((c, i) => (
              <div key={i} className="pm-centro-card">
                {c.img && (
                  <div className="pm-centro-img-wrap">
                    <img src={c.img} alt={c.name} className="pm-centro-img" />
                  </div>
                )}
                <h3 className="pm-centro-name">{c.name}</h3>
                <div className="pm-centro-location">
                  <span className="pm-centro-location-icon">📍</span> {c.location}
                </div>
                <p className="pm-centro-desc">{c.description}</p>
                {c.address && (
                  <p className="pm-centro-address"><strong>Dirección:</strong> {c.address}</p>
                )}
                <div className="pm-centro-contact">
                  {c.phone && (
                    <a href={`tel:${c.phone.replace(/\s/g, "")}`} className="pm-centro-phone">
                      📞 {c.phone}
                    </a>
                  )}
                  {c.link && (
                    <a
                      href={c.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pm-btn pm-btn-outline pm-btn-sm pm-btn-more-info"
                    >
                      Más información
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pm-section pm-section-dark">
        <div style={{ textAlign: "center" }}>
          <div className="pm-label" data-anim="section-heading">¿Quieres ser terapeuta?</div>
          <h2 data-anim="section-heading" style={{ color: "var(--pm-crema)" }}>Formación en piramidoterapia</h2>
          <p className="pm-lead" data-anim="section-lead" style={{ margin: "0 auto 32px" }}>
            Si te interesa la terapia piramidal, puedes formarte con Piramicasa y unirte a nuestra red de terapeutas.
          </p>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/" className="pm-btn pm-btn-primary">Volver al inicio</Link>
            <Link href="/conferencias" className="pm-btn pm-btn-outline pm-btn-more-info">Ver conferencias</Link>
          </div>
        </div>
      </section>

      <PmFooter />
    </div>
  );
}
