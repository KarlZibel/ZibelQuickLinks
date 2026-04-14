import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import mt from "./locales/mt.json";

export const supportedLanguages = [
  { code: "en", name: "English" },
  { code: "mt", name: "Malti" },
] as const;

export type LocaleCode = (typeof supportedLanguages)[number]["code"];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      mt: { translation: mt },
    },
    supportedLngs: supportedLanguages.map((l) => l.code),
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

i18n.on("languageChanged", (lng) => {
  const doc = typeof document !== "undefined" ? document : null;
  if (doc) {
    doc.documentElement.lang = lng.slice(0, 2);
    const title = i18n.getResource(lng, "translation", "meta.title");
    if (title) doc.title = title;
  }
});

export default i18n;
