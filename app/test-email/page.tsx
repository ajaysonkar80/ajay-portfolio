"use client";

import { useState } from "react";

export default function TestEmailPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const [results, setResults] = useState<{
    notification: string;
    autoReply: string;
  } | null>(null);
  const [error, setError] = useState("");
  const [key, setKey] = useState("");

  async function handleSendTest() {
    if (!key) {
      setError("Enter your TEST_SECRET_KEY first");
      return;
    }

    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/test-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key }),
      });

      if (res.status === 401) {
        setError("❌ Wrong secret key");
        setStatus("idle");
        return;
      }

      if (res.status === 404) {
        setError("❌ This endpoint is disabled in production");
        setStatus("idle");
        return;
      }

      const data = await res.json();
      setResults(data);
      setStatus("done");
    } catch {
      setError("Network error — is your dev server running?");
      setStatus("idle");
    }
  }

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "560px" }}>
      <h1>📧 Email Test</h1>
      <p style={{ color: "#64748b", fontSize: "13px" }}>
        Emails only send when you click the button — never on page load or
        refresh. Safe to keep open.
      </p>
      <hr style={{ margin: "20px 0" }} />

      <label
        style={{
          fontSize: "13px",
          color: "#374151",
          display: "block",
          marginBottom: "6px",
          fontWeight: 600,
        }}
      >
        TEST_SECRET_KEY (from your .env.local)
      </label>
      <input
        type="password"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        placeholder="Enter your secret key"
        style={{
          width: "100%",
          padding: "10px 14px",
          borderRadius: "8px",
          border: "1px solid #d1d5db",
          fontSize: "14px",
          outline: "none",
          marginBottom: "14px",
          boxSizing: "border-box",
        }}
      />

      <button
        onClick={handleSendTest}
        disabled={status === "loading"}
        style={{
          background: status === "loading" ? "#94a3b8" : "#00d4ff",
          color: "#080c14",
          border: "none",
          borderRadius: "8px",
          padding: "12px 28px",
          fontWeight: 700,
          fontSize: "14px",
          cursor: status === "loading" ? "not-allowed" : "pointer",
          width: "100%",
        }}
      >
        {status === "loading" ? "Sending..." : "Send Test Emails"}
      </button>

      {error && (
        <p style={{ color: "#dc2626", fontSize: "13px", marginTop: "12px" }}>
          {error}
        </p>
      )}

      {status === "done" && results && (
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            background: "#f0fdf4",
            borderRadius: "8px",
            border: "1px solid #bbf7d0",
          }}
        >
          <h3 style={{ margin: "0 0 14px", fontSize: "15px" }}>Results</h3>
          <p style={{ margin: "6px 0", fontSize: "14px" }}>
            Lead notification:{" "}
            <strong>{results.notification}</strong>
          </p>
          <p style={{ margin: "6px 0", fontSize: "14px" }}>
            Auto-reply: <strong>{results.autoReply}</strong>
          </p>
          <hr style={{ margin: "14px 0", borderColor: "#bbf7d0" }} />
          <p style={{ color: "#64748b", fontSize: "12px", margin: 0 }}>
            Check <strong>hello@ajaysonkar.com</strong> inbox (forwards to your
            Gmail). Both emails should arrive within 30 seconds.
          </p>
        </div>
      )}

      <hr style={{ margin: "24px 0" }} />
      <p style={{ color: "#94a3b8", fontSize: "12px" }}>
        Sends from: <strong>noreply@ajaysonkar.com</strong> via Zepto API
        &nbsp;·&nbsp; Route: <strong>POST /api/test-email</strong>
      </p>
    </div>
  );
}