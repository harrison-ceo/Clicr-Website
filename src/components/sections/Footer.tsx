"use client";

import Link from "next/link";

export function Footer() {
    const handleScroll = (e: React.MouseEvent, id: string) => {
        if (typeof window !== 'undefined' && (window.location.pathname === '/' || window.location.pathname === '')) {
            e.preventDefault();
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                window.history.pushState(null, '', `/#${id}`);
            }
        }
    };

    return (
        <footer className="bg-background border-t border-border py-16">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

                <div className="space-y-4">
                    <img src="/logo-white.png" alt="CLICR Logo" className="h-12 w-auto object-contain" />
                    <p className="text-muted-foreground text-sm">
                        Crowd Intelligence.
                    </p>
                    <a href="mailto:hello@clicrapp.com" className="text-sm font-medium hover:text-accent transition-colors block">
                        hello@clicrapp.com
                    </a>
                    <div className="text-sm text-muted-foreground pt-4">
                        &copy; {new Date().getFullYear()} CLICR Inc.
                    </div>
                </div>

                <div>
                    <h4 className="font-bold mb-6">Product</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                        <li>
                            <Link
                                href="/#features"
                                onClick={(e) => handleScroll(e, 'features')}
                                className="hover:text-foreground"
                            >
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/#use-cases"
                                onClick={(e) => handleScroll(e, 'use-cases')}
                                className="hover:text-foreground"
                            >
                                Use Cases
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/#how"
                                onClick={(e) => handleScroll(e, 'how')}
                                className="hover:text-foreground"
                            >
                                How it Works
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/demo"
                                className="hover:text-foreground font-bold text-accent"
                            >
                                Interactive Demo
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-6">Company</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                        <li><Link href="#about" className="hover:text-foreground">About</Link></li>
                        <li><Link href="/careers" className="hover:text-foreground">Careers</Link></li>
                        {/* Blog link removed */}
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-6">Legal</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                        <li><Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
                        <li><Link href="/terms" className="hover:text-foreground">Terms of Service</Link></li>
                    </ul>
                </div>

            </div>
        </footer>
    );
}
