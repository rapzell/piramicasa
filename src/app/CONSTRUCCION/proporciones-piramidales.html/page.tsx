export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10 leading-7">
      <h1 className="mb-4 text-4xl font-bold">Proporciones piramidales</h1>
      <p className="mb-4">
        Referencia tecnica sobre proporciones, angulos y relaciones geometricas usadas para el diseno
        de estructuras piramidales en distintos formatos.
      </p>

      <section className="mb-8 rounded-lg border p-6">
        <h2 className="mb-3 text-2xl font-semibold">Resumen</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Relaciones de base y altura.</li>
          <li>Importancia de la orientacion y simetria.</li>
          <li>Ajustes segun uso terapeutico o habitacional.</li>
        </ul>
      </section>

      <a className="text-blue-700 underline" href="/CONSTRUCCION/construccion-de-piramides.html">Volver a Construccion</a>
    </main>
  );
}
