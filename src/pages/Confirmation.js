import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Confirmation.css';

const Confirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="confirmation-container">
      <h2>🎉 Order Placed Successfully! 🎉</h2>
      <p>Thank you for shopping with us. Your order is being processed.</p>
      <button onClick={() => navigate('/')}>Return to Home</button>
    </div>
  );
};

export default Confirmation;
