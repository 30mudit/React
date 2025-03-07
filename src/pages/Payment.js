import React, { useState } from 'react';
import '../styles/Payment.css';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();

    if (!cardNumber || !expiryDate || !cvv || !cardholderName) {
      setErrorMessage('All fields are required.');
      return;
    }

    alert('Payment Successful! 🎉');
    navigate('/');
  };

  return (
    <div className="payment-container">
      <h2>Secure Payment</h2>
      <form onSubmit={handlePayment}>
        <input
          type="text"
          placeholder="Cardholder Name"
          value={cardholderName}
          onChange={(e) => setCardholderName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Card Number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          required
        />
        <div className="payment-row">
          <input
            type="text"
            placeholder="Expiry Date (MM/YY)"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default Payment;
