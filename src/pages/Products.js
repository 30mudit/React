import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles/CartProducts.css';

const Products = () => {
  const { addToCart } = useContext(CartContext);

  const products = [
    { id: 1, name: 'Laptop', price: 1000, image: '/images/laptop.png' },
    { id: 2, name: 'Phone', price: 500, image: '/images/phone.png' },
    { id: 3, name: 'Headphones', price: 100, image: '/images/headphones.png' }
  ];

  return (
    <div className="products-container">
      <h2>Our Products</h2>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p className="price">Rs{product.price}</p>
            <button className="add-to-cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products; 
