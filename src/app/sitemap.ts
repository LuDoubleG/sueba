import type { MetadataRoute } from "next";

const SITE_URL = "https://sueba-dragon-wohnbau.de";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const homeAnchors = [
    { path: "", priority: 1.0 },
    { path: "#manifest", priority: 0.7 },
    { path: "#framework", priority: 0.7 },
    { path: "#portfolio", priority: 0.7 },
    { path: "#prozess", priority: 0.7 },
    { path: "#stimmen", priority: 0.6 },
    { path: "#kontakt", priority: 0.9 },
    { path: "#faq", priority: 0.7 }
  ];

  const legalPages = [
    { path: "datenschutz", priority: 0.4 },
    { path: "impressum", priority: 0.4 },
    { path: "agb", priority: 0.4 }
  ];

  return [
    ...homeAnchors.map(({ path, priority }) => ({
      url: `${SITE_URL}/${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority
    })),
    ...legalPages.map(({ path, priority }) => ({
      url: `${SITE_URL}/${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority
    }))
  ];
}
