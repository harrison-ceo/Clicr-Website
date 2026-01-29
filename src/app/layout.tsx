import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://clicr.co'),
  title: "CLICR | Count. Verify. Report.",
  description: "Unified foot traffic counting, ID scanning, and occupancy management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          inter.variable,
          outfit.variable,
          "antialiased bg-background text-foreground font-sans min-h-screen selection:bg-accent/20 selection:text-accent-foreground"
        )}
      >
        {children}
      </body>
    </html>
  );
}
