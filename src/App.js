import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Payment from './pages/Payment';
import Checkout from './pages/Checkout';
import Confirmation from './pages/Confirmation';
import ProtectedRoute from './components/ProtectedRoute';
import './styles.css';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/payment">Payment</Link></li>
          {!isAuthenticated ? (
            <li><Link to="/login">Login</Link></li>
          ) : (
            <li><button onClick={handleLogout}>Logout</button></li>
          )}
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/payment" element={<ProtectedRoute><Payment /></ProtectedRoute>} />
        <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
        <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
        <Route path="/confirmation" element={<ProtectedRoute><Confirmation /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
