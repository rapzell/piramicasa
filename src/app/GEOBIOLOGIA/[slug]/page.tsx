type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    { slug: "Biografia_Wilhelm Reich.html" },
    { slug: "biones.html" }
  ];
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  return (
    <main className="mx-auto max-w-4xl p-8 leading-7">
      <h1 className="mb-4 text-3xl font-bold">Seccion de geobiologia en clonacion</h1>
      <p className="mb-4">
        Esta subpagina del ecosistema Piramicasa esta en proceso de clonado completo.
      </p>
      <p className="mb-4">Ruta solicitada: <strong>/GEOBIOLOGIA/{slug}</strong></p>
      <div className="flex gap-4">
        <a className="text-blue-700 underline" href="/index2-menu.html">Volver al menu</a>
        <a className="text-blue-700 underline" href="/es/index.htm">Volver a portada</a>
      </div>
    </main>
  );
}
