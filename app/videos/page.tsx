import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import VideoCard from "@/components/VideoCard";

export const metadata: Metadata = {
  title: "Videos de Dota 2 - Highlights, replays y tutoriales",
  description:
    "Los mejores videos de Dota 2: highlights de torneos, analisis de replays, tutoriales de mecanicas avanzadas y guias de heroes en video.",
  alternates: { canonical: "/videos" },
};

const VIDEOS = [
  {
    title: "Analisis de la gran final del Major",
    videoId: "uPq1sYb310M",
    channel: "DotaFragHub",
    thumbnailUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhLgVDjfbucEk0EiJqKFTUOp4sjeXzn1xKEBgMZ3wH-GkdpWB-tkMnT_QykBUwD0o-oDRXvvFTAHkanf1tN0r9b9JrCIJfZWhu_N308GjZijv3uVR9pDHNohhlPPlXOUghFOxs33Y7fUbz3tp-jqiDjFA2Ya1aNcqSxd7nLR0Kag03U8kR5RDPoHjCkuTprY1UhyJ10uO8liY3aFEwJJMd4wZEEHfj3uIinQ5Z8iQGXfkPZ7LXxHue",
  },
  {
    title: "Top 10 ganks de la semana",
    videoId: "Jv7d6E7kC0I",
    channel: "DotaFragHub",
    thumbnailUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWyc8DVIaQTK8L6bLfplVRSzBobbXUedJgiNwzsF6dKpl2M4W_ghS7FVvqmJvemZAq3NP56tZcYXEGNGVznRWBOgqGwwhdLmIY5CGHu8YitMHO1n68h_WgE94c6_g6njViegcy0uyy4AgHO0IwORpKfHcanvd6rP-O_U4PfStvJ2t2TXBt00RpLHp-efV8tKLRmn9vGQ4nETlzK4iFRwP6nL1WJMKpwsXUh9t3l_1L_RqVR7zBpJti",
  },
  {
    title: "Guia rapida de mid lane para subir de MMR",
    videoId: "mHfFAiMvk8c",
    channel: "DotaFragHub",
    thumbnailUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBAdQXZLrYJMB-sMrbXiK-fXIR7DLz1GNuh2kPKxsqpkvlIGwt3M7JuxAKltH50aaUsrQuM6376GmL1unG21bShXx_GCjn4cGeNNsF6LbuSDS69Qv8qhLbvVWDk1B97eUdPuz7Mnx2Na0DwqK56PsLbKbhujvM2RJSGiXvA2Aq8BLIqOYUsAN0Ue2aUSHpDGgG2SolSduaxY0aLaPqJEGp8fLdMjbSK_HJCM2Bx0KAF5e7RB56jj5Y",
  },
  {
    title: "El heroe mas roto del parche actual",
    videoId: "s8eZXoLpY30",
    channel: "DotaFragHub",
    thumbnailUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBweEII48OsMeXK75Pz-8mvaAaI9mklZ9ZQXYcwnKzkrPLITDdBEQMPQUO3AYUqHnNtWFqlutn1DNUoxUnHevPmFn7B9d-N_yI1mlmraAiwORmPqCrwuUWAWhroAHJmpfe9GBqoQITNk-ALeJS6lfVdaAk0_IfvEZEnOKzZ0ZhvfqSwIH19opBaziUSomYTKzS6YhPHD4VXJfmJSDTPmapUYeEJBkkVfl8AZ8_3CAraNIceb3TdKILZ",
  },
  {
    title: "Errores comunes que te cuestan partidas",
    videoId: "5y-KcgbS0bY",
    channel: "DotaFragHub",
    thumbnailUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdGF_ABWj_POGNn1kzemdNr_eM5AX3VhxtoiqdDdwIfbRArob0xct_APm2mRiIvdVvLW9pZP8n6i0mcI7WlryWdlVOj4AF63BjqGBcnBmzuteGUTStqicqUC9aC41G_9TmgTadtSDyPXI4XtDmkfKXQaSCsbhO0xsK9_KRnlbUsPy0MXP_2MQld93aHfDa64RboV4lF5Ung6svJT4acyPpahH72C8QEuNWcDsVel2YkXSL8O6ur0lV",
  },
  {
    title: "Mejores jugadas de Pudge en ranked",
    videoId: "0gJ8t2V5yHg",
    channel: "DotaFragHub",
    thumbnailUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIiQzwlneB591tDdGbL4V6r2XkjgzA6-HXmJRnupPOLidCyGUabuF-jrI4b7Bwx6aD-TxBahh1wBCRTe60RvBQU81rvShHXNBKZI3EaT0D0L8tp92loq-vchdOTb6LysvAXjA-EzdPDuAOguFNjGH48-Y2reDOlh12AqpeyGxpO7mkXviNMv9iG16eMBgGKbcIXyZP6NS81WQ-b5z-mT2U1p68-8MAJwnZDLxCOIRl-QK8erDjF3q6",
  },
];

export default function VideosPage() {
  return (
    <SiteShell>
      <header className="mb-stack-lg">
        <h1 className="font-display-lg text-display-lg text-on-surface mb-stack-sm">
          Videos
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Analisis, highlights y tutoriales visuales
        </p>
      </header>

      <div className="w-full h-32 bg-surface-container-high rounded border border-outline-variant flex items-center justify-center mb-stack-lg glass-card">
        <span className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-widest opacity-50">
          Advertisement
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {VIDEOS.map((v) => (
          <VideoCard key={v.videoId} title={v.title} videoId={v.videoId} thumbnailUrl={v.thumbnailUrl} channel={v.channel} />
        ))}
      </div>
    </SiteShell>
  );
}
