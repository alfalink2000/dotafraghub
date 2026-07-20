import Link from "next/link";

const FOOTER_LINKS = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-surface-container-lowest w-full mt-stack-lg border-t border-outline-variant">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter px-margin-mobile md:px-margin-desktop py-stack-lg max-w-container-max mx-auto">
        <div className="flex flex-col gap-stack-sm">
          <span className="font-display-md text-display-md text-secondary">DotaFragHub</span>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            &copy; {year} DotaFragHub. Todos los derechos reservados. No afiliado a Valve Corporation.
          </p>
        </div>
        <div className="flex flex-col gap-stack-sm md:items-center">
          <h4 className="font-label-bold text-label-bold text-on-surface uppercase tracking-widest mb-2">
            Legal
          </h4>
          <ul className="flex flex-col gap-2 font-body-sm text-body-sm">
            {FOOTER_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  className="text-on-surface-variant hover:text-secondary transition-colors opacity-80 hover:opacity-100 transition-opacity"
                  href={l.href}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-stack-sm md:items-end">
          <h4 className="font-label-bold text-label-bold text-on-surface uppercase tracking-widest mb-2">
            Comunidad
          </h4>
          <p className="font-body-sm text-body-sm text-on-surface-variant/80 max-w-xs md:text-right">
            Dota 2 y todos sus nombres son marcas de Valve Corporation. Este sitio es un fansite informativo.
          </p>
        </div>
      </div>
    </footer>
  );
}
