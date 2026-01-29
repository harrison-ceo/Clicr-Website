"use client";

import { useState } from "react";
import { Mail, Send, User, Building2, MessageSquare } from "lucide-react";
import { sendEmail } from "@/lib/actions";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        venue: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("sending");

        const formDataObj = new FormData(e.currentTarget);
        const result = await sendEmail(formDataObj);

        if (result.success) {
            setStatus("sent");
            setFormData({ name: "", email: "", venue: "", message: "" });
            setTimeout(() => setStatus("idle"), 5000);
        } else {
            console.error(result.error);
            setStatus("idle");
            alert("Failed to send message. Please try again or email us directly at hello@clicrapp.com");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <section id="contact" className="py-24 bg-muted/30 scroll-mt-24">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Get in Touch</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Interested in using CLICR at your venue? Let's talk about how we can help.
                    </p>
                </div>

                <div className="bg-background border border-border/50 rounded-2xl p-8 md:p-12">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">
                                <div className="flex items-center gap-2">
                                    <User className="w-4 h-4 text-accent" />
                                    Name
                                </div>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                                placeholder="Your name"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                                <div className="flex items-center gap-2">
                                    <Mail className="w-4 h-4 text-accent" />
                                    Email
                                </div>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                                placeholder="your@email.com"
                            />
                        </div>

                        {/* Venue */}
                        <div>
                            <label htmlFor="venue" className="block text-sm font-medium mb-2">
                                <div className="flex items-center gap-2">
                                    <Building2 className="w-4 h-4 text-accent" />
                                    Venue / Organization
                                </div>
                            </label>
                            <input
                                type="text"
                                id="venue"
                                name="venue"
                                value={formData.venue}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                                placeholder="Your venue or company name"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">
                                <div className="flex items-center gap-2">
                                    <MessageSquare className="w-4 h-4 text-accent" />
                                    Message
                                </div>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors resize-none"
                                placeholder="Tell us about your venue and what you're looking for..."
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className="w-full inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 disabled:bg-accent/50 text-white px-8 py-4 rounded-full text-base font-medium transition-all hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] active:scale-95 disabled:cursor-not-allowed"
                        >
                            {status === "sending" ? (
                                <>Sending...</>
                            ) : status === "sent" ? (
                                <>Message Sent!</>
                            ) : (
                                <>
                                    Send Message
                                    <Send className="w-4 h-4" />
                                </>
                            )}
                        </button>

                        {status === "sent" && (
                            <p className="text-center text-sm text-accent">
                                Thanks! We'll get back to you soon.
                            </p>
                        )}
                    </form>

                    {/* Alternative Contact */}
                    <div className="mt-8 pt-8 border-t border-border/50 text-center">
                        <p className="text-sm text-muted-foreground mb-2">
                            Or email us directly at
                        </p>
                        <a
                            href="mailto:hello@clicrapp.com"
                            className="text-accent hover:text-accent/80 font-medium transition-colors"
                        >
                            hello@clicrapp.com
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
