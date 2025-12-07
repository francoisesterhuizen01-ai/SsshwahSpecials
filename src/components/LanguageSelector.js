import React from "react";

function LanguageSelector({ currentLanguage, onLanguageChange }) {
  return (
    <div className="language-selector">
      <button
        className={currentLanguage === "en" ? "active" : ""}
        onClick={() => onLanguageChange("en")}
      >
        English
      </button>
      <button
        className={currentLanguage === "zh_hk" ? "active" : ""}
        onClick={() => onLanguageChange("zh_hk")}
      >
        繁體中文
      </button>
      <button
        className={currentLanguage === "zh_cn" ? "active" : ""}
        onClick={() => onLanguageChange("zh_cn")}
      >
        简体中文
      </button>
    </div>
  );
}

export default LanguageSelector;
