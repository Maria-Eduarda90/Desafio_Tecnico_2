import { prismaClient } from "../../prisma/prismaClient.config";
import { IAuthUserRequest } from "./@types/AuthUserType";
import { sign } from "jsonwebtoken";

class AuthUserUseCase {
  async signIn({ email, senha }: IAuthUserRequest) {
    const existUser = await prismaClient.user.findFirst({
      where: {
        email,
        senha,
      },
    });

    if (!existUser) {
      throw new Error("Usuário e/ou senha inválidos").message;
    }

    const token = sign(
      {
        user: {
          name: existUser.nome,
          id: existUser.id,
        },
      },
      process.env.JWT_SECRET,
      {
        subject: existUser.id,
        expiresIn: "30s",
      },
    );

    return {
      id: existUser.id,
      data_de_criacao: existUser.data_de_criacao,
      data_atualizacao: existUser.data_atualizacao,
      ultimo_login: existUser.ultimo_login,
      token,
    };
  }
}

export { AuthUserUseCase };
