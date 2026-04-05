import type { ContactFormInput } from "@/server/validation/contact.schema";

const ZEPTO_API_URL = "https://api.zeptomail.in/v1.1/email";

// ─── Core send function ───────────────────────────────────────────────────────

async function sendEmail(
  to: string,
  subject: string,
  html: string
): Promise<void> {
  const response = await fetch(ZEPTO_API_URL, {
    method: "POST",
    headers: {
      "accept":        "application/json",
      "content-type":  "application/json",
      "authorization": process.env.ZEPTO_API_KEY!,
    },
    body: JSON.stringify({
      from: {
        address: process.env.ZEPTO_FROM_EMAIL!,
        name:    "Ajay Sonkar",
      },
      to: [{ email_address: { address: to } }],
      subject,
      htmlbody: html,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`Zepto API error: ${JSON.stringify(error)}`);
  }
}

// ─── Email Templates ──────────────────────────────────────────────────────────

function buildLeadNotificationHtml(data: ContactFormInput): string {
  const tierLabels: Record<string, string> = {
    starter: "₹3,000 / mo — Starter",
    core:    "₹7,000 / mo — Core",
    growth:  "₹15,000 / mo — Growth",
    custom:  "Custom / One-time",
  };

  const tier = tierLabels[data.serviceTier ?? "core"];
  const location = [data.city, data.state, data.country]
    .filter(Boolean)
    .join(", ");

  return `
  <!DOCTYPE html>
  <html>
  <head><meta charset="utf-8"></head>
  <body style="margin:0;padding:0;background:#f4f4f5;font-family:Arial,sans-serif">
    <div style="max-width:560px;margin:32px auto;background:#fff;border-radius:8px;overflow:hidden;border:1px solid #e4e4e7">

      <div style="background:#080c14;padding:24px 32px">
        <span style="color:#00d4ff;font-size:16px;font-weight:700">🔵 New Lead — ajaysonkar.com</span>
      </div>

      <div style="padding:14px 32px;background:#f8fafc;border-bottom:1px solid #e4e4e7">
        <span style="background:#e0f9ff;color:#0891b2;border-radius:20px;padding:3px 12px;font-size:12px;font-weight:500">${tier}</span>
        &nbsp;
        <span style="background:#fef3c7;color:#d97706;border-radius:20px;padding:3px 12px;font-size:12px;font-weight:500">${data.serviceType || "General Inquiry"}</span>
      </div>

      <div style="padding:24px 32px">
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          <tr>
            <td style="padding:8px 0;color:#71717a;width:120px">Name</td>
            <td style="padding:8px 0;color:#18181b;font-weight:600">${data.name}</td>
          </tr>
          <tr style="border-top:1px solid #f4f4f5">
            <td style="padding:8px 0;color:#71717a">Email</td>
            <td style="padding:8px 0;color:#18181b">${data.email}</td>
          </tr>
          <tr style="border-top:1px solid #f4f4f5">
            <td style="padding:8px 0;color:#71717a">Phone</td>
            <td style="padding:8px 0;color:#18181b">${data.phone || "—"}</td>
          </tr>
          <tr style="border-top:1px solid #f4f4f5">
            <td style="padding:8px 0;color:#71717a">Location</td>
            <td style="padding:8px 0;color:#18181b">${location || "—"}</td>
          </tr>
          <tr style="border-top:1px solid #f4f4f5">
            <td style="padding:8px 0;color:#71717a">Plan</td>
            <td style="padding:8px 0;color:#0891b2;font-weight:600">${tier}</td>
          </tr>
          <tr style="border-top:1px solid #f4f4f5">
            <td style="padding:8px 0;color:#71717a">Service</td>
            <td style="padding:8px 0;color:#18181b">${data.serviceType || "—"}</td>
          </tr>
        </table>

        <div style="margin-top:20px;padding:16px;background:#f8fafc;border-radius:6px;border-left:3px solid #00d4ff">
          <div style="font-size:11px;color:#71717a;font-weight:600;margin-bottom:8px;text-transform:uppercase;letter-spacing:0.05em">Project Details</div>
          <div style="font-size:14px;color:#18181b;line-height:1.7">${data.projectOutline}</div>
        </div>

        <div style="margin-top:24px;text-align:center">
          <a href="mailto:${data.email}"
            style="background:#00d4ff;color:#080c14;text-decoration:none;padding:12px 28px;border-radius:8px;font-weight:700;font-size:14px;display:inline-block">
            Reply to ${data.name} →
          </a>
        </div>
      </div>

      <div style="padding:14px 32px;background:#f8fafc;border-top:1px solid #e4e4e7;font-size:12px;color:#a1a1aa;text-align:center">
        Sent from ajaysonkar.com
      </div>
    </div>
  </body>
  </html>`;
}

function buildAutoReplyHtml(name: string): string {
  return `
  <!DOCTYPE html>
  <html>
  <head><meta charset="utf-8"></head>
  <body style="margin:0;padding:0;background:#f4f4f5;font-family:Arial,sans-serif">
    <div style="max-width:520px;margin:32px auto;background:#fff;border-radius:8px;overflow:hidden;border:1px solid #e4e4e7">

      <div style="background:#080c14;padding:24px 32px">
        <div style="color:#00d4ff;font-size:22px;font-weight:700;font-family:Georgia,serif">Ajay Sonkar</div>
        <div style="color:#64748b;font-size:13px;margin-top:4px">Freelance Developer · Raipur, CG</div>
      </div>

      <div style="padding:28px 32px;font-size:15px;color:#18181b;line-height:1.8">
        <p>Hi <strong>${name}</strong>,</p>

        <p>I specialize in building fast, high-converting websites for businesses and startups.</p>

        <p>Thanks for reaching out! I've received your inquiry and will get back to you <strong>within 24 hours</strong> with a clear plan.</p>

        <p>For faster communication, you can message me directly on WhatsApp:</p>

        <div style="margin:20px 0;text-align:center">
          <a href="https://wa.me/918319928445?text=Hi%20Ajay,%20I%20need%20a%20website"
             style="background:#25D366;color:#ffffff;text-decoration:none;padding:12px 20px;border-radius:6px;font-weight:600;display:inline-block;font-size:14px">
            Chat on WhatsApp (+91 83199 28445)
          </a>
        </div>

        <p style="margin-top:24px">Talk soon,<br><strong>Ajay Sonkar</strong><br>
        <span style="color:#64748b;font-size:13px">hello@ajaysonkar.com · ajaysonkar.com</span></p>
      </div>

      <div style="padding:14px 32px;background:#f8fafc;border-top:1px solid #e4e4e7;font-size:12px;color:#a1a1aa;text-align:center">
        ajaysonkar.com · Raipur, Chhattisgarh, India
      </div>
    </div>
  </body>
  </html>`;
}

// ─── Exported send functions ──────────────────────────────────────────────────

/**
 * Notify Ajay when a new lead comes in.
 */
export async function sendLeadNotification(
  data: ContactFormInput
): Promise<void> {
  await sendEmail(
    process.env.NOTIFY_EMAIL!,
    `🔵 New Lead: ${data.name} — ${(data.serviceTier ?? "core").toUpperCase()} plan`,
    buildLeadNotificationHtml(data)
  );
}

/**
 * Send auto-reply to the client confirming receipt.
 */
export async function sendAutoReply(data: ContactFormInput): Promise<void> {
  await sendEmail(
    data.email,
    `Got your message ${data.name}! I'll reply within 24 hours`,
    buildAutoReplyHtml(data.name)
  );
}