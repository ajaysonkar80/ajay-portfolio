// ✅ This is a Server Component — runs only on the server.
// Env vars WITHOUT "NEXT_PUBLIC_" prefix are never sent to the browser.
// Extra safety: blocked entirely in production.

import { Redis } from "@upstash/redis";
import { notFound } from "next/navigation";

export default async function TestRedisPage() {
  // 🔒 Block access in production — test pages should never be public
  if (process.env.NODE_ENV === "production") {
    notFound();
  }

  let status: "success" | "error" = "error";
  let value: string = "";
  let dbSize: number = 0;
  let errorMessage: string = "";

  try {
    const redis = new Redis({
      url:   process.env.UPSTASH_REDIS_REST_URL!,
      token: process.env.UPSTASH_REDIS_REST_TOKEN!,
    });

    await redis.set("test:connection", "hello from ajay-portfolio", { ex: 60 });
    value  = String(await redis.get("test:connection"));
    dbSize = await redis.dbsize();
    status = "success";

  } catch (error) {
    // Full error logged on SERVER only — never sent to browser
    console.error("[test-redis] Connection failed:", error);
    errorMessage =
      error instanceof Error
        ? error.message
        : "Unknown error — check server logs";
  }

  if (status === "success") {
    return (
      <div style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "600px" }}>
        <h1>✅ Upstash Redis Connected!</h1>
        <p style={{ color: "#64748b", fontSize: "13px" }}>
          🔒 This page returns <strong>404 in production</strong> automatically.
        </p>
        <hr style={{ margin: "20px 0" }} />
        <table style={{ borderCollapse: "collapse", width: "100%", fontSize: "14px" }}>
          <tr style={{ borderBottom: "1px solid #e4e4e7" }}>
            <td style={{ padding: "10px 0", color: "#71717a", width: "180px" }}>Status</td>
            <td style={{ padding: "10px 0", color: "#16a34a", fontWeight: 600 }}>Connected ✅</td>
          </tr>
          <tr style={{ borderBottom: "1px solid #e4e4e7" }}>
            <td style={{ padding: "10px 0", color: "#71717a" }}>Test key written</td>
            <td style={{ padding: "10px 0" }}>test:connection (expires in 60s)</td>
          </tr>
          <tr style={{ borderBottom: "1px solid #e4e4e7" }}>
            <td style={{ padding: "10px 0", color: "#71717a" }}>Value read back</td>
            <td style={{ padding: "10px 0", color: "#0891b2", fontWeight: 600 }}>{value}</td>
          </tr>
          <tr>
            <td style={{ padding: "10px 0", color: "#71717a" }}>Total keys in DB</td>
            <td style={{ padding: "10px 0" }}>{dbSize}</td>
          </tr>
        </table>
        <hr style={{ margin: "20px 0" }} />
        <p style={{ color: "#64748b", fontSize: "13px" }}>
          Rate limiter ready — max <strong>5 contact form submissions</strong> per IP per minute.
        </p>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "600px" }}>
      <h1>❌ Upstash Redis Connection Failed</h1>
      <p style={{ color: "#64748b", fontSize: "13px" }}>
        🔒 This page returns <strong>404 in production</strong> automatically.
      </p>
      <hr style={{ margin: "20px 0" }} />
      <p style={{ fontSize: "14px" }}>Check your <code>.env.local</code>:</p>
      <ul style={{ fontSize: "13px", color: "#374151", lineHeight: 2 }}>
        <li>UPSTASH_REDIS_REST_URL</li>
        <li>UPSTASH_REDIS_REST_TOKEN</li>
      </ul>
      <pre style={{
        background:   "#fef2f2",
        padding:      "16px",
        borderRadius: "8px",
        fontSize:     "13px",
        border:       "1px solid #fecaca",
        color:        "#991b1b",
      }}>
        {errorMessage}
      </pre>
      <p style={{ color: "#64748b", fontSize: "12px", marginTop: "12px" }}>
        Full details are in your <strong>terminal / server logs</strong>.
      </p>
    </div>
  );
}