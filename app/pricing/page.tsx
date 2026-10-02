import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Testimonials } from "@/components/sections/SocialProof";
import FAQ from "@/components/sections/Faq";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Website development from ₹10,000 one-time and ₹1,000/month maintenance & hosting. 50% UPI deposit + signed contract to start.",
};

const plans = [
  {
    name: "Website Build",
    price: "₹10,000",
    period: "one-time",
    subtitle: "Starting price — Web Development",
    color: "blue",
    featured: true,
    features: [
      "Home, Services & About pages (up to 5 sections)",
      "Mobile-first website for local businesses",
      "WhatsApp button for instant enquiries",
      "Local SEO (Raipur) setup",
      "Contact form with lead notifications",
      "3 revisions included",
      "Uptime monitoring & security updates",
      "Delivered in 4 days from the initial deposit",
    ],
    note: "50% deposit via UPI + a signed contract is required before work starts. Domain is billed separately. Delays from client-supplied images, logo, or content extend the delivery timeline and are the client's responsibility.",
  },
  {
    name: "Maintenance",
    price: "₹1,000",
    period: "/ month",
    subtitle: "Hosting, upkeep & support",
    color: "amber",
    featured: false,
    features: [
      "Hosting management",
      "Uptime monitoring",
      "Security updates",
      "1 revision per month",
      "Small content updates",
      "WhatsApp support",
    ],
    note: "Domain renewal is paid separately by the client. Maintenance starts after the website is delivered.",
  },
];

const pills = [
  { label: "50% deposit to start", icon: "💰", color: "blue" },
  { label: "UPI payment", icon: "📱", color: "amber" },
  { label: "Signed contract", icon: "📋", color: "blue" },
  { label: "Domain billed separately", icon: "🌐", color: "amber" },
];

const steps = [
  {
    n: "1",
    title: "Deposit & contract",
    desc: "Pay 50% via UPI and sign the contract — that's when work starts.",
  },
  {
    n: "2",
    title: "Built in 4 days",
    desc: "Your mobile-first website is designed and built for your business.",
  },
  {
    n: "3",
    title: "Review & revisions",
    desc: "You review the site and use your 3 included revisions.",
  },
  {
    n: "4",
    title: "Balance & launch",
    desc: "Pay the balance and go live. Maintenance is ₹1,000/month, optional.",
  },
];

export default function Pricing() {
  return (
    <main id="main-content" className="min-h-screen bg-background">
      {/* Header */}
      <section id="pricing" className="pt-24 pb-8 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <span className="badge-blue mb-4">Transparent Pricing</span>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            One Offer. <span className="text-amber">Nothing Hidden.</span>
          </h1>
          <p className="text-white text-base max-w-xl mx-auto">
            Website development for local businesses in Raipur — starting at ₹10,000, plus
            ₹1,000/month for maintenance and hosting. No hidden charges, no minimum commitment.
          </p>
        </div>
      </section>

      {/* Pills */}
      <section className="pb-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4">
          {pills.map((b) => (
            <div
              key={b.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm"
              style={{
                background: b.color === "blue" ? "rgba(0,212,255,0.08)" : "rgba(245,158,11,0.08)",
                border: b.color === "blue" ? "1px solid rgba(0,212,255,0.2)" : "1px solid rgba(245,158,11,0.2)",
                color: b.color === "blue" ? "#00D4FF" : "#F59E0B",
              }}
            >
              {b.icon} {b.label}
            </div>
          ))}
        </div>
      </section>

      {/* Plans (no buttons — single CTA at the bottom of the page) */}
      <section className="pb-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative border-0 bg-transparent ${
                plan.featured ? "glass-glow" : plan.color === "amber" ? "glass-amber" : "glass"
              }`}
            >
              <CardHeader className="pb-2">
                {plan.featured && (
                  <div className="flex justify-center mb-3">
                    <div
                      className="px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap"
                      style={{ background: "#00D4FF", color: "#080c14" }}
                    >
                      Everything Included
                    </div>
                  </div>
                )}
                <div
                  className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: plan.color === "amber" ? "#F59E0B" : "#00D4FF" }}
                >
                  {plan.name}
                </div>
                <div
                  className="font-heading font-bold"
                  style={{
                    fontSize: "1.8rem",
                    color: plan.color === "amber" ? "#F59E0B" : "#00D4FF",
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
                <Separator
                  style={{
                    background: plan.color === "amber" ? "rgba(245,158,11,0.15)" : "rgba(0,212,255,0.15)",
                  }}
                />

                <ul className="space-y-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                      <span style={{ color: plan.color === "amber" ? "#F59E0B" : "#00D4FF", flexShrink: 0 }}>
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div
                  className="rounded-lg p-3 text-xs leading-relaxed"
                  style={{
                    background: "rgba(245,158,11,0.06)",
                    border: "1px solid rgba(245,158,11,0.2)",
                    color: "#94a3b8",
                  }}
                >
                  <span className="font-semibold" style={{ color: "#F59E0B" }}>
                    Good to know:
                  </span>{" "}
                  {plan.note}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Social proof */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* How it works — 4 steps */}
      <section className="pb-8 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <span className="badge-blue mb-4">How it works</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
              From deposit to <span className="text-amber">live in 4 days</span>
            </h2>
          </div>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((s, i) => (
              <li
                key={s.n}
                className={`rounded-xl p-5 border border-white/10 bg-white/5 ${
                  i % 2 === 0 ? "" : "glass-amber"
                }`}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center font-heading font-bold text-sm mb-3"
                  style={{
                    background: i % 2 === 0 ? "rgba(0,212,255,0.15)" : "rgba(245,158,11,0.15)",
                    color: i % 2 === 0 ? "#00D4FF" : "#F59E0B",
                  }}
                >
                  {s.n}
                </div>
                <div className="text-white font-semibold text-sm mb-1">{s.title}</div>
                <div className="text-slate-400 text-xs leading-relaxed">{s.desc}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Total cost */}
      <section className="py-8 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="glass rounded-xl p-6 text-center">
            <h2 className="font-heading text-xl font-bold text-white mb-3">
              What you&apos;ll <span className="text-amber">actually pay</span>
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              <strong className="text-neon">Year 1 ≈ ₹22,000</strong> — ₹10,000 build (one-time) +
              ₹1,000 × 12 months maintenance, which you can cancel anytime.{" "}
              <strong className="text-white">Build-only is fine too:</strong> pay ₹10,000 and host it
              yourself. Domain is billed separately — you pay the registrar directly and own it.
            </p>
          </div>
        </div>
      </section>

      {/* Single CTA */}
      <section className="pb-24 px-6 text-center">
        <Button
          asChild
          className="btn-neon h-auto px-10 py-4 text-base font-semibold"
          style={{ background: "#00D4FF", color: "#080c14", border: "none" }}
        >
          <Link href="/#contact">Book a Free Call →</Link>
        </Button>
        <p className="text-slate-400 text-xs mt-4">
          Free call — clear scope and price before you commit anything.
        </p>
      </section>
    </main>
  );
}
