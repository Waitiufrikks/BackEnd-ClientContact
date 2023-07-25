import { Router } from "express";
import { createdContactController, listContactByIdController, listContactController } from "../controllers/contact.controller";
import { ensureEmailExists } from "../middlewares/ensureEmailExists.middleware";
import { contactSchemaRequest } from "../schemas/contact.schemas";
import { ensureValidateBody } from "../middlewares/ensureValidateBody.middleware";
import { ensureIdContactExists } from "../middlewares/ensureIdContactExists.middleware";

export const contactRoutes: Router = Router();

contactRoutes.post(
  "",
  ensureValidateBody(contactSchemaRequest),
  ensureEmailExists,
  createdContactController
);
contactRoutes.get(
  "",
  listContactController
)
contactRoutes.get(
  "/:id",
  ensureIdContactExists,
  listContactByIdController
)