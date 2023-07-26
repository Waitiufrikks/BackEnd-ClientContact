import { z } from "zod";
import { allClientsSchemaResponse, clientSchemaRequest, clientSchemaResponse } from "../schemas/client.schemas";
export type TClientRequest = z.infer<typeof clientSchemaRequest>
export type TClientResponse = z.infer<typeof clientSchemaResponse>
export type TClientsResponse = z.infer<typeof allClientsSchemaResponse>