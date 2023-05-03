const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
const allService = require("./data.json");
app.get("/", (req, res) => {
  res.json({ message: "hello server running" });
});

app.get("/allData", (req, res) => {
  res.send(allService);
});

app.get("/allData/:id", (req, res) => {
  const id = req.params.id;
  const item = allService[0].service?.find((pd) => pd.id == id);
  res.send({ item });
});

app.listen(5000, () => {
  console.log("server is running on 5000 port");
});
