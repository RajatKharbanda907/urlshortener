const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const urlroutes = require("./routes/urlroutes");
const app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api",urlroutes);


module.exports = app;