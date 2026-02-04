import type { MetadataRoute } from "next";
import { siteConfig, localeConfig } from "@/lib/seo/config";

type SitemapEntry = {
  path: string;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority: number;
};

const pages: SitemapEntry[] = [
  { path: "", changeFrequency: "weekly", priority: 1.0 },
  { path: "/features", changeFrequency: "monthly", priority: 0.9 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.5 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const now = new Date();

  for (const page of pages) {
    for (const locale of localeConfig.locales) {
      const url = `${siteConfig.url}/${locale}${page.path}`;

      const languages: Record<string, string> = {};
      for (const loc of localeConfig.locales) {
        languages[loc] = `${siteConfig.url}/${loc}${page.path}`;
      }
      languages["x-default"] = `${siteConfig.url}/${localeConfig.defaultLocale}${page.path}`;

      entries.push({
        url,
        lastModified: now,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages,
        },
      });
    }
  }

  return entries;
}
