import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://dotafraghub.com";

const STATIC_ROUTES = [
  "/tricks",
  "/guides",
  "/hacks",
  "/videos",
  "/stats",
  "/skins",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
];

const GUIDE_SLUGS = ["pudge", "invoker"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ["/", ...STATIC_ROUTES, ...GUIDE_SLUGS.map((s) => `/guides/${s}`)];
  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "/stats" ? "hourly" : "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
