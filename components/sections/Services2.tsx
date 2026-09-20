"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Code2,
  Terminal,
  Play,
  RotateCw,
  Globe,
  CheckCircle2,
  XCircle,
  Plus,
  ArrowRight,
  Database,
  
  Send,
  Zap,
  Bot,
  Layers,
  Sparkles,
  Search,
  Radar,
  Activity,
  Maximize2,
  Sliders,
  ChevronRight,
  ShieldCheck,
  TrendingUp,
  Filter,
  RefreshCw
} from "lucide-react";

interface InternalRecord {
  id: string;
  name: string;
  amount: string;
  status: "pending" | "approved" | "rejected";
  time: string;
}


function WebDevCard() {
  const [codeIndex, setCodeIndex] = useState(0);
  const [isCompiling, setIsCompiling] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isRendered, setIsRendered] = useState(false);
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");
  const [siteStat, setSiteStat] = useState<"ready" | "deployed">("ready");

  const rawCodeLines = [
    'export default function App() {',
    '  const { data } = useStreamEngine();',
    '  return (',
    '    <HeroContainer theme="dark">',
    '      <InteractiveGrid live />',
    '      <DeployCTA latency="12ms" />',
    '    </HeroContainer>',
    '  );',
    '}'
  ];

  // Automated typing and compilation loop
  const triggerSimulation = useCallback(() => {
    setCodeIndex(0);
    setIsCompiling(false);
    setProgress(0);
    setIsRendered(false);
    setSiteStat("ready");

    let line = 0;
    const typeInterval = setInterval(() => {
      line += 1;
      setCodeIndex(line);
      if (line >= rawCodeLines.length) {
        clearInterval(typeInterval);
        setIsCompiling(true);
        
        let p = 0;
        const progInterval = setInterval(() => {
          p += 15;
          setProgress(Math.min(p, 100));
          if (p >= 100) {
            clearInterval(progInterval);
            setIsCompiling(false);
            setIsRendered(true);
          }
        }, 80);
      }
    }, 130);
  }, []);

  useEffect(() => {
    triggerSimulation();
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
              <h3 className="text-xl font-bold tracking-tight text-white">Full-Stack Web Development</h3>
            </div>
          </div>
          <span className="rounded border border-cyan-900/80 bg-cyan-950/60 px-2.5 py-0.5 font-mono text-[11px] text-cyan-300">
            Vite 6.0 HMR
          </span>
        </div>

        <p className="mb-5 text-sm text-slate-400 leading-relaxed">
          Dynamic code generation with sub-second hot-module recompilation directly rendered into high-fidelity, interactive browser frames.
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
                <Terminal className="h-3 w-3 text-cyan-400" /> HeroView.tsx
              </span>
            </div>

            <div className="flex items-center gap-2 font-mono text-[11px]">
              <div className="hidden sm:flex rounded border border-slate-800 bg-black/40 p-0.5">
                <button
                  type="button"
                  onClick={() => setViewMode("desktop")}
                  className={`px-2 py-0.5 rounded transition-all ${viewMode === "desktop" ? "bg-slate-800 text-cyan-300" : "text-slate-500 hover:text-slate-300"}`}
                >
                  Desktop
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("mobile")}
                  className={`px-2 py-0.5 rounded transition-all ${viewMode === "mobile" ? "bg-slate-800 text-cyan-300" : "text-slate-500 hover:text-slate-300"}`}
                >
                  Mobile
                </button>
              </div>
              <button
                type="button"
                onClick={triggerSimulation}
                className="flex items-center gap-1 rounded border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1 text-cyan-300 transition-colors hover:bg-cyan-500/20 active:scale-95"
              >
                <RotateCw className="h-3 w-3" /> Replay
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
                  <span className={`font-bold ${isCompiling ? "text-cyan-400 animate-pulse" : isRendered ? "text-emerald-400" : "text-amber-400"}`}>
                    {isCompiling ? "COMPILING..." : isRendered ? "200 OK (11ms)" : "WRITING..."}
                  </span>
                </div>

                {rawCodeLines.slice(0, codeIndex).map((line, idx) => (
                  <div key={idx} className="whitespace-pre truncate text-slate-300">
                    <span className="mr-2 select-none text-slate-600">{idx + 1}</span>
                    <span className={line.includes("export") || line.includes("return") ? "text-purple-400" : line.includes("const") ? "text-blue-400" : line.includes("<") ? "text-cyan-400" : "text-slate-200"}>
                      {line}
                    </span>
                  </div>
                ))}
              </div>

              {/* Compilation Tracker */}
              <div className="mt-3 border-t border-slate-800/80 pt-2">
                <div className="mb-1 flex justify-between text-[10px] text-slate-500">
                  <span>{isCompiling ? "Optimizing AST chunks..." : isRendered ? "Bundle emitted: 14.2kb" : "Listening for keystrokes..."}</span>
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
            <div className={`relative flex flex-col justify-between rounded-lg border border-slate-800/90 bg-slate-950 p-2.5 transition-all duration-300 ${viewMode === "mobile" ? "max-w-[210px] mx-auto w-full" : "w-full"}`}>
              {/* Top simulated URL bar */}
              <div className="mb-2 flex items-center gap-1.5 border-b border-slate-800/80 pb-2 text-[10px] text-slate-500 font-mono">
                <Globe className="h-3 w-3 text-cyan-400" />
                <div className="flex flex-1 items-center justify-between rounded border border-slate-800 bg-slate-900/90 px-2 py-0.5 text-[9px] text-slate-400 truncate">
                  <span>https://preview.edge/v4</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
              </div>

              {/* Rendered mini web screen */}
              <div className="relative flex flex-1 flex-col justify-between overflow-hidden rounded border border-slate-800/60 bg-gradient-to-b from-slate-900/90 via-[#070b13] to-slate-950 p-2.5">
                {/* White flash effect on compilation finish */}
                <div className={`pointer-events-none absolute inset-0 bg-cyan-400/20 transition-opacity duration-500 ${isRendered ? "opacity-0" : "opacity-0"}`} />

                <div className="space-y-2">
                  <div className="flex items-center justify-between border-b border-slate-800/60 pb-1">
                    <span className="text-[10px] font-extrabold tracking-wider text-white">NEBULA.IO</span>
                    <span className="h-1 w-6 rounded-full bg-cyan-400/60" />
                  </div>

                  <div className="text-center py-1">
                    <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-1.5 py-0.5 font-mono text-[8px] text-cyan-300">
                      Edge Hydration 100%
                    </span>
                    <h4 className="mt-1 text-xs font-bold text-white tracking-tight leading-tight">
                      Zero Latency Engine
                    </h4>
                    <p className="mt-0.5 text-[8px] text-slate-400 leading-snug">
                      Distributed static-first infrastructure.
                    </p>
                  </div>

                  <div className="flex justify-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setSiteStat(s => s === "ready" ? "deployed" : "ready")}
                      className={`px-2 py-1 rounded text-[9px] font-bold font-mono transition-all ${siteStat === "deployed" ? "bg-emerald-400 text-black" : "bg-cyan-500 text-black hover:bg-cyan-400"}`}
                    >
                      {siteStat === "deployed" ? "✓ Active" : "Deploy"}
                    </button>
                    <span className="rounded border border-slate-800 bg-slate-900 px-2 py-1 text-[9px] text-slate-400 font-mono">
                      Docs
                    </span>
                  </div>
                </div>

                <div className="mt-2 grid grid-cols-2 gap-1 border-t border-slate-800/70 pt-1.5 text-center font-mono">
                  <div className="rounded bg-black/40 p-1 border border-slate-800/80">
                    <span className="text-[7px] text-slate-500 block">LIGHTHOUSE</span>
                    <span className="text-[10px] font-bold text-emerald-400">100 / 100</span>
                  </div>
                  <div className="rounded bg-black/40 p-1 border border-slate-800/80">
                    <span className="text-[7px] text-slate-500 block">TTFB SPEED</span>
                    <span className="text-[10px] font-bold text-cyan-400">14 ms</span>
                  </div>
                </div>
              </div>

              <div className="mt-2 flex items-center justify-between text-[9px] font-mono text-slate-500">
                <span>DOM Interactive</span>
                <span className="text-cyan-400">Next.js 15 App Router</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer tags */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-slate-800/90 pt-4">
        <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-slate-400">
          <span className="rounded border border-slate-800 bg-slate-950/70 px-2 py-0.5">React 19</span>
          <span className="rounded border border-slate-800 bg-slate-950/70 px-2 py-0.5">Next.js Edge</span>
          <span className="rounded border border-slate-800 bg-slate-950/70 px-2 py-0.5">Tailwind 4</span>
        </div>
        <span className="flex items-center gap-1 text-xs font-semibold text-cyan-400">
          Scalable Core <ChevronRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </div>
  );
}

