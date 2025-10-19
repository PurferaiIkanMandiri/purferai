// src/context/LanguageContext.js
import { createContext, useContext, useState, useEffect } from "react";

// Create Context
const LanguageContext = createContext();

// Language Provider Component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("id"); // default bahasa Indonesia

  // Load language preference from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    } else {
      // Kalau belum ada di localStorage, set default ke Indonesia
      setLanguage("id");
      localStorage.setItem("language", "id");
    }
  }, []);

  // Function to change language
  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  // Function to toggle between languages
  const toggleLanguage = () => {
    const newLang = language === "id" ? "en" : "id";
    changeLanguage(newLang);
  };

  const value = {
    language,
    changeLanguage,
    toggleLanguage,
    isIndonesian: language === "id",
    isEnglish: language === "en",
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom Hook to use Language Context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};

export default LanguageContext;
