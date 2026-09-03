"use client";
import "../piramicasa.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import PmHeader from "../components/PmHeader";
import { useGsapAnimations } from "../components/useGsapAnimations";
import PmParticles from "../components/PmParticles";
import PmFooter from "../components/PmFooter";

const diseaseCategories = [
  {
    id: "reumaticas",
    icon: "✦",
    title: "Enfermedades Reumáticas",
    subtitle: "Todas las clasificaciones etiológicas y cronicidad",
    pyramid: "Piramicama y Hércules",
    cases: "Más de 47.500 casos",
    success: "100% de éxito",
    description: "Miles de casos tratados, ningún fracaso. El reuma tiene factores externos como exposición a temperaturas y humedad variables, alimentación inadecuada, geopatías y contaminación electromagnética que induce la degeneración molecular del agua y otras moléculas. En una muestra de más de 40.000 pacientes en Cuba y unos 7.500 fuera de ella, ningún reumático ha dejado de mejorar y ningún usuario ha contraído dolencias reumáticas.",
    details: [
      "Artritis reumatoide, artrosis deformante, espondilitis, fibromialgia y esclerosis múltiple comparten la misma etiología física: degeneración del orden molecular.",
      "El modelo Hércules es cuatro veces más potente que la Piramicama normal. Los casos crónicos se resuelven en 2-3 años, quedando sin síntomas en unos meses.",
      "Con Piramicama normal el proceso dura 8-12 años, aunque los síntomas desaparecen en mucho menos tiempo.",
      "No tiene recidiva si se completa el tratamiento o se usa una pirámide para dormir habitualmente.",
    ],
  },
  {
    id: "degenerativas",
    icon: "∞",
    title: "Enfermedades Degenerativas",
    subtitle: "Fibromialgia, Esclerosis Múltiple, ELA",
    pyramid: "Modelo Hércules o aluminio cubano",
    cases: "Menos de 100 casos hasta 2013",
    success: "Prácticamente 100% (un único fracaso en 2016)",
    description: "Pocos casos, ningún fracaso hasta 2013 y un único fracaso en 2016 más otro aún sin completarse en 2019. Tiempos de tratamiento: semanas para notar efectos, meses para hacer vida más normal, algunos años para la desaparición definitiva de todos los síntomas. Combinando con terapia bio-neuroemocional, resultados más rápidos.",
    details: [
      "Debido a un único fracaso en esclerosis múltiple, no podemos garantizar resultados en todos los casos, ya que hay más de una etiología y el factor emocional es crucial.",
      "Con Piramicamas normales el tiempo aumenta considerablemente, pero se puede estar todo el tiempo dentro de ellas.",
      "El pionero en tratamiento exitoso de esclerosis múltiple es un paciente cubano que padeció esclerosis combinada con bursitis, osteomielitis y espondilitis, completamente recuperado.",
    ],
  },
  {
    id: "bacterianas",
    icon: "⚔",
    title: "Infecciones Bacterianas",
    subtitle: "Crónicas, agudas, septicemia, Crohn, colitis, sinusitis, próstata",
    pyramid: "Piramicama, Hércules, Hygia y Horus",
    cases: "Miles de casos",
    success: "Ningún fracaso (salvo excepciones de etiología funcional)",
    description: "Infecciones bacterianas crónicas o agudas, incluyendo septicemia con amplio espectro bacteriano, enfermedad de Crohn, colitis ulcerosa, sinusitis y muchas similares, infecciones localizadas en diferentes órganos, así como afecciones de la próstata. Tiempo de desaparición sintomática: desde semanas a meses. Ninguno tardó más de ocho meses en los casos más graves y crónicos.",
    details: [
      "Muchos problemas desaparecen en horas (lo que viven las bacterias hasta una segunda generación), pero se continúa al menos un par de días más cuando han remitido todos los síntomas.",
      "El efecto bacteriostático de la pirámide crea un atmosphere donde las bacterias infecciosas no prosperan, sin dañar la flora intestinal.",
      "En algunos casos se usaron modelos Hygia y Horus, pero las Piramicamas y Hércules siguen siendo casi infalibles.",
    ],
  },
  {
    id: "virales",
    icon: "☀",
    title: "Enfermedades Virósicas",
    subtitle: "Gripe, sintomatología gripal y condiciones virales",
    pyramid: "Cualquier modelo (estudiar cada caso)",
    cases: "Muchos casos",
    success: "Ningún fracaso",
    description: "No se ha demostrado que la pirámide tenga un efecto antivírico directo, pero se ha demostrado que los virus no son agentes patógenos sino exosomas, producto de una enfermedad. Sin putrefacción en escala macro o microcósmica, no hay campo para el desarrollo de los virus. Cuatro episodios de sintomatología gripal por carga bacteriana directa superados con normalidad.",
    details: [
      "Casi siempre se combinan con terapias naturistas.",
      "Vale el concepto para cualquier pirámide, pero hay que estudiar cada caso en particular.",
      "La pirámide refuerza el sistema inmunitario sin intoxicación medicamentosa.",
    ],
  },
];

