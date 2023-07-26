import { Router } from "express";
import { clientSchemaRequest } from "../schemas/client.schemas";
import { ensureEmailExists } from "../middlewares/ensureEmailExists.middleware";
import { ensureValidateBody } from "../middlewares/ensureValidateBody.middleware";
import { createdClientController, listClientByIdController, listClientController } from "../controllers/client.controller";
import { ensureIdClientExists } from "../middlewares/ensureIdClientExists.middleware";

export const clientRoutes: Router = Router();

clientRoutes.post(
  "",
  ensureValidateBody(clientSchemaRequest),
  ensureEmailExists,
  createdClientController
);
clientRoutes.get("",listClientController)
clientRoutes.get("/:id",ensureIdClientExists,listClientByIdController)