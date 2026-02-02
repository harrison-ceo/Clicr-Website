import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface StatCardProps {
    title: string
    value: string | number
    icon: LucideIcon
    change?: string
    trend?: 'up' | 'down' | 'neutral'
    color?: 'indigo' | 'purple' | 'emerald' | 'rose'
}

export function StatCard({ title, value, icon: Icon, change, trend, color = 'indigo' }: StatCardProps) {
    const colorStyles = {
        indigo: "from-indigo-500/20 to-indigo-600/5 border-indigo-500/30 text-indigo-400",
        purple: "from-purple-500/20 to-purple-600/5 border-purple-500/30 text-purple-400",
        emerald: "from-emerald-500/20 to-emerald-600/5 border-emerald-500/30 text-emerald-400",
        rose: "from-rose-500/20 to-rose-600/5 border-rose-500/30 text-rose-400",
    }

    return (
        <div className={cn(
            "relative p-6 rounded-2xl border bg-gradient-to-br backdrop-blur-md overflow-hidden transition-all duration-300 hover:scale-[1.02]",
            colorStyles[color]
        )}>
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider">{title}</h3>
                <div className={cn("p-2 rounded-lg bg-slate-950/50", colorStyles[color].split(' ')[3])}>
                    <Icon className="h-5 w-5" />
                </div>
            </div>

            <div className="flex items-end justify-between">
                <div className="text-3xl font-bold text-white tracking-tight">
                    {value}
                </div>
                {change && (
                    <div className={cn(
                        "flex items-center text-sm font-medium px-2 py-1 rounded-full bg-slate-950/30",
                        trend === 'up' ? "text-emerald-400" : trend === 'down' ? "text-rose-400" : "text-slate-400"
                    )}>
                        {change}
                    </div>
                )}
            </div>

            {/* Decorative glow */}
            <div className={cn(
                "absolute -right-6 -bottom-6 w-24 h-24 rounded-full blur-2xl opacity-20 pointer-events-none",
                color === 'indigo' && "bg-indigo-500",
                color === 'purple' && "bg-purple-500",
                color === 'emerald' && "bg-emerald-500",
                color === 'rose' && "bg-rose-500",
            )} />
        </div>
    )
}
