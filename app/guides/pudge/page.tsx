import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guia de Pudge Dota 2 - Build, counters, lore, tips",
  description:
    "Guia completa de Pudge: counters, combo de skills, talentos recomendados, lineas donde brilla, lore del carnicero y curiosidades.",
  alternates: { canonical: "/guides/pudge" },
};

const SECTIONS = [
  {
    id: "counters",
    title: "Counters",
    items: ["Lifestealer", "Viper", "Necrophos", "Anti-Mage", "Omniknight", "Oracle"],
  },
  {
    id: "tips",
    title: "Tips",
    items: [
      "Aprovecha el fog of war y el blindspot de la camara para que no vean el enganche desde lejos.",
      "Lanza el gancho por debajo de rampas y en area oscura. El sonido de la cadena ayuda a confirmar antes de lanzar.",
      "Inicia con los pasivos y el rot antes de gank para asegurar la primera kill y la ventaja de nivel en mid.",
      "Controla la vision enemiga destruyendo centinelas en los flancos de la lane antes de lanzar el gancho.",
      "Golpea a los heroes enemigos en area para acelerar la farmeo de los primeros items sin arriesgar tu vida.",
      "Busca el push de lane en la mid-game, fuerza peleas en area donde el rot se acumula y tus daos son mas efectivos.",
    ],
  },
  {
    id: "skills",
    title: "Skills",
    items: [
      "Flesh Heap (pasiva)",
      "Dismember (ulti)",
      "Rot (W)",
      "Meat Hook (Q)",
      "Necromastery (passive)",
    ],
  },
];

const COUNTER_PORTRAITS: Record<string, string> = {
  Viper: "https://lh3.googleusercontent.com/aida-public/AB6AXuClvSPBcjzSAmoS22dT1_JfRrT5yxc66wqccgmU6pP3OHRvNQXm1PoqBRC_UHN9sZKY2MjE-fmt6JLvajaMUtYu4Sc2a4Qp0T5IP0CVp3SqmvhIhVZccHvapp_pgFfFLpPaNE0tBbtz2QDQWrl29hB18k3T1fHCsDHSViQJbMNhFyspWSrCaNM2hFwnh-GAr1GvfXQbwEMll7Uaqv3332xpRONqfd9qVSR-DCNGJbIBTrs9QASQjzy7",
  Necrophos: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRS_lisx04TnYb3royhbEmZebM9fCvEvn0CosOROnA_ZdqOR63TC3w13ulOmHVC53nr_GmTlI0AUVcewke6w3WLowQtdG9rmN5XDhdYtPX7c7CzAZWRUpPMJz3Q7o8NNnqFK2KFhGK2bkoy9NLTKELHg1EAYlqfPGcFlE5lsYZlMRgjSoGSuP1FxsGctpDB64A8T4wWmoANBAZQP52stO5TYxIk5z4KkZBG4a2rnHWzoN6dQn2I36-",
  Ursa: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaDFq7CTSMDBc8H5sOKfzuA2i3gBoSV7wAMRUFTDYm7rHaxVkkKtf-whNK-Ih7N0FMK0ZlXt7Ke2O67DZZGqoJeJwIeN8TcuD-Un17LHpDhAixf_4jYgGaK8KpBysgezKHsc7vCQUH2qQ6T2NJSuisSPtdLfb2QbTu5Hrz9WT_Tds6H_irxJD8d-VMkPBod2P3ecDPIlp_h9L9KyaJmZY6tnrxA3hWb1fJpb-ch_P_Nne0fHpyj40W",
};

