import { renderToBuffer } from "@react-pdf/renderer";
import { NextResponse } from "next/server";
import { CvDocument } from "@/lib/cv-document";
import type { Locale } from "@/lib/cv";

export const runtime = "nodejs";

function isLocale(value: string): value is Locale {
  return value === "pl" || value === "en";
}

export async function GET(
  _request: Request,
  context: { params: Promise<{ locale: string }> },
) {
  const { locale } = await context.params;
  if (!isLocale(locale)) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const pdf = await renderToBuffer(<CvDocument locale={locale} />);
  const filename = `Pawel-Jadach-CV-${locale.toUpperCase()}.pdf`;

  return new NextResponse(new Uint8Array(pdf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "no-store",
    },
  });
}
