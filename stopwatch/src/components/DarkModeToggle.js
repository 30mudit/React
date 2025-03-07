import React, { useState, useEffect } from "react";
import "../styles/DarkModeToggle.css"; // Import CSS

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <button onClick={() => setDarkMode(!darkMode)} className="dark-mode-toggle">
      {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}
