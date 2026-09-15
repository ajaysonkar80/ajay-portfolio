import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import InteractiveCardCTA from "@/components/sections/InteractiveCardCTA";
import Navbar from "@/components/Navbar";

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-14">
      <span className="badge-blue mb-4">{eyebrow}</span>
      <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
        {title}
      </h2>
      <p className="text-white text-lg max-w-xl">{description}</p>
    </div>
  );
}

function ProblemCostSolutionResult({
  problem,
  cost,
  solution,
  result,
  deliverables,
}: {
  problem: string;
  cost: string;
  solution: string;
  result: string;
  deliverables: string[];
}) {
  return (
    <div className="mb-12">
      <div className="mb-6">
        <div className="text-white font-semibold text-sm mb-1">Problem</div>
        <p className="text-white/80 text-sm leading-relaxed">{problem}</p>
      </div>
      <div className="mb-6">
        <div className="text-white font-semibold text-sm mb-1">Cost</div>
        <p className="text-white/80 text-sm leading-relaxed">{cost}</p>
      </div>
      <div className="mb-6">
        <div className="text-white font-semibold text-sm mb-1">Solution</div>
        <p className="text-white/80 text-sm leading-relaxed">{solution}</p>
      </div>
      <div className="mb-6">
        <div className="text-white font-semibold text-sm mb-1">Result</div>
        <p className="text-white/80 text-sm leading-relaxed">{result}</p>
      </div>
      <div>
        <div className="text-white font-semibold text-sm mb-3">What you get</div>
        <ul className="space-y-2">
          {deliverables.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
              <span className="text-neon shrink-0">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="font-heading font-black text-white mb-6 text-4xl md:text-5xl lg:text-6xl">
            You&apos;re losing customers and time.{" "}
            <span className="text-amber">I fix both.</span>
          </h1>
          <p className="text-white mx-auto mb-10 text-lg max-w-2xl">
            Local businesses don&apos;t need more technology. They need fewer missed leads,
            fewer repetitive tasks, and fewer website problems. Here&apos;s how I solve that.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#solutions"
              className="btn-neon inline-flex items-center px-8 py-4 text-base font-semibold rounded-lg"
              style={{
                background: "#00D4FF",
                color: "#080c14",
                border: "none",
              }}
            >
              Find Your Solution
            </a>
            <Link
              href="/work"
              className="btn-outline inline-flex items-center px-8 py-4 text-base font-semibold rounded-lg"
              style={{
                background: "transparent",
                color: "#00D4FF",
                border: "1px solid rgba(0,212,255,0.4)",
              }}
            >
              Read Case Studies →
            </Link>
          </div>
        </div>
      </section>

      <Separator
        style={{
          background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.18), rgba(245,158,11,0.12), transparent)",
          height: "1px",
          border: "none",
        }}
      />

      {/* Section 1: Get Found */}
      <section id="solutions" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Get Found"
            title="Website + Local SEO"
            description="Make sure your customers can find you when they search for what you sell."
          />
          <ProblemCostSolutionResult
            problem="Someone searches for what you sell. Your competitor shows up. You don't."
            cost="They call your competitor instead."
            solution="I build websites that load fast and make the important information easy to find. I also make sure Google shows your business when people in your area search for what you sell."
            result="More people find you. More people trust you. More people contact you."
            deliverables={[
              "Fast, mobile-friendly website",
              "Phone, email, and address clear on the page",
              "Google Business Profile set up",
              "Local search improvements (no technical jargon, just results)",
            ]}
          />
        </div>
      </section>

      <Separator
        style={{
          background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.18), rgba(245,158,11,0.12), transparent)",
          height: "1px",
          border: "none",
        }}
      />

      {/* Section 2: Get More Customers */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Get More Customers"
            title="Conversion Optimization"
            description="Turn website visitors into actual calls and inquiries."
          />
          <ProblemCostSolutionResult
            problem="People visit your website but do not call you."
            cost="Traffic is wasted. You paid for it. It got you nothing."
            solution="The problem is not always traffic. Sometimes people simply do not know what to do next. I put your offer, phone number, WhatsApp button, and next step where people can see them."
            result="More visitors become calls. More calls become customers."
            deliverables={[
              "Clear call-to-action buttons (Call, WhatsApp, Book Now)",
              "Simple forms that actually get filled out",
              "Trust indicators (testimonials, reviews, badges)",
              "Speed optimization (slow sites lose customers)",
            ]}
          />
        </div>
      </section>

      <Separator
        style={{
          background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.18), rgba(245,158,11,0.12), transparent)",
          height: "1px",
          border: "none",
        }}
      />

      {/* Section 3: Stop Losing Leads */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Stop Losing Leads"
            title="CRM + Follow-up"
            description="Make sure every customer inquiry gets a response."
          />
          <ProblemCostSolutionResult
            problem="A customer messages you. Nobody replies."
            cost="That's a customer you lost forever."
            solution="Every lead goes into one place. Every lead gets a response. No more forgotten messages."
            result="Nobody gets forgotten. Every customer gets a reply."
            deliverables={[
              "Centralized system for all leads",
              "Automatic follow-up messages",
              "Lead tracking (who contacted you, when, what they need)",
              "Integration with WhatsApp and email",
            ]}
          />
        </div>
      </section>

      <Separator
        style={{
          background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.18), rgba(245,158,11,0.12), transparent)",
          height: "1px",
          border: "none",
        }}
      />

      {/* Section 4: Save Time */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Save Time"
            title="Workflow Automation"
            description="Stop wasting time on repetitive work."
          />
          <ProblemCostSolutionResult
            problem="Your team does the same task 50 times a day."
            cost="That&apos;s time they should spend on real customer work."
            solution="I connect your tools so the boring work happens automatically. Data entry, replies, reminders—let the computer handle it."
            result="Your team gets their time back. You save money."
            deliverables={[
              "Forms → Google Sheets / CRM automation",
              "Auto-reply messages for common questions",
              "Appointment reminders",
              "Report generation",
            ]}
          />
        </div>
      </section>

      <Separator
        style={{
          background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.18), rgba(245,158,11,0.12), transparent)",
          height: "1px",
          border: "none",
        }}
      />

      {/* Section 5: Keep Safe */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Keep Your Website Safe"
            title="Hosting + Maintenance"
            description="No more worrying about your site going down."
          />
          <ProblemCostSolutionResult
            problem="Your website goes down. You don&apos;t know until customers complain."
            cost="Lost customers. Bad reviews."
            solution="I handle hosting, updates, backups, and security. I check on your site regularly so you don&apos;t have to."
            result="Your site stays up. You stay calm."
            deliverables={[
              "Fast hosting included",
              "Weekly backups",
              "Monthly updates",
              "Security monitoring",
              "Unlimited small content changes",
            ]}
          />
        </div>
      </section>

      {/* Interactive CTA */}
      <InteractiveCardCTA />
    </main>
  );
}