const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require('dotenv')

const app = express();

dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URL, () => {
  console.log('Successfully connected to DB');
});

app.get("/", (req, res) => {
  res.json({
    message: "application is running",
  });
});

app.listen(4500, () => {
  console.log("Server is running on PORT: 4500");
});
