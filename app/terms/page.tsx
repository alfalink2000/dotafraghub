import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Terminos y Condiciones - DotaFragHub",
  description:
    "Terminos y condiciones de uso de DotaFragHub: reglas de la comunidad, derechos de autor y responsabilidades del usuario.",
  alternates: { canonical: "/terms" },
};

const SECTIONS = [
  {
    title: "1. Aceptacion de los terminos",
    content:
      "Al acceder y utilizar DotaFragHub, aceptas estos terminos y condiciones en su totalidad. Si no estás de acuerdo con alguno de estos terminos, debes dejar de usar el sitio inmediatamente. Nos reservamos el derecho de modificar estos terminos en cualquier momento sin previo aviso.",
  },
  {
    title: "2. Uso del sitio",
    content:
      "DotaFragHub es una plataforma de contenido informativo y educativo sobre Dota 2. El contenido esta destinado a jugadores que buscan mejorar su nivel de juego. No garantizamos que la informacion este siempre al dia con el meta actual, ya que el juego se actualiza periodicamente. Recomendamos cruzar la informacion con fuentes oficiales.",
  },
  {
    title: "3. Propiedad intelectual",
    content:
      "Todo el contenido original de DotaFragHub (textos, graficos, codigos y disenio) esta protegido por derechos de autor. Dota 2, sus logos e imagenes son propiedad de Valve Corporation. No reclamamos propiedad sobre los activos de Valve. Puedes compartir nuestro contenido mencionando la fuente.",
  },
  {
    title: "4. Conducta del usuario",
    content:
      "Al utilizar nuestro sitio y participar en nuestra comunidad, te comprometes a: no publicar spam, no acosar a otros usuarios, no intentar hackear o manipular el sitio, y respetar las opiniones de otros jugadores. El lenguaje ofensivo o discriminatorio no sera tolerado.",
  },
  {
    title: "5. Exclusion de garantias",
    content:
      "El sitio se proporciona tal cual, sin garantias de ningun tipo. No garantizamos que el sitio estara siempre disponible, que no tendra errores, o que la informacion sera completa y precisa. El uso de la informacion de DotaFragHub es bajo tu propio riesgo.",
  },
  {
    title: "6. Limitacion de responsabilidad",
    content:
      "DotaFragHub y sus creadores no seran responsables por danos directos, indirectos, incidentales o consecuentes derivados del uso del sitio o de la informacion contenida en el mismo. Esto incluye, pero no se limita a, perdidas economicas, de datos o de oportunidades.",
  },
  {
    title: "7. Enlaces a terceros",
    content:
      "Nuestro sitio puede contener enlaces a sitios de terceros (YouTube, Dotabuff, OpenDota). No tenemos control sobre el contenido o las practicas de privacidad de estos sitios y no asumimos responsabilidad por ellos.",
  },
];

export default function TermsPage() {
  return (
    <SiteShell>
      <header className="mb-stack-lg">
        <h1 className="font-display-lg text-display-lg text-on-surface mb-stack-sm">Terminos y Condiciones</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Reglas de uso y responsabilidades
        </p>
      </header>

      <div className="w-full h-32 bg-surface-container-high rounded border border-outline-variant flex items-center justify-center mb-stack-lg glass-card">
        <span className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-widest opacity-50">
          Advertisement
        </span>
      </div>

      <div className="glass-card rounded border border-outline-variant p-stack-md mb-stack-md">
        <p className="font-body-sm text-body-sm text-on-surface-variant italic">
          Ultima actualizacion: Julio 2025
        </p>
      </div>

      <div className="flex flex-col gap-stack-md">
        {SECTIONS.map((s) => (
          <section key={s.title}>
            <h2 className="font-headline-md text-headline-md text-on-surface mb-2">{s.title}</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{s.content}</p>
          </section>
        ))}
      </div>
    </SiteShell>
  );
}
