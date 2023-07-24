import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { TClientRequest, TClientResponse } from "../../interfaces/client.interface";
import { Client } from "../../entities/client.entitie";
import { clientSchemaResponse } from "../../schemas/client.schema";


export const createdClientService = async (
  payload: TClientRequest
): Promise<TClientResponse> => {
  const userRepository: Repository<Client> = AppDataSource.getRepository(Client);
  const newClient = userRepository.create(payload);
  await userRepository.save(newClient)
  const returnClient = clientSchemaResponse.parse(newClient)
  return returnClient
};