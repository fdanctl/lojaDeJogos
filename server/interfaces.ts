export interface UserInterface {
  id: null | number;
  username: string;
  email: string;
  password: string;
  nome: string;
  isLogged: boolean;
  lastLogin: string;
}

export interface CriarUserInterface {
  username: string;
  email: string;
  password: string;
  nome: string;
}

export interface EditavelInterface {
  email: string;
  password: string;
  nome: string;
}

export interface JogoInterface {
  id: null | string;
  titulo: string;
  descricao: string;
  preco: number;
  genero: string;
  stock: number;
  emStock: boolean;
}

export interface JogoBodyInterface {
  titulo: string;
  descricao: string;
  preco: number;
  genero: string;
  stock: number;
}
