import { ArrowRight, Lightbulb, Rocket } from "lucide-react";

export function StoryTimeline() {
    const timeline = [
        {
            title: "Where We Came From",
            icon: Lightbulb,
            content: "We've worked the doors, managed teams, and operated venues. We needed live occupancy + clean ID verification + real reporting—without clunky, disconnected tools. Nothing existed that actually fit how venues run, so we built it."
        },
        {
            title: "Where We Are",
            icon: ArrowRight,
            content: "CLICR is currently an MVP used in real environments. We're offering it completely free for user feedback so operators can shape the product. We build fast and implement changes quickly based on what teams actually need."
        },
        {
            title: "Where We're Going",
            icon: Rocket,
            content: "We're pushing toward two major expansions: (1) Hardware: purpose-built handheld devices that make counting + verification effortless. (2) AI Manager Assistant: an intelligent assistant that thinks like an owner/manager—turning foot traffic + demographic patterns into staffing, compliance, and programming decisions."
        }
    ];

    return (
        <section className="py-24 bg-muted/30">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Story</h2>
                    <p className="text-lg text-muted-foreground">From operators, for operators.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {timeline.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <div key={i} className="relative">
                                <div className="bg-background border border-border/50 rounded-2xl p-8 h-full hover:border-accent/30 transition-colors">
                                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                                        <Icon className="w-6 h-6 text-accent" />
                                    </div>
                                    <h3 className="text-xl font-heading font-bold mb-4">{item.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
