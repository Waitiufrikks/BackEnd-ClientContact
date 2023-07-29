import { Repository } from "typeorm"
import { Client } from "../../entities/client.entity"
import { AppDataSource } from "../../data-source"
import { allClientsSchemaResponse } from "../../schemas/client.schemas"
import { TClientsResponse } from "../../interfaces/client.interface"

export const listAllClientsService = async():Promise<TClientsResponse>=>{
  const repositoryClient:Repository<Client> = AppDataSource.getRepository(Client)
  const listClients = await repositoryClient
  .createQueryBuilder("client") 
  .orderBy("client.id", "ASC")
  .leftJoinAndSelect("client.contacts", "contacts")
  .getMany();
  const returnClients = allClientsSchemaResponse.parse(listClients)

  return returnClients
}