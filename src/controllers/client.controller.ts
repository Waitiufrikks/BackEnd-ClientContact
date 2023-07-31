import { Request, Response } from "express";
import { createdClientService } from "../services/client/createClient.service";
import { listAllClientsService } from "../services/client/listAllClients.service";
import { listClientByIdService } from "../services/client/listClientById.service";
import {
  TClientRequest,
  TClientResponse,
  TClientUpdate,
  TClientsResponse,
} from "../interfaces/client.interface";
import { updateClientService } from "../services/client/updateClient.service";
import { deleteClientService } from "../services/client/deleteClient.service";
import {readProfileClientService } from "../services/client/readProfileClient.service";

export const createdClientController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const payload: TClientRequest = request.body;
  const newClient: TClientResponse = await createdClientService(payload);
  return response.status(201).json(newClient);
};

export const readProfileClientController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const idClient = response.locals.idClient
  const listClients = await readProfileClientService(idClient);
  return response.status(200).json(listClients);
};

export const listClientController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const listClients = await listAllClientsService();
  return response.status(200).json(listClients);
};

export const listClientByIdController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const idParams: number = Number(request.params.id);
  const clientLocals = response.locals.client;
  const listClient: TClientResponse = await listClientByIdService(idParams);
  return response.status(200).json(listClient);
};

export const updateClientController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const idParams: number = Number(request.params.id);
  const payload: TClientUpdate = request.body;
  const updatedClient: TClientResponse = await updateClientService(
    idParams,
    payload
  );
  return response.status(200).json(updatedClient);
};

export const deleteClientController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const idParams: number = Number(request.params.id);
  await deleteClientService(idParams);
  return response.status(204).json();
};
