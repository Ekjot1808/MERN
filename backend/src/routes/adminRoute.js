import express from "express";
import { getUsers, getContacts, createService, deleteService, getServices } from "../controllers/adminController.js";
import { authProtect } from "../middlewares/authProtect.js";
import { adminProtect } from "../middlewares/adminProtect.js";

const router = express.Router();

router.get("/users", authProtect, adminProtect, getUsers);
router.get("/contacts", authProtect, adminProtect, getContacts);
router.get("/services", authProtect, adminProtect, getServices);
router.post("/services", authProtect, adminProtect, createService);
router.delete("/services/:id", authProtect, adminProtect, deleteService);

export default router;
