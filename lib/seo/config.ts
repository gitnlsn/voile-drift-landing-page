export const siteConfig = {
  url: "https://www.voiledrift.com",
  name: "Voile Drift",
  author: "Nelson Kenzo Tamashiro",
  email: "nelsonkenzotamashiro@gmail.com",
  googlePlayUrl:
    "https://play.google.com/store/apps/details?id=com.voiledrift.mobile",
  description:
    "Voile Drift helps you capture life events in Google Calendar and provides intelligent insights powered by Gemini AI.",
  keywords: [
    "calendar",
    "events",
    "AI",
    "Gemini",
    "Google Calendar",
    "life tracking",
    "insights",
    "mobile app",
    "Android",
  ],
} as const;

export const localeConfig = {
  defaultLocale: "en",
  locales: ["en", "pt"],
  localeNames: {
    en: "English",
    pt: "Português",
  },
} as const;
