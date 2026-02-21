const express = require("express");
const app = express();
app.use(express.json());

let coins = { ris: 100 }; // временное хранилище монет

app.get("/coins/:user", (req, res) => res.json({ coins: coins[req.params.user] || 0 }));

app.post("/coins/:user", (req, res) => {
  const user = req.params.user;
  const amount = Number(req.body.amount);
  coins[user] = (coins[user] || 0) + amount;
  res.json({ coins: coins[user] });
});

app.listen(3000, () => console.log("SERVER OK"));