const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("🦢 Goose Bot AI Online!");
});

// NOVA ROTA - TERMOS DE SERVIÇO
app.get("/terms", (req, res) => {
    res.send(`
        <h1>Termos de Serviço</h1>
        <p>Ao utilizar o Goose Bot AI, você concorda em usar o bot de acordo com as regras do Discord.</p>
    `);
});

// NOVA ROTA - POLÍTICA DE PRIVACIDADE
app.get("/privacy", (req, res) => {
    res.send(`
        <h1>Política de Privacidade</h1>
        <p>O Goose Bot AI utiliza apenas os dados necessários para responder às interações do Discord e não compartilha informações pessoais.</p>
    `);
});

app.post("/interactions", (req, res) => {
    console.log(req.body);

    return res.json({
        type: 1
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
