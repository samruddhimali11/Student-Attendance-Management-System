const express = require("express");
const router = express.Router();

const {
  createAdmin,
  getAllAdmins,
} = require("../controller/adminController");

router.post("/", createAdmin);
router.get("/", getAllAdmins);

module.exports = router;