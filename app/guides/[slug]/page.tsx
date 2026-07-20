import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import SiteShell from "@/components/SiteShell";
import AdSlot from "@/components/AdSlot";

const GUIDES: Record<
  string,
  { name: string; role: string; talents: string[]; items: string[]; counters: string[] }
> = {
  pudge: {
    name: "Pudge",
    role: "Roamer / Support",
    talents: [
      "Nivel 25: +1.5seg de duration del Hook (recomendado)",
      "Nivel 20: +60 de rotacion Flesh Heap",
      "Nivel 15: +150 de vida",
      "Nivel 10: +6 de armadura",
    ],
    items: [
      "Core: Tranquil Boots, Force Staff, Aether Lens",
      "Situacional: Blink Dagger (initiation), Spirit Vessel (anti heal), Hood of Defiance (anti magic)",
      "Late: Aghanims Shard, Aghanims Scepter, Refresher Orb",
    ],
    counters: ["Lifestealer", "Tidehunter", "Abaddon"],
  },
  invoker: {
    name: "Invoker",
    role: "Mid / Carry",
    talents: [
      "Nivel 25: -8s de cooldown de todos los spells",
      "Nivel 20: +1.5x de meteor duration",
      "Nivel 15: +40 de velocidad de ataque mientras tienes Focus",
      "Nivel 10: +500 de range en Quas",
    ],
    items: [
      "Core: Nulls Talisman x2, Power Treads, Witch Blade",
      "Situacional: Scythe of Vyse, Black King Bar, Shivas Guard",
      "Late: Aghanims Scepter, Refresher Orb, Moon Shard",
    ],
    counters: ["Anti-Mage", "Spirit Breaker", "Storm Spirit"],
  },
  antimage: {
    name: "Antimage",
    role: "Carry",
    talents: [
      "Nivel 25: +50 de Mana Void damage (recomendado)",
      "Nivel 20: +25 de BAT en counterspell",
      "Nivel 15: +20 de regen de mana",
      "Nivel 10: +25 de velocidad de ataque",
    ],
    items: [
      "Core: Power Treads, Battle Fury, Manta Style",
      "Situacional: Skull Basher, Abyssal Blade, Butterfly",
      "Late: Heart of Tarrasque, Butterfly, Rapier",
    ],
    counters: ["Axe", "Phantom Lancer", "Grimstroke"],
  },
  "crystal-maiden": {
    name: "Crystal Maiden",
    role: "Support / Jungla",
    talents: [
      "Nivel 25: +3s de duration de Freezing Field (recomendado)",
      "Nivel 20: Brilliance Aura global",
      "Nivel 15: +150 de mana",
      "Nivel 10: +30 de velocidad de movimiento",
    ],
    items: [
      "Core: Tranquil Boots, Glimmer Cape, Force Staff",
      "Situacional: Aether Lens, Aghanims Shard, Ghost Scepter",
      "Late: Aghanims Scepter, Refresher Orb, Octarine Core",
    ],
    counters: ["Nyx Assassin", "Spirit Breaker", "Riki"],
  },
  "shadow-fiend": {
    name: "Shadow Fiend",
    role: "Mid",
    talents: [
      "Nivel 25: +50 de damage en Necromastery por soul (recomendado)",
      "Nivel 20: +80 de Shadow Raze damage",
      "Nivel 15: +25 de velocidad de ataque",
      "Nivel 10: +4 de regen de vida",
    ],
    items: [
      "Core: Power Treads, Shadow Blade, Black King Bar",
      "Situacional: Silver Edge, Hurricane Pike, Bloodthorn",
      "Late: Butterfly, Daedalus, Satanic",
    ],
    counters: ["Outworld Destroyer", "Viper", "Pugna"],
  },
  axe: {
    name: "Axe",
    role: "Offlane",
    talents: [
      "Nivel 25: +100 de Beserker's Call duration (recomendado)",
      "Nivel 20: +150 de Counter Helix damage",
      "Nivel 15: +80 de vida",
      "Nivel 10: +40 de velocidad de movimiento",
    ],
    items: [
      "Core: Blink Dagger, Vanguard, Boots of Travel",
      "Situacional: Blade Mail, Black King Bar, Crimson Guard",
      "Late: Aghanims Scepter, Refresher Orb, Shivas Guard",
    ],
    counters: ["Doom", "Lifestealer", "Ursa"],
  },
  "monkey-king": {
    name: "Monkey King",
    role: "Offlane / Carry",
    talents: [
      "Nivel 25: +30 de stacks de Jingu Mastery (recomendado)",
      "Nivel 20: Boundless Strike stunea 2s",
      "Nivel 15: +200 de Wukongs Command range",
      "Nivel 10: +40 de damage base",
    ],
    items: [
      "Core: Echo Sabre, Black King Bar, Desolator",
      "Situacional: Aghanims Scepter, Abyssal Blade, AC",
      "Late: Butterfly, Bloodthorn, Divine Rapier",
    ],
    counters: ["Viper", "Timbersaw", "Troll Warlord"],
  },
  lich: {
    name: "Lich",
    role: "Support",
    talents: [
      "Nivel 25: +100 de Frost Blast damage (recomendado)",
      "Nivel 20: Chain Frost bounce infinito",
      "Nivel 15: +300 de vida",
      "Nivel 10: +40 de velocidad de movimiento",
    ],
    items: [
      "Core: Tranquil Boots, Glimmer Cape, Force Staff",
      "Situacional: Aether Lens, Aghanims Shard, Solar Crest",
      "Late: Aghanims Scepter, Refresher Orb, Octarine Core",
    ],
    counters: ["Nyx Assassin", "Silencer", "Spirit Breaker"],
  },
};

