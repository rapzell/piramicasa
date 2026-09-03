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
      <h1 className="mb-4 text-3xl font-bold">Seccion Piramicasa en clonacion</h1>
      <p className="mb-4">
        Esta pagina pertenece al ecosistema de Piramicasa y se ha redirigido al clon para mantener
        toda la navegacion dentro del proyecto.
      </p>
      <p className="mb-4">
        Ruta solicitada: <strong>/es/{slug}</strong>
      </p>
      <p className="mb-4">
        Estamos incorporando esta seccion al clon. Si quieres priorizarla, indicanos esta ruta para
        clonarla completa en la siguiente iteracion.
      </p>
      <a className="text-blue-700 underline" href="/es/index.htm">
        Volver a la portada clonada
      </a>
    </main>
  );
}
