"use client";

import { useTranslations } from "next-intl";
import { Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function ContactContent() {
  const t = useTranslations("contact");

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-indigo-light/50 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <MessageSquare className="h-4 w-4" />
              {t("badge")}
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl mb-6">
              {t("title")}
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl mb-8">
              {t("description")}
            </p>

            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="gap-2">
                  <MessageSquare className="h-5 w-5" />
                  {t("sendMessage")}
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-hidden">
                <DialogHeader>
                  <DialogTitle>{t("dialogTitle")}</DialogTitle>
                </DialogHeader>
                <div className="overflow-hidden rounded-md">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfCQKofdJWp7LrJV1scUl3MCKUzeL4zYZBtilb6J9Uij810Eg/viewform?embedded=true"
                    width="100%"
                    height="600"
                    className="border-0"
                    style={{ height: "70vh", minHeight: "400px" }}
                    title="Contact Form"
                  >
                    {t("formLoading")}
                  </iframe>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-muted-foreground mb-4">{t("preferEmail")}</p>
            <a
              href="mailto:nelsonkenzotamashiro@gmail.com"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <Mail className="h-5 w-5" />
              nelsonkenzotamashiro@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
