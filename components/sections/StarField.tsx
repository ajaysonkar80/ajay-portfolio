"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Decorative only — code-split out of the initial bundle and mounted shortly
// after first paint so it never competes with the LCP hero text.
const StarCanvas = dynamic(() => import("./StarCanvas"), { ssr: false });

export default function StarField() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), 400);
    return () => window.clearTimeout(timer);
  }, []);

  if (!ready) return null;
  return <StarCanvas />;
}
