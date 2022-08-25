import { prisma } from "../../../../database/prismaClient";


export class DeleteDeliveryUseCase {
  async execute(id_delivery: string) {
    const deleteDelivery = await prisma.deliveries.delete({
      where: {
        id: id_delivery
      }
    });

    return deleteDelivery;
  }
}