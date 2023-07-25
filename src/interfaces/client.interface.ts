import { z } from "zod";
import { clientSchemaRequest, clientSchemaResponse } from "../schemas/client.schemas";
export type TClientRequest = z.infer<typeof clientSchemaRequest>
export type TClientResponse = z.infer<typeof clientSchemaResponse>