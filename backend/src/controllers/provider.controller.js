import { User } from "../models/user.models.js";
import { Wellness } from "../models/wellness.model.js";
import { apierror } from "../utils/apiError.js";
import { apiresponse } from "../utils/apiResponse.js";
import { asynchandler } from "../utils/asyncHandler.js";

/**
 * GET /api/provider/patients
 * Get all patients
 */
const getAllPatients = asynchandler(async (req, res) => {
    const patients = await User.find({ role: "patient" })
        .select("-password -refreshtoken");

    return res.status(200).json(
        new apiresponse(
            200,
            patients,
            "Patients fetched successfully"
        )
    );
});

/**
 * GET /api/provider/patient/:id
 * Get a patient's wellness data
 */
const getPatientWellness = asynchandler(async (req, res) => {
    const { id } = req.params;

    const patient = await User.findById(id).select(
        "-password -refreshtoken"
    );

    if (!patient || patient.role !== "patient") {
        throw new apierror(404, "Patient not found");
    }

    const wellnessHistory = await Wellness.find({ userId: id })
        .sort({ date: -1 });

    return res.status(200).json(
        new apiresponse(
            200,
            {
                patient,
                wellnessHistory
            },
            "Patient wellness data fetched successfully"
        )
    );
});

/* ✅ Export at end */
export {
    getAllPatients,
    getPatientWellness
};
