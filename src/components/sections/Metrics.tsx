export function Metrics() {
    const stats = [
        { label: "People counted", value: "1.5M+" },
        { label: "Setup", value: "< 6 min" },
        { label: "Access control", value: "Role-Based" },
        { label: "Reports", value: "Export-Ready" },
    ];

    return (
        <section className="py-12 border-y border-border/50 bg-background/50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-4xl font-heading font-bold text-foreground mb-1">{stat.value}</div>
                            <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
