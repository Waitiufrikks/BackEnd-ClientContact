import { Request, Response } from "express";
import { createdContactService } from "../services/contact/createContact.service";
import { listContactService } from "../services/contact/listContact.service";
import { listContactByIdService } from "../services/contact/listContactById.service";

export const createdContactController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const payload = request.body;
  const newContact = await createdContactService(payload);
  return response.status(201).json(newContact);
};
export const listContactController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const contacts = await listContactService();

  return response.status(200).json(contacts);
};

export const listContactByIdController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const idParams: number = Number(request.params.id);
  const contact = await listContactByIdService(idParams);

  return response.status(200).json(contact);
};

export const updateContactController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  return response.status(200).json({});
};

export const deleteContactController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  return response.status(204).json();
};
