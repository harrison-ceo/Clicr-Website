import { AboutHero } from "@/components/about/AboutHero";
import { StoryTimeline } from "@/components/about/StoryTimeline";
import { WhatWereBuilding } from "@/components/about/WhatWereBuilding";
import { AboutTeam } from "@/components/about/AboutTeam";
import { HowWeWork } from "@/components/about/HowWeWork";
import { AboutCTA } from "@/components/about/AboutCTA";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <AboutHero />
            <StoryTimeline />
            <WhatWereBuilding />
            <AboutTeam />
            <HowWeWork />
            <AboutCTA />
            <Footer />
        </main>
    );
}
