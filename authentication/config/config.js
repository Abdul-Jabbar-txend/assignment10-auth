require("dotenv").config(); // Loads the .env file

const JWT_SECRET = process.env.JWT_SECRET_KEY;
const JWT_EXPIRATION = process.env.JWT_TOKEN_EXPIRE;

module.exports = {
  JWT_SECRET,
  JWT_EXPIRATION,
};
