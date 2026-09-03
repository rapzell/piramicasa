"use client";
import "../piramicasa.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AccesoPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "piramicasa2026") {
      document.cookie = "pm-auth=piramicasa2026; path=/; max-age=86400";
      window.location.href = "/";
    } else {
      setError(true);
    }
  };

  return (
    <div className="pm-page" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, var(--pm-verde-deep), var(--pm-verde))" }}>
      <div style={{ background: "rgba(255,255,255,0.96)", borderRadius: "16px", padding: "48px 40px", maxWidth: "420px", width: "90%", boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}>
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "12px" }}>△</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", color: "var(--pm-verde-deep)", marginBottom: "8px" }}>Piramicasa</h1>
          <p style={{ fontSize: "0.85rem", color: "var(--pm-muted)" }}>Introduce la contraseña para acceder</p>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(false); }}
            placeholder="Contraseña"
            autoFocus
            style={{
              width: "100%",
              padding: "14px 18px",
              border: `2px solid ${error ? "#c0392b" : "var(--pm-border)"}`,
              borderRadius: "8px",
              fontSize: "1rem",
              outline: "none",
              marginBottom: "16px",
              boxSizing: "border-box",
              transition: "border-color 0.2s",
            }}
          />
          {error && (
            <p style={{ color: "#c0392b", fontSize: "0.82rem", marginBottom: "16px", textAlign: "center" }}>
              Contraseña incorrecta. Inténtalo de nuevo.
            </p>
          )}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px",
              background: "var(--pm-verde)",
              color: "var(--pm-crema)",
              border: "none",
              borderRadius: "8px",
              fontSize: "1rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "background 0.2s",
            }}
          >
            Acceder
          </button>
        </form>
      </div>
    </div>
  );
}
