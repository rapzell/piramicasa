"use client";
import "../piramicasa.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import PmHeader from "../components/PmHeader";
import { useGsapAnimations } from "../components/useGsapAnimations";
import PmParticles from "../components/PmParticles";
import PmFooter from "../components/PmFooter";

const healthTopics = [
  {
    id: "para-que-sirven",
    icon: "△",
    title: "¿Para qué sirven las pirámides?",
    subtitle: "Utilidades y funciones de la pirámide",
    sections: [
      { heading: "Efectos principales de dormir o vivir en una pirámide", text: "Más vitalidad por tensioactivación y reestructuración molecular, acumulación de bio-energía (ORBs). Mayor resistencia orgánica, efecto antirreumático y antiesclerótico por reestructuración molecular natural. Sirven para personas sanas o enfermas de todas las edades, sin efectos nocivos. Prolongación de la vida celular (anti-vejez) por efecto antioxidante sin químicos. Prevención y/o solución a la mayoría de las enfermedades humanas, de animales y plantas. Casi invulnerabilidad ante las bacterias infecciosas por su poder bacteriostático. Relajación profunda y corrección de los trastornos del sueño." },
      { heading: "Ralentización del envejecimiento", text: "Se ralentizan todos los procesos de envejecimiento por el potente efecto antioxidante no químico, de modo que es un efectivo antiaging sin efectos secundarios ni meramente aparentes como la cirugía. El efecto antiedad se produce en todos los órganos, hasta en la última célula del cuerpo. Incluso se han reportado casos de recuperación de la regla en mujeres con más de tres años de menopausia, tras algunos meses de pernoctar en pirámide." },
      { heading: "Nada se pudre en el interior", text: "Por lo tanto no prosperan las bacterias infecciosas. Usted conseguirá mantenerse a salvo de los ataques bacterianos que causan la mayoría de las enfermedades conocidas. Quienes dormimos o vivimos en pirámides correctamente construidas no podemos sufrir estados gripales ni cualquiera de las enfermedades tan habituales en la población." },
      { heading: "Completitud cuántica y vitalidad", text: "La acumulación de energía orgónica (grandes cantidades de neutrinos) produce completitud cuántica en los átomos que constituyen nuestro cuerpo. El efecto orgánico se manifiesta como mayor vitalidad, menor vulnerabilidad ante un amplio espectro de radiaciones, corrección natural de los líquidos y sólidos orgánicos." },
      { heading: "Optimización y regeneración", text: "Se optimiza la funcionalidad orgánica de todos los seres vivos, se impide la degeneración molecular que produce las enfermedades degenerativas, así como las reumáticas. En casos agudos como heridas o quemaduras, se acelera notablemente la recuperación celular, se impide toda clase de infecciones, se sueldan rápidamente los huesos trizados o quebrados, lo que en la mayoría de los casos evita incluso que queden cicatrices." },
      { heading: "Inhibición de procesos infecciosos", text: "Se inhiben los procesos infecciosos que producen el acné, la hidradenitis supurativa, la hiperhidrosis, los eccemas de cualquier etiología biológica. La septicemia no puede producirse en un usuario que vive o duerme habitualmente en la pirámide, pero en personas que no tienen su cuerpo piramidalizado puede combatirse con éxito una septicemia aguda en pocos días de terapia, usando el modo antipirámide." },
      { heading: "Tonificación muscular y nerviosa", text: "Debido a la tonificación muscular y nerviosa resultante, desaparecen la mayor parte de los trastornos del sueño. El resultado de una sesión de masaje será varias veces más efectivo cuando el sujeto duerme en una pirámide. Su efecto es muy evidente en dolencias como la fibromialgia, que desaparece en semanas o meses, o la esclerosis múltiple." },
      { heading: "La Revolución Piramidal", text: "No es invasiva, funciona merced al campo magnético de la Tierra. No gasta electricidad y es respetuosa con el medio ambiente. Para cualquier terapeuta o particulares no hospitalizados, es de fácil aplicación. En muchas enfermedades resulta mucho más económica que los tratamientos actuales. No crea dependencia de ninguna clase. Carece de efectos secundarios. Su efecto bacteriostático puede combatir hasta las superbacterias. Es compatible con cualquier otra terapia y generalmente coadyuvante de ellas." },
    ],
  },
  {
    id: "beneficios",
    icon: "✚",
    title: "Beneficios en la Salud",
    subtitle: "Energía piramidal para personas sanas y enfermas",
    sections: [
      { heading: "Efectos positivos en la salud", text: "Los beneficios son mayores de lo que suponíamos hasta hace unos años. Los trabajos llevados a cabo por médicos, ortopedistas, ingenieros, apicultores y veterinarios cubanos, así como nuevos experimentos nuestros, nos abren horizontes extraordinarios. Piramicasa suministra a sus Usuarios una detallada información científica sobre tratamiento del reumatismo, artritis, artrosis, esclerosis múltiple, relajación muscular, masajes con aplicación de pirámides, fisioterapia aplicada con pirámides, etc." },
      { heading: "Resultados destacados", text: "Entre los mejores resultados se encuentra el tratamiento de las enfermedades reumáticas y los problemas intestinales provocados por infecciones bacterianas. Hay casos de notable corrección y regulación de la presión arterial, sistema inmunitario y endocrino, logrando incluso efectos adelgazantes y antilitiásicos. Como elemento antivejez (anti-aging), ha demostrado sus cualidades en insectos, plantas y animales pequeños, prolongando notablemente su lapso normal de vida." },
      { heading: "La molécula de agua", text: "Todos los efectos de las pirámides se encuentran en la mismísima molécula de agua. No todos los beneficios se derivan de esta cuestión, pero la gran mayoría de ellos se debe a la recomposición molecular del agua a su óptima condición de simetría. La energía piramidal no es un mito, no hay misterios, pero tiene pautas de la orgónica, de la geobiología y de la física que deben conocerse." },
      { heading: "¿Por qué la pirámide recupera membranas, periostios, huesos y sana lesiones?", text: "La corrección molecular no sustituye a las células madre; las habilita. Una célula progenitora puede estar presente, pero si el microambiente está inflamado, ácido, mal hidratado, oxidado, con matriz deformada o señales eléctricas caóticas, su reparación será pobre. Si el entorno molecular se ordena, la misma célula puede funcionar mejor: diferenciarse, secretar matriz, coordinarse con vasos, osteoblastos, osteoclastos, fibroblastos y macrófagos. La cadena causal: efecto físico sobre agua/matriz → mejor microambiente tisular → modulación inflamatoria → activación de células reparadoras → reabsorción y reparación → recuperación funcional." },
    ],
  },
  {
    id: "antirreumatica",
    icon: "⚖",
    title: "Antirreumática",
    subtitle: "El mejor medicamento para el reuma",
    sections: [
      { heading: "Efecto antirreumático y antiesclerótico", text: "Las pirámides tienen efecto antirreumático y antiesclerótico por causas físicas conocidas: eliminación de radicales libres, reestructuración y tensioactivación molecular de los líquidos, recomposición cuántica a nivel atómico, utilizando como base energética el campo magnético de la Tierra y produciendo una recomposición del Par Biomagnético, pero sin efectos negativos. Representan el mejor tratamiento para el reuma porque no poseen efectos secundarios indeseables." },
      { heading: "Resultados", text: "No depende para funcionar de factores subjetivos ni falla en ningún caso de reumatismo porque su efecto es estrictamente físico, al margen de las condiciones químicas y/o biológicas del cuerpo, o las condiciones psicológicas del paciente, las cuales sólo influirán en más o menos tiempo de recuperación. Los enfermos leves, con pocos años de cronicidad, se restablecen inexorablemente en menos de un año con la Piramicama normal. Los casos más graves requieren el modelo Hércules, cuatro veces más potente." },
    ],
  },
  {
    id: "bacteriostatica",
    icon: "✦",
    title: "Bacteriostática",
    subtitle: "El mejor tratamiento para la gripe y el constipado",
    sections: [
      { heading: "Antibiótico natural", text: "Tratar una infección grave que ha llegado a ser septicemia o gangrena ha sido el reto más difícil para médicos de todos los tiempos. Incluso hoy, con la cantidad de antibióticos que hay en el mercado, un paciente con gangrena está prácticamente condenado a la amputación. Sin embargo, lo que ni los mejores antibióticos pueden lograr, lo logra una pirámide bien construida y orientada. El mejor antibiótico natural para prevenir y tratar una infección bacteriana es el efecto piramidal." },
      { heading: "Cómo funciona", text: "Los fenómenos físicos causantes del poder bacteriostático de la pirámide son un conjunto y no un único factor, pero la resultante es una atmósfera donde todo tiende a ordenarse según las tensiones magnéticas naturales de cada átomo, por lo tanto cabe el mismo efecto en el orden de las moléculas, lo que en gran medida impide que se produzcan putrefacciones. Si bien la pirámide no es la tan buscada Panacea, es lo más parecido que hemos hallado." },
    ],
  },
  {
    id: "antivejez",
    icon: "☀",
    title: "Antivejez (Antiaging)",
    subtitle: "Antiaging natural rejuvenecedor",
    sections: [
      { heading: "Alargar la vida", text: "Decimos que la pirámide consigue alargar la vida y no exageramos. No sólo hablamos de algo comprobado experimentalmente y con efectos certificados científicamente, sino también conocido desde sus causas biológicas y cuánticas. El mejor tratamiento de belleza antiedad lo aporta la pirámide, que ofrece una alternativa que se centra en mejorar la calidad de la vida poniendo la salud a salvo de los efectos de la casi totalidad de las bacterias infecciosas conocidas." },
      { heading: "La vejez es una enfermedad", text: "Buscando la inmortalidad casi como un instinto, descubrimos que la vejez es algo que no debería existir. Se trata de una enfermedad que puede evitarse en mayor o menor medida. El Equipo Osiris refrenda las afirmaciones de científicos como Aubrey de Grey: prolongar la vida a niveles casi indefinidos no sólo sería un volver a lo natural, sino también factible desde todo punto de vista científico." },
    ],
  },
  {
    id: "radicales_libres",
    icon: "⚛",
    title: "Antioxidante",
    subtitle: "Radicales libres y envejecimiento celular",
    sections: [
      { heading: "La causa principal del envejecimiento", text: "Una de las claves más importantes del envejecimiento celular se encuentra en la influencia nefasta de los radicales libres y otras formas oxidantes, que dañan el ADN nuclear haciendo que la célula se reproduzca defectuosamente o no lo haga. Las mitocondrias también sufren en su ADN los efectos de la oxidación. Los radicales libres también atacan la membrana celular. Evitar el envejecimiento celular es la clave para retardar notablemente el envejecimiento integral." },
      { heading: "Cómo actúa la pirámide", text: "Se ha podido comprobar que en un campo magnético no eléctrico, naturalmente acelerado pero con la mera potencia del campo magnético terrestre, tal como es el de la pirámide, los radicales libres y oxidantes en general son barridos por el flujo de electrones. Las terapias piramidales no poseen los inconvenientes de los antioxidantes químicos (acumulaciones renales, deficiencias en hemoglobina, efectos secundarios peligrosos)." },
      { heading: "Pirámides vs. antioxidantes químicos", text: "Los antioxidantes químicos tienen varios inconvenientes: necesidad de balancear la alimentación, efectos secundarios peligrosos, deficiencias en la hemoglobina, acumulaciones renales. En cambio las terapias piramidales no poseen ninguno de estos inconvenientes. Nuestras pirámides han sido calculadas para servir a todo tipo de personas, cualquiera sea su nivel de sensibilidad orgánica a los cambios magnéticos." },
    ],
  },
  {
    id: "relajacion",
    icon: "☾",
    title: "Relajante",
    subtitle: "Efecto miorrelajante y antiestrés",
    sections: [
      { heading: "Dos fenómenos principales", text: "El efecto de relajación nerviosa y muscular que produce una pirámide bien construida se debe a dos fenómenos: 1) El sistema nervioso, al tener su materia atómica y molecular bien estructurada por el efecto físico de tensioactivación, permite una mejor circulación de la energía eléctrico-nerviosa, evitando acumulación electrostática en las células. 2) La relajación de la masa muscular está directamente ligada a la actividad del sistema nervioso. El reordenamiento molecular produce una profunda relajación muscular." },
      { heading: "Más profundo que la acupuntura", text: "El efecto de la pirámide se produce en toda la materia del cuerpo, por lo tanto llega a las zonas más profundas, dentro del cerebro, en los huesos y hasta las células más centrales de la médula. El desbloqueo que produce la pirámide es efecto de la reestructuración atómica y molecular, por lo tanto se produce lentamente, demorando minutos u horas. No es tan rápido como la acupuntura, pero es más profundo, completo y dura mucho más." },
    ],
  },
  {
    id: "antiestresante",
    icon: "☮",
    title: "Antiestrés",
    subtitle: "La pirámide y el estrés",
    sections: [
      { heading: "El estrés es acumulativo y crónico", text: "El estrés es un estado de desarmonía causada por el desorden psicológico y orgánico crónico, derivado de una actividad excesiva del sistema nervioso. La diferencia entre el estrés y cualquier otra causa de desarmonía, es que el estrés es acumulativo, crónico, se produce lentamente. Algunas personas lo manifiestan más en lo psíquico, otras de psicología más resistente demoran más en mostrar los síntomas y lo manifiestan con problemas físicos." },
      { heading: "Solución en trastornos del sueño", text: "La evidencia de solución en trastornos del sueño de diversa índole ya cuenta con miles de casos, de modo que la mejor terapia del sueño que puede tenerse, es una pirámide y no los medicamentos que crean dependencia. Una amplia mayoría de síntomas de estrés empiezan a desaparecer desde la primera noche al dormir en una pirámide. Los deportistas de élite y la gente cuyo trabajo les lleva a altos niveles de estrés son los que mejor aprecian la diferencia." },
    ],
  },
  {
    id: "antiinflamatoria",
    icon: "❄",
    title: "Desinflamatoria",
    subtitle: "Antiinflamatorio natural sin efectos secundarios",
    sections: [
      { heading: "Más efectivo que los medicamentos químicos", text: "El tratamiento de la inflamación con pirámides es tan efectivo que deja obsoletos a los medicamentos químicos, siendo un desinflamatorio potente y rápido. Como antiinflamatorio sin efectos secundarios, ya ha ganado el primer lugar en todos los hospitales de Cuba y muchas clínicas privadas del mundo. El mejor antiinflamatorio es sin duda el derivado del efecto piramidal porque no es químico, no es invasivo y una vez corregida la causa de fondo no hay recidivas." },
      { heading: "Cómo se produce la desinflamación", text: "Se están acomodando las células y multiplicándose más rápidamente para completar el molde orgánico, merced a que tienen moléculas más fuertes. El poder desinflamatorio se combina con el poder cicatrizante. Se hace imposible el medrar de bacterias infecciosas, ya que la putrefacción es imposible en la pirámide. La mayor solvencia del agua corporal facilita la circulación de todos los líquidos, evitando la acumulación en el sitio de la lesión." },
      { heading: "Resultados en esguinces", text: "El poder antiinflamatorio de la pirámide evitará la hinchazón normal en aproximadamente un 80% durante la primera hora, el 95% después. En Cuba, la mayoría de los hospitales tratan al esguinzado con antipirámide, siendo necesarios sólo dos días de reposo con sesiones de 50 minutos cada dos horas, evitando antibióticos, desinflamatorios y corticoides. Incluso no existe necesidad de escayolado, salvo que haya fractura." },
    ],
  },
  {
    id: "enfermedades",
    icon: "✚",
    title: "Enfermedades Tratadas",
    subtitle: "Mejora tu salud con la terapia piramidal",
    sections: [
      { heading: "1. Enfermedades reumáticas", text: "De cualquier clasificación etiológica y cualquier cronicidad. Miles de casos tratados, ningún fracaso. Más de 40.000 pacientes en Cuba y unos 7.500 fuera de ella. Ningún reumático ha dejado de mejorar y ningún usuario ha contraído dolencias reumáticas. Se utilizan Piramicamas y Hércules (4x más potente)." },
      { heading: "2. Enfermedades degenerativas", text: "Fibromialgia, Esclerosis Múltiple, Lateral Amiotrófica (ELA). Pocos casos (menos de cien hasta 2013, ningún fracaso). Tiempos: semanas para notar efectos, meses para hacer vida normal, algunos años para desaparición definitiva. Combinando con terapia bio-neuroemocional, resultados más rápidos. Se utilizan modelos Hércules." },
      { heading: "3. Infecciones bacterianas", text: "Crónicas o agudas, incluyendo septicemia, enfermedad de Crohn, colitis ulcerosa, sinusitis, afecciones de próstata. Miles de casos, ningún fracaso. Tiempo de desaparición sintomática: desde semanas a meses. Ninguno tardó más de ocho meses en los casos más graves. Se utilizan Piramicamas, Hércules y modelos Hygia/Horus." },
      { heading: "4. Enfermedades virósicas", text: "No se ha demostrado que la pirámide tenga un efecto antivírico directo, pero sin putrefacción en escala macro o microcósmica, no hay campo para el desarrollo de los virus. Muchos casos, ningún fracaso. Cuatro episodios de sintomatología gripal superados con normalidad, casi siempre con terapias naturistas combinadas." },
      { heading: "5. Enfermedades raras", text: "Las raras suelen resultar de una disfunción localizada no comprendida, degeneración molecular o combinación de factores con base psicosomática. El Efecto Piramidal es físico, por lo que resulta de perfecta complementariedad con la biodescodificación (bio-neuro-emocionalidad). Se utilizan Piramicamas y Hércules." },
      { heading: "6. Enfermedades endocrinas", text: "Muchas dolencias endocrinas son producidas por disfunción de una glándula. Éxitos notables en hipo e hipertiroidismo. Los más rápidos son cuando la distorsión molecular se debe a altos niveles de oxidación. Se consideran también las hepáticas y renales. Se utilizan Piramicamas y Hércules." },
      { heading: "Casos que requieren terapia combinada", text: "Cáncer: 3 tratados, ningún fracaso, pero requiere biodescodificación a fondo. Psoriasis: mayoría con éxito pobre sintomático, pero exitosos al hacer biodescodificación. Alopecia areata y bacteriana: más de 30 casos, todos exitosos. Lupus: 23 casos, éxito parcial con protección renal. Vitíligo: casos fisiológicos podrían corregirse con la pirámide." },
    ],
  },
];

