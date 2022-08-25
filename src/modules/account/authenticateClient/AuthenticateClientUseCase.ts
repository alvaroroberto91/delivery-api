import { prisma } from "../../../database/prismaClient";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";



interface IAuthenticateClient {
  username: string;
  password: string;
}

export class AuthenticateClientUseCase {
  // Get username and password
  async execute({username, password}: IAuthenticateClient) {

    // Verify if client exists
    const client = await prisma.clients.findFirst({
      where: {
        username
      }
    });

    if(!client) {
      throw new Error("Invalid username or password!");
    }

    // Verify if password match with client password
    const passwordMatch = await compare(password, client.password);

    if(!passwordMatch) {
      throw new Error("Invalid username or password!");
    }

    // Generate token
    const token = sign({username}, "019acc25a4e242bb55ad489832ada12d", {
      subject: client.id,
      expiresIn: "1d"
    });

    return token;
  }
}