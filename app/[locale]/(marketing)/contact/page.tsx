import { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { locales } from "@/i18n/config";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { BreadcrumbSchema } from "@/components/seo";
import { ContactContent } from "./contact-content";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.contact" });
  return generatePageMetadata({
    title: t("title"),
    description: t("description"),
    locale,
    path: "/contact",
  });
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const navT = await getTranslations({ locale, namespace: "navigation" });

  const breadcrumbItems = [
    { name: navT("home"), path: "" },
    { name: navT("contact") },
  ];

  return (
    <>
      <BreadcrumbSchema locale={locale} items={breadcrumbItems} />
      <ContactContent />
    </>
  );
}
