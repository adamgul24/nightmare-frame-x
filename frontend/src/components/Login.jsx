
import React, { useState } from "react";
import axios from "axios";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/login", { username, password });
      localStorage.setItem("token", res.data.token);
      onLogin();
    } catch (err) {
      setError("Invalid credentials. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded shadow w-80">
        <h2 className="text-xl font-bold mb-4">Admin Login</h2>
        {error && <p className="text-red-400 text-sm mb-2">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 mb-3 rounded bg-gray-700 text-white"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-3 rounded bg-gray-700 text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded text-white">
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
