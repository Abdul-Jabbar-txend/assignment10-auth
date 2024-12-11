require("dotenv").config(); // Loads the .env file

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRATION = process.env.JWT_EXPIRATION || "1h"; // Default expiration if not set

module.exports = {
  JWT_SECRET,
  JWT_EXPIRATION,
};
