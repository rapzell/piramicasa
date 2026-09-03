export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10 leading-7">
      <h1 className="mb-4 text-4xl font-bold">Avales medicos y garantias de la terapia piramidal</h1>
      <p className="mb-6">La ciencia medica avala el efecto piramidal segun documentacion publicada por Piramicasa.</p>

      <section className="mb-8 rounded-lg border p-6">
        <h2 className="mb-3 text-2xl font-semibold">Puntos principales</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Referencia a avales clinicos y experiencia terapeutica acumulada.</li>
          <li>Mencion de certificacion oficial sobre propiedades antiinflamatorias, analgesicas y miorrelajantes.</li>
          <li>Garantia de productos basada en materiales y estandares de fabricacion declarados por el fabricante.</li>
        </ul>
      </section>

      <section className="mb-8 rounded-lg border p-6">
        <h2 className="mb-3 text-2xl font-semibold">Lecturas relacionadas</h2>
        <div className="flex flex-wrap gap-4">
          <a className="text-blue-700 underline" href="/es/piramides.htm">Gama de productos</a>
          <a className="text-blue-700 underline" href="/es/centros_terapia_piramidal.html">Centros de terapia</a>
          <a className="text-blue-700 underline" href="/es/terminos_y_condiciones_avisos_legales_derechos_de_autor.htm">Terminos y garantias legales</a>
          <a className="text-blue-700 underline" href="/es/datos-de-contacto.html">Datos de contacto</a>
          <a className="text-blue-700 underline" href="/es/index.htm">Portada</a>
        </div>
      </section>

      <section className="mb-8 rounded-lg border p-6">
        <h2 className="mb-3 text-2xl font-semibold">Uso responsable de esta informacion</h2>
        <p>
          Este contenido se presenta con fines informativos y de orientacion tecnica. Para decisiones
          de salud o tratamientos, se recomienda complementar con asesoramiento profesional adecuado.
        </p>
      </section>
    </main>
  );
}
