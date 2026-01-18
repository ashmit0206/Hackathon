import { Router } from "express";
import {
    registeruser,
    Loginuser,
    Logoutuser
} from "../controllers/auth.controller.js";
import { verifyjwt } from "../middleware/auth.middleware.js";

const router = Router();

// Public routes
router.post("/register", registeruser);
router.post("/login", Loginuser);

// Protected route
router.post("/logout", verifyjwt, Logoutuser);

export default router;
