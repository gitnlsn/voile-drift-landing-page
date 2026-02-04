"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/lib/navigation";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("languageSwitcher");

  const toggleLocale = () => {
    const newLocale = locale === "en" ? "pt" : "en";
    router.replace(pathname, { locale: newLocale });
  };

  const targetLanguage = locale === "en" ? t("portuguese") : t("english");

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLocale}
      className="gap-2"
      title={t("switchTo", { language: targetLanguage })}
    >
      <Globe className="h-4 w-4" />
      <span className="uppercase">{locale === "en" ? "PT" : "EN"}</span>
    </Button>
  );
}
