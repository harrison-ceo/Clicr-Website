
"use client";

import { useDemoStore } from "@/lib/demoStore";
import { ArrowRight, CheckCircle2, ShieldAlert, XCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function IdScanDemo() {
    const { recordScan, scansTotal } = useDemoStore();
    const [lastResult, setLastResult] = useState<'ACCEPTED' | 'DENIED' | 'BANNED' | null>(null);
    const [scanAnimation, setScanAnimation] = useState(false);

    // Mock data generator
    const generateMockIdentity = (status: 'ACCEPTED' | 'DENIED' | 'BANNED') => {
        const names = ["Alex", "Jordan", "Taylor", "Casey", "Riley"];
        const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones"];
        const name = `${names[Math.floor(Math.random() * names.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;

        const now = new Date();
        // Generate DOB based on status
        let age = 21 + Math.floor(Math.random() * 10);
        if (status === 'DENIED') age = 19; // Underage

        const dobYear = now.getFullYear() - age;
        const dob = `05/20/${dobYear}`;

        return { name, age, dob };
    };

    const [currentIdentity, setCurrentIdentity] = useState(generateMockIdentity('ACCEPTED'));

    const handleSimulate = (status: 'ACCEPTED' | 'DENIED' | 'BANNED') => {
        setScanAnimation(true);

        setTimeout(() => {
            setCurrentIdentity(generateMockIdentity(status));
            setLastResult(status);
            recordScan(status, status === 'DENIED' ? 'Underage' : undefined);
            setScanAnimation(false);
        }, 300); // Quick scan delay simulation
    };

    return (
        <div className="flex-1 flex flex-col items-center justify-center p-6 w-full max-w-md mx-auto">

            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-1">ID Validation</h2>
                <div className="text-white/40 text-sm">Tap buttons below to simulate camera triggers</div>
            </div>

            {/* Scan Card Display */}
            <div className="w-full aspect-[4/5] bg-neutral-900 rounded-3xl border border-white/10 relative overflow-hidden flex flex-col items-center justify-center mb-8 shadow-2xl">

                {/* Result Overlay */}
                <div className={cn(
                    "absolute inset-0 flex flex-col items-center justify-center transition-all duration-300",
                    scanAnimation ? "opacity-50 scale-95 blur-sm" : "opacity-100 scale-100"
                )}>
                    {!lastResult && (
                        <div className="text-center p-8 opacity-40">
                            <div className="w-24 h-24 border-2 border-white/20 border-dashed rounded-xl mx-auto mb-4" />
                            <p>Ready to Scan</p>
                        </div>
                    )}

                    {lastResult && (
                        <div className="w-full h-full p-6 flex flex-col items-center text-center">
                            {/* Status Icon */}
                            <div className={cn(
                                "w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-2xl",
                                lastResult === 'ACCEPTED' && "bg-green-500 text-black",
                                lastResult === 'DENIED' && "bg-red-500 text-white",
                                lastResult === 'BANNED' && "bg-black border-2 border-red-500 text-red-500",
                            )}>
                                {lastResult === 'ACCEPTED' && <CheckCircle2 className="w-12 h-12" />}
                                {lastResult === 'DENIED' && <XCircle className="w-12 h-12" />}
                                {lastResult === 'BANNED' && <ShieldAlert className="w-12 h-12" />}
                            </div>

                            {/* Status Text */}
                            <h2 className={cn(
                                "text-4xl font-black uppercase tracking-wider mb-2",
                                lastResult === 'ACCEPTED' && "text-green-400",
                                lastResult === 'DENIED' && "text-red-500",
                                lastResult === 'BANNED' && "text-red-500",
                            )}>
                                {lastResult}
                            </h2>

                            {/* Details */}
                            <div className="w-full bg-white/5 rounded-xl p-4 mt-4 space-y-2 border border-white/10">
                                <div className="flex justify-between text-sm">
                                    <span className="text-white/40">Name</span>
                                    <span className="font-bold">{currentIdentity.name}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-white/40">Age</span>
                                    <span className={cn("font-bold", lastResult === 'DENIED' ? "text-red-400" : "text-white")}>
                                        {currentIdentity.age}
                                    </span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-white/40">DOB</span>
                                    <span>{currentIdentity.dob}</span>
                                </div>
                            </div>

                            {lastResult === 'BANNED' && (
                                <div className="mt-4 px-4 py-2 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-xs font-bold uppercase tracking-wide">
                                    Flagged: Past Incident (Violence)
                                </div>
                            )}

                        </div>
                    )}
                </div>
            </div>

            {/* Sim Controls */}
            <div className="grid grid-cols-3 gap-3 w-full mb-8">
                <button
                    onClick={() => handleSimulate('ACCEPTED')}
                    className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-white/5 hover:bg-green-500/20 hover:border-green-500/50 border border-white/10 transition-all active:scale-95"
                >
                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                    <span className="text-xs font-bold text-green-400">Accept</span>
                </button>
                <button
                    onClick={() => handleSimulate('DENIED')}
                    className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-white/5 hover:bg-red-500/20 hover:border-red-500/50 border border-white/10 transition-all active:scale-95"
                >
                    <XCircle className="w-6 h-6 text-red-400" />
                    <span className="text-xs font-bold text-red-400">Deny</span>
                </button>
                <button
                    onClick={() => handleSimulate('BANNED')}
                    className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-white/5 hover:bg-red-950/50 hover:border-red-500 border border-white/10 transition-all active:scale-95"
                >
                    <ShieldAlert className="w-6 h-6 text-red-600" />
                    <span className="text-xs font-bold text-red-600">Ban Hit</span>
                </button>
            </div>

            {/* Next Step */}
            <Link
                href="/demo/insights"
                className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
            >
                Next: Actionable Insights
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>
    );
}
