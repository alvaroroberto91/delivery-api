import { prisma } from "../../../../database/prismaClient";
import { hash } from "bcrypt";

interface ICreateClient {
  username: string;
  password: string;
}

export class CreateClientUseCase {
  async execute({username, password}: ICreateClient) {
    // Validate if client exists
    const clientExist = await prisma.clients.findFirst({
      where: {
        username: {
          equals: username,
          mode: "insensitive"
        }
      }
    })

    if(clientExist) {
      throw new Error("Client alredy exists!")
    }

    // Encrupting the Password
    const hashPassword = await hash(password, 10);

    // Salving in database
    const client = await prisma.clients.create({
      data: {
        username,
        password: hashPassword
      }
    });
    
    return client;
  }
}