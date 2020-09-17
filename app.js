const express = require("express");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const compression = require("compression");
const helmet = require("helmet");
const logger = require("morgan");
const dotenv = require("dotenv");

const indexRouter = require("./routes/index");

dotenv.config();

const app = express();

async function initApp() {
  app.get("/isAlive", (req, res, next) => {
    res.send("alive");
  });

  app.use(helmet());
  app.use(cors());
  app.use(logger("tiny"));
  app.use(compression());
  app.use(cookieParser());
  app.use(
    express.json({
      limit: "100mb",
    })
  );
  app.use(
    express.urlencoded({
      extended: true,
      limit: "100mb",
    })
  );

  app.use("/", indexRouter);
}

initApp();

module.exports = app;
