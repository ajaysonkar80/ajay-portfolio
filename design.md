# ajaysonkar.com: Design Decisions

Companion docs (source of truth for their areas, not duplicated here):
- `tokens.css`: colors, spacing, radius, shadows, breakpoints, type scale, motion tokens, z-index
- `motion-rules.md`: all animation rules
- `a11y-performance.md`: accessibility and performance targets

Global rule: **design and build mobile first, desktop second.**

---

## 1. Purpose and Audience

**Purpose:** Portfolio and landing page for a freelance web developer. Also hosts free tools and resources for local businesses. Portfolio is mostly SaaS startup projects.

**Primary visitor:** Local business owners and clients, mostly on mid/low-end Android over 4G.

**Primary action:** Message on WhatsApp. This is the main CTA on every page.
**Secondary action:** Contact form (stores a lead in the DB).

**Success metric:** WhatsApp CTA clicks and form submissions.

---

## 2. Information Architecture

| Page | Route | Purpose |
|---|---|---|
| Home | `/` | Value proposition, featured work, WhatsApp CTA |
| About | `/about` | Who I am, credibility |
| Services | `/services` | What I offer |
| Work | `/work` | Portfolio projects (mostly SaaS) |
| Case Studies | `/case-studies` | Detailed project stories |
| Useful Tools | `/tools` | Free tools for local businesses |
| Resources | `/resources` | Guides and downloads |
| Latest | `/latest` | Updates / blog (MDX) |
| Contact | `/contact` | WhatsApp + form |

Navigation: mobile bottom sheet / side menu, desktop top bar. WhatsApp CTA persistent on mobile (sticky, 44px+ target, must not obscure focus per WCAG 2.4.11).

---

## 3. Architecture

### Framework
- **Next.js 16** (App Router): SSR/SSG, file-based routing, React 19
- **TypeScript** strict mode

### Rendering strategy
- Server components for all content. Client components only for motion wrappers, forms, and interactive tools.
- Static generation for all marketing pages. Dynamic only for API routes.

### Styling
- **Tailwind CSS v4** with tokens from `tokens.css`
- **shadcn/ui** (Radix primitives) for accessible components
- **Framer Motion** via `motion/react` with `LazyMotion` and `m.*` only (see `motion-rules.md`)

---

## 4. Design System

Full tokens in `tokens.css`. Summary:

- **Direction:** bold, modern, clean. UI/UX over aesthetic decoration.
- **Modes:** light and dark, toggled with `.dark` on `<html>`
- **Primary:** Cyan `#00D4FF` (fills take dark text, never white). Link text on light uses `#00708C`.
- **Accent:** Amber `#F59E0B`, one highlight per screen
- **Typography:** Playfair Display (headings), Geist Sans (body), JetBrains Mono (code). Max 2 families loaded; mono only where used. Fluid scale defined in tokens.
- **Radius:** sharp and tight (2 to 16px)
- **Shadows:** slate-tinted; cyan/amber glows for emphasis only, static (never animated)

### Surface style
- Solid surfaces with borders are the default.
- Glass effect (`.glass`, `.glass-amber`, `.glass-glow`, `.glass-hover`) is allowed on a few emphasis surfaces only. It must be a **static** backdrop blur, never animated, and disabled on mobile or low-end devices (use a solid surface fallback). Reason: `backdrop-filter` is expensive on low-end Android.

### Custom classes
- Buttons: `.btn-neon` (primary), `.btn-amber`, `.btn-outline`
- Badges: `.badge-blue`, `.badge-amber`
- Inputs: `.input-neon`
- Tech pills: `.tech-pill`
- Animation: `.animate-fade-up`, `.animate-fade-in` only. No looping pulse or glow (`.animate-neon-pulse` removed per `motion-rules.md`).
- All CSS animations carry `motion-reduce:animate-none`.

### Components
- UI primitives: button, card, badge, separator (Radix + Tailwind)
- Section components: Hero, Services, Work, CaseStudies, Tools, Contact, etc. Each is standalone and reusable.

---

## 5. Motion

See `motion-rules.md`. Key points:
- Transform and opacity only
- Nothing animates the hero or LCP element on load
- Scroll reveals: fade-up, once, max 24px
- Press feedback on buttons, no hover dependence
- Heavy/decorative components lazy-loaded with `next/dynamic`
- No parallax or scroll-jacking on mobile
- Reduced motion honored via `MotionConfig reducedMotion="user"`

