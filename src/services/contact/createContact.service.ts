import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { TContactRequest, TContactResponse } from "../../interfaces/contact.interface";
import { contactSchemaResponse } from "../../schemas/contact.schemas";


export const createdContactService = async (
  payload: TContactRequest
): Promise<TContactResponse> => {
  const userRepository: Repository<Contact> = AppDataSource.getRepository(Contact);
  const newContact = userRepository.create(payload);
  await userRepository.save(newContact)
  const returnContact = contactSchemaResponse.parse(newContact)
  return returnContact
};