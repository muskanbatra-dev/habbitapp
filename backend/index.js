const express = require("express");
const dotenv = require("dotenv").config;
const cors = require("cors");
const app = express();
const { mongoose } = require("mongoose");
require("dotenv").config({ path: ".env" });
const port = 3000;
// database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("db connected"))
  .catch((err) => console.log("database not connected", err));

app.use("/", require("./routes/authRoutes"));

app.listen(port, () => {
  console.log(`example app listening on ${port}`);
});
