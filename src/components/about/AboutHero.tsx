import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function AboutHero() {
    return (
        <section className="relative w-full min-h-[70vh] flex flex-col items-center justify-center p-8 pt-32 text-center overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] animate-pulse duration-[4000ms]" />
                <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-8">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight leading-tight">
                    Built by operators.<br />Designed for the real world.
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                    We've worked the doors, managed teams, and operated venues. We couldn't find the tools we needed, so we built them. Now we're iterating with partners to make CLICR the platform operators actually want to use.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link
                        href="/#contact"
                        className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-full text-base font-medium transition-all hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] active:scale-95"
                    >
                        Talk to Us
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 border border-border hover:border-accent/50 bg-background/50 hover:bg-background/80 text-foreground px-8 py-3 rounded-full text-base font-medium transition-all active:scale-95"
                    >
                        See the Platform
                    </Link>
                </div>
            </div>
        </section>
    );
}
