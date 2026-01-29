import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

export function UseCases() {
    const cases = [
        {
            title: "Events & Activations",
            desc: "Prove attendance and keep entry flowing efficiently.",
            tag: "High Volume"
        },
        {
            title: "Venues & Nightlife",
            desc: "Manage occupancy in real time to avoid fines and ensure safety.",
            tag: "Compliance"
        },
        {
            title: "Buildings & Lobbies",
            desc: "Consistent check-in processes and daily reporting.",
            tag: "Security"
        },
        {
            title: "Pop-ups",
            desc: "Validate foot traffic and align teams on one metric.",
            tag: "Analytics"
        },
    ];

    return (
        <section id="use-cases" className="py-24 bg-muted/30 border-t border-border/50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-heading font-bold mb-4">Built for every space</h2>
                    <p className="text-muted-foreground">Scalable solutions for venues of any size.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {cases.map((item, i) => (
                        <Card key={i} className="bg-background">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0">
                                <CardTitle>{item.title}</CardTitle>
                                <span className="text-xs font-medium px-2 py-1 rounded bg-muted text-muted-foreground">{item.tag}</span>
                            </CardHeader>
                            <CardContent className="mt-2 text-base">
                                {item.desc}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
