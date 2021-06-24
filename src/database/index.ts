import { createConnection } from "typeorm";

const connection =createConnection();

connection.then(() => {
  console.log('Conexão com o banco de dados foi estabelecida com sucesso.');
})
.catch((err) => {
  console.log('Não foi possível conectar à base de dados:', err);
});