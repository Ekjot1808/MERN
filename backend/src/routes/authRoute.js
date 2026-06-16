import express from "express";
import { register, login, logout, getUser } from "../controllers/authController.js";
import { validate } from "../middlewares/validateMiddleware.js";
import { loginSchema, registerSchema } from "../validators/authValidator.js";
import { authProtect } from "../middlewares/authProtect.js";

const router = express.Router();

router.post("/register", validate(registerSchema), register);
router.post("/login", validate(loginSchema), login);
router.post("/logout", logout);
router.get("/user", authProtect, getUser);

export default router;
