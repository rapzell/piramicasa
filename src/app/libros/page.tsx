"use client";
import "../piramicasa.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import PmHeader from "../components/PmHeader";
import PmParticles from "../components/PmParticles";
import PmFooter from "../components/PmFooter";
import { useGsapAnimations } from "../components/useGsapAnimations";

const libros = [
  {
    title: "Tecnología Sagrada de las Pirámides",
    img: "/assets/piramicasa/libros/tecnologia-sagrada-piramides.jpg",
    author: "Gabriel Silva",
    edition: "Segunda Edición",
    publisher: "Lulu.com",
    isbn: "9781445200279",
    pages: "316",
    dimensions: "15,6 x 23,39 cm",
    buyUrl: "https://www.lulu.com/shop/gabriel-silva/tecnolog%C3%ADa-sagrada-de-las-pir%C3%A1mides-2%C2%AA-edici%C3%B3n/paperback/product-5545583.html",
    description: "Este libro presenta un panorama general sobre las pirámides americanas, chinas y egipcias en el contexto histórico real, así como los descubrimientos sobre el efecto piramidal. El llamado poder o energía de las pirámides es una concatenación de fenómenos físicos perfectamente conocidos, explicables y aplicables.",
    excerpt: "El efecto piramidal no es magia ni misterio. Es una concatenación de fenómenos físicos perfectamente conocidos: el campo magnético terrestre, la resonancia de cavidad, la estructura molecular del agua y la geometría sagrada que concentra y distribuye estas energías. Comprender esto es el primer paso para aplicarlo terapéuticamente.",
    review: { author: "Daniel Urrutia", text: "Es el mejor libro que he leído de piramides y eso que leo todo lo que sale de este tema. Soy amigo del autor desde que duermo en una piramide de aluminio desde hace años y pude ver que todo lo que dice es verdad. Debería enterarse mas gente y comprovar que las piramides funcionan de verdad." },
  },
  {
    title: "Revolución Terapéutica de las Pirámides",
    img: "/assets/piramicasa/libros/revolucion-terapeutica-piramides.jpg",
    author: "Dr. Ulises Sosa Salinas y Gabriel Silva",
    edition: "Primera Edición",
    publisher: "Piramicasa - Ulises Sosa",
    isbn: "9781409296218",
    pages: "328",
    dimensions: "18,9 x 24,59 cm",
    buyUrl: "https://www.lulu.com/shop/gabriel-silva-and-dr-ulises-sosa-salinas/revoluci%C3%B3n-terap%C3%A9utica-de-las-pir%C3%A1mides/paperback/product-5269467.html",
    description: "La implacable realidad ante los escépticos, de un protocolo de investigación y certificaciones oficiales en Cuba y miles de pacientes curados con terapia piramidal en muy diversas dolencias ortopédicas, traumáticas, bacterianas, etc.",
    excerpt: "Los resultados obtenidos en Cuba, con certificaciones oficiales del Ministerio de Salud Pública, demuestran que la terapia piramidal no es una alternativa esotérica, sino un protocolo científico reproducible. Miles de pacientes con dolencias ortopédicas, traumáticas y bacterianas han sido tratados con éxito documentado.",
    review: { author: "Fernando Fernández", text: "Personas como Gabriel y el Dr. Ulises son los que hacen avanzar a la humanidad. Un libro que merece la pena y que te enseñará cosas nuevas dignas de conocerse." },
  },
  {
    title: "Faraón",
    img: "/assets/piramicasa/libros/libro-faraon.jpg",
    extraImgs: ["/assets/piramicasa/libros/faraon-piedra-rosetta.jpg", "/assets/piramicasa/libros/faraon-gize.gif"],
    author: "Gabriel Silva",
    edition: "Primera Edición",
    publisher: "Piramicasa",
    isbn: "9781291717525",
    pages: "536",
    dimensions: "15,6 x 23,39 cm",
    buyUrl: "https://www.lulu.com/shop/gabriel-silva/fara%C3%B3n/paperback/product-23186371.html",
    description: "Esta extraordinaria novela se escribió en principio como una tesis de las cronologías históricas de Egipto en base a deducción científica interdisciplinaria, no bajo las infundadas teorías históricas inventadas y emparchadas sin fundamento desde hace doscientos años. Luego el autor prefirió hacer más potable la historia, agregando hechos novelados que podrían explicar los diversos acontecimientos que dieron lugar a muestras materiales registradas como misterios.",
    excerpt: "Las cronologías de Egipto no encajan con las teorías oficiales. Los grabados en los templos, los ideogramas, los fenómenos ocurridos cuyas muestras han quedado por todo Egipto… todo apunta a una civilización mucho más avanzada de lo que se nos ha enseñado. Esta novela es una tesis disfrazada de historia para hacerla más digerible.",
    review: { author: "José A. Roca", text: "Respetable Gabriel, ya he leído todos sus libros y me siento en la obligación de agradecer públicamente su obra. Acabo de leer Faraón y aunque no leo muchas novelas, me ha parecido corta, apasionante e instructiva como pocas. Bien puede considerarse una tesis histórica, aparte de un libro profundamente esotérico, aunque fácil de interpretar por cualquier intelecto." },
  },
  {
    title: "Catarsis Cátara",
    img: "/assets/piramicasa/libros/catarsis-catara.jpg",
    author: "Gabriel Silva",
    edition: "Primera Edición",
    publisher: "Piramicasa - Lulu.com",
    isbn: "9781291821734",
    pages: "204",
    dimensions: "15,6 x 23,39 cm",
    buyUrl: "https://www.lulu.com/shop/gabriel-silva/catarsis-c%C3%A1tara/paperback/product-21587955.html",
    description: "El mejor complemento no sólo a la terapia piramidal, o cualquier otro proceso terapéutico, sino especialmente para ayudar a las personas a ser felices, modificando el interior psicológico, sin cuya depuración es imposible acabar definitivamente con la mayoría de las dolencias. Induce a una purificación personal tanto en lo mental como lo emocional y abre paso a esa verdadera espiritualidad que sólo se encuentra al destruir los fantasmas y demonios de la psique.",
    excerpt: "Dormir en una pirámide implica quedar a salvo de infecciones bacterianas, enfermedades degenerativas y reumáticas, pero los logros obtenidos en la salud física deben ser acompañados de una terapia emocional completa para conseguir que la salud sea realmente integral. Este libro es una de las obras más terapéuticas que se ha escrito jamás.",
    review: { author: "Ramón Elhamin", text: "Me parece que este libro es lo más importante que ha escrito nadie jamás, porque me está cambiando la vida. Las advertencias son ciertas y hay que atenderlas, pero vale la pena. Seguro que al leerlo de nuevo paso a paso, descubro más cosas, pero con lo visto... Creo que no podrá escribir cosas más importantes para todos. Ha sido el mejor regalo que he recibido en toda la vida." },
  },
  {
    title: "Los Ocho Kybaliones",
    img: "/assets/piramicasa/libros/ocho-kybaliones.jpg",
    author: "Gabriel Silva",
    edition: "Segunda Edición",
    publisher: "Piramicasa",
    isbn: "9781291207439",
    pages: "212",
    dimensions: "15,6 x 23,39 cm",
    buyUrl: "https://www.lulu.com/shop/gabriel-silva/los-ocho-kybaliones/paperback/product-20519563.html",
    description: "Egipto también nos ha legado en herencia el Conocimiento de Thot, también llamado Conocimiento Hermético. El autor nos ha legado LOS OCHO KYBALIONES, la recuperación del Conocimiento de los Arcanos Mayores y Menores: los Ocho Principios Metafísicos y las Siete Leyes que componen a cada uno. Sin la comprensión de estas Leyes Universales, toda ciencia es incompleta.",
    excerpt: "Los Ocho Principios son Amor, Vida, Verdad, Inteligencia, Espíritu, Unidad, Principio y Eternidad. Estos son los Arcanos Mayores, mientras que las Siete Leyes que componen a cada uno son los Arcanos Menores. Leer este libro es inexorablemente entrar en una meditación entre lo intelectual y lo espiritual, para conocer a Dios a través de las Leyes de la Creación.",
    review: { author: "Miguel Alejandro Vivanco Aguirre", text: "Gabriel te comento que tu libro es un verdadero manantial de sabiduría en el cual la persona que lo comprende y practica obtendrá la felicidad real en su vida. ¡Que la Luz, el Amor y el Poder, restablezcan el Plan Divino en la Tierra!" },
  },
  {
    title: "Otros Libros de Gabriel Silva",
    img: "/assets/piramicasa/libros/otros-libros-gabriel-silva.jpg",
    img2: "/assets/piramicasa/libros/otros-libros-gabriel-silva-2.jpg",
    author: "Gabriel Silva / Gabriel de Alas",
    edition: "Varias",
    publisher: "Lulu.com",
    isbn: "Varios",
    pages: "Variable",
    dimensions: "Variable",
    buyUrl: "https://www.lulu.com/spotlight/piramicasa",
    description: "Saga 'El Tesoro Mágico' de ciencia ficción con fundamento científico, bajo el seudónimo Gabriel de Alas. Incluye 'El Tesoro Mágico de las Pirámides' (184 págs), 'El Tesoro Mágico de Iraotapar' (288 págs) y 'El Tesoro Mágico de Freizantenia' (400 págs). Novelas-documento basadas en descubrimientos ocultados por la egiptología ortodoxa.",
    excerpt: "Bajo el seudónimo Gabriel de Alas, estas novelas de ciencia ficción con fundamento científico narran aventuras que revelan descubrimientos ocultados por la egiptología ortodoxa. Una saga apasionante que entretiene mientras desvela verdades incómodas para la academia.",
    review: null,
  },
];

