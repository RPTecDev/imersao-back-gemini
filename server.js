import express from "express"; // Importa o framework Express para criar a aplicação web
import routes from "./src/routes/booksRoutes.js";


// Cria uma instância do Express 
const app = express();
routes(app)

// Inicia o servidor na porta 3000 e exibe uma mensagem no console
app.listen(3000, () => {
  console.log("Servidor escutando...");
});
