import { NextFunction } from "connect";
import { Request, Response } from "express";
import { AppError } from "../error";

export const ensureValidPermission = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const idClientParams: number = Number(request.params.id);
  const idClient: number = Number(response.locals.idClient);

  if (idClient === idClientParams) {
    return next();
  }
  throw new AppError("Insufficient permission", 403);
};
