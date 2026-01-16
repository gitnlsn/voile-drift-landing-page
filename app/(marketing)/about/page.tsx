import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Sparkles,
  Shield,
  Zap,
  Heart,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Voile Drift - the mobile app that helps you capture life events and gain AI-powered insights.",
};

const values = [
  {
    icon: Heart,
    title: "User-Centric Design",
    description:
      "Every feature is designed with you in mind, making life tracking effortless and enjoyable.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description:
      "Your data belongs to you. We prioritize your privacy and security in everything we do.",
  },
  {
    icon: Zap,
    title: "Intelligent Insights",
    description:
      "Leveraging the power of Gemini AI to provide meaningful patterns and insights.",
  },
];

const technologies = [
  {
    name: "Google Calendar",
    description: "Seamless integration for reliable event storage",
  },
  {
    name: "Gemini AI",
    description: "Advanced AI for intelligent pattern recognition",
  },
  {
    name: "Material Design",
    description: "Beautiful, intuitive interface following modern design principles",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-indigo-light/50 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl mb-6">
              About Voile Drift
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Voile Drift was created with a simple mission: to help you
              understand your life better through intelligent event tracking and
              AI-powered insights.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                <Target className="h-4 w-4" />
                Our Mission
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl mb-6">
                Making Life Tracking Simple and Meaningful
              </h2>
              <p className="text-muted-foreground mb-4">
                We believe that understanding your daily activities and patterns
                is the first step to living a more intentional life. Voile Drift
                bridges the gap between simple event logging and meaningful
                insights.
              </p>
              <p className="text-muted-foreground">
                By combining the reliability of Google Calendar with the
                intelligence of Gemini AI, we&apos;ve created a tool that not
                only stores your events but helps you understand them.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-amber/20 blur-3xl rounded-full" />
                <div className="relative bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-amber/10 flex items-center justify-center">
                      <Sparkles className="h-6 w-6 text-amber" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    Calendar + AI = Insights
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    The perfect combination for understanding your life patterns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we build.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value, index) => (
              <Card key={index} className="border-slate-200">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl mb-4">
              Built with Modern Technology
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We use industry-leading technologies to deliver the best
              experience.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl border border-slate-200 bg-white"
              >
                <h3 className="font-semibold text-lg mb-2">{tech.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Download Voile Drift today and start understanding your life better.
          </p>
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="bg-white text-primary hover:bg-white/90"
          >
            <a href="#" target="_blank" rel="noopener noreferrer">
              Get the App
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
