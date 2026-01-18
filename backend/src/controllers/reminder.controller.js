// src/controllers/reminder.controller.js
import { Reminder } from "../models/reminderModel.js";

export const getReminders = async (req, res) => {
  try {
    const { userId } = req.query;
    if (!userId) return res.status(400).json({ message: "User ID required" });

    const reminders = await Reminder.find({ userId });
    res.json(reminders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const createReminder = async (req, res) => {
  try {
    const data = req.body;
    const reminder = await Reminder.create(data);
    res.json({ message: "Reminder created", reminder });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
