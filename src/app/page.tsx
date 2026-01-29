import { Navbar } from "@/components/ui/Navbar";
import { HeroFrame } from "@/components/layout/HeroFrame";
import { Hero } from "@/components/sections/Hero";
import LogoCloud from "@/components/LogoCloud";
import { ValueProps } from "@/components/sections/ValueProps";
import { Metrics } from "@/components/sections/Metrics";
import { Features } from "@/components/sections/Features";
import { UseCases } from "@/components/sections/UseCases";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { About } from "@/components/sections/About";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Scroll Transition Wrapper */}
      <HeroFrame>
        <Hero />
      </HeroFrame>

      {/* Content continues below naturally */}
      <div className="relative z-0">
        <LogoCloud />
        <ValueProps />
        <Metrics />
        <Features />
        <UseCases />
        <HowItWorks />
        <About />
        <FAQ />
        <Contact />
        <CTA />
      </div>
      <Footer />
    </main>
  );
}
