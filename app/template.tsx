"use client";

import { useEffect, useState } from "react";
import { m } from "motion/react";
import { ease } from "@/lib/motion";

// Module flag: false on first page load (server + hydration), true after the
// first mount. First load renders plain children so the LCP hero is never
// wrapped in opacity:0 (motion-rules §4). Client-side navigations remount
// this template and get the short fade (motion-rules §6).
let hasMounted = false;

export default function Template({ children }: { children: React.ReactNode }) {
  const [animate] = useState(() => hasMounted);

  useEffect(() => {
    hasMounted = true;
  }, []);

  if (!animate) return <>{children}</>;

  return (
    <m.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: ease.inOut }}
    >
      {children}
    </m.div>
  );
}
