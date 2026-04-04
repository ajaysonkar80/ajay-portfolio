import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const services = [
  {
    icon:        "🌐",
    title:       "Web Development",
    description: "Fast, mobile-first websites and web apps for local businesses, brands, and startups. Built to rank on Google and convert visitors into paying clients.",
    features:    ["Custom design & development", "Mobile-first & SEO optimised", "Lead capture integration", "Monthly maintenance included"],
    cta:         "From ₹7,000/mo",
    color:       "blue",
    href:        "#contact",
  },
  {
    icon:        "🤖",
    title:       "AI Automations",
    description: "Automate repetitive tasks — WhatsApp follow-ups, lead notifications, data entry, and customer workflows using modern AI tools tailored to your business.",
    features:    ["WhatsApp & email automation", "Lead follow-up sequences", "AI-powered data workflows", "Monthly performance review"],
    cta:         "From ₹7,000/mo",
    color:       "amber",
    href:        "#contact",
  },
  {
    icon:        "📈",
    title:       "Lead Acquisition",
    description: "Full-funnel lead capture systems — landing pages, contact forms, CRM integrations, and email sequences that fill your pipeline with real clients every month.",
    features:    ["High-converting landing pages", "CRM & form integration", "Email follow-up sequences", "Monthly lead report"],
    cta:         "From ₹7,000/mo",
    color:       "blue",
    href:        "#contact",
  },
  {
    icon:        "💡",
    title:       "Tech Consultation",
    description: "Not sure what tech you need? Book a 1-on-1 consultation. I'll map out the right solution for your goals and budget — no jargon, no unnecessary upselling.",
    features:    ["1-on-1 strategy sessions", "Tech stack recommendations", "Roadmap & budget planning", "Ongoing advisory support"],
    cta:         "From ₹7,000/mo",
    color:       "amber",
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
            Services Built for{" "}
            <span className="text-amber">Real Results</span>
          </h2>
          <p className="text-[#64748b] text-lg max-w-xl">
            Not just pretty websites — systems that bring in actual business.
          </p>
        </div>

        {/* Contract info banner */}
        <div
          className="rounded-xl p-5 mb-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          style={{
            background: "rgba(0,212,255,0.05)",
            border:     "1px solid rgba(0,212,255,0.2)",
          }}
        >
          <div className="flex-1">
            <div className="text-white font-semibold text-sm mb-1">
              📋 Minimum 6-Month Contract — All Services
            </div>
            <div className="text-[#64748b] text-sm leading-relaxed">
              All services require a minimum commitment of 6 months. This ensures
              enough time to deliver measurable results and build systems that
              actually work long-term for your business.
            </div>
          </div>
          <div
            className="rounded-lg px-4 py-3 text-center shrink-0"
            style={{ background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.2)" }}
          >
            <div className="text-neon font-bold text-lg leading-tight">6 mo</div>
            <div className="text-[#64748b] text-xs">minimum</div>
          </div>
        </div>

        {/* Volume discount banner */}
        <div
          className="rounded-xl p-5 mb-12 flex flex-col sm:flex-row items-start sm:items-center gap-5"
          style={{
            background: "rgba(245,158,11,0.05)",
            border:     "1px solid rgba(245,158,11,0.2)",
          }}
        >
          <div className="flex-1">
            <div className="text-amber font-semibold text-sm mb-1">
              🎁 Volume Discounts — Longer Contracts
            </div>
            <div className="text-[#64748b] text-sm">
              Commit longer and save more. Discounts applied automatically.
            </div>
          </div>
          <div className="flex gap-3 flex-wrap">
            {[
              { period: "6 months",  discount: "Standard" },
              { period: "9 months",  discount: "5% off"   },
              { period: "12 months", discount: "10% off"  },
            ].map((d) => (
              <div
                key={d.period}
                className="rounded-lg px-4 py-3 text-center"
                style={{
                  background: d.discount === "Standard" ? "rgba(255,255,255,0.03)" : "rgba(245,158,11,0.1)",
                  border:     d.discount === "Standard" ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(245,158,11,0.25)",
                }}
              >
                <div
                  className="font-bold text-sm leading-tight"
                  style={{ color: d.discount === "Standard" ? "#e8eaf0" : "#F59E0B" }}
                >
                  {d.discount}
                </div>
                <div className="text-[#64748b] text-xs mt-0.5">{d.period}</div>
              </div>
            ))}
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
                  {s.icon}
                </div>
                <h3 className="font-heading text-lg font-bold text-white">{s.title}</h3>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-[#64748b] text-sm leading-relaxed">
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