// Importa o framework Express para criar a aplicação web
import express from "express"; 
import { listarBooks } from "../controllers/booksController.js";


const routes = (app) => {
    //  Permite que o servidor interprete requisições e processar dados em formato JSON
    app.use(express.json());
    // Rota GET para a raiz (/library) que retorna todos os livros
    app.get("/library", listarBooks);
    app.post("/library", )
}

export default routes;

