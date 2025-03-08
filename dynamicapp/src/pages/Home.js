import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          Welcome to <span className="highlight">MyApp</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5, duration: 1 }}
        >
          Your one-stop solution for event management and seamless online experiences.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Link to="/about" className="cta-btn">Learn More</Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-grid">
          <motion.div 
            className="feature-card" 
            whileHover={{ scale: 1.05 }} 
            transition={{ duration: 0.3 }}
          >
            <h3>🚀 Fast & Reliable</h3>
            <p>Experience smooth performance with optimized features.</p>
          </motion.div>
          <motion.div 
            className="feature-card" 
            whileHover={{ scale: 1.05 }} 
            transition={{ duration: 0.3 }}
          >
            <h3>🔒 Secure & Private</h3>
            <p>We prioritize security to keep your data safe.</p>
          </motion.div>
          <motion.div 
            className="feature-card" 
            whileHover={{ scale: 1.05 }} 
            transition={{ duration: 0.3 }}
          >
            <h3>📱 Mobile Friendly</h3>
            <p>Enjoy seamless browsing on any device.</p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-grid">
          <motion.div 
            className="testimonial-card" 
            whileHover={{ scale: 1.05 }}
          >
            <p>"MyApp made event management so easy! Highly recommend."</p>
            <h4>- Sarah J.</h4>
          </motion.div>
          <motion.div 
            className="testimonial-card" 
            whileHover={{ scale: 1.05 }}
          >
            <p>"Super smooth and professional UI. Love the dark mode feature!"</p>
            <h4>- Michael T.</h4>
          </motion.div>
          <motion.div 
            className="testimonial-card" 
            whileHover={{ scale: 1.05 }}
          >
            <p>"A game-changer for my business. Fantastic app!"</p>
            <h4>- Emma R.</h4>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
