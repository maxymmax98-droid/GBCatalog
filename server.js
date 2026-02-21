const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let coins = 0; // здесь хранятся монетки в памяти сервера

// Получить количество монет
app.get("/coins", (req, res) => {
  res.json({ coins });
});

// Добавить монетки
app.post("/coins", (req, res) => {
  const amount = req.body.amount || 0;
  coins += amount;
  res.json({ coins });
});

app.listen(PORT, () => {
  console.log("SERVER OK");
});
