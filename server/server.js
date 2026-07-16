const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");

// Routes
const adminRoutes = require("./routes/adminRoutes");
const teacherRoutes = require("./routes/teacherRoutes");
const studentRoutes = require("./routes/studentRoutes");
const classRoutes = require("./routes/classRoutes");
const subjectRoutes = require("./routes/subjectRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");

// Middleware
const errorMiddleware = require("./middleware/errorMiddleware");

dotenv.config();

// Connect Database
connectDB();

const app = express();

// Global Middleware
app.use(cors());
app.use(express.json());

// Health API
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Student Attendance Management System API is running",
  });
});

// Default Route
app.get("/", (req, res) => {
  res.send("Welcome to Student Attendance Management System API");
});

// Routes
app.use("/api/admin", adminRoutes);
app.use("/api/teachers", teacherRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/classes", classRoutes);
app.use("/api/subjects", subjectRoutes);
app.use("/api/attendance", attendanceRoutes);

// Error Middleware
app.use(errorMiddleware);

// Server Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});