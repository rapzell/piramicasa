export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10 leading-7">
      <h1 className="mb-4 text-4xl font-bold">Viaje a Egipto con enfoque tecnico-cultural</h1>
      <p className="mb-4">
        Pagina interna del clon para mantener la navegacion dentro del proyecto mientras se completa
        la migracion del contenido original de viajes y actividades en Egipto.
      </p>

      <section className="mb-8 rounded-lg border p-6">
        <h2 className="mb-3 text-2xl font-semibold">Contenido previsto</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Itinerario orientativo con visitas a enclaves historicos.</li>
          <li>Notas tecnicas y culturales del programa.</li>
          <li>Informacion de contacto y reservas.</li>
        </ul>
      </section>

      <div className="flex flex-wrap gap-4">
        <a className="text-blue-700 underline" href="/JOYAS/joyas.htm">Volver a Joyas</a>
        <a className="text-blue-700 underline" href="/es/index.htm">Volver a portada</a>
      </div>
    </main>
  );
}
