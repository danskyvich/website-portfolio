import * as z from "zod"

export const ContactMeSchema = z.object({
    name: z.string().min(1, "Name must not be empty."),
    email: z.email().min(1, "Email must not be empty."),
    message: z.string().min(1, "Message body must not be empty."),
});

export type ContactMeData = z.infer<typeof ContactMeSchema>;