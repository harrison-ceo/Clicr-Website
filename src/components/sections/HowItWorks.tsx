
export function HowItWorks() {
    const steps = [
        { title: "Set up venues", desc: "Define your zones, entrances, and capacity limits in minutes." },
        { title: "Count + Scan", desc: "Staff use the app to verify IDs and track entry/exit traffic." },
        { title: "View & Export", desc: "See live dashboards remotely and export reports for stakeholders." },
    ];

    return (
        <section id="how" className="py-24 bg-background">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-heading font-bold mb-4">How it works</h2>
                    <p className="text-muted-foreground">Get up and running in less than a day.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, i) => (
                        <div key={i} className="relative flex flex-col items-center text-center">
                            {/* Connector Line (Desktop) */}
                            {i !== steps.length - 1 && (
                                <div className="hidden md:block absolute top-8 left-1/2 w-full h-[2px] bg-border -z-10" />
                            )}

                            <div className="w-16 h-16 rounded-full bg-background border-2 border-accent flex items-center justify-center text-xl font-bold font-heading mb-6 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                                {i + 1}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                            <p className="text-muted-foreground max-w-xs">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
