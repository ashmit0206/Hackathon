import { User } from "../models/user.models.js";
import { HealthProfile } from "../models/healthProfile.model.js";
import { apierror } from "../utils/apiError.js";
import { apiresponse } from "../utils/apiResponse.js";
import { asynchandler } from "../utils/asyncHandler.js";

/**
 * GET /api/user/profile
 */
const getUserProfile = asynchandler(async (req, res) => {
    const userId = req.user._id;

    const user = await User.findById(userId).select(
        "-password -refreshtoken"
    );

    if (!user) {
        throw new apierror(404, "User not found");
    }

    const healthProfile = await HealthProfile.findOne({ userId });

    return res.status(200).json(
        new apiresponse(
            200,
            { user, healthProfile },
            "User profile fetched successfully"
        )
    );
});

/**
 * PUT /api/user/profile
 */
const updateUserProfile = asynchandler(async (req, res) => {
    const userId = req.user._id;
    const { username, age, height, weight, conditions } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
        userId,
        { username },
        { new: true }
    ).select("-password -refreshtoken");

    if (!updatedUser) {
        throw new apierror(404, "User not found");
    }

    const healthProfile = await HealthProfile.findOneAndUpdate(
        { userId },
        { age, height, weight, conditions },
        { new: true, upsert: true }
    );

    return res.status(200).json(
        new apiresponse(
            200,
            { user: updatedUser, healthProfile },
            "User profile updated successfully"
        )
    );
});

/* ✅ Export all at the end */
export {
    getUserProfile,
    updateUserProfile
};
