import { cn } from "@/lib/utils";

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
}

export function AccordionItem({ title, children }: AccordionItemProps) {
    return (
        <details className="group border-b border-border/50">
            <summary className="flex cursor-pointer items-center justify-between py-4 font-medium transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 rounded-sm">
                {title}
                <span className="transition-transform duration-200 group-open:rotate-45">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </span>
            </summary>
            <div className="pb-4 pt-1 text-muted-foreground text-sm leading-relaxed animate-in slide-in-from-top-1 fade-in duration-200">
                {children}
            </div>
        </details>
    )
}
