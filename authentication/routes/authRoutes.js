const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Register route - POST /register
router.post("/register", authController.register);

// Login route - POST /login
router.post("/login", authController.login);

module.exports = router;
