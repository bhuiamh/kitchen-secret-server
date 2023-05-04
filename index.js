const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
const allChefs = require("./data.json");
app.get("/", (req, res) => {
  res.json({ message: "Boss, server is running in your computer" });
});

app.get("/allData", (req, res) => {
  res.send(allChefs);
});

app.get("/allData/:id", (req, res) => {
  const id = req.params.id;
  const item = allChefs[0].chefs?.find((chefsData) => chefsData.id == id);
  res.send({ item });
});

app.listen(5000, () => {
  console.log("Boss, Server is running in your computer. Port number 500");
});
