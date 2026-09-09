import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const TOOLS_COOKIE = "cv-tools";

function configuredPassword() {
  return process.env.TOOLS_PASSWORD?.trim() ?? "";
}

export function isToolsPasswordConfigured() {
  return configuredPassword().length > 0;
}

function sessionToken(password: string) {
  return createHmac("sha256", password).update("fulltime-cv-tools").digest("hex");
}

function safeEqual(left: string, right: string) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);
  if (leftBuffer.length !== rightBuffer.length) return false;
  return timingSafeEqual(leftBuffer, rightBuffer);
}

export function isValidToolsPassword(password: string) {
  const expected = configuredPassword();
  if (!expected) return false;
  return safeEqual(password, expected);
}

export async function isToolsAuthenticated() {
  if (!isToolsPasswordConfigured()) return true;

  const cookieStore = await cookies();
  const value = cookieStore.get(TOOLS_COOKIE)?.value;
  if (!value) return false;

  return safeEqual(value, sessionToken(configuredPassword()));
}

export async function setToolsSession() {
  const password = configuredPassword();
  if (!password) return;

  const cookieStore = await cookies();
  cookieStore.set(TOOLS_COOKIE, sessionToken(password), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 90,
  });
}

export async function clearToolsSession() {
  const cookieStore = await cookies();
  cookieStore.delete(TOOLS_COOKIE);
}
