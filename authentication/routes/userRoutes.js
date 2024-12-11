const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");
const userController = require("../controllers/userController");

// Unprotected route (public)
router.get("/public", (req, res) => {
  res.json({ message: "This is a public route any one can access" });
});

// Protected route (admin and user)
router.get("/protected", authMiddleware, userController.getProtectedData);

// Admin-only protected route
router.get(
  "/admin",
  authMiddleware,
  roleMiddleware("admin"),
  userController.getProtectedData
);

module.exports = router;
