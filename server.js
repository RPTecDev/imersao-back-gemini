import express from "express"; // Importa o framework Express para criar a aplicação web
import conectarAoBanco from "./src/config/dbConfig.js"; // Importa a função para conectar ao banco de dados

// Conecta ao banco de dados usando a string de conexão fornecida pela variável de ambiente STRING_CONEXAO
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Array de livros de exemplo (será substituído pelos dados do banco de dados)
const books = [
  // ... dados dos livros
];

// Cria uma instância do Express e habilita o parser JSON para lidar com requisições JSON
const app = express();
app.use(express.json());

// Inicia o servidor na porta 3000 e exibe uma mensagem no console
app.listen(3000, () => {
  console.log("Servidor escutando...");
});

// Função assíncrona para obter todos os livros da coleção "books" no banco de dados "imersao-library"
async function getTodosBooks() {
  const db = conexao.db("imersao-library"); // Seleciona o banco de dados
  const colecao = db.collection("books"); // Seleciona a coleção
  return colecao.find().toArray(); // Executa a consulta e retorna um array com todos os documentos
}

// Rota GET para a raiz (/library) que retorna todos os livros
app.get("/library", async (req, res) => {
  const books = await getTodosBooks(); // Chama a função para obter os livros
  res.status(200).json(books); // Envia os livros como resposta em formato JSON com status 200 (sucesso)
});
