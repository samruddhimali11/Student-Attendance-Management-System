const Class = require("../models/Class");

// Create Class
const createClass = async (req, res) => {
  try {
    const newClass = await Class.create(req.body);

    res.status(201).json({
      success: true,
      message: "Class created successfully",
      data: newClass,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Classes
const getAllClasses = async (req, res) => {
  try {
    const classes = await Class.find();

    res.status(200).json({
      success: true,
      data: classes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createClass,
  getAllClasses,
};