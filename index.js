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
  let item = null;
  allChefs.forEach((obj) => {
    const chef = obj.chefs.find((c) => c.id == id);
    if (chef) {
      item = chef;
    }
  });
  if (item) {
    res.send({ item });
  } else {
    res.status(404).send({ error: `Chef with ID ${id} not found` });
  }
});

app.listen(5000, () => {
  console.log("Hei i am running");
});
