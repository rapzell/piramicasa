type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return [{ slug: "ViajeEgipto" }];
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  return (
    <main className="mx-auto max-w-5xl px-6 py-10 leading-7">
      <h1 className="mb-4 text-3xl font-bold">Seccion Egipto en clonacion</h1>
      <p className="mb-4">
        Esta ruta de Egipto ya queda integrada en el clon para mantener la navegacion interna.
      </p>
      <p className="mb-6">
        Ruta solicitada: <strong>/EGIPTO/{slug}</strong>
      </p>

      <div className="flex flex-wrap gap-4">
        <a className="text-blue-700 underline" href="/EGIPTO/ViajeEgipto.htm">Ver Viaje a Egipto</a>
        <a className="text-blue-700 underline" href="/JOYAS/joyas.htm">Volver a Joyas</a>
        <a className="text-blue-700 underline" href="/es/index.htm">Volver a portada</a>
      </div>
    </main>
  );
}
