import React from "react";
import { motion } from "framer-motion";
import "../styles/about.css";

const About = () => {
  return (
    <motion.div 
      className="about-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1 
        className="about-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        About Us
      </motion.h1>
      
      <motion.p 
        className="about-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        We are a passionate team dedicated to delivering the best user experiences. 
        Our goal is to create innovative and engaging web applications that make an impact.
      </motion.p>

      <motion.div 
        className="about-cards"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9 }}
      >
        <div className="about-card">
          <h3>Our Mission</h3>
          <p>Empowering businesses and individuals with cutting-edge technology.</p>
        </div>

        <div className="about-card">
          <h3>Our Vision</h3>
          <p>To be a leader in innovative web solutions that drive success.</p>
        </div>

        <div className="about-card">
          <h3>Our Values</h3>
          <p>Innovation, Integrity, and Customer-Centricity.</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
