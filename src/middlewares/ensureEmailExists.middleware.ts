import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";

import { AppError } from "../error";
import { Contact } from "../entities/contact.entity";
import { Client } from "../entities/client.entity";

export const ensureEmailExists = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { email }: { email: string } = request.body;
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const findClientByEmail = await clientRepository.findOne({
    where: { email },
    select: ["id"],
  });
  const findContactByEmail = await contactRepository.findOne({
    where: { email },
    select: ["id"],
  });
  if (findClientByEmail || findContactByEmail) {
    throw new AppError("Email already exists", 409);
  }
  return next();
};
