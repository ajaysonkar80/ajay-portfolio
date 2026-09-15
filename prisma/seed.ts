import { PrismaClient } from '@prisma/client';
import { PrismaNeon } from '@prisma/adapter-neon';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const adapter = new PrismaNeon({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

const projects = [
  {
    title: 'LaTeX Lens',
    slug: 'latex-lens',
    description: 'AI system that converts images and PDFs into accurate LaTeX code using vision models. Built and shipped end-to-end.',
    coverImage: null,
    liveUrl: 'https://latex-lens.vercel.app/',
    githubUrl: 'https://github.com/ajaysonkar80/latex-lens',
    techStack: ['React', 'React Router', 'Gemini', 'TypeScript'],
    featured: true,
    caseStudy: {
      problem: 'Manual LaTeX conversion from images/PDFs is time-consuming and error-prone, requiring specialized knowledge.',
      solution: 'Built an AI-powered system using vision models to automatically convert documents to accurate LaTeX code.',
      architecture: 'Frontend: React + TypeScript. Backend: Gemini Vision API for document analysis. Full end-to-end implementation.',
      result: 'Reduces LaTeX conversion time from hours to seconds with high accuracy.',
    },
  },
  {
    title: 'Nexer Nova',
    slug: 'nexer-nova',
    description: 'AI-based LinkedIn document generator that creates professional content from structured data.',
    coverImage: null,
    liveUrl: null,
    githubUrl: null,
    techStack: ['Next.js', 'FastAPI', 'OpenAI'],
    featured: true,
    caseStudy: {
      problem: 'Creating professional LinkedIn documents and posts manually is time-consuming and requires consistent formatting.',
      solution: 'Built an AI-powered document generator that transforms structured data into polished LinkedIn content.',
      architecture: 'Frontend: Next.js. Backend: FastAPI with OpenAI integration for content generation.',
      result: 'Generates professional LinkedIn content in seconds with consistent branding and formatting.',
    },
  },
  {
    title: 'Personal CRM',
    slug: 'personal-crm',
    description: 'Internal tool for call scheduling and automated email reminders.',
    coverImage: null,
    liveUrl: null,
    githubUrl: null,
    techStack: ['FastAPI', 'Zepto Mail'],
    featured: true,
    caseStudy: {
      problem: 'Managing personal and business contacts requires tracking follow-ups, calls, and sending timely reminders.',
      solution: 'Created a custom CRM tool with automated call scheduling and email reminder system.',
      architecture: 'Backend: FastAPI. Email delivery: Zepto Mail integration. Custom automation workflows.',
      result: 'Automated reminder system ensures no follow-up is missed and maintains organized contact management.',
    },
  },
];

async function main() {
  console.log('Starting database seed...');

  for (const projectData of projects) {
    const { caseStudy, ...projectInput } = projectData;
    
    const project = await prisma.project.upsert({
      where: { slug: projectInput.slug },
      update: projectInput,
      create: projectInput,
    });

    if (caseStudy) {
      await prisma.caseStudy.upsert({
        where: { projectId: project.id },
        update: caseStudy,
        create: {
          projectId: project.id,
          ...caseStudy,
        },
      });
    }

    console.log(`✅ Seeded project: ${project.title}`);
  }

  const metrics = [
    { label: 'Projects', value: '20+' },
    { label: 'Satisfaction', value: '100%' },
    { label: 'Hours Saved', value: '1000+' },
  ];

  for (const metric of metrics) {
    const existing = await prisma.metric.findFirst({
      where: { label: metric.label },
    });

    if (existing) {
      await prisma.metric.update({
        where: { id: existing.id },
        data: metric,
      });
    } else {
      await prisma.metric.create({
        data: metric,
      });
    }
  }

  console.log('✅ Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });