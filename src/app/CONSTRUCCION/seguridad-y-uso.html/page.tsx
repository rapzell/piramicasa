export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10 leading-7">
      <h1 className="mb-4 text-4xl font-bold">Seguridad y uso</h1>
      <p className="mb-4">
        Indicaciones generales de seguridad, operativa y mantenimiento para un uso responsable de los
        espacios y equipos piramidales.
      </p>

      <section className="mb-8 rounded-lg border p-6">
        <h2 className="mb-3 text-2xl font-semibold">Recomendaciones</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Uso supervisado en sesiones terapeuticas.</li>
          <li>Inspecciones periodicas de estructura y anclajes.</li>
          <li>Protocolos de acceso y permanencia.</li>
        </ul>
      </section>

      <a className="text-blue-700 underline" href="/CONSTRUCCION/construccion-de-piramides.html">Volver a Construccion</a>
    </main>
  );
}
