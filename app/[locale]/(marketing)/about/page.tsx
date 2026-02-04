import { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { locales } from "@/i18n/config";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { BreadcrumbSchema } from "@/components/seo";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Sparkles,
  Shield,
  Zap,
  Heart,
  Target,
} from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.about" });
  return generatePageMetadata({
    title: t("title"),
    description: t("description"),
    locale,
    path: "/about",
  });
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "about" });
  const navT = await getTranslations({ locale, namespace: "navigation" });

  const breadcrumbItems = [
    { name: navT("home"), path: "" },
    { name: navT("about") },
  ];

  const values = [
    {
      icon: Heart,
      title: t("values.userCentric.title"),
      description: t("values.userCentric.description"),
    },
    {
      icon: Shield,
      title: t("values.privacy.title"),
      description: t("values.privacy.description"),
    },
    {
      icon: Zap,
      title: t("values.intelligent.title"),
      description: t("values.intelligent.description"),
    },
  ];

  const technologies = [
    {
      name: t("technologies.googleCalendar.name"),
      description: t("technologies.googleCalendar.description"),
    },
    {
      name: t("technologies.geminiAi.name"),
      description: t("technologies.geminiAi.description"),
    },
    {
      name: t("technologies.materialDesign.name"),
      description: t("technologies.materialDesign.description"),
    },
  ];

  return (
    <div className="flex flex-col">
      <BreadcrumbSchema locale={locale} items={breadcrumbItems} />
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

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                <Target className="h-4 w-4" />
                {t("missionBadge")}
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl mb-6">
                {t("missionTitle")}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t("missionDescription1")}
              </p>
              <p className="text-muted-foreground">
                {t("missionDescription2")}
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-amber/20 blur-3xl rounded-full" />
                <div className="relative bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-amber/10 flex items-center justify-center">
                      <Sparkles className="h-6 w-6 text-amber" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    {t("calendarPlusAi")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t("calendarPlusAiDescription")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl mb-4">
              {t("valuesTitle")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("valuesDescription")}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value, index) => (
              <Card key={index} className="border-slate-200">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl mb-4">
              {t("technologyTitle")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("technologyDescription")}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl border border-slate-200 bg-white"
              >
                <h3 className="font-semibold text-lg mb-2">{tech.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            <a href="https://play.google.com/store/apps/details?id=com.voiledrift.mobile" target="_blank" rel="noopener noreferrer">
              {t("ctaButton")}
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
