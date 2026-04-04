import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title:       "LaTeX Lens",
    description: "AI system that converts images and PDFs into accurate LaTeX code using vision models. Built and shipped end-to-end.",
    tags:        ["Next.js", "OpenAI", "Neon DB", "TypeScript"],
    tagStyle:    "blue",
    badge:       "AI · SaaS",
    badgeStyle:  "blue",
    liveUrl:     "#",
    githubUrl:   "#",
  },
  {
    title:       "Gaurav Solar Sky",
    description: "Solar business website with lead capture form. Client receives WhatsApp and email inquiries directly from the site.",
    tags:        ["Next.js", "Tailwind", "Zoho Mail"],
    tagStyle:    "amber",
    badge:       "Local Business",
    badgeStyle:  "amber",
    liveUrl:     "#",
    githubUrl:   null,
  },
  {
    title:       "TasteKissey",
    description: "Beverage startup brand website with animated product showcase and full online presence setup.",
    tags:        ["Next.js", "Framer Motion", "Vercel"],
    tagStyle:    "blue",
    badge:       "Startup Brand",
    badgeStyle:  "blue",
    liveUrl:     "#",
    githubUrl:   "#",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <span className="badge-blue mb-4">Selected Work</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Projects That <span className="text-neon">Deliver</span>
          </h2>
          <p className="text-[#64748b] text-lg max-w-xl">
            Real products built for real businesses — not just demos.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projects.map((p) => (
            <Card
              key={p.title}
              className={`glass-hover border-0 bg-transparent ${p.tagStyle === "amber" ? "glass-amber" : "glass"}`}
            >
              <CardContent className="p-5">
                {/* Image placeholder */}
                <div
                  className="w-full rounded-lg mb-4 flex items-center justify-center text-sm font-mono"
                  style={{
                    height:     "120px",
                    background: p.tagStyle === "amber" ? "rgba(245,158,11,0.06)" : "rgba(0,212,255,0.06)",
                    border:     p.tagStyle === "amber" ? "1px solid rgba(245,158,11,0.1)" : "1px solid rgba(0,212,255,0.1)",
                    color:      p.tagStyle === "amber" ? "#F59E0B" : "#00D4FF",
                  }}
                >
                  {p.title}
                </div>

                {/* Title row */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-heading text-base font-bold text-white">{p.title}</h3>
                  <Badge
                    className={`${p.badgeStyle === "amber" ? "badge-amber" : "badge-blue"} border-0 text-[10px]`}
                  >
                    {p.badge}
                  </Badge>
                </div>

                {/* Description */}
                <p className="text-[#64748b] text-sm leading-relaxed mb-4">
                  {p.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tags.map((t) => (
                    <span key={t} className={p.tagStyle === "amber" ? "tech-pill-amber" : "tech-pill"}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <Button
                    asChild
                    variant="ghost"
                    className="h-auto px-0 text-xs font-semibold hover:bg-transparent"
                    style={{ color: "#00D4FF" }}
                  >
                    <Link href={p.liveUrl}>Live →</Link>
                  </Button>
                  {p.githubUrl && (
                    <Button
                      asChild
                      variant="ghost"
                      className="h-auto px-0 text-xs font-semibold hover:bg-transparent text-[#64748b] hover:text-white transition-colors"
                    >
                      <Link href={p.githubUrl}>GitHub →</Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}