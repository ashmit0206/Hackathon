import express from "express";
import {
  getReminders,
  createReminder,
} from "../controllers/reminder.controller.js";

const router = express.Router();

router.get("/", getReminders);
router.post("/", createReminder);

export default router;
