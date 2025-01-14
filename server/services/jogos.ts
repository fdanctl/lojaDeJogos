import { FindJogo, InsertJogo, PopJogo, UpdateJogo } from "../data/jogos";
import { JogoBodyInterface } from "../interfaces";

export function AdicionarJogo(body: JogoBodyInterface) {
    const jogo = {
        id: null,
        titulo: body.titulo,
        descricao: body.descricao,
        preco: body.preco,
        genero: body.genero,
        stock: body.stock,
        emStock: body.stock !== 0,
    };

    const id = InsertJogo(jogo);
    return id;
}

export function getUserData(id: string) {
    return FindJogo(id);
}

export function deleteUser(id: string) {
    PopJogo(id);
}

export function editUser(id: string, body: JogoBodyInterface) {
    UpdateJogo(id, body);
}
