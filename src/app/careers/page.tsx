import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Navbar />

            <div className="flex-grow pt-32 pb-24 px-6">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    {/* Back Link */}
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>

                    <h1 className="text-4xl md:text-6xl font-heading font-bold">
                        Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">Team</span>
                    </h1>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-12 max-w-2xl mx-auto backdrop-blur-sm">
                        <p className="text-xl md:text-2xl font-semibold mb-4">
                            No current openings.
                        </p>
                        <p className="text-muted-foreground mb-8 leading-relaxed">
                            We're mostly full up right now, but we're always interested in meeting talented people passionate about crowd intelligence and live event tech.
                        </p>

                        <a
                            href="mailto:hello@clicrapp.com?subject=Career%20Inquiry%20-%20[Your%20Name]"
                            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-colors border border-white/10"
                        >
                            Email us anyway
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
