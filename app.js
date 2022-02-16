const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const rateLimit = require("express-rate-limit");
const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");
const compression = require("compression");

// Express Instance
const app = express();

// DEVELOPMENT AND SECURITY MIDDLEWARES
// Development loggin
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

// Additional configuration on HTTP Headers
app.use(helmet());

//LImit users on visiting API and/or endpoints
const limit = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many request",
});

app.use("/api", limit);

//Parse the Body on the req.body
app.use(express.json({ limit: "100kb" }));
app.use(express.urlencoded({ extended: true, limit: "100kb" }));

//Parse the Cookie on the client request object
app.use(cookieParser());

//Sanitize  user input comming from Post body, Get query and Url params
app.use(xss());

// Prevent NoSql injection
app.use(mongoSanitize());

//Decrease  the size of the respond body
app.use(compression());

//ROUTES

module.exports = app;
