import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Voile Drift mobile application.",
};

export default function PrivacyPage() {
  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-8">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            Last updated: February 2025
          </p>

          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                1. Introduction
              </h2>
              <p className="text-muted-foreground mb-4">
                Nelson Kenzo Tamashiro (&quot;we,&quot; &quot;our,&quot; or
                &quot;us&quot;) operates the Voile Drift mobile application
                (&quot;the App&quot;). This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                use our App.
              </p>
              <p className="text-muted-foreground mb-4">
                Please read this Privacy Policy carefully. By using the App, you
                consent to the practices described in this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                2. Information We Collect
              </h2>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                2.1 Information You Provide
              </h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>
                  <strong>Account Information:</strong> When you sign in with
                  Google, we receive your name, email address, and profile
                  picture.
                </li>
                <li>
                  <strong>Event Data:</strong> Events you create, including
                  titles, descriptions, dates, times, and any notes you add.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                2.2 Information Collected Automatically
              </h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>
                  <strong>Usage Data:</strong> How you interact with the App,
                  including features used and time spent.
                </li>
                <li>
                  <strong>Device Information:</strong> Device type, operating
                  system version, and unique device identifiers.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-muted-foreground mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Provide and maintain the App&apos;s functionality</li>
                <li>Sync your events with Google Calendar</li>
                <li>
                  Generate AI-powered insights using Gemini AI based on your
                  event data
                </li>
                <li>Improve and optimize the App</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you updates and notifications related to the App</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                4. Third-Party Services
              </h2>
              <p className="text-muted-foreground mb-4">
                The App integrates with the following third-party services:
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                4.1 Google Services
              </h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>
                  <strong>Google Sign-In:</strong> For authentication purposes
                </li>
                <li>
                  <strong>Google Calendar API:</strong> To store and retrieve
                  your events
                </li>
              </ul>
              <p className="text-muted-foreground mb-4">
                Your use of Google services is governed by{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80"
                >
                  Google&apos;s Privacy Policy
                </a>
                .
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                4.2 Google Gemini AI
              </h3>
              <p className="text-muted-foreground mb-4">
                We use Google&apos;s Gemini AI to analyze your event data and
                generate insights. Your event descriptions and patterns may be
                processed by Gemini AI to provide personalized insights. This
                processing is subject to Google&apos;s AI terms and privacy
                policies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                5. Data Storage and Security
              </h2>
              <p className="text-muted-foreground mb-4">
                Your event data is primarily stored in your Google Calendar
                account. We implement appropriate technical and organizational
                measures to protect your information, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Encryption of data in transit using HTTPS</li>
                <li>Secure authentication through Google Sign-In</li>
                <li>Limited access to personal data</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                However, no method of transmission over the Internet is 100%
                secure. We cannot guarantee absolute security of your data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                6. Data Sharing
              </h2>
              <p className="text-muted-foreground mb-4">
                We do not sell your personal information. We may share your
                information in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>
                  <strong>With Service Providers:</strong> Third-party services
                  that help us operate the App (Google Calendar, Gemini AI)
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or
                  to protect our rights
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with a
                  merger, acquisition, or sale of assets
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                7. Your Rights
              </h2>
              <p className="text-muted-foreground mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>
                  <strong>Access:</strong> Request access to your personal data
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate
                  data
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your data
                </li>
                <li>
                  <strong>Portability:</strong> Request a copy of your data in a
                  portable format
                </li>
                <li>
                  <strong>Withdraw Consent:</strong> Withdraw consent for data
                  processing
                </li>
              </ul>
              <p className="text-muted-foreground mb-4">
                To exercise these rights, please contact us using the
                information below.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                8. Data Retention
              </h2>
              <p className="text-muted-foreground mb-4">
                We retain your information for as long as your account is active
                or as needed to provide you services. Your event data is stored
                in your Google Calendar account and is subject to Google&apos;s
                retention policies. You can delete your data at any time through
                the App or your Google Calendar.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                9. Children&apos;s Privacy
              </h2>
              <p className="text-muted-foreground mb-4">
                The App is not intended for children under 13 years of age. We
                do not knowingly collect personal information from children
                under 13. If we learn that we have collected personal
                information from a child under 13, we will take steps to delete
                that information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                10. Changes to This Privacy Policy
              </h2>
              <p className="text-muted-foreground mb-4">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the &quot;Last updated&quot; date. You
                are advised to review this Privacy Policy periodically for any
                changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                11. Contact Us
              </h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about this Privacy Policy, please
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
