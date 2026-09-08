"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { content, type Locale } from "@/lib/cv";

const STORAGE_KEY = "cv-locale";
const listeners = new Set<() => void>();
let currentLocale: Locale = "pl";
let didReadStorage = false;

function emit() {
  listeners.forEach((listener) => listener());
}

function readStoredLocale(): Locale {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "pl" || stored === "en") return stored;
    return "pl";
  } catch {
    return "pl";
  }
}

function getClientSnapshot(): Locale {
  if (!didReadStorage) {
    currentLocale = readStoredLocale();
    didReadStorage = true;
  }
  return currentLocale;
}

function getServerSnapshot(): Locale {
  return "pl";
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (typeof content)["pl"];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);

  const setLocale = useCallback((next: Locale) => {
    currentLocale = next;
    didReadStorage = true;
    window.localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next;
    emit();
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: content[locale],
    }),
    [locale, setLocale],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
