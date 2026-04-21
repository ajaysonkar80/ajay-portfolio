import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card"; // Assuming you have shadcn installed

// --- Dummy DB Fetch Function ---
// Replace this with your actual database call (e.g., Prisma, Supabase, CMS)
async function getPosts() {
  return [
    { id: "1", title: "Why Next.js is the Future", excerpt: "A deep dive into the App Router.", date: "Oct 24, 2023" },
    { id: "2", title: "Mastering Tailwind CSS", excerpt: "Utility classes for the win.", date: "Oct 28, 2023" },
    { id: "3", title: "Building a SaaS from Scratch", excerpt: "My 30-day journey.", date: "Nov 2, 2023" },
  ];
}

export const revalidate = 3600; // ISR: Revalidate this page every hour

export default async function BlogListing() {
  const posts = await getPosts();

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <div className="mb-12 text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
          The <span className="text-[#00D4FF]">Blog</span>
        </h1>
        <p className="text-white text-lg">Insights, tutorials, and updates.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link href={`/blog/${post.id}`} key={post.id}>
            <Card className="h-full bg-transparent border border-slate-800 hover:border-[#00D4FF]/50 transition-colors cursor-pointer group">
              <CardHeader className="pb-3">
                <p className="text-sm text-slate-500 mb-2">{post.date}</p>
                <h2 className="text-xl font-bold text-white group-hover:text-[#00D4FF] transition-colors">
                  {post.title}
                </h2>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 text-sm">{post.excerpt}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}