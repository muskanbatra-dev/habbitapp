const express = require("express");
const cors = require("cors");
const app = express();
const { mongoose } = require("mongoose");
const cookieParser = require("cookie-parser");
require("dotenv").config({ path: ".env" });
const port = 3000;
// database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("db connected"))
  .catch((err) => console.log("database not connected", err));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/", require("./routes/authRoutes"));
app.use("/goals", require("./routes/goalRoutes"));
app.use("/task", require("./routes/taskRoutes"));

app.listen(port, () => {
  console.log(`example app listening on ${port}`);
});
