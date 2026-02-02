
import Link from "next/link";
import { APP_URL } from "@/lib/config";

export function CTA() {
    return (
        <section className="py-24 px-6 bg-background">
            <div className="max-w-5xl mx-auto relative overflow-hidden rounded-[2.5rem] bg-foreground text-background px-8 py-20 text-center">

                {/* Background glow */}
                <div className="absolute top-0 left-0 w-full h-full bg-accent/10 pointer-events-none" />
                <div className="absolute top-[-50%] left-[20%] w-[500px] h-[500px] bg-accent/30 rounded-full blur-[100px]" />

                <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight">
                        Run smoother nights. Stay compliant.
                    </h2>
                    <p className="text-lg text-background/70 max-w-2xl mx-auto">
                        Use the MVP free for feedback, built to help teams track occupancy, support fire marshal compliance, and avoid fines.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <Link
                            href={`${APP_URL}/login`}
                            className="px-8 py-4 rounded-full text-lg font-bold bg-background text-foreground hover:bg-background/90 transition-colors inline-block"
                        >
                            Create Free Account
                        </Link>
                        <Link
                            href={`${APP_URL}/demo`}
                            className="px-8 py-4 rounded-full text-lg font-bold border border-background/20 hover:bg-background/10 transition-colors inline-block"
                        >
                            Try Demo First
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
