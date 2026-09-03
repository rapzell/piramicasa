export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10 leading-7">
      <h1 className="mb-4 text-4xl font-bold">Productos Terapéuticos Piramidales</h1>
      <p className="mb-6">
        Esta sección está clonada dentro del proyecto para evitar salir a dominios externos. Aquí tienes
        la gama principal de productos Piramicasa y accesos a sus subfichas.
      </p>

      <section className="mb-8 rounded-lg border p-6">
        <h2 className="mb-3 text-2xl font-semibold">Pirámides terapéuticas de aluminio</h2>
        <p className="mb-4">
          Invertir en salud no es un gasto. Estos productos están orientados a bienestar, descanso,
          prevención y soporte terapéutico según la información técnica publicada por Piramicasa.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li><a className="text-blue-700 underline" href="/PIRAMIDES/estructura_piramicama.htm">Piramicama estándar</a></li>
          <li><a className="text-blue-700 underline" href="/PIRAMIDES/estructura_hercules.htm">Piramicama terapéutica Hércules</a></li>
          <li><a className="text-blue-700 underline" href="/PIRAMIDES/estructura_hygia.htm">Pirámides terapéuticas menores (Hygia-Horus)</a></li>
          <li><a className="text-blue-700 underline" href="/PIRAMIDES/Piramide.htm">Casa piramidal de campo / Bungalow piramidal</a></li>
          <li><a className="text-blue-700 underline" href="/PIRAMIDES/piramicasa_vital.html">Piramicasa Vital</a></li>
          <li><a className="text-blue-700 underline" href="/PIRAMIDES/arcones-faraday.html">Pirámide Faraday anti-microondas</a></li>
          <li><a className="text-blue-700 underline" href="/PIRAMIDES/estructura_pirajardin.htm">Pirámide Jardín</a></li>
          <li><a className="text-blue-700 underline" href="/PIRAMIDES/mascotas.html">Piramascota</a></li>
        </ul>
      </section>

      <section className="mb-8 rounded-lg border p-6">
        <h2 className="mb-3 text-2xl font-semibold">Costos, garantías y contacto</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li><a className="text-blue-700 underline" href="/PIRAMIDES/Listadecostos.htm">Costos aproximados</a></li>
          <li><a className="text-blue-700 underline" href="/es/avales_terapia_piramidal_oficial.html">Garantía oficial Piramicasa</a></li>
          <li><a className="text-blue-700 underline" href="/es/datos-de-contacto.html">Información de contacto</a></li>
          <li><a className="text-blue-700 underline" href="/es/centros_terapia_piramidal.html">Centros y terapeutas piramidales</a></li>
          <li><a className="text-blue-700 underline" href="/es/envio_de_piramides_a_todo_el_mundo.html">Envío de pirámides a todo el mundo</a></li>
          <li><a className="text-blue-700 underline" href="/es/centro-terapeutico-tipi.html">Centro terapéutico T.I.P.I.</a></li>
        </ul>
      </section>

      <div className="flex gap-5">
        <a className="text-blue-700 underline" href="/es/index.htm">Volver a portada Piramicasa</a>
        <a className="text-blue-700 underline" href="/">Volver a inicio del clon</a>
      </div>
    </main>
  );
}