export function generateStaticParams() {
  return Object.keys(GUIDES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const g = GUIDES[params.slug];
  if (!g) return { title: "Guia no encontrada" };
  return {
    title: `Guia de ${g.name} - Dota 2`,
    description: `Guia completa de ${g.name}: build de talentos, items core, counters recomendados y rol ${g.role}.`,
    alternates: { canonical: `/guides/${params.slug}` },
    openGraph: {
      title: `Guia de ${g.name} en Dota 2`,
      description: `Build, items y counters de ${g.name}.`,
      url: `/guides/${params.slug}`,
    },
  };
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const g = GUIDES[params.slug];
  if (!g) notFound();

  const heroImg = `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${params.slug.replace(/-/g, "_")}.png`;

  return (
    <SiteShell>
      <header className="mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <div className="relative w-32 h-20 sm:w-40 sm:h-24 rounded-xl overflow-hidden bg-ink-800 shrink-0">
          <Image
            src={heroImg}
            alt={g.name}
            fill
            sizes="160px"
            className="object-cover object-top"
          />
        </div>
        <div>
          <span className="text-xs font-semibold tracking-widest text-ember-500 uppercase">
            Guia de heroe
          </span>
          <h1 className="mt-1 font-display text-4xl md:text-5xl font-bold text-white text-shadow-strong">
            {g.name}
          </h1>
          <p className="mt-2 text-gray-400">Rol: {g.role}</p>
        </div>
      </header>

      <AdSlot slot="0000000008" format="horizontal" />

      <section className="grid gap-8 md:grid-cols-3 mt-8">
        <div className="rounded-xl border border-ember-700/30 bg-ink-900/60 p-6">
          <h2 className="font-display text-xl font-bold text-gold-400 mb-3">
            Talentos
          </h2>
          <ul className="space-y-2 text-sm text-gray-300">
            {g.talents.map((t) => (
              <li key={t} className="border-l-2 border-ember-500/50 pl-3">
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-ember-700/30 bg-ink-900/60 p-6">
          <h2 className="font-display text-xl font-bold text-gold-400 mb-3">Items</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            {g.items.map((i) => (
              <li key={i} className="border-l-2 border-gold-400/50 pl-3">
                {i}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-ember-700/30 bg-ink-900/60 p-6">
          <h2 className="font-display text-xl font-bold text-gold-400 mb-3">
            Counters
          </h2>
          <ul className="flex flex-wrap gap-2">
            {g.counters.map((c) => (
              <li
                key={c}
                className="text-xs px-3 py-1 rounded-full bg-ember-500/15 text-ember-500"
              >
                {c}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-gray-500">
            Cuidado con estos heroes: pueden contrarrestar tu estilo de juego.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
