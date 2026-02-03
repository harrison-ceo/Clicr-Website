"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { APP_URL } from "@/lib/config";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);

        // Force scroll to top on mount if no hash is present
        if (!window.location.hash) {
            window.scrollTo(0, 0);
        }

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "/about" },
        { name: "Features", href: "/#features" },
        { name: "Use Cases", href: "/#use-cases" },
        { name: "FAQ", href: "/#faq" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300",
                "w-[calc(100%-2rem)] max-w-5xl rounded-[28px] md:rounded-full",
                "border border-white/10",
                "backdrop-blur-md",
                scrolled
                    ? "bg-slate-950/95 shadow-lg border-white/15"
                    : "bg-slate-950/90 border-white/10 shadow-sm",
                "bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
            )}
        >
            <div className="px-6 h-14 md:h-16 flex items-center justify-between relative">
                {/* Mobile Menu Toggle (Left on mobile, hidden on desktop) */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden p-2 text-white/70 hover:text-white transition-colors z-20"
                >
                    <span className="sr-only">Menu</span>
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Logo (Centered on mobile, Left on desktop) */}
                <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 z-10">
                    <Link href="/" className="flex items-center group">
                        <img
                            src="/logo-white.png"
                            alt="CLICR Logo"
                            className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
                        />
                    </Link>
                </div>

                {/* Desktop Links (Hidden on mobile) */}
                <div className="hidden md:flex gap-8 items-center text-sm font-medium text-white">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="hover:text-white/80 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href={`${APP_URL}/demo`}
                        className="text-accent hover:text-white transition-colors font-bold flex items-center gap-1"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                        </span>
                        Live Demo
                    </Link>
                </div>

                {/* CTA (Right) */}
                <div className="flex items-center gap-4 z-20">
                    <Link
                        href={`${APP_URL}/login`}
                        className="bg-accent hover:bg-accent/90 text-white px-4 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all hover:shadow-[0_0_15px_rgba(99,102,241,0.4)] active:scale-95 whitespace-nowrap"
                    >
                        Log In
                    </Link>
                </div>
            </div>

            {/* Mobile Menu Content */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden border-t border-white/10 bg-slate-950/50"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-lg font-medium text-white/90 hover:text-white transition-colors py-2 border-b border-white/5 last:border-0"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
