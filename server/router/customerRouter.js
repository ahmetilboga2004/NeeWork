const express = require("express");
const router = express.Router();

router.get("/find-services", (req, res) => {
  res.render("customer/find_services");
});

router.get("/my-jobs", (req, res) => {
  res.render("customer/my_jobs");
});

router.get("/post-job", (req, res) => {
  res.render("customer/post_job");
});

router.get("/profile", (req, res) => {
  res.render("customer/profile");
});

module.exports = router;
