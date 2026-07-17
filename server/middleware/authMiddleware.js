const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

// Protect Middleware
const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.admin = await Admin.findById(decoded.id).select("-password");

      return next();
    } catch (error) {
      return res.status(401).json({
        message: "Not authorized, invalid token",
      });
    }
  }

  return res.status(401).json({
    message: "Not authorized, no token provided",
  });
};

// Admin Only Middleware
const adminOnly = (req, res, next) => {
  if (req.admin && req.admin.role === "admin") {
    return next();
  }

  return res.status(403).json({
    message: "Admin access only",
  });
};

module.exports = {
  protect,
  adminOnly,
};