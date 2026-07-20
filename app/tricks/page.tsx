import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Trucos de Dota 2 - Tips de jugadas y MMR",
  description:
    "Recopilacion de los mejores trucos de Dota 2: warding spots, creep aggro, pull timers, orb walking, block de creeps y shortcut keys para subir de MMR.",
  alternates: { canonical: "/tricks" },
};

const TRUCOS = [
  {
    title: "Creep aggro",
    body: "Aprende a manipular la atencion de los creeps enemigos para acercarlos a tu torre, asegurando lasthits seguros y denegando farmeo al rival en la fase de lineas.",
    level: "Basico",
    accent: "primary" as const,
  },
  {
    title: "Warding spots y bloqueo de campamentos",
    body: "Descubre las ubicaciones optimas para centinelas que no solo otorgan vision crucial, sino que tambien bloquean estrategicamente la reaparicion de creeps neutrales enemigos.",
    level: "Intermedio",
    accent: "secondary" as const,
  },
  {
    title: "Pull timers",
    body: "Domina los tiempos exactos del reloj del juego para arrastrar los campamentos neutrales hacia tu linea de creeps, controlando el equilibrio de la linea a tu favor.",
    level: "Basico",
    accent: "primary" as const,
  },
  {
    title: "Orb walking",
    body: "Maximiza tu dano por segundo cancelando la animacion de ataque residual. Esencial para heroes de rango y para perseguir enemigos sin perder distancia.",
    level: "Avanzado",
    accent: "error" as const,
  },
  {
    title: "Block de creeps melee en rampa",
    body: "Utiliza el cuerpo de tu heroe en el primer minuto de juego para ralentizar la llegada de tus creeps, asegurando la ventaja de altura en la midlane.",
    level: "Basico",
    accent: "primary" as const,
  },
  {
    title: "Atajos de teclado",
    body: "Configuraciones optimas y bind de teclas para usar objetos rapidamente, controlar unidades multiples y mejorar tu tiempo de reaccion en las peleas de equipo.",
    level: "Intermedio",
    accent: "secondary" as const,
  },
];

export default function TricksPage() {
  return (
    <SiteShell>
      <header className="flex flex-col gap-stack-sm mb-stack-md">
        <h1 className="font-display-lg text-display-lg text-on-surface tracking-tighter uppercase text-glow-ember">
          Trucos
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Trucos de jugadas para subir de MMR. Domina las mecanicas ocultas y eleva tu juego al siguiente nivel.
        </p>
      </header>

      <div className="w-full h-32 glass-panel rounded-lg flex items-center justify-center relative overflow-hidden group mb-stack-lg">
        <div className="absolute inset-0 bg-surface-container-high opacity-50" />
        <div className="z-10 flex flex-col items-center">
          <span className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-widest mb-1">
            Advertisement
          </span>
          <span className="font-body-sm text-body-sm text-outline">
            Apoya a DotaFragHub desactivando AdBlock
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {TRUCOS.map((t) => (
          <article
            key={t.title}
            className="glass-panel rounded-xl p-stack-md flex flex-col gap-stack-md hover-card-glow transition-all duration-300 relative overflow-hidden group cursor-pointer"
          >
            <div className={`absolute top-0 right-0 w-32 h-32 bg-${t.accent}/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-${t.accent}/20 transition-colors`} />
            <div className="flex justify-between items-start z-10">
              <h2 className={`font-headline-lg text-headline-lg text-on-surface group-hover:text-${t.accent} transition-colors max-w-[80%]`}>
                {t.title}
              </h2>
              <span className={`px-3 py-1 bg-surface-container-highest border border-tertiary/20 rounded font-label-bold text-label-bold text-${t.accent} tracking-wider uppercase`}>
                {t.level}
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant z-10">
              {t.body}
            </p>
            <div className={`mt-auto pt-stack-sm flex items-center text-${t.accent} font-label-bold text-label-bold uppercase tracking-wider group-hover:translate-x-2 transition-transform z-10`}>
              Leer mas <ArrowRight size={16} className="ml-1" />
            </div>
          </article>
        ))}
      </div>
    </SiteShell>
  );
}
