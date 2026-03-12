"use client";

import { useTranslations } from "next-intl";
import { PenLine, Cloud, Lightbulb } from "lucide-react";
import { AnimatedContent } from "@/components/react-bits/animated-content";
import { CountUp } from "@/components/react-bits/count-up";

export function HowItWorksSection() {
  const t = useTranslations("howItWorks");

  const steps = [
    {
      icon: PenLine,
      step: t("step1.step"),
      title: t("step1.title"),
      description: t("step1.description"),
    },
    {
      icon: Cloud,
      step: t("step2.step"),
      title: t("step2.title"),
      description: t("step2.description"),
    },
    {
      icon: Lightbulb,
      step: t("step3.step"),
      title: t("step3.title"),
      description: t("step3.description"),
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50">
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

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <AnimatedContent
              key={index}
              direction="up"
              distance={30}
              delay={0.1 + index * 0.2}
            >
              <div className="relative">
                {/* Connector line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-primary/10" />
                )}

                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                      <step.icon className="h-10 w-10 text-primary" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                      <CountUp from={0} to={index + 1} duration={0.8} />
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground max-w-xs">
                    {step.description}
                  </p>
                </div>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