export default function SaludPage() {
  const [scrolled, setScrolled] = useState(false);
  const [openTopic, setOpenTopic] = useState<string | null>("para-que-sirven");

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
          <div className="pm-label">Salud y Bienestar</div>
          <h1>Beneficios de la Terapia Piramidal</h1>
          <p>Descubre cómo el Efecto Piramidal mejora la salud: antirreumático, bacteriostático, antioxidante, relajante, antiestrés y desinflamatorio.</p>
        </div>
      </section>

      <section className="pm-section pm-section-cream">
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div className="pm-label" data-anim="section-heading">Explora los beneficios</div>
          <h2 data-anim="section-heading">Propiedades terapéuticas de las pirámides</h2>
          <p className="pm-lead" data-anim="section-lead">
            Haz clic en cada tema para desplegar la información detallada. Más de 50 años de investigación
            respaldan estos efectos, certificados por organismos sanitarios oficiales.
          </p>

          <div className="pm-accordion" style={{ marginTop: "40px" }}>
            {healthTopics.map((topic) => (
              <div key={topic.id} className="pm-accordion-item" data-anim="accordion-item">
                <button
                  className={`pm-accordion-header${openTopic === topic.id ? " pm-accordion-open" : ""}`}
                  onClick={() => setOpenTopic(openTopic === topic.id ? null : topic.id)}
                >
                  <span className="pm-accordion-icon">{topic.icon}</span>
                  <span className="pm-accordion-title">
                    <strong>{topic.title}</strong>
                    <small>{topic.subtitle}</small>
                  </span>
                  <span className="pm-accordion-arrow">{openTopic === topic.id ? "▲" : "▼"}</span>
                </button>
                {openTopic === topic.id && (
                  <div className="pm-accordion-body">
                    {topic.sections.map((sec, i) => (
                      <div key={i} className="pm-accordion-section">
                        <h4>{sec.heading}</h4>
                        <p>{sec.text}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <img src="/assets/piramicasa/logo-dorado.png" alt="Piramicasa" style={{ width: "100px", opacity: 0.85 }} />
          </div>

          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "16px", marginTop: "24px", flexWrap: "wrap" }}>
            <Link href="/" className="pm-btn pm-btn-dark">Volver al inicio</Link>
            <Link href="/enfermedades" className="pm-btn pm-btn-dark">Enfermedades tratadas →</Link>
            <a href="/#contacto" className="pm-btn pm-btn-dark">Consultar</a>
          </div>
        </div>
      </section>

      <PmFooter />
    </div>
  );
}
