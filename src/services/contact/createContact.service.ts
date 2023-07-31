import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { Contact } from "../../entities/contact.entity";
import { contactSchemaResponse } from "../../schemas/contact.schemas";
import { TContactRequest, TContactResponse } from "../../interfaces/contact.interface";

export const createdContactService = async (
  idClient: number,
  payload: TContactRequest
): Promise<TContactResponse> => {
  const contactRepository: Repository<Contact> =
  AppDataSource.getRepository(Contact);
  const clientRepository: Repository<Client> =
  AppDataSource.getRepository(Client);
  const findIdClient = await clientRepository.findOne({
    where: { id: idClient },
    select: ["id"]
  });

  const newContact = contactRepository.create({
    ...payload,
    client: findIdClient!,
  });
  await contactRepository.save(newContact);
  const returnContact = contactSchemaResponse.parse(newContact);
  return returnContact;
};
