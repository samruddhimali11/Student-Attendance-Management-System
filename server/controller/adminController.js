const Admin = require("../models/Admin");

// Create Admin
const createAdmin = async (req, res) => {
  try {
    const admin = await Admin.create(req.body);

    res.status(201).json({
      success: true,
      message: "Admin created successfully",
      data: admin,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Admins
const getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();

    res.status(200).json({
      success: true,
      data: admins,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createAdmin,
  getAllAdmins,
};