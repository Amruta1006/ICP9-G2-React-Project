import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to The Pet Connection 🐾",
      intro: "Find loving homes for adorable pets. Adopt, love, and make a difference today!",
      why_adopt: "Why Adopt a Pet? 🏡🐶🐱",
      adopt_info: "Every year, millions of homeless pets wait for a second chance at life. By adopting, you not only save a life but also gain a loyal friend who will bring love, happiness, and companionship into your home.💖🏠",
      language: "Language",
    },
  },
  mr: {
    translation: {
      welcome: "पाळीव प्राणी जोडणीमध्ये आपले स्वागत आहे 🐾",
      intro: "प्रेमळ घरांसाठी सुंदर पाळीव प्राणी शोधा. दत्तक घ्या, प्रेम करा आणि आजच फरक करा!",
      why_adopt: "एक पाळीव प्राणी दत्तक का घ्यावा? 🏡🐶🐱",
      adopt_info: "दरवर्षी, लाखो बेघर पाळीव प्राणी दुसऱ्या संधीची वाट पाहत असतात. दत्तक घेऊन, तुम्ही केवळ एक जीव वाचवत नाही तर एक विश्वासू मित्रही मिळवता, जो तुमच्या घरात प्रेम, आनंद आणि सोबत आणेल.",
      language: "भाषा",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
