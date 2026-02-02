import prisma from '@/lib/prisma'
import { StatCard } from '@/components/dashboard/StatCard'
import { Users, Building2, Store, Activity, Zap } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default async function DashboardPage() {
    // Fetch summary data from the new app's database
    const venueCount = await prisma.venue.count()
    const areaCount = await prisma.area.count()
    const clicrCount = await prisma.clicr.count({ where: { isActive: true } })

    const allClicrs = await prisma.clicr.findMany({
        select: { currentCount: true, flowMode: true }
    })

    // Aggregate total occupancy
    const totalOcc = allClicrs.reduce((acc, clicr) => acc + clicr.currentCount, 0)

    const isFreshInstall = venueCount === 0

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                        Overview
                    </h2>
                    <p className="text-slate-400 mt-1">Real-time SaaS Metrics</p>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-sm font-medium text-emerald-400">System Live</span>
                </div>
            </div>

            {isFreshInstall ? (
                <div className="p-12 rounded-2xl border border-dashed border-slate-700 bg-slate-900/30 text-center">
                    <div className="mx-auto h-16 w-16 bg-indigo-500/10 rounded-full flex items-center justify-center mb-4">
                        <Zap className="h-8 w-8 text-indigo-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Welcome to CLICR SaaS</h3>
                    <p className="text-slate-400 max-w-md mx-auto mb-6">
                        Your platform is ready. Start by configuring your first venue.
                    </p>
                    <a href="/dashboard/venues" className="inline-flex items-center px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition-colors">
                        Setup First Venue
                    </a>
                </div>
            ) : (
                <>
                    {/* KPI Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <StatCard
                            title="Total Live Count"
                            value={totalOcc}
                            icon={Users}
                            color="indigo"
                            change="+5% vs 1h ago"
                            trend="up"
                        />
                        <StatCard
                            title="Venues"
                            value={venueCount}
                            icon={Building2}
                            color="purple"
                        />
                        <StatCard
                            title="Areas"
                            value={areaCount}
                            icon={Store}
                            color="emerald"
                        />
                        <StatCard
                            title="Active Clicrs"
                            value={clicrCount}
                            icon={Activity}
                            color="rose"
                        />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-96">
                        <div className="lg:col-span-2 rounded-2xl border border-slate-800 bg-slate-950/50 p-6 backdrop-blur-sm">
                            <h3 className="text-lg font-bold text-white mb-4">Traffic Trends</h3>
                            <div className="flex items-center justify-center h-64 text-slate-500 bg-slate-900/50 rounded-lg border border-dashed border-slate-800">
                                [Interactive Chart Placeholder]
                            </div>
                        </div>
                        <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6 backdrop-blur-sm">
                            <h3 className="text-lg font-bold text-white mb-4">Audience Snapshot</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center p-3 bg-slate-900/50 rounded-lg">
                                    <span className="text-sm text-slate-400">Avg Age</span>
                                    <span className="text-white font-bold">24.5</span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-slate-900/50 rounded-lg">
                                    <span className="text-sm text-slate-400">Gender Split</span>
                                    <span className="text-white font-bold">55% M / 45% F</span>
                                </div>
                                <div className="mt-4 p-4 border border-indigo-500/20 bg-indigo-500/5 rounded-lg">
                                    <p className="text-xs text-indigo-300 mb-1">Top Zip Code</p>
                                    <p className="text-lg font-bold text-indigo-400">10012</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
