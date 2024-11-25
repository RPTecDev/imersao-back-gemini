import getTodosBooks from "../models/booksModel.js";

export async function listarBooks (req, res) {
    // Chama a função para obter os livros
    const books = await getTodosBooks();
    // Envia os livros como resposta em formato JSON com status 200 (sucesso) 
    res.status(200).json(books); 
  }

  export async function cadastrarNovoBook (req, res) {
    const novoBook = req.body;
    try {
      const bookCadastrado = await criarNovoBook(novoBook);
      res.status(200).json(bookCadastrado);
    } catch (erro) {
      console.error (erro.message);
      res.status(500).json({"Erro":"Falha na requisição"})
    }

  }