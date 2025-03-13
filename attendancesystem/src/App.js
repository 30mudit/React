import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import AttendanceList from "./components/AttendanceList";
import Reports from "./components/Reports";
import Login from "./components/Login";
import Signup from "./components/Signup";
import EmployeeList from "./components/EmployeeList";
import "./App.css";


const App = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees"));
    if (storedEmployees) {
      setEmployees(storedEmployees);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/attendance-list">Attendance</Link>
          <Link to="/employee-list" className="nav-link">Employee List</Link>
          <Link to="/reports">Reports</Link>
          <Link to="/login">Login</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register employees={employees} setEmployees={setEmployees} />} />
          <Route path="/attendance-list" element={<AttendanceList employees={employees} setEmployees={setEmployees} />} />
          <Route path="/employee-list" element={<EmployeeList employees={employees} setEmployees={setEmployees} />} />
          <Route path="/reports" element={<Reports employees={employees} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
