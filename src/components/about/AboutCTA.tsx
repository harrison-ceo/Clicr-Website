import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

export function AboutCTA() {
    return (
        <section className="py-24 bg-muted/30">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                    Want to help shape CLICR?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                    We're running pilots with venues and security teams. Use the MVP free and tell us what to build next.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/#contact"
                        className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-full text-base font-medium transition-all hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] active:scale-95"
                    >
                        Get in Touch
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                        href="mailto:hello@clicrapp.com"
                        className="inline-flex items-center gap-2 border border-border hover:border-accent/50 bg-background/50 hover:bg-background/80 text-foreground px-8 py-3 rounded-full text-base font-medium transition-all active:scale-95"
                    >
                        <Mail className="w-4 h-4" />
                        Email Us
                    </a>
                </div>
            </div>
        </section>
    );
}
