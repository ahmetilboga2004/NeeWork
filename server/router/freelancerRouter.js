const express = require("express");
const router = express.Router();

router.get("/find-jobs", (req, res) => {
  res.render("freelancer/find_job");
});

router.get("/my-services", (req, res) => {
  res.render("freelancer/my_services");
});

router.get("/post-service", (req, res) => {
  res.render("freelancer/post_service");
});

router.get("/profile", (req, res) => {
  res.render("freelancer/profile");
});

module.exports = router;
