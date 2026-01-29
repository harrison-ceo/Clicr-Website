import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function Card({ className, children, ...props }: CardProps) {
    return (
        <div
            className={cn(
                "bg-card text-card-foreground rounded-2xl border border-border/80 shadow-sm p-6 hover:shadow-md transition-all duration-300",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

export function CardHeader({ className, children, ...props }: CardProps) {
    return <div className={cn("flex flex-col space-y-1.5 mb-4", className)} {...props}>{children}</div>;
}

export function CardTitle({ className, children, ...props }: CardProps) {
    return <h3 className={cn("font-heading font-semibold leading-none tracking-tight text-lg", className)} {...props}>{children}</h3>;
}

export function CardContent({ className, children, ...props }: CardProps) {
    return <div className={cn("text-muted-foreground", className)} {...props}>{children}</div>;
}
