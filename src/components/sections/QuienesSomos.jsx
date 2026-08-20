import Image from "next/image";

// TODO: descargar la imagen ilustrativa y guardarla en `public/images/nosotros.jpg`
// (o cambiar el src de abajo). Mientras el archivo no exista, se ve un bloque gris de respaldo.
export default function QuienesSomos() {
  return (
    <section
      id="quienes-somos"
      className="grid scroll-mt-20 lg:grid-cols-[45%_55%]"
    >
      <div className="relative min-h-[420px] bg-neutral-200 lg:min-h-[600px]">
        <Image src="/images/nosotros.jpg" alt="" fill className="object-cover" />
      </div>

      <div className="flex flex-col justify-center px-8 py-16 sm:px-16 lg:py-24">
        <h2 className="text-4xl font-bold text-primary sm:text-5xl">
          Nosotros
        </h2>
        <p className="mt-6 max-w-md text-lg leading-relaxed">
          En Cafercorr fabricamos envases de cartón corrugado a medida,
          acompañando cada producto desde el diseño inicial hasta la entrega
          final. Con años de trayectoria en el rubro del embalaje,
          combinamos experiencia y procesos de producción eficientes para
          ofrecer soluciones resistentes, funcionales y pensadas a medida
          de cada cliente.
        </p>
      </div>
    </section>
  );
}
