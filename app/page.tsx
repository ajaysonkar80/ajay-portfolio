import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import TrustBadges from "@/components/sections/TrustBadges";
import Process from "@/components/sections/Process";
import Projects from "@/components/sections/Projects";
import { Metrics, Testimonials } from "@/components/sections/SocialProof";
import FAQ from "@/components/sections/Faq";
import ContactForm from "@/components/sections/ContactForm";
import { Footer, WhatsAppButton } from "@/components/sections/Footer";

// 49KB of client JS — keep SSR HTML for SEO but split it out of the
// initial bundle.
const Services = dynamic(
  () => import("@/components/sections/Services2")
);

function Divider() {
  return (
    <div className="px-8" aria-hidden="true">
      <div className="section-divider" />
    </div>
  );
}

export default function HomePage() {
  return (
    <main id="main-content" className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Divider />
      <TrustBadges />
      <Divider />
      <Services />
      <Divider />
      <Process />
      <Divider />
      <Projects />
      <Divider />
      <Metrics />
      <Testimonials />
      <Divider />
      <FAQ />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
