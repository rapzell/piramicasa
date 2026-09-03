import "./globals.css";
import "./piramicasa.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";
import PmAuth from "./components/PmAuth";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Piramicasa — Ciencia y Técnica de las Pirámides",
  "description": "Piramicasa: investigación, fabricación y divulgación del efecto piramidal desde 1972. Pirámides terapéuticas, ciencia, evidencia y bienestar.",
  "keywords": [
    "proporcion",
    "proporciones piramidales",
    "pirámides",
    "medidas",
    "fabricacion",
    "piramidal",
    "formula",
    "terapia piramidal"
  ],
  "robots": "INDEX,FOLLOW"
};
export const viewport = {
  "width": "device-width",
  "initialScale": 1
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={"es"}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <PmAuth>{children}</PmAuth>
      </body>
    </html>
  );
}
