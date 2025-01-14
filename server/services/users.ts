import { EditarUser, GiveUserData, InsertUser, PopUser } from "../data/users";
import moment from "moment";
import { CriarUserInterface, EditavelInterface } from "../interfaces";

moment.locale("pt");

export function criarUser(body: CriarUserInterface) {
    const user = {
        id: null,
        username: body.username,
        email: body.email,
        password: body.password,
        nome: body.nome,
        isLogged: true,
        lastLogin: moment().format("D [de] MMMM YYYY, h:mm:ss a"),
    };

    const id = InsertUser(user);
    return id;
}

export function getUserData(id: number) {
    return GiveUserData(id);
}

export function deleteUser(id: number) {
    PopUser(id);
}

export function editUser(id: number, body: EditavelInterface) {
    EditarUser(id, body);
}
