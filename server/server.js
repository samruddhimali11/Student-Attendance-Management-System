const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health API
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Student Attendance Management System API is running"
  });
});

// Default Route
app.get("/", (req, res) => {
  res.send("Welcome to Student Attendance Management System API");
});

// Server Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});