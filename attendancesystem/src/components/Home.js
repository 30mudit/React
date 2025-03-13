import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [text, setText] = useState("");
  const fullText = "Welcome to the Employee Attendance System";
  const navigate = useNavigate();
  const [quote, setQuote] = useState("");

  // Typing effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Random motivational prompts for attendance tracking
  const attendanceQuotes = [
    "Attendance is the first step toward accountability!",
    "Every employee counts. Track attendance efficiently!",
    "Great teams start with great discipline. Mark your presence!",
    "Stay organized, stay productive. Manage attendance smartly!",
    "A well-tracked workforce is a well-managed workforce."
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * attendanceQuotes.length);
    setQuote(attendanceQuotes[randomIndex]);
  }, []);

  return (
    <div className="home-container">
      <h1 className="typing-text">{text}</h1>
      <p className="tagline">Effortlessly track and manage employee attendance with our smart system.</p>
      
      <div className="quote-container">
        <p className="attendance-quote">📝 {quote}</p>
      </div>

      <div className="button-group">
        <button className="nav-btn" onClick={() => navigate("/register")}>
          📋 Register Employee
        </button>
        <button className="nav-btn" onClick={() => navigate("/attendance-list")}>
          ✅ Mark Attendance
        </button>
        <button className="nav-btn" onClick={() => navigate("/reports")}>
          📊 View Reports
        </button>
      </div>
    </div>
  );
};

export default Home;
