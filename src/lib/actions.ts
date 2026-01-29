"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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
            return { error: "Failed to send email. Please try again." };
        }

        return { success: true };
    } catch (e) {
        console.error("Server action error:", e);
        return { error: "Something went wrong. Please try again." };
    }
}
