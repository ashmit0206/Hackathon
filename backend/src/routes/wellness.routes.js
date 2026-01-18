import express from "express";
import {
  getDailyStats,
  updateDailyStats,
} from "../controllers/wellness.controller.js";

const router = express.Router();

router.get("/", getDailyStats);
router.post("/", updateDailyStats);

export default router;
