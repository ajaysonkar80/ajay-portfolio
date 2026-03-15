import { sendLeadNotification, sendAutoReply } from "@/server/email/mailer";

export default async function TestEmailPage() {
  let notificationStatus = "";
  let autoReplyStatus = "";

  try {
    await sendLeadNotification({
      name:           "Test User",
      email:          "hello@ajaysonkar.com",
      phone:          "9876543210",
      country:        "India",
      state:          "Chhattisgarh",
      city:           "Raipur",
      serviceTier:    "core",
      serviceType:    "Web Development",
      budgetRange:    "",
      projectOutline: "This is a test lead to verify Zepto Mail is working correctly from noreply@ajaysonkar.com",
    });
    notificationStatus = "✅ Lead notification sent to hello@ajaysonkar.com";
  } catch (error) {
    notificationStatus = `❌ Notification failed: ${JSON.stringify(error)}`;
  }

  try {
    await sendAutoReply({
      name:           "Test User",
      email:          "hello@ajaysonkar.com",
      phone:          "9876543210",
      country:        "India",
      state:          "Chhattisgarh",
      city:           "Raipur",
      serviceTier:    "core",
      serviceType:    "Web Development",
      budgetRange:    "",
      projectOutline: "This is a test auto-reply",
    });
    autoReplyStatus = "✅ Auto-reply sent to hello@ajaysonkar.com";
  } catch (error) {
    autoReplyStatus = `❌ Auto-reply failed: ${JSON.stringify(error)}`;
  }

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "600px" }}>
      <h1>📧 Email Test Page</h1>
      <p style={{ color: "#64748b" }}>
        Tests sending from <strong>noreply@ajaysonkar.com</strong> via Zepto API
      </p>
      <hr style={{ margin: "20px 0" }} />

      <h2>Lead Notification</h2>
      <p>{notificationStatus}</p>

      <h2>Auto Reply</h2>
      <p>{autoReplyStatus}</p>

      <hr style={{ margin: "20px 0" }} />
      <p style={{ color: "#64748b", fontSize: "13px" }}>
        Check your <strong>hello@ajaysonkar.com</strong> inbox (forwards to your Gmail).
        <br />Both emails should arrive within 30 seconds.
      </p>
    </div>
  );
}