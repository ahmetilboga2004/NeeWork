import express from "express";
const router = express.Router();

// * My Modules
import * as serviceController from "../controller/serviceController.js";
import * as authMiddle from "../middleware/auth.js";

router.get("/", authMiddle.isLoggedIn, serviceController.getAllServices);

router.get("/filter", serviceController.filterService);

router.get("/c/:category", serviceController.categoryService);

router.get("/c/:category/:subcategory", serviceController.subCategoryService);

router.get("/:id", serviceController.getService);

router.post("/", serviceController.addService);

router.delete("/:id", serviceController.deleteService);

router.put("/:id", serviceController.updateService);

export default router;
