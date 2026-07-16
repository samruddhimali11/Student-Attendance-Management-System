const express = require("express");
const router = express.Router();

const {
  createAttendance,
  getAllAttendance,
} = require("../controller/attendanceController");

router.post("/", createAttendance);
router.get("/", getAllAttendance);

module.exports = router;