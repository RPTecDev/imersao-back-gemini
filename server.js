import express from "express";
import conectarAoBanco from "./src/config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);


const books = [
    {id: 1,
      descricao: "Uma foto teste",
      imagem: "https://placecats.com/millie/300/150"
    },
    {id: 2,
      descricao: "Gato preguiçoso tomando sol",
      imagem: "https://placecats.com/millie/300/150"
    },
    {id: 3,
      descricao: "Gatinho brincando com um novelo de lã",
      imagem: "https://placecats.com/millie/300/150"
    },
    {id: 4,
      descricao: "Visão de um gato curioso",
      imagem: "https://placecats.com/millie/300/150"
    },
    {id: 5,
      descricao: "Gatos se divertindo em uma caixa de papelão",
      imagem: "https://placecats.com/millie/300/150"
    },
    {id: 6,
      descricao: "Um gato com olhos esverdeados",
      imagem: "https://placecats.com/millie/300/150"
    }
  ];

const app = express();
app.use(express.json());


app.listen(3000, () => {
    console.log("Servidor escutando...");
});

async function getTodosBooks() {
    const db = conexao.db("imersao-library")
    const colecao = db.collection("books")
    return colecao.find().toArray()
};


app.get("/library", async(req, res) => {
  const books = await getTodosBooks()
    res.status(200).json(books);
});

// function buscarBookPorID(id) {
//     return books.findIndex((book) => {
//       return book.id === Number(id)
//     })
// };

// app.get("/library/:id", (req, res) => {
//     const index = buscarBookPorID(req.params.id)
//     res.status(200).json(books[index]);
// });