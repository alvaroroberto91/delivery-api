import { Request, Response } from "express";
import { UpdadteEndDateUseCase } from "./UpdateEndDateUseCase";



export class UpdateEndDateController {
  async handle(request: Request, response: Response) {
    const { id: id_delivery } = request.params;
    const { id_deliveryman } = request;
    const updateEndDateUseCase = new UpdadteEndDateUseCase();

    const resultUpdateEndDate = await updateEndDateUseCase.execute({
      id_delivery,
      id_deliveryman
    });

    return response.json(resultUpdateEndDate);
  }
}