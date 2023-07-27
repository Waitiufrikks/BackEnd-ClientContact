import { z } from "zod";
import { allClientsSchemaResponse, clientSchemaRequest, clientSchemaResponse } from "../schemas/client.schemas";
import { DeepPartial } from "typeorm";
export type TClientRequest = z.infer<typeof clientSchemaRequest>
export type TClientResponse = z.infer<typeof clientSchemaResponse>
export type TClientUpdate = DeepPartial<TClientRequest>
export type TClientsResponse = z.infer<typeof allClientsSchemaResponse>