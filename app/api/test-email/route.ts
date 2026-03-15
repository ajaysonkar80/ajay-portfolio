import { NextRequest, NextResponse } from "next/server";
import { sendLeadNotification, sendAutoReply } from "@/server/email/mailer";

export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}

export async function POST(request: NextRequest) {
  // 🔒 Dev only
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  // 🔒 Require secret key
  const body = await request.json();
  if (body.key !== process.env.TEST_SECRET_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const results = { notification: "", autoReply: "" };

  const testData = {
    name:           "Test User",
    email:          "hello@ajaysonkar.com",
    phone:          "9876543210",
    country:        "India",
    state:          "Chhattisgarh",
    city:           "Raipur",
    serviceTier:    "core" as const,
    serviceType:    "Web Development",
    budgetRange:    "",
    projectOutline: "This is a test lead to verify Zepto Mail is working correctly.",
  };

  try {
    await sendLeadNotification(testData);
    results.notification = "✅ sent";
  } catch (error) {
    console.error("[test-email] Notification failed:", error);
    results.notification = `❌ ${error instanceof Error ? error.message : "failed"}`;
  }

  try {
    await sendAutoReply(testData);
    results.autoReply = "✅ sent";
  } catch (error) {
    console.error("[test-email] Auto-reply failed:", error);
    results.autoReply = `❌ ${error instanceof Error ? error.message : "failed"}`;
  }

  return NextResponse.json(results);
}