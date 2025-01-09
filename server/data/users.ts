let users = [];

interface User {
    id: null;
    username: string;
    email: string;
    password: string;
    nome: string;
    isLogged: boolean;
    lastLogin: string;
}

export function InsertUser(user: User) {
    const id = users.length * 5
    users.push({...user, id: id})
    return id
}

