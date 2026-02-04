import { Metadata } from "next";
import { siteConfig, localeConfig } from "./config";

type PageMetadataOptions = {
  title: string;
  description: string;
  locale: string;
  path?: string;
  noIndex?: boolean;
};

export function generatePageMetadata({
  title,
  description,
  locale,
  path = "",
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const url = `${siteConfig.url}/${locale}${path}`;
  const ogImageUrl = `${siteConfig.url}/og-image.png`;

  const alternateLanguages: Record<string, string> = {};
  for (const loc of localeConfig.locales) {
    alternateLanguages[loc] = `${siteConfig.url}/${loc}${path}`;
  }
  alternateLanguages["x-default"] = `${siteConfig.url}/${localeConfig.defaultLocale}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: alternateLanguages,
    },
    openGraph: {
      type: "website",
      locale: locale === "pt" ? "pt_BR" : "en_US",
      url,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
