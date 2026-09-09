import { renderToBuffer } from "@react-pdf/renderer";
import { NextResponse } from "next/server";
import { CvDocument } from "@/lib/cv-document";
import { cvPdfFilename, parseCvVariant, type Locale } from "@/lib/cv";
import { isToolsAuthenticated } from "@/lib/tools-auth";

export const runtime = "nodejs";

function isLocale(value: string): value is Locale {
  return value === "pl" || value === "en";
}

export async function GET(
  request: Request,
  context: { params: Promise<{ locale: string }> },
) {
  const { locale } = await context.params;
  if (!isLocale(locale)) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const variant = parseCvVariant(new URL(request.url).searchParams.get("variant"));
  if (variant === "fullTime" && !(await isToolsAuthenticated())) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const pdf = await renderToBuffer(<CvDocument locale={locale} variant={variant} />);
  const filename = cvPdfFilename(locale, variant);

  return new NextResponse(new Uint8Array(pdf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "no-store",
    },
  });
}
