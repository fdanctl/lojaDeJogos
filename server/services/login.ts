import { LogIn, LogOut } from "../data/users";

export function FazerLogin(email: string, password: string) {
  return LogIn(email, password);
}

export function FazerLogout(id: number) {
  return LogOut(id);
}
