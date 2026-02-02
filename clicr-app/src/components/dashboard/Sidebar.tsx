'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
    LayoutDashboard,
    Briefcase,
    MapPin,
    Layers,
    MousePointer2,
    FileBarChart,
    Settings,
    LogOut
} from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Business', href: '/dashboard/business', icon: Briefcase },
    { name: 'Venues', href: '/dashboard/venues', icon: MapPin },
    { name: 'Areas', href: '/dashboard/areas', icon: Layers },
    { name: 'Clicr', href: '/dashboard/clicr', icon: MousePointer2 },
    { name: 'Reports', href: '/dashboard/reports', icon: FileBarChart },
]

export function Sidebar() {
    const pathname = usePathname()

    return (
        <div className="flex flex-col h-full w-64 bg-slate-950 border-r border-slate-800 text-slate-100">
            <div className="p-6">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
                    CLICR
                </h1>
                <p className="text-xs text-slate-500 mt-1">SaaS Platform v2.0</p>
            </div>

            <nav className="flex-1 px-4 space-y-1">
                {navItems.map((item) => {
                    const isActive = pathname === item.href
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors group",
                                isActive
                                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-900/20"
                                    : "text-slate-400 hover:bg-slate-900 hover:text-white"
                            )}
                        >
                            <item.icon className={cn("mr-3 h-5 w-5", isActive ? "text-white" : "text-slate-500 group-hover:text-white")} />
                            {item.name}
                        </Link>
                    )
                })}
            </nav>

            <div className="p-4 border-t border-slate-800">
                <button className="flex items-center w-full px-4 py-2 text-sm font-medium text-slate-400 rounded-lg hover:bg-slate-900 hover:text-white transition-colors">
                    <Settings className="mr-3 h-5 w-5" />
                    Settings
                </button>
                <button className="flex items-center w-full px-4 py-2 mt-1 text-sm font-medium text-red-400 rounded-lg hover:bg-red-950/30 transition-colors">
                    <LogOut className="mr-3 h-5 w-5" />
                    Logout
                </button>
            </div>
        </div>
    )
}
