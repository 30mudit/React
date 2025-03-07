import React from "react";
import Stopwatch from "./components/Stopwatch";
import DarkModeToggle from "./components/DarkModeToggle";
import "./styles/App.css"; 

export default function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center transition-colors duration-300">
      <DarkModeToggle />
      <Stopwatch />
    </div>
  );
}
