import { leadRepository } from "@/server/repositories/lead.repository";
import { sendLeadNotification, sendAutoReply } from "@/server/email/mailer";
import type { ContactFormInput } from "../validation/contact.schema";

// ─── Lead Service ─────────────────────────────────────────────────────────────

export const leadService = {
  /**
   * Process a new inbound lead from the contact form.
   * 1. Save lead to database
   * 2. Notify Ajay via email
   * 3. Send auto-reply to client
   */
  async createLead(data: ContactFormInput) {
    const location = [data.city, data.state, data.country]
      .filter(Boolean)
      .join(", ");

    // 1 — Save to DB
    const lead = await leadRepository.create({
      name:           data.name,
      email:          data.email,
      phone:          data.phone ?? null,
      country:        data.country,
      budgetRange:    data.serviceTier,
      projectOutline: `[${data.serviceType ?? "General"}] [${location}]\n\n${data.projectOutline}`,
      status:         "new",
    });

    // 2 & 3 — Fire both emails in parallel
    // Promise.allSettled means email failure never blocks lead capture
    await Promise.allSettled([
      sendLeadNotification(data),
      sendAutoReply(data),
    ]);

    return lead;
  },
};