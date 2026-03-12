"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlayStoreLink } from "@/components/shared/play-store-link";
import { Check, X, Sparkles } from "lucide-react";

export function PricingContent() {
  const t = useTranslations("pricingPage");
  const [isAnnual, setIsAnnual] = useState(false);

  const features = [
    { key: "eventLogging", free: true, premium: true },
    { key: "googleCalendarSync", free: true, premium: true },
    { key: "simpleInterface", free: true, premium: true },
    { key: "dailyAiInsights", free: true, premium: true },
    { key: "aiAssistant", free: "limit", premium: true },
  ] as const;

  return (
    <>
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

      {/* Pricing Cards */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-3 mb-12">
            <span
              className={`text-sm font-medium ${!isAnnual ? "text-foreground" : "text-muted-foreground"}`}
            >
              {t("monthly")}
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? "bg-primary" : "bg-slate-300"
              }`}
              aria-label="Toggle annual billing"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span
              className={`text-sm font-medium ${isAnnual ? "text-foreground" : "text-muted-foreground"}`}
            >
              {t("annual")}
            </span>
            {isAnnual && (
              <Badge variant="secondary" className="text-xs">
                {t("save")}
              </Badge>
            )}
          </div>

          {/* Cards */}
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {/* Free Plan */}
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-2xl">{t("freePlan.name")}</CardTitle>
                <div className="mt-2">
                  <span className="text-4xl font-bold">{t("freePlan.price")}</span>
                  <span className="text-muted-foreground ml-1">
                    {t("freePlan.period")}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {t("freePlan.description")}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {features.map((feature) => (
                    <li key={feature.key} className="flex items-center gap-2 text-sm">
                      {feature.free === true ? (
                        <Check className="h-4 w-4 text-green-600 shrink-0" />
                      ) : (
                        <span className="text-xs text-muted-foreground shrink-0 w-4 text-center">
                          {t(`features.fivePerDay`)}
                        </span>
                      )}
                      <span>{t(`features.${feature.key}`)}</span>
                      {feature.free === "limit" && (
                        <span className="text-muted-foreground">
                          ({t("features.fivePerDay")})
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="lg" className="w-full" asChild>
                  <PlayStoreLink>{t("freePlan.cta")}</PlayStoreLink>
                </Button>
              </CardFooter>
            </Card>

            {/* Premium Plan */}
            <Card className="border-primary shadow-lg relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="gap-1">
                  <Sparkles className="h-3 w-3" />
                  {t("premiumPlan.badge")}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{t("premiumPlan.name")}</CardTitle>
                <div className="mt-2">
                  <span className="text-4xl font-bold">
                    {isAnnual
                      ? t("premiumPlan.annualPrice")
                      : t("premiumPlan.monthlyPrice")}
                  </span>
                  <span className="text-muted-foreground ml-1">
                    {isAnnual
                      ? t("premiumPlan.annualPeriod")
                      : t("premiumPlan.monthlyPeriod")}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {t("premiumPlan.description")}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {features.map((feature) => (
                    <li key={feature.key} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-green-600 shrink-0" />
                      <span>{t(`features.${feature.key}`)}</span>
                      {feature.key === "aiAssistant" && (
                        <span className="text-primary font-medium">
                          ({t("features.unlimited")})
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button size="lg" className="w-full" asChild>
                  <PlayStoreLink>{t("premiumPlan.cta")}</PlayStoreLink>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl mb-4">
              {t("features.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("features.description")}
            </p>
          </div>

          <div className="max-w-3xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-4 px-4 text-sm font-semibold text-foreground">
                    &nbsp;
                  </th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-foreground">
                    {t("freePlan.name")}
                  </th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-primary">
                    {t("premiumPlan.name")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature) => (
                  <tr key={feature.key} className="border-b border-slate-100">
                    <td className="py-4 px-4 text-sm text-foreground">
                      {t(`features.${feature.key}`)}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {feature.free === true ? (
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      ) : (
                        <span className="text-sm text-muted-foreground">
                          {t("features.fivePerDay")}
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {feature.key === "aiAssistant" ? (
                        <span className="text-sm font-medium text-primary">
                          {t("features.unlimited")}
                        </span>
                      ) : (
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
            <PlayStoreLink>{t("ctaButton")}</PlayStoreLink>
          </Button>
        </div>
      </section>
    </>
  );
}
