export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10 leading-7">
      <h1 className="mb-4 text-3xl font-bold">Términos y garantías legales</h1>
      <p className="mb-4">
        Esta seccion resume criterios legales y de uso del ecosistema Piramicasa dentro del clon,
        a la espera de incorporar el texto legal completo definitivo.
      </p>

      <section className="mb-8 rounded-lg border p-6">
        <h2 className="mb-3 text-2xl font-semibold">Resumen legal provisional</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Uso informativo y tecnico del contenido publicado.</li>
          <li>Respeto a derechos intelectuales y autoria del material.</li>
          <li>Canales de contacto para consultas legales y tecnicas.</li>
        </ul>
      </section>

      <section className="mb-8 rounded-lg border p-6">
        <h2 className="mb-3 text-2xl font-semibold">Secciones relacionadas</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <a className="text-blue-700 underline" href="/es/datos-de-contacto.html">
              Datos de contacto
            </a>
          </li>
          <li>
            <a className="text-blue-700 underline" href="/es/envio_de_piramides_a_todo_el_mundo.html">
              Envio de piramides a todo el mundo
            </a>
          </li>
        </ul>
      </section>

      <div className="flex gap-5">
        <a className="text-blue-700 underline" href="/es/index.htm">Ir a portada Piramicasa</a>
        <a className="text-blue-700 underline" href="/es/piramides.htm">Ver gama de productos</a>
      </div>
    </main>
  );
}
