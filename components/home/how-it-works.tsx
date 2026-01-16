import { PenLine, Cloud, Lightbulb } from "lucide-react";

const steps = [
  {
    icon: PenLine,
    step: "01",
    title: "Log Your Events",
    description:
      "Quickly capture any life event with details, notes, and timestamps using our intuitive interface.",
  },
  {
    icon: Cloud,
    step: "02",
    title: "Sync to Calendar",
    description:
      "Your events are automatically saved to Google Calendar, keeping everything organized in one place.",
  },
  {
    icon: Lightbulb,
    step: "03",
    title: "Get AI Insights",
    description:
      "Gemini AI analyzes your patterns and provides personalized insights about your activities.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting started with Voile Drift is simple. Three easy steps to a
            more organized life.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="relative">
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
                    {step.step}
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
          ))}
        </div>
      </div>
    </section>
  );
}
