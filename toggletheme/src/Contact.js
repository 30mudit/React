import React, { useState, useEffect } from "react";

const Contact = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate 2 seconds delay
  }, []);

  if (loading) {
    return <div className="loading">Loading Contact...</div>;
  }

  return (
    <div className="section">
      <h2>Contact Me</h2>
      <p>Email: mudit2360@gmail.com</p>
      <p>🔗 LinkedIn: <a href="http://linkedin.com/in/mudit-jain-5b15ab214" target="_blank" rel="noopener noreferrer">View Profile</a></p>
      <p>🚀 GitHub: <a href="https://github.com/30mudit" target="_blank" rel="noopener noreferrer">Check My Projects</a></p>
    </div>
  );
};

export default Contact;

