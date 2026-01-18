import mongoose from "mongoose";

const wellnessSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    steps: {
      type: Number,
      default: 0,
    },
    sleepHours: {
      type: Number,
      default: 0,
    },
    calories: {
      type: Number,
      default: 0,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true },
);

// Prevent duplicate entry for same user + same date
wellnessSchema.index({ userId: 1, date: 1 }, { unique: true });

export const Wellness = mongoose.model("Wellness", wellnessSchema);
