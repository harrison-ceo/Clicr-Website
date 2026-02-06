
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ArrowLeft, BarChart3, ScanFace, Users, X } from "lucide-react";
import { useDemoStore } from "@/lib/demoStore";

const DEMO_STEPS = [
    { label: "Occupancy", href: "/demo/occupancy", icon: Users },
    { label: "ID Scan", href: "/demo/id-scan", icon: ScanFace },
    { label: "Insights", href: "/demo/insights", icon: BarChart3 },
];

export default function DemoLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isHome = pathname === "/demo";

    return (
        <div className="min-h-screen bg-black text-white selection:bg-indigo-500/30">
            {/* Demo Header */}
            <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30 group-hover:bg-indigo-500/30 transition-colors">
                                <span className="font-bold text-indigo-400">C</span>
                            </div>
                            <span className="font-bold tracking-tight hidden sm:block">CLICR <span className="text-white/40 font-normal">Next Demo</span></span>
                        </Link>
                    </div>

                    {/* Progress Steps (Hidden on Landing) */}
                    {!isHome && (
                        <nav className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/10">
                            {DEMO_STEPS.map((step) => {
                                const isActive = pathname === step.href;
                                return (
                                    <Link
                                        key={step.href}
                                        href={step.href}
                                        className={cn(
                                            "flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition-all",
                                            isActive
                                                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25"
                                                : "text-white/60 hover:text-white hover:bg-white/5"
                                        )}
                                    >
                                        <step.icon className="w-4 h-4" />
                                        {step.label}
                                    </Link>
                                );
                            })}
                        </nav>
                    )}

                    <div className="flex items-center gap-4">
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                        >
                            <span className="hidden sm:inline">Back to Site</span>
                            <X className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="pt-16 min-h-screen flex flex-col relative overflow-hidden">
                {/* Global Demo Background */}
                <div className="fixed inset-0 pointer-events-none z-0">
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]" />
                </div>

                <div className="relative z-10 flex-1 flex flex-col">
                    {children}
                </div>
            </main>
        </div>
    );
}
