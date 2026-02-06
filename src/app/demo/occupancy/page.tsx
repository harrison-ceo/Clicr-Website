
"use client";

import { useDemoStore } from "@/lib/demoStore";
import { ArrowLeft, ArrowRight, Minus, Plus, Users } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function OccupancyDemo() {
    const { occupancy, totalIn, totalOut, incrementOccupancy, decrementOccupancy } = useDemoStore();
    const [showHint, setShowHint] = useState(true);

    const handleAction = (action: 'INC' | 'DEC') => {
        if (action === 'INC') incrementOccupancy();
        else decrementOccupancy();
        setShowHint(false);
    };

    return (
        <div className="flex-1 flex flex-col items-center justify-center p-6 w-full max-w-md mx-auto relative">

            {/* Context Header */}
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
                    <Users className="w-6 h-6 text-indigo-400" />
                    Front Door
                </h2>
                <p className="text-white/40 text-sm">Main Entrance • Capacity: 300</p>
            </div>

            {/* Display Card */}
            <div className="w-full aspect-square bg-[#1A1A1A] rounded-[3rem] border border-white/10 shadow-2xl flex flex-col items-center justify-center relative overflow-hidden mb-8">
                <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

                <span className="text-white/40 text-sm font-medium uppercase tracking-widest mb-2">Occupancy</span>
                <div className="text-[120px] font-bold leading-none tracking-tighter tabular-nums text-white">
                    {occupancy}
                </div>

                {/* Meter Ring (simplified visual) */}
                <div className="absolute bottom-12 flex gap-8">
                    <div className="text-center">
                        <div className="text-xs text-white/40 uppercase font-bold tracking-wider">In</div>
                        <div className="text-xl font-bold text-green-400 tabular-nums">+{totalIn}</div>
                    </div>
                    <div className="text-center">
                        <div className="text-xs text-white/40 uppercase font-bold tracking-wider">Out</div>
                        <div className="text-xl font-bold text-red-400 tabular-nums">-{totalOut}</div>
                    </div>
                </div>
            </div>

            {/* Controls */}
            <div className="grid grid-cols-2 gap-4 w-full mb-8 relative">
                {showHint && (
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-max bg-indigo-600 text-white text-sm font-bold px-4 py-2 rounded-full animate-bounce shadow-lg z-20">
                        Tap + / − to simulate door flow
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-indigo-600" />
                    </div>
                )}

                <button
                    onClick={() => handleAction('DEC')}
                    className="h-24 rounded-3xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center active:scale-95 transition-all text-white/60 hover:text-white"
                >
                    <Minus className="w-10 h-10" />
                </button>
                <button
                    onClick={() => handleAction('INC')}
                    className="h-24 rounded-3xl bg-white text-black flex items-center justify-center active:scale-95 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
                >
                    <Plus className="w-10 h-10" />
                </button>
            </div>

            {/* Next Step */}
            <Link
                href="/demo/id-scan"
                className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
            >
                Next: ID Scanning
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

        </div>
    );
}
