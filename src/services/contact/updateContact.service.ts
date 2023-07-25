import { Repository } from "typeorm";
import { TContactResponse, TContactUpdate } from "../../interfaces/contact.interface";
import { Contact } from "../../entities/contact.entity";
import { AppDataSource } from "../../data-source";
import { contactSchemaResponse } from "../../schemas/contact.schemas";

export const updateContactService = async (
  idContact: number,
  payload:TContactUpdate
): Promise<TContactResponse> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);
    const contact = await contactRepository.findOneBy({ id: idContact })

    const newContact = contactRepository.create({
      ...contact,
      ...payload
  })  
  await contactRepository.save(newContact)
  const returnNewContact = contactSchemaResponse.parse(newContact)

  return returnNewContact
};
