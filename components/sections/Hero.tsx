import Image from "next/image";
import { Button } from "@/components/ui/button";
import StarField from "@/components/sections/StarField";

const trustStrip = [
  { icon: "/map-pin-icon.svg", label: "Based in Raipur, CG", alt: "Location" },
  { icon: "/24-hours-color-icon.svg", label: "Replies within 24hrs", alt: "Response time" },
  { icon: "/gold-coin-rupee-icon.svg", label: "Starts at ₹7,000/mo", alt: "Pricing" },
  { icon: "/contract.svg", label: "Min. 6-month contracts", alt: "Contract" },
];

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 pt-28 pb-20">
      {/* Static background mesh */}
      <div
        className="absolute inset-0 -z-20 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 50% 0%,   rgba(0,212,255,0.13) 0%, transparent 65%),
            radial-gradient(ellipse 40% 40% at 85% 70%,  rgba(245,158,11,0.07) 0%, transparent 55%),
            radial-gradient(ellipse 30% 30% at 10% 60%,  rgba(0,128,255,0.06) 0%, transparent 55%)
          `,
        }}
      />

      {/* Static grid texture */}
      <div
        className="absolute inset-0 -z-20 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,212,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Star canvas — lazy, automatic, decorative */}
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
        <StarField />
      </div>

      <div className="relative z-10 w-full max-w-3xl mx-auto text-center">
        {/* Availability chip */}
        <p className="mb-8 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-sm text-amber-500">
          <span className="w-2 h-2 rounded-full bg-amber-500" aria-hidden="true" />
          Open to projects — Raipur &amp; Remote
        </p>

        <h1 className="font-heading font-black text-white mb-6 text-balance max-w-2xl mx-auto text-3xl md:text-4xl lg:text-[3.5rem] leading-[1.1]">
          Get a website that brings you customers.
        </h1>

        <p className="text-slate-300 mx-auto mb-9 max-w-xl leading-relaxed text-base md:text-lg">
          Your competitors are taking away the customers that should be yours.
        </p>

        {/* CTAs — min 44px touch targets */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Button
            asChild
            className="btn-neon h-auto min-h-11 px-6 py-3 text-sm rounded-md"
            style={{ background: "#00D4FF", color: "#080c14", border: "none" }}
          >
            {/* TODO: replace href with the production WhatsApp link (owner-managed) */}
            <a href="#contact">Message me on WhatsApp</a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="btn-outline h-auto min-h-11 px-6 py-3 text-sm rounded-md"
            style={{
              background: "transparent",
              color: "#00D4FF",
              border: "1px solid rgba(0,212,255,0.4)",
            }}
          >
            <a href="#projects">See Sample websites</a>
          </Button>
        </div>

        {/* Trust strip */}
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
          {trustStrip.map((item) => (
            <li key={item.label} className="flex items-center gap-2 text-sm text-white">
              <Image
                src={item.icon}
                alt=""
                aria-hidden="true"
                width={16}
                height={16}
                className="w-4 h-4 shrink-0"
              />
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-px h-10 bg-linear-to-b from-cyan-400/50 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
