import { JsonLd } from "./json-ld";
import { siteConfig } from "@/lib/seo/config";

type WebsiteSchemaProps = {
  locale: string;
};

export function WebsiteSchema({ locale }: WebsiteSchemaProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: `${siteConfig.url}/${locale}`,
    inLanguage: locale === "pt" ? "pt-BR" : "en-US",
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return <JsonLd data={data} />;
}
