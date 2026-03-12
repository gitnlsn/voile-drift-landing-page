"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { PlayStoreLink } from "@/components/shared/play-store-link";
import { AnimatedContent } from "@/components/react-bits/animated-content";

export function CTASection() {
  const t = useTranslations("cta");

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary to-primary/80">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedContent direction="up" distance={40}>
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl mb-4">
              {t("title")}
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mb-8">
              {t("description")}
            </p>
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="gap-2 bg-white text-primary hover:bg-white/90"
            >
              <PlayStoreLink>
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                {t("downloadAndroid")}
              </PlayStoreLink>
            </Button>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
