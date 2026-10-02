"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  PhoneCall, 
  FileText, 
  Code2, 
  Rocket, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  Sparkles,
  LucideIcon 
} from "lucide-react";

interface StepItem {
  id: number;
  stepNumber: string;
  title: string;
  description: string;
  accent: "cyan" | "amber";
  duration: string;
  icon: LucideIcon;
  deliverables: string[];
}

const stepsData: StepItem[] = [
  {
    id: 1,
    stepNumber: "01",
    title: "Free Call",
    description: "We discuss your goals, budget, and timeline. No pressure — just clarity on what you need.",
    accent: "cyan",
    duration: "30-45 Mins",
    icon: PhoneCall,
    deliverables: ["Requirement audit", "Architecture fit", "Timeline ballpark"],
  },
  {
    id: 2,
    stepNumber: "02",
    title: "Contract & Deposit",
    description: "I send a clear scope, price, and a contract. You sign it and pay a 50% deposit via UPI — that's when work begins.",
    accent: "amber",
    duration: "Same Day",
    icon: FileText,
    deliverables: ["Signed contract", "50% UPI deposit", "Fixed price — from ₹10,000"],
  },
  {
    id: 3,
    stepNumber: "03",
    title: "Build & Review",
    description: "I build your mobile-first website — WhatsApp button, local SEO, contact form — and share it for your review.",
    accent: "cyan",
    duration: "4 Days",
    icon: Code2,
    deliverables: ["Mobile-first website", "1 revision round", "Staging preview"],
  },
  {
    id: 4,
    stepNumber: "04",
    title: "Launch & Support",
    description: "Balance payment, then we go live. Hosting, uptime monitoring, security updates, and 1 revision/month for ₹1,000.",
    accent: "amber",
    duration: "Launch + Ongoing",
    icon: Rocket,
    deliverables: ["Domain & SSL configuration", "Uptime monitoring", "₹1,000/mo maintenance"],
  },
];

interface StepCardProps {
  step: StepItem;
  isActive: boolean;
  onClick: () => void;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const StepCard: React.FC<StepCardProps> = ({
  step,
  isActive,
  onClick,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const isCyan = step.accent === "cyan";
  const accentHex = isCyan ? "#00c8ff" : "#f59e0b";

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
       className={`group relative flex flex-col justify-between p-6 rounded-2xl cursor-pointer transition-all duration-500 border ${
        isActive
          ? isCyan
            ? "border-cyan-500/50 bg-[#0a1219]/90 shadow-[0_0_35px_rgba(0,200,255,0.12)] scale-[1.02]"
            : "border-amber-500/50 bg-[#16120b]/90 shadow-[0_0_35px_rgba(245,158,11,0.12)] scale-[1.02]"
          : "border-white/5 bg-[#070b10]/60 hover:border-white/20 hover:bg-[#0c1219]/80"
      }`}
    >
      {/* Dynamic Cursor Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${accentHex}1a, transparent 70%)`,
        }}
      />

      <div className="relative z-10">
        {/* Step Indicator Pill / Ring */}
        <div className="flex items-center justify-between mb-8">
          <div className="relative flex items-center justify-center">
            {isActive && (
              <span
                className={`absolute inline-flex h-16 w-16 animate-ping rounded-full opacity-20 ${
                  isCyan ? "bg-cyan-400" : "bg-amber-400"
                }`}
              />
            )}
            <div
              className={`w-14 h-14 rounded-full border flex items-center justify-center font-mono font-medium text-lg transition-all duration-500 backdrop-blur-sm ${
                isActive
                  ? isCyan
                    ? "border-cyan-400 text-cyan-400 bg-cyan-950/40 shadow-[0_0_20px_rgba(0,200,255,0.4)]"
                    : "border-amber-400 text-amber-400 bg-amber-950/40 shadow-[0_0_20px_rgba(245,158,11,0.4)]"
                  : isCyan
                  ? "border-cyan-900/60 text-cyan-400/80 bg-cyan-950/10 group-hover:border-cyan-500/60 group-hover:text-cyan-300"
                  : "border-amber-900/60 text-amber-400/80 bg-amber-950/10 group-hover:border-amber-500/60 group-hover:text-amber-300"
              }`}
            >
              {step.stepNumber}
            </div>
          </div>

          <div
            className={`flex items-center gap-1 text-xs font-mono px-2.5 py-1 rounded-full border transition-colors ${
              isActive
                ? isCyan
                  ? "border-cyan-500/30 text-cyan-300 bg-cyan-950/40"
                  : "border-amber-500/30 text-amber-300 bg-amber-950/40"
                : "border-white/5 text-neutral-400 bg-white/5"
            }`}
          >
            <Clock className="w-3 h-3" />
            <span>{step.duration}</span>
          </div>
        </div>

        {/* Title */}
         <h3
           className={`text-lg font-serif font-bold tracking-tight mb-3 transition-colors ${
            isActive ? "text-white" : "text-neutral-200 group-hover:text-white"
          }`}
        >
          {step.title}
        </h3>

        {/* Description */}
         <p className="text-neutral-400 text-sm leading-relaxed mb-6 font-sans">
          {step.description}
        </p>
      </div>

      {/* Footer Pill Action */}
      <div className="relative z-10 pt-4 border-t border-white/5 flex items-center justify-between text-xs">
        <span
          className={`font-mono transition-colors ${
            isActive
              ? isCyan
                ? "text-cyan-400"
                : "text-amber-400"
              : "text-neutral-500 group-hover:text-neutral-300"
          }`}
        >
          {isActive ? "Active Stage" : "Explore Phase"}
        </span>
        <ArrowRight
          className={`w-4 h-4 transition-transform duration-300 ${
            isActive
              ? isCyan
                ? "text-cyan-400 translate-x-1"
                : "text-amber-400 translate-x-1"
              : "text-neutral-600 group-hover:text-neutral-300 group-hover:translate-x-1"
          }`}
        />
      </div>
    </div>
  );
};

export default function Process(): React.JSX.Element {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);

