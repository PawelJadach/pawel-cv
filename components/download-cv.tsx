"use client";

import { useEffect, useRef, useState } from "react";
import { DownloadIcon } from "./icons";
import { useLanguage } from "./language-provider";
import { cvPdfFilename, type Locale } from "@/lib/cv";

const ghostClass =
  "inline-flex items-center justify-center border border-violet-900/70 bg-transparent px-8 py-3 text-base font-semibold tracking-wide text-slate-100 transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#201034] disabled:opacity-60 sm:text-lg";

export function DownloadCv() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [pending, setPending] = useState<Locale | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  async function download(locale: Locale) {
    setPending(locale);
    try {
      const response = await fetch(`/api/cv/${locale}`);
      if (!response.ok) throw new Error("PDF download failed");
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = cvPdfFilename(locale);
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
      setOpen(false);
    } finally {
      setPending(null);
    }
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        className={ghostClass}
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((value) => !value)}
      >
        {t.hero.download}
        <DownloadIcon />
      </button>
      {open ? (
        <div
          role="menu"
          className="animate-menu-in absolute top-full left-1/2 z-20 mt-2 w-56 -translate-x-1/2 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 py-1 shadow-xl shadow-black/50"
        >
          <button
            type="button"
            role="menuitem"
            className="block w-full px-4 py-2.5 text-left text-sm text-zinc-200 transition-colors hover:bg-violet-950 hover:text-white disabled:opacity-50"
            disabled={pending !== null}
            onClick={() => void download("pl")}
          >
            {pending === "pl" ? "…" : t.hero.downloadPl}
          </button>
          <button
            type="button"
            role="menuitem"
            className="block w-full px-4 py-2.5 text-left text-sm text-zinc-200 transition-colors hover:bg-violet-950 hover:text-white disabled:opacity-50"
            disabled={pending !== null}
            onClick={() => void download("en")}
          >
            {pending === "en" ? "…" : t.hero.downloadEn}
          </button>
        </div>
      ) : null}
    </div>
  );
}
