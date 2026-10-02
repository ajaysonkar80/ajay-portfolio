import Image from "next/image";

const tools = [
  { name: "Next.js 15", src: "/nextjs-icon.webp" },
  { name: "TypeScript", src: "/typescript.svg" },
  { name: "Gemini", src: "/google-gemini-icon.svg" },
  { name: "Neon PostgreSQL", src: "/neon.svg" },
  { name: "Vercel", src: "/vercel.svg" },
  { name: "Zepto Mail", src: "/email.svg" },
  { name: "Upstash Redis", src: "/redis-icon.svg" },
  { name: "Tailwind CSS", src: "/tailwind-css-icon.svg" },
];

export default function TrustBadges() {
  return (
    <section className="py-8 sm:py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-[11px] sm:text-xs text-white/70 uppercase tracking-wide sm:tracking-widest mb-5 sm:mb-6">
          Built with production-grade tools trusted by top startups
        </p>
        <ul className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {tools.map((t) => (
            <li
              key={t.name}
              className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-[13px] sm:text-sm text-white border border-white/10 bg-white/[0.03]"
            >
              <Image
                src={t.src}
                alt=""
                aria-hidden="true"
                width={16}
                height={16}
                className="w-4 h-4 shrink-0"
              />
              <span>{t.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