export default function LibrosPage() {
  const [scrolled, setScrolled] = useState(false);
  const [openLibro, setOpenLibro] = useState<number | null>(null);

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
          <div className="pm-label">Biblioteca</div>
          <h1>Libros sobre las Pirámides</h1>
          <p>Libros sobre el efecto piramidal y otros temas afines. Para empezar puedes informarte con el "Manual Básico de Piramidología" y luego profundizar en los libros de Gabriel Silva y el Dr. Ulises Sosa Salinas.</p>
        </div>
      </section>

      <section className="pm-section pm-section-cream">
        <div>
          <div className="pm-label" data-anim="section-heading">Manual Básico</div>
          <h2 data-anim="section-heading">Empieza por lo básico</h2>
          <p className="pm-lead" data-anim="section-lead">
            Para empezar puedes informarte con el "Manual Básico de Piramidología" actualizado a 2015.
            Luego podrás informarte profundamente en los libros del Dr. Ulises Sosa Salinas y Gabriel Silva de Piramicasa.
          </p>
          <div style={{ display: "flex", gap: "24px", alignItems: "center", flexWrap: "wrap", marginTop: "32px" }}>
            <img
              src="/assets/piramicasa/libros/manual_basico.jpg"
              alt="Manual Básico de Piramidología"
              className="pm-libro-manual-img"
            />
            <div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", marginBottom: "12px", color: "var(--pm-verde-deep)" }}>
                Manual Básico de Piramidología
              </h3>
              <p style={{ fontSize: "0.95rem", lineHeight: "1.7", color: "var(--pm-ink)", maxWidth: "500px" }}>
                Actualizado a 2015. Una introducción esencial al mundo de la piramidología, con los fundamentos
                básicos para entender el efecto piramidal y sus aplicaciones terapéuticas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pm-section-full pm-section-white">
        <div className="pm-section">
          <div>
            <div className="pm-label" data-anim="section-heading">Catálogo completo</div>
            <h2 data-anim="section-heading">Libros de Gabriel Silva</h2>
            <p className="pm-lead" data-anim="section-lead">
              Las obras más profundas e investigadas sobre el efecto piramidal, la terapia piramidal,
              la psicología transcendental y el conocimiento hermético.
            </p>
          </div>

          <div className="pm-libros-grid" data-anim="benefit-cards" style={{ marginTop: "48px" }}>
            {libros.map((libro, i) => (
              <div key={i} className="pm-libro-card" onClick={() => setOpenLibro(openLibro === i ? null : i)}>
                <div className="pm-libro-card-front">
                  <div className="pm-libro-cover-wrap">
                    <img src={libro.img} alt={libro.title} className="pm-libro-cover" />
                    {libro.img2 && (
                      <img src={libro.img2} alt={`${libro.title} - contraportada`} className="pm-libro-cover pm-libro-cover-2" />
                    )}
                    {libro.extraImgs && libro.extraImgs.map((ei, j) => (
                      <img key={j} src={ei} alt={`${libro.title} - imagen ${j+2}`} className="pm-libro-cover pm-libro-cover-extra" />
                    ))}
                  </div>
                  <div className="pm-libro-info">
                    <h3>{libro.title}</h3>
                    <p className="pm-libro-author">por {libro.author}</p>
                    <p className="pm-libro-desc">{libro.description}</p>
                    <div className="pm-libro-meta">
                      <span className="pm-libro-meta-pill">{libro.pages} págs</span>
                      <span className="pm-libro-meta-pill">{libro.edition}</span>
                      <span className="pm-libro-meta-pill">ISBN: {libro.isbn}</span>
                    </div>
                    <button className="pm-libro-toggle" onClick={(e) => { e.stopPropagation(); setOpenLibro(openLibro === i ? null : i); }}>
                      {openLibro === i ? "▲ Ver menos" : "▼ Ver más"}
                    </button>
                  </div>
                </div>
                <div className={`pm-libro-card-expanded${openLibro === i ? " pm-libro-expanded-show" : ""}`}>
                  {libro.excerpt && (
                    <div className="pm-libro-excerpt">
                      <div className="pm-libro-excerpt-label">Extracto del libro</div>
                      <p className="pm-libro-excerpt-text">{libro.excerpt}</p>
                    </div>
                  )}
                  <div className="pm-libro-details">
                    <div className="pm-libro-detail-row"><span>ISBN:</span><span>{libro.isbn}</span></div>
                    <div className="pm-libro-detail-row"><span>Edición:</span><span>{libro.edition}</span></div>
                    <div className="pm-libro-detail-row"><span>Páginas:</span><span>{libro.pages}</span></div>
                    <div className="pm-libro-detail-row"><span>Editor:</span><span>{libro.publisher}</span></div>
                    <div className="pm-libro-detail-row"><span>Dimensiones:</span><span>{libro.dimensions}</span></div>
                  </div>
                  {libro.review && (
                    <div className="pm-libro-review">
                      <p className="pm-libro-review-text">"{libro.review.text}"</p>
                      <p className="pm-libro-review-author">— {libro.review.author}</p>
                    </div>
                  )}
                  <a
                    href={libro.buyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pm-btn pm-btn-primary pm-libro-buy"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Conseguir libro
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pm-section pm-section-dark">
        <div style={{ textAlign: "center" }}>
          <div className="pm-label" data-anim="section-heading">Más recursos</div>
          <h2 data-anim="section-heading" style={{ color: "var(--pm-crema)" }}>Explora más sobre las pirámides</h2>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap", marginTop: "32px" }}>
            <Link href="/" className="pm-btn pm-btn-primary">Volver al inicio</Link>
            <Link href="/conferencias" className="pm-btn pm-btn-outline pm-btn-more-info">Ver conferencias</Link>
          </div>
        </div>
      </section>

      <PmFooter />
    </div>
  );
}
