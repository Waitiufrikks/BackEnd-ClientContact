import { z } from "zod";
import { allContactsSchemaResponse, contactSchemaRequest, contactSchemaResponse } from "../schemas/contact.schemas";
export type TContactRequest = z.infer<typeof contactSchemaRequest>
export type TContactResponse = z.infer<typeof contactSchemaResponse>
export type TContactsResponse = z.infer<typeof allContactsSchemaResponse>