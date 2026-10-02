// Motion tokens — single source of truth (motion-rules.md §2).
// Import from here everywhere. Never hardcode durations/easings/distances.

export const ease = {
  /** default: smooth deceleration */
  out: [0.22, 1, 0.36, 1] as const,
  /** page transitions */
  inOut: [0.65, 0, 0.35, 1] as const,
};

export const duration = {
  /** button press */
  instant: 0.1,
  /** exits, small UI */
  fast: 0.18,
  /** dropdowns, modals in */
  base: 0.35,
  /** scroll reveals */
  slow: 0.6,
};

/** px — max 24 */
export const distance = { sm: 8, md: 16, lg: 24 };

export const spring = {
  /** modals, sheets */
  soft: { type: "spring", stiffness: 260, damping: 30 },
  /** menus, dropdowns */
  snappy: { type: "spring", stiffness: 400, damping: 32 },
} as const;

/** seconds between siblings, max 6 items staggered */
export const stagger = 0.06;

export const fadeUp = {
  hidden: { opacity: 0, y: distance.md },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.slow, ease: ease.out },
  },
};