---

## 6. Accessibility and Performance

See `a11y-performance.md`. Key targets:
- WCAG 2.2 AA, Lighthouse Accessibility 100
- LCP ≤ 2.0s, INP ≤ 150ms, CLS ≤ 0.05 (mobile, 75th percentile)
- Lighthouse Performance ≥ 90 on throttled mobile
- Initial JS ≤ 170 KB gzipped per route
- Third-party JS ≤ 60 KB gzipped

---

## 7. Backend and Data

### Hosting and infrastructure
- **Vercel**: hosting, edge network, Speed Insights
- **Neon**: serverless PostgreSQL
- **Prisma ORM** with Neon. Use the pooled connection string for runtime queries and the direct connection string for migrations.
- **Upstash Redis**: rate limiting
- **Zoho ZeptoMail**: transactional email (lead alerts)
- **Kapso**: WhatsApp message notifications

### Schema
- `Lead`: contact submissions
- `Project`: portfolio items
- `CaseStudy`: detailed project info
- `Metric`: key statistics

### Lead flow
1. Visitor taps the WhatsApp CTA (primary) or submits the contact form (secondary).
2. Form: client-side validation, then `POST /api/contact`.
3. API route: validate (Zod), check honeypot field, apply rate limit, check consent.
4. Store lead in Neon.
5. Send notification email to me via Zoho ZeptoMail.
6. Send WhatsApp notification via Kapso.
7. Return success; announce via `role="status"`.

WhatsApp clicks open `wa.me` with a prefilled message. No personal data is captured by the site at that point; the click is tracked as an anonymous PostHog event.

### Rate limiting
- **5 requests per IP per minute** on `/api/contact`
- Upstash sliding window
- On limit: HTTP 429 with a clear message and retry hint

### Environment variables
| Variable | Purpose |
|---|---|
| `DATABASE_URL` | Neon pooled connection |
| `DIRECT_URL` | Neon direct connection (migrations) |
| `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN` | Rate limiting |
| `ZEPTOMAIL_TOKEN` / `ZEPTOMAIL_FROM_ADDRESS` | Zoho ZeptoMail sending |
| `NOTIFY_EMAIL` | Where lead alert emails go |
| `KAPSO_API_KEY` / `KAPSO_PHONE_NUMBER_ID` | Kapso WhatsApp notifications |
| `NOTIFY_WHATSAPP_NUMBER` | Where lead WhatsApp alerts go |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp CTA |
| `NEXT_PUBLIC_POSTHOG_KEY` / `NEXT_PUBLIC_POSTHOG_HOST` | Analytics (proxied) |
| `SENTRY_DSN` / `SENTRY_AUTH_TOKEN` | Error tracking |

Secrets live in Vercel env settings, never in the repo.

### DPDP (Digital Personal Data Protection Act, India)
- **Notice at collection:** the form states what is collected, why, and links to the privacy policy.
- **Explicit consent:** unchecked consent checkbox on the form; submission blocked without it. Store consent flag and timestamp with each lead.
- **Data minimization:** collect only name, phone/email, message, and business type. No unnecessary fields.
- **Purpose limitation:** lead data used only to respond to the enquiry.
- **Retention:** define a fixed retention period and delete leads after it (period to be decided).
- **Rights:** a clear channel for access, correction, and erasure requests, with a named grievance contact on the privacy page.
- **Security:** encrypted in transit and at rest (Neon default), DB access restricted, no lead data in logs or Sentry events.
- **Children:** the site does not target minors and does not knowingly collect their data.
- **Analytics consent:** PostHog loads only after the visitor accepts a consent banner (see section 8).
- Pages: `/privacy` and `/terms`, linked in the footer.

---

## 8. Analytics (PostHog)

Goal: understand the user journey, what visitors do on the site.

### Setup
- Load after idle or first interaction, never render-blocking
- Proxy through own domain via Next.js rewrites
- Initialize only after consent
- Session recording: off by default or sampled low, inputs masked
- Heatmaps and surveys disabled unless used

