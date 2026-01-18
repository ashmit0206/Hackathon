// src/routes/user.routes.js
import express from "express";
import {
  getUserProfile,
  updateUserProfile,
} from "../controllers/user.controller.js";

const router = express.Router();

// Routes for frontend
router.get("/profile", getUserProfile);
router.put("/profile", updateUserProfile);

export default router;
