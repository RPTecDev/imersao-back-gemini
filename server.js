import express from "express";

const library = [
    {
      descricao: "Uma foto teste",
      imagem: "https://placecats.com/millie/300/150"
    },
    {
      descricao: "Gato preguiçoso tomando sol",
      imagem: "https://placecats.com/millie/300/150"
    },
    {
      descricao: "Gatinho brincando com um novelo de lã",
      imagem: "https://placecats.com/millie/300/150"
    },
    {
      descricao: "Visão de um gato curioso",
      imagem: "https://placecats.com/millie/300/150"
    },
    {
      descricao: "Gatos se divertindo em uma caixa de papelão",
      imagem: "https://placecats.com/millie/300/150"
    },
    {
      descricao: "Um gato com olhos esverdeados",
      imagem: "https://placecats.com/millie/300/150"
    }
  ];

const app = express();
app.use(express.json());


app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/library", (req, res) => {
    res.status(200).json(library);
});