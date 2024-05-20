const express = require("express");
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

app.use(
  cors({
    origin: "*", // use your actual domain name (or localhost), using * is not recommended
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS"],
    allowedHeaders: [
      "Content-Type",
      "Origin",
      "X-Requested-With",
      "Accept",
      "x-client-key",
      "x-client-token",
      "x-client-secret",
      "Authorization",
    ],
    credentials: true,
  })
);
app.use(express.json());
app.use("/", require("./routes/authRoutes"));

app.listen(port, () => {
  console.log(`example app listening on ${port}`);
});
