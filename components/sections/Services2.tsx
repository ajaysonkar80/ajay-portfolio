"use client";
import { TypingAnimation } from "@/components/ui/typing-animation";
import React, { useState, useEffect, useCallback } from "react";
import {
  Code2,
  Terminal,
  RotateCw,
  Globe,
  ChevronRight,
} from "lucide-react";


function WebDevCard() {
  const [isCompiling, setIsCompiling] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isRendered, setIsRendered] = useState(false);
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");
  const [siteStat, setSiteStat] = useState<"ready" | "deployed">("ready");
  const [typingKey, setTypingKey] = useState(0);

  const rawCodeLines = [
    "export default function App() {",
    "  const { data } = useStreamEngine();",
    "  return (",
    '    <HeroContainer theme="dark">',
    "      <InteractiveGrid live />",
    '      <DeployCTA latency="12ms" />',
    "    </HeroContainer>",
    "  );",
    "}",
  ];

  // Compilation/render simulation
  const triggerSimulation = useCallback(() => {
    setIsCompiling(false);
    setProgress(0);
    setIsRendered(false);
    setSiteStat("ready");

    // Restart Magic UI typing animation
    setTypingKey((prev) => prev + 1);

    let p = 0;

    const compileDelay = setTimeout(() => {
      setIsCompiling(true);

      const progInterval = setInterval(() => {
        p += 15;
        setProgress(Math.min(p, 100));

        if (p >= 100) {
          clearInterval(progInterval);
          setIsCompiling(false);
          setIsRendered(true);
        }
      }, 80);
    }, 1200);

    return () => {
      clearTimeout(compileDelay);
    };
  }, []);

  useEffect(() => {
    const cleanup = triggerSimulation();
    return cleanup;
  }, [triggerSimulation]);

  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_0_35px_-8px_rgba(6,182,212,0.18)]">
      {/* Top ambient highlight */}
      <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Header */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 shadow-inner">
              <Code2 className="h-5 w-5" />
            </div>

            <div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-cyan-400">
                Service 01 // Core Web
              </span>

              <h3 className="text-lg font-bold tracking-tight text-white">
                Full-Stack Web Development
              </h3>
            </div>
          </div>

          <span className="rounded border border-cyan-900/80 bg-cyan-950/60 px-2.5 py-0.5 font-mono text-[11px] text-cyan-300">
            Vite 6.0 HMR
          </span>
        </div>

        <p className="mb-5 text-sm leading-relaxed text-slate-400">
          Dynamic code generation with sub-second hot-module recompilation
          directly rendered into high-fidelity, interactive browser frames.
        </p>

        {/* IDE & Browser Split Frame */}
        <div className="overflow-hidden rounded-xl border border-slate-800/90 bg-[#090d16] shadow-2xl">
          {/* Mock Browser/IDE Toolbar */}
          <div className="flex items-center justify-between border-b border-slate-800/90 bg-slate-900/80 px-3.5 py-2 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
              </div>

              <span className="ml-1 flex items-center gap-1 font-mono text-[11px] text-slate-300">
                <Terminal className="h-3 w-3 text-cyan-400" />
                HeroView.tsx
              </span>
            </div>

            <div className="flex items-center gap-2 font-mono text-[11px]">
              <div className="hidden rounded border border-slate-800 bg-black/40 p-0.5 sm:flex">
                <button
                  type="button"
                  onClick={() => setViewMode("desktop")}
                  className={`rounded px-2 py-0.5 transition-all ${
                    viewMode === "desktop"
                      ? "bg-slate-800 text-cyan-300"
                      : "text-slate-500 hover:text-slate-300"
                  }`}
                >
                  Desktop
                </button>

                <button
                  type="button"
                  onClick={() => setViewMode("mobile")}
                  className={`rounded px-2 py-0.5 transition-all ${
                    viewMode === "mobile"
                      ? "bg-slate-800 text-cyan-300"
                      : "text-slate-500 hover:text-slate-300"
                  }`}
                >
                  Mobile
                </button>
              </div>

              <button
                type="button"
                onClick={triggerSimulation}
                className="flex items-center gap-1 rounded border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1 text-cyan-300 transition-colors hover:bg-cyan-500/20 active:scale-95"
              >
                <RotateCw className="h-3 w-3" />
                Replay
              </button>
            </div>
          </div>

          {/* Interactive Workspace Body */}
          <div className="grid min-h-[280px] grid-cols-1 gap-3 p-3 text-xs md:grid-cols-2">
            {/* Left: Code Typing Screen */}
            <div className="relative flex flex-col justify-between rounded-lg border border-slate-800/80 bg-black/70 p-3 font-mono text-[11px] leading-relaxed text-slate-300">
              <div className="space-y-1">
                <div className="mb-2 flex items-center justify-between border-b border-slate-800/80 pb-1.5 text-[10px] text-slate-500">
                  <span>TypeScript 5.6 + Tailwind 4</span>

                  <span
                    className={`font-bold ${
                      isCompiling
                        ? "animate-pulse text-cyan-400"
                        : isRendered
                        ? "text-emerald-400"
                        : "text-amber-400"
                    }`}
                  >
                    {isCompiling
                      ? "COMPILING..."
                      : isRendered
                      ? "200 OK (11ms)"
                      : "WRITING..."}
                  </span>
                </div>

                {/* Magic UI Typing Animation */}
                <div className="min-h-[190px] overflow-hidden whitespace-pre-wrap text-slate-300">
                  <TypingAnimation
                    key={typingKey}
                    startOnView
                    loop
                    cursorStyle="underscore"
                    blinkCursor
                    typeSpeed={35}
                    deleteSpeed={20}
                    pauseDelay={1200}
                    className="block whitespace-pre-wrap font-mono text-[11px] leading-relaxed text-slate-300"
                  >
                    {rawCodeLines.join("\n")}
                  </TypingAnimation>
                </div>
              </div>

              {/* Compilation Tracker */}
              <div className="mt-3 border-t border-slate-800/80 pt-2">
                <div className="mb-1 flex justify-between text-[10px] text-slate-500">
                  <span>
                    {isCompiling
                      ? "Optimizing AST chunks..."
                      : isRendered
                      ? "Bundle emitted: 14.2kb"
                      : "Listening for keystrokes..."}
                  </span>

                  <span>{progress}%</span>
                </div>

                <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-teal-400 transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Right: Live Rendered Application Window */}
            <div
              className={`relative flex flex-col justify-between rounded-lg border border-slate-800/90 bg-slate-950 p-2.5 transition-all duration-300 ${
                viewMode === "mobile"
                  ? "mx-auto w-full max-w-[210px]"
                  : "w-full"
              }`}
            >
              {/* Top simulated URL bar */}
              <div className="mb-2 flex items-center gap-1.5 border-b border-slate-800/80 pb-2 font-mono text-[10px] text-slate-500">
                <Globe className="h-3 w-3 text-cyan-400" />

                <div className="flex flex-1 items-center justify-between truncate rounded border border-slate-800 bg-slate-900/90 px-2 py-0.5 text-[9px] text-slate-400">
                  <span>https://preview.edge/v4</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
              </div>

              {/* Rendered mini web screen */}
              <div className="relative flex flex-1 flex-col justify-between overflow-hidden rounded border border-slate-800/60 bg-gradient-to-b from-slate-900/90 via-[#070b13] to-slate-950 p-2.5">
                {/* White flash effect on compilation finish */}
                <div
                  className={`pointer-events-none absolute inset-0 bg-cyan-400/20 transition-opacity duration-500 ${
                    isRendered ? "opacity-0" : "opacity-0"
                  }`}
                />

                <div className="space-y-2">
                  <div className="flex items-center justify-between border-b border-slate-800/60 pb-1">
                    <span className="text-[10px] font-extrabold tracking-wider text-white">
                      NEBULA.IO
                    </span>

                    <span className="h-1 w-6 rounded-full bg-cyan-400/60" />
                  </div>

                  <div className="py-1 text-center">
                    <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-1.5 py-0.5 font-mono text-[8px] text-cyan-300">
                      Edge Hydration 100%
                    </span>

                    <h4 className="mt-1 text-xs font-bold leading-tight tracking-tight text-white">
                      Zero Latency Engine
                    </h4>

                    <p className="mt-0.5 text-[8px] leading-snug text-slate-400">
                      Distributed static-first infrastructure.
                    </p>
                  </div>

                  <div className="flex justify-center gap-1.5">
                    <button
                      type="button"
                      onClick={() =>
                        setSiteStat((s) =>
                          s === "ready" ? "deployed" : "ready"
                        )
                      }
                      className={`rounded px-2 py-1 font-mono text-[9px] font-bold transition-all ${
                        siteStat === "deployed"
                          ? "bg-emerald-400 text-black"
                          : "bg-cyan-500 text-black hover:bg-cyan-400"
                      }`}
                    >
                      {siteStat === "deployed" ? "âœ“ Active" : "Deploy"}
                    </button>

                    <span className="rounded border border-slate-800 bg-slate-900 px-2 py-1 font-mono text-[9px] text-slate-400">
                      Docs
                    </span>
                  </div>
                </div>

                <div className="mt-2 grid grid-cols-2 gap-1 border-t border-slate-800/70 pt-1.5 text-center font-mono">
                  <div className="rounded border border-slate-800/80 bg-black/40 p-1">
                    <span className="block text-[7px] text-slate-500">
                      LIGHTHOUSE
                    </span>

                    <span className="text-[10px] font-bold text-emerald-400">
                      100 / 100
                    </span>
                  </div>

                  <div className="rounded border border-slate-800/80 bg-black/40 p-1">
                    <span className="block text-[7px] text-slate-500">
                      TTFB SPEED
                    </span>

                    <span className="text-[10px] font-bold text-cyan-400">
                      14 ms
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-2 flex items-center justify-between font-mono text-[9px] text-slate-500">
                <span>DOM Interactive</span>

                <span className="text-cyan-400">
                  Next.js 15 App Router
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer tags */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-slate-800/90 pt-4">
        <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-slate-400">
          <span className="rounded border border-slate-800 bg-slate-950/70 px-2 py-0.5">
            React 19
          </span>

          <span className="rounded border border-slate-800 bg-slate-950/70 px-2 py-0.5">
            Next.js Edge
          </span>

          <span className="rounded border border-slate-800 bg-slate-950/70 px-2 py-0.5">
            Tailwind 4
          </span>
        </div>

        <span className="flex items-center gap-1 text-xs font-semibold text-cyan-400">
          Scalable Core
          <ChevronRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </div>
  );
}


export default function Services() {
  return (
    <section className="relative w-full bg-[#06080e] py-16 sm:py-24 selection:bg-cyan-500 selection:text-white">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-cyan-600/10 blur-[140px]" />
        <div className="absolute top-1/2 right-10 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[150px]" />
        <div className="absolute bottom-10 left-1/3 h-[500px] w-[500px] rounded-full bg-rose-600/8 blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-slate-900/80 px-3.5 py-1 text-xs font-mono font-medium uppercase tracking-wider text-cyan-400 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            The Only Service I Offer
          </div>
           <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
             Web Development for Local Businesses in{" "}
             <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 bg-clip-text text-transparent">
               Raipur.
             </span>
           </h2>
           <p className="mt-4 text-base text-slate-400 leading-relaxed">
             One focused offer: a fast, mobile-first website that brings you customers — with
             WhatsApp button, local SEO, contact form, uptime monitoring, and security updates.
             Delivered in 4 days. Try the demo below.
           </p>
        </div>

        {/* Single Service Card */}
        <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
          <WebDevCard />
        </div>
      </div>
    </section>
  );
}
