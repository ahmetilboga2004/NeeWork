import express from "express";
const router = express.Router();

// * My Modules
import * as jobController from "../controller/jobController.js";

router.get("/", jobController.getAllJob);

router.get("/:id", jobController.getJob);

router.get("/:category/:subcategory", jobController.subCategoryJob);

router.post("/", jobController.addJob);

router.delete("/:id", jobController.deleteJob);

router.put("/:id", jobController.updateJob);

export default router;
