export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10 leading-7">
      <h1 className="mb-4 text-4xl font-bold">Dossier Basico Piramicasa</h1>

      <p className="mb-4">
        Esta seccion mantiene la navegacion interna del clon mientras terminamos la migracion completa
        del dossier ilustrativo original.
      </p>

      <section className="mb-8 rounded-lg border p-6">
        <h2 className="mb-3 text-2xl font-semibold">Estado de migracion</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Ruta interna creada para evitar salida a dominio externo.</li>
          <li>Contenido base disponible para edicion y ampliacion.</li>
          <li>Pendiente: incorporar el PDF final en medios de WordPress.</li>
        </ul>
      </section>

      <div className="flex flex-wrap gap-4">
        <a className="text-blue-700 underline" href="/es/index.htm">Volver a portada</a>
        <a className="text-blue-700 underline" href="/index2-menu.html">Volver al menu principal</a>
      </div>
    </main>
  );
}
