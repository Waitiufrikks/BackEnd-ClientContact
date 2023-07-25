import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { TContactRequest, TContactResponse } from "../../interfaces/contact.interface";
import { contactSchemaResponse } from "../../schemas/contact.schemas";


export const createdContactService = async (
  payload: TContactRequest
): Promise<TContactResponse> => {
  const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact);
  const newContact = contactRepository.create(payload);
  await contactRepository.save(newContact)
  const returnContact = contactSchemaResponse.parse(newContact)
  return returnContact
};