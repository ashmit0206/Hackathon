// src/controllers/wellness.controller.js
import { Wellness } from "../models/wellnessModel.js";

export const getDailyStats = async (req, res) => {
  try {
    const { userId, date } = req.query;
    if (!userId || !date)
      return res.status(400).json({ message: "User ID and date required" });

    const stats = await Wellness.findOne({ userId, date: new Date(date) });
    if (!stats)
      return res.status(404).json({ message: "No stats found for this date" });

    res.json(stats);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateDailyStats = async (req, res) => {
  try {
    const { userId, date, steps, calories, sleepHours } = req.body;
    if (!userId || !date)
      return res.status(400).json({ message: "User ID and date required" });

    const updatedStats = await Wellness.findOneAndUpdate(
      { userId, date: new Date(date) },
      { steps, calories, sleepHours },
      { new: true, upsert: true, runValidators: true },
    );

    res.json({ message: "Daily stats updated", stats: updatedStats });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
