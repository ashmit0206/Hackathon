const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// 1. Load environment variables
dotenv.config();

// 2. Connect to Database
connectDB();

// 3. Initialize Express
const app = express();

// 4. Middleware (Allows JSON data and Cross-Origin requests)
app.use(express.json());
app.use(cors());

// 5. Basic Route (To test if API is working)
app.get('/', (req, res) => {
  res.send('API is running successfully');
});

// 6. Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});