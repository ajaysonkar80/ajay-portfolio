import type { Metadata } from "next";
import Services from "@/components/sections/Services2";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development for local businesses in Raipur — mobile-first websites with WhatsApp button, local SEO and contact form, delivered in 4 days.",
};

export default function ServicesPage() {
  return (
    <main id="main-content" className="min-h-screen bg-background">
      <Services/>
    </main>
  );
}