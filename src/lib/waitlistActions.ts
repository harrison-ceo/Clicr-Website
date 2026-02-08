
"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

if (!process.env.RESEND_API_KEY) {
    console.warn("Missing RESEND_API_KEY environment variable");
}

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

    try {
        // 3. Send Notification to Team
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

        // 4. (Optional) Send Confirmation to User
        // We can enable this later if desired to keep noise low initially.
        /*
        await resend.emails.send({
            from: "Harrison from CLICR <hello@clicrapp.com>",
            to: [email],
            subject: "You're on the V4.0 Waitlist",
            text: "Thanks for signing up. We'll reach out soon with early access details.",
        });
        */

        return { success: true };

    } catch (e: any) {
        console.error("Waitlist Error:", e);
        return { error: "Something went wrong. Please try again later." };
    }
}
