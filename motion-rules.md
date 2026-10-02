# Website Motion Rules

Stack: Next.js (App Router), Tailwind CSS, Framer Motion (`motion/react`), copy-paste components from Motion Primitives / Magic UI / 21st.dev.
Feel: smooth, premium, calm. Motion supports content, never competes with it.
Priorities: Lighthouse 90+, zero layout shift, SEO untouched.

---

## 0. Mobile first, desktop second (applies to every rule below)

- Design, build, and test every animation on mobile first. Desktop is an enhancement layered on top.
- Base styles and base motion = mobile. Add desktop extras with `md:` / `lg:` or `@media (min-width: 768px)`, never the reverse.
- Default to the lightest version on mobile (fewer elements animated, shorter distances, no parallax, no decorative loops). Desktop may add richer effects only if Lighthouse stays 90+.
- Touch is the primary input: press feedback, swipe-friendly sheets, 44px tap targets. Hover is a desktop bonus only.
- Test on a real mid-range phone with throttled mobile Lighthouse before checking desktop.
- If an animation works only on desktop, it is optional and must not be needed to understand the page.

---

## 1. Core principles

1. Animate only `transform` and `opacity`. Never animate width, height, top, left, margin, box-shadow, or filter blur on large areas.
2. Nothing animates above the fold on first paint. The hero and LCP element render instantly and fully visible.
3. Every animation has a purpose: reveal, orient, or give feedback. If it has none, delete it.
4. One motion language everywhere. Same easing, same durations, same distances. No per-component custom values.
5. Content must exist in server-rendered HTML. Animation only changes how it appears, never whether it exists.

---

## 2. Motion tokens (single source of truth)

Create `lib/motion.ts` and import from it everywhere. Never hardcode values in components.

```ts
// lib/motion.ts
export const ease = {
  out: [0.22, 1, 0.36, 1] as const,      // default: smooth deceleration
  inOut: [0.65, 0, 0.35, 1] as const,    // page transitions
};

export const duration = {
  instant: 0.1,   // button press
  fast: 0.18,     // exits, small UI
  base: 0.35,     // dropdowns, modals in
  slow: 0.6,      // scroll reveals
};

export const distance = { sm: 8, md: 16, lg: 24 }; // px, max 24

export const spring = {
  soft: { type: "spring", stiffness: 260, damping: 30 },   // modals, sheets
  snappy: { type: "spring", stiffness: 400, damping: 32 }, // menus, dropdowns
} as const;

export const stagger = 0.06; // seconds between siblings, max 6 items staggered

export const fadeUp = {
  hidden: { opacity: 0, y: distance.md },
  show: { opacity: 1, y: 0, transition: { duration: duration.slow, ease: ease.out } },
};
```

Rules:
- Exits are faster than entrances (about 50 to 60 percent of the entrance duration).
- No bounce, overshoot, or elastic effects. Premium means restrained.
- No animation longer than 0.6s except page-level transitions (max 0.4s).

---

## 3. Setup (do this once)

Use `LazyMotion` and the `m` component so Framer Motion's core stays small.

```tsx
// components/motion-provider.tsx
"use client";
import { LazyMotion, MotionConfig, domAnimation } from "motion/react";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
```

- Wrap the app in `layout.tsx` with `MotionProvider`.
- Use `m.div`, not `motion.div`. `strict` throws if someone uses `motion.*` by mistake.
- Only load `domMax` if drag or layout animations are truly needed, and only in that component via dynamic import.

---

## 4. Page load

- Hero section: no entrance animation on the LCP element (h1, hero image, main paragraph). Render at full opacity immediately.
- Allowed on load: a subtle fade-up on secondary elements below the LCP (badges, CTA row, logos) after the LCP has painted. Max 300ms delay total, `opacity` + `y: 8` only.
- Never set `initial={{ opacity: 0 }}` on anything that must be visible in the first viewport.
- Never use full-screen loaders, splash screens, or intro animations.
- Fonts: `next/font` with `display: swap`. No layout shift when fonts load.

---

## 5. Scroll reveal

```tsx
<m.section
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, margin: "0px 0px -80px 0px" }}
/>
```

Rules:
- Always `once: true`. Never re-animate on scroll up.
- Trigger slightly before the element is fully in view (`-80px` margin).
- Reveal at section or card-group level, not every paragraph and icon.
- Stagger children with `stagger` token, max 6 items. Anything beyond 6 reveals together.
- Distance max `24px`, opacity plus translateY only. No scale, blur, or rotate on reveals.
- No parallax, scroll-linked scrubbing, or sticky scroll-jacking on mobile. Desktop only, and only if it passes Lighthouse.
- Elements must reserve their space before animating. Zero CLS.
- Below-the-fold sections using heavy animated components are loaded lazily (see section 9).

---

## 6. Page transitions (App Router)

- Use `app/template.tsx` (re-mounts on navigation) with a short fade plus 8px rise.
- Duration 0.25 to 0.35s, `ease.inOut`. Never block navigation waiting for an exit animation.
- No `AnimatePresence mode="wait"` around full pages. It delays content and hurts INP.
- Scroll resets to top instantly. Do not animate scroll position.
- Optional: native View Transitions API for crossfades. Zero JS cost, progressive enhancement.
- Loading states: use skeletons with a static or very slow pulse. No spinners over 1s of animation loops.

```tsx
// app/template.tsx
"use client";
import { m } from "motion/react";
import { ease } from "@/lib/motion";

export default function Template({ children }: { children: React.ReactNode }) {
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
```

---

