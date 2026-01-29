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
  openGraph: {
    title: "CLICR",
    description: "Crowd Intelligence. Live occupancy + ID scanning.",
    url: "https://clicr.co",
    siteName: "CLICR",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CLICR Crowd Intelligence",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CLICR",
    description: "Crowd Intelligence. Live occupancy + ID scanning.",
    images: ["/og-image.jpg"],
  },
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
