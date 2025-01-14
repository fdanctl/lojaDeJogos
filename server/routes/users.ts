import express from "express";
import {
  criarUser,
  deleteUser,
  editUser,
  getUserData,
} from "../services/users";
export const router = express.Router();

router.post("/criar", (req, res) => {
  const body = req.body;
  const id = criarUser(body);

  if (id === "error") {
    res.status(400).json({ message: id });
  }
  res.status(200).json({ message: "utilizador criado com sucesso", id: id });
});

router
  .route("/:id")

  .get((req, res) => {
    const id = req.params.id;
    const data = getUserData(Number(id));

    if (data === undefined) {
      res.status(404).json({ message: "page not found" });
    }

    res.status(200).json(data);
  })

  .patch((req, res) => {
    const id = req.params.id;
    const data = getUserData(Number(id));
    const body = req.body;

    if (data === undefined) {
      res.status(404).json({ message: "page not found" });
    }

    editUser(Number(id), body);
    res.status(200).json({ message: "utilizador editado com sucesso" });
  })

  .delete((req, res) => {
    const id = req.params.id;
    deleteUser(Number(id));
    res.status(200).json({ message: "sad" });
  });
