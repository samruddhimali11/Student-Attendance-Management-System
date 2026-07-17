const Admin = require("../models/Admin");
const generateToken = require("../utils/generateToken");

// Register
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingAdmin = await Admin.findOne({ email });

    if (existingAdmin) {
      return res.status(400).json({
        message: "Email already registered",
      });
    }

    // Password automatically hash hoga Admin model ke pre-save hook se
    const admin = await Admin.create({
      name,
      email,
      password,
    });

    res.status(201).json({
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      role: admin.role,
      token: generateToken(admin._id, admin.role),
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

// Login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin || !(await admin.matchPassword(password))) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    res.json({
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      role: admin.role,
      token: generateToken(admin._id, admin.role),
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Get Logged-in Admin Profile
const getProfile = async (req, res) => {
  res.json(req.admin);
};

module.exports = {
  register,
  login,
  getProfile,
};