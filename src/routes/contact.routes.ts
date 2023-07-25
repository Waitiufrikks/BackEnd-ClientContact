import { Router } from "express";
import { createdContactController } from "../controllers/contact.controller";
import { ensureEmailExists } from "../middlewares/ensureEmailExists.middleware";
import { contactSchemaRequest } from "../schemas/contact.schemas";
import { ensureValidateBody } from "../middlewares/ensureValidateBody.middleware";

export const contactRoutes: Router = Router();

contactRoutes.post(
  "",
  ensureValidateBody(contactSchemaRequest),
  ensureEmailExists,
  createdContactController
);