### Events
| Event | Trigger |
|---|---|
| `$pageview` | Every route change (automatic) |
| `whatsapp_cta_click` | Any WhatsApp CTA, with `location` property (hero, sticky, footer, tool, etc.) |
| `contact_form_start` | First field focus |
| `contact_form_submit` | Successful submission |
| `contact_form_error` | Validation or server error |
| `service_view` | Services section or page viewed |
| `project_view` | Work item opened |
| `case_study_view` | Case study page viewed |
| `tool_use` | Tool used, with `tool_name` |
| `resource_download` | Resource opened or downloaded, with `resource_name` |
| `scroll_depth` | 25, 50, 75, 100 percent on key pages |
| `theme_toggle` | Light/dark switched |

### Rules
- No personal data (name, phone, email, message) in event properties.
- Every event name is `snake_case`, defined in one shared file so names never drift.

### Error tracking (Sentry)
- Lazy-loaded after page load
- Replay off or 1 to 5 percent, errors only
- `tracesSampleRate` ≤ 0.1
- Scrub PII from events

---

## 9. Content

- **MDX** for Latest and Resources content
- `content/` directory for structured content
- **SEO:** dynamic metadata per page, Open Graph tags, sitemap, robots, JSON-LD (Person / ProfessionalService), canonical URLs
- Images via `next/image` with explicit dimensions; `priority` only on the LCP image

---

## 10. State Management

- React state (`useState`, `useEffect`) for client state
- Server components for everything static
- No global state library

---

## 11. Development

- **ESLint** with `eslint-plugin-jsx-a11y`
- **Prettier**
- **TypeScript** strict mode

Scripts:
- `npm run dev`: dev server
- `npm run build`: production build
- `npm run lint`: lint
- `npm run seed`: seed database

---

## 12. Deployment and Testing

### Deployment
- Git push to `main` deploys to Vercel production
- Pull requests get Vercel preview deployments
- Prisma migrations run via `prisma migrate deploy` in the build step against `DIRECT_URL`
- Domain `ajaysonkar.com` on Vercel with HTTPS and security headers (CSP, X-Content-Type-Options, Referrer-Policy)

### Automated checks (every deploy)
- Lighthouse CI: build fails if any category drops below target
- axe-core on home, services, contact, work
- Bundle size check against budgets
- Lint and type check

### Manual checks (before major releases)
- Keyboard-only walkthrough
- TalkBack on a real Android phone
- Throttled 4G test on a mid-range device
- 200% zoom and 320px width
- Reduced-motion on and off
- Contact form end to end: DB row created, email received, rate limit returns 429 on the 6th request

---

## 13. Tradeoffs

| Decision | Chosen | Over | Why |
|---|---|---|---|
| Priority | SEO and page speed | Visual richness | Clients find me via search and browse on slow Android |
| Animation | Lazy-loaded, transform/opacity only | Always-on rich motion | Protects LCP, INP, and battery |
| UX vs look | UI/UX clarity | Aesthetic bloat | Goal is WhatsApp conversions, not visual showpiece |
| Glass effect | Limited, static, desktop-only | Site-wide glassmorphism | Backdrop blur is costly on low-end phones |
| Primary CTA | WhatsApp | Form-first | Local clients already use WhatsApp daily; lowest friction |
| Rendering | Server components + SSG | Client-heavy SPA | Smaller JS, better SEO |
| Framework | Next.js | Plain React / Astro | One stack for site, API routes, and tools |
| Database | Neon Postgres + Prisma | Supabase / Firebase | Serverless Postgres, scales to zero, type-safe queries, fits Vercel |
| Email | Zoho ZeptoMail | Self-managed SMTP | Built for transactional mail, better deliverability, no SMTP server to run |
| Lead alerts | Kapso WhatsApp + email | Email only | WhatsApp is checked faster than email, so leads get a quicker reply |
| Rate limiting | Upstash Redis | In-memory | Serverless functions are stateless |
| UI kit | shadcn/ui (Radix) | Custom components | Accessible primitives out of the box |
| Animation lib | Framer Motion with `LazyMotion` | GSAP / Three.js | Smaller footprint, React-native API |
| Analytics | PostHog, consent-gated, proxied | GA4 | Journey and event tracking; proxy avoids ad-blocker loss |
| Fonts | 2 families, self-hosted | Many weights/families | Fewer requests, no layout shift |

---

*Last updated: October 2026*
