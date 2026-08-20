import { Headphones, Lightbulb, Settings, Package } from "lucide-react";
import Reveal from "@/components/Reveal";

// TODO: reemplazar por las descripciones reales que confirme el cliente.
const SERVICIOS = [
  {
    title: "Contacto con asesorías y ventas",
    description:
      "Te asesoramos para elegir el envase ideal según tu producto y volumen.",
    Icon: Headphones,
  },
  {
    title: "Diseño y desarrollo del envase",
    description:
      "Desarrollamos el diseño técnico y gráfico a medida de cada proyecto.",
    Icon: Lightbulb,
  },
  {
    title: "Producción del envase final",
    description:
      "Fabricamos el envase manteniendo el mismo estándar de calidad en cada lote.",
    Icon: Settings,
  },
  {
    title: "Entrega del producto al cliente",
    description:
      "Coordinamos la logística para que el pedido llegue a tiempo y en perfecto estado.",
    Icon: Package,
  },
];

export default function Servicios() {
  return (
    <section
      id="servicios"
      className="scroll-mt-20 px-8 py-20 sm:px-16 sm:py-24"
    >
      <Reveal className="mx-auto flex max-w-4xl items-center gap-6">
        <span className="h-px flex-1 bg-primary" />
        <h2 className="text-3xl font-bold tracking-wide text-primary uppercase sm:text-4xl">
          Servicios
        </h2>
        <span className="h-px flex-1 bg-primary" />
      </Reveal>

      <ul className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-2">
        {SERVICIOS.map(({ title, description, Icon }, index) => (
          <li key={title}>
            <Reveal delay={index * 0.1}>
              <div className="flex min-h-[260px] flex-col gap-4 rounded-md bg-primary p-8 transition-[filter] duration-300 hover:brightness-110">
                <Icon className="h-10 w-10 text-white" strokeWidth={1.5} />
                <div>
                  <p className="text-lg font-semibold text-white">{title}</p>
                  <p className="mt-2 text-sm text-white/80">{description}</p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
