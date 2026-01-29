import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { ScanFace, Users, Map, LayoutDashboard, FileBarChart, Lock, Radio } from "lucide-react";

export function Features() {
    const features = [
        { icon: Radio, title: "Clickers that Communicate", desc: "Counters that sync live, giving you visibility from anywhere." },
        { icon: ScanFace, title: "ID Scanning", desc: "Verify IDs quickly and consistently at entry." },
        { icon: Users, title: "Live occupancy tracking", desc: "Prevent overcrowding with real-time capacity monitoring and fire marshal readiness." },
        { icon: Map, title: "Multi Venue/Multi Area", desc: "Manage complex spaces with granular visibility." },
        { icon: FileBarChart, title: "Analytics and Reporting", desc: "Clean summaries and detailed exportable data to support audits and compliance checks." },
        { icon: Lock, title: "Admins Roles", desc: "Staff access levels tailored to your operations." },
    ];

    return (
        <section id="features" className="py-24 bg-background">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-12">
                    <h2 className="text-3xl font-heading font-bold mb-4">Core Capabilities</h2>
                    <p className="text-muted-foreground">Built for the demands of modern venue operations.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    {features.map((feature, i) => (
                        <Card key={i} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] hover:border-accent/50 hover:-translate-y-1 transition-all">
                            <CardHeader>
                                <div className="mb-3 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                    <feature.icon className="w-5 h-5" />
                                </div>
                                <CardTitle>{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {feature.desc}
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-sm text-muted-foreground italic">
                        Live occupancy + exportable reporting makes it easy to prove capacity compliance when it matters.
                    </p>
                </div>
            </div>
        </section>
    );
}
