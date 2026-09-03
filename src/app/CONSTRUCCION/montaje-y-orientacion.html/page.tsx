export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10 leading-7">
      <h1 className="mb-4 text-4xl font-bold">Montaje y orientacion</h1>
      <p className="mb-4">
        Recomendaciones de montaje, alineacion y orientacion espacial para asegurar coherencia geometrica
        y funcionamiento previsto de la estructura piramidal.
      </p>

      <section className="mb-8 rounded-lg border p-6">
        <h2 className="mb-3 text-2xl font-semibold">Buenas practicas</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Revision previa del terreno y nivelacion.</li>
          <li>Alineacion de caras respecto a puntos cardinales.</li>
          <li>Comprobacion final de estabilidad estructural.</li>
        </ul>
      </section>

      <a className="text-blue-700 underline" href="/CONSTRUCCION/construccion-de-piramides.html">Volver a Construccion</a>
    </main>
  );
}
