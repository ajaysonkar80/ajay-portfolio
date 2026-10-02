"use client";

import { LazyMotion, MotionConfig, domAnimation } from "motion/react";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    // Not `strict`: typing-animation.tsx still uses motion.* components.
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
