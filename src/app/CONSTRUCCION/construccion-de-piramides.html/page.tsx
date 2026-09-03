export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10 leading-7">
      <h1 className="mb-4 text-4xl font-bold">Construccion de piramides y formulas</h1>
      <p className="mb-4">
        Seccion tecnica orientada a criterios de construccion, proporciones y recomendaciones de
        fabricacion aplicadas por Piramicasa.
      </p>

      <section className="mb-8 rounded-lg border p-6">
        <h2 className="mb-3 text-2xl font-semibold">Contenido de esta seccion</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <a className="text-blue-700 underline" href="/CONSTRUCCION/proporciones-piramidales.html">
              Fundamentos de proporcion y geometria piramidal
            </a>
            .
          </li>
          <li>
            <a className="text-blue-700 underline" href="/CONSTRUCCION/materiales-de-construccion.html">
              Criterios tecnicos de materiales y ensamblado
            </a>
            .
          </li>
          <li>
            <a className="text-blue-700 underline" href="/CONSTRUCCION/seguridad-y-uso.html">
              Notas de seguridad y uso segun el tipo de estructura
            </a>
            .
          </li>
          <li>Referencia a formulas y modelos aplicados.</li>
        </ul>
      </section>

      <section className="mb-8 rounded-lg border p-6">
        <h2 className="mb-3 text-2xl font-semibold">Guias destacadas</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <a className="text-blue-700 underline" href="/CONSTRUCCION/montaje-y-orientacion.html">
              Montaje y orientacion
            </a>
          </li>
        </ul>
      </section>

      <div className="flex flex-wrap gap-4">
        <a className="text-blue-700 underline" href="/index2-menu.html">Volver al menu principal</a>
        <a className="text-blue-700 underline" href="/es/piramides.htm">Ver gama de productos</a>
      </div>
    </main>
  );
}
