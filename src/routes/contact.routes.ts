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
import { ensureTokenIsValid } from "../middlewares/ensureTokenIsValid.middleware";
import { ensureIdClientExists } from "../middlewares/ensureIdClientExists.middleware";
import { ensureClientIsOwnerContact } from "../middlewares/ensureClientIsOwnerContact.middleware";

export const contactRoutes: Router = Router();

contactRoutes.post(
  "",
  ensureTokenIsValid,
  ensureValidateBody(contactSchemaRequest),
  ensureIdClientExists,
  ensureEmailExists,
  createdContactController
);
contactRoutes.get("", listContactController);
contactRoutes.get("/:id", ensureIdContactExists, listContactByIdController);
contactRoutes.patch("/:id",  ensureTokenIsValid,ensureIdContactExists, ensureClientIsOwnerContact, updateContactController);
contactRoutes.delete("/:id",  ensureTokenIsValid,ensureIdContactExists, ensureClientIsOwnerContact, deleteContactController);
