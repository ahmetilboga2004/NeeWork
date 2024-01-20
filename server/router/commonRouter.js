// * 3. Parti Modüller
import express from "express";
const router = express.Router();

// * My Modules
import * as commonController from "../controller/commonController.js";

router.get("/login", commonController.loginPage);

router.get("/register", commonController.registerPage);

router.get("/404", commonController.notFoundPage);

router.get("/chat", commonController.chatPage);

export default router;
