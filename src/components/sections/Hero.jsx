import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import HeroTitle from "@/components/sections/HeroTitle";

// TODO: descargar la imagen del Hero y guardarla en `public/images/hero.jpg`
// (o cambiar el src de abajo por la ruta relativa que uses).
// Mientras el archivo no exista, se ve el fondo oscuro de respaldo + el overlay.
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate min-h-screen scroll-mt-20 overflow-hidden bg-neutral-900"
    >
      <Image
        src="/images/hero.jpg"
        alt=""
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/75" />

      <HeroTitle />

      <div className="absolute inset-x-0 top-1/2 z-20 -translate-y-1/2">
        <Navbar />
      </div>
    </section>
  );
}
