export interface IUserRequest {
  nome: string;
  email: string;
  senha: string;
  telefone: IFoneRequest[];
}

interface IFoneRequest {
  numero: string;
  ddd: string;
}
