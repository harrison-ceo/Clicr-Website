import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/sections/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
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

                    <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">Privacy Policy</h1>
                    <p className="text-muted-foreground mb-12">Last Updated: {lastUpdated}</p>

                    <div className="space-y-12 text-foreground/90 leading-relaxed font-light">

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">1. Overview</h2>
                            <p className="mb-4">
                                This Privacy Policy describes how CLICR ("we," "us," or "our") collects, uses, and discloses information when you use our website, mobile applications, and crowd intelligence platform (the "Services").
                            </p>
                            <p>
                                CLICR is primarily a business-to-business (B2B) platform designed for venues, event organizers, and security teams ("Customers") to manage occupancy, verify IDs, and analyze crowd data. This policy applies to:
                            </p>
                            <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                                <li><strong>Visitors</strong> to our marketing website.</li>
                                <li><strong>Authorized Users</strong> of our Customers (e.g., door staff, managers).</li>
                                <li><strong>Patrons</strong> whose IDs may be scanned by our Customers using the Services, to the limited extent we process such data as a processor/service provider.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">2. Information We Collect</h2>

                            <h3 className="text-lg font-semibold mb-2 text-white/90">A. Information You Provide to Us</h3>
                            <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
                                <li><strong>Account Information:</strong> When you register for an account, we collect names, email addresses, phone numbers, and venue details.</li>
                                <li><strong>Communications:</strong> If you contact us directly, we may receive additional information about you, such as the contents of the message and any attachments you may send us.</li>
                                <li><strong>Payment Information:</strong> We may facilitate payment collection through third-party processors. We do not store full credit card numbers on our systems.</li>
                            </ul>

                            <h3 className="text-lg font-semibold mb-2 text-white/90">B. Information Collected via the Services (ID Scanning)</h3>
                            <p className="mb-4">
                                When Authorized Users use our ID scanning features, the App captures data from the ID barcode (PDF417). This may include:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
                                <li>Name and Date of Birth</li>
                                <li>Address and ID Expiration Date</li>
                                <li>Physical characteristics (Height, Eye Color, etc.)</li>
                            </ul>
                            <p className="p-4 bg-muted/20 border-l-4 border-accent rounded-r-lg text-sm italic">
                                Note: We process this data on behalf of our Customers. Our Customers differ in how long they retain this data and how they use it. Please refer to the specific venue's privacy policy for questions about their specific data retention practices.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">3. How We Use Information</h2>
                            <p className="mb-4">We use the information we collect to:</p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Provide, maintain, and improve the Services (e.g., real-time occupancy syncing).</li>
                                <li>Process transactions and manage accounts.</li>
                                <li>Send related information, including confirmations, invoices, technical notices, updates, and security alerts.</li>
                                <li>Monitor and analyze trends, usage, and activities in connection with our Services.</li>
                                <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">4. Sharing of Information</h2>
                            <p className="mb-4">We do not share your personal information with third parties except as described in this policy:</p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li><strong>Vendors and Service Providers:</strong> We may share information with third-party vendors who need access to such information to perform work on our behalf (e.g., cloud hosting, email delivery, payment processing).</li>
                                <li><strong>Legal Requirements:</strong> We may disclose information if we believe disclosure is in accordance with, or required by, any applicable law or legal process.</li>
                                <li><strong>Business Transfers:</strong> We may share information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">5. Data Security</h2>
                            <p className="text-muted-foreground">
                                We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration, and destruction. However, no internet or email transmission is ever fully secure or error-free.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">6. Contact Us</h2>
                            <p className="text-muted-foreground">
                                If you have any questions about this Privacy Policy, please contact us at:
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
