import express from "express";
import { FazerLogin, FazerLogout } from "../services/login";
export const router = express.Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const message = FazerLogin(email, password);

  if (message === "login failed") {
    res.status(400).json({ message: message });
  }
  res.status(200).json({ message: message});
});

router.post("/logout", (req, res) => {
  const id = req.body.id;
  FazerLogout(id);

  res.status(200).json({ message: "fixe"});
});
