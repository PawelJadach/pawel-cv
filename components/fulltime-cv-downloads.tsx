"use client";

import { useState } from "react";
import { cvPdfFilename, type Locale } from "@/lib/cv";
import { DownloadIcon } from "./icons";
import { useLanguage } from "./language-provider";

const buttonClass =
  "inline-flex w-full items-center justify-center border border-violet-900/70 bg-[#201034] px-8 py-3 text-base font-semibold tracking-wide text-slate-100 transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#30164f] disabled:opacity-60 sm:text-lg";

export function FulltimeCvDownloads() {
  const { t } = useLanguage();
  const [pending, setPending] = useState<Locale | null>(null);

  async function download(locale: Locale) {
    setPending(locale);
    try {
      const response = await fetch(`/api/cv/${locale}?variant=fulltime`);
      if (!response.ok) throw new Error("PDF download failed");
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = cvPdfFilename(locale, "fullTime");
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } finally {
      setPending(null);
    }
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <button
        type="button"
        className={buttonClass}
        disabled={pending !== null}
        onClick={() => void download("pl")}
      >
        {pending === "pl" ? "…" : t.hero.downloadPl}
        <DownloadIcon />
      </button>
      <button
        type="button"
        className={buttonClass}
        disabled={pending !== null}
        onClick={() => void download("en")}
      >
        {pending === "en" ? "…" : t.hero.downloadEn}
        <DownloadIcon />
      </button>
    </div>
  );
}
