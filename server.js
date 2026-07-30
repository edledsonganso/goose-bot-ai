const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("🦢 Goose Bot AI Online!");
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
