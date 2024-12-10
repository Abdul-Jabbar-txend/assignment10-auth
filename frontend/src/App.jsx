import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [message, setMessage] = useState("");

  const login = async () => {
    try {
      const response = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
    } catch (err) {
      console.error(err);
    }
  };

  const getProtected = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get("http://localhost:5000/protected", {
        headers: { Authorization: token },
      });
      setMessage(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const getPublic = async () => {
    try {
      const response = await axios.get("http://localhost:5000/public");
      setMessage(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>JWT Authentication</h1>
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
      <div>
        <button onClick={getProtected}>Get Protected Route</button>
        <button onClick={getPublic}>Get Public Route</button>
      </div>
      <div>{message}</div>
    </div>
  );
};

export default App;
