
"use client";

import { useActionState } from "react";
import { submitWaitlist } from "@/lib/waitlistActions";
import { ArrowLeft, CheckCircle2, Loader2, Sparkles } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const initialState = {
    message: null,
};

export default function WaitlistPage() {
    const [state, formAction, isPending] = useActionState(submitWaitlist, initialState as any);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (state?.success) {
            setSuccess(true);
        }
    }, [state]);

    return (
        <div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden selection:bg-indigo-500/30">

            {/* Background Ambience */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[20%] w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse duration-[8000ms]" />
                <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px]" />

                {/* Subtle grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_20%,transparent_100%)] pointer-events-none" />
            </div>

            {/* Nav */}
            <nav className="absolute top-0 left-0 w-full p-6 flex items-center justify-between z-50">
                <Link href="/" className="flex items-center gap-2 group text-sm font-medium text-white/60 hover:text-white transition-colors">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>
                <img src="/logo-white.png" alt="CLICR" className="h-6 w-auto opacity-80" />
            </nav>

            <div className="flex-1 flex flex-col items-center justify-center p-6 relative z-10 w-full max-w-lg mx-auto">

                {/* Success State */}
                {success ? (
                    <div className="text-center animate-in fade-in zoom-in duration-500 space-y-6 bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md shadow-2xl w-full">
                        <div className="mx-auto w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/30 mb-2">
                            <CheckCircle2 className="w-8 h-8 text-green-400" />
                        </div>
                        <h2 className="text-3xl font-bold bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-transparent">
                            You're on the list!
                        </h2>
                        <p className="text-white/60 leading-relaxed">
                            Thanks for joining early. We'll verify your business details and send you an invite as soon as spots open up.
                        </p>
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center w-full px-6 py-3 rounded-full bg-white text-black font-bold hover:bg-white/90 transition-all active:scale-95"
                        >
                            Back to Website
                        </Link>
                    </div>
                ) : (
                    /* Entry Form */
                    <div className="w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">

                        <div className="text-center space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider">
                                <Sparkles className="w-3 h-3" />
                                Early Access
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-transparent pb-1">
                                Join the V4.0 Waitlist
                            </h1>
                            <p className="text-lg text-white/60 leading-relaxed">
                                Be first in line — faster counting, smarter reporting, and a workflow that finally connects occupancy + ID scanning.
                            </p>
                        </div>

                        {/* Benefits */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                            <div className="bg-white/5 border border-white/5 rounded-xl p-3">
                                <div className="text-white font-bold text-sm">Priority Access</div>
                                <div className="text-white/40 text-xs">Skip the queue</div>
                            </div>
                            <div className="bg-white/5 border border-white/5 rounded-xl p-3">
                                <div className="text-white font-bold text-sm">Design Partner</div>
                                <div className="text-white/40 text-xs">Shape the roadmap</div>
                            </div>
                            <div className="bg-white/5 border border-white/5 rounded-xl p-3">
                                <div className="text-white font-bold text-sm">Launch Updates</div>
                                <div className="text-white/40 text-xs">Stay informed</div>
                            </div>
                        </div>

                        <form action={formAction} className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl backdrop-blur-md shadow-2xl space-y-5">

                            {/* Honeypot (Hidden) */}
                            <input type="text" name="clicr_hp" className="hidden" aria-hidden="true" autoComplete="off" tabIndex={-1} />

                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1.5 ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        placeholder="e.g. Alex Smith"
                                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all font-medium"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="business" className="block text-sm font-medium text-white/80 mb-1.5 ml-1">Business Name</label>
                                    <input
                                        type="text"
                                        id="business"
                                        name="business"
                                        required
                                        placeholder="e.g. The Grand Venue"
                                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all font-medium"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1.5 ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        placeholder="ALex@example.com"
                                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all font-medium"
                                    />
                                </div>
                            </div>

                            {state?.error && (
                                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-200 text-sm text-center font-medium animate-in fade-in slide-in-from-top-1">
                                    {state.error}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isPending}
                                className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-indigo-500/25 active:scale-[0.98] flex items-center justify-center gap-2 mt-2"
                            >
                                {isPending ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Joining...
                                    </>
                                ) : (
                                    "Join Waitlist"
                                )}
                            </button>

                            <p className="text-center text-xs text-white/30 pt-2">
                                We’ll only email you about V4.0 updates. No spam.
                            </p>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}
