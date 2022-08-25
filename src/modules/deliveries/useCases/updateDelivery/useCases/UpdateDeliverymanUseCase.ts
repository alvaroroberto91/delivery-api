import { prisma } from "../../../../../database/prismaClient";


interface IUpdadetDeliveryman {
  id_delivery: string;
  id_deliveryman: string;
}

export class UpdatdeDeliverymanUseCase {
  async execute({id_delivery, id_deliveryman}: IUpdadetDeliveryman) {
    const updateDelivery = await prisma.deliveries.update({
      where: {
        id: id_delivery, 
      },
      data: {
        id_deliveryman,
      }
    });

    return updateDelivery;
  }
}