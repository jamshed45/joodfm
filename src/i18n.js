import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)                 // Load translations from /public
  .use(LanguageDetector)        // Detect and store language
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',          // If no language is detected

    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },

    detection: {
      // ⬇️ Determines language detection order and storage
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'], // ✅ Saves in localStorage
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
