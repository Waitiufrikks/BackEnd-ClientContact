import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";

import { AppError } from "../error";
import { Contact } from "../entities/contact.entity";

export const ensureIdContactExists = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const idParams: number = Number(request.params.id);
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const findContactById = await contactRepository.findOne({
    where: { id: idParams },
    select: ["id"],
  });
  if (!findContactById) {
    throw new AppError("Contact not found.", 404);
  }
  response.locals.contact = findContactById;
  return next();
};
