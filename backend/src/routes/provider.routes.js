import { Router } from "express";
import {
    getAllPatients,
    getPatientWellness
} from "../controllers/provider.controller.js";
import { verifyjwt } from "../middleware/auth.middleware.js";
import { checkRole } from "../middleware/role.middleware.js";

const router = Router();

// Provider-only routes
router.get(
    "/patients",
    verifyjwt,
    checkRole("provider"),
    getAllPatients
);

router.get(
    "/patient/:id",
    verifyjwt,
    checkRole("provider"),
    getPatientWellness
);

export default router;
