const express = require("express");
const path = require("path");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/mongoose");
const sassMiddleware = require("node-sass-middleware");
const moment = require("moment");
const expressLayout = require("express-ejs-layouts");

// =============== dotEnv configuration and dataBase connection call ====================

dotenv.config();
connectDB();

moment().format();

// ======= SCSS ========

app.use(
   sassMiddleware({
      src: path.join(__dirname, "./assets/sass"),
      dest: path.join(__dirname, "./assets/css"),
      debug: false,
      outputStyle: "compressed",
      prefix: "/css",
   })
);
