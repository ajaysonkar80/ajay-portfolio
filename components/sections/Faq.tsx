"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do I need to pay the full amount upfront?",
    a: "No. I typically take 50% upfront and 50% on delivery for one-time projects. For monthly plans, billing is at the start of each month.",
  },
  {
    q: "Why is there a 6-month minimum contract?",
    a: "Real results take time. 6 months ensures enough runway to build, test, iterate, and see measurable impact — whether that's more leads, saved hours, or a live product.",
  },
  {
    q: "What happens if I need work beyond the Core plan?",
    a: "Core plan covers an agreed monthly scope. Any work beyond that is billed separately at ₹500/hr and always communicated transparently before starting.",
  },
  {
    q: "Do I get a discount for committing longer?",
    a: "Yes! 9-month contracts get 5% off, and 12-month contracts get 10% off your monthly rate. Discounts are calculated upfront and reflected in your invoice.",
  },
  {
    q: "Can you work with businesses outside Raipur?",
    a: "Absolutely. I work with clients across India and internationally. All communication happens via WhatsApp, email, or video calls.",
  },
  {
    q: "What if I'm not happy with the result?",
    a: "Every plan includes revision cycles. If something isn't right, we fix it. My goal is that you're fully satisfied before going live.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <span className="badge-blue mb-4">FAQ</span>
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
                type="button"
                id={`faq-question-${i}`}
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
                className="w-full flex items-center justify-between py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-white text-sm font-semibold pr-4">
                  {faq.q}
                </span>
                <span
                  aria-hidden="true"
                  className="text-neon text-lg shrink-0 transition-transform duration-200"
                  style={{ transform: open === i ? "rotate(45deg)" : "none" }}
                >
                  +
                </span>
              </button>
              <div
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
                hidden={open !== i}
              >
                <p className="text-white text-sm leading-relaxed pb-5">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
