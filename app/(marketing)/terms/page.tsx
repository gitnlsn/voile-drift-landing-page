import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Voile Drift mobile application.",
};

export default function TermsPage() {
  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-8">
            Terms of Service
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            Last updated: February 2025
          </p>

          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-muted-foreground mb-4">
                By downloading, installing, or using Voile Drift (&quot;the
                App&quot;), you agree to be bound by these Terms of Service. If
                you do not agree to these terms, please do not use the App.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                2. Description of Service
              </h2>
              <p className="text-muted-foreground mb-4">
                Voile Drift is a mobile application that allows users to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Create and manage events</li>
                <li>Sync events with Google Calendar</li>
                <li>Receive AI-powered insights through Gemini AI integration</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                3. User Accounts
              </h2>
              <p className="text-muted-foreground mb-4">
                To use certain features of the App, you may need to sign in with
                your Google account. You are responsible for maintaining the
                confidentiality of your account credentials and for all
                activities that occur under your account.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                4. User Content
              </h2>
              <p className="text-muted-foreground mb-4">
                You retain ownership of any content you create using the App,
                including event descriptions and notes. By using the App, you
                grant us a limited license to process your content solely for
                the purpose of providing the service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                5. Third-Party Services
              </h2>
              <p className="text-muted-foreground mb-4">
                The App integrates with third-party services including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>
                  <strong>Google Calendar:</strong> For event storage and
                  synchronization
                </li>
                <li>
                  <strong>Google Gemini AI:</strong> For generating insights
                  about your events
                </li>
              </ul>
              <p className="text-muted-foreground mb-4">
                Your use of these services is also subject to their respective
                terms of service and privacy policies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                6. Acceptable Use
              </h2>
              <p className="text-muted-foreground mb-4">You agree not to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Use the App for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to the App or its systems</li>
                <li>Interfere with or disrupt the App&apos;s functionality</li>
                <li>Reverse engineer or attempt to extract the source code</li>
                <li>Use the App to harass, abuse, or harm others</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                7. Intellectual Property
              </h2>
              <p className="text-muted-foreground mb-4">
                The App, including its design, features, and content (excluding
                user content), is owned by Nelson Kenzo Tamashiro and is
                protected by intellectual property laws. You may not copy,
                modify, distribute, or create derivative works without prior
                written consent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                8. Disclaimer of Warranties
              </h2>
              <p className="text-muted-foreground mb-4">
                The App is provided &quot;as is&quot; and &quot;as
                available&quot; without warranties of any kind, either express
                or implied. We do not guarantee that the App will be
                uninterrupted, secure, or error-free.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                9. Limitation of Liability
              </h2>
              <p className="text-muted-foreground mb-4">
                To the maximum extent permitted by law, Nelson Kenzo Tamashiro
                shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages arising from your use of the
                App.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                10. Changes to Terms
              </h2>
              <p className="text-muted-foreground mb-4">
                We reserve the right to modify these terms at any time.
                Continued use of the App after changes constitutes acceptance of
                the modified terms. We will notify users of significant changes
                through the App or via email.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                11. Termination
              </h2>
              <p className="text-muted-foreground mb-4">
                We may terminate or suspend your access to the App at any time,
                without prior notice, for conduct that we believe violates these
                terms or is harmful to other users or us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                12. Contact Information
              </h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about these Terms of Service, please
                contact us:
              </p>
              <p className="text-muted-foreground">
                <strong>Developer:</strong> Nelson Kenzo Tamashiro
                <br />
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:nelsonkenzotamashiro@gmail.com"
                  className="text-primary hover:text-primary/80"
                >
                  nelsonkenzotamashiro@gmail.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
