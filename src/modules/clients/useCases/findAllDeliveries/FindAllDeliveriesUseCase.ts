import { prisma } from "../../../../database/prismaClient";


export class FindAllDeliveriesUseCase {
  async execute(id_client: string) {
    const findDeliveries = prisma.clients.findMany({
      where: {
        id: id_client,
      },
      select: {
        id: true,
        username: true,
        deliveries: true,
      }
    });
    
    return findDeliveries;
  }
}