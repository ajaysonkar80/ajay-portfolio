"use client";

import { useEffect, useState } from "react";
import { motion, Transition, Variants } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const rotatingWords = ["Websites", "Automations", "SaaS Products", "Lead Systems"];

/* -----------------------------------------------------------------
   Animation variants (Tailwind‑styled layout, Framer‑Motion for motion)
----------------------------------------------------------------- */
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
      when: "beforeChildren",
    } as Transition,
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" } as Transition,
  },
};

/* Background mesh: slow vertical drift + subtle floating */
const meshVariants: Variants = {
  hidden: { opacity: 0.8, y: 0 },
  visible: {
    opacity: 1,
    y: [0, 10, 0], // mutable number[] – no `as const`
    transition: {
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
    } as Transition,
  },
};

/* Neon text: pulsing glow */
const neonGlow: Variants = {
  animate: {
    // `textShadow` isn’t in Framer‑Motion’s type map, so we cast to any.
    textShadow: [
      "0 0 8px rgba(0,212,255,0.3)",
      "0 0 16px rgba(0,212,255,0.6)",
      "0 0 8px rgba(0,212,255,0.3)",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    } as Transition,
  } as any,
};

/* Scroll line: breathing height/opacity */
const scrollLineVariants: Variants = {
  animate: {
    height: ["10px", "14px", "10px"], // mutable string[]
    opacity: [0.6, 1, 0.6],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    } as Transition,
  },
};

/* -----------------------------------------------------------------
   Hero component
----------------------------------------------------------------- */
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
    /* -----------------------------------------------------------------
       Section wrapper – fade‑in from bottom on page load
    ----------------------------------------------------------------- */
    <motion.section
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      {/* -----------------------------------------------------------------
          Background mesh – slow rotation + floating drift
      ----------------------------------------------------------------- */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 50% 0%,   rgba(0,212,255,0.13) 0%, transparent 65%),
            radial-gradient(ellipse 40% 40% at 85% 70%,  rgba(245,158,11,0.07) 0%, transparent 55%),
            radial-gradient(ellipse 30% 30% at 10% 60%,  rgba(0,128,255,0.06) 0%, transparent 55%)
          `,
        }}
        variants={meshVariants}
        initial="hidden"
        animate="visible"
      />

      {/* -----------------------------------------------------------------
          Grid texture – gentle scaling (breathing)
      ----------------------------------------------------------------- */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,212,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          backgroundPosition: "0px 0px",
        }}
        initial={{ backgroundPosition: "0px 0px", scale: 1 }}
        animate={{
          backgroundPosition: "60px 60px",
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        } as Transition}
      />

      {/* -----------------------------------------------------------------
          Main content – staggered entrance of children
      ----------------------------------------------------------------- */}
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Availability chip – scale + tilt on hover */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.07, rotate: 2 }}
          whileTap={{ scale: 0.98 }}
        >
          <Badge
            variant="outline"
            className="mb-8 px-4 py-2 text-sm gap-2 rounded-full border-0"
            style={{
              background: "rgba(245,158,11,0.1)",
              border: "1px solid rgba(245,158,11,0.3)",
              color: "#F59E0B",
            }}
          >
            <span className="dot-amber dot-blink" />
            Open to projects — Raipur &amp; Remote
          </Badge>
        </motion.div>

        {/* Main heading – subtle glitch on hover, neon glow animation */}
        <motion.h1
          className="font-heading font-black text-white mb-6"
          style={{ fontSize: "clamp(2.2rem, 6vw, 4.2rem)", lineHeight: 1.1 }}
          variants={itemVariants}
          whileHover={{ x: [0, 2, -2, 0] }}
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
            variants={neonGlow}
          >
            {rotatingWords[wordIndex]}
          </motion.span>{" "}
          <br />
          <span className="text-amber">&amp; AI-Powered Growth</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-[#64748b] mx-auto mb-10 leading-relaxed"
          style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", maxWidth: "520px" }}
          variants={itemVariants}
        >
          I help local businesses and startups in Raipur get more leads, save hours
          with automation, and build web products that actually convert — with clear
          monthly pricing and zero surprises.
        </motion.p>

        {/* CTAs – hover/tap scaling */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
          variants={itemVariants}
        >
          <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              className="btn-neon h-auto px-8 py-4 text-base"
              style={{ background: "#00D4FF", color: "#080c14", border: "none" }}
            >
              <Link href="#contact">Get a Free Consultation</Link>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.95 }}>
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
          </motion.div>
        </motion.div>

        {/* Trust strip – staggered fade‑in + hover lift */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
          variants={containerVariants}
        >
          {[
            "📍 Based in Raipur, CG",
            "🕐 Replies within 24hrs",
            "💰 Starts at ₹3,000/mo",
            "📋 Min. 6‑month contracts",
          ].map((item) => (
            <motion.span
              key={item}
              className="text-sm text-[#64748b]"
              variants={itemVariants}
              whileHover={{ y: -2, scale: 1.05, color: "#00D4FF" }}
            >
              {item}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* -----------------------------------------------------------------
          Scroll indicator – bounce + pulsing line
      ----------------------------------------------------------------- */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        } as Transition}
      >
        
        <motion.div
          className="w-px bg-linear-to-b from-[rgba(0,212,255,0.5)] to-transparent"
          variants={scrollLineVariants}
        />
      </motion.div>
    </motion.section>
  );
}