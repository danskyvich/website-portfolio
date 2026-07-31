import * as z from "zod"

export const ContactMeSchema = z.object({
    subject: z.string().min(1, "Subject must not be empty."),
    email: z.email("Email must not be empty or invalid").pipe(z.email("Please enter a valid email address")),
    message: z.string().min(1, "Message body must not be empty."),
});

export type ContactMeData = z.infer<typeof ContactMeSchema>;