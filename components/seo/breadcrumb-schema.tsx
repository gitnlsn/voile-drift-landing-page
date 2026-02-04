import { JsonLd } from "./json-ld";
import { siteConfig } from "@/lib/seo/config";

type BreadcrumbItem = {
  name: string;
  path?: string;
};

type BreadcrumbSchemaProps = {
  locale: string;
  items: BreadcrumbItem[];
};

export function BreadcrumbSchema({ locale, items }: BreadcrumbSchemaProps) {
  const itemListElement = items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.path ? `${siteConfig.url}/${locale}${item.path}` : undefined,
  }));

  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };

  return <JsonLd data={data} />;
}
