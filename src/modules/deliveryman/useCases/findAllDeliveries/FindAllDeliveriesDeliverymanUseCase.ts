import { prisma } from "../../../../database/prismaClient";



export class FindAllDeliveriesDeliverymanUseCase {
  async execute(id_deliveryman: string) {
    const findDeliveries = await prisma.deliveryman.findMany({
      where: {
        id: id_deliveryman,
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