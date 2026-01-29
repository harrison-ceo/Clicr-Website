import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export function AboutTeam() {
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
            bio: "Harrison has spent 10 years in hospitality operations and holds a degree in Service Design. He leads execution and growth, ensuring CLICR fits seamlessly into real-world workflows.",
            image: "/team/harrison.png"
        },
        {
            name: "Lucas Martinez",
            role: "COO",
            bio: "Lucas comes from startup environments with a focus on coordination, user outreach, and networking within AI startups. He holds a degree in Service Design and scales operations to support rapid growth.",
            image: "/team/lucas.png"
        },
    ];

    return (
        <section className="py-24">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Meet the Team</h2>
                    <p className="text-lg text-muted-foreground">Building the future of crowd intelligence.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
                                <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
