
import Link from "next/link";
import { ArrowRight, BarChart3, ScanFace, Users, Zap } from "lucide-react";

export default function DemoLandingPage() {
    return (
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center max-w-5xl mx-auto w-full">

            <div className="space-y-6 max-w-3xl mx-auto mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-4">
                    <Zap className="w-3 h-3" />
                    Interactive Preview
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-transparent pb-2">
                    Next Version Demo
                </h1>

                <p className="text-xl text-white/60 leading-relaxed">
                    A preview of what CLICR is becoming — faster counting, smarter reporting,
                    and a door workflow that finally connects occupancy + ID scanning.
                </p>

                <p className="text-sm text-indigo-400 font-medium animate-pulse">
                    This demo is interactive. Tap around to feel the speed — everything here is simulated.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                    <Link
                        href="/demo/occupancy"
                        className="group flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
                    >
                        Start Demo
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="/demo/insights"
                        className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-full text-lg font-medium border border-white/10 transition-colors"
                    >
                        Skip to Insights
                    </Link>
                </div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-left hover:bg-white/10 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4 text-blue-400">
                        <Users className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Counters that communicate</h3>
                    <p className="text-white/60">Live occupancy that syncs instantly across devices and dashboards. No more walkie-talkie checks.</p>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-left hover:bg-white/10 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4 text-purple-400">
                        <ScanFace className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">ID scanning that syncs</h3>
                    <p className="text-white/60">Verify age and flag bans instantly. One tap entry keeps lines moving fast while logging compliance data.</p>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-left hover:bg-white/10 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-4 text-orange-400">
                        <BarChart3 className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Actionable insights</h3>
                    <p className="text-white/60">See peak times, traffic flow, and demographics update in real time. Know your crowd before the night ends.</p>
                </div>
            </div>

        </div>
    );
}
