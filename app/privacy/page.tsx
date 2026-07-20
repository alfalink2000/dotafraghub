import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Politica de Privacidad - DotaFragHub",
  description:
    "Politica de privacidad de DotaFragHub: como recopilamos, usamos y protegemos tus datos personales cuando visitas nuestro sitio.",
  alternates: { canonical: "/privacy" },
};

const SECTIONS = [
  {
    title: "1. Recopilacion de datos",
    content:
      "DotaFragHub no recopila datos personales identificables a menos que los proporciones voluntariamente a traves de formularios de contacto o suscripcion. Podemos recopilar datos no personales automaticamente: direccion IP, tipo de navegador, paginas visitadas y tiempo de permanencia, exclusivamente con fines de analitica y mejora del sitio.",
  },
  {
    title: "2. Uso de cookies",
    content:
      "Utilizamos cookies propias y de terceros (Google Analytics) para mejorar la experiencia de navegacion, recordar preferencias y generar estadisticas de uso. Puedes desactivar las cookies desde la configuracion de tu navegador, aunque esto podria afectar el funcionamiento del sitio.",
  },
  {
    title: "3. Uso de la informacion",
    content:
      "Los datos recopilados se utilizan exclusivamente para: mejorar el contenido y la estructura del sitio, responder a consultas enviadas por email, y generar estadisticas agregadas de uso que nos ayudan a optimizar la experiencia del usuario. Nunca vendemos ni compartimos datos personales con terceros para fines de marketing.",
  },
  {
    title: "4. Servicios de terceros",
    content:
      "Utilizamos la API publica de OpenDota para obtener estadisticas de partidas y heroes. Esta integracion esta sujeta a los terminos de servicio de OpenDota. No tenemos control sobre los datos que la API proporciona publicamente.",
  },
  {
    title: "5. Seguridad",
    content:
      "Implementamos medidas de seguridad razonables para proteger la informacion almacenada en nuestro sitio. Sin embargo, ningun metodo de transmisiom por internet o almacenamiento electronico es 100% seguro, y no podemos garantizar seguridad absoluta.",
  },
  {
    title: "6. Tus derechos",
    content:
      "Tienes derecho a solicitar acceso, rectificacion o eliminacion de tus datos personales que pueda estar en nuestro poder. Para ejercer estos derechos, contactanos a traves de la direccion de correo electronico indicada en nuestra pagina de contacto.",
  },
  {
    title: "7. Cambios en esta politica",
    content:
      "Nos reservamos el derecho de actualizar esta politica de privacidad en cualquier momento. Los cambios se publicaran en esta pagina con una fecha de revision actualizada. Te recomendamos revisar periodicamente esta seccion.",
  },
];

export default function PrivacyPage() {
  return (
    <SiteShell>
      <header className="mb-stack-lg">
        <h1 className="font-display-lg text-display-lg text-on-surface mb-stack-sm">Politica de Privacidad</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Como protegemos y usamos tu informacion
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
