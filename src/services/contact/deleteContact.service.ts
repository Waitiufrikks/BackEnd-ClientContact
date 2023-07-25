import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";

export const deleteContactService = async (
  contactId: number
): Promise<void> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contact: Contact | null = await contactRepository.findOneBy({
    id: contactId,
  });

  await contactRepository.remove(contact!);
};
