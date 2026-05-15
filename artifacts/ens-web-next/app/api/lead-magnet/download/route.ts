import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

// Protected PDF download — served only through this API route, not publicly indexed.
// The download link is only shown on the /vodic/hvala thank-you page after form submission.
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");

  const validToken = process.env.VODIC_DOWNLOAD_TOKEN || "ens-vodic-2026";
  if (token !== validToken) {
    return NextResponse.json({ error: "Invalid token" }, { status: 403 });
  }

  try {
    const pdfPath = path.join(process.cwd(), "public", "vodici", "vodic-porezna-prijava-2026.pdf");
    const file = await readFile(pdfPath);

    return new NextResponse(file, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="ENS-Vodic-Porezna-Prijava-2026.pdf"',
        "Cache-Control": "no-store",
        "X-Robots-Tag": "noindex",
      },
    });
  } catch {
    // PDF not yet uploaded — return friendly error
    return NextResponse.json(
      { error: "PDF vodič će biti dostupan uskoro. Kontaktirajte nas na info@ens.ba." },
      { status: 404 }
    );
  }
}
