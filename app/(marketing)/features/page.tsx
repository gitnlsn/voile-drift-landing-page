import { Metadata } from "next";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar, Sparkles, Clock, LogIn, LucideIcon } from "lucide-react";

import screenshot01 from "@/assets/screenshots/01.png";
import screenshot02 from "@/assets/screenshots/02.png";
import screenshot03 from "@/assets/screenshots/03.png";
import screenshot04 from "@/assets/screenshots/04.png";
import screenshot05 from "@/assets/screenshots/05.png";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore Voile Drift's powerful features - Google Calendar sync, Gemini AI insights, and simple time tracking.",
};

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  screenshot: StaticImageData;
  alt: string;
}

const features: Feature[] = [
  {
    icon: Calendar,
    title: "Google Calendar Sync",
    description:
      "Seamlessly sync your events with Google Calendar. Your data is always backed up and accessible across all your devices. Never lose track of important moments.",
    screenshot: screenshot03,
    alt: "Google Calendar sync feature",
  },
  {
    icon: Sparkles,
    title: "Gemini AI Insights",
    description:
      "Powered by Google's Gemini AI, get intelligent insights about your habits and patterns. Discover trends you never knew existed and make data-driven decisions about your life.",
    screenshot: screenshot04,
    alt: "Gemini AI insights feature",
  },
  {
    icon: Clock,
    title: "Simple Time Tracking",
    description:
      "A clean, intuitive interface makes logging events effortless. Track your activities with just a few taps - no complicated setup or learning curve required.",
    screenshot: screenshot05,
    alt: "Simple time tracking interface",
  },
  {
    icon: LogIn,
    title: "Easy Getting Started",
    description:
      "Get up and running in seconds. Sign in with your Google account and start tracking immediately. Your calendar is automatically connected - no manual configuration needed.",
    screenshot: screenshot01,
    alt: "Login and getting started screen",
  },
];

export default function FeaturesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-indigo-light/50 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl mb-6">
              Powerful Features, Simple Experience
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Voile Drift combines intelligent AI insights with seamless calendar
              integration to help you understand and improve your daily life.
            </p>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                <Sparkles className="h-4 w-4" />
                AI-Powered Dashboard
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl mb-6">
                Your Life at a Glance
              </h2>
              <p className="text-muted-foreground mb-4">
                The Voile Drift dashboard gives you a comprehensive overview of
                your tracked events and AI-generated insights. See patterns
                emerge as you log more activities.
              </p>
              <p className="text-muted-foreground">
                Weekly summaries, trend analysis, and personalized suggestions
                help you make the most of your time.
              </p>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-amber/20 blur-3xl rounded-full" />
                <div className="relative bg-slate-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="bg-slate-900 rounded-[2.5rem] overflow-hidden">
                    <Image
                      src={screenshot02}
                      alt="Voile Drift dashboard with AI insights"
                      className="w-[280px] h-auto"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      {features.map((feature, index) => (
        <section
          key={index}
          className={`py-16 md:py-24 ${
            index % 2 === 0 ? "bg-slate-50" : "bg-background"
          }`}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div
                className={`${
                  index % 2 === 0 ? "order-2 lg:order-1" : "order-2"
                }`}
              >
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                  <feature.icon className="h-4 w-4" />
                  Feature
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl mb-6">
                  {feature.title}
                </h2>
                <p className="text-muted-foreground text-lg">
                  {feature.description}
                </p>
              </div>
              <div
                className={`flex justify-center ${
                  index % 2 === 0 ? "order-1 lg:order-2" : "order-1"
                }`}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-amber/20 blur-3xl rounded-full" />
                  <div className="relative bg-slate-900 rounded-[3rem] p-3 shadow-2xl">
                    <div className="bg-slate-900 rounded-[2.5rem] overflow-hidden">
                      <Image
                        src={feature.screenshot}
                        alt={feature.alt}
                        className="w-[280px] h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl mb-4">
            Ready to Try These Features?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Download Voile Drift today and start tracking your life with
            powerful AI insights.
          </p>
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="bg-white text-primary hover:bg-white/90"
          >
            <a
              href="https://play.google.com/store/apps/details?id=com.voiledrift.mobile"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get the App
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
