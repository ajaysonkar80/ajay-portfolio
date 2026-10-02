import { Card, CardContent } from "@/components/ui/card";

const metrics = [
  { val: "6+", label: "Projects Shipped", color: "blue" },
  { val: "₹10k", label: "Starts From", color: "amber" },
  { val: "4", label: "Happy Clients", color: "blue" },
  { val: "24hr", label: "Response Time", color: "amber" },
];

const testimonials = [
  {
    quote:
      "Ajay built our solar business website from scratch. We started getting WhatsApp inquiries within the first week. Very professional and always responsive.",
    name: "Gaurav S.",
    company: "Owner, Gaurav Solar Sky",
    initials: "GS",
    color: "amber",
  },
  {
    quote:
      "Our beverage brand needed a website that looked premium. Ajay delivered exactly that — beautiful design, fast delivery, and always available on WhatsApp.",
    name: "TasteKissey Team",
    company: "Beverage Startup, Raipur",
    initials: "TK",
    color: "blue",
  },
  {
    quote:
      "I needed a tech consultation to understand what stack to use for my startup. Ajay was honest, clear, and helped me avoid wasting money on the wrong tools.",
    name: "Rahul K.",
    company: "Founder, HealthDee",
    initials: "RK",
    color: "amber",
  },
];

export function Metrics() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((m) => (
            <Card
              key={m.label}
              className={`border-0 bg-transparent ${m.color === "amber" ? "glass-amber" : "glass"}`}
            >
              <CardContent className="p-4 sm:p-6 text-center">
                <div
                  className="font-heading font-bold mb-1"
                  style={{
                    fontSize: "clamp(1.75rem, 6vw, 2rem)",
                    color: m.color === "amber" ? "#F59E0B" : "#00D4FF",
                  }}
                >
                  {m.val}
                </div>
                <div className="text-white text-xs">{m.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 sm:mb-14">
          <span className="badge-blue mb-4">Social Proof</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            What <span className="text-amber">Clients Say</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <Card
              key={t.name}
              className={`border-0 bg-transparent ${t.color === "amber" ? "glass-amber" : "glass"}`}
            >
              <CardContent className="p-5 sm:p-6">
                <div className="text-amber text-sm mb-3" aria-hidden="true">
                  ★★★★★
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-5 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div
                  className="h-px mb-4 bg-white/[0.07]"
                  aria-hidden="true"
                />
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                    style={{
                      background:
                        t.color === "amber"
                          ? "rgba(245,158,11,0.15)"
                          : "rgba(0,212,255,0.12)",
                      color: t.color === "amber" ? "#F59E0B" : "#00D4FF",
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">
                      {t.name}
                    </div>
                    <div className="text-white text-xs">{t.company}</div>
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
