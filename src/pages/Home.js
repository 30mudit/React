import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to Our E-Commerce Store</h1>
        <p>Discover amazing products at unbeatable prices.</p>
        <button className="shop-now-btn">Shop Now</button>
      </header>
      
      <section className="features-section">
        <div className="feature">
          <img src="/images/fast-delivery.png" alt="Fast Delivery" />
          <h3>Fast Delivery</h3>
          <p>Get your orders delivered quickly and efficiently.</p>
        </div>
        <div className="feature">
          <img src="/images/high-quality.png" alt="High Quality" />
          <h3>High Quality</h3>
          <p>We offer only the best quality products.</p>
        </div>
        <div className="feature">
          <img src="/images/secure-payment.png" alt="Secure Payment" />
          <h3>Secure Payment</h3>
          <p>Your transactions are always safe with us.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
