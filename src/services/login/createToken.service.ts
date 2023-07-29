import { Repository } from "typeorm";
import { Client } from "../../entities/client.entity";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { TLoginRequest } from "../../interfaces/login.interface";

export const createTokenService = async (
  payload: TLoginRequest
): Promise<string> => {
  const clientRepository: Repository<Client> = AppDataSource.getRepository(Client);
  const client: Client| null = await clientRepository.findOne({
    where: { email: payload.email },
  });
  if (!client) {
    throw new AppError("Invalid credentials", 401);
  }

  const passwordValidate: boolean = await compare(
    payload.password,
    client.password
  );

  if (!passwordValidate) {
    throw new AppError("Invalid credentials", 401);
  }

  const token = sign(
    {},
    process.env.SECRET_KEY!,
    {
      expiresIn: "24h",
      subject: String(client.id),
    }
  );
  return token;
};
