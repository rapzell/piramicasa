export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10 leading-7">
      <h1 className="mb-4 text-4xl font-bold">Biones</h1>

      <p className="mb-4">
        Introduccion a la nocion de biones dentro del material historico-divulgativo de esta seccion,
        con enfoque tecnico para lectura y consulta.
      </p>

      <section className="mb-8 rounded-lg border p-6">
        <h2 className="mb-3 text-2xl font-semibold">Contenido orientativo</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Definicion basica y marco teorico.</li>
          <li>Referencias historicas del concepto.</li>
          <li>Relacion con geobiologia y estudios del entorno.</li>
        </ul>
      </section>

      <div className="flex flex-wrap gap-4">
        <a className="text-blue-700 underline" href="/GEOBIOLOGIA/geobiologia.html">Volver a Geobiologia</a>
        <a className="text-blue-700 underline" href="/es/index.htm">Ir a portada</a>
      </div>
    </main>
  );
}
