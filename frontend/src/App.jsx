import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [message, setMessage] = useState("welcome");

  // Login function to authenticate user and store JWT token
  const login = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login", // Backend URL
        {
          username,
          password,
        }
      );
      // Set the token in state and localStorage
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setMessage("Login successful!");
    } catch (err) {
      console.error(err);
      setMessage("Invalid credentials");
    }
  };

  // Fetch protected route data
  const getProtected = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(
        "http://localhost:5000/api/user/protected", // Protected route
        {
          headers: { Authorization: `Bearer ${token}` }, // Pass JWT token in Authorization header
        }
      );
      setMessage(response.data); // Display the protected route response
    } catch (err) {
      console.error(err);
      setMessage("Access denied. You need to be logged in.");
    }
  };

  // Fetch public route data (no authentication required)
  const getPublic = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/user/public");
      setMessage(response.data); // Display public route response
    } catch (err) {
      console.error(err);
      setMessage("Error fetching public route");
    }
  };

  return (
    <div>
      <h1>JWT Authentication</h1>

      {/* Login Form */}
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={login}>Login</button>
      </div>

      {/* Buttons to test protected and public routes */}
      <div>
        <button onClick={getProtected}>Get Protected Route</button>
        <button onClick={getPublic}>Get Public Route</button>
      </div>

      {/* Display success/error message */}
      <div>{message}</div>
    </div>
  );
};

export default App;