  // Auto-cycle through steps if autoplay is enabled
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev % stepsData.length) + 1);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentStepData = stepsData.find((s) => s.id === activeStep) || stepsData[0];
  const isCurrentCyan = currentStepData.accent === "cyan";

  return (
    <section className="relative w-full bg-[#03070b] text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Background Ambience / Subtle Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

       <div className="relative max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="max-w-3xl mb-16 md:mb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 text-xs sm:text-sm font-medium tracking-wide mb-6 shadow-[0_0_15px_rgba(0,200,255,0.15)]">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>How it works</span>
          </div>

          {/* Heading */}
           <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-white mb-6 leading-[1.1]">
            From Idea to{" "}
            <span className="bg-gradient-to-r from-[#00b4d8] via-[#00f2fe] to-[#38bdf8] bg-clip-text text-transparent italic font-serif">
              Live Product
            </span>
          </h2>

          {/* Subtitle */}
           <p className="text-neutral-400 text-base md:text-lg font-light tracking-wide max-w-xl">
            A simple 4-step process — no jargon, no confusion.
          </p>
        </div>

        {/* 4 Cards Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {stepsData.map((step) => (
            <StepCard
              key={step.id}
              step={step}
              isActive={activeStep === step.id}
              isHovered={hoveredStep === step.id}
              onClick={() => {
                setActiveStep(step.id);
                setIsAutoPlaying(false);
              }}
              onMouseEnter={() => setHoveredStep(step.id)}
              onMouseLeave={() => setHoveredStep(null)}
            />
          ))}
        </div>

        {/* Deep Dive Milestone Preview Drawer */}
         <div className="mt-10 p-6 rounded-2xl border border-white/10 bg-[#080d14]/70 backdrop-blur-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/5">
            <div className="flex items-center gap-4">
              <div
                className={`p-3 rounded-xl border ${
                  isCurrentCyan
                    ? "border-cyan-500/30 bg-cyan-950/30 text-cyan-400 shadow-[0_0_15px_rgba(0,200,255,0.2)]"
                    : "border-amber-500/30 bg-amber-950/30 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.2)]"
                }`}
              >
                <currentStepData.icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider font-mono text-neutral-400">
                  Phase {currentStepData.stepNumber} Breakdown
                </span>
                <h4 className="text-lg md:text-xl font-medium text-white">
                  {currentStepData.title} Deliverables
                </h4>
              </div>
            </div>

            {/* Stepper Controls */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsAutoPlaying((prev) => !prev)}
                className={`px-4 py-2 rounded-lg text-xs font-mono border transition-all ${
                  isAutoPlaying
                    ? "border-cyan-500 bg-cyan-950/40 text-cyan-300 shadow-[0_0_12px_rgba(0,200,255,0.25)]"
                    : "border-white/10 text-neutral-400 hover:text-white hover:border-white/20"
                }`}
              >
                {isAutoPlaying ? "⏸ Pause Tour" : "▶ Play Tour"}
              </button>

              <button
                type="button"
                onClick={() => setActiveStep((prev) => (prev % stepsData.length) + 1)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono bg-white/10 hover:bg-white/15 text-white transition-colors"
              >
                <span>Next Step</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Deliverables tags */}
          <div className="pt-6">
            <p className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-3">
              Included in this phase:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {currentStepData.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-sm text-neutral-300"
                >
                  <CheckCircle2
                    className={`w-4 h-4 flex-shrink-0 ${
                      isCurrentCyan ? "text-cyan-400" : "text-amber-400"
                    }`}
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}