import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!name || !email || !password) {
      alert("All fields are required!");
      return;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((user) => user.email === email);

    if (existingUser) {
      alert("User already exists. Please login!");
      return;
    }

    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup Successful! You can now login.");
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password (min 6 chars)" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Sign Up</button>
      <p>Already have an account? <span onClick={() => navigate("/login")}>Login</span></p>
    </div>
  );
};

export default Signup;
