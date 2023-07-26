import { Repository } from "typeorm";

import { AppDataSource } from "../../data-source";
import { clientSchemaResponse } from "../../schemas/client.schemas";
import { TClientResponse, TClientUpdate } from "../../interfaces/client.interface";
import { Client } from "../../entities/client.entity";

export const updateClientService = async (
  idClient: number,
  payload:TClientUpdate
): Promise<TClientResponse> => {
  console.log( "OIIIIIIIIIIIIIIIIIIIIII",idClient)
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);
    const client = await clientRepository.findOneBy({ id: idClient })

    const newClient = clientRepository.create({
      ...client,
      ...payload
  })  
  await clientRepository.save(newClient)
  const returnNewClient = clientSchemaResponse.parse(newClient)

  return returnNewClient
};
