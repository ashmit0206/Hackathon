// src/app.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js";
// // Import the user routes
// import userRoutes from "./routes/user.routes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Register user routes
app.use("/user", userRoutes);

// app.use((req, res, next) => {
//   console.log(`[LOG] ${req.method} ${req.url}`);
//   next();
// }); //Added this to debug

// Test route
app.get("/", (req, res) => res.send("Backend is running"));

export default app;
