import express from "express";
import {
  getHealthProfile,
  updateHealthProfile,
} from "../controllers/healthProfile.controller.js";

const router = express.Router();

router.get("/", getHealthProfile);
router.put("/", updateHealthProfile);

export default router;
