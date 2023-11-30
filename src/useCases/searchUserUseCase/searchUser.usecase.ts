import { prismaClient } from "../../prisma/prismaClient.config";

class SearchUserUseCase {
  async execute(user_id: string) {
    const user = await prismaClient.users.findUnique({
      where: {
        id: user_id,
      },
    });

    if (!user) {
      throw new Error("Usuario não encontrado");
    }
    return user;
  }
}

export { SearchUserUseCase };
