const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db"); // Import the db connection
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors"); // Import cors

// Initialize express app
const app = express();

// const corsOptions = {
//   origin: "http://localhost:5174", // Allow frontend to access backend
//   methods: "GET, POST", // Allow specific HTTP methods
//   allowedHeaders: "Content-Type, Authorization", // Allow specific headers
// };

// app.use(cors(corsOptions));

app.use(express.json());

dotenv.config();

connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/public", userRoutes);
app.use("/api/protected", userRoutes);

// Server listening on port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
