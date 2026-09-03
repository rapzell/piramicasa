export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10 leading-7">
      <h1 className="mb-4 text-4xl font-bold">Envio de piramides a todo el mundo</h1>
      <p className="mb-6">
        Resumen del proceso de compra, pago y envio para productos piramidales con atencion
        personalizada.
      </p>

      <section className="mb-8 rounded-lg border p-6">
        <h2 className="mb-3 text-2xl font-semibold">Proceso de compra</h2>
        <ol className="list-decimal space-y-2 pl-6">
          <li>Contacto inicial para definir modelo y necesidades.</li>
          <li>Comunicacion para elegir medidas, acabados y condiciones.</li>
          <li>Pago por los medios acordados (incluyendo opcion de PayPal).</li>
          <li>Envio o instalacion en la fecha definida.</li>
        </ol>
      </section>

      <section className="mb-8 rounded-lg border p-6">
        <h2 className="mb-3 text-2xl font-semibold">Contactar</h2>
        <p>
          Email: <a className="text-blue-700 underline" href="mailto:piramicasa@protonmail.com">piramicasa@protonmail.com</a>
        </p>
      </section>

      <section className="mb-8 rounded-lg border p-6">
        <h2 className="mb-3 text-2xl font-semibold">Informacion complementaria</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <a className="text-blue-700 underline" href="/es/datos-de-contacto.html">
              Datos de contacto y vias de atencion
            </a>
          </li>
          <li>
            <a className="text-blue-700 underline" href="/PIRAMIDES/Listadecostos.htm">
              Costos aproximados y orientacion inicial
            </a>
          </li>
          <li>
            <a className="text-blue-700 underline" href="/es/terminos_y_condiciones_avisos_legales_derechos_de_autor.htm">
              Terminos y garantias legales
            </a>
          </li>
        </ul>
      </section>

      <div className="flex flex-wrap gap-4">
        <a className="text-blue-700 underline" href="/es/piramides.htm">Volver a gama de productos</a>
        <a className="text-blue-700 underline" href="/es/index.htm">Volver a portada</a>
      </div>
    </main>
  );
}
