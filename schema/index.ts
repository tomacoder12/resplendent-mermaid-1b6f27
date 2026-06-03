import * as z from "zod";

export const registerSchema = z.object({
  firstName: z.string().min(1, {
    message: "first name is required",
  }),
  lastName: z.string().min(1, {
    message: "last name is required",
  }),
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
  phone: z.string().min(1, {
    message: "Phone number is required",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export const ForgotSchema = z.object({
  email: z.string().email({
    message: "Must be a valid email address",
  }),
});

export const ResetPasswordSchema = z
  .object({
    password: z.string().min(8, {
      message: "Minimum 8 characters required",
    }),
    confirmPassword: z.string().min(8, {
      message: "Minimum 8 characters required",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match!",
    path: ["confirmPassword"],
  });