const uncertainDiseases = [
  {
    title: "Tinnitus (Acúfenos)",
    description: "Se han tratado cinco personas. Dos de larga cronicidad dejaron de tenerlos en semanas. Otras dos no han tenido resultados en casi un año. Existen al menos tres etiologías diferentes.",
    types: [
      { name: "Neuronal", treatable: "Incertaine", note: "Memoria celular en centros receptores del cerebro. Puede corregirse con biodescodificación." },
      { name: "Nerviosa reumática", treatable: "Sí", note: "Problema cervical con osteofitos. Se resuelve con pernoctación en pirámide." },
      { name: "Nicho bacteriano", treatable: "Sí", note: "Conglomerado bacteriano en oídos. El tratamiento piramidal elimina el nicho en horas o días." },
      { name: "Funcional", treatable: "Probable", note: "Latidos no sincrónicos con el corazón. Posible presión sanguínea localizada o nicho bacteriano." },
    ],
  },
  {
    title: "Diabetes",
    description: "En estudio. Se han observado mejoras en algunos casos pero se necesita más investigación para determinar la eficacia y el protocolo adecuado.",
    types: [],
  },
];

const treatmentProtocol = [
  {
    title: "Pirámide propiamente dicha (pernoctación)",
    description: "Dormir dentro de una pirámide estructural adecuada es el mejor preventivo antirreumático. La exposición permanente no tiene contraindicaciones y tiene una larga lista de beneficios orgánicos.",
    icon: "△",
  },
  {
    title: "Antipirámide (tratamiento localizado)",
    description: "Tratamiento combinado de pernoctación con sesiones de antipirámide durante el día. Especialmente recomendado en casos dolorosos, ya que la antipirámide es más potente como analgésico.",
    icon: "▽",
  },
  {
    title: "Protocolo de sesiones",
    description: "Intervalos de dos horas entre aplicaciones. Tiempo variable según criterio médico: mínimo 15 minutos, máximo 50 minutos. Promedio óptimo: 20-30 minutos para enfermedades reumáticas.",
    icon: "⏱",
  },
  {
    title: "Esguinces y lesiones traumáticas",
    description: "Los esguinces de tobillo se recuperan en 2-3 días con piramidoterapia, frente a 2-3 semanas escayolados. Aplicada en deportistas de élite con resultados excepcionales.",
    icon: "✚",
  },
];

const contraindications = [
  "La piramidoterapia no tiene contraindicaciones en la pirámide propiamente dicha (pernoctación).",
  "La antipirámide no debe usarse con ingesta de alcohol, psicotrópicos ni medicamentos para cardíacos.",
  "Disminución de la respuesta al tratamiento cuando hay suministro de corticoides.",
  "Los cardíacos pueden dormir en pirámide sin inconvenientes, pero deben evitar la modalidad de antipirámide.",
  "Conviene hacer la última medicación dos horas antes de acostarse en la pirámide.",
  "Las personas que viven en casas piramidales raramente tienen necesidad de algún medicamento.",
];

