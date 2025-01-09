import { GiveUserData, InsertUser, PopUser } from "../data/users";
import moment from "moment";

moment.locale("pt");

interface ReqBody {
    username: string;
    email: string;
    password: string;
    nome: string;
}

export function criarUser(body: ReqBody) {
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

export function getUserData(id: Number) {
    return GiveUserData(id);
}

export function deleteUser(id: Number) {
    PopUser(id)
}
