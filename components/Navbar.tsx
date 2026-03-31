"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Pricing",  href: "#pricing"  },
  { label: "Work",     href: "#projects" },
  { label: "Blog",     href: "#blog"     },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background:     scrolled ? "rgba(8,12,20,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom:   scrolled ? "1px solid rgba(0,212,255,0.1)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="font-heading text-lg font-bold text-white no-underline">
          Ajay <span className="text-neon">Sonkar</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-white transition-colors duration-200 no-underline"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button asChild className="btn-amber h-auto text-sm px-5 py-2.5" style={{ background: "#F59E0B", color: "#080c14", border: "none" }}>
            <Link href="#contact">Hire Me</Link>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 bg-white transition-all duration-300" style={{ transform: menuOpen ? "rotate(45deg) translate(4px,4px)" : "none" }} />
          <span className="block w-5 h-0.5 bg-white transition-all duration-300" style={{ opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-5 h-0.5 bg-white transition-all duration-300" style={{ transform: menuOpen ? "rotate(-45deg) translate(4px,-4px)" : "none" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 pt-2" style={{ background: "rgba(8,12,20,0.98)", borderBottom: "1px solid rgba(0,212,255,0.1)" }}>
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-sm text-muted-foreground hover:text-white no-underline"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
            >
              {l.label}
            </Link>
          ))}
          <Button asChild className="mt-4 w-full btn-amber h-auto py-3 text-sm" style={{ background: "#F59E0B", color: "#080c14", border: "none" }}>
            <Link href="#contact" onClick={() => setMenuOpen(false)}>Hire Me</Link>
          </Button>
        </div>
      )}
    </header>
  );
}