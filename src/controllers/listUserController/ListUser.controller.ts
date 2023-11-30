import { ListUserUseCase } from "../../useCases/listUserUseCase/listUser.usecase";
import { Request, Response } from "express";

class ListUserController {
  async handleList(request: Request, response: Response) {
    const service = new ListUserUseCase();

    const result = await service.execute();

    return response.status(200).json(result);
  }
}

export { ListUserController };
