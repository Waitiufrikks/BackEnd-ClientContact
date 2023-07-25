import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";

import { AppError } from "../error";
import { Contact } from "../entities/contact.entity";
import { TContactRequest } from "../interfaces/contact.interface";


export const ensureEmailExists = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const newContact: TContactRequest = request.body;

  const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact);
  const findUserByEmail = await contactRepository.findOne({
    where: { email: newContact.email },
  });
    if (findUserByEmail) {
      throw new AppError("Email already exists", 409);
  }
  return next();
};