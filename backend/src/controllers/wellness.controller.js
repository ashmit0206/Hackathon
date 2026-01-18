// “The Wellness controller allows users to log daily health metrics. We normalize dates to enforce one entry per day and use MongoDB aggregation to compute average wellness statistics for preventive health insights.”

import { Wellness } from "../models/wellness.model.js";
import { apierror } from "../utils/apiError.js";
import { apiresponse } from "../utils/apiResponse.js";
import { asynchandler } from "../utils/asyncHandler.js";

/**
 * POST /api/wellness
 * Add daily wellness data
 */
export const addWellness = asynchandler(async (req, res) => {
    const userId = req.user._id;
    const { steps, sleepHours, calories, date } = req.body;

    if (!date) {
        throw new apierror(400, "Date is required");
    }

    // Normalize date (important for unique index)
    const normalizedDate = new Date(date);
    normalizedDate.setHours(0, 0, 0, 0);

    try {
        const wellness = await Wellness.create({
            userId,
            steps,
            sleepHours,
            calories,
            date: normalizedDate
        });

        return res.status(201).json(
            new apiresponse(201, wellness, "Wellness data added successfully")
        );
    } catch (error) {
        // Duplicate entry for same day
        if (error.code === 11000) {
            throw new apierror(
                409,
                "Wellness data already exists for this date"
            );
        }
        throw error;
    }
});

/**
 * GET /api/wellness/history
 * Get wellness history of logged-in user
 */
export const getWellnessHistory = asynchandler(async (req, res) => {
    const userId = req.user._id;

    const history = await Wellness.find({ userId })
        .sort({ date: -1 });

    return res.status(200).json(
        new apiresponse(
            200,
            history,
            "Wellness history fetched successfully"
        )
    );
});

/**
 * GET /api/wellness/summary
 * Compute basic wellness summary
 */
export const getWellnessSummary = asynchandler(async (req, res) => {
    const userId = req.user._id;

    const summary = await Wellness.aggregate([
        { $match: { userId } },
        {
            $group: {
                _id: null,
                avgSteps: { $avg: "$steps" },
                avgSleepHours: { $avg: "$sleepHours" },
                avgCalories: { $avg: "$calories" }
            }
        }
    ]);

    return res.status(200).json(
        new apiresponse(
            200,
            summary[0] || {},
            "Wellness summary calculated successfully"
        )
    );
});
 
