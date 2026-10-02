import type { Metadata } from "next";
import { Playfair_Display, Geist, Geist_Mono } from "next/font/google";
import { MotionProvider } from "@/components/motion-provider";
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
    default: "Ajay Sonkar | Senior Frontend Developer",
    template: "%s | Ajay Sonkar",
  },
  description:
    "Websites and apps that turn visitors into customers. Senior frontend developer specializing in React, Next.js, and high-performance design.",
  metadataBase: new URL("https://ajaysonkar.com"),
  openGraph: {
    title: "Ajay Sonkar | Senior Frontend Developer",
    description:
      "Websites and apps that turn visitors into customers.",
    url: "https://ajaysonkar.com",
    siteName: "Ajay Sonkar",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ajay Sonkar | Senior Frontend Developer",
    description:
      "Websites and apps that turn visitors into customers.",
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
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
