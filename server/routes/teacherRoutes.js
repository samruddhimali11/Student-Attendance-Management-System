const express = require("express");
const router = express.Router();

const {
  createTeacher,
  getAllTeachers,
} = require("../controller/teacherController");

router.post("/", createTeacher);
router.get("/", getAllTeachers);

module.exports = router;