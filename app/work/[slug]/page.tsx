import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Github, ExternalLink, Layers, Target, Lightbulb, Award } from "lucide-react";
import { prisma } from "@/lib/prisma";

export async function generateStaticParams() {
  const projects = await prisma.project.findMany({
    select: { slug: true },
  });

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await prisma.project.findUnique({
    where: { slug },
    include: { caseStudy: true },
  });

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Case Study`,
    description: project.description,
  };
}

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

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await prisma.project.findUnique({
    where: { slug },
    include: { caseStudy: true },
  });

  if (!project) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Button asChild variant="outline">
            <Link href="/work">Back to Work</Link>
          </Button>
        </div>
      </main>
    );
  }

  const isUnderDev = !project.liveUrl || project.liveUrl === "Under Development";

  return (
    <main className="min-h-screen bg-background">
      {/* Back button */}
      <section className="py-8 px-6">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-neon hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Work
          </Link>
        </div>
      </section>

      {/* Project Header */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-heading font-black text-white text-4xl md:text-5xl lg:text-6xl mb-6">
            {project.title}
          </h1>
          <p className="text-white text-lg max-w-2xl leading-relaxed mb-8">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.techStack.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="border-neon/50 text-neon bg-neon/10"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4">
            {project.liveUrl && !isUnderDev && (
              <Button asChild>
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Site
                </Link>
              </Button>
            )}
            {project.githubUrl && !isUnderDev && (
              <Button asChild variant="outline">
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Link>
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Case Study Sections */}
      {project.caseStudy && (
        <>
          {/* Problem */}
          <section className="py-16 px-6 bg-white/5">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-neon" />
                <h2 className="font-heading font-bold text-white text-2xl">
                  The Problem
                </h2>
              </div>
              <p className="text-white/80 text-lg leading-relaxed">
                {project.caseStudy.problem}
              </p>
            </div>
          </section>

          {/* Solution */}
          <section className="py-16 px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="w-6 h-6 text-neon" />
                <h2 className="font-heading font-bold text-white text-2xl">
                  The Solution
                </h2>
              </div>
              <p className="text-white/80 text-lg leading-relaxed">
                {project.caseStudy.solution}
              </p>
            </div>
          </section>

          {/* Architecture */}
          {project.caseStudy.architecture && (
            <section className="py-16 px-6 bg-white/5">
              <div className="max-w-5xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <Layers className="w-6 h-6 text-neon" />
                  <h2 className="font-heading font-bold text-white text-2xl">
                    Architecture
                  </h2>
                </div>
                <p className="text-white/80 text-lg leading-relaxed">
                  {project.caseStudy.architecture}
                </p>
              </div>
            </section>
          )}

          {/* Results */}
          <section className="py-16 px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-neon" />
                <h2 className="font-heading font-bold text-white text-2xl">
                  Results
                </h2>
              </div>
              <p className="text-white/80 text-lg leading-relaxed">
                {project.caseStudy.result}
              </p>
            </div>
          </section>
        </>
      )}

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading font-bold text-white text-3xl mb-4">
            Have a Similar Project in Mind?
          </h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">
            Let&apos;s discuss how we can build something together.
          </p>
          <Button asChild className="px-8 py-6 text-lg">
            <Link href="https://wa.me/918319928445?text=Hi%20Ajay,%20I%20like%20to%20discuss%20a%20project">
              Start a Conversation
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
