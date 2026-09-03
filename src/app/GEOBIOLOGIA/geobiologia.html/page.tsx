export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10 leading-7">
      <h1 className="mb-4 text-4xl font-bold">Geobiologia</h1>
      <p className="mb-4">
        Area dedicada al estudio del habitat, energia ambiental y su relacion con el bienestar humano,
        siguiendo el enfoque tecnico-divulgativo de Piramicasa.
      </p>

      <section className="mb-8 rounded-lg border p-6">
        <h2 className="mb-3 text-2xl font-semibold">Temas relacionados</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li><a className="text-blue-700 underline" href="/GEOBIOLOGIA/Biografia_Wilhelm%20Reich.html">Biografia Wilhelm Reich</a></li>
          <li><a className="text-blue-700 underline" href="/GEOBIOLOGIA/biones.html">Biones</a></li>
          <li>Interaccion entre salud, espacio habitable y entorno.</li>
        </ul>
      </section>

      <a className="text-blue-700 underline" href="/index2-menu.html">Volver al menu principal</a>
    </main>
  );
}
