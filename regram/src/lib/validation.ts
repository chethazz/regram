import { z } from "zod";

const requiredString = z.string().trim().min(1, "Required");

export const signUpSchema = z.object({
    email: requiredString.email("Invalid email address"),
    username: requiredString.regex(
        /^[a-zA-Z0-9_]+$/,
        "Only letters, numbers and _"
    ),
    password: requiredString.min(8, "Must be at least 9 characters")
});

export type SignUpValues = z.infer<typeof signUpSchema>;

export const logInSchema = z.object({
    username: requiredString,
    password: requiredString,
});

export type LogInValues = z.infer<typeof logInSchema>;