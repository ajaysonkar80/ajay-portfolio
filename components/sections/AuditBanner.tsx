import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function AuditBanner() {
  return (
    <section className="px-6 py-6">
      <div className="max-w-5xl mx-auto">
        <div
          className="rounded-xl p-7 flex items-center justify-between flex-wrap gap-5"
          style={{
            background: "linear-gradient(135deg, rgba(0,212,255,0.07) 0%, rgba(245,158,11,0.05) 100%)",
            border:     "1px solid rgba(0,212,255,0.2)",
          }}
        >
          <div>
            <span className="badge-blue mb-4">Limited Offer</span>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-2">
              Free Website &amp; Lead Audit — Worth ₹2,000
            </h3>
            <p className="text-white text-sm max-w-lg">
              I&apos;ll review your current website or business and tell you exactly where
              you&apos;re losing leads — no strings attached, no sales pitch.
            </p>
          </div>
          <Button
            asChild
            className="btn-amber h-auto whitespace-nowrap px-7 py-3.5 text-sm"
            style={{ background: "#F59E0B", color: "#080c14", border: "none" }}
          >
            <Link href="#contact">Claim Free Audit →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}