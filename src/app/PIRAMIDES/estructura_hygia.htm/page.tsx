export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10 leading-7">
      <h1 className="mb-4 text-4xl font-bold">Piramides terapeuticas Hygia y Horus</h1>
      <p className="mb-4">
        Modelos pensados para medicos y terapeutas alternativos, con aplicacion en terapias locales y
        tratamientos de apoyo en procesos agudos y cronicos.
      </p>

      <section className="mb-8 rounded-lg border p-6">
        <h2 className="mb-3 text-2xl font-semibold">Puntos clave</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Uso para terapias localizadas.</li>
          <li>Compatibles con rutinas de fisioterapia y masaje.</li>
          <li>Versiones Hygia y Horus para diferentes necesidades.</li>
          <li>Fabricacion en aluminio con especificaciones tecnicas del fabricante.</li>
        </ul>
      </section>

      <div className="flex flex-wrap gap-4">
        <a className="text-blue-700 underline" href="/PIRAMIDES/estructura_piramicama.htm">Ver Piramicama</a>
        <a className="text-blue-700 underline" href="/es/piramides.htm">Volver a gama de productos</a>
      </div>
    </main>
  );
}
