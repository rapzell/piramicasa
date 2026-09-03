export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10 leading-7">
      <h1 className="mb-4 text-3xl font-bold">Centro Terapeutico T.I.P.I.</h1>
      <p className="mb-4">
        Espacio informativo orientado a la actividad terapeutica vinculada al enfoque piramidal,
        integrado ya dentro del clon para mantener toda la navegacion en rutas internas.
      </p>

      <section className="mb-8 rounded-lg border p-6">
        <h2 className="mb-3 text-2xl font-semibold">Objetivo del centro</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Atencion personalizada con orientacion tecnica y divulgativa.</li>
          <li>Seguimiento de procesos de bienestar y habitos de uso.</li>
          <li>Coordinacion con otras secciones terapeuticas de Piramicasa.</li>
        </ul>
      </section>

      <section className="mb-8 rounded-lg border p-6">
        <h2 className="mb-3 text-2xl font-semibold">Informacion relacionada</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <a className="text-blue-700 underline" href="/es/centros_terapia_piramidal.html">
              Centros de terapia piramidal
            </a>
          </li>
          <li>
            <a className="text-blue-700 underline" href="/es/avales_terapia_piramidal_oficial.html">
              Avales y respaldo tecnico
            </a>
          </li>
          <li>
            <a className="text-blue-700 underline" href="/es/datos-de-contacto.html">
              Datos de contacto
            </a>
          </li>
        </ul>
      </section>

      <div className="flex flex-wrap gap-4">
        <a className="text-blue-700 underline" href="/es/centros_terapia_piramidal.html">Volver a centros de terapia</a>
        <a className="text-blue-700 underline" href="/es/index.htm">Volver a portada</a>
      </div>
    </main>
  );
}
