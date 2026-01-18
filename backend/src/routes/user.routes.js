import { Router } from "express";
import {
    getUserProfile,
    updateUserProfile
} from "../controllers/user.controller.js";
import { verifyjwt } from "../middleware/auth.middleware.js";

const router = Router();

// Protected user routes
router.get("/profile", verifyjwt, getUserProfile);
router.put("/profile", verifyjwt, updateUserProfile);

export default router;
