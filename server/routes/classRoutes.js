const express = require("express");
const router = express.Router();

const {
  createClass,
  getAllClasses,
} = require("../controller/classController");

router.post("/", createClass);
router.get("/", getAllClasses);

module.exports = router;