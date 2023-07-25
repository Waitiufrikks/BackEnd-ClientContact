import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { TContactResponse, TContactsResponse } from "../../interfaces/contact.interface";
import { allContactsSchemaResponse } from "../../schemas/contact.schemas";

export const listContactService = async (): Promise<TContactsResponse> => {
  const repositoryContact: Repository<Contact> = AppDataSource.getRepository(Contact);
  const listContacts = await repositoryContact.find();
  const returnContacts = allContactsSchemaResponse.parse(listContacts);

  return returnContacts;

};
