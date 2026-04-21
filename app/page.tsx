import Navbar      from "@/components/Navbar";
import Hero        from "@/components/sections/Hero";
import Services    from "@/components/sections/Services";
import Pricing     from "@/components/sections/Pricing";
import Projects    from "@/components/sections/Projects";
import AuditBanner from "@/components/sections/AuditBanner";
import ContactForm from "@/components/sections/ContactForm";
import { Footer, WhatsAppButton } from "@/components/sections/Footer";
import {
  Process,
  Metrics,
  Testimonials,
  BlogPreview,
  FAQ,
} from "@/components/sections/Sections";
import { Separator } from "@/components/ui/separator";

function Divider() {
  return (
    <div className="px-8">
      <Separator
        style={{
          background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.18), rgba(245,158,11,0.12), transparent)",
          height: "1px",
          border: "none",
        }}
      />
    </div>
  );
}
function TrustBadges() {
  const tools = [
    { name: "Next.js 15", src: "/nextjs-icon.webp" },
    { name: "TypeScript", src: "/typescript.svg" },
    { name: "Gemini", src: "/google-gemini-icon.svg" },
    { name: "Neon PostgreSQL", src: "/neon.svg" },
    { name: "Vercel", src: "/vercel.svg" },
    { name: "Zepto Mail", src: "/email.svg" },
    { name: "Upstash Redis", src: "/redis-icon.svg" },
    { name: "Tailwind CSS", src: "/tailwind-css-icon.svg" },
  ];
  return (
    <section className="py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-xs text-[#64748b] uppercase tracking-widest mb-6">
          Built with production-grade tools trusted by top startups
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {tools.map((t) => (
            <div
              key={t.name}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-[#64748b]"
              style={{
                background: "rgba(255,255,255,0.03)",
                border:     "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <img 
                src={t.src} 
                alt={t.name} 
                className="w-4 h-4 shrink-0" 
              />
              <span>{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Divider />
      <TrustBadges />
      <Divider />
      <AuditBanner />
      <Divider />
      <Services />
      <Divider />
      <Process />
    
      <Divider />
      <Projects />
      <Divider />
      <ContactForm />
      <Divider />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}