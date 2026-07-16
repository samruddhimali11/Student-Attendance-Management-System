const validationMiddleware = (req, res, next) => {
  if (!req.body) {
    return res.status(400).json({
      success: false,
      message: "Request body is required",
    });
  }

  next();
};

module.exports = validationMiddleware;