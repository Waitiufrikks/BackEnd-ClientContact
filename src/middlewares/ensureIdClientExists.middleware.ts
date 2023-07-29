import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";

import { AppError } from "../error";
import { Client } from "../entities/client.entity";

export const ensureIdClientExists = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  let idClient: number = Number(request.params.id);
   ;

  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);
    const method = request.method;
    if (method == "POST") {
      idClient = Number(response.locals.idClient);
    }
  const findClientById = await clientRepository.findOne({
    where: { id: idClient },
    select: ["id"],
  });
  if (!findClientById) {
    throw new AppError("Client not found.", 404);
  }
  response.locals.client = findClientById;
  return next();
};
