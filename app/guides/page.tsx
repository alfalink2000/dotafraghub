import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Guias de heroes Dota 2 - Builds, items y counters",
  description:
    "Guias de cada heroe de Dota 2: builds de talentos, itemizacion segun el rol, counter-picks, lineas recomendadas y estrategias para el meta actual.",
  alternates: { canonical: "/guides" },
  openGraph: {
    title: "Guias de heroes Dota 2",
    description: "Builds, items, counter-picks y estrategias por heroe.",
    url: "/guides",
  },
};

const HEROES = [
  { slug: "pudge", name: "Pudge", role: "Roamer", attr: "Fuerza", color: "text-[#d32f2f]", type: "dire", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJcR-cviYs_-dAlQQuEQm5Cg7aFMjsxDe1HGBgR0PVAbsGmKWefoKWBWkyzrypZ_HfbORcJzH1ENF-W8WKKfajFnO8Qn_jJZnau_5DoFW85NkkDckPUrv82kyPO5xKeIWqrY38eSURrcC67t79Oz6bsWnfeqfLcA-LEp9DLCbAesYf509QUPngQqYYK3syohDjEmACWjC9Vk0PDB35ZHZ7qm4fDFnk9Qj18GQmAMcW71d0rqeeeWOz" },
  { slug: "invoker", name: "Invoker", role: "Mid", attr: "Inteligencia", color: "text-[#1976d2]", type: "radiant", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDn9vgRmB4_B36j4TL8kRfaCe7ba2xI0NN7Sj7UVlWiZuOwnNQKx1F48ercjptUPc5_dYFDIqp33gECVCJ_6TNTLFmQnt8ZnXxjlFSXC5TyRJqGdrrbQbvzJSTKD7sDrqjw3_cWh3ZIozLcPqyWTVnePGkBSwraD6UEEicSrhKf1oezVjnk5nzzLM6IBQLJX_nnObdujzBDm6-Pu9usKGtVsAH7uR5WlHZyg6DnCIBrqaQqcESp1kCV" },
  { slug: "antimage", name: "Anti-Mage", role: "Carry", attr: "Agilidad", color: "text-[#388e3c]", type: "radiant", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFxHGT4Xwh2pFkBgFEH23a1wOoBE16fwz26iDLKzWOjZyYjfgiKbPfm_5ukOahuvfItQ5ENv2GeSrS3iO7z3U1MxOvg_86TCBvzoD0qJGnwtDheDDWNn3GxwMKzciz_lpvpdsyaTfz_LocdrUuq-CHPdmAOBTtDU9u2XpK6I88-V3lkkQxd_DfFBtGOa9-2rNpBshEGX3-7Q75lPcjrmOW2satLVWECi2hdJqvvOkNPMJEXkYecBJb" },
  { slug: "crystal-maiden", name: "Crystal Maiden", role: "Support", attr: "Inteligencia", color: "text-[#1976d2]", type: "radiant", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRSLvdGFjs9FTgvq6_U0eC74dsvTGEvGmXYi_qw2o9etp1d-BU_RRwdAudPvc9YS0B09DuDq9go1MQMsJqNsgW9aoEQ3dWCpdQxAc2uJaoDNCo9FDV-6cX0Gg4D38zsPCUySAoYc5ftPndX0Wb035L3EWykwyEr_acdrohHHVbD3ctdUEAuWqer_wS8PVPQNzJ4Y5XQlGIHPcmg95KOnJlRyikXhRAJZjt522mucEaNDlRcI2Bz1pN" },
  { slug: "shadow-fiend", name: "Shadow Fiend", role: "Mid", attr: "Inteligencia", color: "text-[#1976d2]", type: "dire", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNe0qxDgmXy4yQBSGtkXzGKGVwGOKCuVjV8JiGq1SfZUOL-TpKhfxOsnR3fMIK325xyDinQkQFkTB_eAB0-Hhk4knSFHG71Wdf1TaAfUXjtQT12tTNtSvQWeCAsEYtEpl_fQRzVAOAPudfHoSUtwkF6basuOEFgQlGpWcX-guuptpvpjChh-7p5ymfmLZPqFrDitExIYHsNqhahxEqOBHG12GwZBMpnWguJ9e6m4kzeoxip13wF06q" },
  { slug: "axe", name: "Axe", role: "Initiator", attr: "Fuerza", color: "text-[#d32f2f]", type: "dire", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdwLxHOdageq66HrFJvTPqG4czD8webajZGufezQ_yYxk9oIpWRLTBnWJfrumkdO6iIa7NqSGd3DWVJO_Yiexnr4UsYbjomlu7XvPOV2kJBUtOUyQFW_ZMSmPa03npJoXj8JKgYWlaM228S7V-IYLebsz4DdNqPEuhSqXnN9V7QP-lhXL-hdaJOdeUNdkw9-9uYNC2RmrqARW1aRkWKxPLeMSarD_QJGyjSS0JDnCJLY87leIhqDoi" },
  { slug: "monkey-king", name: "Monkey King", role: "Carry", attr: "Agilidad", color: "text-[#388e3c]", type: "radiant", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuALe5V_OMKE_f54jqGOBz6sTRlrxCKwvU4QNzYgI40jCEfFtf6ALB2t8Sa4TAilum2ZlRpx12PpcYim11s7O45Rgtc7BxZOKSwu5g7RVagVVMkyUbuoX4UpwMZhxPtcVtRS1VIXqej8wmzPQ5VE2yWvlgIn4aleHfDezkdYLyAezi5AB2qCI8ja3qp_BD4VojFQZk4WLOysG4Eb3Em43uh8iVTXvQJ6KnvA4lIrquYpYQDjh4NXWZaw" },
  { slug: "lich", name: "Lich", role: "Support", attr: "Inteligencia", color: "text-[#1976d2]", type: "dire", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBI_KzPQjQH6ti6J0j2uoDNd1wyHoPfrwCjF773IGSUjM91Smxe6aZSl5MBws8Pm0olt1C-EWcBAzD9XqOPDURUZGz7fq8lOxosruqNA1TGEmf-NMHaLREv88nQzMl_Bkftx3f2wY5vVhxpyONJtlQAuzekSsnnkHp08W1kPKXXO4DLY6nV0BA1L8T75jUU8jOSiINIRd0_NRhYzNW0Qkh3UdyvcfOvYsIxQ34mlY-9JIK0l6_kEgYX" },
];

export default function GuidesPage() {
  return (
    <SiteShell>
      <header className="mb-stack-lg">
        <h1 className="font-display-lg text-display-lg text-on-surface mb-stack-sm">Guias</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Guias de heroes de Dota 2
        </p>
      </header>

      <div className="w-full h-32 md:h-24 bg-surface-container-high rounded border border-outline-variant flex items-center justify-center mb-stack-lg glass-card">
        <span className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-widest opacity-50">
          Advertisement
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {HEROES.map((h) => (
          <Link
            key={h.slug}
            href={`/guides/${h.slug}`}
            className={`hero-card ${h.type} glass-card rounded-lg overflow-hidden flex flex-col group transition-all duration-300`}
          >
            <div className="bg-cover bg-center w-full h-48 relative" style={{ backgroundImage: `url('${h.img}')` }}>
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
            </div>
            <div className="p-stack-md flex-grow flex flex-col">
              <div className="flex justify-between items-start mb-stack-sm">
                <h2 className="font-headline-lg text-headline-lg text-on-surface group-hover:text-primary transition-colors">
                  {h.name}
                </h2>
              </div>
              <div className="mb-stack-sm">
                <span className={`inline-block px-2 py-1 rounded bg-surface-container-highest border border-outline-variant font-label-sm text-label-sm uppercase ${h.color}`}>
                  {h.attr} - {h.role}
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                Guia completa de {h.name}: build de talentos, itemizacion para el rol {h.role}, counters recomendados y lineas donde brilla el heroe.
              </p>
            </div>
          </Link>
        ))}
      </div>
    </SiteShell>
  );
}
