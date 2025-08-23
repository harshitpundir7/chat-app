import z from "zod"

export const loginValidation = z.object({
    email: z.email(),
    password: z.string().min(8).max(25)
})
export const signupValidation = z.object({
    name: z.string().min(2).max(25),
    email: z.email(),
    password: z.string().min(8).max(25)
})