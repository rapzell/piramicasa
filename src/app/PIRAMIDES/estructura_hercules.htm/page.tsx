export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10 leading-7">
      <h1 className="mb-4 text-4xl font-bold">Piramicama Hercules</h1>
      <p className="mb-4">
        Hercules se describe como una cama terapeutica de mayor potencia, orientada a personas que
        necesitan un trabajo intensivo en procesos reumaticos, escleroticos e infecciosos.
      </p>

      <section className="mb-8 rounded-lg border p-6">
        <h2 className="mb-3 text-2xl font-semibold">Utilidades principales</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Soporte intensivo para casos cronicos.</li>
          <li>Aplicacion para usuarios que requieren mayor potencia de trabajo.</li>
          <li>Uso por personas sanas para aumentar resistencia organica.</li>
          <li>Instalacion y envio con planificacion personalizada.</li>
        </ul>
      </section>

      <div className="flex flex-wrap gap-4">
        <a className="text-blue-700 underline" href="/PIRAMIDES/estructura_piramicama.htm">Ver Piramicama estandar</a>
        <a className="text-blue-700 underline" href="/es/piramides.htm">Volver a gama de productos</a>
      </div>
    </main>
  );
}
