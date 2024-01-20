import express from "express";
const router = express.Router();

// * My Modules
import * as subCategoryController from "../controller/subCategoryController.js";

router.get("/", subCategoryController.getAllSubCategory);

router.get("/:id", subCategoryController.getSubCategory);

router.post("/", subCategoryController.addSubCategory);

router.delete("/:id", subCategoryController.deleteSubCategory);

router.put("/:id", subCategoryController.updateSubCategory);

export default router;
