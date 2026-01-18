// src/controllers/user.controller.js

export const getProfile = async (req, res) => {
  res.json({
    name: "John Doe",
    email: "john@example.com",
    role: "patient",
    age: 30,
    height: 175,
    weight: 70,
  });
};
export const updateProfile = async (req, res) => {
  res.json({ message: "Profile updated successfully!" });
};
