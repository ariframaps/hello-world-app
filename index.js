const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello	World!");
});

app.get("/coba", (req, res) => {
  res.send("Hello	Coba Coy!");
});

app.get("/coba-2", (req, res) => {
  res.send("Hello	Coba 22!");
});

app.listen(port, () => {
  console.log(`App	listening	on	port	${port}`);
});
