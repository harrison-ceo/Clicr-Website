"use server";

import { Resend } from "resend";

/*
    Waitlist Signup Action
    - Validates inputs
    - Checks honeypot (Anti-spam)
    - Sends email notification to hello@clicrapp.com
*/
export async function submitWaitlist(formData: FormData) {
    const name = formData.get("name") as string;
    const business = formData.get("business") as string;
    const email = formData.get("email") as string;
    const honeypot = formData.get("clicr_hp") as string; // Honeypot field

    // 1. Spam Protection: Honeypot must be empty
    if (honeypot) {
        console.warn("Honeypot filled. Blocking spam submission.");
        return { success: true }; // Silent failure to fool bots
    }

    // 2. Validation
    if (!name || name.length < 2) return { error: "Please enter a valid name." };
    if (!business || business.length < 2) return { error: "Please enter a valid business name." };
    if (!email || !email.includes("@")) return { error: "Please enter a valid email." };

    // 3. Environment Check
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        console.error("CRITICAL: Missing RESEND_API_KEY. Cannot send waitlist email.");
        // We return success to the user so the UI doesn't break, but log the error on server.
        // In a real scenario, you might want to store this in a DB as backup.
        return { success: true };
    }

    try {
        const resend = new Resend(apiKey);

        // 4. Send Notification to Team
        const { error: teamEmailError } = await resend.emails.send({
            from: "CLICR Waitlist <noreply@clicr.co>",
            to: ["hello@clicrapp.com"],
            subject: `V4.0 Waitlist — ${business} — ${name}`,
            replyTo: email,
            text: `
New V4.0 Waitlist Signup!

Name: ${name}
Business: ${business}
Email: ${email}
Timestamp: ${new Date().toISOString()}

Source: Marketing Site Waitlist Form
            `,
        });

        if (teamEmailError) {
            console.error("Resend (Team) Error:", teamEmailError);
            throw new Error("Failed to notify team.");
        }

        return { success: true };

    } catch (e: any) {
        console.error("Waitlist Error:", e);
        // Fail gracefully with a generic message
        return { error: "Something went wrong. Please try again later." };
    }
}
