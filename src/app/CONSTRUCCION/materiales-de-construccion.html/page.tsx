export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10 leading-7">
      <h1 className="mb-4 text-4xl font-bold">Materiales de construccion</h1>
      <p className="mb-4">
        Guia base de materiales sugeridos para estructuras piramidales y criterios de seleccion segun
        resistencia, durabilidad y objetivo de uso.
      </p>

      <section className="mb-8 rounded-lg border p-6">
        <h2 className="mb-3 text-2xl font-semibold">Criterios</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Compatibilidad del material con el entorno.</li>
          <li>Estabilidad de uniones y fijaciones.</li>
          <li>Mantenimiento y vida util.</li>
        </ul>
      </section>

      <a className="text-blue-700 underline" href="/CONSTRUCCION/construccion-de-piramides.html">Volver a Construccion</a>
    </main>
  );
}
