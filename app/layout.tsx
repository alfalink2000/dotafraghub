import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-montserrat", display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dotafraghub.com";
const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DotaFragHub - Trucos, Guias, Estadisticas y Secretos de Dota 2",
    template: "%s | DotaFragHub",
  },
  description:
    "DotaFragHub es el hub en espanol de Dota 2: trucos de jugadas, guias de heroes, secretos del mapa, clips en video, estadisticas en tiempo real y skins. Actualizado por la comunidad.",
  keywords: [
    "Dota 2",
    "trucos Dota 2",
    "guias de heroes Dota 2",
    "estadisticas Dota 2",
    "secretos Dota 2",
    "hacks Dota 2",
    "skins Dota 2",
    "clips Dota 2",
    "winrate Dota 2",
    "OpenDota",
  ],
  authors: [{ name: "DotaFragHub" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    siteName: "DotaFragHub",
    title: "DotaFragHub - El hub hispano de Dota 2",
    description:
      "Trucos, guias de heroes, secretos, videos y estadisticas en tiempo real de Dota 2.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "DotaFragHub" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DotaFragHub",
    description: "Trucos, guias, estadisticas y secretos de Dota 2.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "games",
};

export const viewport: Viewport = {
  themeColor: "#0E0E12",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        {adsenseClient && (
          <Script
            id="adsense-init"
            strategy="afterInteractive"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
            crossOrigin="anonymous"
          />
        )}
      </head>
      <body className="font-body-md antialiased bg-background text-on-surface min-h-screen">
        {children}
      </body>
    </html>
  );
}
