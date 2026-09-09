import type { Metadata } from "next";
import Link from "next/link";
import { FulltimeCvDownloads } from "@/components/fulltime-cv-downloads";
import { LanguageSwitch } from "@/components/language-switch";
import { Logo } from "@/components/logo";
import { isToolsAuthenticated, isToolsPasswordConfigured } from "@/lib/tools-auth";
import { lockTools } from "./actions";
import { ToolsLoginForm } from "./login-form";

export const metadata: Metadata = {
  title: "CV — pełny etat",
  description: "Prywatne narzędzie do pobrania CV na pełny etat.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default async function ToolsPage() {
  const unlocked = await isToolsAuthenticated();
  const passwordConfigured = isToolsPasswordConfigured();

  return (
    <div className="min-h-full bg-[#0a0a0a]">
      <header className="border-b border-zinc-900">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-5 sm:px-8">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-3 text-lg font-bold text-zinc-50 transition-colors hover:text-violet-300"
          >
            <Logo />
            <span className="truncate">Paweł Jadach</span>
          </Link>
          <LanguageSwitch />
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-24">
        <p className="text-sm font-medium tracking-wide text-violet-300/90 uppercase">
          Tylko dla Ciebie
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl">
          CV na pełny etat
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-zinc-400">
          PDF bez B2B i 10–20h. Ta strona nie jest w nawigacji i nie powinna
          pojawiać się w wyszukiwarkach.
        </p>

        <div className="mt-10 rounded-xl border border-zinc-800 bg-zinc-950 p-8">
          {unlocked ? (
            <div className="space-y-6">
              <FulltimeCvDownloads />
              {passwordConfigured ? (
                <form action={lockTools}>
                  <button
                    type="submit"
                    className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
                  >
                    Zablokuj ponownie
                  </button>
                </form>
              ) : null}
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-zinc-400">Podaj hasło, żeby pobrać PDF-y.</p>
              <ToolsLoginForm />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
