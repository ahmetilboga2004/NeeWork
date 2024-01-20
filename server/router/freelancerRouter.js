// * 3. Parti Modüller
import express from "express";
const router = express.Router();

// * Core Modüller

// * My Modules
import * as freelancerController from "../controller/freelancerController.js";

router.get("/", freelancerController.redirectFindJobPage);

router.get("/find-job", freelancerController.findJobPage);

router.get("/my-services", freelancerController.myServicesPage);

router.get("/post-service", freelancerController.postServicePage);

router.get("/profile", freelancerController.profilePage);

router.get("/all", freelancerController.getAllFreelancer);

router.get("/:id", freelancerController.getFreelaner);

router.post("/", freelancerController.addFreelancer);

router.delete("/:id", freelancerController.deleteFreelancer);

router.put("/:id", freelancerController.updateFreelancer);

export default router;
