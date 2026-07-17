const express = require("express");
const router = express.Router();

const {
  createAdmin,
  getAllAdmins,
} = require("../controller/adminController");

const {
  protect,
  adminOnly,
} = require("../middleware/authMiddleware");

// Only Admin can create Admin
router.post("/", protect, adminOnly, createAdmin);

// Only logged-in Admin can view all admins
router.get("/", protect, adminOnly, getAllAdmins);

module.exports = router;