
"use client";

import { useDemoStore } from "@/lib/demoStore";
import { ArrowRight, BarChart3, RefreshCw, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function InsightsDemo() {
    const {
        occupancy, totalIn, totalOut,
        scansAccepted, scansDenied, bannedHits,
        eventLog, ageBuckets, genderSplit,
        resetDemo
    } = useDemoStore();

    // Simply calculate percentages for gender bar
    const totalGender = genderSplit.male + genderSplit.female + genderSplit.other || 1;
    const malePct = (genderSplit.male / totalGender) * 100;
    const femalePct = (genderSplit.female / totalGender) * 100;

    return (
        <div className="flex-1 flex flex-col p-4 md:p-8 w-full max-w-6xl mx-auto overflow-y-auto">

            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold mb-1">Live Insights</h2>
                    <p className="text-white/60">Real-time data from all connected devices.</p>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={() => resetDemo()}
                        className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm text-white/60 hover:text-white transition-colors border border-white/10"
                    >
                        <RefreshCw className="w-4 h-4" />
                        Reset Data
                    </button>
                    <Link
                        href="https://apps.apple.com/us/app/clicr/id1633722056"
                        target="_blank"
                        className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-sm font-bold text-white transition-colors shadow-lg shadow-indigo-500/20"
                    >
                        Download App
                    </Link>
                </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="p-5 bg-white/5 border border-white/10 rounded-2xl">
                    <div className="text-white/40 text-xs font-bold uppercase tracking-wider mb-1">Live Occupancy</div>
                    <div className="text-4xl font-bold text-white tabular-nums">{occupancy}</div>
                    <div className="text-xs text-white/40 mt-1">Peak: {Math.max(occupancy + 12, 120)}</div>
                </div>
                <div className="p-5 bg-white/5 border border-white/10 rounded-2xl">
                    <div className="text-white/40 text-xs font-bold uppercase tracking-wider mb-1">Total Entries</div>
                    <div className="text-4xl font-bold text-green-400 tabular-nums">{totalIn}</div>
                    <div className="text-xs text-white/40 mt-1">Exits: <span className="text-red-400">-{totalOut}</span></div>
                </div>
                <div className="p-5 bg-white/5 border border-white/10 rounded-2xl">
                    <div className="text-white/40 text-xs font-bold uppercase tracking-wider mb-1">Scans Processed</div>
                    <div className="text-4xl font-bold text-indigo-400 tabular-nums">{scansAccepted + scansDenied}</div>
                    <div className="text-xs text-white/40 mt-1">
                        {Math.round((scansDenied / (scansAccepted + scansDenied || 1)) * 100)}% Denied
                    </div>
                </div>
                <div className="p-5 bg-white/5 border border-white/10 rounded-2xl">
                    <div className="text-white/40 text-xs font-bold uppercase tracking-wider mb-1">Banned Hits</div>
                    <div className="text-4xl font-bold text-red-500 tabular-nums">{bannedHits}</div>
                    <div className="text-xs text-white/40 mt-1">Flagged instantly</div>
                </div>
            </div>

            {/* Charts & Logs Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Left Col: Demographics */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Age Dist */}
                    <div className="p-6 bg-white/5 border border-white/10 rounded-3xl">
                        <h3 className="font-bold mb-6 flex items-center gap-2">
                            <BarChart3 className="w-5 h-5 text-white/40" />
                            Age Distribution
                        </h3>
                        <div className="space-y-4">
                            {ageBuckets.map((bucket) => {
                                const max = Math.max(...ageBuckets.map(b => b.count));
                                const pct = (bucket.count / (max || 1)) * 100;
                                return (
                                    <div key={bucket.label} className="grid grid-cols-[50px_1fr_40px] items-center gap-4">
                                        <div className="text-xs text-white/60 font-medium">{bucket.label}</div>
                                        <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-indigo-500 rounded-full transition-all duration-500 ease-out"
                                                style={{ width: `${pct}%` }}
                                            />
                                        </div>
                                        <div className="text-xs text-white font-bold text-right">{bucket.count}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Gender Split */}
                    <div className="p-6 bg-white/5 border border-white/10 rounded-3xl">
                        <h3 className="font-bold mb-6">Gender Breakdown</h3>
                        <div className="h-4 w-full bg-white/10 rounded-full overflow-hidden flex">
                            <div className="h-full bg-blue-500 transition-all duration-500" style={{ width: `${malePct}%` }} />
                            <div className="h-full bg-pink-500 transition-all duration-500" style={{ width: `${femalePct}%` }} />
                        </div>
                        <div className="flex justify-between mt-3 text-sm font-medium">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-blue-500" />
                                <span className="text-white/60">Male</span>
                                <span className="font-bold">{Math.round(malePct)}%</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-pink-500" />
                                <span className="text-white/60">Female</span>
                                <span className="font-bold">{Math.round(femalePct)}%</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Col: Live Feed */}
                <div className="p-6 bg-white/5 border border-white/10 rounded-3xl h-[500px] flex flex-col">
                    <h3 className="font-bold mb-4 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        Live Event Log
                    </h3>
                    <div className="flex-1 overflow-y-auto space-y-2 pr-2 text-sm mask-linear-fade">
                        {eventLog.length === 0 && (
                            <div className="text-white/20 text-center py-10 italic">No events recorded yet</div>
                        )}
                        {eventLog.map((event) => (
                            <div key={event.id} className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between animate-in slide-in-from-top-2 fade-in duration-300">
                                <div>
                                    <div className={cn(
                                        "font-bold text-xs uppercase tracking-wide",
                                        event.type === 'ENTRY' && "text-green-400",
                                        event.type === 'EXIT' && "text-red-400",
                                        event.type === 'SCAN_ACCEPTED' && "text-indigo-400",
                                        event.type === 'SCAN_DENIED' && "text-red-500",
                                        event.type === 'SCAN_BANNED' && "text-red-600 font-black",
                                    )}>
                                        {event.type.replace('_', ' ')}
                                    </div>
                                    <div className="text-white/40 text-[10px]">
                                        {event.timestamp.toLocaleTimeString()} {event.details ? `• ${event.details}` : ''}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Footer CTA */}
            <div className="mt-12 text-center pb-12">
                <p className="text-white/60 mb-6">Ready to upgrade your venue?</p>
                <div className="flex justify-center gap-4">
                    <Link
                        href="/"
                        className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 font-medium transition-colors"
                    >
                        Back to Home
                    </Link>
                    <Link
                        href="/contact"
                        className="px-6 py-3 rounded-full bg-white text-black font-bold hover:bg-white/90 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                    >
                        Book a Real Demo
                    </Link>
                </div>
            </div>

        </div>
    );
}
