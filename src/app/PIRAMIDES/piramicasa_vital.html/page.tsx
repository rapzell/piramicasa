export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10 leading-7">
      <h1 className="mb-4 text-4xl font-bold">Piramicasa Vital</h1>
      <p className="mb-4">
        Hogar piramidal orientado a vida saludable y arquitectura funcional. El modelo Vital se plantea
        como vivienda ecologica, eolorresistente y sismorresistente, con enfoque de bienestar integral.
      </p>

      <section className="mb-8 rounded-lg border p-6">
        <h2 className="mb-3 text-2xl font-semibold">Caracteristicas generales</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Diseno arquitectonico piramidal para uso residencial.</li>
          <li>Opciones de instalacion en diferentes paises y terrenos.</li>
          <li>Asesoria tecnica para construccion por cuenta propia.</li>
          <li>Modelos y escalados segun necesidades del proyecto.</li>
        </ul>
      </section>

      <section className="mb-8 rounded-lg border p-6">
        <h2 className="mb-3 text-2xl font-semibold">Enlaces internos</h2>
        <div className="flex flex-wrap gap-4">
          <a className="text-blue-700 underline" href="/PIRAMIDES/Piramide.htm">Bungalow piramidal</a>
          <a className="text-blue-700 underline" href="/es/piramides.htm">Volver a gama de productos</a>
          <a className="text-blue-700 underline" href="/es/index.htm">Portada Piramicasa</a>
        </div>
      </section>
    </main>
  );
}