export default function EnfermedadesPage() {
  const [scrolled, setScrolled] = useState(false);
  const [openCategory, setOpenCategory] = useState<string | null>("reumaticas");

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
          <div className="pm-label">Salud y Terapias</div>
          <h1>Enfermedades y Dolencias Tratadas con Pirámides</h1>
          <p>Mejora tu salud con la terapia piramidal. Más de 47.000 casos tratados con resultados extraordinarios en enfermedades reumáticas, degenerativas, bacterianas y virales.</p>
        </div>
      </section>

      <section className="pm-section pm-section-cream">
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div className="pm-label" data-anim="section-heading">Enfermedades y tipo de pirámide</div>
          <h2 data-anim="section-heading">Enfermedades tratadas con éxito</h2>
          <p className="pm-lead" data-anim="section-lead">
            A continuación se detallan las enfermedades tratadas con piramidoterapia, el tipo de pirámide
            recomendada para cada caso, el número de casos tratados y la tasa de éxito. Toda la información
            está respaldada por más de medio siglo de investigación y decenas de miles de casos clínicos.
          </p>

          <div className="pm-accordion" style={{ marginTop: "40px" }}>
            {diseaseCategories.map((cat) => (
              <div key={cat.id} className="pm-accordion-item" data-anim="accordion-item">
                <button
                  className={`pm-accordion-header${openCategory === cat.id ? " pm-accordion-open" : ""}`}
                  onClick={() => setOpenCategory(openCategory === cat.id ? null : cat.id)}
                >
                  <span className="pm-accordion-icon">{cat.icon}</span>
                  <span className="pm-accordion-title">
                    <strong>{cat.title}</strong>
                    <small>{cat.subtitle}</small>
                  </span>
                  <span className="pm-accordion-arrow">{openCategory === cat.id ? "▲" : "▼"}</span>
                </button>
                {openCategory === cat.id && (
                  <div className="pm-accordion-content">
                    <p style={{ lineHeight: 1.8, color: "var(--pm-ink)", marginBottom: "24px", fontSize: "0.92rem" }}>
                      {cat.description}
                    </p>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", marginBottom: "28px" }}>
                      <div style={{ background: "var(--pm-crema-warm)", borderRadius: "10px", padding: "16px 20px" }}>
                        <div style={{ fontSize: "0.72rem", color: "var(--pm-muted)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "6px" }}>Pirámide recomendada</div>
                        <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--pm-verde-deep)" }}>{cat.pyramid}</div>
                      </div>
                      <div style={{ background: "var(--pm-crema-warm)", borderRadius: "10px", padding: "16px 20px" }}>
                        <div style={{ fontSize: "0.72rem", color: "var(--pm-muted)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "6px" }}>Casos tratados</div>
                        <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--pm-verde-deep)" }}>{cat.cases}</div>
                      </div>
                      <div style={{ background: "var(--pm-crema-warm)", borderRadius: "10px", padding: "16px 20px" }}>
                        <div style={{ fontSize: "0.72rem", color: "var(--pm-muted)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "6px" }}>Tasa de éxito</div>
                        <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--pm-verde-deep)" }}>{cat.success}</div>
                      </div>
                    </div>
                    <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--pm-oro)", marginBottom: "14px" }}>Detalles del tratamiento</div>
                    <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "14px" }}>
                      {cat.details.map((d, i) => (
                        <li key={i} style={{ padding: "14px 20px", background: "rgba(198, 156, 109, 0.06)", borderRadius: "8px", fontSize: "0.9rem", lineHeight: 1.65, color: "var(--pm-ink)", borderLeft: "3px solid var(--pm-oro)" }}>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pm-section-full pm-section-dark">
        <div className="pm-section" style={{ maxWidth: "1000px" }}>
          <div>
            <div className="pm-label" style={{ color: "var(--pm-oro)" }} data-anim="section-heading">Investigación</div>
            <h2 data-anim="section-heading">Enfermedades en estudio</h2>
            <p className="pm-lead" data-anim="section-lead">
              Algunas dolencias aún están en fase de investigación. Presentamos los casos con transparencia,
              indicando qué sabemos y qué aún desconocemos sobre su tratamiento con pirámides.
            </p>
          </div>

          <div style={{ marginTop: "40px" }}>
            {uncertainDiseases.map((disease, i) => (
              <div key={i} className="pm-glass" data-anim="analysis-card" style={{ marginBottom: "24px" }}>
                <h3 className="pm-glass-title" style={{ fontSize: "1.2rem" }}>{disease.title}</h3>
                <p className="pm-glass-text" style={{ marginBottom: disease.types.length > 0 ? "20px" : "0" }}>{disease.description}</p>
                {disease.types.length > 0 && (
                  <div style={{ display: "grid", gap: "12px" }}>
                    {disease.types.map((t, j) => (
                      <div key={j} style={{ display: "grid", gridTemplateColumns: "auto auto 1fr", gap: "16px", alignItems: "start", padding: "12px 16px", background: "rgba(255,255,255,0.03)", borderRadius: "6px" }}>
                        <span style={{ fontWeight: 600, color: "var(--pm-oro)", fontSize: "0.9rem", whiteSpace: "nowrap" }}>{t.name}</span>
                        <span style={{
                          fontSize: "0.75rem",
                          padding: "2px 10px",
                          borderRadius: "12px",
                          whiteSpace: "nowrap",
                          background: t.treatable === "Sí" ? "rgba(90, 107, 74, 0.3)" : t.treatable === "Probable" ? "rgba(198, 156, 109, 0.3)" : "rgba(138, 130, 122, 0.3)",
                          color: t.treatable === "Sí" ? "var(--pm-verde-light)" : t.treatable === "Probable" ? "var(--pm-oro-light)" : "var(--pm-muted)",
                        }}>
                          {t.treatable}
                        </span>
                        <span style={{ fontSize: "0.85rem", color: "var(--pm-crema)", lineHeight: 1.5, opacity: 0.85 }}>{t.note}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pm-section pm-section-cream">
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div className="pm-label" data-anim="section-heading">Protocolo</div>
          <h2 data-anim="section-heading">Modalidades de tratamiento</h2>
          <p className="pm-lead" data-anim="section-lead">
            Tanto la pirámide como la antipirámide poseen cualidades terapéuticas, pero no se usan del mismo modo.
            El tratamiento depende del tipo de dolencia, su gravedad y las características del paciente.
          </p>

          <div className="pm-cards" data-anim="glass-cards" style={{ marginTop: "40px" }}>
            {treatmentProtocol.map((proto, i) => (
              <div key={i} className="pm-card">
                <div className="pm-card-icon">{proto.icon}</div>
                <h3>{proto.title}</h3>
                <p>{proto.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pm-section-full pm-section-alt">
        <div className="pm-section" style={{ maxWidth: "800px" }}>
          <div className="pm-glass-light">
            <div className="pm-label" data-anim="section-heading">Importante</div>
            <h2 data-anim="section-heading" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>Contraindicaciones y precauciones</h2>
            <ul style={{ listStyle: "none", padding: 0, marginTop: "24px", display: "grid", gap: "12px" }}>
              {contraindications.map((c, i) => (
                <li key={i} className="pm-trust-item" data-anim="trust-item" style={{ padding: "12px 16px", background: "rgba(198, 156, 109, 0.06)", borderRadius: "8px", borderLeft: "3px solid var(--pm-oro)" }}>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="pm-cta" data-anim="cta-section">
        <div>
          <div className="pm-label" style={{ color: "var(--pm-oro)" }}>¿Tienes una dolencia?</div>
          <h3>Consulta sin compromiso</h3>
          <p>
            Si padeces alguna de estas enfermedades o quieres saber si la piramidoterapia puede ayudarte,
            contáctanos para una consulta personalizada. Te orientaremos sobre el modelo y protocolo más adecuado.
          </p>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/#contacto" className="pm-btn pm-btn-primary">Solicitar consulta</Link>
            <Link href="/salud" className="pm-btn pm-btn-outline">Ver todos los beneficios</Link>
          </div>
        </div>
      </section>

      <PmFooter />
    </div>
  );
}
