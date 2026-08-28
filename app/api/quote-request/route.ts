import { NextResponse } from "next/server";

const RECIPIENT_EMAIL = "randy@kiwicoatingsaz.com";
const RESEND_ENDPOINT = "https://api.resend.com/emails";

type QuoteRequestPayload = {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  service?: string;
  message?: string;
  honeypot?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let payload: QuoteRequestPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot: a hidden field real visitors never fill in. If it's populated, this is a bot.
  // Return a success-shaped response without sending anything, so the bot doesn't learn otherwise.
  if (payload.honeypot) {
    return NextResponse.json({ ok: true });
  }

  const name = (payload.name ?? "").trim();
  const email = (payload.email ?? "").trim();
  const phone = (payload.phone ?? "").trim();
  const address = (payload.address ?? "").trim();
  const service = (payload.service ?? "").trim();
  const message = (payload.message ?? "").trim();

  if (!name || !email) {
    return NextResponse.json({ ok: false, error: "Name and email are required." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: "Enter a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("quote-request: RESEND_API_KEY is not configured; cannot deliver quote request email.");
    return NextResponse.json(
      { ok: false, error: "Email delivery is not configured yet." },
      { status: 500 }
    );
  }

  const fromAddress = process.env.RESEND_FROM_EMAIL || "Kiwi Coatings Website <onboarding@resend.dev>";
  const submittedAt = new Date().toLocaleString("en-US", { timeZone: "America/Phoenix", dateStyle: "medium", timeStyle: "short" });

  const fields: Array<[string, string]> = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone || "Not provided"],
    ["Project Address", address || "Not provided"],
    ["Service Requested", service || "Not specified"],
    ["Project Notes", message || "None"],
    ["Submitted", `${submittedAt} (Arizona time)`],
    ["Source", "Kiwi Coatings Website"]
  ];

  const textBody = fields.map(([label, value]) => `${label}: ${value}`).join("\n");
  const htmlBody = `<div style="font-family:sans-serif;font-size:15px;line-height:1.6;color:#111;">
    <h2 style="margin:0 0 16px;">New Kiwi Coatings Website Quote Request</h2>
    <table cellpadding="0" cellspacing="0">
      ${fields
        .map(
          ([label, value]) =>
            `<tr><td style="padding:4px 12px 4px 0;font-weight:700;vertical-align:top;">${escapeHtml(label)}</td><td style="padding:4px 0;white-space:pre-wrap;">${escapeHtml(value)}</td></tr>`
        )
        .join("")}
    </table>
  </div>`;

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: fromAddress,
        to: [RECIPIENT_EMAIL],
        reply_to: email,
        subject: `New Kiwi Coatings Website Quote Request — ${name}`,
        text: textBody,
        html: htmlBody
      })
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => "");
      console.error("quote-request: Resend API rejected the email.", response.status, errorText);
      return NextResponse.json({ ok: false, error: "The email service rejected the request." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("quote-request: failed to reach email service.", error);
    return NextResponse.json({ ok: false, error: "Could not reach the email service." }, { status: 502 });
  }
}
