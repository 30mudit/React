import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import '../styles/Checkout.css';

const Checkout = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleCheckout = (e) => {
    e.preventDefault();

    if (!name || !address || !cardNumber || !cvv) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    alert('Payment Successful! 🎉');
    navigate('/confirmation');
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <div className="order-summary">
        <h3>Order Summary</h3>
        {cart.map((item) => (
          <div key={item.id} className="order-item">
            <p>{item.name} - ${item.price}</p>
          </div>
        ))}
        <h3>Total: ${totalPrice}</h3>
      </div>

      <form onSubmit={handleCheckout}>
        <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" placeholder="Shipping Address" value={address} onChange={(e) => setAddress(e.target.value)} required />
        <input type="text" placeholder="Card Number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />
        <input type="text" placeholder="CVV" value={cvv} onChange={(e) => setCvv(e.target.value)} required />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit">Complete Payment</button>
      </form>
    </div>
  );
};

export default Checkout;
