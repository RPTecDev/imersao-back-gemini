import getTodosBooks from "../models/booksModel.js";

export async function listarBooks (req, res) {
    // Chama a função para obter os livros
    const books = await getTodosBooks();
    // Envia os livros como resposta em formato JSON com status 200 (sucesso) 
    res.status(200).json(books); 
  }

  export async function cadastrarBook (req, res) {
    const novoBook = req.body;

  }