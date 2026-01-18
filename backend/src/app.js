// // src/app.js
// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import userRoutes from "./routes/user.routes.js";
// // // Import the user routes
// // import userRoutes from "./routes/user.routes.js";

// dotenv.config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Register user routes
// app.use("/user", userRoutes);

// // app.use((req, res, next) => {
// //   console.log(`[LOG] ${req.method} ${req.url}`);
// //   next();
// // }); //Added this to debug

// // Test route
// app.get("/", (req, res) => res.send("Backend is running"));

// export default app;

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js";
import healthProfileRoutes from "./routes/healthProfile.routes.js";
import wellnessRoutes from "./routes/wellness.routes.js";
import reminderRoutes from "./routes/reminder.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Register routes
app.use("/user", userRoutes);
app.use("/healthProfile", healthProfileRoutes);
app.use("/wellness", wellnessRoutes);
app.use("/reminder", reminderRoutes);

// Test route
app.get("/", (req, res) => res.send("Backend is running"));

export default app;
