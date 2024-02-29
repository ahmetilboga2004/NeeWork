// * 3. Parti Modüller
import express from "express";
const router = express.Router();

// * Core Modüller

// * My Modules
import * as freelancerController from "../controller/freelancerController.js";

router.get("/all", freelancerController.getAllFreelancer);

router.get("/:username", freelancerController.getFreelancer);

router.post("/", freelancerController.addFreelancer);

router.delete("/:id", freelancerController.deleteFreelancer);

router.put("/:id", freelancerController.updateFreelancer);

export default router;
