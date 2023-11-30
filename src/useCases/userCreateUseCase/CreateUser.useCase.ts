import { sign } from "jsonwebtoken";
import { hash } from "bcryptjs";
import { prismaClient } from "../../prisma/prismaClient.config";
import { ICreateUserRequest } from "./@types/UserType";

class CreateUserUseCase {
  async signUp({ nome, email, senha, telefone }: ICreateUserRequest) {
    const emailAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email,
      },
    });

    if (emailAlreadyExists) {
      throw new Error("Email já existente").message;
    }

    const passwordHash = await hash(senha, 8);

    const ultimoLogin = new Date();

    const user = await prismaClient.user.create({
      data: {
        nome,
        email,
        senha: passwordHash,
        ultimo_login: ultimoLogin,
        telefone: {
          create: telefone,
        },
      },
    });

    const token = sign(
      {
        user: {
          name: user.nome,
          id: user.id,
        },
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: "30s",
      },
    );

    return {
      id: user.id,
      data_de_criacao: user.data_de_criacao,
      data_atualizacao: user.data_atualizacao,
      ultimo_login: user.ultimo_login,
      token,
    };
  }
}

export { CreateUserUseCase };
