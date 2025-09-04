import { getApi, postApi } from "../controller/Booking.Controller.js";
import { Router } from "express";

const router = Router();

// Define routes
router.get("/bookings", getApi);
router.post("/bookings", postApi);

export default router;
