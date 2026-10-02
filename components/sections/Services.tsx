import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const services = [
  {
    icon:        "/web-development.svg",
    title:       "Web Development",
    description: "Fast, mobile-first websites for local businesses in Raipur. Built to rank on Google and convert visitors into paying clients.",
    features:    ["Mobile-first design & development", "Local SEO & WhatsApp button", "Contact form & lead capture", "Hosting & maintenance for ₹1,000/mo"],
    cta:         "From ₹10,000 one-time",
    color:       "blue",
    href:        "#contact",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <span className="badge-blue mb-4">What I Offer</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            One Service. Built for{" "}
            <span className="text-amber">Local Businesses</span>
          </h2>
          <p className="text-white text-lg max-w-xl">
            Websites for local businesses in Raipur — not just pretty, but built to bring in actual business.
          </p>
        </div>

        {/* Offer info banner */}
        <div
          className="rounded-xl p-5 mb-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          style={{
            background: "rgba(0,212,255,0.05)",
            border:     "1px solid rgba(0,212,255,0.2)",
          }}
        >
          <div className="flex-1">
            <div className="text-white font-semibold text-sm mb-1">
              📋 50% Deposit to Start — No Minimum Contract
            </div>
            <div className="text-white text-sm leading-relaxed">
              Pay 50% via UPI with a signed contract and work begins. Your website is
              delivered in 4 days from the deposit. Domain is billed separately.
            </div>
          </div>
          <div
            className="rounded-lg px-4 py-3 text-center shrink-0"
            style={{ background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.2)" }}
          >
            <div className="text-neon font-bold text-lg leading-tight">4 days</div>
            <div className="text-white text-xs">delivery</div>
          </div>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {services.map((s) => (
            <Card
              key={s.title}
              className={`${s.color === "blue" ? "glass-hover" : "glass-amber glass-hover"} border-0 bg-transparent`}
            >
              <CardHeader className="pb-3">
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center text-xl mb-3"
                  style={{
                    background: s.color === "blue"
                      ? "rgba(0,212,255,0.1)"
                      : "rgba(245,158,11,0.12)",
                  }}
                >
                  <img src={s.icon} alt={s.title} className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white">{s.title}</h3>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-white text-sm leading-relaxed">
                  {s.description}
                </p>

                <ul className="space-y-1.5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                      <span style={{ color: s.color === "blue" ? "#00D4FF" : "#F59E0B" }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="pt-1 flex items-center justify-between">
                  <span
                    className="text-sm font-bold"
                    style={{ color: s.color === "blue" ? "#00D4FF" : "#F59E0B" }}
                  >
                    {s.cta}
                  </span>
                  <Button
                    asChild
                    variant="ghost"
                    className="text-xs h-auto px-3 py-1.5 rounded-lg transition-all duration-200"
                    style={{
                      color:      s.color === "blue" ? "#00D4FF" : "#F59E0B",
                      border:     `1px solid ${s.color === "blue" ? "rgba(0,212,255,0.2)" : "rgba(245,158,11,0.2)"}`,
                      background: "transparent",
                    }}
                  >
                    <Link href={s.href}>Get Started →</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
