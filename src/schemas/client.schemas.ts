import { z } from "zod";
import { contactSchema } from "./contact.schemas";

export const clientSchema = z.object({
  id: z.number(),
  full_name: z.string().max(45).nonempty(),
  email: z.string().max(45).email().nonempty(),
  phone: z.number().refine((val) => String(val).length === 9, {
    message: "The phone field must have exactly 9 digits.",
  }).nullish().optional(),
  contact: z.array(contactSchema).optional().nullish(),
  created_at: z.string().nullish().optional(),
});
export const clientSchemaResponse = clientSchema
export const allClientsSchemaResponse = z.array(clientSchemaResponse)
export const clientSchemaRequest = clientSchema.omit({
  id: true,
  created_at: true
})