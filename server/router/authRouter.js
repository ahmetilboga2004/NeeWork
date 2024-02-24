import express from "express";
const router = express.Router();

// * My Modules
import * as authMiddleware from "../middleware/auth.js";
import * as authController from "../controller/authController.js";

// Register
router.post("/register", authController.registerController);

// Login
router.post("/login", authController.loginController);

router.get("/logout", authController.logout);

// Kullanıcının giriş bilgilerini kontrol et
router.get("/user", authMiddleware.isLoggedIn, authController.checkUser);

export default router;
