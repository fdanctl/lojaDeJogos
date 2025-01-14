import express from "express";
import { AdicionarJogo } from "../services/jogos";
export const router = express.Router();

router.get("/adicionar", (req, res) => {
  const body = req.body;
  const id = AdicionarJogo(body);
  if (id === "error") {
    res.status(400).json({ message: "jogo ja existe"});
  }
  res.status(200).json({ message: "utilizador criado com sucesso", id: id });
});

router
  .route("/:id")

  .post((req, res) => {
    const id = req.params.id;
  })

  .patch((req, res) => {
    const id = req.params.id;
  })

  .delete((req, res) => {
    const id = req.params.id;
  });
