import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const leadSchema = z.object({
  ime: z.string().min(2),
  email: z.string().email(),
  tipFirme: z.string().min(1),
});

async function addToMailerLite(data: { ime: string; email: string; tipFirme: string }) {
  const apiKey = process.env.MAILERLITE_API_KEY;
  if (!apiKey) {
    console.log("📬 MailerLite (no API key):", data);
    return;
  }

  const [firstName, ...lastNameParts] = data.ime.trim().split(" ");
  const lastName = lastNameParts.join(" ") || "";

  const payload = {
    email: data.email,
    fields: {
      name: data.ime,
      last_name: lastName,
      city: data.tipFirme,
    },
    groups: [] as string[],
    status: "active",
  };

  // Add to MailerLite group if configured
  const groupId = process.env.MAILERLITE_VODIC_GROUP_ID;
  if (groupId) {
    payload.groups = [groupId];
  }

  const res = await fetch("https://connect.mailerlite.com/api/subscribers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("MailerLite error:", res.status, text);
    throw new Error(`MailerLite API error: ${res.status}`);
  }

  // After subscriber is created/updated, add the tag
  const subscriber = await res.json();
  const subscriberId = subscriber.data?.id;
  if (subscriberId) {
    await fetch(`https://connect.mailerlite.com/api/subscribers/${subscriberId}/tags`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ tags: ["lead-magnet-vodic"] }),
    }).catch((err) => console.error("Tag error:", err));
  }
}

async function notifyViaEmail(data: { ime: string; email: string; tipFirme: string }) {
  const smtpPass = process.env.ZOHO_SMTP_PASS;
  if (!smtpPass) return;

  const nodemailer = await import("nodemailer");
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true,
    auth: { user: "info@ens.ba", pass: smtpPass },
  });

  await transporter.sendMail({
    from: '"ENS Lead Magnet" <info@ens.ba>',
    to: "info@ens.ba",
    subject: `Novi lead — Vodič za poreznu prijavu 2026`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9fafb; border-radius: 8px;">
        <div style="background: #c0392b; padding: 20px 24px; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 18px;">Novi lead — /vodic Lead Magnet</h1>
        </div>
        <div style="background: white; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px; width: 130px;">Ime i prezime</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #111827;">${data.ime}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">
                <a href="mailto:${data.email}" style="color: #c0392b;">${data.email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6b7280; font-size: 13px;">Tip firme</td>
              <td style="padding: 10px 0; color: #111827;">${data.tipFirme}</td>
            </tr>
          </table>
          <p style="margin-top: 20px; font-size: 12px; color: #9ca3af;">
            Lead primljen: ${new Date().toLocaleString("bs-BA", { timeZone: "Europe/Sarajevo", dateStyle: "full", timeStyle: "short" })}
          </p>
          <p style="font-size: 12px; color: #9ca3af;">Tag: lead-magnet-vodic</p>
        </div>
      </div>
    `,
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = leadSchema.parse(body);

    await Promise.all([
      addToMailerLite(data).catch((err) => console.error("MailerLite failed:", err)),
      notifyViaEmail(data).catch((err) => console.error("Email notify failed:", err)),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead magnet form error:", error);
    return NextResponse.json({ error: "Greška pri obradi zahtjeva." }, { status: 400 });
  }
}
