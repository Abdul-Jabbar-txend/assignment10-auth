const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController"); // Correctly import the controller

// Register route - POST /register
router.post("/register", authController.register); // Ensure the `register` function is correctly referenced

// Login route - POST /login
router.post("/login", authController.login); // Ensure the `login` function is correctly referenced

module.exports = router;
