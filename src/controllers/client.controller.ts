import { Request, Response } from "express";
import { createdClientService } from "../services/client/createClient.service";

export const createdClientController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const payload = request.body;
  const newClient = await createdClientService(payload);
  return response.status(201).json(newClient);
};
export const listClientController = async (
  request: Request,
  response: Response
): Promise<Response> => {

  return response.status(200).json({});
}

export const updateClientController = async (
  request: Request,
  response: Response
): Promise<Response> => {

  return response.status(200).json({});
};

export const deleteClientController = async (
  request: Request,
  response: Response
): Promise<Response> => {

  return response.status(204).json();
};