import { prisma } from "../../../../database/prismaClient";


interface IUpdadeEndDate {
  id_delivery: string;
  id_deliveryman: string;
}

export class UpdadteEndDateUseCase {
  async execute({id_delivery, id_deliveryman}: IUpdadeEndDate) {
    const updateEndDate = await prisma.deliveries.updateMany({
      where: {
        id: id_delivery,
        id_deliveryman,
      },
      data: {
        end_at: new Date(),
      }
    });
    
    return updateEndDate;
  }
}