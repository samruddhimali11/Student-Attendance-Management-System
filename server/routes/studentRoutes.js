const express = require("express");
const router = express.Router();

const {
  createStudent,
  getAllStudents,
} = require("../controller/studentController");

router.post("/", createStudent);
router.get("/", getAllStudents);

module.exports = router;