## 7. Modals, menus, dropdowns, sheets

Use accessible primitives (Radix / shadcn / Headless UI) and animate their content with `AnimatePresence`.

| Element | Enter | Exit | Notes |
|---|---|---|---|
| Dropdown / popover | opacity 0→1, scale 0.96→1, y -4→0, `spring.snappy` | 0.12s fade | `transform-origin` at trigger |
| Modal / dialog | opacity 0→1, scale 0.97→1, `spring.soft` | 0.15s fade | Backdrop fade 0.2s |
| Mobile menu | slide from side or top, `spring.soft` | 0.2s slide out | Lock body scroll |
| Bottom sheet (mobile) | translateY 100%→0, `spring.soft` | 0.2s slide down | Drag to dismiss optional |
| Toast | opacity + y 12→0 | 0.15s fade | Auto-dismiss 4s |

Rules:
- Exits never exceed 0.2s. Closing must feel instant.
- Backdrop: fade only, no blur animation (expensive). Use a static blur or none.
- Focus management and Escape-to-close come from the primitive. Never break them with animation.
- Prefer sheets from the bottom on mobile over centered modals.
- Do not animate layout size of dropdown content. Fade and scale only.

---

## 8. Buttons and touch feedback (no hover)

Mobile has no hover, so feedback is based on press and state, not hover.

- Press feedback: `whileTap={{ scale: 0.97 }}` with `duration.instant` (0.1s). Or Tailwind: `active:scale-[0.97] transition-transform duration-100`.
- Hover styles allowed only as a desktop bonus, never required for understanding. Wrap in `@media (hover: hover)` (Tailwind v4 does this by default for `hover:`).
- Loading state: swap label for a small spinner, keep button width fixed (no layout shift), disable repeat taps.
- Success state: quick check icon fade (0.2s), then return.
- Primary CTA may have one subtle entrance reveal (section 5). No looping pulse, shake, glow, or shimmer on buttons.
- Minimum tap target 44x44px.
- Disable the iOS tap highlight flash with `-webkit-tap-highlight-color: transparent` and provide your own `active:` state.

---

## 9. Performance and lazy loading

Budgets:
- Lighthouse Performance 90+ on mobile, CLS 0, LCP under 2.5s, INP under 200ms.
- Total animation-related JS in the initial bundle: under 20 KB gzipped.

Rules:
- Use `LazyMotion` (section 3) and `m` components everywhere.
- Heavy or decorative components (Magic UI backgrounds, particles, globes, marquees, beams, 3D, Lottie) must be loaded with `next/dynamic` and only render below the fold or after interaction/idle:

```tsx
const Beams = dynamic(() => import("@/components/magicui/beams"), { ssr: false });
```
  Use `ssr: false` only for purely decorative components that carry no content.
- Mount heavy animations only when in view (`useInView` with `once`), then render.
- Max 3 simultaneously running animations on screen. Looping animations (marquees, gradients) pause when off-screen.
- On mobile, disable or simplify: parallax, cursor effects, large blurs, particle systems, animated gradients, 3D.
- Never animate large `blur`, `backdrop-filter`, or `box-shadow`.
- `will-change: transform` only on elements actively animating, and removed after.
- No animated counters, text scramble, or typewriter effects on above-the-fold content.
- Images: `next/image` with explicit sizes, `priority` only on the LCP image.
- Run Lighthouse (mobile throttled) before and after adding any new animated component. If the score drops more than 2 points, simplify or lazy-load it.

---

## 10. SEO safety

- All headings, paragraphs, and links exist in the initial HTML. Never render text only after JS animation runs.
- Never hide content with `display: none` or `visibility: hidden` waiting for an animation.
- Server components for content, thin client components for motion wrappers only (`"use client"` on the wrapper, not the whole page).
- Character or word split animations (text reveal) are allowed only if the original text stays in the DOM and screen-reader-readable (use `aria-label` on the parent and `aria-hidden` on split spans). Do not use them on `h1`.
- No animation may cause layout shift. Reserve dimensions.
- Never animate `<head>`-relevant content, structured data, or canonical elements.

---

## 11. Reduced motion and accessibility

- `MotionConfig reducedMotion="user"` is already set. It strips transform animations and keeps opacity.
- Tailwind: add `motion-reduce:transition-none motion-reduce:animate-none` to CSS-based animations.
- Looping or auto-playing animation must be pausable or disabled under reduced motion.
- No flashing content (more than 3 flashes per second).
- Animation never hides or delays essential information or controls.

---

## 12. Rules for adding third-party animated components

Before pasting any component from Motion Primitives, Magic UI, or 21st.dev:

1. Does it animate only transform/opacity? If not, replace the effect or skip it.
2. Replace `motion.*` with `m.*` and import from `motion/react`.
3. Replace hardcoded durations, easings, and distances with tokens from `lib/motion.ts`.
4. Remove unused props, variants, and dependencies. Trim to what you use.
5. Is it below the fold or decorative? Lazy-load it (section 9).
6. Does it add a new dependency? Avoid unless essential.
7. Test on a real mid-range phone and run mobile Lighthouse.

---

## 13. Quick do / don't

Do:
- Fade-up reveals on sections, once
- Spring-based modals and menus with fast exits
- Press feedback on buttons
- Short, quiet page fades
- Lazy-load anything decorative

Don't:
- Animate the hero or LCP on load
- Hover-dependent interactions
- Parallax or scroll-jacking on mobile
- Bounce, elastic, or long durations
- Looping glows, shimmers, or pulses
- Animate layout properties or large blurs
- Block navigation with exit animations
