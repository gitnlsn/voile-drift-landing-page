import { setRequestLocale, getTranslations } from "next-intl/server";
import { locales } from "@/i18n/config";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.privacy" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "privacy" });

  return (
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
                {t("sections.introduction.title")}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t("sections.introduction.content1")}
              </p>
              <p className="text-muted-foreground mb-4">
                {t("sections.introduction.content2")}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t("sections.informationCollected.title")}
              </h2>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                {t("sections.informationCollected.providedTitle")}
              </h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>
                  <strong>{t("sections.informationCollected.providedItems.account")}</strong>
                </li>
                <li>
                  <strong>{t("sections.informationCollected.providedItems.events")}</strong>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                {t("sections.informationCollected.automaticTitle")}
              </h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>
                  <strong>{t("sections.informationCollected.automaticItems.usage")}</strong>
                </li>
                <li>
                  <strong>{t("sections.informationCollected.automaticItems.device")}</strong>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t("sections.howWeUse.title")}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t("sections.howWeUse.intro")}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>{t("sections.howWeUse.items.maintain")}</li>
                <li>{t("sections.howWeUse.items.sync")}</li>
                <li>{t("sections.howWeUse.items.insights")}</li>
                <li>{t("sections.howWeUse.items.improve")}</li>
                <li>{t("sections.howWeUse.items.support")}</li>
                <li>{t("sections.howWeUse.items.updates")}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t("sections.thirdParty.title")}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t("sections.thirdParty.intro")}
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                {t("sections.thirdParty.googleTitle")}
              </h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>
                  <strong>{t("sections.thirdParty.googleItems.signIn")}</strong>
                </li>
                <li>
                  <strong>{t("sections.thirdParty.googleItems.calendar")}</strong>
                </li>
              </ul>
              <p className="text-muted-foreground mb-4">
                {t("sections.thirdParty.googlePolicy")}{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80"
                >
                  {t("sections.thirdParty.googlePolicyLink")}
                </a>
                .
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                {t("sections.thirdParty.geminiTitle")}
              </h3>
              <p className="text-muted-foreground mb-4">
                {t("sections.thirdParty.geminiContent")}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t("sections.dataSecurity.title")}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t("sections.dataSecurity.intro")}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>{t("sections.dataSecurity.items.encryption")}</li>
                <li>{t("sections.dataSecurity.items.auth")}</li>
                <li>{t("sections.dataSecurity.items.access")}</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                {t("sections.dataSecurity.disclaimer")}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t("sections.dataSharing.title")}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t("sections.dataSharing.intro")}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>
                  <strong>{t("sections.dataSharing.items.providers")}</strong>
                </li>
                <li>
                  <strong>{t("sections.dataSharing.items.legal")}</strong>
                </li>
                <li>
                  <strong>{t("sections.dataSharing.items.business")}</strong>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t("sections.yourRights.title")}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t("sections.yourRights.intro")}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>
                  <strong>{t("sections.yourRights.items.access")}</strong>
                </li>
                <li>
                  <strong>{t("sections.yourRights.items.correction")}</strong>
                </li>
                <li>
                  <strong>{t("sections.yourRights.items.deletion")}</strong>
                </li>
                <li>
                  <strong>{t("sections.yourRights.items.portability")}</strong>
                </li>
                <li>
                  <strong>{t("sections.yourRights.items.withdraw")}</strong>
                </li>
              </ul>
              <p className="text-muted-foreground mb-4">
                {t("sections.yourRights.exercise")}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t("sections.dataRetention.title")}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t("sections.dataRetention.content")}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {t("sections.children.title")}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t("sections.children.content")}
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
                {t("sections.contactUs.title")}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t("sections.contactUs.intro")}
              </p>
              <p className="text-muted-foreground">
                <strong>{t("sections.contactUs.developer")}</strong> {t("sections.contactUs.developerName")}
                <br />
                <strong>{t("sections.contactUs.email")}</strong>{" "}
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
  );
}
