import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const plans = [
  {
    name:     "Starter",
    price:    "₹3,000",
    period:   "/ month",
    subtitle: "Website Maintenance",
    color:    "blue",
    featured: false,
    features: [
      "Monthly content updates",
      "Bug fixes & uptime monitoring",
      "Performance optimisation",
      "WhatsApp support",
    ],
    missing:  ["No new feature development"],
    note:     null,
    cta:      "Get Started",
    ctaVariant: "outline" as const,
    href:     "#contact",
  },
  {
    name:     "Core",
    price:    "₹7,000",
    period:   "/ month",
    subtitle: "Services start here",
    color:    "blue",
    featured: true,
    features: [
      "Web dev or automation service",
      "Lead capture system setup",
      "Monthly strategy call",
      "Email + WhatsApp support",
      "Performance reports",
      "2 revision cycles/month",
    ],
    missing:  [],
    note:     "⚠️ Work beyond the agreed monthly scope will be billed separately at ₹500/hr.",
    cta:      "Start This Plan",
    ctaVariant: "default" as const,
    href:     "#contact",
  },
  {
    name:     "Growth",
    price:    "₹15,000",
    period:   "/ month",
    subtitle: "Full-stack growth partner",
    color:    "amber",
    featured: false,
    features: [
      "Everything in Core",
      "AI automation build & deploy",
      "SaaS feature development",
      "Priority 12hr response",
      "Weekly check-in calls",
      "Unlimited revisions",
    ],
    missing:  [],
    note:     null,
    cta:      "Scale with Growth",
    ctaVariant: "outline" as const,
    href:     "#contact",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8">
          <span className="badge-blue mb-4">Transparent Pricing</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, <span className="text-amber">Monthly Plans</span>
          </h2>
          <p className="text-[#64748b] text-base max-w-md mx-auto">
            No hidden charges. Minimum 6-month commitment. Volume discounts for longer contracts.
          </p>
        </div>

        {/* Contract + discount note */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { label: "6-month minimum",  icon: "📋", color: "blue"  },
            { label: "5% off — 9 months",  icon: "🎁", color: "amber" },
            { label: "10% off — 12 months", icon: "🎁", color: "amber" },
          ].map((b) => (
            <div
              key={b.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm"
              style={{
                background: b.color === "blue" ? "rgba(0,212,255,0.08)" : "rgba(245,158,11,0.08)",
                border:     b.color === "blue" ? "1px solid rgba(0,212,255,0.2)" : "1px solid rgba(245,158,11,0.2)",
                color:      b.color === "blue" ? "#00D4FF" : "#F59E0B",
              }}
            >
              {b.icon} {b.label}
            </div>
          ))}
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative border-0 bg-transparent ${
                plan.featured ? "glass-glow" : plan.color === "amber" ? "glass-amber" : "glass"
              }`}
            >
              {/* Popular badge */}
              {plan.featured && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap z-10"
                  style={{ background: "#00D4FF", color: "#080c14" }}
                >
                  Most Popular
                </div>
              )}

              <CardHeader className="pb-2">
                <div
                  className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: plan.color === "amber" ? "#F59E0B" : "#00D4FF" }}
                >
                  {plan.name}
                </div>
                <div
                  className="font-heading font-bold"
                  style={{
                    fontSize: "2.2rem",
                    color:    plan.color === "amber" ? "#F59E0B" : "#00D4FF",
                    lineHeight: 1,
                  }}
                >
                  {plan.price}
                </div>
                <div className="text-[#64748b] text-sm">
                  {plan.period} — {plan.subtitle}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <Separator style={{ background: plan.color === "amber" ? "rgba(245,158,11,0.15)" : "rgba(0,212,255,0.15)" }} />

                {/* Features */}
                <ul className="space-y-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                      <span style={{ color: plan.color === "amber" ? "#F59E0B" : "#00D4FF", flexShrink: 0 }}>✓</span>
                      {f}
                    </li>
                  ))}
                  {plan.missing.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                      <span style={{ flexShrink: 0 }}>—</span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Extra work note for Core */}
                {plan.note && (
                  <div
                    className="rounded-lg p-3 text-xs leading-relaxed"
                    style={{
                      background: "rgba(245,158,11,0.06)",
                      border:     "1px solid rgba(245,158,11,0.2)",
                      color:      "#94a3b8",
                    }}
                  >
                    {plan.note}
                  </div>
                )}

                {/* CTA */}
                <Button
                  asChild
                  className={`w-full h-auto py-3 text-sm font-semibold ${
                    plan.ctaVariant === "default"
                      ? "btn-neon"
                      : plan.color === "amber"
                      ? "btn-amber"
                      : "btn-outline"
                  }`}
                  style={
                    plan.ctaVariant === "default"
                      ? { background: "#00D4FF", color: "#080c14", border: "none" }
                      : plan.color === "amber"
                      ? { background: "#F59E0B", color: "#080c14", border: "none" }
                      : { background: "transparent", color: "#00D4FF", border: "1px solid rgba(0,212,255,0.4)" }
                  }
                >
                  <Link href={plan.href}>{plan.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Custom row */}
        <Card className="glass border-0 bg-transparent mt-5">
          <CardContent className="p-5 flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="text-white font-semibold text-sm">Need a custom one-time project?</div>
              <div className="text-[#64748b] text-sm mt-1">
                Audits, landing pages, SaaS builds — let&apos;s scope it out. No long-term commitment required.
              </div>
            </div>
            <Button
              asChild
              variant="outline"
              className="btn-outline h-auto text-sm px-5 py-2.5 whitespace-nowrap"
              style={{ background: "transparent", color: "#00D4FF", border: "1px solid rgba(0,212,255,0.4)" }}
            >
              <Link href="#contact">Book a Free Call →</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}