import { Router } from "express";
import { db } from "../config/database.js";

const routeProduto = Router();

// Rota para listar os produtos
routeProduto.get("/produtos", function (req, res) {
  let sql = "SELECT * FROM produto";
  // Executar um comando SQL
  db.all(sql, [], function (err, rows) {
    if (err)
      return res
        .status(500)
        .send("Erro ao carregar os produtos: " + err.message);
    else return res.status(200).json(rows);
  });
});

export default routeProduto;
