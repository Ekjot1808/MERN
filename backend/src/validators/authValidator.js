import { z } from "zod";

export const registerSchema = z.object({
    name: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must be at least 3 characters long" })
        .max(20, { message: "Name must be at most 20 characters long" }),
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .min(1, "Email is required")
        .max(254, "Email is too long")
        .email("Invalid email address")
        .transform((email) => email.toLowerCase()),
    password: z
        .string({ required_error: "Password is required" })
        .trim()
        .min(6, { message: "Password must be at least 6 characters long" })
        .max(20, { message: "Password must be at most 20 characters long" }),
});

export const loginSchema = z.object({
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .min(1, "Email is required")
        .max(254, "Email is too long")
        .email("Invalid email address")
        .transform((email) => email.toLowerCase()),
    password: z
        .string({ required_error: "Password is required" })
        .trim()
        .min(6, { message: "Password must be at least 6 characters long" })
        .max(20, { message: "Password must be at most 20 characters long" }),
});