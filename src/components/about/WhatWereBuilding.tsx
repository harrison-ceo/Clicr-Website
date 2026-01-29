import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export function WhatWereBuilding() {
    const features = [
        "Live occupancy visibility",
        "Foot traffic and demographic reporting",
        "Operator-friendly workflows at the door",
        "Built to support compliance + audits"
    ];

    return (
        <section className="py-24">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">What We're Building</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left: Features */}
                    <div className="space-y-4">
                        {features.map((feature, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Check className="w-4 h-4 text-accent" />
                                </div>
                                <p className="text-lg text-foreground">{feature}</p>
                            </div>
                        ))}
                    </div>

                    {/* Right: Pilot Callout */}
                    <div className="bg-gradient-to-br from-accent/10 to-purple-500/10 border border-accent/20 rounded-2xl p-8">
                        <h3 className="text-2xl font-heading font-bold mb-4">MVP is currently free for feedback</h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            We're running pilots with venues and security teams. Use the platform, tell us what works, and help shape what we build next.
                        </p>
                        <Link
                            href="/#contact"
                            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-full text-base font-medium transition-all hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] active:scale-95"
                        >
                            Join the Pilot
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
