// src/hooks/useTranslation.js
import { useLanguage } from "@/src/context/LanguageContext";
import { translations } from "@/src/locales";

export const useTranslation = () => {
  const { language } = useLanguage();

  // Function to get translation by key
  const t = (key) => {
    const keys = key.split(".");
    let value = translations[language];

    for (const k of keys) {
      if (value && typeof value === "object") {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }

    return value || key;
  };

  return { t, language };
};
