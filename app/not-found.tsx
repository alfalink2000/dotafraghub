import Link from "next/link";
import SiteShell from "@/components/SiteShell";

export default function NotFound() {
  return (
    <SiteShell>
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center gap-stack-md">
        <span className="font-display-xl text-display-xl text-primary opacity-50">404</span>
        <h1 className="font-display-lg text-display-lg text-on-surface">Pagina no encontrada</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
          La pagina que buscas no existe o fue movida a otra ubicacion. Verifica la URL o vuelve al inicio.
        </p>
        <Link
          href="/"
          className="bg-primary-container text-white font-label-bold text-label-bold px-6 py-3 rounded hover:brightness-110 transition-all shadow-[0_0_10px_rgba(179,58,58,0.3)] uppercase tracking-wider"
        >
          Volver al inicio
        </Link>
      </div>
    </SiteShell>
  );
}
