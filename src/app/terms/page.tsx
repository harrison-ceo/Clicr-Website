import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/sections/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
    const lastUpdated = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Navbar />

            <div className="flex-grow pt-32 pb-24 px-6 md:px-12">
                <div className="max-w-3xl mx-auto">
                    {/* Back Link */}
                    <div className="mb-8">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Home
                        </Link>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">Terms of Service</h1>
                    <p className="text-muted-foreground mb-12">Last Updated: {lastUpdated}</p>

                    <div className="space-y-12 text-foreground/90 leading-relaxed font-light">

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">1. Acceptance of Terms</h2>
                            <p className="mb-4">
                                By accessing or using the CLICR website, mobile application, and related services (collectively, the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you differ with these Terms, you may not use the Service.
                            </p>
                            <p>
                                We reserve the right to modify these Terms at any time. Your continued use of the Service after any such changes constitutes your acceptance of the new Terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">2. Description of Service</h2>
                            <p className="mb-4">
                                CLICR provides a crowd intelligence platform that allows venues to track occupancy, scan identification documents, and generate reposts.
                            </p>
                            <p>
                                You understand and agree that the Service is provided "AS-IS" and that CLICR assumes no responsibility for the timeliness, deletion, mis-delivery, or failure to store any user communications or personalization settings.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">3. User Accounts</h2>
                            <p className="mb-4">
                                You are responsible for maintaining the confidentiality of your password and account details and are fully responsible for all activities that occur under your password or account.
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>You must provide accurate and complete information when creating an account.</li>
                                <li>You agree to immediately notify CLICR of any unauthorized use of your account.</li>
                                <li>We reserve the right to terminate accounts that are inactive for an extended period or that violate these Terms.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">4. Acceptable Use</h2>
                            <p className="mb-4">You agree not to use the Service to:</p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Violate any local, state, national, or international law.</li>
                                <li>Impersonate any person or entity or falsely state your affiliation with a person or entity.</li>
                                <li>Interfere with or disrupt the Service or servers or networks connected to the Service.</li>
                                <li>Collect or store personal data about other users without their express permission (except as explicitly enabled by the Service's ID scanning features for venue compliance).</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">5. Limitation of Liability</h2>
                            <p className="mb-4 text-muted-foreground">
                                TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT SHALL CLICR, ITS AFFILIATES, OFFICERS, EMPLOYEES, AGENTS, SUPPLIERS OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, COVER OR CONSEQUENTIAL DAMAGES (INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOST PROFITS, REVENUE, GOODWILL, USE OR CONTENT) HOWEVER CAUSED, UNDER ANY THEORY OF LIABILITY, INCLUDING, WITHOUT LIMITATION, CONTRACT, TORT, WARRANTY, NEGLIGENCE OR OTHERWISE.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">6. Termination</h2>
                            <p className="mb-4">
                                We may terminate your access to all or any part of the Service at any time, with or without cause, with or without notice, effective immediately. If you wish to terminate this Agreement or your account, you may simply discontinue using the Service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">7. Governing Law</h2>
                            <p className="mb-4">
                                These Terms shall be governed by the laws of the State of Delaware, without respect to its conflict of laws principles.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">8. Contact Information</h2>
                            <p className="text-muted-foreground">
                                For any questions regarding these Terms of Service, please contact us at:
                            </p>
                            <a href="mailto:hello@clicrapp.com" className="text-accent hover:underline block mt-2 text-lg">
                                hello@clicrapp.com
                            </a>
                        </section>

                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
