import React, { useState, useEffect } from "react";

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <div className="loading">Loading About...</div>;
  }

  return (
    <div className="section">
      <h2>About Me</h2>
      <p>Hello! I'm <strong>Mudit Jain</strong>, a software developer passionate about building modern web applications.</p>
    </div>
  );
};

export default About;
