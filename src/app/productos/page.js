import Navbar from "@/components/layout/Navbar";
import ProductGrid from "@/components/productos/ProductGrid";

export const metadata = {
  title: "Productos | Cafercorr",
};

export default function ProductosPage() {
  return (
    <>
      <Navbar />
      <section className="px-8 py-20 sm:px-16 sm:py-24">
        <h1 className="text-center text-4xl font-bold text-primary uppercase sm:text-5xl">
          Productos
        </h1>
        <div className="mt-12">
          <ProductGrid />
        </div>
      </section>
    </>
  );
}
