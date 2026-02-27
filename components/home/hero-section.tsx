"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/lib/navigation";
import { Button } from "@/components/ui/button";
import { PlayStoreLink } from "@/components/shared/play-store-link";
import { Calendar, Sparkles } from "lucide-react";

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-light/50 to-background py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                {t("badge")}
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              {t("title")}{" "}
              <span className="text-primary">{t("titleHighlight")}</span>
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl max-w-xl mx-auto lg:mx-0">
              {t("description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild className="gap-2">
                <PlayStoreLink>
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  {t("googlePlay")}
                </PlayStoreLink>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">{t("learnMore")}</Link>
              </Button>
            </div>
          </div>

          {/* App Mockup Placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-amber/20 blur-3xl rounded-full" />
              <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-200 p-4 w-[280px] md:w-[320px]">
                <div className="bg-slate-100 rounded-2xl aspect-[9/16] flex flex-col items-center justify-center gap-4 p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Calendar className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-foreground">
                      Voile Drift
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Your intelligent calendar companion
                    </p>
                  </div>
                  <div className="w-full space-y-2 mt-4">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="bg-white rounded-lg p-3 shadow-sm border"
                      >
                        <div className="h-2 bg-slate-200 rounded w-3/4 mb-2" />
                        <div className="h-2 bg-slate-100 rounded w-1/2" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
