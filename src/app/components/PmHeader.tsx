"use client";
import Link from "next/link";
import { useState } from "react";

export default function PmHeader() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="pm-header pm-scrolled">
      <div className="pm-header-left">
        <div>
          <Link href="/" className="pm-logo">Pirami<span>casa</span></Link>
          <div className="pm-tagline">Ciencia y Técnica de las Pirámides</div>
        </div>
      </div>

      <nav className="pm-nav">
        <div className="pm-nav-item">
          <Link href="/">Inicio</Link>
        </div>
        <div
          className="pm-nav-item"
          onMouseEnter={() => setOpenDropdown("piramides")}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <a href="/#productos" onClick={(e) => { e.preventDefault(); setOpenDropdown(openDropdown === "piramides" ? null : "piramides"); }}>Pirámides <span className="pm-nav-arrow">▼</span></a>
          <div className={`pm-dropdown${openDropdown === "piramides" ? " pm-dropdown-show" : ""}`}>
            <Link href="/#productos" onClick={() => setOpenDropdown(null)}>Camas Piramidales</Link>
            <Link href="/#productos" onClick={() => setOpenDropdown(null)}>Casas y Bungalows</Link>
            <Link href="/#productos" onClick={() => setOpenDropdown(null)}>Pirámides Menores</Link>
            <Link href="/#productos" onClick={() => setOpenDropdown(null)}>Pirámide Jardín</Link>
            <Link href="/#productos" onClick={() => setOpenDropdown(null)}>Pirámide Faraday</Link>
            <Link href="/#productos" onClick={() => setOpenDropdown(null)}>Piramascota</Link>
          </div>
        </div>
        <div
          className="pm-nav-item"
          onMouseEnter={() => setOpenDropdown("ciencia")}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <a href="/#ciencia" onClick={(e) => { e.preventDefault(); setOpenDropdown(openDropdown === "ciencia" ? null : "ciencia"); }}>Ciencia <span className="pm-nav-arrow">▼</span></a>
          <div className={`pm-dropdown${openDropdown === "ciencia" ? " pm-dropdown-show" : ""}`}>
            <Link href="/#beneficios" onClick={() => setOpenDropdown(null)}>13 Beneficios</Link>
            <Link href="/salud" onClick={() => setOpenDropdown(null)}>Salud y Terapias</Link>
            <Link href="/enfermedades" onClick={() => setOpenDropdown(null)}>Enfermedades Tratadas</Link>
            <Link href="/#estudios" onClick={() => setOpenDropdown(null)}>Estudios Científicos</Link>
            <Link href="/#avales" onClick={() => setOpenDropdown(null)}>Avales y Certificados</Link>
            <Link href="/#faq" onClick={() => setOpenDropdown(null)}>Preguntas Frecuentes</Link>
          </div>
        </div>
        <div
          className="pm-nav-item"
          onMouseEnter={() => setOpenDropdown("nosotros")}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <a href="/#nosotros" onClick={(e) => { e.preventDefault(); setOpenDropdown(openDropdown === "nosotros" ? null : "nosotros"); }}>Nosotros <span className="pm-nav-arrow">▼</span></a>
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
          <Link href="/#contacto">Contacto</Link>
        </div>
      </nav>

      <div className="pm-header-right">
        <a href="tel:+34681087539" className="pm-phone">+34 681 087 539</a>
        <div className="pm-lang">
          <span>ES</span>
          <span className="pm-lang-sep">|</span>
          <a href="https://www.vitalpyramid.com" target="_blank" rel="nofollow">EN</a>
        </div>
      </div>
    </header>
  );
}
