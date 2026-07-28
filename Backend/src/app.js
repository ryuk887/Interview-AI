const express = require("express");
const cookkieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cookkieParser());

const authRouter = require("./routes/auth.route");

app.use("/api/auth", authRouter);

module.exports = app;
