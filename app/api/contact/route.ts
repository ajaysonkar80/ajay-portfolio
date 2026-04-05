import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/server/validation/contact.schema";
import { leadService } from "@/server/services/lead.service";
import { contactRatelimit, getClientIp } from "@/server/redis/ratelimit";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // 1 — Validate with Zod
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

    // 2 — Rate limit (5 per IP per minute)
    const ip = getClientIp(request);
    const { success: allowed, remaining } = await contactRatelimit.limit(ip);

    if (!allowed) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many requests. Please wait a minute and try again.",
        },
        { status: 429, headers: { "Retry-After": "60" } }
      );
    }

    // 3 — Save to DB + send notification + send auto-reply
    const lead = await leadService.createLead(parsed.data);

    return NextResponse.json(
      {
        success: true,
        message: "Thanks! I'll get back to you within 24 hours. Check your email for confirmation.",
        leadId:  lead.id,
      },
      { status: 201, headers: { "X-RateLimit-Remaining": String(remaining) } }
    );

  } catch (error) {
    console.error("[POST /api/contact]", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please reach out via WhatsApp or email instead.",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}