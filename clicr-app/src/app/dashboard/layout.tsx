import { Sidebar } from '@/components/dashboard/Sidebar'

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex h-screen bg-slate-950 text-slate-100 font-sans antialiased overflow-hidden">
            <Sidebar />
            <main className="flex-1 overflow-y-auto relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950 pointer-events-none" />
                <div className="relative z-10 p-8 max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    )
}
