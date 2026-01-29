import { AccordionItem } from "@/components/ui/Accordion";

export function FAQ() {
    const faqs = [
        { q: "What devices does CLICR run on?", a: "CLICR works on any modern smartphone, tablet, or desktop browser. No proprietary hardware required." },
        { q: "Can staff be restricted from viewing analytics?", a: "Yes. Role-based access allows you to limit doormen to counting only, while managers see full reports." },
        { q: "Does it support multiple venues or zones?", a: "Absolutely. You can manage multiple venues and unlimited zones/entrances from a single account." },
        { q: "Can we export reports?", a: "Yes. Export detailed CSV or PDF reports for clients, fire marshals, or compliance audits instantly." },
        { q: "How does ID scanning work?", a: "We use the device's camera to scan barcodes on IDs, verifying age and logging entry times securely." },
        { q: "How fast is setup?", a: "You can create a venue and invite staff in under 10 minutes." },
        { q: "How does CLICR help with fire marshal compliance?", a: "CLICR provides live occupancy visibility across staff so teams can stay within capacity. It also offers exportable reporting to support compliance checks and audits—helping you reduce risk and stay prepared." },
    ];

    return (
        <section id="faq" className="py-24 bg-background">
            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-3xl font-heading font-bold text-center mb-12">Frequently Asked Questions</h2>
                <div className="space-y-2">
                    {faqs.map((item, i) => (
                        <AccordionItem key={i} title={item.q}>
                            {item.a}
                        </AccordionItem>
                    ))}
                </div>
            </div>
        </section>
    );
}
