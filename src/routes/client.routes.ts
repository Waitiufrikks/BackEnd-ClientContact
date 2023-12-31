import { Router } from "express";
import { clientSchemaRequest } from "../schemas/client.schemas";
import { ensureEmailExists } from "../middlewares/ensureEmailExists.middleware";
import { ensureValidateBody } from "../middlewares/ensureValidateBody.middleware";
import { createdClientController, deleteClientController, listClientByIdController, listClientController, readProfileClientController, updateClientController } from "../controllers/client.controller";
import { ensureIdClientExists } from "../middlewares/ensureIdClientExists.middleware";
import { ensureTokenIsValid } from "../middlewares/ensureTokenIsValid.middleware";
import { ensureValidPermission } from "../middlewares/ensureValidPermission.middleware";

export const clientRoutes: Router = Router();

clientRoutes.post(
  "",
  ensureValidateBody(clientSchemaRequest),
  ensureEmailExists,
  createdClientController
);
clientRoutes.get("",listClientController)
clientRoutes.get("/profile",ensureTokenIsValid,readProfileClientController)
clientRoutes.get("/:id",ensureIdClientExists,ensureIdClientExists,listClientByIdController)
clientRoutes.patch("/:id",ensureTokenIsValid, ensureIdClientExists, ensureValidPermission,ensureEmailExists,updateClientController)
clientRoutes.delete("/:id",ensureTokenIsValid, ensureIdClientExists, ensureValidPermission,deleteClientController)