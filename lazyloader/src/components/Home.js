import React, { Suspense } from "react";
import { useTheme } from "../context/ThemeContext";

const About = React.lazy(() => import("./About"));
const Contact = React.lazy(() => import("./Contact"));

const Home = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="container">
      <h1>Welcome to the {theme} theme!</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>

      <Suspense fallback={<div>Loading About Section...</div>}>
        <About />
      </Suspense>

      <Suspense fallback={<div>Loading Contact Section...</div>}>
        <Contact />
      </Suspense>
    </div>
  );
};

export default Home;
