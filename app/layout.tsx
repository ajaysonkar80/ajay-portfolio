import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google"; // 1. Import the font
import "./globals.css";

// 2. Configure the font
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair", // We will use this variable in CSS
  weight: ["400", "600", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ajay Sonkar | Portfolio",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 3. Inject the font variable into the HTML tag
    <html lang="en" className={`${playfair.variable} dark scroll-smooth`}>
      <body>{children}</body>
    </html>
  );
}