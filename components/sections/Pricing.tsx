"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const plans = [
  {
    name:     "Website Build",
    price:    "₹10,000",
    period:   "one-time",
    subtitle: "Starting price — Web Development",
    color:    "blue",
    featured: true,
    features: [
      "Mobile-first website for local businesses",
      "WhatsApp button for instant enquiries",
      "Local SEO (Raipur) setup",
      "Contact form with lead notifications",
      "Uptime monitoring & security updates",
      "Delivered in 4 days from the initial deposit",
    ],
    missing:  [],
    note:     "⚠️ 50% deposit via UPI + a signed contract is required before work starts. Domain is billed separately. Delays from client-supplied images, logo, or content extend the delivery timeline and are the client's responsibility.",
    cta:      "Get Started",
    ctaVariant: "default" as const,
    href:     "#contact",
  },
  {
    name:     "Maintenance",
    price:    "₹1,000",
    period:   "/ month",
    subtitle: "Hosting, upkeep & support",
    color:    "amber",
    featured: false,
    features: [
      "Hosting management",
      "Uptime monitoring",
      "Security updates",
      "1 revision per month",
      "Small content updates",
      "WhatsApp support",
    ],
    missing:  [],
    note:     "⚠️ Domain renewal is paid separately by the client. Maintenance starts after the website is delivered.",
    cta:      "Ask About Maintenance",
    ctaVariant: "outline" as const,
    href:     "#contact",
  },
];

const pills = [
  { label: "50% deposit to start", icon: "💰", color: "blue" },
  { label: "UPI payment", icon: "📱", color: "amber" },
  { label: "Signed contract", icon: "📋", color: "blue" },
  { label: "Domain billed separately", icon: "🌐", color: "amber" },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8">
          <span className="badge-blue mb-4">Transparent Pricing</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            One Offer. <span className="text-amber">No Contracts.</span>
          </h2>
          <p className="text-white text-base max-w-xl mx-auto">
            Website development for local businesses in Raipur — starting at ₹10,000, plus
            ₹1,000/month for maintenance and hosting. No hidden charges, no minimum commitment.
          </p>
        </div>

        {/* Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {pills.map((b) => (
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative border-0 bg-transparent ${
                plan.featured ? "glass-glow" : plan.color === "amber" ? "glass-amber" : "glass"
              }`}
            >
              {/* Featured badge */}
              {plan.featured && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap z-10"
                  style={{ background: "#00D4FF", color: "#080c14" }}
                >
                  Everything Included
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
                <div className="text-white text-sm">
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

                {/* Terms note */}
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

        {/* Terms row */}
        <Card className="glass border-0 bg-transparent mt-5">
          <CardContent className="p-5 flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="text-white font-semibold text-sm">How it works</div>
              <div className="text-white text-sm mt-1">
                50% UPI deposit + signed contract → work starts → delivered in 4 days → balance on delivery.
                Domain is paid separately. If you cancel, you keep your domain and the website code, but the
                site will be taken offline (shown as temporarily unavailable).
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
