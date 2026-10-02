# ajaysonkar.com: Accessibility & Performance Targets

**Site type:** Consulting/portfolio (Next.js, Vercel)
**Primary audience device:** Mid/low-end Android, 4G
**Accessibility standard:** WCAG 2.2 AA
**Rule:** Design and test mobile first, desktop second.

---

## 1. Test Conditions

All performance numbers are measured under:
- Lighthouse mobile preset, simulated slow 4G, 4x CPU throttle
- Real-device check on a mid-range Android phone
- Field data (Vercel Speed Insights / CrUX) at the 75th percentile

---

## 2. Performance Targets

### Core Web Vitals (75th percentile, mobile)
| Metric | Target | Hard limit |
|---|---|---|
| LCP | ≤ 2.0s | 2.5s |
| INP | ≤ 150ms | 200ms |
| CLS | ≤ 0.05 | 0.1 |
| TTFB | ≤ 600ms | 800ms |
| FCP | ≤ 1.5s | 1.8s |

### Lighthouse (mobile)
| Category | Target |
|---|---|
| Performance | ≥ 90 |
| Accessibility | 100 |
| Best Practices | ≥ 95 |
| SEO | ≥ 95 |

### Budgets
| Item | Budget |
|---|---|
| Initial JS (gzipped, per route) | ≤ 170 KB |
| Initial page weight | ≤ 1 MB |
| Hero/LCP image | ≤ 100 KB, WebP/AVIF, `priority` |
| Any other image | ≤ 150 KB, lazy-loaded |
| Fonts | ≤ 2 families, subset, self-hosted (`next/font`), `font-display: swap` |
| Long tasks (main thread) | None > 200ms during load |

---

## 3. Rules for Heavy Elements (animations, media, big visuals)

- Nothing heavy loads before the LCP element. Heavy components load via `next/dynamic` after idle, on scroll into view, or on user interaction.
- Animate only `transform` and `opacity`. No layout-triggering animations.
- Animation libraries (Framer Motion, GSAP, Three.js, etc.) are code-split and never in the initial bundle.
- Reduce or disable decorative animation on mobile and low-end devices (check `navigator.hardwareConcurrency`, `deviceMemory`, and `saveData`).
- Honor `prefers-reduced-motion`: replace motion with static states.
- Video: no autoplay on mobile, use a poster image, `preload="none"`, compressed (H.264/WebM), short.
- 3D/canvas: desktop or user-triggered only. Never run on page load on mobile.
- Reserve space (width/height or `aspect-ratio`) for every image, video, and embed to prevent layout shift.
- Auto-playing motion lasting over 5 seconds must have a pause/stop control (WCAG 2.2.2).

---

## 4. Third-Party Scripts (PostHog, Sentry)

### PostHog
- Load after idle / after first interaction, never render-blocking.
- Proxy through your own domain (Next.js rewrites) to avoid ad-blocker losses and extra DNS lookups.
- Session recording: off by default or sampled low; if on, mask inputs.
- Disable heavy autocapture features not in use (heatmaps, surveys).

### Sentry
- Lazy-load the browser SDK after load.
- Session Replay: off, or sampled very low (e.g. 1–5%, errors only).
- `tracesSampleRate` low (≤ 0.1).
- Keep the client bundle small: no unused integrations.

### Rule for any new third-party script
- Must justify its cost. Check its impact on INP and total blocking time before shipping.
- Combined third-party JS budget: ≤ 60 KB gzipped on initial load.

---

## 5. Accessibility Targets (WCAG 2.2 AA)

### Perceivable
- Text contrast ≥ 4.5:1; large text and UI components/icons ≥ 3:1
- Alt text on meaningful images; `alt=""` on decorative ones
- Captions/transcripts for any video with speech
- Content reflows at 320px width, no horizontal scroll (except tables/code in their own scroll container)
- Text resizable to 200% without loss of content
- No information conveyed by color alone

### Operable
- Everything works with keyboard only; no keyboard traps
- Visible focus indicator on every interactive element, not obscured by sticky headers (WCAG 2.4.11)
- Touch targets ≥ 44×44px (WCAG minimum is 24×24px)
- Skip-to-content link as the first focusable element
- No drag-only interactions; provide a single-pointer alternative (WCAG 2.5.7)
- No timing or motion that cannot be paused, stopped, or hidden

### Understandable
- `<html lang="en">` set
- Form fields have visible labels (not placeholder-only), clear errors linked via `aria-describedby`
- Don't ask users to re-enter info already provided (WCAG 3.3.7)
- Consistent navigation and component behavior across pages
- Help/contact link in a consistent location (WCAG 3.2.6)

### Robust
- Semantic HTML first; ARIA only where HTML can't do the job
- One `h1` per page, logical heading order
- Landmarks: `header`, `nav`, `main`, `footer`
- Status messages (form success/error, toasts) announced via `role="status"` / `aria-live`
- Valid HTML; no duplicate IDs

---

## 6. Verification & Enforcement

### Automated (every deploy)
- Lighthouse CI: fail the build if any category drops below target
- `eslint-plugin-jsx-a11y` in lint step
- axe-core check on key pages (home, services, contact, blog)
- Bundle size check (`@next/bundle-analyzer` or size-limit) against budgets

### Manual (before each major release)
- Keyboard-only walkthrough of every page
- TalkBack pass on real Android phone: home, contact form, navigation
- Zoom to 200% and 320px width check
- Reduced-motion on/off check
- Throttled 4G test on real mid-range device

### Ongoing
- Review Vercel Speed Insights weekly; investigate any Core Web Vital over target
- Re-audit after adding any new section, animation, or script

---

## 7. Definition of Done (per page/feature)

- [ ] Meets Core Web Vitals targets on throttled mobile
- [ ] Within JS and page-weight budgets
- [ ] Heavy elements lazy-loaded, reduced-motion respected
- [ ] Lighthouse Accessibility = 100, axe shows 0 violations
- [ ] Keyboard and TalkBack tested
- [ ] No new third-party script without budget check
