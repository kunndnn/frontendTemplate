import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("auth.invalidEmail"),
  password: z.string().min(6, "auth.passwordMinLength"),
});
export type LoginFormData = z.infer<typeof loginSchema>;
