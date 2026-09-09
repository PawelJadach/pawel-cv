"use server";

import { redirect } from "next/navigation";
import {
  clearToolsSession,
  isValidToolsPassword,
  setToolsSession,
} from "@/lib/tools-auth";

export async function unlockTools(
  _prevState: { error: string } | null,
  formData: FormData,
): Promise<{ error: string } | null> {
  const password = String(formData.get("password") ?? "");
  if (!isValidToolsPassword(password)) {
    return { error: "Nieprawidłowe hasło" };
  }

  await setToolsSession();
  redirect("/tools");
}

export async function lockTools() {
  await clearToolsSession();
  redirect("/tools");
}
