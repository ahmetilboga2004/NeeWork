import express from "express";
const router = express.Router();

// * My Modules
import * as serviceController from "../controller/serviceController.js";

router.get("/", serviceController.getAllServices);

router.get("/:id", serviceController.getService);

router.post("/", serviceController.addService);

router.delete("/:id", serviceController.deleteService);

router.put("/:id", serviceController.updateService);

export default router;
