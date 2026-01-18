import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
            index: true // Helps optimize searching by username
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        password: {
            type: String,
            required: [true, "Password is required"] // Adds a custom error message
        },
        role: {
            type: String,
            enum: ["patient", "provider", "admin"],
            default: "patient"
        },
        refreshtoken: {
            type: String
        }
    },
    { timestamps: true }
);

/* 🔐 Hash password before saving */
userSchema.pre("save", async function () {
    if (!this.isModified("password")) return;
    this.password = await bcrypt.hash(this.password, 10);
    
});

/* 🔑 Compare password */
userSchema.methods.ispasswordcorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};

/* 🔐 Access Token */
userSchema.methods.createaccesstoken = function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            role: this.role
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRY || "15m" }
    );
};

/* 🔁 Refresh Token */
userSchema.methods.createrefreshtoken = function () {
    return jwt.sign(
        {
            _id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRY || "7d" }
    );
};

export const User = mongoose.model("User", userSchema);