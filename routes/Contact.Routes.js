import { postApi } from "../controller/Contact.Controller.js";
import { Router } from "express";

const router = Router();

// Define routes

router.post("/contact", postApi);

export default router;
