export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10 leading-7">
      <h1 className="mb-4 text-4xl font-bold">Piramide Jardin</h1>
      <p className="mb-4">
        Modelo pensado para espacios exteriores, con enfoque en bienestar ambiental y uso recreativo o
        terapeutico segun las recomendaciones tecnicas de Piramicasa.
      </p>

      <section className="mb-8 rounded-lg border p-6">
        <h2 className="mb-3 text-2xl font-semibold">Caracteristicas orientativas</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Estructura adaptable a jardines y zonas abiertas.</li>
          <li>Opciones de dimensionado y materiales segun entorno.</li>
          <li>Planificacion previa de orientacion y montaje.</li>
        </ul>
      </section>

      <div className="flex flex-wrap gap-4">
        <a className="text-blue-700 underline" href="/es/piramides.htm">Volver a gama de productos</a>
        <a className="text-blue-700 underline" href="/PIRAMIDES/Listadecostos.htm">Ver costos aproximados</a>
      </div>
    </main>
  );
}
