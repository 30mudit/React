import React, { Suspense } from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

// Lazy load the components
const Home = React.lazy(() => import("./components/Home"));
const About = React.lazy(() => import("./components/About"));
const Contact = React.lazy(() => import("./components/Contact"));

const App = () => {
  return (
    <ThemeProvider>
      <Suspense fallback={<div>Loading Home Page...</div>}>
        <Home />
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
