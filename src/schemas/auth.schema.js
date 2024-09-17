import { z } from "zod";

export const registerSchema = z.object({
  username: z.string({
    required_error: "Username is required",
  }),
  email: z
    .string({
      required_error: "Email is requiered",
    })
    .email({
      required_error: "Invalid email",
    }),
  password: z
    .string({
      required_error: "Password is requiered",
    })
    .min(6, {
      message: "Password must be at least 6 characters",
    }),
});

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "Email is requiered",
    })
    .email({
      required_error: "Invalid email",
    }),
  password: z
    .string({
      required_error: "Password is requiered",
    })
    .min(3, {
      message: "Password must be at least 6 characters",
    }),
});
