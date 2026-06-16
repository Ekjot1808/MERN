import { z } from "zod";

const contactSchema = z.object({
    name: z
        .string({ required_error: "Please fill name" })
        .trim()
        .min(3, { message: "Name must be at least 3 characters" })
        .max(100, { message: "Name must be at most 100 characters" }),
    email: z
        .string({ required_error: "Please fill email" })
        .email({ message: "Please fill valid email" })
        .trim()
        .transform((email) => email.toLowerCase()),
    message: z
        .string({ required_error: "Please fill message" })
        .trim()
        .min(10, { message: "Message must be at least 10 characters" })
});

export default contactSchema;