"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Sora } from "next/font/google";

// If you don't want an extra font fetch at build time, delete this import
// and the `sora.className` usage below — the headline will fall back to
// your default sans-serif stack.
const sora = Sora({ subsets: ["latin"], weight: ["600", "700"] });

type OrbitNode = {
  id: number;
  radius: number; // orbit radius in px
  size: number; // dot diameter in px
  duration: number; // full orbit time in seconds
  phase: number; // seconds of negative delay -> starting position on the ring
  color: string; // glow / fill color
};

// Three rings of nodes. Radius sets which ring, phase spreads nodes around
// the ring, duration + color are varied so the motion doesn't feel mechanical.
const NODES: OrbitNode[] = [
  { id: 1, radius: 140, size: 10, duration: 22, phase: 0, color: "#E3A857" },
  { id: 2, radius: 140, size: 8, duration: 22, phase: 7.3, color: "#5FD8C4" },
  { id: 3, radius: 140, size: 12, duration: 22, phase: 14.6, color: "#E38696" },

  { id: 4, radius: 230, size: 14, duration: 34, phase: 3, color: "#5FD8C4" },
  { id: 5, radius: 230, size: 9, duration: 34, phase: 14.3, color: "#E3A857" },
  { id: 6, radius: 230, size: 16, duration: 34, phase: 25.6, color: "#E38696" },

  { id: 7, radius: 320, size: 8, duration: 46, phase: 5, color: "#E38696" },
  { id: 8, radius: 320, size: 20, duration: 46, phase: 20.3, color: "#E3A857" },
  { id: 9, radius: 320, size: 11, duration: 46, phase: 35.6, color: "#5FD8C4" },
];

const RING_DIAMETERS = [280, 460, 640];

export default function HeroSection() {
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [pulseKeys, setPulseKeys] = useState<Record<number, number>>({});
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Works for both a mouse hover-in and a tap: same handler, same visual
  // result. Tap additionally replays the ripple and auto-releases after
  // ~900ms so the node doesn't stay "stuck" active on touch devices.
  const activate = useCallback((id: number, isTap: boolean) => {
    setActiveNode(id);
    if (isTap) {
      setPulseKeys((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setActiveNode((current) => (current === id ? null : current));
      }, 900);
    }
  }, []);

  const release = useCallback((id: number) => {
    setActiveNode((current) => (current === id ? null : current));
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0B1120] px-6">
      {/* grain texture, no external image needed */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* radial glow behind the core */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(227,168,87,0.16) 0%, rgba(11,17,32,0) 70%)",
        }}
      />

      {/* concentric rings */}
      <div className="orbit-scale absolute inset-0 z-0">
        {RING_DIAMETERS.map((d) => (
          <div
            key={d}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]"
            style={{ width: d, height: d }}
          />
        ))}

        {/* orbiting nodes */}
        {NODES.map((node) => (
          <div
            key={node.id}
            className="absolute left-1/2 top-1/2"
            style={{
              animation: `orbit ${node.duration}s linear infinite`,
              animationDelay: `-${node.phase}s`,
            }}
          >
            <div
              className="absolute"
              style={{ transform: `translateX(${node.radius}px)` }}
            >
              <button
                type="button"
                aria-label="Interactive node"
                onMouseEnter={() => activate(node.id, false)}
                onMouseLeave={() => release(node.id)}
                onClick={() => activate(node.id, true)}
                className={`orbit-node relative -translate-x-1/2 -translate-y-1/2 rounded-full ${
                  activeNode === node.id ? "is-active" : ""
                }`}
                style={
                  {
                    width: node.size,
                    height: node.size,
                    background: node.color,
                    "--glow": node.color,
                  } as React.CSSProperties
                }
              >
                {pulseKeys[node.id] ? (
                  <span
                    key={pulseKeys[node.id]}
                    className="pointer-events-none absolute inset-0 rounded-full"
                    style={{
                      border: `1px solid ${node.color}`,
                      animation: "ripple 0.7s ease-out",
                    }}
                  />
                ) : null}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* content */}
      <div className="relative z-10 flex max-w-2xl flex-col items-center gap-6 text-center">
        <h1
          className={`${sora.className} text-4xl leading-[1.1] text-white sm:text-5xl md:text-6xl`}
        >
          Automate the busywork.
          <br />
          Keep the judgment calls.
        </h1>
        <p className="max-w-xl text-balance text-base text-white/60 sm:text-lg">
          I build the dashboards, pipelines and workflows that let wholesale,
          distribution and retail teams run on data instead of guesswork —
          wired with n8n, FastAPI and Metabase to how your business actually
          operates.
        </p>

        <div className="mt-2 flex flex-col items-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() =>
              document
                .getElementById("systems")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 text-sm font-medium text-white transition-colors hover:border-[#E3A857]/60 hover:bg-white/10"
          >
            See how it works
          </button>
          <button
            type="button"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex h-12 items-center gap-2 rounded-xl bg-[#E3A857] px-6 text-sm font-semibold text-[#0B1120] transition-transform hover:scale-[1.03]"
          >
            Book a working session
          </button>
        </div>

        <p className="mt-1 text-xs text-white/30 md:hidden">
          Tap a node above to see it react
        </p>
      </div>

      <style jsx global>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes ripple {
          from {
            transform: scale(0.5);
            opacity: 0.6;
          }
          to {
            transform: scale(2.8);
            opacity: 0;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="animation"] {
            animation: none !important;
          }
        }
      `}</style>

      <style jsx>{`
        .orbit-node {
          box-shadow: 0 0 0 0 transparent;
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }
        .orbit-node:hover,
        .orbit-node.is-active {
          transform: translate(-50%, -50%) scale(1.6);
          box-shadow: 0 0 22px 4px var(--glow);
        }
        .orbit-scale {
          transform: scale(0.55);
        }
        @media (min-width: 640px) {
          .orbit-scale {
            transform: scale(0.78);
          }
        }
        @media (min-width: 1024px) {
          .orbit-scale {
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}