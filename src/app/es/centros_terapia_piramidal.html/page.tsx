export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10 leading-7">
      <h1 className="mb-4 text-4xl font-bold">Centros de terapia piramidal</h1>
      <p className="mb-6">La mejor terapia para sanar. Directorio resumido de centros y terapeutas asociados.</p>

      <section className="mb-8 rounded-lg border p-6">
        <h2 className="mb-3 text-2xl font-semibold">Centros destacados</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Centro Terapeutico Aurora - Nicaragua</li>
          <li>Centro Terapeutico Khyma - Catalunya</li>
          <li>Centro Terapeutico Leganes - Madrid</li>
          <li>Centro Terapeutico Antahkarana - Valencia</li>
          <li>Herboristeria El Despertar - Valencia</li>
          <li>Centro Terapeutico Juan Donate - Espana (itinerante)</li>
          <li>Centro Terapeutico El Rincon del Alma - Madrid</li>
          <li>Terapeutas holisticos Karl y Ania - Barcelona</li>
        </ul>
      </section>

      <section className="mb-8 rounded-lg border p-6">
        <h2 className="mb-3 text-2xl font-semibold">Enlaces internos</h2>
        <div className="flex flex-wrap gap-4">
          <a className="text-blue-700 underline" href="/es/centro-terapeutico-tipi.html">Centro Terapeutico T.I.P.I.</a>
          <a className="text-blue-700 underline" href="/es/datos-de-contacto.html">Informacion de contacto</a>
          <a className="text-blue-700 underline" href="/es/avales_terapia_piramidal_oficial.html">Avales y garantias</a>
          <a className="text-blue-700 underline" href="/es/index.htm">Volver a portada</a>
        </div>
      </section>

      <section className="mb-8 rounded-lg border p-6">
        <h2 className="mb-3 text-2xl font-semibold">Notas de atencion</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Los centros pueden operar con cita previa segun disponibilidad local.</li>
          <li>Se recomienda contacto previo para orientacion personalizada.</li>
          <li>La red terapeutica puede ampliarse en futuras actualizaciones del clon.</li>
        </ul>
      </section>
    </main>
  );
}
