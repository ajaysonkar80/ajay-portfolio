import { prisma } from "@/lib/prisma";

export default async function TestDBPage() {
  try {
    const count = await prisma.lead.count();

    return (
      <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
        <h1>✅ Database Connected Successfully</h1>
        <p>Total Leads in database: {count}</p>
      </div>
    );
  } catch (error) {
    return (
      <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
        <h1>❌ Database Connection Failed</h1>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    );
  }
}