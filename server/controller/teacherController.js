const Teacher = require("../models/Teacher");

// Create Teacher
const createTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.create(req.body);

    res.status(201).json({
      success: true,
      message: "Teacher created successfully",
      data: teacher,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Teachers
const getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find();

    res.status(200).json({
      success: true,
      data: teachers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createTeacher,
  getAllTeachers,
};