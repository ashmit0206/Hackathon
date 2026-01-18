// src/controllers/healthProfile.controller.js
import { HealthProfile } from "../models/healthProfileModel.js";

export const getHealthProfile = async (req, res) => {
  try {
    const { userId } = req.query;
    if (!userId) return res.status(400).json({ message: "User ID required" });

    const profile = await HealthProfile.findOne({ userId });
    if (!profile)
      return res.status(404).json({ message: "Health profile not found" });

    res.json(profile);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateHealthProfile = async (req, res) => {
  try {
    const { userId, ...updateData } = req.body;
    if (!userId) return res.status(400).json({ message: "User ID required" });

    const updatedProfile = await HealthProfile.findOneAndUpdate(
      { userId },
      updateData,
      { new: true, upsert: true, runValidators: true },
    );

    res.json({ message: "Health profile updated", profile: updatedProfile });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
