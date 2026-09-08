"use client";

import { useState } from "react";
import { Logo } from "./logo";
import { LanguageSwitch } from "./language-switch";
import { useLanguage } from "./language-provider";

export function Nav() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#experience", label: t.nav.experience },
    { href: "#projects", label: t.nav.projects },
    { href: "#skills", label: t.nav.skills },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <nav className="sticky top-0 left-0 right-0 z-40 bg-zinc-950/95 backdrop-blur-sm shadow-md print:hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex h-16 items-center justify-between gap-4 lg:h-20">
          <a
            href="#top"
            className="flex min-w-0 items-center gap-3 text-xl font-bold text-zinc-50 transition-colors hover:text-violet-300"
          >
            <Logo />
            <span className="truncate">Pawel Jadach</span>
          </a>

          <div className="hidden items-center gap-5 xl:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-sm font-medium text-zinc-300 transition-colors hover:text-violet-300"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-violet-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <LanguageSwitch />
          </div>

          <div className="flex items-center gap-3 xl:hidden">
            <LanguageSwitch />
            <button
              type="button"
              className="shrink-0 rounded-lg bg-zinc-800 p-2 transition-colors hover:bg-zinc-700"
              aria-label={open ? t.nav.close : t.nav.menu}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? (
                <svg className="h-6 w-6 text-zinc-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6 text-zinc-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {open ? (
          <div className="flex flex-col gap-2 pb-4 xl:hidden">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-violet-300"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </nav>
  );
}
