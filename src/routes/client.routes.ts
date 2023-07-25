import { Router } from "express";
import { ensureEmailExists } from "../middlewares/ensureEmailExists.middleware";
import { ensureValidateBody } from "../middlewares/ensureValidateBody.middleware";
import { createdClientController } from "../controllers/client.controller";
import { clientSchemaRequest } from "../schemas/client.schemas";

export const clientRoutes: Router = Router();

clientRoutes.post(
  "",
  ensureValidateBody(clientSchemaRequest),
  ensureEmailExists,
  createdClientController
);