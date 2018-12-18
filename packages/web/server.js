const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "index.html"));
});

app.listen(3000, () => {
  console.log(`🚀 Web listening on http://localhost:3000`);
});
