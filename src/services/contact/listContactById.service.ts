import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { TContactResponse } from "../../interfaces/contact.interface";
import { contactSchemaResponse } from "../../schemas/contact.schemas";

export const listContactByIdService = async (
  contactId: number
): Promise<TContactResponse> => {
  const repositoryContact: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const listContact = await repositoryContact.findOne({
    where: { id: contactId },
  });
  console.log(listContact);
  const returnContacts = contactSchemaResponse.parse(listContact);

  return returnContacts;
};
