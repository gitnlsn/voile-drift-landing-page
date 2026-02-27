import { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { locales } from "@/i18n/config";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { BreadcrumbSchema, MobileAppSchema } from "@/components/seo";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import { PlayStoreLink } from "@/components/shared/play-store-link";
import { Calendar, Sparkles, Clock, LogIn, LucideIcon } from "lucide-react";

import screenshot01 from "@/assets/screenshots/01.png";
import screenshot02 from "@/assets/screenshots/02.png";
import screenshot03 from "@/assets/screenshots/03.png";
import screenshot04 from "@/assets/screenshots/04.png";
import screenshot05 from "@/assets/screenshots/05.png";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.features" });
  return generatePageMetadata({
    title: t("title"),
    description: t("description"),
    locale,
    path: "/features",
  });
}

interface Feature {
  icon: LucideIcon;
  titleKey: string;
  descriptionKey: string;
  altKey: string;
  screenshot: StaticImageData;
}

const featureConfigs: Feature[] = [
  {
    icon: Calendar,
    titleKey: "features.googleCalendarSync.title",
    descriptionKey: "features.googleCalendarSync.description",
    altKey: "features.googleCalendarSync.alt",
    screenshot: screenshot03,
  },
  {
    icon: Sparkles,
    titleKey: "features.geminiAiInsights.title",
    descriptionKey: "features.geminiAiInsights.description",
    altKey: "features.geminiAiInsights.alt",
    screenshot: screenshot04,
  },
  {
    icon: Clock,
    titleKey: "features.simpleTimeTracking.title",
    descriptionKey: "features.simpleTimeTracking.description",
    altKey: "features.simpleTimeTracking.alt",
    screenshot: screenshot05,
  },
  {
    icon: LogIn,
    titleKey: "features.easyGettingStarted.title",
    descriptionKey: "features.easyGettingStarted.description",
    altKey: "features.easyGettingStarted.alt",
    screenshot: screenshot01,
  },
];

export default async function FeaturesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "featuresPage" });
  const navT = await getTranslations({ locale, namespace: "navigation" });

  const features = featureConfigs.map((config) => ({
    icon: config.icon,
    title: t(config.titleKey),
    description: t(config.descriptionKey),
    alt: t(config.altKey),
    screenshot: config.screenshot,
  }));

  const breadcrumbItems = [
    { name: navT("home"), path: "" },
    { name: navT("features") },
  ];

  return (
    <div className="flex flex-col">
      <BreadcrumbSchema locale={locale} items={breadcrumbItems} />
      <MobileAppSchema />
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-indigo-light/50 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl mb-6">
              {t("heroTitle")}
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              {t("heroDescription")}
            </p>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                <Sparkles className="h-4 w-4" />
                {t("dashboardBadge")}
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl mb-6">
                {t("dashboardTitle")}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t("dashboardDescription1")}
              </p>
              <p className="text-muted-foreground">
                {t("dashboardDescription2")}
              </p>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-amber/20 blur-3xl rounded-full" />
                <div className="relative bg-slate-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="bg-slate-900 rounded-[2.5rem] overflow-hidden">
                    <Image
                      src={screenshot02}
                      alt="Voile Drift dashboard with AI insights"
                      className="w-[280px] h-auto"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      {features.map((feature, index) => (
        <section
          key={index}
          className={`py-16 md:py-24 ${
            index % 2 === 0 ? "bg-slate-50" : "bg-background"
          }`}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div
                className={`${
                  index % 2 === 0 ? "order-2 lg:order-1" : "order-2"
                }`}
              >
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                  <feature.icon className="h-4 w-4" />
                  {t("featureBadge")}
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl mb-6">
                  {feature.title}
                </h2>
                <p className="text-muted-foreground text-lg">
                  {feature.description}
                </p>
              </div>
              <div
                className={`flex justify-center ${
                  index % 2 === 0 ? "order-1 lg:order-2" : "order-1"
                }`}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-amber/20 blur-3xl rounded-full" />
                  <div className="relative bg-slate-900 rounded-[3rem] p-3 shadow-2xl">
                    <div className="bg-slate-900 rounded-[2.5rem] overflow-hidden">
                      <Image
                        src={feature.screenshot}
                        alt={feature.alt}
                        className="w-[280px] h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl mb-4">
            {t("ctaTitle")}
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            {t("ctaDescription")}
          </p>
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="bg-white text-primary hover:bg-white/90"
          >
            <PlayStoreLink>
              {t("ctaButton")}
            </PlayStoreLink>
          </Button>
        </div>
      </section>
    </div>
  );
}
