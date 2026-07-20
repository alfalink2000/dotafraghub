import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import { Mail, MessageSquare, Send } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto - DotaFragHub",
  description:
    "Contacta al equipo de DotaFragHub: soporte, sugerencias de contenido, reportes de errores y colaboraciones.",
  alternates: { canonical: "/contact" },
};

const CHANNELS = [
  {
    icon: Mail,
    title: "Email",
    value: "contacto@dotafraghub.com",
    desc: "Para consultas generales, colaboraciones y reportes de bugs.",
    color: "primary",
  },
  {
    icon: MessageSquare,
    title: "Discord",
    value: "dotafraghub.com/discord",
    desc: "Unete a la comunidad para discutir el meta y compartir jugadas.",
    color: "secondary",
  },
  {
    icon: Send,
    title: "Twitter / X",
    value: "@DotaFragHub",
    desc: "Sigue nuestras actualizaciones de contenido y noticias del parche.",
    color: "tertiary",
  },
];

export default function ContactPage() {
  return (
    <SiteShell>
      <header className="mb-stack-lg">
        <h1 className="font-display-lg text-display-lg text-on-surface mb-stack-sm">Contacto</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Habla con el equipo de DotaFragHub
        </p>
      </header>

      <div className="w-full h-32 bg-surface-container-high rounded border border-outline-variant flex items-center justify-center mb-stack-lg glass-card">
        <span className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-widest opacity-50">
          Advertisement
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-stack-lg">
        {CHANNELS.map((c) => (
          <div
            key={c.title}
            className="glass-card rounded border border-outline-variant p-stack-md flex flex-col items-start gap-3 hover:border-primary/50 transition-colors"
          >
            <div className={`w-12 h-12 rounded-full bg-${c.color}/20 flex items-center justify-center border border-${c.color}/30`}>
              <c.icon size={24} className={`text-${c.color}`} />
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface">{c.title}</h3>
            <span className={`font-label-bold text-label-bold text-${c.color}`}>{c.value}</span>
            <p className="font-body-sm text-body-sm text-on-surface-variant">{c.desc}</p>
          </div>
        ))}
      </div>

      <section className="mb-stack-lg">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-stack-sm">Envianos un mensaje</h2>
        <form className="glass-card rounded border border-outline-variant p-stack-md flex flex-col gap-stack-sm">
          <div className="flex flex-col gap-1">
            <label className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider" htmlFor="name">Nombre</label>
            <input
              id="name"
              type="text"
              placeholder="Tu nombre"
              className="bg-surface-container-highest border border-outline-variant rounded px-3 py-2 text-on-surface placeholder:text-outline font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="tu@email.com"
              className="bg-surface-container-highest border border-outline-variant rounded px-3 py-2 text-on-surface placeholder:text-outline font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider" htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              rows={5}
              placeholder="Escribe tu mensaje..."
              className="bg-surface-container-highest border border-outline-variant rounded px-3 py-2 text-on-surface placeholder:text-outline font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 resize-none"
            />
          </div>
          <button
            type="submit"
            className="bg-primary-container text-white font-label-bold text-label-bold px-6 py-3 rounded hover:brightness-110 transition-all shadow-[0_0_10px_rgba(179,58,58,0.3)] uppercase tracking-wider self-start mt-stack-sm"
          >
            Enviar mensaje
          </button>
        </form>
      </section>
    </SiteShell>
  );
}
