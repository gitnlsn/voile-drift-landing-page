"use client";

import { useTranslations } from "next-intl";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, FileText, Sparkles, Smartphone } from "lucide-react";
import { AnimatedContent } from "@/components/react-bits/animated-content";
import { SpotlightCard } from "@/components/react-bits/spotlight-card";

export function FeaturesSection() {
  const t = useTranslations("features");

  const features = [
    {
      icon: Calendar,
      title: t("googleCalendarSync.title"),
      description: t("googleCalendarSync.description"),
    },
    {
      icon: FileText,
      title: t("richDescriptions.title"),
      description: t("richDescriptions.description"),
    },
    {
      icon: Sparkles,
      title: t("geminiAiInsights.title"),
      description: t("geminiAiInsights.description"),
    },
    {
      icon: Smartphone,
      title: t("simpleInterface.title"),
      description: t("simpleInterface.description"),
    },
  ];

  return (
    <section id="features" className="py-20 md:py-28 bg-background scroll-mt-16">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedContent direction="up" distance={30}>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl mb-4">
              {t("title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("description")}
            </p>
          </div>
        </AnimatedContent>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <AnimatedContent
              key={index}
              direction="up"
              distance={30}
              delay={0.1 * (index + 1)}
            >
              <SpotlightCard
                spotlightColor="rgba(79, 70, 229, 0.15)"
                className="group rounded-xl border border-slate-200 bg-card text-card-foreground transition-all duration-300 hover:border-primary/50 py-6"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 transition-colors group-hover:bg-primary/20">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </SpotlightCard>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
