import { Request, Response } from "express";
import { CreateUserUseCase } from "../../useCases/userCreateUseCase/CreateUser.useCase";

class CreateUserController {
  async handleSignUp(request: Request, response: Response) {
    const { nome, email, senha, telefone } = request.body;

    const createUserUseCase = new CreateUserUseCase();

    try {
      const user = await createUserUseCase.signUp({
        nome,
        email,
        senha,
        telefone,
      });

      return response.status(201).json(user);
    } catch (err) {
      return response.status(400).json(err);
    }
  }
}

export { CreateUserController };
