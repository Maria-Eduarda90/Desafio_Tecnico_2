import { AuthUserUseCase } from "./UserAuth.usecase";

jest.mock("../../prisma/prismaClient.config", () => ({
  prismaClient: {
    user: {
      findFirst: jest.fn().mockResolvedValue({
        id: "123",
        nome: "Test User",
        email: "teste@teste.com",
        senha: "hashedPassword",
        data_de_criacao: new Date(),
        data_atualizacao: new Date(),
        ultimo_login: new Date(),
      }),
      create: jest.fn().mockResolvedValue({
        id: "123",
        email: "teste@teste.com",
        senha: "hashedPassword",
        data_de_criacao: new Date(),
        data_atualizacao: new Date(),
        ultimo_login: new Date(),
      }),
    },
  },
}));

jest.mock("bcryptjs", () => ({
  hash: jest.fn().mockResolvedValue("hashedPassword"),
}));

jest.mock("jsonwebtoken", () => ({
  sign: jest.fn().mockReturnValue("token"),
}));

describe("AuthUserUseCase", () => {
  it("deve criar um usuário e gerar um token", async () => {
    const authUserUseCase = new AuthUserUseCase();
    const user = await authUserUseCase.signIn({
      email: "teste@teste.com",
      senha: "senha",
    });

    expect(user).toHaveProperty("id");
    expect(user).toHaveProperty("data_de_criacao");
    expect(user).toHaveProperty("data_atualizacao");
    expect(user).toHaveProperty("ultimo_login");
    expect(user).toHaveProperty("token");
  });
});
