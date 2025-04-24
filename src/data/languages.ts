
import { LanguageInfo } from "../types";

export const languages: LanguageInfo[] = [
  {
    id: "english",
    name: "English",
    nativeName: "English",
    flag: "🇺🇸",
    description: "A global language with roots in Germanic languages, widely spoken across the world.",
    color: "#2563EB",
    script: "Latin"
  },
  {
    id: "hindi",
    name: "Hindi",
    nativeName: "हिन्दी",
    flag: "🇮🇳",
    description: "One of the most widely spoken languages in India, written in the Devanagari script.",
    color: "#E11D48",
    script: "Devanagari"
  },
  {
    id: "gujarati",
    name: "Gujarati",
    nativeName: "ગુજરાતી",
    flag: "🇮🇳",
    description: "An Indo-Aryan language native to the Indian state of Gujarat.",
    color: "#D97706",
    script: "Gujarati"
  },
  {
    id: "marathi",
    name: "Marathi",
    nativeName: "मराठी",
    flag: "🇮🇳",
    description: "An Indo-Aryan language spoken predominantly by Marathi people in the Indian state of Maharashtra.",
    color: "#059669",
    script: "Devanagari"
  },
  {
    id: "spanish",
    name: "Spanish",
    nativeName: "Español",
    flag: "🇪🇸",
    description: "A Romance language that originated in the Iberian Peninsula, now spoken by nearly 500 million people globally.",
    color: "#F59E0B",
    script: "Latin"
  },
  {
    id: "french",
    name: "French",
    nativeName: "Français",
    flag: "🇫🇷",
    description: "A Romance language of the Indo-European family, spoken around the world.",
    color: "#8B5CF6",
    script: "Latin"
  }
] as const;

export const getLanguageInfo = (id: string): LanguageInfo | undefined => {
  return languages.find(lang => lang.id === id);
};
