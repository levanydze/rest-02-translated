"use client";
import { useEffect, useState } from "react";
import { parseCookies, setCookie } from "nookies";
import Flag from "react-world-flags"; // Import flag icons
import styles from "./LanguageSwitcher.module.css"; // Import the styles for this component

// The Google Translate-related cookie name
const COOKIE_NAME = "googtrans";

// Define the structure for the language descriptor
interface LanguageDescriptor {
  name: string;
  title: string;
}

// Types for JS-based declarations in public/assets/scripts/lang-config.js
declare global {
  namespace globalThis {
    var __GOOGLE_TRANSLATION_CONFIG__: {
      languages: LanguageDescriptor[];
      defaultLanguage: string;
    };
  }
}

const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState<string>();
  const [languageConfig, setLanguageConfig] = useState<any>();
  const [flagShow, setFlagShow] = useState<boolean>(false);

  const languageFlags: { [key: string]: string } = {
    en: "GB", // Example flag code for English
    fr: "FR", // Example flag code for French
    de: "DE", // Example flag code for German
    es: "ES", // Example flag code for Spanish
  };

  const supportedLanguages = ["en", "fr", "de", "es"];

  // Initialize translation engine and set the cookie values
  useEffect(() => {
    const cookies = parseCookies();
    const existingLanguageCookieValue = cookies[COOKIE_NAME];

    let languageValue;
    if (existingLanguageCookieValue) {
      const sp = existingLanguageCookieValue.split("/");
      if (sp.length > 2) {
        languageValue = sp[2];
      }
    }
    if (global.__GOOGLE_TRANSLATION_CONFIG__ && !languageValue) {
      languageValue = global.__GOOGLE_TRANSLATION_CONFIG__.defaultLanguage;
    }
    if (languageValue) {
      setCurrentLanguage(languageValue);
    }
    if (global.__GOOGLE_TRANSLATION_CONFIG__) {
      setLanguageConfig(global.__GOOGLE_TRANSLATION_CONFIG__);
    }
  }, []);

  // Toggle the flag dropdown
  const flagToggler = () => setFlagShow(!flagShow);

  // Handle language switch and set cookies
  const switchLanguage = (lang: string) => () => {
    setCookie(null, COOKIE_NAME, "/auto/" + lang, { path: "/" });
    window.location.reload();
  };

  // Handle language change from dropdown
  const handleLanguageChange = (lang: string) => {
    switchLanguage(lang)();
  };

  if (!currentLanguage || !languageConfig) {
    return null;
  }

  return (
    <div className={styles.languageSwitcher}>
      <button className={styles.currentLang} onClick={flagToggler}>
        <Flag
          className={styles.flags}
          code={languageFlags[currentLanguage]} // Current language flag
        />
      </button>
      <ul
        className={`${flagShow ? styles.open : styles.closed} ${
          styles.languageDropdown
        }`}
      >
        {supportedLanguages.map((supportedLang) => (
          <li key={supportedLang}>
            <button onClick={() => handleLanguageChange(supportedLang)}>
              <Flag
                className={styles.flags}
                code={languageFlags[supportedLang]} // Show flags in dropdown
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { LanguageSwitcher, COOKIE_NAME };
