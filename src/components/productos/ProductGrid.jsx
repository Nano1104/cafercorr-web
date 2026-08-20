"use client";

import { useState } from "react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { CATEGORIES, PRODUCTOS } from "@/data/productos";

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selected, setSelected] = useState(null);

  const filtered =
    activeCategory === "Todos"
      ? PRODUCTOS
      : PRODUCTOS.filter((producto) => producto.category === activeCategory);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3">
        {CATEGORIES.map((category) => {
          const isActive = category === activeCategory;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-5 py-2 text-sm font-medium tracking-wide uppercase transition-colors ${
                isActive
                  ? "border-primary bg-primary text-white"
                  : "border-primary text-primary hover:bg-primary/10"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <ul className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((producto) => (
          <li key={producto.id}>
            <button
              type="button"
              onClick={() => setSelected(producto)}
              className="group block w-full text-left"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                <Image
                  src={producto.image}
                  alt={producto.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="mt-4 text-xs font-medium tracking-wide text-primary uppercase">
                {producto.category}
              </p>
              <p className="text-lg font-semibold">{producto.name}</p>
            </button>
          </li>
        ))}
      </ul>

      <Dialog.Root
        open={selected !== null}
        onOpenChange={(open) => !open && setSelected(null)}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-40 bg-black/60" />
          <Dialog.Content className="fixed top-1/2 left-1/2 z-50 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 bg-background p-8">
            {selected && (
              <>
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                  <Image
                    src={selected.image}
                    alt={selected.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mt-6 text-xs font-medium tracking-wide text-primary uppercase">
                  {selected.category}
                </p>
                <Dialog.Title className="text-2xl font-bold">
                  {selected.name}
                </Dialog.Title>
                <Dialog.Description className="mt-3 text-base leading-relaxed">
                  {selected.description}
                </Dialog.Description>
              </>
            )}
            <Dialog.Close
              aria-label="Cerrar"
              className="absolute top-4 right-4 text-foreground/70 hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
