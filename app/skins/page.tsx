import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Catalogo de Skins y Cosmeticos de Dota 2 - Sets, immortals y arcanas",
  description:
    "Catalogo de skins, sets, inmortales y arcanas de Dota 2: preview de los ultimos tesoros, precios actuales, effectos visuales y rareza de cada item.",
  alternates: { canonical: "/skins" },
};

const SKINS = [
  {
    hero: "Crystal Maiden",
    title: "Frost Avalanche",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqqG_0P5idSh0BltNM2hqTm_hx6qIxkJlo2qvUCiaTNxvqxI1sbZ8m9skKaUprZRNaA8aKcRzS-aTh87RRcG5M4W8Uf7oeL9tbsXmLFtJvwnIsBLj-aIvrHZbwtWVfq3edpseFwmVIkH99vQa3NmzZ0GQcMNgmMca9scE-pVPpqmSXMPG1YMqxtIpajXuU9dV3aYJy2UtqzqeSGlG8ZYARWuq5Qr03QeNl3B1XI4vPDHmSnyov3cn3",
    rarity: "Mythical",
    rarityColor: "text-tertiary border-tertiary/30 bg-tertiary/10",
    price: "~$18.00",
  },
  {
    hero: "Phantom Assassin",
    title: "Blade of the Silent Severance",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvfoz6YOpCjoTab2sL_biufDCCQ0MK93igbERFOpTawLGGemyavvhWX7XlvkmreW51BTp2UYO7XpBJIIfFxF6bCqSRQhPJcjzcbnxiKvpi4uWwuPkhDtAnRrn4J1iM1tk3xt7prI_htmXitCgzXij_rFln4Mpc67bKpcmk4lE6n60BSVe67H9mqMyAdwy0wAbsaF_3mKUoqdeSwFgFX-kk1SVkvzUDkEUV2GDhvF1siAunuzq3GXdh",
    rarity: "Arcana",
    rarityColor: "text-primary border-primary/30 bg-primary/10",
    price: "~$32.00",
  },
  {
    hero: "Shadow Fiend",
    title: "Demon Eater",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCeFo3itWP4LIilAYV6ouXwbJ6n_8jS9rAXLkxZldG39bDuGgaRIoaKJsNpMESjplf96mddH4hR12AJdjBFxR1qeLubExCWNyBxKjIG4QvHJ_2eq0L7TZvD_xbUxmxIrxv1PICJcIVuRmW_brgzpofPoQSF0QkTyayQXNIos6uLc4A8agiMTNaFZGAYxkdtNNwJ4RmWOaMY68zARLSXFVKjEi8lCHa9nnepG5v4GtVEtcSYv3U73YNt",
    rarity: "Arcana",
    rarityColor: "text-primary border-primary/30 bg-primary/10",
    price: "~$28.50",
  },
  {
    hero: "Courier",
    title: "Frullanorn",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCMoPX45J7VMOVii_iSPsjpCsSdF9nNwv3erp6Z0QlbjKyHkHfr9Iwmj8HWx_TDfYthobMdQyf35rwEVVXhx7Y8s6Y3_sP_7kmDDWQcxwySeh02qMRxhxBSwtdFDLGS7W1m4BFr1lYpVDxpz6xvl8AWQGHzJsk81vjtzdnmkd49zj1GsBGQ_DtEAApGCASFNgiKssyQIbBtb3-Cc3ORpndouNkCMMU_gzmRmuhzi8iiG1_5sB6oj1p",
    rarity: "Mythical",
    rarityColor: "text-tertiary border-tertiary/30 bg-tertiary/10",
    price: "~$8.00",
  },
  {
    hero: "Phantom Assassin",
    title: "Manifold Paradox",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDntmHp3RIVKFJy9YbCEuDqota1UN-4BQjrMRASCayA2BKcAiPjuHV-ze8vs-cFzrQsWeD3P4YTB8U6WF4nLBVBv7lf7ZBLwxZbaUsAdqnScDi1Ca3NhNgI7y0pbCEJF9Vohp8fOuzeQfwuh4ZkCze_lPkVt9s0IFntg1D2TrOQYYgZbmGQCsC5VzBYnKxCUoaQj9UvrmZWnCvbqzzWWKdORh2mJuoNiEUs7YFXiejSbJDA_1gwXDXS",
    rarity: "Arcana",
    rarityColor: "text-primary border-primary/30 bg-primary/10",
    price: "~$30.00",
  },
  {
    hero: "Lifestealer",
    title: "Swine of the Sunless",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsnN-U53BMX7PDH2xb2uy76Lv1yivS-Sr-EDpJh5mcv5q6LHcC0_4Nn7-xi_w7_--ftrEDNuFpjwHh9O2bd1OXw0sW49XVYhj7sEwgg8pK4Uj8-FaECn41bYNLAmLZcYU6CYe2C1ixugWyFdTZ52Lrrgszhu9GY07ZsHQi5N2E35zxlM1BV0xYZGk5IQ3CSGxY4XVrnCduKo-L2CwP1H3t-_dRfCQknJNsmbSDEehvso2F_hzrDIzq",
    rarity: "Legendary",
    rarityColor: "text-secondary border-secondary/30 bg-secondary/10",
    price: "~$12.00",
  },
];

export default function SkinsPage() {
  return (
    <SiteShell>
      <header className="mb-stack-lg">
        <h1 className="font-display-lg text-display-lg text-on-surface mb-stack-sm">
          Skins
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          El catalogo visual mas completo
        </p>
      </header>

      <div className="w-full h-32 bg-surface-container-high rounded border border-outline-variant flex items-center justify-center mb-stack-lg glass-card">
        <span className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-widest opacity-50">
          Advertisement
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {SKINS.map((s) => (
          <article
            key={s.title}
            className="glass-panel rounded-xl flex flex-col hover-card-glow transition-all duration-300 relative overflow-hidden group cursor-pointer"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={s.image}
                alt={`${s.hero} - ${s.title}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            <div className="p-stack-md flex flex-col gap-stack-sm z-10">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{s.hero}</p>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface group-hover:text-primary transition-colors">
                    {s.title}
                  </h2>
                </div>
                <span className={`px-3 py-1 border rounded font-label-bold text-label-bold tracking-wider uppercase shrink-0 ${s.rarityColor}`}>
                  {s.rarity}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-label-bold text-label-bold text-on-surface">{s.price}</span>
                <a
                  href="https://store.steampowered.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-label-bold text-label-bold uppercase tracking-wider hover:translate-x-2 transition-transform"
                >
                  Ver en Steam
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SiteShell>
  );
}
