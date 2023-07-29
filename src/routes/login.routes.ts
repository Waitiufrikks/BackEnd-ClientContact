import { Router } from "express";
import { loginController } from "../controllers/login.controller";
import { loginSchema } from "../schemas/login.schemas";
import { ensureValidateBody } from "../middlewares/ensureValidateBody.middleware";


export const loginRoutes: Router = Router();
  loginRoutes.post("",ensureValidateBody(loginSchema),loginController)
