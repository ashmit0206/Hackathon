// src/controllers/user.controller.js

// export const getProfile = async (req, res) => {
//   res.json({
//     name: "John Doe",
//     email: "john@example.com",
//     role: "patient",
//     age: 30,
//     height: 175,
//     weight: 70,
//   });
// };
// export const updateProfile = async (req, res) => {
//   res.json({ message: "Profile updated successfully!" });
// };

// src/controllers/user.controller.js
import { User } from "../models/usermodel.js";

export const getUserProfile = async (req, res) => {
  try {
    const { userId } = req.query;
    if (!userId) return res.status(400).json({ message: "User ID required" });

    const user = await User.findById(userId).select("-password -refreshtoken");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateUserProfile = async (req, res) => {
  try {
    const { userId, ...updateData } = req.body;
    if (!userId) return res.status(400).json({ message: "User ID required" });

    const updatedUser = await User.findByIdAndUpdate(userId, updateData, {
      new: true,
      runValidators: true,
    }).select("-password -refreshtoken");

    if (!updatedUser)
      return res.status(404).json({ message: "User not found" });

    res.json({ message: "Profile updated", user: updatedUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
