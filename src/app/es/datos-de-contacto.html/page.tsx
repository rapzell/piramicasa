export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10 leading-7">
      <h1 className="mb-5 text-3xl font-bold">Datos de contacto</h1>

      <p className="mb-4">
        Si sigue navegando, se comprende que acepta los terminos y condiciones legales.
      </p>

      <section className="mb-8 rounded-lg border p-6">
        <h2 className="mb-3 text-2xl font-semibold">Quienes somos</h2>
        <p className="mb-3">
          Gabriel Silva, autor y propietario de los conjuntos de derechos intelectuales registrados.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Piramicasa CDI</strong>: productos y construcciones piramidales.</li>
          <li><strong>Pirproar</strong>: diseno mobiliario, agro, agricultura biodinamica, permacultura y sistemas eolicos no convencionales.</li>
          <li><strong>Ankhempir</strong>: construcciones estrategicas, ingenieria avanzada, geobiologia y arquitectura para climas extremos.</li>
        </ul>
      </section>

      <section className="mb-8 rounded-lg border p-6">
        <h2 className="mb-3 text-2xl font-semibold">Contacto directo</h2>
        <p>Email: <a className="text-blue-700 underline" href="mailto:piramicasa@protonmail.com">piramicasa@protonmail.com</a></p>
        <p>Telefonos: +34 681087539 / +34 639284787</p>
      </section>

      <section className="mb-8 rounded-lg border p-6">
        <h2 className="mb-3 text-2xl font-semibold">Canales relacionados</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <a className="text-blue-700 underline" href="/es/centros_terapia_piramidal.html">
              Centros de terapia piramidal
            </a>
          </li>
          <li>
            <a className="text-blue-700 underline" href="/es/envio_de_piramides_a_todo_el_mundo.html">
              Envio de piramides a todo el mundo
            </a>
          </li>
          <li>
            <a className="text-blue-700 underline" href="/es/terminos_y_condiciones_avisos_legales_derechos_de_autor.htm">
              Terminos y garantias legales
            </a>
          </li>
        </ul>
      </section>

      <div className="flex gap-5">
        <a className="text-blue-700 underline" href="/es/index.htm">Volver a portada</a>
        <a className="text-blue-700 underline" href="/es/piramides.htm">Ver productos</a>
      </div>
    </main>
  );
}
