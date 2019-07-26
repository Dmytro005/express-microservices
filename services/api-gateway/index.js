require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/books", require("./handlers/books"));
app.use("/users", require("./handlers/users"));

app.get("/healthcheck", async (req, res) => {
  try {
    res.send({ message: "api allive!" });
  } catch (error) {
    return res.status(500).json({
      loginSuccess: false,
      error
    });
  }
});

app.get("/*", async (req, res) => {
  return res.status(404).send();
});

const port = process.env.API_PORT;
app.listen(port, () => {
  console.log("API-geteway running", port);
});

module.exports = app;

// TODO:
// nginx
// express http proxt
// auth

