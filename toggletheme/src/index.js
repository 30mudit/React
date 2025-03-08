import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from "./ThemeContext";
import reportWebVitals from './reportWebVitals';
ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>  
    <App />
  </ThemeProvider>
);

reportWebVitals();
