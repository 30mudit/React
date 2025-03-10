import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4"
    >
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to Our Store</h1>
      <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-8">
        Discover our amazing products with great prices
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-card">
          <h2 className="text-2xl font-semibold mb-4">Latest Products</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Check out our newest arrivals and trending items
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-card">
          <h2 className="text-2xl font-semibold mb-4">Special Offers</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Don't miss out on our current deals and discounts
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;