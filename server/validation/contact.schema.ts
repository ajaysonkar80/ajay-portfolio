import { z } from "zod";

// ─── Contact Form Schema ───────────────────────────────────────────────────────

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long")
    .trim(),

  email: z
    .string()
    .email("Please enter a valid email address")
    .max(200)
    .trim()
    .toLowerCase(),

  phone: z
    .string()
    .min(7, "Phone number seems too short")
    .max(20, "Phone number is too long")
    .trim()
    .optional()
    .or(z.literal("")),

  // Location cascade
  country: z
    .string()
    .min(2, "Please select a country")
    .max(100)
    .default("India"),

  state: z
    .string()
    .max(100)
    .optional()
    .or(z.literal("")),

  city: z
    .string()
    .max(100)
    .optional()
    .or(z.literal("")),

  // Pricing tier
  serviceTier: z
    .enum(["starter", "core", "growth", "custom"])
    .default("core"),

  // Service type
  serviceType: z
    .string()
    .max(200)
    .optional()
    .or(z.literal("")),

  budgetRange: z
    .string()
    .max(100)
    .optional()
    .or(z.literal("")),

  // Main project description
  projectOutline: z
    .string()
    .min(10, "Please tell me a bit more about your project")
    .max(2000, "Message too long — keep it under 2000 characters")
    .trim(),
});

export type ContactFormInput = z.infer<typeof contactSchema>;