import { Metadata } from "next";
import { Mail, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Voile Drift team. We'd love to hear your feedback and questions.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-indigo-light/50 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <MessageSquare className="h-4 w-4" />
              Get in Touch
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Have questions, feedback, or suggestions? We&apos;d love to hear
              from you. Fill out the form below and we&apos;ll get back to you
              as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfCQKofdJWp7LrJV1scUl3MCKUzeL4zYZBtilb6J9Uij810Eg/viewform?embedded=true"
                width="100%"
                height="1035"
                className="border-0"
                title="Contact Form"
              >
                Loading...
              </iframe>
            </div>
          </div>

          {/* Alternative Contact */}
          <div className="max-w-2xl mx-auto mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Prefer email? Reach out directly:
            </p>
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
