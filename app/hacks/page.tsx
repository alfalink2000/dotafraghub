import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Secretos y curiosidades de Dota 2 - Hacks ocultos",
  description:
    "Secretos ocultos de Dota 2: mecanicas inusuales, bugs conocidos, interacciones de habilidades y secretos del mapa que pocos jugadores conocen.",
  alternates: { canonical: "/hacks" },
};

const HACKS = [
  {
    title: "Comando dota_range_display 1200",
    body: "Un comando de consola que muestra el rango exacto de tus habilidades, permitiendo medir distancias con precision quirurgica para posiciones de ward, hooks y combos de skillshot.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4v9unB44neBxdug1FcP9PMVYRhIS8RqP1QTlrTsSd3R5mUW4SHxs74ZcWseoE-irb19CgxexcT9DpljRAznH7dOjA5EczWPMVr61shFEuOkiOykPWGRAHxJPce6JXGB1SJ07KsT_ymP3xQxWTmqwX98QYEmIVf8Yp2SkwUDTQGz5chQ_Zmm4EenDoWbujE4jLgooeF7oinqF_GFozlQyemqXW0pe4xh1vgFY3Xzz1PWM5hlRy6CXp",
    tag: "Console Command",
    tagColor: "text-secondary border-secondary/30 bg-secondary/10",
  },
  {
    title: "Spot de ward secreto detras de fuente enemiga",
    body: "Un punto de vision oculto que revela la fuente enemiga sin ser detectado, ideal para rastrear regeneraciones y rotationes del equipo rival antes de un gank.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKH3vBHxURhDHNh7aEaTWXxkAOt-z0Za1JMmeUjZ5q10CYhSsVjWBYJnumJAHhWd_hqhSYF2kcsz0YiFc3W9VXBKyYFvGaiZ0RCYqMjAt8C1xfeX_SUHE-D4l09yLiudF4zfttYAnUXJasq7zu_XodWVFMeeqbemBNtdvtxnjmInN-pCoofc4OZojMlbFr4k9QMKaECMpg3smdjHyxSEAN-fXe__c1jUrqhWabWOl9QUtwP43x7Mpr",
    tag: "Vision Spot",
    tagColor: "text-primary border-primary/30 bg-primary/10",
  },
  {
    title: "Bloqueo de campamento grande con ward",
    body: "Coloca una sentinela en la posicion exacta para bloquear el campamento grande, forzando al carry rival a perder eficiencia de farm en la lane y creando ventaja de nivel.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnnFi7lJBnj2DXA7EFxqwwdUZArR_bNJ5MWsCx_gU7Zq3g7geldKtXLysHGLJbDA0UOyBXvNaDbyY-rM-fOIQ2xeaVQZ_Nczyf4NBt8mWfrxd0c9i0OA5g6ifbbKSe4byghkANaEFM8Mdol-lI60Xni-GnWCs3BhprEgxPoE2AaUTsk5f_ROVngSjtnqRfWnd2-jdRq-8SFJMO5KHse4UOQcPOFmdT8jU_41wmjvqEheazLls8Ad3R",
    tag: "Mechanics",
    tagColor: "text-tertiary border-tertiary/30 bg-tertiary/10",
  },
  {
    title: "Easter egg dragon oculto en minimapa",
    body: "Un dragon escondido en una zona del minimapa que solo aparece cuando haces zoom en una ubicacion especifica, un detalle de lore que Valve enterró para los mas curiosos.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDddqi9aIVjSR7JFTZB8bZc3bWgEXB8yDp59bQeG6-xEWci6qG5rBFH5pmFsGuanP9UJZUgtednOGOfnBphFVGKxgWF-NvH57z_vw28QeyMn5fBZ5kf2w0xke0C5sRBr4Ya3IC8JTuUac09hZ13XOamBFZ1lrRrDXm2_7hDp-efnQXhXSWXjy66LDIButoKLtc3Le4bEY3Mi9sYGh2SzBMJVAs_b2cc0LuYuSfHXfZzESbMqM2MVEqI",
    tag: "Lore / Fun",
    tagColor: "text-primary border-primary/30 bg-primary/10",
  },
  {
    title: "Ventaja de Radiant vs Dire",
    body: "Un analisis profundo de como la asimetria del mapa favorece a cada faccion en diferentes fases del juego, con datos de winrate por linea y posicion de Roshan.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAK7lXqD7deMjIAL-4GlGEG2wCOZSy1h9SBoELNqpe6G5-iGOu_NFvQtcDvcM_7bNr0J5wcsLn_0xMAOD8mWD3nKJizlSIHrDwcZTnEBgqncOUUWeQw9C69-CdZJBYpZskX-fMuRj3OAh3HabHJ_D_-2ps5WeAwFhivMTaxaDVRGTmP9tyK5bithoDmDE1My6Ebx6Vv_dLM8dobwIwyIBUkq4B-6_D_8YdTJQOUH-FgaP6hgNSB0Df5",
    tag: "Analysis",
    tagColor: "text-secondary border-secondary/30 bg-secondary/10",
  },
  {
    title: "Atajo quick-buy con Shift+Click",
    body: "Combina Shift+Click con el quick-buy para encadenar compras sin abrir la tienda, reduciendo el tiempo muerto en base y manteniendo la presion en la lane.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqFBfqNhePlcdGnqCblgQv_imGa5O3znHxdR41ChW8onq2DGJM3emvZTYgFqEs6ETfpsVnDm0FExnwmHuUwIa7jFt6TW354cZKLFTPN2KSYzZYkROkTAYWvzw6h8MF4h-K2hoO7_lufWNczQzKNb0r0Vxsq6zy8v3NZrKOFyPaffRPZiL3w2pStabnyNqCVnnJbFTZQq7irsqCuoiC5bXwcAeaIo3pp-MiJ5fLWa97rjVJs4M_zbXs",
    tag: "UI Trick",
    tagColor: "text-tertiary border-tertiary/30 bg-tertiary/10",
  },
];

export default function HacksPage() {
  return (
    <SiteShell>
      <header className="mb-stack-lg">
        <h1 className="font-display-lg text-display-lg text-on-surface mb-stack-sm">
          Secretos
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Curiosidades que el juego no te cuenta
        </p>
      </header>

      <div className="w-full h-32 bg-surface-container-high rounded border border-outline-variant flex items-center justify-center mb-stack-lg glass-card">
        <span className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-widest opacity-50">
          Advertisement
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {HACKS.map((h) => (
          <article
            key={h.title}
            className="glass-panel rounded-xl flex flex-col hover-card-glow transition-all duration-300 relative overflow-hidden group cursor-pointer"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={h.image}
                alt={h.title}
                className="w-full h-full object-cover opacity-70 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <span className={`absolute bottom-3 left-3 px-3 py-1 border rounded font-label-bold text-label-bold tracking-wider uppercase ${h.tagColor}`}>
                {h.tag}
              </span>
            </div>
            <div className="p-stack-md flex flex-col gap-stack-sm z-10">
              <h2 className="font-headline-lg text-headline-lg text-on-surface group-hover:text-primary transition-colors">
                {h.title}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {h.body}
              </p>
              <div className="mt-auto pt-stack-sm flex items-center text-primary font-label-bold text-label-bold uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                Leer mas <ArrowRight size={16} className="ml-1" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </SiteShell>
  );
}
