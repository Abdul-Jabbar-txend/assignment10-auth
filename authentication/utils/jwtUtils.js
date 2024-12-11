const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/config");

// Generate JWT token
exports.generateToken = (user) => {
  return jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, {
    expiresIn: "1h",
  });
};

// Verify JWT token
exports.verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};
