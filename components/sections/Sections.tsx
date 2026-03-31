"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// ─── Process ──────────────────────────────────────────────────────────────────
export function Process() {
  const steps = [
    { num: "01", title: "Free Call",        desc: "We discuss your goals, budget, and timeline. No pressure — just clarity on what you need.",    color: "blue"  },
    { num: "02", title: "Proposal",         desc: "I send a clear scope, timeline, and fixed price. You approve before any work begins.",           color: "amber" },
    { num: "03", title: "Build & Review",   desc: "I build in sprints and share progress. You review and give feedback at every stage.",            color: "blue"  },
    { num: "04", title: "Launch & Support", desc: "We go live together. I handle deployment and stay on for support so nothing breaks.",            color: "amber" },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <Badge className="badge-amber mb-4 border-0">How It Works</Badge>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            From Idea to <span className="text-neon">Live Product</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            A simple 4-step process — no jargon, no confusion.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s) => (
            <Card key={s.num} className={`border-0 bg-transparent ${s.color === "blue" ? "glass" : "glass-amber"}`}>
              <CardContent className="p-5">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mb-4"
                  style={{
                    border: `1px solid ${s.color === "blue" ? "rgba(0,212,255,0.3)" : "rgba(245,158,11,0.3)"}`,
                    color:  s.color === "blue" ? "#00D4FF" : "#F59E0B",
                  }}
                >
                  {s.num}
                </div>
                <div className="text-white font-semibold text-sm mb-2">{s.title}</div>
                <div className="text-muted-foreground text-sm leading-relaxed">{s.desc}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Metrics ──────────────────────────────────────────────────────────────────
export function Metrics() {
  const metrics = [
    { val: "6+",   label: "Projects Shipped",    color: "blue"  },
    { val: "₹3k",  label: "Starts From / Month", color: "amber" },
    { val: "4",    label: "Happy Clients",        color: "blue"  },
    { val: "24hr", label: "Response Time",        color: "amber" },
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((m) => (
            <Card key={m.label} className={`border-0 bg-transparent ${m.color === "amber" ? "glass-amber" : "glass"}`}>
              <CardContent className="p-6 text-center">
                <div
                  className="font-heading font-bold mb-1"
                  style={{ fontSize: "2rem", color: m.color === "amber" ? "#F59E0B" : "#00D4FF" }}
                >
                  {m.val}
                </div>
                <div className="text-muted-foreground text-xs">{m.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
export function Testimonials() {
  const testimonials = [
    {
      quote:    "Ajay built our solar business website from scratch. We started getting WhatsApp inquiries within the first week. Very professional and always responsive.",
      name:     "Gaurav S.",
      company:  "Owner, Gaurav Solar Sky",
      initials: "GS",
      color:    "amber",
    },
    {
      quote:    "Our beverage brand needed a website that looked premium. Ajay delivered exactly that — beautiful design, fast delivery, and always available on WhatsApp.",
      name:     "TasteKissey Team",
      company:  "Beverage Startup, Raipur",
      initials: "TK",
      color:    "blue",
    },
    {
      quote:    "I needed a tech consultation to understand what stack to use for my startup. Ajay was honest, clear, and helped me avoid wasting money on the wrong tools.",
      name:     "Rahul K.",
      company:  "Founder, HealthDee",
      initials: "RK",
      color:    "amber",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <Badge className="badge-blue mb-4 border-0">Social Proof</Badge>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            What <span className="text-amber">Clients Say</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <Card key={t.name} className={`border-0 bg-transparent ${t.color === "amber" ? "glass-amber" : "glass"}`}>
              <CardContent className="p-6">
                <div className="text-amber text-sm mb-3">★★★★★</div>
                <p className="text-slate-300 text-sm leading-relaxed mb-5 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <Separator className="mb-4" style={{ background: "rgba(255,255,255,0.07)" }} />
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                    style={{
                      background: t.color === "amber" ? "rgba(245,158,11,0.15)" : "rgba(0,212,255,0.12)",
                      color:      t.color === "amber" ? "#F59E0B" : "#00D4FF",
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">{t.name}</div>
                    <div className="text-muted-foreground text-xs">{t.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Blog Preview ─────────────────────────────────────────────────────────────
export function BlogPreview() {
  const posts = [
    {
      tag:      "Lead Generation",
      tagStyle: "amber",
      title:    "5 Reasons Your Business Website Isn't Getting Leads",
      excerpt:  "Most local business sites look good but fail to convert. Here's what's missing and how to fix it fast.",
      slug:     "/blog/website-not-getting-leads",
    },
    {
      tag:      "AI Automation",
      tagStyle: "blue",
      title:    "How Raipur Businesses Can Save 10 Hours/Week with AI",
      excerpt:  "Simple automations that handle WhatsApp replies, follow-ups, and data entry without hiring extra staff.",
      slug:     "/blog/ai-automation-raipur",
    },
    {
      tag:      "Web Dev",
      tagStyle: "amber",
      title:    "Why Your Competitor's Website Ranks Higher on Google",
      excerpt:  "SEO isn't magic. I'll break down exactly what local businesses need to do to outrank competition.",
      slug:     "/blog/seo-local-business",
    },
  ];

  return (
    <section id="blog" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
          <div>
            <Badge className="badge-blue mb-4 border-0">From the Blog</Badge>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">
              Insights for <span className="text-neon">Local Businesses</span>
            </h2>
          </div>
          <Button
            asChild
            variant="ghost"
            className="text-neon hover:bg-transparent hover:underline h-auto px-0 text-sm font-semibold"
            style={{ color: "#00D4FF" }}
          >
            <Link href="/blog">View all posts →</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {posts.map((p) => (
            <Card key={p.title} className="glass glass-hover border-0 bg-transparent">
              <CardContent className="p-5 flex flex-col gap-3 h-full">
                <Badge
                  className={`${p.tagStyle === "amber" ? "badge-amber" : "badge-blue"} border-0 self-start`}
                  style={{ fontSize: "10px" }}
                >
                  {p.tag}
                </Badge>
                <h3 className="font-heading text-base font-bold text-white leading-snug">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {p.excerpt}
                </p>
                <Button
                  asChild
                  variant="ghost"
                  className="h-auto px-0 text-xs font-semibold hover:bg-transparent self-start"
                  style={{ color: "#00D4FF" }}
                >
                  <Link href={p.slug}>Read more →</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const faqs = [
  { q: "Do I need to pay the full amount upfront?",          a: "No. I typically take 50% upfront and 50% on delivery for one-time projects. For monthly plans, billing is at the start of each month." },
  { q: "Why is there a 6-month minimum contract?",           a: "Real results take time. 6 months ensures enough runway to build, test, iterate, and see measurable impact — whether that's more leads, saved hours, or a live product." },
  { q: "What happens if I need work beyond the Core plan?",  a: "Core plan covers an agreed monthly scope. Any work beyond that is billed separately at ₹500/hr and always communicated transparently before starting." },
  { q: "Do I get a discount for committing longer?",         a: "Yes! 9-month contracts get 5% off, and 12-month contracts get 10% off your monthly rate. Discounts are calculated upfront and reflected in your invoice." },
  { q: "Can you work with businesses outside Raipur?",       a: "Absolutely. I work with clients across India and internationally. All communication happens via WhatsApp, email, or video calls." },
  { q: "What if I'm not happy with the result?",             a: "Every plan includes revision cycles. If something isn't right, we fix it. My goal is that you're fully satisfied before going live." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <Badge className="badge-blue mb-4 border-0">FAQ</Badge>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Common <span className="text-amber">Questions</span>
          </h2>
        </div>
        <div>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
            >
              <button
                className="w-full flex items-center justify-between py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-white text-sm font-semibold pr-4">{faq.q}</span>
                <span
                  className="text-neon text-lg shrink-0 transition-transform duration-200"
                  style={{ transform: open === i ? "rotate(45deg)" : "none" }}
                >
                  +
                </span>
              </button>
              {open === i && (
                <p className="text-muted-foreground text-sm leading-relaxed pb-5">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}