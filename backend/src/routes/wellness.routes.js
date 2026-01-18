import { Router } from "express";
import {
    addWellness,
    getWellnessHistory,
    getWellnessSummary
} from "../controllers/wellness.controller.js";
import { verifyjwt } from "../middleware/auth.middleware.js";

const router = Router();

// All wellness routes are protected
router.post("/", verifyjwt, addWellness);
router.get("/history", verifyjwt, getWellnessHistory);
router.get("/summary", verifyjwt, getWellnessSummary);

export default router;
