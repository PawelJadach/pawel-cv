"use client";

import { useActionState } from "react";
import { unlockTools } from "./actions";

const fieldClass =
  "w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-slate-100 outline-none transition-colors placeholder:text-zinc-600 focus:border-violet-500";

export function ToolsLoginForm() {
  const [state, action, pending] = useActionState(unlockTools, null);

  return (
    <form action={action} className="space-y-4">
      <label className="block space-y-2">
        <span className="text-sm font-medium text-zinc-400">Hasło</span>
        <input
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className={fieldClass}
        />
      </label>
      {state?.error ? <p className="text-sm text-red-400">{state.error}</p> : null}
      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-full items-center justify-center rounded-lg border border-violet-900/70 bg-[#201034] px-8 py-3 text-base font-semibold tracking-wide text-slate-100 transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#30164f] disabled:opacity-60"
      >
        {pending ? "…" : "Odblokuj"}
      </button>
    </form>
  );
}
