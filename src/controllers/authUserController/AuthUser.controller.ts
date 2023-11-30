import { AuthUserUseCase } from "../../useCases/userAuthUseCase/UserAuth.usecase";
import { Request, Response } from "express";

class AuthUserController {
  async handleSignIn(request: Request, response: Response) {
    const { email, senha } = request.body;

    const authUserUseCase = new AuthUserUseCase();

    try {
      const user = await authUserUseCase.signIn({
        email,
        senha,
      });

      return response.status(201).json(user);
    } catch (err) {
      return response.status(401).json(err);
    }
  }
}

export { AuthUserController };
