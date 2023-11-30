## Desafio Técnico 2

Objetivo:
Desenvolver uma API RESTful para autenticação de usuários, que permita operações de cadastro (sign up), autenticação (sign in) e recuperação de informações do usuário.

## Especificações Técnicas:

#### Formato de Comunicação:

    ● Todos os endpoints devem aceitar e retornar apenas dados no formato JSON.
    ● Retorno JSON para situações de endpoint não encontrado.

#### Persistência de Dados:

    ● Armazenamento persistente de dados do usuário.

#### Respostas de Erro:

        ● Formato padrão:
            json

Tratametos de erro:

```js
{
  throw new Error("Email já existente").message;
}
```

Rotas:

```
POST: criação do usuario
POST: autenticação do usuario
GET: listagem dos usuarios
```

Testes Unitarios `exemplo:`

```ts
export function double(x: number): number {
  return x * 2;
}

export function concat(...args: string[]): string {
  return args.reduce((result, param) => result + param, "");
}
```

teste:

```ts
import { double, concat } from "../index";

describe("testing index file", () => {
  test("double function", () => {
    expect(double(5)).toBe(10);
  });

  test("concat function", () => {
    expect(concat("Maria", " ", "Eduarda")).toBe("Maria Eduarda");
  });
});
```

comando pra rodar ambiente de teste:<br>

`npm run test`<br>
`npm run test:watch`<br>
`test:staged`

comando pra rodar o eslint

```
npm run lint
```

#### confirguração do postgresql e prisma:

crie um arquivo `.env` e coloque os seguintes comando

```
JWT_SECRET=sua chave secreta

DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=myschema
```

### pronto para rodar o projeto?

#### 🎲 como rodar:

```bash
# Acesse a pasta do projeto no terminal/cmd
$ cd Desafio_Tecnico_2

# Instale as dependências
$ yarn || npm i

# Execute a aplicação em modo de desenvolvimento
$ yarn dev || npm run dev
```

### Tecnologias usadas nesse projeto:

- Typescript
- NodeJS
- Express
- Prisma
- Postgresql
- Middleware
- JWT
- Jest
- Prettier e Eslint
