import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/server/validation/contact.schema";
import { leadService } from "@/server/services/lead.service";
import { contactRatelimit, getClientIp } from "@/server/redis/ratelimit";

// ─── POST /api/contact ────────────────────────────────────────────────────────
// Flow: parse → validate → rate limit → save lead → send emails → respond

export async function POST(request: NextRequest) {
  try {
    // 1 — Parse body
    const body = await request.json();

    // 2 — Validate with Zod
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Please check your form inputs.",
          errors:  parsed.error.flatten().fieldErrors,
        },
        { status: 422 }
      );
    }

    // 3 — Rate limit (5 requests per IP per minute)
    const ip = getClientIp(request);
    const { success: allowed, remaining } = await contactRatelimit.limit(ip);

    if (!allowed) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many requests. Please wait a minute and try again.",
        },
        {
          status:  429,
          headers: { "Retry-After": "60" },
        }
      );
    }

    // 4 — Save lead + send emails
    const lead = await leadService.createLead(parsed.data);

    // 5 — Success response
    return NextResponse.json(
      {
        success: true,
        message: "Thanks! I'll get back to you within 24 hours.",
        leadId:  lead.id,
      },
      {
        status:  201,
        headers: { "X-RateLimit-Remaining": String(remaining) },
      }
    );

  } catch (error) {
    console.error("[/api/contact] Unexpected error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try WhatsApp or email instead.",
      },
      { status: 500 }
    );
  }
}

// Block all non-POST methods
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}