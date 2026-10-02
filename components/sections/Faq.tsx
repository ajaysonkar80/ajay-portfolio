"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How does payment work?",
    a: "50% of the project fee is paid upfront via UPI as a deposit, along with a signed contract — that's when work starts. The remaining 50% is due on delivery. Maintenance is billed ₹1,000 at the start of each month.",
  },
  {
    q: "What's included in the ₹10,000 website build?",
    a: "A mobile-first website for your local business, WhatsApp button, local SEO setup for Raipur, a contact form, uptime monitoring, and security updates. Delivery is 4 days from the initial deposit.",
  },
  {
    q: "Is the domain included?",
    a: "No. The domain is paid separately by the client. You own your domain throughout the project.",
  },
  {
    q: "What does the ₹1,000/month cover?",
    a: "Hosting, maintenance, uptime monitoring, security updates, and 1 revision per month. It starts after your website is delivered.",
  },
  {
    q: "What if my images, logo, or content arrive late?",
    a: "The delivery timeline shifts day-for-day. Delays caused by client-supplied images, logo, content, or other deliverables are the client's responsibility.",
  },
  {
    q: "What happens if I cancel?",
    a: "You keep your domain and the website code. However, the website will be taken off my hosting and shown as temporarily unavailable — it will not remain live.",
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
