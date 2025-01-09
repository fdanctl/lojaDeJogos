import { InsertUser } from "../data/users";

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
        lastLogin: Date.now().toString()
    }
    const id = InsertUser(user)
    return id;
}

