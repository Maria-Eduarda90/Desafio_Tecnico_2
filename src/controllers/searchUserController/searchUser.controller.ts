import { SearchUserUseCase } from "../../useCases/searchUserUseCase/searchUser.usecase";
import { Request, Response } from "express";

class SearchUserController {
  async handleSearch(request: Request, response: Response) {
    const service = new SearchUserUseCase();

    const result = await service.execute(request.params.user_id);

    return response.json(result);
  }
}

export { SearchUserController };
