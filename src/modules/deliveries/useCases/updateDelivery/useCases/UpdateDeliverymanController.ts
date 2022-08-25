import { Request, Response } from "express";
import { UpdatdeDeliverymanUseCase } from "./UpdateDeliverymanUseCase";



export class UpdateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { id_deliveryman } = request;
    const { id: id_delivery } = request.params;
    const updadteDeliverymanUseCase = new UpdatdeDeliverymanUseCase();

    const deliveryUpdated = await updadteDeliverymanUseCase.execute({
      id_deliveryman,
      id_delivery
    });

    return response.json(deliveryUpdated);
  }
}