const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to my API!");
});

app.get("/hello", (req, res) => {
  res.json({ message: "Hello, World!" });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

console.log("Starting");
