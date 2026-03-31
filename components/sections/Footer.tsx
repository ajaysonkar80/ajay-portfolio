import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const links = [
    { label: "WhatsApp", href: "https://wa.me/91XXXXXXXXXX",      external: true  },
    { label: "Email",    href: "mailto:hello@ajaysonkar.com",     external: false },
    { label: "GitHub",   href: "https://github.com/ajaysonkar80", external: true  },
    { label: "LinkedIn", href: "#",                               external: false },
  ];

  return (
    <footer>
      <Separator style={{ background: "rgba(255,255,255,0.06)" }} />
      <div className="px-6 py-8">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-4">

          <div className="font-heading text-base font-bold text-white">
            Ajay <span className="text-neon">Sonkar</span>{" "}
            <span className="text-muted-foreground text-sm font-normal font-body">
              — Freelance Developer · Raipur, CG
            </span>
          </div>

          <div className="flex gap-2 flex-wrap">
            {links.map((l) => (
              <Button
                key={l.label}
                asChild
                variant="ghost"
                className="h-auto px-2 py-1 text-xs text-muted-foreground hover:text-white hover:bg-transparent transition-colors"
              >
                <Link
                  href={l.href}
                  target={l.external ? "_blank" : undefined}
                  rel={l.external ? "noreferrer" : undefined}
                >
                  {l.label}
                </Link>
              </Button>
            ))}
          </div>

          <div className="text-muted-foreground text-xs">
            © 2025 · Built with Next.js · Deployed on Vercel
          </div>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/91XXXXXXXXXX"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-2xl transition-transform duration-200 hover:scale-110 active:scale-95 no-underline"
      style={{ background: "#25D366", boxShadow: "0 4px 20px rgba(37,211,102,0.4)" }}
    >
      💬
    </Link>
  );
}