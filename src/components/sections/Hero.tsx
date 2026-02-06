"use client";

import { ArrowRight, BarChart3, ScanFace, Users, Globe, ShieldCheck } from "lucide-react";
import { PhoneShowcase } from "@/components/ui/PhoneShowcase";
import { CountTicker, SetupTicker } from "@/components/ui/Tickers";
import Link from "next/link";
import { APP_URL } from "@/lib/config";

export function Hero() {
    const handleContactClick = (e: React.MouseEvent) => {
        if (typeof window !== 'undefined' && (window.location.pathname === '/' || window.location.pathname === '')) {
            e.preventDefault();
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
                window.history.pushState(null, '', '/#contact');
            }
        }
    };

    return (
        <section id="top" className="relative w-full min-h-screen flex flex-col items-center justify-center p-8 pt-24 text-center overflow-hidden">

            {/* Background Ambience - Extended to top */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] animate-pulse duration-[4000ms]" />
                <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-8 pt-12">

                {/* Chips */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2 w-fit mx-auto justify-items-center">
                    <div className="glass-chip flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium border border-white/10 bg-white/5 backdrop-blur-md whitespace-nowrap min-w-[200px] justify-center">
                        <Users className="w-4 h-4 text-accent" />
                        <span className="flex items-center gap-1">
                            <CountTicker from={50000} to={1500000} /> Guests Counted
                        </span>
                    </div>
                    <div className="glass-chip flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium border border-white/10 bg-white/5 backdrop-blur-md whitespace-nowrap min-w-[200px] justify-center">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span>Real-time Occupancy</span>
                    </div>
                    <div className="glass-chip flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium border border-white/10 bg-white/5 backdrop-blur-md whitespace-nowrap min-w-[200px] justify-center">
                        <Globe className="w-4 h-4 text-accent" />
                        <span className="flex items-center gap-1">
                            <SetupTicker /> Setup
                        </span>
                    </div>
                    <div className="glass-chip flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium border border-white/10 bg-white/5 backdrop-blur-md whitespace-nowrap min-w-[200px] justify-center">
                        <ShieldCheck className="w-4 h-4 text-accent" />
                        <span>Capacity Compliance Ready</span>
                    </div>
                </div>

                {/* Headlines */}
                <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tight leading-[1.1]">
                    Count. Verify. Report. <br /> <span className="text-accent">Instantly.</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                    CLICR: <span className="text-xl md:text-2xl font-semibold text-white">counters that communicate</span>. Live occupancy from anywhere. ID scanning and exportable reporting. Built for compliance and lowering risk.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
                    <Link
                        href="https://apps.apple.com/us/app/clicr/id1633722056"
                        className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full text-base font-semibold transition-all hover:scale-105 shadow-[0_0_20px_rgba(99,102,241,0.3)] flex items-center justify-center"
                    >
                        Download on App Store
                    </Link>
                    <Link
                        href={`${APP_URL}/demo`}
                        className="px-8 py-4 rounded-full text-base font-semibold border border-white/10 hover:bg-white/5 transition-colors flex items-center justify-center gap-2 group"
                    >
                        View Interactive Demo
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>

            {/* Visual Mock (Simplified CSS-only Dashboard) */}
            {/* Visual Mock (Phone Showcase) */}
            <div className="relative z-10 w-full mt-10 md:mt-20 mb-12 flex justify-center">
                <PhoneShowcase images={[
                    "/mockups/iphone-main-v4.png", // Main Center (Occupancy) - Kept clean/original
                    { src: "/mockups/iphone-left-v3.png", hideStatusBar: true }, // Left (Reports) - Remove recording icon
                    { src: "/mockups/iphone-right-v3.png", hideStatusBar: true } // Right (ID Scan) - Remove recording icon
                ]} />
            </div>

        </section>
    );
}
