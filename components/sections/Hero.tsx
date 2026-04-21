"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const rotatingWords = ["Websites", "Automations", "SaaS Products", "Lead Systems"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  /* Rotate words with fade‑in/out */
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % rotatingWords.length);
        setVisible(true);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
      {/* -----------------------------------------------------------------
          Background mesh (Static)
      ----------------------------------------------------------------- */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 50% 0%,   rgba(0,212,255,0.13) 0%, transparent 65%),
            radial-gradient(ellipse 40% 40% at 85% 70%,  rgba(245,158,11,0.07) 0%, transparent 55%),
            radial-gradient(ellipse 30% 30% at 10% 60%,  rgba(0,128,255,0.06) 0%, transparent 55%)
          `,
        }}
      />

      {/* -----------------------------------------------------------------
          Grid texture (Static)
      ----------------------------------------------------------------- */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,212,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          backgroundPosition: "0px 0px",
        }}
      />

      {/* -----------------------------------------------------------------
          Main content
      ----------------------------------------------------------------- */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        
        {/* Availability chip */}
        <Badge
          variant="outline"
          className="mb-8 px-4 py-2 text-sm gap-2 rounded-full border-0 inline-flex items-center"
          style={{
            background: "rgba(245,158,11,0.1)",
            border: "1px solid rgba(245,158,11,0.3)",
            color: "#F59E0B",
          }}
        >
          {/* Static dot replacing the blinking animation */}
          <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
          Open to projects — Raipur &amp; Remote
        </Badge>

        {/* Main heading */}
        <h1
          className="font-heading font-black text-white mb-6"
          style={{ fontSize: "clamp(2.2rem, 6vw, 4.2rem)", lineHeight: 1.1 }}
        >
          Your Local Tech Partner for{" "}
          <motion.span
            className="text-neon"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 8 }}
            transition={{ duration: 0.3 }}
            style={{
              display: "inline-block",
              textShadow: "0 0 32px rgba(0,212,255,0.5)",
            }}
          >
            {rotatingWords[wordIndex]}
          </motion.span>{" "}
          <br />
          <span className="text-amber">&amp; AI-Powered Growth</span>
        </h1>

        {/* Subheading */}
        <p
          className="text-white mx-auto mb-10 leading-relaxed"
          style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", maxWidth: "520px" }}
        >
          I help local businesses and startups in Raipur get more leads, save hours
          with automation, and build web products that actually convert — with clear
          monthly pricing and zero surprises.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Button
            asChild
            className="btn-neon h-auto px-8 py-4 text-base"
            style={{ background: "#00D4FF", color: "#080c14", border: "none" }}
          >
            <Link href="#contact">Get a Free Consultation</Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="btn-outline h-auto px-8 py-4 text-base"
            style={{
              background: "transparent",
              color: "#00D4FF",
              border: "1px solid rgba(0,212,255,0.4)",
            }}
          >
            <Link href="#projects">See My Work</Link>
          </Button>
        </div>

        {/* -----------------------------------------------------------------
            Trust strip - Using SVG Images
        ----------------------------------------------------------------- */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
          
          <div className="flex items-center gap-2 text-sm text-white">
            <img 
              src="/map-pin-icon.svg" 
              alt="Location" 
              className="w-4 h-4 shrink-0" 
            />
            <span>Based in Raipur, CG</span>
          </div>

          <div className="flex items-center gap-2 text-white">
            <img 
              src="/24-hours-color-icon.svg" 
              alt="Clock" 
              className="w-4 h-4 shrink-0" 
            />
            <span>Replies within 24hrs</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-white">
            <img 
              src="/gold-coin-rupee-icon.svg" 
              alt="Pricing" 
              className="w-4 h-4 shrink-0" 
            />
            <span>Starts at ₹7,000/mo</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-white">
            <img 
              src="/contract.svg" 
              alt="Contract" 
              className="w-4 h-4 shrink-0" 
            />
            <span>Min. 6‑month contracts</span>
          </div>

        </div>
      </div>

      {/* -----------------------------------------------------------------
          Scroll indicator (Static line)
      ----------------------------------------------------------------- */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-linear-to-b from-[rgba(0,212,255,0.5)] to-transparent" />
      </div>
    </section>
  );
}