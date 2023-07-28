import { NextFunction } from "connect";
import { Request, Response } from "express";
import { AppError } from "../error";
import { Repository } from "typeorm";
import { Contact } from "../entities/contact.entity";
import { AppDataSource } from "../data-source";

export const ensureClientIsOwnerContact = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const idParams: number = Number(request.params.id);
  const idClient: number = Number(response.locals.idClient);
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const ownerContact = await contactRepository
    .createQueryBuilder("contact")
    .select("contact.id", "contactId")
    .addSelect("client.id", "clientId")
    .leftJoin("contact.client", "client")
    .where("contact.id = :id", { id: idParams })
    .getRawOne();

  if (idClient === ownerContact.clientId) {
    return next();
  }
  throw new AppError("Insufficient permission", 403);
};
