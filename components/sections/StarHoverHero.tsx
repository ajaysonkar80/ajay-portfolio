"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  z: number;
  size: number;
  alpha: number;
  twinkle: number;
  twinkleSpeed: number;
  driftX: number;
  driftY: number;
};

type OrbitStar = {
  angle: number;
  radius: number;
  speed: number;
  size: number;
  alpha: number;
  color: string;
  phase: number;
};

export default function StarHoverHeroSection() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", {
      alpha: true,
      desynchronized: true,
    });

    if (!ctx) return;

    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;

    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const pointer = {
      x: 0.5,
      y: 0.5,
      targetX: 0.5,
      targetY: 0.5,
      active: false,
    };

    const stars: Star[] = [];
    const orbitStars: OrbitStar[] = [];

    const STAR_COUNT = reducedMotion
      ? 180
      : isTouchDevice
      ? 450
      : 800;

    const ORBIT_STAR_COUNT = reducedMotion ? 8 : 16;

    const rand = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const createStar = (): Star => ({
      x: Math.random(),
      y: Math.random(),
      z: rand(0.15, 1),
      size: rand(0.4, 1.8),
      alpha: rand(0.2, 0.9),
      twinkle: Math.random() * Math.PI * 2,
      twinkleSpeed: rand(0.003, 0.015),
      driftX: rand(-0.00008, 0.00008),
      driftY: rand(-0.00008, 0.00008),
    });

    const createOrbitStar = (): OrbitStar => ({
      angle: Math.random() * Math.PI * 2,
      radius: rand(0.23, 0.44),
      speed: rand(0.00008, 0.00024) * (Math.random() > 0.5 ? 1 : -1),
      size: rand(1.2, 3),
      alpha: rand(0.35, 1),
      color:
        Math.random() > 0.5
          ? "rgba(120,170,255,"
          : "rgba(185,130,255,",
      phase: Math.random() * Math.PI * 2,
    });

    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push(createStar());
    }

    for (let i = 0; i < ORBIT_STAR_COUNT; i++) {
      orbitStars.push(createOrbitStar());
    }

    const resize = () => {
      const rect = canvas.getBoundingClientRect();

      width = rect.width;
      height = rect.height;

      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    const updatePointer = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();

      pointer.targetX = (clientX - rect.left) / rect.width;
      pointer.targetY = (clientY - rect.top) / rect.height;
      pointer.active = true;
    };

    const onMouseMove = (event: MouseEvent) => {
      updatePointer(event.clientX, event.clientY);
    };

    const onTouchStart = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) return;

      updatePointer(touch.clientX, touch.clientY);
    };

    const onTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) return;

      updatePointer(touch.clientX, touch.clientY);
    };

    const onTouchEnd = () => {
      pointer.active = false;
    };

    const onMouseLeave = () => {
      pointer.active = false;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    canvas.addEventListener("touchstart", onTouchStart, {
      passive: true,
    });
    canvas.addEventListener("touchmove", onTouchMove, {
      passive: true,
    });
    canvas.addEventListener("touchend", onTouchEnd, {
      passive: true,
    });
    canvas.addEventListener("mouseleave", onMouseLeave);

    let time = 0;

    const drawGlow = (
      x: number,
      y: number,
      radius: number,
      color: string
    ) => {
      const gradient = ctx.createRadialGradient(
        x,
        y,
        0,
        x,
        y,
        radius
      );

      gradient.addColorStop(0, color);
      gradient.addColorStop(1, "rgba(0,0,0,0)");

      ctx.fillStyle = gradient;
      ctx.fillRect(
        x - radius,
        y - radius,
        radius * 2,
        radius * 2
      );
    };

    const drawRing = (
      radius: number,
      rotation: number,
      opacity: number
    ) => {
      ctx.save();

      ctx.translate(width / 2, height / 2);
      ctx.rotate(rotation);

      ctx.beginPath();
      ctx.ellipse(
        0,
        0,
        radius,
        radius * 0.58,
        0,
        0,
        Math.PI * 2
      );

      ctx.strokeStyle = `rgba(115, 140, 255, ${opacity})`;
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.restore();
    };

    const draw = () => {
      time += reducedMotion ? 0.15 : 1;

      ctx.clearRect(0, 0, width, height);

      /* -------------------------------------------------------
         BACKGROUND
      ------------------------------------------------------- */

      const background = ctx.createRadialGradient(
        width / 2,
        height / 2,
        0,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.7
      );

      background.addColorStop(0, "rgba(31, 35, 72, 0.6)");
      background.addColorStop(0.35, "rgba(11, 15, 35, 0.55)");
      background.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = background;
      ctx.fillRect(0, 0, width, height);

      /* -------------------------------------------------------
         NEBULA
      ------------------------------------------------------- */

      drawGlow(
        width * 0.33,
        height * 0.25,
        Math.min(width, height) * 0.42,
        "rgba(65, 90, 255, 0.10)"
      );

      drawGlow(
        width * 0.68,
        height * 0.4,
        Math.min(width, height) * 0.38,
        "rgba(165, 75, 255, 0.08)"
      );

      drawGlow(
        width * 0.5,
        height * 0.8,
        Math.min(width, height) * 0.32,
        "rgba(35, 180, 255, 0.05)"
      );

      /* -------------------------------------------------------
         RINGS
      ------------------------------------------------------- */

      const ringBase = Math.min(width, height);

      drawRing(ringBase * 0.22, time * 0.00008, 0.08);
      drawRing(ringBase * 0.32, -time * 0.00006, 0.06);
      drawRing(ringBase * 0.42, time * 0.00004, 0.045);
      drawRing(ringBase * 0.52, -time * 0.000025, 0.03);

      /* -------------------------------------------------------
         STAR FIELD
      ------------------------------------------------------- */

      pointer.x += (pointer.targetX - pointer.x) * 0.045;
      pointer.y += (pointer.targetY - pointer.y) * 0.045;

      const px = (pointer.x - 0.5) * width;
      const py = (pointer.y - 0.5) * height;

      for (const star of stars) {
        if (!reducedMotion) {
          star.x += star.driftX;
          star.y += star.driftY;
        }

        if (star.x < -0.05) star.x = 1.05;
        if (star.x > 1.05) star.x = -0.05;
        if (star.y < -0.05) star.y = 1.05;
        if (star.y > 1.05) star.y = -0.05;

        let x = star.x * width;
        let y = star.y * height;

        /*
         * Deeper stars move less.
         * Foreground stars react more strongly.
         */
        const parallaxStrength = star.z * 0.045;

        x += px * parallaxStrength;
        y += py * parallaxStrength;

        /*
         * Local interaction field.
         * Stars close to the pointer are pushed away.
         */
        if (pointer.active && !reducedMotion) {
          const dx = x - pointer.x * width;
          const dy = y - pointer.y * height;

          const distance = Math.sqrt(dx * dx + dy * dy);

          const interactionRadius = isTouchDevice
            ? 120
            : 170;

          if (distance < interactionRadius) {
            const force =
              Math.pow(
                1 - distance / interactionRadius,
                2
              ) * 22;

            const normalizedX = dx / (distance || 1);
            const normalizedY = dy / (distance || 1);

            x += normalizedX * force;
            y += normalizedY * force;
          }
        }

        const twinkle =
          Math.sin(
            star.twinkle + time * star.twinkleSpeed
          ) *
          0.25;

        const alpha = Math.max(
          0.05,
          Math.min(1, star.alpha + twinkle)
        );

        ctx.beginPath();
        ctx.arc(
          x,
          y,
          star.size * (0.7 + star.z * 0.8),
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgba(220, 230, 255, ${alpha})`;
        ctx.fill();
      }

      /* -------------------------------------------------------
         ORBITING STARS
      ------------------------------------------------------- */

      for (const star of orbitStars) {
        if (!reducedMotion) {
          star.angle += star.speed;
        }

        const rx =
          width *
          star.radius *
          Math.cos(star.angle);

        const ry =
          height *
          star.radius *
          0.52 *
          Math.sin(star.angle);

        const x = width / 2 + rx;
        const y = height / 2 + ry;

        const pulse =
          Math.sin(
            time * 0.015 + star.phase
          ) *
          0.22;

        const alpha = Math.max(
          0.12,
          star.alpha + pulse
        );

        /* glow */

        const glow = ctx.createRadialGradient(
          x,
          y,
          0,
          x,
          y,
          star.size * 7
        );

        glow.addColorStop(
          0,
          `${star.color}${Math.min(alpha * 0.65, 0.8)})`
        );

        glow.addColorStop(
          1,
          "rgba(0,0,0,0)"
        );

        ctx.fillStyle = glow;

        ctx.fillRect(
          x - star.size * 7,
          y - star.size * 7,
          star.size * 14,
          star.size * 14
        );

        /* core */

        ctx.beginPath();

        ctx.arc(
          x,
          y,
          star.size,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `${star.color}${alpha})`;
        ctx.fill();
      }

      /* -------------------------------------------------------
         CENTER AURA
      ------------------------------------------------------- */

      drawGlow(
        width / 2,
        height / 2,
        Math.min(width, height) * 0.14,
        "rgba(105, 125, 255, 0.08)"
      );

      /* -------------------------------------------------------
         FRAME
      ------------------------------------------------------- */

      if (!reducedMotion) {
        animationFrame = requestAnimationFrame(draw);
      }

    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrame);

      resizeObserver.disconnect();

      window.removeEventListener(
        "mousemove",
        onMouseMove
      );

      canvas.removeEventListener(
        "touchstart",
        onTouchStart
      );

      canvas.removeEventListener(
        "touchmove",
        onTouchMove
      );

      canvas.removeEventListener(
        "touchend",
        onTouchEnd
      );

      canvas.removeEventListener(
        "mouseleave",
        onMouseLeave
      );
    };
  }, []);

  const scrollToProjects = () => {
    document
      .getElementById("projects")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-[#02030a] text-white"
    >
      {/* Interactive canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 h-full w-full touch-none"
      />

      {/* Soft top vignette */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at center, transparent 20%, rgba(2,3,10,.25) 60%, rgba(2,3,10,.9) 100%)",
        }}
      />

      {/* Grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.045] mix-blend-screen"
        style={{
          backgroundImage: `
            radial-gradient(
              rgba(255,255,255,.9) 0.7px,
              transparent 0.7px
            )
          `,
          backgroundSize: "4px 4px",
        }}
      />

      {/* Top status */}
      <div
        className="
          absolute
          left-1/2
          top-8
          z-20
          flex
          -translate-x-1/2
          items-center
          gap-2
          rounded-full
          border
          border-white/10
          bg-white/[0.035]
          px-4
          py-2
          text-[10px]
          font-medium
          uppercase
          tracking-[0.28em]
          text-white/55
          backdrop-blur-md
          sm:top-10
          sm:text-[11px]
        "
      >
        <span className="relative flex h-2 w-2">
          <span
            className="
              absolute
              inline-flex
              h-full
              w-full
              animate-ping
              rounded-full
              bg-cyan-400
              opacity-60
            "
          />

          <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" />
        </span>

        Available for projects
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-6 text-center sm:px-8">
        <div
          className="
            mb-6
            inline-flex
            items-center
            rounded-full
            border
            border-white/10
            bg-white/[0.025]
            px-3
            py-1.5
            text-xs
            font-medium
            text-white/50
            backdrop-blur-md
            sm:mb-8
          "
        >
          Full-stack · AI · Automation
        </div>

        <h1
          className="
            max-w-5xl
            text-balance
            text-[3.2rem]
            font-semibold
            leading-[0.92]
            tracking-[-0.065em]
            sm:text-6xl
            md:text-7xl
            lg:text-[6.5rem]
          "
        >
          I build
          <span
            className="
              bg-gradient-to-r
              from-white
              via-blue-200
              to-violet-300
              bg-clip-text
              text-transparent
            "
          >
            {" "}
            digital products
          </span>
          <br />
          that actually work.
        </h1>

        <p
          className="
            mt-7
            max-w-2xl
            text-sm
            leading-7
            text-white/50
            sm:text-base
            sm:leading-8
            md:text-lg
          "
        >
          I design and build full-stack applications,
          AI-powered products, and automation systems
          from idea to production.
        </p>

        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={scrollToProjects}
            className="
              group
              relative
              inline-flex
              min-h-12
              items-center
              justify-center
              overflow-hidden
              rounded-full
              border
              border-white/15
              bg-white
              px-6
              text-sm
              font-semibold
              text-black
              transition-transform
              duration-200
              active:scale-[0.97]
            "
          >
            <span
              className="
                absolute
                inset-0
                -translate-x-full
                bg-gradient-to-r
                from-transparent
                via-black/10
                to-transparent
                transition-transform
                duration-700
                group-active:translate-x-full
              "
            />

            <span className="relative">
              Explore my work
            </span>

            <span className="relative ml-2 transition-transform duration-200 group-active:translate-x-1">
              →
            </span>
          </button>

          <a
            href="mailto:hello@ajaysonkar.com"
            className="
              inline-flex
              min-h-12
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/[0.04]
              px-6
              text-sm
              font-medium
              text-white/80
              backdrop-blur-md
              transition-transform
              duration-200
              active:scale-[0.97]
            "
          >
            Let's talk
          </a>
        </div>

        {/* Tiny interaction hint */}
        <div
          className="
            mt-14
            flex
            items-center
            gap-3
            text-[10px]
            uppercase
            tracking-[0.3em]
            text-white/25
          "
        >
          <span className="h-px w-8 bg-white/10" />

          Move around the stars

          <span className="h-px w-8 bg-white/10" />
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-40
        "
        style={{
          background:
            "linear-gradient(to top, #02030a, transparent)",
        }}
      />
    </section>
  );
}