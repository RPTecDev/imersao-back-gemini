import conectarAoBanco from "../config/dbConfig.js";

// Conecta ao banco de dados usando a string de conexão fornecida pela variável de ambiente STRING_CONEXAO
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para obter todos os livros da coleção "books" no banco de dados "imersao-library"
export default async function getTodosBooks() {
    const db = conexao.db("imersao-library"); // Seleciona o banco de dados
    const colecao = db.collection("books"); // Seleciona a coleção
    return colecao.find().toArray(); // Executa a consulta e retorna um array com todos os documentos
  }
  