import mongoose from "mongoose";

const healthProfileSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true // Ensures a user can only have ONE health profile
        },
        age: {
            type: Number
        },
        height: {
            type: Number // in cm
        },
        weight: {
            type: Number // in kg
        },
        conditions: {
            type: [String], // Changed this to store simple strings
            default: []
        }
    },
    { timestamps: true }
);

export const HealthProfile = mongoose.model(
    "HealthProfile",
    healthProfileSchema
);