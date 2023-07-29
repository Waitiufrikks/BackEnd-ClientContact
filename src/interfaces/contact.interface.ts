import { z } from "zod";
import { allContactsSchemaResponse, contactSchemaRequest, contactSchemaResponse, contactSchemaUpdate } from "../schemas/contact.schemas";
import { DeepPartial } from "typeorm";
export type TContactRequest = z.infer<typeof contactSchemaRequest>
export type TContactResponse = z.infer<typeof contactSchemaResponse>
export type TContactsResponse = z.infer<typeof allContactsSchemaResponse>
export type TContactUpdate = DeepPartial<TContactRequest>
