"use client";

import { useLanguage } from "./language-provider";

export function LanguageSwitch() {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className="flex rounded-lg border border-zinc-800 bg-zinc-900 p-0.5"
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        className={`min-w-9 rounded-md px-2 py-1 text-xs font-semibold tracking-wide transition-colors ${
          locale === "pl"
            ? "bg-violet-700 text-white"
            : "text-zinc-400 hover:text-zinc-50"
        }`}
        aria-pressed={locale === "pl"}
        onClick={() => setLocale("pl")}
      >
        PL
      </button>
      <button
        type="button"
        className={`min-w-9 rounded-md px-2 py-1 text-xs font-semibold tracking-wide transition-colors ${
          locale === "en"
            ? "bg-violet-700 text-white"
            : "text-zinc-400 hover:text-zinc-50"
        }`}
        aria-pressed={locale === "en"}
        onClick={() => setLocale("en")}
      >
        EN
      </button>
    </div>
  );
}
