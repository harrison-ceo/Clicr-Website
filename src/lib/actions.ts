"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

if (!process.env.RESEND_API_KEY) {
    console.warn("Missing RESEND_API_KEY environment variable");
}

export async function sendEmail(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const venue = formData.get("venue") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
        return { error: "Missing required fields" };
    }

    try {
        const { data, error } = await resend.emails.send({
            from: "CLICR Website <noreply@clicr.co>",
            to: ["hello@clicrapp.com"],
            subject: `New Inquiry from ${name} (${venue || "No Venue"})`,
            replyTo: email,
            text: `
Name: ${name}
Email: ${email}
Venue: ${venue || "N/A"}

Message:
${message}
            `,
        });

        if (error) {
            console.error("Resend error:", error);
            return { error: error.message || "Failed to send email." };
        }

        return { success: true };
    } catch (e: any) {
        console.error("Server action error:", e);
        return { error: e.message || "Something went wrong." };
    }
}
