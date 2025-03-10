import React, { useState, Suspense } from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";


const About = React.lazy(() => import("./About"));
const Contact = React.lazy(() => import("./Contact"));

const App = () => {
  return (
    <ThemeProvider>
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Home />
      </Suspense>
    </ThemeProvider>
  );
};

const Home = () => {
  const { theme, toggleTheme } = useTheme();
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="container">
      <h1>Welcome to the {theme} theme!</h1>
      <button className="toggle-btn" onClick={toggleTheme}>
        Toggle Theme
      </button>

      <button
        className="section-btn"
        onClick={() => setShowAbout(!showAbout)}
      >
        {showAbout ? "Hide About" : "Show About"}
      </button>
      {showAbout && (
        <Suspense fallback={<div className="loading">Loading About...</div>}>
          <About />
        </Suspense>
      )}

      <button
        className="section-btn"
        onClick={() => setShowContact(!showContact)}
      >
        {showContact ? "Hide Contact" : "Show Contact"}
      </button>
      {showContact && (
        <Suspense fallback={<div className="loading">Loading Contact...</div>}>
          <Contact />
        </Suspense>
      )}
    </div>
  );
};

export default App;
