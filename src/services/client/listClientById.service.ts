import { Repository } from "typeorm";
import { Client } from "../../entities/client.entity";
import { AppDataSource } from "../../data-source";
import { clientSchemaResponse } from "../../schemas/client.schemas";
import { TClientResponse } from "../../interfaces/client.interface";

export const listClientByIdService = async (
  idParams: number
): Promise<TClientResponse> => {
  const repositoryClient: Repository<Client> =
    AppDataSource.getRepository(Client);
    const client = await repositoryClient
    .createQueryBuilder("client") 
    .where("client.id = :id", { id: idParams }) 
    .leftJoinAndSelect("client.contact", "contacts")
    .getOne();
  const returnClient = clientSchemaResponse.parse(client);

  return returnClient;
};
