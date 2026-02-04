import { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { locales } from "@/i18n/config";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { BreadcrumbSchema } from "@/components/seo";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.terms" });
  return generatePageMetadata({
    title: t("title"),
    description: t("description"),
    locale,
    path: "/terms",
  });
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "terms" });
  const metaT = await getTranslations({ locale, namespace: "metadata.terms" });

  const breadcrumbItems = [
    { name: locale === "pt" ? "Início" : "Home", path: "" },
    { name: metaT("title") },
  ];

  return (
    <>
      <BreadcrumbSchema locale={locale} items={breadcrumbItems} />
      <div className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-8">
            {t("title")}
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            {t("lastUpdated")}
          </p>

          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t("sections.acceptance.title")}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t("sections.acceptance.content")}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t("sections.description.title")}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t("sections.description.intro")}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>{t("sections.description.items.create")}</li>
                <li>{t("sections.description.items.sync")}</li>
                <li>{t("sections.description.items.insights")}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t("sections.userAccounts.title")}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t("sections.userAccounts.content")}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t("sections.userContent.title")}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t("sections.userContent.content")}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t("sections.thirdParty.title")}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t("sections.thirdParty.intro")}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>
                  <strong>{t("sections.thirdParty.items.calendar")}</strong>
                </li>
                <li>
                  <strong>{t("sections.thirdParty.items.gemini")}</strong>
                </li>
              </ul>
              <p className="text-muted-foreground mb-4">
                {t("sections.thirdParty.note")}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t("sections.acceptableUse.title")}
              </h2>
              <p className="text-muted-foreground mb-4">{t("sections.acceptableUse.intro")}</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>{t("sections.acceptableUse.items.unlawful")}</li>
                <li>{t("sections.acceptableUse.items.unauthorized")}</li>
                <li>{t("sections.acceptableUse.items.interfere")}</li>
                <li>{t("sections.acceptableUse.items.reverse")}</li>
                <li>{t("sections.acceptableUse.items.harass")}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t("sections.intellectualProperty.title")}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t("sections.intellectualProperty.content")}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t("sections.disclaimer.title")}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t("sections.disclaimer.content")}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t("sections.limitation.title")}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t("sections.limitation.content")}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t("sections.changes.title")}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t("sections.changes.content")}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t("sections.termination.title")}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t("sections.termination.content")}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t("sections.contactInfo.title")}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t("sections.contactInfo.intro")}
              </p>
              <p className="text-muted-foreground">
                <strong>{t("sections.contactInfo.developer")}</strong> {t("sections.contactInfo.developerName")}
                <br />
                <strong>{t("sections.contactInfo.email")}</strong>{" "}
                <a
                  href="mailto:nelsonkenzotamashiro@gmail.com"
                  className="text-primary hover:text-primary/80"
                >
                  nelsonkenzotamashiro@gmail.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
