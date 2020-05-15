import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import english from './languages/en.json';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    en: {
        translation: english
    }
};

i18n.use(initReactI18next).init({
    resources, lng: "es", keySeparator: '>', nsSeparator: '|',
    interpolation: { escapeValue: false }
});

export default i18n;