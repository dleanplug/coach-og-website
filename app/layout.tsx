import {
  Playfair_Display,
  Plus_Jakarta_Sans,
  Geist_Mono,
  Oswald,
} from "next/font/google";

import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import "./globals.css";
import { UseScrollReveal } from "@/components/providers/ScrollRevealProvider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-sans",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coach Obafemi | OG — Business. Career. Life. Performance.",
  description:
    "Coach Obafemi Samson Ogunyoye helps business owners, entrepreneurs, and career professionals build clarity, strategy, and systems to become everything they were designed to be.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={cn(
        "h-full antialiased",
        playfair.variable,
        jakarta.variable,
        oswald.variable,
        geistMono.variable,
      )}>
      <body className='min-h-full flex flex-col'>
        <UseScrollReveal />
        {children}
      </body>
    </html>
  );
}
