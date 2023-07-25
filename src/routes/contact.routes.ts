import { Router } from "express";
import {
  createdContactController,
  deleteContactController,
  listContactByIdController,
  listContactController,
  updateContactController,
} from "../controllers/contact.controller";
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
contactRoutes.get("", listContactController);
contactRoutes.get("/:id", ensureIdContactExists, listContactByIdController);
contactRoutes.patch("/:id", ensureIdContactExists, updateContactController);
contactRoutes.delete("/:id", ensureIdContactExists, deleteContactController);
