"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { dictionaries, defaultLocale, type Dictionary, type Locale } from "./dictionaries";

type I18nContextValue = {
  locale: Locale;
  t: Dictionary;
  setLocale: (l: Locale) => void;
  toggleLocale: () => void;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    if (typeof document !== "undefined") document.documentElement.lang = l;
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === "ru" ? "en" : "ru");
  }, [locale, setLocale]);

  return (
    <I18nContext.Provider
      value={{ locale, t: dictionaries[locale], setLocale, toggleLocale }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
