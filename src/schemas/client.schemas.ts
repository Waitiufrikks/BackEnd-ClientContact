import { z } from "zod";
import { contactSchema } from "./contact.schemas";

export const clientSchema = z.object({
  id: z.number(),
  full_name: z.string().max(45).nonempty(),
  email: z.string().max(45).email().nonempty(),
  phone: z.string().refine((val) => String(val).length === 9, {
    message: "The phone field must have exactly 9 digits.",
  }).nullish().optional(),
  password:z.string(),
  contacts: z.array(contactSchema).optional(),
  created_at: z.string().nullish().optional(),
});
export const clientSchemaResponse = clientSchema.omit({
  password:true
})
export const allClientsSchemaResponse = z.array(clientSchemaResponse)
export const clientSchemaRequest = clientSchema.omit({
  id: true,
  contacts:true,
  created_at: true
})