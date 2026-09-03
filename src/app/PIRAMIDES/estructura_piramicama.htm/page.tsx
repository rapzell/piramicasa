export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10 leading-7">
      <h1 className="mb-4 text-4xl font-bold">Las camas piramidales - Piramicama</h1>
      <p className="mb-4">
        Duerme en una cama terapeutica y elegante. Piramicama se presenta como un modelo orientado a
        descanso profundo, confort y soporte para procesos reumaticos, musculares e inflamatorios.
      </p>

      <section className="mb-8 rounded-lg border p-6">
        <h2 className="mb-3 text-2xl font-semibold">Caracteristicas destacadas</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Enfoque antirreumatico y miorrelajante.</li>
          <li>Uso continuado durante el descanso nocturno.</li>
          <li>Modelo pensado para tratamiento permanente sin interrupciones.</li>
          <li>Fabricacion e instalacion con asesoramiento tecnico.</li>
        </ul>
      </section>

      <section className="mb-8 rounded-lg border p-6">
        <h2 className="mb-3 text-2xl font-semibold">Navegacion relacionada</h2>
        <div className="flex flex-wrap gap-4">
          <a className="text-blue-700 underline" href="/PIRAMIDES/estructura_hercules.htm">Ver modelo Hercules</a>
          <a className="text-blue-700 underline" href="/PIRAMIDES/estructura_hygia.htm">Ver Hygia y Horus</a>
          <a className="text-blue-700 underline" href="/es/piramides.htm">Volver a gama de productos</a>
        </div>
      </section>
    </main>
  );
}
