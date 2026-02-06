
"use client";

import Link from "next/link";
import { ArrowLeft, Rocket } from "lucide-react";
import { APP_URL } from "@/lib/config";

export default function LoginPlaceholder() {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 relative overflow-hidden">

            {/* Background Ambience */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-20%] right-[10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-lg w-full text-center space-y-8">

                {/* Icon */}
                <div className="mx-auto w-20 h-20 bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center shadow-2xl">
                    <Rocket className="w-10 h-10 text-indigo-400" />
                </div>

                <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                        V4.0 Launching Soon
                    </h1>
                    <p className="text-lg text-white/60 leading-relaxed">
                        Web browser access for the CLICR dashboard will be available with the <strong>V4.0 release</strong>.
                    </p>
                    <p className="text-sm text-white/40">
                        Until then, please use the mobile app for all venue management.
                    </p>
                </div>

                <div className="pt-8 flex flex-col gap-4">
                    <Link
                        href="https://apps.apple.com/us/app/clicr/id1633722056"
                        className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-full text-base font-bold transition-all hover:scale-105 shadow-[0_0_20px_rgba(99,102,241,0.3)] flex items-center justify-center w-full"
                    >
                        Download Mobile App
                    </Link>
                    <Link
                        href="/"
                        className="flex items-center justify-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-medium"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                </div>

            </div>
        </div>
    );
}
