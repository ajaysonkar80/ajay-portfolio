import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ajay Sonkar — freelance web developer in Raipur, Chhattisgarh. I build mobile-first websites for local businesses, delivered in 4 days with ongoing maintenance.",
};

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
