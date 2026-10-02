import type { Metadata } from "next";
import { Playfair_Display, Geist, Geist_Mono } from "next/font/google";
import { MotionProvider } from "@/components/motion-provider";
import Navbar from "@/components/Navbar";
import { Footer, WhatsAppButton } from "@/components/sections/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ajay Sonkar | Website Developer in Raipur",
    template: "%s | Ajay Sonkar",
  },
  description:
    "Website developer in Raipur building mobile-first websites for local businesses — WhatsApp button, local SEO, contact form and 4-day delivery from ₹10,000, plus ₹1,000/month maintenance.",
  keywords: [
    "website developer in Raipur",
    "web development Raipur",
    "website design Chhattisgarh",
    "freelance web developer Raipur",
    "local business website India",
    "small business website Raipur",
    "website maintenance India",
  ],
  metadataBase: new URL("https://ajaysonkar.com"),
  openGraph: {
    title: "Ajay Sonkar | Website Developer in Raipur",
    description:
      "Mobile-first websites for local businesses in Raipur — delivered in 4 days from ₹10,000, plus ₹1,000/month maintenance.",
    url: "https://ajaysonkar.com",
    siteName: "Ajay Sonkar",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ajay Sonkar — Website Developer in Raipur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajay Sonkar | Website Developer in Raipur",
    description:
      "Mobile-first websites for local businesses in Raipur — delivered in 4 days from ₹10,000, plus ₹1,000/month maintenance.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-cyan-400 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-950"
        >
          Skip to main content
        </a>
        <Navbar />
        <MotionProvider>{children}</MotionProvider>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
