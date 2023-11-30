import { prismaClient } from "../../prisma/prismaClient.config";
import { IAuthUserRequest } from "./@types/AuthUserType";
import { sign } from "jsonwebtoken";
import { compare } from "bcryptjs";

class AuthUserUseCase {
  async signIn({ email, senha }: IAuthUserRequest) {
    const existUser = await prismaClient.users.findFirst({
      where: {
        email,
      },
    });

    if (!existUser) {
      throw new Error("Usuário e/ou senha inválidos").message;
    }

    const isPasswordValid = await compare(senha, existUser.senha);

    if (!isPasswordValid) {
      throw new Error("Senha inválida");
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
