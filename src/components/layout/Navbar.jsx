import Link from "next/link";

const LINKS = [
  { href: "/productos", label: "PRODUCTOS" },
  { href: "/#servicios", label: "SERVICIOS" },
  { href: "/#contacto", label: "CONTACTO" },
];

export default function Navbar() {
  return (
    <nav className="bg-primary">
      <ul className="flex justify-center gap-20 py-5">
        {LINKS.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="relative inline-block text-sm font-medium tracking-wide text-white uppercase after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-out hover:after:w-full focus-visible:after:w-full focus-visible:outline-none"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
