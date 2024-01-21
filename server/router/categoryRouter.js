import express from "express";
const router = express.Router();

// * My Modules
import * as categoryController from "../controller/categoryController.js";

router.get("/", categoryController.getAllCategory);

router.get("/:id", categoryController.getCategory);

router.post("/", categoryController.addCategory);

router.post("/bulk", categoryController.addBulkCategory);

router.delete("/:id", categoryController.deleteCategory);

router.put("/:id", categoryController.updateCategory);

export default router;
