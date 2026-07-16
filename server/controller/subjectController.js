const Subject = require("../models/Subject");

// Create Subject
const createSubject = async (req, res) => {
  try {
    const subject = await Subject.create(req.body);

    res.status(201).json({
      success: true,
      message: "Subject created successfully",
      data: subject,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Subjects
const getAllSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find().populate("teacher");

    res.status(200).json({
      success: true,
      data: subjects,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createSubject,
  getAllSubjects,
};