import { Users, Zap, Target, BarChart3 } from "lucide-react";

export function HowWeWork() {
    const pillars = [
        {
            icon: Users,
            title: "Operator-led design",
            description: "Built by people who've worked the door and managed venues."
        },
        {
            icon: Zap,
            title: "Rapid iteration from feedback",
            description: "We implement changes fast based on what teams actually need."
        },
        {
            icon: Target,
            title: "Built for speed at the door",
            description: "Every feature is designed to work in real-world, high-pressure environments."
        },
        {
            icon: BarChart3,
            title: "Data that's actually usable",
            description: "Clear charts, simple insights—no jargon, no clutter."
        }
    ];

    return (
        <section className="py-24 bg-muted/30">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">How We Work</h2>
                    <p className="text-lg text-muted-foreground">Our principles guide everything we build.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {pillars.map((pillar, i) => {
                        const Icon = pillar.icon;
                        return (
                            <div key={i} className="text-center">
                                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                                    <Icon className="w-8 h-8 text-accent" />
                                </div>
                                <h3 className="text-lg font-heading font-bold mb-2">{pillar.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
