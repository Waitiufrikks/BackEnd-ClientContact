import { z } from "zod";

export const contactSchema = z.object({
  id: z.number(),
  full_name: z.string().max(45).nonempty(),
  email: z.string().max(45).email().nonempty(),
  phone: z.string().refine((val) => String(val).length === 9, {
    message: "The phone field must have exactly 9 digits.",
  }).nullish().optional(),
  created_at: z.string().optional(),
});
export const contactSchemaResponse = contactSchema
export const allContactsSchemaResponse = z.array(contactSchemaResponse);

export const contactSchemaRequest = contactSchema.omit({
  id: true,
  created_at: true
})

export const contactSchemaUpdate = contactSchema.omit({
  id: true
}).partial()