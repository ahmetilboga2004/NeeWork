// ** 3. Parti Modüller
const express = require("express");
const app = express();
const nunjucks = require("nunjucks");
require("dotenv").config();

// ** Core Modüller
const path = require("path");

// ** Modüllerim

// ** Router Modüllerim
const commonRouter = require("./router/commonRouter");
const freelancerRouter = require("./router/freelancerRouter");
const customerRouter = require("./router/customerRouter");

app.set("view engine", "html");
nunjucks.configure(path.join(__dirname, "../client/views"), {
  autoescape: true,
  express: app,
});

app.use(express.static(path.join(__dirname, "../node_modules")));
app.use(express.static(path.join(__dirname, "../client/public")));

app.use("/", commonRouter);
app.use("/freelancer", freelancerRouter);
app.use("/customer", customerRouter);

module.exports = app;
