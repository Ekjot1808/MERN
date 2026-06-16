import express from "express";
import { getContacts, sendContact } from "../controllers/conatctController.js";
import contactSchema from "../validators/contactValidator.js";
import { validate } from "../middlewares/validateMiddleware.js";

const router = express.Router();

router.get("/", getContacts);
router.post("/", validate(contactSchema), sendContact);

export default router;