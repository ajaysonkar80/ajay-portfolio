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

export default function StarCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true, desynchronized: true });
    if (!ctx) return;

    let animationFrame = 0;
    let running = true;
    let width = 0;
    let height = 0;
    let dpr = 1;

    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const stars: Star[] = [];
    const orbitStars: OrbitStar[] = [];

    const STAR_COUNT = reducedMotion ? 150 : isTouchDevice ? 350 : 600;
    const ORBIT_STAR_COUNT = reducedMotion ? 6 : 14;

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
        Math.random() > 0.5 ? "rgba(120,170,255," : "rgba(185,130,255,",
      phase: Math.random() * Math.PI * 2,
    });

    for (let i = 0; i < STAR_COUNT; i++) stars.push(createStar());
    for (let i = 0; i < ORBIT_STAR_COUNT; i++) orbitStars.push(createOrbitStar());

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

    const drawGlow = (
      x: number,
      y: number,
      radius: number,
      color: string
    ) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0, color);
      gradient.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
    };

    const drawRing = (radius: number, rotation: number, opacity: number) => {
      ctx.save();
      ctx.translate(width / 2, height / 2);
      ctx.rotate(rotation);
      ctx.beginPath();
      ctx.ellipse(0, 0, radius, radius * 0.58, 0, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(115, 140, 255, ${opacity})`;
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();
    };

    let time = 0;

    const draw = () => {
      time += reducedMotion ? 0.15 : 1;

      ctx.clearRect(0, 0, width, height);

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

      const ringBase = Math.min(width, height);
      drawRing(ringBase * 0.22, time * 0.00008, 0.08);
      drawRing(ringBase * 0.32, -time * 0.00006, 0.06);
      drawRing(ringBase * 0.42, time * 0.00004, 0.045);
      drawRing(ringBase * 0.52, -time * 0.000025, 0.03);

      for (const star of stars) {
        if (!reducedMotion) {
          star.x += star.driftX;
          star.y += star.driftY;
        }

        if (star.x < -0.05) star.x = 1.05;
        if (star.x > 1.05) star.x = -0.05;
        if (star.y < -0.05) star.y = 1.05;
        if (star.y > 1.05) star.y = -0.05;

        const x = star.x * width;
        const y = star.y * height;

        const twinkle =
          Math.sin(star.twinkle + time * star.twinkleSpeed) * 0.25;
        const alpha = Math.max(0.05, Math.min(1, star.alpha + twinkle));

        ctx.beginPath();
        ctx.arc(x, y, star.size * (0.7 + star.z * 0.8), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 230, 255, ${alpha})`;
        ctx.fill();
      }

      for (const star of orbitStars) {
        if (!reducedMotion) star.angle += star.speed;

        const rx = width * star.radius * Math.cos(star.angle);
        const ry = height * star.radius * 0.52 * Math.sin(star.angle);
        const x = width / 2 + rx;
        const y = height / 2 + ry;

        const pulse = Math.sin(time * 0.015 + star.phase) * 0.22;
        const alpha = Math.max(0.12, star.alpha + pulse);

        const glow = ctx.createRadialGradient(x, y, 0, x, y, star.size * 7);
        glow.addColorStop(0, `${star.color}${Math.min(alpha * 0.65, 0.8)})`);
        glow.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = glow;
        ctx.fillRect(
          x - star.size * 7,
          y - star.size * 7,
          star.size * 14,
          star.size * 14
        );

        ctx.beginPath();
        ctx.arc(x, y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `${star.color}${alpha})`;
        ctx.fill();
      }

      drawGlow(
        width / 2,
        height / 2,
        Math.min(width, height) * 0.14,
        "rgba(105, 125, 255, 0.08)"
      );

      if (running && !reducedMotion) {
        animationFrame = requestAnimationFrame(draw);
      }
    };

    // Pause when the tab is hidden to save battery/CPU.
    const onVisibilityChange = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(animationFrame);
      } else if (!reducedMotion && !running) {
        running = true;
        animationFrame = requestAnimationFrame(draw);
      }
    };

    // Draw only while the hero is on screen.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (document.hidden) return;
        if (entry.isIntersecting && !running && !reducedMotion) {
          running = true;
          animationFrame = requestAnimationFrame(draw);
        } else if (!entry.isIntersecting && running) {
          running = false;
          cancelAnimationFrame(animationFrame);
        }
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    document.addEventListener("visibilitychange", onVisibilityChange);
    draw();

    return () => {
      running = false;
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    />
  );
}
