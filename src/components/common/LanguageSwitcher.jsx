// src/components/common/LanguageSwitcher.jsx
import React from "react";
import { useLanguage } from "@/src/context/LanguageContext";

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="language-switcher">
      <button
        onClick={() => changeLanguage("id")}
        className={`lang-btn ${language === "id" ? "active" : ""}`}
        aria-label="Switch to Indonesian"
        title="Indonesia"
      >
        🇮🇩
      </button>
      <span className="separator">|</span>
      <button
        onClick={() => changeLanguage("en")}
        className={`lang-btn ${language === "en" ? "active" : ""}`}
        aria-label="Switch to English"
        title="English"
      >
        🇬🇧
      </button>

      <style jsx>{`
        .language-switcher {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .lang-btn {
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          padding: 4px 8px;
          transition: all 0.3s ease;
          opacity: 0.5;
          filter: grayscale(100%);
        }

        .lang-btn:hover {
          opacity: 0.8;
          filter: grayscale(50%);
          transform: scale(1.1);
        }

        .lang-btn.active {
          opacity: 1;
          filter: grayscale(0%);
        }

        .separator {
          color: #999;
          font-size: 14px;
        }
      `}</style>
    </div>
  );
};

export default LanguageSwitcher;