function AIAutomationCard() {
  const [isRunning, setIsRunning] = useState(false);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [execTime, setExecTime] = useState<number>(0);
  const [statusMsg, setStatusMsg] = useState("Pipeline idle. Click 'Run Flow' to test autonomous execution.");

  const runWorkflow = useCallback(() => {
    if (isRunning) return;
    setIsRunning(true);
    setActiveStep(1);
    setStatusMsg("Webhook triggered: Ingesting encrypted client JSON payload...");
    const start = performance.now();

    setTimeout(() => {
      setActiveStep(2);
      setStatusMsg("LLM Agent: Parsing intent with gpt-4o-mini & schema validation...");

      setTimeout(() => {
        setActiveStep(3);
        setStatusMsg("Parallel dispatch: Querying Pinecone Vector Index & sending Slack notification...");

        setTimeout(() => {
          setActiveStep(4);
          const total = Math.round(performance.now() - start);
          setExecTime(total);
          setStatusMsg(`Execution successful. All 4 nodes resolved in ${total}ms with 0 failures.`);
          setIsRunning(false);
        }, 800);
      }, 750);
    }, 650);
  }, [isRunning]);

  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_0_35px_-8px_rgba(168,85,247,0.18)]">
      {/* Top ambient highlight */}
      <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-40 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Header */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 text-purple-400 shadow-inner">
              <Bot className="h-5 w-5" />
            </div>
            <div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-purple-400">
                Service 02 // Agentic Workflows
              </span>
              <h3 className="text-xl font-bold tracking-tight text-white">AI & n8n Automation</h3>
            </div>
          </div>
          <span className="rounded border border-purple-900/80 bg-purple-950/60 px-2.5 py-0.5 font-mono text-[11px] text-purple-300">
            Self-Healing Canvas
          </span>
        </div>

        <p className="mb-5 text-sm text-slate-400 leading-relaxed">
          Production-grade n8n node topologies. Connecting multi-agent LLM reasoning, Pinecone vector memories, and live enterprise connectors.
        </p>

        {/* n8n Node Canvas Container */}
        <div className="relative overflow-hidden rounded-xl border border-slate-800/90 bg-[#080b13] shadow-2xl">
          {/* Canvas Toolbar */}
          <div className="flex items-center justify-between border-b border-slate-800/90 bg-slate-900/80 px-3.5 py-2 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-rose-500 animate-ping" />
              <span className="font-bold text-slate-200">n8n // Workflow Orchestrator</span>
            </div>
            <button
              type="button"
              onClick={runWorkflow}
              disabled={isRunning}
              className="flex items-center gap-1.5 rounded border border-purple-500/40 bg-purple-500/20 px-2.5 py-1 font-mono text-[11px] text-purple-300 transition-all hover:bg-purple-500/30 active:scale-95 disabled:opacity-50"
            >
              <Play className="h-3 w-3 fill-purple-400 text-purple-400" />
              <span>{isRunning ? "Executing..." : "Run Flow"}</span>
            </button>
          </div>

          {/* Node Grid with Animated Curved Beziers */}
          <div className="relative min-h-[280px] p-4 bg-[#060911]">
            {/* SVG Bezier Connectors Overlay */}
            <svg className="pointer-events-none absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="n8nGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f43f5e" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>

              {/* Wire 1: Node 1 -> Node 2 */}
              <path
                d="M 120,50 C 180,50 180,120 230,120"
                fill="none"
                stroke={activeStep >= 1 ? "#a855f7" : "#334155"}
                strokeWidth="2"
                strokeDasharray={activeStep >= 1 ? "4,4" : "none"}
                className={activeStep >= 1 ? "animate-[flowDash_1.2s_linear_infinite]" : ""}
              />
              {/* Wire 2: Node 2 -> Node 3 (Pinecone) */}
              <path
                d="M 345,120 C 390,120 390,50 435,50"
                fill="none"
                stroke={activeStep >= 2 ? "#06b6d4" : "#334155"}
                strokeWidth="2"
                strokeDasharray={activeStep >= 2 ? "4,4" : "none"}
                className={activeStep >= 2 ? "animate-[flowDash_1.2s_linear_infinite]" : ""}
              />
              {/* Wire 3: Node 2 -> Node 4 (Slack) */}
              <path
                d="M 345,120 C 390,120 390,195 435,195"
                fill="none"
                stroke={activeStep >= 3 ? "#10b981" : "#334155"}
                strokeWidth="2"
                strokeDasharray={activeStep >= 3 ? "4,4" : "none"}
                className={activeStep >= 3 ? "animate-[flowDash_1.2s_linear_infinite]" : ""}
              />
            </svg>

            {/* Interactive Nodes Columns */}
            <div className="relative z-10 grid grid-cols-3 gap-3">
              {/* Node 1: Webhook */}
              <div className="flex flex-col justify-center">
                <div
                  className={`rounded-xl border p-2.5 transition-all duration-300 bg-slate-950/90 ${
                    activeStep === 1
                      ? "border-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.4)] scale-105"
                      : activeStep > 1
                      ? "border-emerald-500/60"
                      : "border-slate-800"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-1.5">
                      <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-rose-500/20 text-rose-400">
                        <Zap className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-[11px] font-bold text-white">Webhook</span>
                    </div>
                    <span className="rounded bg-rose-950/80 px-1 py-0.5 font-mono text-[8px] text-rose-400 border border-rose-800/60">
                      {activeStep >= 1 ? "200 IN" : "POST"}
                    </span>
                  </div>
                  <div className="font-mono text-[9px] text-slate-400">/v1/trigger</div>
                </div>
              </div>

              {/* Node 2: LLM Reasoning Agent */}
              <div className="flex flex-col justify-center">
                <div
                  className={`rounded-xl border p-2.5 transition-all duration-300 bg-slate-950/90 ${
                    activeStep === 2
                      ? "border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.4)] scale-105"
                      : activeStep > 2
                      ? "border-emerald-500/60"
                      : "border-slate-800"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-1.5">
                      <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-purple-500/20 text-purple-400">
                        <Bot className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-[11px] font-bold text-white">LLM Agent</span>
                    </div>
                    <span className="rounded bg-purple-950/80 px-1 py-0.5 font-mono text-[8px] text-purple-300 border border-purple-800/60">
                      {activeStep === 2 ? "THINKING" : activeStep > 2 ? "DONE" : "IDLE"}
                    </span>
                  </div>
                  <div className="font-mono text-[9px] text-slate-400">gpt-4o-mini / reasoning</div>
                </div>
              </div>

              {/* Stacked Outputs (Pinecone & Slack) */}
              <div className="flex flex-col justify-center space-y-3">
                {/* Node 3: Pinecone RAG */}
                <div
                  className={`rounded-xl border p-2 transition-all duration-300 bg-slate-950/90 ${
                    activeStep >= 3 ? "border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.3)]" : "border-slate-800"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-1">
                      <Database className="h-3.5 w-3.5 text-cyan-400" />
                      <span className="text-[10px] font-bold text-white">Pinecone</span>
                    </div>
                    <span className="text-[8px] font-mono text-cyan-300">
                      {activeStep >= 3 ? "SIM 0.96" : "IDLE"}
                    </span>
                  </div>
                  <div className="text-[8px] font-mono text-slate-400">Cosine Match</div>
                </div>

                {/* Node 4: Slack Dispatch */}
                <div
                  className={`rounded-xl border p-2 transition-all duration-300 bg-slate-950/90 ${
                    activeStep >= 3 ? "border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]" : "border-slate-800"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-1">
                      <Send className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-[10px] font-bold text-white">Slack Sync</span>
                    </div>
                    <span className="text-[8px] font-mono text-emerald-400">
                      {activeStep >= 3 ? "DELIVERED" : "QUEUE"}
                    </span>
                  </div>
                  <div className="text-[8px] font-mono text-slate-400">#ops-alerts</div>
                </div>
              </div>
            </div>

            {/* Execution Telemetry Console Bar */}
            <div className="mt-4 flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950/90 p-2 font-mono text-[10px] text-slate-400">
              <div className="flex items-center gap-1.5 truncate">
                <span className={`h-1.5 w-1.5 rounded-full ${isRunning ? "bg-purple-400 animate-ping" : "bg-emerald-400"}`} />
                <span className="truncate text-slate-300">{statusMsg}</span>
              </div>
              <span className="ml-2 font-bold text-purple-400 shrink-0">
                {execTime > 0 ? `${execTime} ms` : "Standby"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer tags */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-slate-800/90 pt-4">
        <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-slate-400">
          <span className="rounded border border-slate-800 bg-slate-950/70 px-2 py-0.5">n8n Cloud</span>
          <span className="rounded border border-slate-800 bg-slate-950/70 px-2 py-0.5">LangChain</span>
          <span className="rounded border border-slate-800 bg-slate-950/70 px-2 py-0.5">Pinecone RAG</span>
        </div>
        <span className="flex items-center gap-1 text-xs font-semibold text-purple-400">
          Orchestration <ChevronRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </div>
  );
}

function InternalToolsCard() {
  const [records, setRecords] = useState<InternalRecord[]>([
    { id: "TX-9041", name: "AeroDynamics Inc", amount: "$14,200.00", status: "pending", time: "Just now" },
    { id: "TX-9042", name: "BioGen Matrix", amount: "$38,450.00", status: "pending", time: "2m ago" },
    { id: "TX-9043", name: "Helios Energy", amount: "$7,900.00", status: "pending", time: "5m ago" },
  ]);

  const [count, setCount] = useState(3);

  const handleStatusChange = (id: string, newStatus: "approved" | "rejected") => {
    setRecords(prev =>
      prev.map(r => (r.id === id ? { ...r, status: newStatus } : r))
    );
    setCount(c => Math.max(0, c - 1));
  };

  const addRecord = () => {
    const clients = ["Apex Quantum", "Veloce Robotics", "Hyperion AI", "Solaria Labs"];
    const randomName = clients[Math.floor(Math.random() * clients.length)];
    const randomAmount = `$${(Math.floor(Math.random() * 40) + 10)},000.00`;
    const newId = `TX-${Math.floor(Math.random() * 900 + 9100)}`;

    const newRec: InternalRecord = {
      id: newId,
      name: randomName,
      amount: randomAmount,
      status: "pending",
      time: "Just now"
    };

    setRecords(prev => [newRec, ...prev.slice(0, 3)]);
    setCount(c => c + 1);
  };

  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-amber-500/40 hover:shadow-[0_0_35px_-8px_rgba(245,158,11,0.18)]">
      {/* Top ambient highlight */}
      <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-40 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Header */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/10 text-amber-400 shadow-inner">
              <Layers className="h-5 w-5" />
            </div>
            <div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-amber-400">
                Service 03 // Operations & RBAC
              </span>
              <h3 className="text-xl font-bold tracking-tight text-white">Custom Internal Tools</h3>
            </div>
          </div>
          <span className="rounded border border-amber-900/80 bg-amber-950/60 px-2.5 py-0.5 font-mono text-[11px] text-amber-300">
            Postgres 16
          </span>
        </div>

        <p className="mb-5 text-sm text-slate-400 leading-relaxed">
          High-velocity administrative consoles, real-time database mutations, optimistic approval workflows, and audit trails.
        </p>

        {/* Console Workspace Mockup */}
        <div className="overflow-hidden rounded-xl border border-slate-800/90 bg-[#080b13] shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800/90 bg-slate-900/80 px-3.5 py-2 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-200">OpsDesk // Production CRUD</span>
              <span className="rounded border border-emerald-800/60 bg-emerald-950/80 px-1.5 py-0.5 text-[9px] text-emerald-400">
                CONNECTED
              </span>
            </div>
            <button
              type="button"
              onClick={addRecord}
              className="flex items-center gap-1 rounded border border-amber-500/40 bg-amber-500/20 px-2 py-1 text-[11px] text-amber-300 transition-colors hover:bg-amber-500/30 active:scale-95"
            >
              <Plus className="h-3 w-3" /> Insert Row
            </button>
          </div>

          {/* Body Content */}
          <div className="p-3.5 space-y-3 min-h-[280px]">
            {/* KPI Cards */}
            <div className="grid grid-cols-3 gap-2 font-mono">
              <div className="rounded-lg border border-slate-800/80 bg-black/50 p-2">
                <span className="text-[8px] text-slate-500 block">PENDING ACTION</span>
                <span className="text-xs font-bold text-amber-400">{count} Records</span>
              </div>
              <div className="rounded-lg border border-slate-800/80 bg-black/50 p-2">
                <span className="text-[8px] text-slate-500 block">THROUGHPUT</span>
                <span className="text-xs font-bold text-teal-400">14.8k req/m</span>
              </div>
              <div className="rounded-lg border border-slate-800/80 bg-black/50 p-2">
                <span className="text-[8px] text-slate-500 block">REPLICATION</span>
                <span className="text-xs font-bold text-indigo-400">0.4 ms</span>
              </div>
            </div>

            {/* Interactive Records Table */}
            <div className="overflow-hidden rounded-lg border border-slate-800/90 bg-black/40 text-[11px] font-mono">
              <div className="grid grid-cols-12 border-b border-slate-800/80 bg-slate-900/60 px-2.5 py-1.5 text-[10px] text-slate-400">
                <span className="col-span-4">ACCOUNT</span>
                <span className="col-span-3">AMOUNT</span>
                <span className="col-span-2">STATE</span>
                <span className="col-span-3 text-right">ACTION</span>
              </div>

              <div className="divide-y divide-slate-800/60">
                {records.map(record => (
                  <div key={record.id} className="grid grid-cols-12 items-center px-2.5 py-2 hover:bg-slate-900/40 transition-colors">
                    <div className="col-span-4 truncate">
                      <div className="font-semibold text-slate-200 truncate">{record.name}</div>
                      <div className="text-[9px] text-slate-500">{record.id}</div>
                    </div>
                    <div className="col-span-3 text-slate-300">{record.amount}</div>
                    <div className="col-span-2">
                      <span
                        className={`rounded px-1.5 py-0.5 text-[9px] border font-bold ${
                          record.status === "approved"
                            ? "bg-emerald-950/80 border-emerald-700/60 text-emerald-400"
                            : record.status === "rejected"
                            ? "bg-rose-950/80 border-rose-700/60 text-rose-400"
                            : "bg-amber-950/80 border-amber-700/60 text-amber-300"
                        }`}
                      >
                        {record.status.toUpperCase()}
                      </span>
                    </div>
                    <div className="col-span-3 flex justify-end gap-1">
                      {record.status === "pending" ? (
                        <>
                          <button
                            type="button"
                            onClick={() => handleStatusChange(record.id, "approved")}
                            className="rounded border border-emerald-500/40 bg-emerald-500/20 px-1.5 py-0.5 text-[10px] text-emerald-300 hover:bg-emerald-500/30"
                          >
                            Approve
                          </button>
                          <button
                            type="button"
                            onClick={() => handleStatusChange(record.id, "rejected")}
                            className="rounded border border-rose-500/40 bg-rose-500/20 px-1.5 py-0.5 text-[10px] text-rose-300 hover:bg-rose-500/30"
                          >
                            ✕
                          </button>
                        </>
                      ) : (
                        <span className="text-[10px] text-slate-500">Committed</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
              <span>Optimistic UI • ACID Compliant</span>
              <span className="text-amber-400">Zero Spreadsheet Sprawl</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer tags */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-slate-800/90 pt-4">
        <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-slate-400">
          <span className="rounded border border-slate-800 bg-slate-950/70 px-2 py-0.5">Retool / React</span>
          <span className="rounded border border-slate-800 bg-slate-950/70 px-2 py-0.5">PostgreSQL</span>
          <span className="rounded border border-slate-800 bg-slate-950/70 px-2 py-0.5">OAuth2 RBAC</span>
        </div>
        <span className="flex items-center gap-1 text-xs font-semibold text-amber-400">
          Ops Platform <ChevronRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </div>
  );
}

export interface LeadRecord {
  id: string;
  company: string;
  title: string;
  icp: number;
  funding: string;
  status: "verified" | "pending";
}

const CANDIDATE_POOL = [
  { company: "Voxel Data AI", title: "Founder & CTO", icp: 98, funding: "$12M Seed" },
  { company: "Nexus Gridworks", title: "Director of Systems", icp: 95, funding: "Enterprise" },
  { company: "Aura Robotics", title: "VP Product Eng", icp: 97, funding: "$32M Series B" },
  { company: "Krypton Core", title: "Head of Infrastructure", icp: 94, funding: "$8M Seed" },
  { company: "Spectra Bio", title: "VP Bioinformatics", icp: 99, funding: "$22M Series A" },
];

export function LeadGenCard() {
  const [leads, setLeads] = useState<LeadRecord[]>([
    { id: "L-1", company: "Synthetix Bio", title: "VP of Engineering", icp: 99, funding: "$18M Series A", status: "verified" },
    { id: "L-2", company: "CloudScale HQ", title: "Head of Infrastructure", icp: 96, funding: "120 Emps", status: "verified" },
    { id: "L-3", company: "HyperQuantum", title: "Chief Technology Officer", icp: 92, funding: "Series B", status: "verified" },
  ]);

  const [scanning, setScanning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const scanNewLead = () => {
    if (scanning) return;
    setScanning(true);

    timerRef.current = setTimeout(() => {
      const pick = CANDIDATE_POOL[Math.floor(Math.random() * CANDIDATE_POOL.length)];
      const newLead: LeadRecord = {
        id: `L-${Date.now()}`,
        company: pick.company,
        title: pick.title,
        icp: pick.icp,
        funding: pick.funding,
        status: "verified",
      };

      // Maintains top 3 most recent leads
      setLeads((prev) => [newLead, ...prev.slice(0, 2)]);
      setScanning(false);
    }, 750);
  };

  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-rose-500/40 hover:shadow-[0_0_35px_-8px_rgba(244,63,94,0.18)] max-w-xl mx-auto">
      {/* Top ambient glow */}
      <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent opacity-40 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Header */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-rose-500/20 bg-rose-500/10 text-rose-400 shadow-inner">
              <Radar className="h-5 w-5" />
            </div>
            <div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-rose-400">
                Service 04 // Outbound Growth
              </span>
              <h3 className="text-xl font-bold tracking-tight text-white">
                Algorithmic Lead Generation
              </h3>
            </div>
          </div>
          <span className="rounded border border-rose-900/80 bg-rose-950/60 px-2.5 py-0.5 font-mono text-[11px] text-rose-300">
            Waterfall Discovery
          </span>
        </div>

        <p className="mb-5 text-sm text-slate-400 leading-relaxed">
          Autonomous buyer intent surveillance, multi-vendor waterfall contact enrichment (Apollo + Crustdata), and verified prospect routing.
        </p>

        {/* Radar & Feed Panel */}
        <div className="overflow-hidden rounded-xl border border-slate-800/90 bg-[#080b13] shadow-2xl">
          {/* Subheader */}
          <div className="flex items-center justify-between border-b border-slate-800/90 bg-slate-900/80 px-3.5 py-2 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-500" />
              </span>
              <span className="font-bold text-slate-200">Intent Radar // High-Growth B2B</span>
            </div>
            <button
              type="button"
              onClick={scanNewLead}
              disabled={scanning}
              className="flex items-center gap-1.5 rounded border border-rose-500/40 bg-rose-500/20 px-2.5 py-1 text-[11px] font-semibold text-rose-300 transition-all hover:bg-rose-500/30 active:scale-95 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
            >
              {scanning ? (
                <RefreshCw className="h-3 w-3 animate-spin text-rose-300" />
              ) : (
                <Search className="h-3 w-3" />
              )}
              {scanning ? "Scanning..." : "Acquire Target"}
            </button>
          </div>

          {/* Radar & Cards Grid */}
          <div className="grid min-h-[280px] grid-cols-1 gap-3 p-3 sm:grid-cols-2">
            {/* Radar Scope */}
            <div className="relative flex items-center justify-center overflow-hidden rounded-lg border border-slate-800/80 bg-slate-950 p-2 aspect-square sm:aspect-auto">
              {/* Concentric rings */}
              <div className="absolute h-44 w-44 rounded-full border border-rose-500/15" />
              <div className="absolute h-32 w-32 rounded-full border border-rose-500/25" />
              <div className="absolute h-16 w-16 rounded-full border border-rose-500/35" />
              
              {/* Crosshairs */}
              <div className="absolute h-full w-px bg-rose-500/20" />
              <div className="absolute h-px w-full bg-rose-500/20" />

              {/* Rotating Sweep (Self-contained CSS rotation) */}
              <div
                className="pointer-events-none absolute inset-0 origin-center animate-spin"
                style={{
                  animationDuration: "4s",
                  background: "conic-gradient(from 0deg, transparent 270deg, rgba(244, 63, 94, 0.4) 360deg)",
                }}
              />

              {/* Target Blips */}
              <div className="absolute top-8 right-10 h-2.5 w-2.5 rounded-full bg-rose-400 shadow-[0_0_10px_#f43f5e] animate-ping" />
              <div className="absolute top-8 right-10 h-2.5 w-2.5 rounded-full bg-rose-400 shadow-[0_0_8px_#f43f5e]" />

              <div className="absolute bottom-10 left-9 h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#10b981] animate-pulse" />
              <div className="absolute top-16 left-12 h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#06b6d4] animate-pulse" />

              <div className="absolute bottom-2 left-2 rounded border border-rose-900/60 bg-black/75 px-1.5 py-0.5 font-mono text-[9px] text-rose-400">
                ACTIVE RADAR SWEEP
              </div>
            </div>

            {/* Enriched Lead Cards */}
            <div className="flex flex-col justify-between rounded-lg border border-slate-800/80 bg-black/40 p-2.5 font-mono">
              <div className="space-y-1.5">
                {leads.map((lead) => (
                  <div
                    key={lead.id}
                    className="flex items-center justify-between rounded border border-slate-800 bg-slate-900/80 p-2 text-[11px] transition-all hover:border-slate-700"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5 font-bold text-slate-200">
                        <span className="truncate">{lead.company}</span>
                        <CheckCircle2 className="h-3 w-3 shrink-0 text-emerald-400" />
                      </div>
                      <div className="text-[9px] text-slate-400 truncate">
                        {lead.title} • {lead.funding}
                      </div>
                    </div>
                    <span className="shrink-0 whitespace-nowrap rounded border border-emerald-700/60 bg-emerald-950/80 px-1.5 py-0.5 text-[10px] font-bold text-emerald-400">
                      {lead.icp}% ICP
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-2 flex items-center justify-between border-t border-slate-800/80 pt-2 text-[10px] text-slate-400">
                <span className="text-rose-400">Enriched: Apollo + Clay</span>
                <span className="font-bold text-emerald-400">52.4% Open Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Tags */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-slate-800/90 pt-4">
        <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-slate-400">
          <span className="rounded border border-slate-800 bg-slate-950/70 px-2 py-0.5">Waterfall API</span>
          <span className="rounded border border-slate-800 bg-slate-950/70 px-2 py-0.5">Intent Signals</span>
          <span className="rounded border border-slate-800 bg-slate-950/70 px-2 py-0.5">HubSpot Ready</span>
        </div>
        <span className="flex items-center gap-1 text-xs font-semibold text-rose-400">
          Growth Engine <ChevronRight className="h-3.5 w-3.5" />
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
            Interactive Core Capabilities
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Engineered For Scale. <br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 bg-clip-text text-transparent">
              Autonomous, Fast, and Mission-Critical.
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-400 sm:text-lg leading-relaxed">
            Test and interact with each dynamic system below. We bridge high-performance frontend architecture with autonomous n8n workflows and revenue engines.
          </p>
        </div>

        {/* The 4 Exclusive Service Cards Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Service 1: Web Development */}
          <WebDevCard />

          {/* Service 2: AI Automation (n8n canvas) */}
          <AIAutomationCard />

          {/* Service 3: Internal Operations Tools */}
          <InternalToolsCard />

          {/* Service 4: Algorithmic Lead Generation */}
          <LeadGenCard />
        </div>
      </div>
    </section>
  );
}