import { prismaClient } from "../../prisma/prismaClient.config";

class ListUserUseCase {
  async execute() {
    const users = await prismaClient.user.findMany();

    if (!users.length) {
      throw new Error("Nenhum usuário encontrado");
    }
    return users;
  }
}

export { ListUserUseCase };
