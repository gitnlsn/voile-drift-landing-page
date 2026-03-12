"use client";

import { useTranslations } from "next-intl";
import { Calendar, Sparkles, Shield, Smartphone } from "lucide-react";

export function TrustStrip() {
  const t = useTranslations("trustStrip");

  const items = [
    { icon: Calendar, label: t("googleCalendar") },
    { icon: Sparkles, label: t("geminiAi") },
    { icon: Shield, label: t("privacyFirst") },
    { icon: Smartphone, label: t("free") },
  ];

  return (
    <section className="py-8 bg-slate-50 border-y border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-muted-foreground"
            >
              <item.icon className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
