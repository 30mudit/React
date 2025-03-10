import React, { useState, useEffect, useRef } from "react";
import "../styles/Stopwatch.css"; // Import the CSS file

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => setTime((prev) => prev + 10), 10);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}:${String(milliseconds).padStart(2, "0")}`;
  };

  return (
    <div className="stopwatch-container">
      <h1 className="stopwatch-time">{formatTime(time)}</h1>
      <div className="buttons">
        <button onClick={() => setIsRunning(true)} className="btn start">Start</button>
        <button onClick={() => setIsRunning(false)} className="btn stop">Stop</button>
        <button onClick={() => { setIsRunning(false); setTime(0); }} className="btn reset">Reset</button>
      </div>
    </div>
  );
}
