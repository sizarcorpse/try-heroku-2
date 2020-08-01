const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("this my frist time heroku");
});

app.listen(4000, () => console.log("Server running at port 4000"));
