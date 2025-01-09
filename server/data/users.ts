let users: User[] = [];

interface User {
  id: null | Number;
  username: string;
  email: string;
  password: string;
  nome: string;
  isLogged: boolean;
  lastLogin: string;
}

export function InsertUser(user: User) {
  const id = users.length * 5 + 5;
  if (
    users.some((e) => e.username === user.username || e.email === user.email)
  ) {
    return "error";
  }
  users.push({ ...user, id: id });

  return id;
}

export function GiveUserData(id: Number) {
  return users.find((e) => e.id === id);
}

export function PopUser(id: Number) {
  users = users.filter((e) => e.id !== id)
}
