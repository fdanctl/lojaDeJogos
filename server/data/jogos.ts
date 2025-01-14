import { JogoBodyInterface, JogoInterface } from "../interfaces";

let jogos: JogoInterface[] = [];

export function InsertJogo(jogo: JogoInterface) {
  const id = jogo.titulo.slice(2) + (jogos.length + 1);

  if (jogos.some((e) => e.titulo === jogo.titulo)) {
    return "error";
  }

  jogos.push({ ...jogo, id: id });

  return id;
}

export function UpdateJogo(id: string, body: JogoBodyInterface) {
  jogos.map((e) => {
    if (e.id === id) {
      return {
        id: e.id,
        titulo: body.titulo ? body.titulo : e.titulo,
        descricao: body.descricao ? body.descricao : e.descricao,
        preco: body.preco ? body.preco : e.preco,
        genero: body.genero ? body.genero : e.genero,
        stock: body.stock ? body.stock : e.stock,
        emStock: body.stock ? body.stock !== 0 : e.stock,
      };
    }
    return e;
  });
}

export function FindJogo(id: string) {
  return jogos.find((e) => e.id === id);
}

export function PopJogo(id: string) {
  jogos = jogos.filter((e) => e.id !== id);
}
