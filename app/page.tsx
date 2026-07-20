import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import HeroCard from "@/components/HeroCard";
import { RefreshCw, Users, Film } from "lucide-react";

const SECTIONS = [
  {
    href: "/tricks",
    title: "Tricks",
    description: "Mecanicas ocultas y trucos que los pros no quieren que sepas. Domina el mapa.",
    tag: "Avanzado",
    icon: "lightbulb",
    accent: "ember" as const,
  },
  {
    href: "/guides",
    title: "Guias",
    description: "Builds detalladas, tiempos de farmeo y posicionamiento para cada heroe del parche.",
    tag: "Esencial",
    icon: "menu_book",
    accent: "gold" as const,
  },
  {
    href: "/hacks",
    title: "Secretos",
    description: "Interacciones inusuales de habilidades y lore oscuro del universo de Dota.",
    tag: "Curiosidades",
    icon: "visibility_off",
    accent: "ember" as const,
  },
  {
    href: "/videos",
    title: "Videos",
    description: "Analisis de partidas pro, highlights epicos y tutoriales visuales paso a paso.",
    tag: "Media",
    icon: "play_circle",
    accent: "gold" as const,
  },
  {
    href: "/stats",
    title: "Estadisticas",
    description: "Winrates, pickrates y analisis de drafts impulsados por datos en tiempo real.",
    tag: "Data",
    icon: "bar_chart",
    accent: "ember" as const,
  },
  {
    href: "/skins",
    title: "Skins",
    description: "Galerias de sets, efectos inmortales y previews de los ultimos tesoros.",
    tag: "Cosmeticos",
    icon: "checkroom",
    accent: "gold" as const,
  },
];

const FEATURES = [
  { icon: RefreshCw, title: "Datos en tiempo real", desc: "Sincronizacion via OpenDota API.", color: "primary" as const },
  { icon: Users, title: "Comunidad Activa", desc: "Guias curadas y votadas por jugadores.", color: "secondary" as const },
  { icon: Film, title: "Contenido Manual", desc: "Clips y fragmentos seleccionados a mano.", color: "tertiary" as const },
];

export default function HomePage() {
  return (
    <SiteShell>
      <section className="hero-gradient relative overflow-hidden pt-stack-lg pb-stack-lg md:pt-[80px] md:pb-[80px] w-[100vw] relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw]">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter items-center relative z-10 px-margin-mobile md:px-margin-desktop">
          <div className="md:col-span-7 flex flex-col items-start gap-stack-md">
            <span className="font-label-bold text-label-bold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20 uppercase tracking-widest">
              Hub hispano de Dota 2
            </span>
            <h1 className="font-display-lg text-display-lg text-on-surface font-extrabold leading-tight">
              Trucos. Guias. Estadisticas. <br />
              <span className="text-primary-container">Todo tu Dota 2</span> en un sitio.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Domina el meta con datos precisos, guiias estructuradas y los mejores trucos de la comunidad. Mejora tu MMR hoy.
            </p>
            <div className="flex flex-wrap gap-stack-sm mt-stack-sm">
              <Link
                href="/guides"
                className="bg-primary-container text-white font-label-bold text-label-bold px-6 py-3 rounded hover:brightness-110 transition-all shadow-[0_0_15px_rgba(179,58,58,0.4)] hover:shadow-[0_0_25px_rgba(179,58,58,0.6)] uppercase tracking-wider"
              >
                Ver guiias de heroes
              </Link>
              <Link
                href="/stats"
                className="border-2 border-secondary text-secondary font-label-bold text-label-bold px-6 py-3 rounded hover:bg-secondary/10 transition-all uppercase tracking-wider"
              >
                Estadisticas en vivo
              </Link>
            </div>
          </div>
          <div className="md:col-span-5 glass-card rounded-2xl overflow-hidden border border-outline-variant animate-[float_6s_ease-in-out_infinite]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVdNsSiJvy7ne3RzNXWbxn6EMvhI0OqwZHrwHNQZ7rr10aZdP51zfUWjnbvJB8792U1tCO24aAOZoT6RFEhPnq0tcwqbn5mYERrYNzQ0_W8ypYwrb8HFUygBX7_7Q1ol0mVSpZoGFhaiX-6XHirez3uD8tl0uEpQwfOq0GNNcmw59UZOgXcN7HIGxUHVeCpS8iXsB6hUcJ_W3O8yasVIjFNqqX8RR9sV_FP44Ec5nvndfGiAYh-gF8"
              alt="Dota 2 Frag Hub"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <div className="max-w-[728px] h-[90px] mx-auto bg-surface-container-high border border-outline-variant flex items-center justify-center my-stack-lg text-on-surface-variant font-label-sm text-label-sm uppercase tracking-widest rounded">
        Espacio Publicitario
      </div>

      <section className="max-w-container-max mx-auto py-stack-lg">
        <div className="flex flex-col items-center text-center mb-stack-lg">
          <h2 className="font-display-md text-display-md text-on-surface font-bold">Explora</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Todo lo que buscar en Dota 2
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {SECTIONS.map((s) => (
            <HeroCard
              key={s.href}
              href={s.href}
              title={s.title}
              description={s.description}
              tag={s.tag}
              accent={s.accent}
              icon={s.icon}
            />
          ))}
        </div>
      </section>

      <section className="border-t border-white/5 bg-surface-container-lowest py-stack-lg mt-stack-lg">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-3 gap-stack-md">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 p-4 ${
                i > 0 ? "border-t md:border-t-0 md:border-l border-white/5" : ""
              }`}
            >
              <div className={`w-12 h-12 rounded-full bg-${f.color}/20 flex items-center justify-center border border-${f.color}/30 shrink-0`}>
                <f.icon size={24} className={`text-${f.color}`} />
              </div>
              <div>
                <h4 className="font-label-bold text-label-bold text-on-surface mb-1 uppercase tracking-wide">
                  {f.title}
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
