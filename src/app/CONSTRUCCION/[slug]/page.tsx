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
      <h1 className="mb-4 text-3xl font-bold">Seccion de construccion en clonacion</h1>
      <p className="mb-4">
        Esta ruta de Piramicasa ya esta integrada al clon para mantener la navegacion interna.
      </p>
      <p className="mb-4">Ruta solicitada: <strong>/CONSTRUCCION/{slug}</strong></p>
      <a className="text-blue-700 underline" href="/es/index.htm">Volver a portada clonada</a>
    </main>
  );
}
