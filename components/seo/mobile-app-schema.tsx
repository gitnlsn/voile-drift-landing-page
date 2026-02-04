import { JsonLd } from "./json-ld";
import { siteConfig } from "@/lib/seo/config";

export function MobileAppSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: siteConfig.name,
    operatingSystem: "Android",
    applicationCategory: "LifestyleApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      ratingCount: "1",
    },
    downloadUrl: siteConfig.googlePlayUrl,
    installUrl: siteConfig.googlePlayUrl,
    description: siteConfig.description,
    screenshot: `${siteConfig.url}/screenshots/01.png`,
    softwareVersion: "1.0",
    author: {
      "@type": "Person",
      name: siteConfig.author,
    },
  };

  return <JsonLd data={data} />;
}
