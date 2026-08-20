import Link from "next/link";
import Image from "next/image";
import { Mail, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER, CONTACT_EMAIL } from "@/lib/contact";

const LINKS = [
  { href: "/productos", label: "Productos" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#contacto", label: "Contacto" },
];

const linkClassName =
  "relative inline-block text-sm text-white after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-out hover:after:w-full focus-visible:after:w-full focus-visible:outline-none";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="mt-auto scroll-mt-20 bg-footer px-8 py-12 text-white sm:px-16"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-white p-1.5">
            <Image
              src="/images/logo-fer.png"
              alt="Cafercorr"
              width={48}
              height={48}
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <p className="text-xl font-bold">CAFERCORR</p>
            <p className="mt-1 max-w-xs text-sm text-white/70">
              Envases de cartón corrugado a medida.
            </p>
          </div>
        </div>

        <ul className="flex gap-6">
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className={linkClassName}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            aria-label="Mail"
            className="text-white/80 transition-colors hover:text-white"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-white/80 transition-colors hover:text-white"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-4xl border-t border-white/20 pt-6">
        <p className="text-center text-sm text-white/70">
          © {new Date().getFullYear()} Cafercorr. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
