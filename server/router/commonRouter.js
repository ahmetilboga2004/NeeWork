const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/404", (req, res) => {
  res.render("404");
});

router.get("/chat", (req, res) => {
  res.render("chat");
});

module.exports = router;