export default function PudgePage() {
  return (
    <SiteShell>
      <div className="relative w-full h-64 md:h-80 mb-stack-lg rounded-xl overflow-hidden">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCze-gNatOaTnV3KeYCuOaGenjRyfMLKkLYp-b6E6IWfmmjd7P7oi3zNFHPY2SInxqBj5tlK9PZc9jlWjr4vGoLPuqlpQqiWfKkPySn-B6rYsWSRxvjouR0K2ScJOZQtG-PMDDNUgp-FIt4Yx3O_AL04sRuxxJGbSGfdHaadBf_gBlUwK_P_HWbbl2M3HBorOfDp91DUkSVg5r3sKedNyCwTwhY2c1FG1XcGBjBLDtm9Ql83Cwfpws"
          alt="Pudge Hero Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute bottom-6 left-6 z-10">
          <h1 className="font-display-lg text-display-lg text-on-surface font-extrabold">Pudge</h1>
        </div>
      </div>

      <nav className="mb-stack-md">
        <Link
          href="/guides"
          className="inline-flex items-center text-on-surface-variant hover:text-primary transition-colors font-label-bold text-label-bold uppercase tracking-wider"
        >
          <ArrowLeft size={16} className="mr-2" /> Volver
        </Link>
      </nav>

      <div className="flex flex-col md:flex-row gap-gutter mb-stack-lg">
        <div className="w-full md:w-1/3 flex flex-col items-start">
          <div className="flex flex-wrap gap-2 mb-stack-sm">
            <span className="px-3 py-1 bg-primary/10 border border-primary/30 text-primary rounded font-label-bold text-label-bold uppercase tracking-wider">
              Dire
            </span>
            <span className="px-3 py-1 bg-tertiary/10 border border-tertiary/30 text-tertiary rounded font-label-bold text-label-bold uppercase tracking-wider">
              Fuerza
            </span>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant mb-stack-sm">
            La mecanica oculta mas temida del mapa: una cadena que ignora la prioridad y un daño acumulativo que transforma un gancho exitoso en una muerte segura. El verdadero poder reside en la manipulacion del terreno y el control de la vision, mas que en los numeros crudos.
          </p>
          <div className="bg-surface-container-highest p-3 rounded border border-outline-variant mb-4 w-full">
            <p className="font-body-sm text-body-sm text-on-surface-variant italic opacity-80">
              &quot;La mejor carnada es aquella que el enemigo no sabe que es carnada hasta que es demasiado tarde.&quot;
            </p>
          </div>
          <Link
            href="https://es.dotabuff.com/heroes/pudge"
            target="_blank"
            className="bg-primary-container text-white font-label-bold text-label-bold px-4 py-2 rounded hover:brightness-110 transition-all shadow-[0_0_10px_rgba(179,58,58,0.3)] flex items-center justify-center uppercase tracking-wider"
          >
            Ver mas en dotabuff <ArrowRight size={14} className="ml-2" />
          </Link>
        </div>

        <div className="w-full md:w-2/3">
          <div className="glass-card rounded border border-outline-variant p-stack-md">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-stack-sm">Biografia</h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-2">
              El hombre mas temido del inframundo del Crimson Expanse, Pudge no es un asesino comun; es una criatura nacida de la necesidad de otros, que utilizo su hambre insaciable como arma. Cada pieza que arranca de sus victimas le otorga mas fuerza, una mecanica que lo hace mas letal cuanto mas dura la pelea.
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Su gancho no es solo un arma, es una sentencia de muerte psicologica. Un buen jugador de Pudge entiende que el verdadero daño no es el que inflige el gancho, sino el miedo constante que genera en los enemigos al caminar por areas sin vision. Ese miedo altera la jugabilidad rival, forzandolos a gastar centinelas en zonas que normalmente ignorarian.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter mb-stack-lg">
        <div className="glass-card rounded border border-outline-variant p-stack-md flex flex-col">
          <div className="flex justify-between items-start mb-stack-sm">
            <h3 className="font-headline-lg text-headline-lg text-on-surface">
              Counters
            </h3>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
            Los heroes que dominan a Pudge por su movilidad, dispel o sustain.
          </p>
          <div className="flex flex-wrap gap-2">
            {SECTIONS[0].items.map((c) => (
              <span
                key={c}
                className="inline-flex items-center gap-2 px-3 py-1 bg-tertiary/10 border border-tertiary/20 text-tertiary rounded font-label-bold text-label-bold uppercase tracking-wider"
              >
                {COUNTER_PORTRAITS[c] && (
                  <img
                    src={COUNTER_PORTRAITS[c]}
                    alt={c}
                    className="w-10 h-10 rounded-full object-cover border border-tertiary/30"
                  />
                )}
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="glass-card rounded border border-outline-variant p-stack-md flex flex-col">
          <div className="flex justify-between items-start mb-stack-sm">
            <h3 className="font-headline-lg text-headline-lg text-on-surface">
              Tips
            </h3>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
            Tacticas avanzadas para dominar el mapa con Pudge.
          </p>
          <div className="flex flex-col gap-2">
            {SECTIONS[1].items.slice(0, 3).map((t, i) => (
              <div key={i} className="bg-surface-container-highest p-2 rounded border border-outline-variant text-on-surface-variant font-body-sm text-body-sm">
                {t}
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card rounded border border-outline-variant p-stack-md flex flex-col">
          <div className="flex justify-between items-start mb-stack-sm">
            <h3 className="font-headline-lg text-headline-lg text-on-surface">
              Skills
            </h3>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
            Habilidades que definen el rol de Pudge en el equipo.
          </p>
          <div className="flex flex-col gap-2">
            {SECTIONS[2].items.map((s, i) => (
              <div key={i} className="bg-surface-container-highest p-2 rounded border border-outline-variant text-on-surface-variant font-body-sm text-body-sm">
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-surface-container-lowest rounded border border-outline-variant p-4 text-center mb-stack-lg">
        <span className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-widest">
          Espacio Publicitario
        </span>
      </div>

      <section className="mb-stack-lg">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-stack-sm">Mas Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {SECTIONS[1].items.slice(3).map((tip, i) => (
            <div
              key={i}
              className="glass-card rounded border border-outline-variant p-4 flex items-start gap-3 hover:border-primary/50 transition-colors"
            >
              <span className="bg-primary/10 border border-primary/20 p-1.5 rounded text-primary shrink-0">
                <ArrowRight size={16} />
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">{tip}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-32 bg-surface-container-high rounded border border-outline-variant flex items-center justify-center mb-stack-lg glass-card">
        <span className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-widest opacity-50">
          Advertisement
        </span>
      </div>
    </SiteShell>
  );
}
