# Design Decisions

## Architecture

### Framework Choice
- **Next.js 16** (App Router) - Chosen for its server-side rendering capabilities, file-based routing, and seamless integration with React 19
- **TypeScript** - Used throughout for type safety and developer experience

### Styling Approach
- **Tailwind CSS v4** - Utility-first CSS framework for rapid development and consistent design system
- **Shadcn UI** - Copy-paste component library for pre-built accessible components
- **Framer Motion** - Animation library for smooth transitions and interactive elements

### Design System
- **Dark-themed glassmorphism aesthetic** - Modern, professional look with glass-like surfaces
- **Color palette** - Cyan (#00D4FF) as primary accent, amber (#F59E0B) as secondary accent
- **Typography** - Playfair Display for headings (serif), Geist Sans for body (sans-serif)

## Data & Backend

### Database
- **PostgreSQL with Prisma ORM** - Type-safe database queries with a relational schema
- **Schema includes**: Lead (contact submissions), Project (portfolio items), CaseStudy (detailed project info), Metric (key statistics)

### Caching & Rate Limiting
- **Upstash Redis** - Serverless Redis for rate limiting and caching

### Email & Communications
- **Nodemailer** - Email sending for contact form submissions

## Component Architecture

### Section-based Layout
- Modular section components (Hero, Services, Projects, Contact, etc.)
- Each section is a standalone reusable component

### UI Components
- **UI primitives** (button, card, badge, separator) - Built with Radix UI and Tailwind
- **Custom glass components** - Reusable glassmorphism styling via CSS classes

## Features

### SEO & Metadata
- Dynamic metadata configuration
- Open Graph tags for social sharing

### Performance
- **Font optimization** - next/font for optimized Google Fonts loading
- **Image optimization** - Next.js Image component (when used)

### Analytics & Monitoring
- **PostHog** - Product analytics
- **Sentry** - Error tracking

## File Structure
```
├── app/                 # App Router pages
├── components/          # Reusable components
│   ├── sections/        # Page sections
│   └── ui/              # UI primitives
├── lib/                 # Utilities and configurations
├── prisma/              # Database schema
├── server/              # Server-side code
└── content/             # Content files
```

## Design Patterns

### Glassmorphism Utility Classes
- `.glass` - Transparent glass effect
- `.glass-amber` - Amber-tinted glass
- `.glass-glow` - Glowing glass effect
- `.glass-hover` - Hover-enhanced glass

### Custom CSS Classes
- **Buttons**: `.btn-neon`, `.btn-amber`, `.btn-outline`
- **Badges**: `.badge-blue`, `.badge-amber`
- **Inputs**: `.input-neon`
- **Tech pills**: `.tech-pill`

### Animation Classes
- `.animate-fade-up`, `.animate-fade-in`, `.animate-neon-pulse`
- Custom keyframes for various effects

## State Management

- **React state** (useState, useEffect) for client-side state
- **Server components** for static content

## API Routes

- **Next.js API Routes** (`app/api/`) for serverless endpoints
- Contact form handling via `/api/contact`

## Content Strategy

- **MDX support** - For blog posts and rich markdown content
- **Content directory** - Structured content storage

## Development

### Tooling
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript strict mode** - Type checking

### Scripts
- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run lint` - Linting
- `npm run seed` - Database seeding

---
*Last updated: 2026*
