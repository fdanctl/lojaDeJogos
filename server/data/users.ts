import { EditavelInterface, UserInterface } from "../interfaces";

let users: UserInterface[] = [];

export function InsertUser(user: UserInterface) {
  const id = users.length * 5 + 5;
  if (
    users.some((e) => e.username === user.username || e.email === user.email)
  ) {
    return "error";
  }
  users.push({ ...user, id: id });

  return id;
}

export function GiveUserData(id: number) {
  return users.find((e) => e.id === id);
}

export function PopUser(id: Number) {
  users = users.filter((e) => e.id !== id);
}

export function EditarUser(id: number, body: EditavelInterface) {
  users.map((e) => {
    if (e.id === id) {
      return {
        id: e.id,
        username: e.username,
        email: body.email ? body.email : e.email,
        password: body.password ? body.password : e.password,
        nome: e.nome,
        isLogged: e.isLogged,
        lastLogin: e.lastLogin,
      };
    }
    return e;
  });
  /*
          for (let i = 0; i < users.length; i++) {
              if (users[i].id === id) {
                  let key: keyof EditavelInterface;
                  for (key in body) {
                      users[i][key] = body[key];
                  }
              }
          }
          */
}

export function LogIn(email: string, password: string) {
  const user = users.filter((e) => e.email === email);
  if (user.length === 0 || user[0].password !== password) {
    return "login failed";
  }

  users.map((e) => (e.email === email ? { ...e, isLogged: true } : e));
  return "fixe";
}

export function LogOut(id: number) {
  users.map((e) => (e.id === id ? { ...e, isLogged: false } : e));
}
