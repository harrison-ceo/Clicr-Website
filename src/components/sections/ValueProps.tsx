import { Footprints, ScanLine, LayoutDashboard } from "lucide-react";

export function ValueProps() {
    const props = [
        {
            icon: Footprints,
            title: "Foot Traffic Counting",
            description: "Real-time counts, venue-level totals, and historical exports to understand your flow.",
        },
        {
            icon: ScanLine,
            title: "ID Scanning + Verification",
            description: "Faster entry with instant verification and cleaner compliance logging.",
        },
        {
            icon: LayoutDashboard,
            title: "Unified Dashboard",
            description: "Manage analytics, reporting, user roles, and audit trails from one place.",
        },
    ];

    return (
        <section className="py-24 bg-background">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Everything you need to manage your venue.</h2>
                    <p className="text-lg text-muted-foreground">CLICR combines the essential tools of venue operations into a single, cohesive platform.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {props.map((prop, i) => (
                        <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl bg-muted/30 border border-border/50 hover:bg-muted/50 transition-colors">
                            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6">
                                <prop.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{prop.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{prop.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
