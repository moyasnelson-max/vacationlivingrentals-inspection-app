"use client";
import { useState } from "react";

export default function LanguageToggle() {
  const [lang, setLang] = useState("en");

  return (
    <button
      className="lang-toggle"
      onClick={() => {
        document.cookie = `lang=${lang === "en" ? "es" : "en"}`;
        location.reload();
      }}
    >
      {lang === "en" ? "ES" : "EN"}
    </button>
  );
}
