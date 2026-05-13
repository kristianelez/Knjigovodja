import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  ime: z.string().min(2),
  email: z.string().email(),
  telefon: z.string().min(6),
  poruka: z.string().min(10),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    if (process.env.ZOHO_SMTP_PASS) {
      const nodemailer = await import("nodemailer");

      const transporter = nodemailer.createTransport({
        host: "smtp.zoho.com",
        port: 465,
        secure: true,
        auth: {
          user: "info@ens.ba",
          pass: process.env.ZOHO_SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: '"ENS Web Forma" <info@ens.ba>',
        to: "info@ens.ba",
        replyTo: data.email,
        subject: `Novi upit od ${data.ime} — ENS.ba`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9fafb; border-radius: 8px;">
            <div style="background: #c0392b; padding: 20px 24px; border-radius: 8px 8px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 20px;">Novi upit s ENS web stranice</h1>
            </div>
            <div style="background: white; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px; width: 130px;">Ime / Firma</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #111827;">${data.ime}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px;">Email</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">
                    <a href="mailto:${data.email}" style="color: #c0392b;">${data.email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px;">Telefon</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">
                    <a href="tel:${data.telefon}" style="color: #c0392b;">${data.telefon}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 16px 0 6px 0; color: #6b7280; font-size: 13px; vertical-align: top;">Poruka</td>
                  <td style="padding: 16px 0 6px 0; color: #111827; line-height: 1.6;">${data.poruka.replace(/\n/g, "<br>")}</td>
                </tr>
              </table>
              <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #f3f4f6;">
                <a href="mailto:${data.email}?subject=RE: Vaš upit na ENS.ba"
                   style="display: inline-block; background: #c0392b; color: white; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-size: 14px; font-weight: 600;">
                  Odgovori na upit
                </a>
              </div>
              <p style="margin-top: 20px; font-size: 12px; color: #9ca3af;">
                Upit primljen: ${new Date().toLocaleString("bs-BA", { timeZone: "Europe/Sarajevo", dateStyle: "full", timeStyle: "short" })}
              </p>
            </div>
          </div>
        `,
      });
    } else {
      console.log("📬 Kontakt forma (no SMTP config):", data);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Greška pri slanju poruke." }, { status: 400 });
  }
}
