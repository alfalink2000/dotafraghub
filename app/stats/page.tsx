import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import StatCard from "@/components/StatCard";

export const metadata: Metadata = {
  title: "Estadisticas de Dota 2 en tiempo real - Winrates, pickrates, meta",
  description:
    "Estadisticas en tiempo real de Dota 2: winrates, pickrates, net worth promedio, KDA y analisis de partidas usando la API de OpenDota.",
  alternates: { canonical: "/stats" },
};

export const dynamic = "force-static";

const TIERS = [
  { win: "51-52%", heroes: "Juggernaut, Razor, Zeus", color: "bg-secondary/5 border-secondary/20" },
  { win: "49-50%", heroes: "Anti-Mage, Slark, Storm Spirit", color: "bg-primary/5 border-primary/20" },
  { win: "< 49%", heroes: "Alchemist, Techies", color: "bg-error/5 border-error/20" },
];

export default async function StatsPage() {
  let topHeroes: {localized_name: string, pick_pct: number, win_pct: number}[] = [];
  try {
    const res = await fetch("https://api.opendota.com/api/heroStats", { next: { revalidate: 3600 } });
    if (res.ok) {
      const data = await res.json();
      topHeroes = data
        .filter((h: {pro_pick?: number}) => h.pro_pick && h.pro_pick > 0)
        .sort((a: {pro_pick: number}, b: {pro_pick: number}) => b.pro_pick - a.pro_pick)
        .slice(0, 8)
        .map((h: {localized_name: string, pro_pick: number, pro_win: number}) => ({
          localized_name: h.localized_name,
          pick_pct: Math.round((h.pro_pick / 100) * 100) / 100,
          win_pct: Math.round((h.pro_win / h.pro_pick) * 1000) / 10,
        }));
    }
  } catch { /* api unavailable */ }

  return (
    <SiteShell>
      <header className="mb-stack-lg">
        <h1 className="font-display-lg text-display-lg text-on-surface mb-stack-sm">Estadisticas</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Datos en tiempo real de partidas y heroes
        </p>
      </header>

      <div className="w-full h-32 bg-surface-container-high rounded border border-outline-variant flex items-center justify-center mb-stack-lg glass-card">
        <span className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-widest opacity-50">
          Advertisement
        </span>
      </div>

      <section className="mb-stack-lg">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-stack-sm">Metricas Clave</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
          <StatCard label="Total de jugadores activos" value="850,149" sub="Promedio de la ultima semana" />
          <StatCard label="Duracion promedio de partida" value="37:32" sub="Ranked Matchmaking" />
          <StatCard label="Tasa de abandono" value="3.5%" sub="De las partidas ranked" />
          <StatCard label="Heroe mas pickado (pro)" value={topHeroes[0]?.localized_name || "N/A"} sub={`Winrate: ${topHeroes[0]?.win_pct || "N/A"}%`} />
        </div>
      </section>

      <section className="mb-stack-lg">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-stack-sm">Heroes del Meta (Pro)</h2>
        {topHeroes.length > 0 ? (
          <div className="glass-card rounded border border-outline-variant overflow-hidden">
            <div className="grid grid-cols-3 gap-px bg-outline/20 p-px">
              <div className="bg-surface-container-low p-3 font-label-bold text-label-bold text-on-surface uppercase tracking-wider">
                Heroe
              </div>
              <div className="bg-surface-container-low p-3 font-label-bold text-label-bold text-on-surface uppercase tracking-wider text-right">
                Pickrate %
              </div>
              <div className="bg-surface-container-low p-3 font-label-bold text-label-bold text-on-surface uppercase tracking-wider text-right">
                Winrate %
              </div>
              {topHeroes.map((h) => (
                <>
                  <div key={`${h.localized_name}-name`} className="bg-surface-container-lowest p-3 font-body-sm text-body-sm text-on-surface border-b border-outline/10">
                    {h.localized_name}
                  </div>
                  <div key={`${h.localized_name}-pick`} className="bg-surface-container-lowest p-3 font-body-sm text-body-sm text-on-surface text-right border-b border-outline/10">
                    {h.pick_pct}
                  </div>
                  <div key={`${h.localized_name}-win`} className="bg-surface-container-lowest p-3 font-body-sm text-body-sm text-right border-b border-outline/10" style={{ color: h.win_pct >= 50 ? 'var(--color-secondary)' : 'var(--color-error)' }}>
                    {h.win_pct}%
                  </div>
                </>
              ))}
            </div>
          </div>
        ) : (
          <div className="glass-card rounded border border-outline-variant p-stack-md text-center text-on-surface-variant font-body-md text-body-md">
            Datos no disponibles temporalmente. Intenta mas tarde.
          </div>
        )}
      </section>

      <section className="mb-stack-lg">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-stack-sm">Clasificacion por Tier</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {TIERS.map((t, i) => (
            <div key={i} className={`rounded border p-stack-md ${t.color}`}>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Tier {i + 1} ({t.win})</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{t.heroes}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
