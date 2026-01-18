import { Reminder } from "../models/reminder.model.js";
import { apierror } from "../utils/apiError.js";
import { apiresponse } from "../utils/apiResponse.js";
import { asynchandler } from "../utils/asyncHandler.js";

/**
 * POST /api/reminder
 * Create a preventive care reminder
 */
const createReminder = asynchandler(async (req, res) => {
    const userId = req.user._id;
    const { title, type, dueDate } = req.body;

    if (!title || !type || !dueDate) {
        throw new apierror(400, "All fields are required");
    }

    const reminder = await Reminder.create({
        userId,
        title,
        type,
        dueDate
    });

    return res.status(201).json(
        new apiresponse(
            201,
            reminder,
            "Reminder created successfully"
        )
    );
});

/**
 * GET /api/reminder
 * Get all reminders of logged-in user
 */
const getReminders = asynchandler(async (req, res) => {
    const userId = req.user._id;

    const reminders = await Reminder.find({ userId })
        .sort({ dueDate: 1 });

    return res.status(200).json(
        new apiresponse(
            200,
            reminders,
            "Reminders fetched successfully"
        )
    );
});

/**
 * PUT /api/reminder/:id
 * Mark reminder as completed
 */
const updateReminderStatus = asynchandler(async (req, res) => {
    const userId = req.user._id;
    const { id } = req.params;

    const reminder = await Reminder.findOneAndUpdate(
        { _id: id, userId },
        { status: "completed" },
        { new: true }
    );

    if (!reminder) {
        throw new apierror(404, "Reminder not found");
    }

    return res.status(200).json(
        new apiresponse(
            200,
            reminder,
            "Reminder marked as completed"
        )
    );
});

/* ✅ Export all at the end */
export {
    createReminder,
    getReminders,
    updateReminderStatus
};
