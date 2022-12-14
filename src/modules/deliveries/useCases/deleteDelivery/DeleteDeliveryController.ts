import { Request, Response } from "express";
import { DeleteDeliveryUseCase } from "./DeleteDeliveryUseCase";



export class DeleteDeliveryController {
  async handle(request: Request, response: Response) {
    const {id: id_delivery} = request.params;
    const deleteDeliveryUseCase = new DeleteDeliveryUseCase();
    
    const deleted = await deleteDeliveryUseCase.execute(id_delivery);

    return response.json({
      message: "Delivery Deleted!"
    });
  }
}