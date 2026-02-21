// server.js
const express = require("express");
const app = express();

// Берём порт от Railway или 3000 локально
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Чтобы сервер понимал JSON в POST

// Монетки в памяти
let coins = 0;

// GET - получить текущее количество монет
app.get("/coins", (req, res) => {
  res.json({ coins });
});

// POST - добавить монетки
app.post("/coins", (req, res) => {
  const amount = req.body.amount || 0; // берём сколько добавить
  coins += amount;
  res.json({ coins });
});

// Старт сервера
app.listen(PORT, () => {
  console.log("SERVER OK");
});
