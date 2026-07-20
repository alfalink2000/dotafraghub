import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "About DotaFragHub - Nuestra mision y el equipo",
  description:
    "Conoce al equipo detras de DotaFragHub: una comunidad de jugadores apasionados creando el mejor contenido de Dota 2 en español.",
  alternates: { canonical: "/about" },
};

const TEAM = [
  {
    name: "Juan Carlos",
    role: "Founder & Lead Content",
    desc: "Jugador de Dota 2 desde 2008, ex-semipro en South America. Apasionado por el análisis de datos y las mecánicas ocultas del juego.",
    color: "text-primary",
  },
  {
    name: "Maria Rodriguez",
    role: "Community Manager",
    desc: "Experta en engagement y contenido viral. Encargada de mantener la comunidad activa y el contenido al dia con el meta.",
    color: "text-secondary",
  },
  {
    name: "Pedro Sanchez",
    role: "Data Analyst",
    desc: "Ingeniero de datos que automatiza el scraping de APIs de Dota para mantener las estadisticas siempre actualizadas.",
    color: "text-tertiary",
  },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <header className="mb-stack-lg">
        <h1 className="font-display-lg text-display-lg text-on-surface mb-stack-sm">About</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          La historia detras de DotaFragHub
        </p>
      </header>

      <div className="w-full h-32 bg-surface-container-high rounded border border-outline-variant flex items-center justify-center mb-stack-lg glass-card">
        <span className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-widest opacity-50">
          Advertisement
        </span>
      </div>

      <section className="mb-stack-lg">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-stack-sm">Nuestra Mision</h2>
        <div className="glass-card rounded border border-outline-variant p-stack-md">
          <p className="font-body-md text-body-md text-on-surface-variant mb-2">
            DotaFragHub nacio en 2023 con una vision clara: crear la mejor guia en español para jugadores de Dota 2 que quieren mejorar.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant">
            No somos un blog de noticias. Somos una herramienta de mejora. Cada guia, cada dato, cada truco esta disenado para que lo apliques en tu proxima partida y subas de MMR.
          </p>
        </div>
      </section>

      <section className="mb-stack-lg">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-stack-sm">El Equipo</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {TEAM.map((m) => (
            <div key={m.name} className="glass-card rounded border border-outline-variant p-stack-md flex flex-col">
              <div className="w-16 h-16 rounded-full bg-surface-container-highest border border-outline-variant mb-stack-sm" />
              <h3 className={`font-headline-md text-headline-md ${m.color} mb-1`}>{m.name}</h3>
              <span className="font-label-bold text-label-bold text-on-surface uppercase tracking-wider mb-stack-sm">{m.role}</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-auto">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-stack-lg">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-stack-sm">Contacto</h2>
        <div className="glass-card rounded border border-outline-variant p-stack-md">
          <p className="font-body-md text-body-md text-on-surface-variant mb-4">
            Para consultas de contenido, colaboraciones o reportes de bugs:
          </p>
          <a
            href="mailto:contacto@dotafraghub.com"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-container transition-colors font-label-bold text-label-bold uppercase tracking-wider"
          >
            contacto@dotafraghub.com <ExternalLink size={16} />
          </a>
        </div>
      </section>
    </SiteShell>
  );
}
