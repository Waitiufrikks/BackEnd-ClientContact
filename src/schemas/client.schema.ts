import { z } from "zod";

export const clientSchema = z.object({
  id: z.number(),
  full_name: z.string().max(45).nonempty(),
  email: z.string().max(45).email().nonempty(),
  phone: z.number().max(9).optional().nullish(),
  clients_contact: z.array(contactSchema).optional().nullish(),
  created_at: z.string().nullish().optional(),
});

export const clientSchemaRequest = clientSchema.omit({
  id: true,
  created_at: true
})
export const clientSchemaResponse = clientSchema