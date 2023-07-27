import { Router } from "express";
import { clientSchemaRequest } from "../schemas/client.schemas";
import { ensureEmailExists } from "../middlewares/ensureEmailExists.middleware";
import { ensureValidateBody } from "../middlewares/ensureValidateBody.middleware";
import { createdClientController, deleteClientController, listClientByIdController, listClientController, updateClientController } from "../controllers/client.controller";
import { ensureIdClientExists } from "../middlewares/ensureIdClientExists.middleware";
import { ensureTokenIsValid } from "../middlewares/ensureTokenIsValid.middleware";

export const clientRoutes: Router = Router();

clientRoutes.post(
  "",
  ensureValidateBody(clientSchemaRequest),
  ensureEmailExists,
  createdClientController
);
clientRoutes.get("",listClientController)
clientRoutes.get("/:id",ensureIdClientExists,listClientByIdController)
clientRoutes.patch("/:id",ensureTokenIsValid, ensureIdClientExists, ensureEmailExists,updateClientController)
clientRoutes.delete("/:id",ensureTokenIsValid, ensureIdClientExists, deleteClientController)