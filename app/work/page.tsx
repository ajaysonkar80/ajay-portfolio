import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";

interface ProjectWithCaseStudy {
  id: string;
  title: string;
  slug: string;
  description: string;
  coverImage: string | null;
  liveUrl: string | null;
  githubUrl: string | null;
  techStack: string[];
  featured: boolean;
  caseStudy: {
    problem: string;
    solution: string;
    architecture: string | null;
    result: string;
  } | null;
}

export const metadata = {
  title: "Work | Ajay Sonkar",
  description: "Selected projects and case studies showcasing AI systems, web applications, and automation tools built for real businesses.",
};

export default async function WorkPage() {
  const projects = await prisma.project.findMany({
    include: {
      caseStudy: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-heading font-black text-white text-4xl md:text-5xl lg:text-6xl mb-6">
            Selected <span className="text-neon">Work</span>
          </h1>
          <p className="text-white text-lg max-w-xl leading-relaxed">
            Real products built for real businesses — AI systems, web applications, and automation tools that solve actual problems.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project: ProjectWithCaseStudy) => {
              const isUnderDev = !project.liveUrl || project.liveUrl === "Under Development";
              const tagStyle = project.title === "Gaurav Solar Sky" ? "amber" : "blue";

              return (
                <Card
                  key={project.id}
                  className={`glass-hover border-0 bg-transparent ${
                    tagStyle === "amber" ? "glass-amber" : "glass"
                  } ${isUnderDev ? " cursor-not-allowed" : ""} cursor-pointer overflow-hidden`}
                >
                  <CardContent className="p-6">
                    {/* Image placeholder */}
                    <div
                      className="w-full rounded-lg mb-4 flex items-center justify-center text-sm font-mono"
                      style={{
                        height: "140px",
                        background:
                          tagStyle === "amber"
                            ? "rgba(245,158,11,0.06)"
                            : "rgba(0,212,255,0.06)",
                        border:
                          tagStyle === "amber"
                            ? "1px solid rgba(245,158,11,0.1)"
                            : "1px solid rgba(0,212,255,0.1)",
                        color:
                          tagStyle === "amber"
                            ? "#F59E0B"
                            : "#00D4FF",
                      }}
                    >
                      {project.title}
                    </div>

                    {/* Title */}
                    <h3 className="font-heading text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/80 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className={
                            tagStyle === "amber"
                              ? "border-amber-500/50 text-amber-400 bg-amber-500/10"
                              : "border-neon/50 text-neon bg-neon/10"
                          }
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      {project.liveUrl && !isUnderDev && (
                        <Button
                          asChild
                          variant="ghost"
                          className="h-auto px-3 py-1.5 text-sm font-semibold"
                        >
                          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            Live →
                          </Link>
                        </Button>
                      )}
                      {project.githubUrl && !isUnderDev && (
                        <Button
                          asChild
                          variant="ghost"
                          className="h-auto px-3 py-1.5 text-sm font-semibold"
                        >
                          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            GitHub →
                          </Link>
                        </Button>
                      )}
                      <Button
                        asChild
                        variant="ghost"
                        className="h-auto px-3 py-1.5 text-sm font-semibold text-neon"
                      >
                        <Link href={`/work/${project.slug}`}>
                          Case Study →
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
