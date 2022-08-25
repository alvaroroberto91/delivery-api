import { prisma } from "../../../database/prismaClient";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

interface IAuthenticateDeliveryman {
  username: string;
  password: string;
}


export class AuthenticateDeliverymanUseCase {
  // Get Username and Password
  async execute({username, password}: IAuthenticateDeliveryman) {
    // Verify is Deliveryman exists
    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        username
      }
    });

    if(!deliveryman) {
      throw new Error("Invalid username or password!");
    }
    
    // Verify if password matchs
    const passwordMatch = await compare(password, deliveryman.password);
    
    if(!passwordMatch) {
      throw new Error("Invalid username or password!");
    }

    // Generate token
    const token = sign({username}, "95597695dea01d709b336c9f10f71c17", {
      subject: deliveryman.id,
      expiresIn: "1d"
    });

    return token
  }
}