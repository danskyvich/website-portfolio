"use server"

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_TOKEN);

interface SendMessageToEmailProps {
    email: string,
    message: string,
    subject: string,
}

export async function SendMessageToEmail({email, subject, message}: SendMessageToEmailProps) {
    const { data, error } = await resend.emails.send({
        from: 'Guest <onboarding@resend.dev>',
        to: ['danilopelinjr@gmail.com'],
        replyTo: email,
        subject: subject,
        text: message,
    })

    if (!data) { return { success: false as const, error: error ? `${error.name} ${error.statusCode} ${error.message}` : "Unknown error occurred" } }
    return { data, success: true as const}
    
}