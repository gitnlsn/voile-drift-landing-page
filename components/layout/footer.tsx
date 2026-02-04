"use client";

import { Link } from "@/lib/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const t = useTranslations("footer");
  const navT = useTranslations("navigation");
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { href: "/", label: navT("home") },
      { href: "/features", label: navT("features") },
      { href: "/about", label: navT("about") },
      { href: "/contact", label: navT("contact") },
    ],
    legal: [
      { href: "/terms", label: t("termsOfService") },
      { href: "/privacy", label: t("privacyPolicy") },
    ],
  };

  return (
    <footer className="border-t bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/android-chrome-192x192.png"
                alt="Voile Drift"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-semibold text-lg text-foreground">
                Voile Drift
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              {t("tagline")}
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-sm text-foreground mb-3">
              {t("product")}
            </h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-sm text-foreground mb-3">
              {t("legal")}
            </h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {t("copyright", { year: currentYear })}
          </p>
          <p className="text-sm text-muted-foreground">
            {t("developedBy")}
          </p>
        </div>
      </div>
    </footer>
  );
}
