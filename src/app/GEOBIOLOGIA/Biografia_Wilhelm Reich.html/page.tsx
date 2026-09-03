export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10 leading-7">
      <h1 className="mb-4 text-4xl font-bold">Biografia de Wilhelm Reich</h1>

      <p className="mb-4">
        Resumen divulgativo sobre Wilhelm Reich y su influencia en lineas de investigacion energetica,
        orgonomia y estudios relacionados con el habitat y la salud.
      </p>

      <section className="mb-8 rounded-lg border p-6">
        <h2 className="mb-3 text-2xl font-semibold">Puntos clave</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Contexto historico y trayectoria cientifica.</li>
          <li>Conceptos principales de sus investigaciones.</li>
          <li>Impacto en geobiologia y enfoques terapeuticos posteriores.</li>
        </ul>
      </section>

      <div className="flex flex-wrap gap-4">
        <a className="text-blue-700 underline" href="/GEOBIOLOGIA/geobiologia.html">Volver a Geobiologia</a>
        <a className="text-blue-700 underline" href="/index2-menu.html">Volver al menu principal</a>
      </div>
    </main>
  );
}
