import { CreateUserUseCase } from "./CreateUser.useCase";

jest.mock("../../prisma/prismaClient.config", () => ({
  prismaClient: {
    user: {
      findFirst: jest.fn().mockResolvedValue(null),
      create: jest.fn().mockResolvedValue({
        id: "123",
        nome: "Teste",
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

describe("CreateUserUseCase", () => {
  it("deve criar um usuário e gerar um token", async () => {
    const createUserUseCase = new CreateUserUseCase();
    const user = await createUserUseCase.signUp({
      nome: "Teste",
      email: "teste@teste.com",
      senha: "senha",
      telefone: [{ numero: "123", ddd: "55" }],
    });

    expect(user).toHaveProperty("id");
    expect(user).toHaveProperty("data_de_criacao");
    expect(user).toHaveProperty("data_atualizacao");
    expect(user).toHaveProperty("ultimo_login");
    expect(user).toHaveProperty("token");
  });
});
