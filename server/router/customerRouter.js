// * 3. Parti Modüller
import express from "express";
const router = express.Router();

// * My Modules
import * as customerController from "../controller/customerController.js";

router.get("/find-services", customerController.findServicesPage);

router.get("/my-jobs", customerController.myJobsPage);

router.get("/post-job", customerController.postJobPage);

router.get("/profile", customerController.profilePage);

router.get("/all", customerController.getAllCustomer);

router.get("/:id", customerController.getCustomer);

router.post("/", customerController.addCustomer);

router.delete("/:id", customerController.deleteCustomer);

router.put("/:id", customerController.updateCustomer);

export default router;
