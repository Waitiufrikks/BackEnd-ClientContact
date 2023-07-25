import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";

export const ensureValidateBody =
  (schema: ZodTypeAny) =>
  (request: Request, response: Response, next: NextFunction) => {
    const validateBody = schema.parse(request.body);
    request.body = validateBody;
    return next();
  };
