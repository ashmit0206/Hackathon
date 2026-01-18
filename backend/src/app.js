import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// Routes
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import wellnessRoutes from "./routes/wellness.routes.js";
import reminderRoutes from "./routes/reminder.routes.js";
import providerRoutes from "./routes/provider.routes.js";
const app = express();

// ---------- Middlewares ----------
app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true
    })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ---------- Health Check ----------
app.get("/health", (req, res) => {
    res.status(200).send("Healthcare Backend is running");
});

// ---------- Routes ----------
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/wellness", wellnessRoutes);
app.use("/api/reminder", reminderRoutes);
app.use("/api/provider", providerRoutes);

// ---------- Global Error Fallback ----------
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        success: false,
        message: err.message || "Internal Server Error"
    });
});

export default app;
