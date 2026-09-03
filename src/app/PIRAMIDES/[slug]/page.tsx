type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return [{ slug: "index" }];
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  return (
    <main className="mx-auto max-w-4xl p-8 leading-7">
      <h1 className="mb-4 text-3xl font-bold">Producto piramidal en clonacion</h1>
      <p className="mb-4">
        Has navegado a una subpagina de productos Piramicasa. Ya esta enrutada dentro del clon para
        evitar salida al dominio externo.
      </p>
      <p className="mb-4">
        Ruta solicitada: <strong>/PIRAMIDES/{slug}</strong>
      </p>
      <p className="mb-4">
        Esta ficha se puede clonar con todo su contenido en la siguiente tanda.
      </p>
      <div className="flex gap-4">
        <a className="text-blue-700 underline" href="/es/piramides.htm">
          Volver a gama de productos
        </a>
        <a className="text-blue-700 underline" href="/es/index.htm">
          Ir a portada
        </a>
      </div>
    </main>
  );
}
