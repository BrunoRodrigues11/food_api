import sqlite3 from "sqlite3";

const SQLite3 = sqlite3.verbose();

// Função para executar comandos SQL
function query(command, params, method = "all") {
  return new Promise(function (resolve0, reject) {
    db[method](command, params, function (error, result) {
      if (error) reject(error);
      else resolve0(result);
    });
  });
}

// Conecção com o banco de dados
const db = new SQLite3.Database(
  "banco.db",
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  function (err) {
    if (err)
      return console.log("Erro ao conectar no banco de dados" + err.message);
  }
);

export { db, query };
