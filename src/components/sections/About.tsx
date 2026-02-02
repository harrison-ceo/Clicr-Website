import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

export function About() {
    const team = [
        {
            name: "Kaleo Lyles",
            role: "Founder",
            bio: "Kaleo founded a boutique hospitality group with a specialization in nightlife and high-volume events. With many years of experience in this industry, he built CLICR to fill the need for a better way to stay on top of occupancy, compliance, and reporting.",
            image: "/team/kaleo.jpg"
        },
        {
            name: "Harrison Wilkins",
            role: "Co-Founder & CEO",
            bio: "Harrison has spent the last 10 years in hospitality operations and brings a Service Design background to product execution. He focuses on turning messy, manual venue workflows into simple tools operators actually want to use, without slowing down the night.",
            image: "/team/harrison.png"
        },
        {
            name: "Lucas Martinez",
            role: "COO",
            bio: "Lucas comes from fast-moving startup environments, leading coordination, user outreach, and networking, especially in AI-focused teams. With a degree in Service Design, he helps CLICR stay close to users and iterate quickly based on real operator feedback.",
            image: "/team/lucas.png"
        },
    ];

    return (
        <section id="about" className="py-24 bg-muted/30">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-heading font-bold mb-4">Meet the Team</h2>
                    <p className="text-muted-foreground">Building the future of crowd intelligence.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {team.map((member, i) => (
                        <Card key={i} className="text-center bg-background border-border/50">
                            <CardHeader className="items-center">
                                <div className="w-24 h-24 rounded-full bg-muted mb-4 relative overflow-hidden flex items-center justify-center border-2 border-border/50">
                                    {member.image ? (
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <span className="text-2xl font-heading font-bold text-muted-foreground">
                                            {member.name.charAt(0)}
                                        </span>
                                    )}
                                </div>
                                <CardTitle>{member.name}</CardTitle>
                                <span className="text-sm font-medium text-accent">{member.role}</span>
                            </CardHeader>
                            <CardContent>
                                {member.bio}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
