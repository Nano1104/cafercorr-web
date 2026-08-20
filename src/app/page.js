import Hero from "@/components/sections/Hero";
import QuienesSomos from "@/components/sections/QuienesSomos";
import Servicios from "@/components/sections/Servicios";
import Contacto from "@/components/sections/Contacto";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <Reveal>
        <QuienesSomos />
      </Reveal>
      <Servicios />
      {/* <Reveal>
        <Contacto />
      </Reveal> */}
    </>
  );
}
