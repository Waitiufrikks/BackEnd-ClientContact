import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { clientSchemaResponse } from "../../schemas/client.schemas";
import { Client } from "../../entities/client.entity";
import { TClientRequest, TClientResponse } from "../../interfaces/client.interface";


export const createdClientService = async (
  payload: TClientRequest
): Promise<TClientResponse> => {
  const clientRepository: Repository<Client> = AppDataSource.getRepository(Client);
  const newClient = clientRepository.create(payload);
  await clientRepository.save(newClient)
  const returnClient = clientSchemaResponse.parse(newClient)
  return returnClient
};