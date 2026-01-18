import { Router } from "express";
import {
    createReminder,
    getReminders,
    updateReminderStatus
} from "../controllers/Reminder.controller.js";
import { verifyjwt } from "../middleware/auth.middleware.js";

const router = Router();

// All reminder routes are protected
router.post("/", verifyjwt, createReminder);
router.get("/", verifyjwt, getReminders);
router.put("/:id", verifyjwt, updateReminderStatus);

export default router;
