import { motion } from 'framer-motion';
import { useState } from 'react';
import { useCart } from '../contexts/CartContext';

const sampleProducts = [
  { id: 1, name: 'Product 1', price: 99.99, image: 'https://via.placeholder.com/300' },
  { id: 2, name: 'Product 2', price: 149.99, image: 'https://via.placeholder.com/300' },
  { id: 3, name: 'Product 3', price: 199.99, image: 'https://via.placeholder.com/300' },
  { id: 4, name: 'Product 4', price: 299.99, image: 'https://via.placeholder.com/300' },
];

function Products() {
  const { addToCart } = useCart();
  const [loading, setLoading] = useState(false);

  const handleAddToCart = (product) => {
    setLoading(true);
    setTimeout(() => {
      addToCart(product);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sampleProducts.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-card overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2 line-clamp-2">{product.name}</h2>
              <p className="text-primary font-bold">${product.price}</p>
              <button
                onClick={() => handleAddToCart(product)}
                disabled={loading}
                className="btn-primary w-full mt-4"
              >
                {loading ? 'Adding...' : 'Add to Cart'}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Products;