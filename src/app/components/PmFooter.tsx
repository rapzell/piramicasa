"use client";
import Link from "next/link";

export default function PmFooter() {
  return (
    <footer className="pm-footer">
      <div className="pm-footer-grid">
        <div>
          <h4>Piramicasa</h4>
          <p>Ciencia y técnica de las pirámides con enfoque profesional, divulgativo y orientado al bienestar.</p>
          <p style={{ marginTop: "12px" }}>Contacto: <a href="mailto:piramicasa@protonmail.com" style={{ display: "inline", color: "var(--pm-oro)" }}>piramicasa@protonmail.com</a></p>
          <div className="pm-social">
            <a href="https://instagram.com/osiris5293" target="_blank" rel="noopener noreferrer">IG</a>
            <a href="https://youtube.com/piramicasa" target="_blank" rel="noopener noreferrer">YT</a>
            <a href="https://x.com/piramicasa" target="_blank" rel="noopener noreferrer">X</a>
          </div>
        </div>
        <div>
          <h4>Modelos</h4>
          <Link href="/#productos">Piramicama</Link>
          <Link href="/#productos">Hércules</Link>
          <Link href="/#productos">Hygia & Horus</Link>
          <Link href="/#productos">Bungalow Sekhmet</Link>
          <Link href="/#productos">Piramicasa Vital</Link>
          <Link href="/#productos">Pirámide Jardín</Link>
          <Link href="/#productos">Piramascota</Link>
        </div>
        <div>
          <h4>Enlaces</h4>
          <Link href="/#nosotros">Sobre nosotros</Link>
          <Link href="/#ciencia">Ciencia y evidencia</Link>
          <Link href="/#avales">Avales y certificados</Link>
          <Link href="/#faq">Preguntas frecuentes</Link>
          <Link href="/salud">Salud y Terapias</Link>
          <Link href="/enfermedades">Enfermedades Tratadas</Link>
          <Link href="/historia">Historia</Link>
          <Link href="/presentacion">Presentación del Director</Link>
          <Link href="/documento-critico">Documento Crítico</Link>
          <Link href="/#contacto">Contacto</Link>
        </div>
        <div>
          <h4>Legal</h4>
          <a href="#">Términos y garantías</a>
          <a href="#">Envío de pirámides</a>
          <a href="#">Avales de terapia piramidal</a>
        </div>
      </div>
      <div className="pm-footer-bottom">
        © Piramicasa. Ciencia y Técnica de las Pirámides. Gabriel Silva (Gabriel Osiris) — Desde 1972.
      </div>
      <div className="pm-footer-image-wrap">
        <img
          src="/assets/piramicasa/footer2.png"
          alt="Piramicasa — Ciencia y Técnica de las Pirámides"
          className="pm-footer-image"
        />
      </div>
    </footer>
  );
}
