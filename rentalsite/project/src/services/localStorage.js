// Storage keys
const STORAGE_KEYS = {
  USERS: 'ecommerce_users',
  PRODUCTS: 'ecommerce_products',
  CART: 'ecommerce_cart',
  CURRENT_USER: 'ecommerce_current_user'
};

// Helper functions
const getItem = (key) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error(`Error reading from localStorage: ${error}`);
    return null;
  }
};

const setItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Error writing to localStorage: ${error}`);
    return false;
  }
};

// Initialize default data
const initializeStorage = () => {
  if (!getItem(STORAGE_KEYS.PRODUCTS)) {
    setItem(STORAGE_KEYS.PRODUCTS, [
      {
        id: 1,
        name: "Wireless Headphones",
        price: 99.99,
        description: "High-quality wireless headphones with noise cancellation",
        image: "https://via.placeholder.com/300",
        stock: 10
      },
      {
        id: 2,
        name: "Smartwatch",
        price: 199.99,
        description: "Feature-rich smartwatch with health tracking",
        image: "https://via.placeholder.com/300",
        stock: 15
      },
      {
        id: 3,
        name: "Laptop Backpack",
        price: 49.99,
        description: "Durable laptop backpack with multiple compartments",
        image: "https://via.placeholder.com/300",
        stock: 20
      }
    ]);
  }
  
  if (!getItem(STORAGE_KEYS.USERS)) {
    setItem(STORAGE_KEYS.USERS, []);
  }
  
  if (!getItem(STORAGE_KEYS.CART)) {
    setItem(STORAGE_KEYS.CART, []);
  }
};

export { STORAGE_KEYS, getItem, setItem, initializeStorage };