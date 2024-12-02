import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translations from "./public/locales/translate.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translations.en,
    },
    dk: {
      translation: translations.dk,
    },
  },
  lng: "en",
  fallbackLng: "en",
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
