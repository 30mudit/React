import { STORAGE_KEYS, getItem, setItem } from './localStorage';

export const getProducts = () => {
  return getItem(STORAGE_KEYS.PRODUCTS) || [];
};

export const getProduct = (id) => {
  const products = getProducts();
  return products.find(p => p.id === id);
};

export const addProduct = (product) => {
  const products = getProducts();
  const newProduct = {
    id: Date.now(),
    ...product,
    createdAt: new Date().toISOString()
  };
  
  products.push(newProduct);
  setItem(STORAGE_KEYS.PRODUCTS, products);
  return newProduct;
};

export const updateProduct = (id, updates) => {
  const products = getProducts();
  const index = products.findIndex(p => p.id === id);
  
  if (index === -1) {
    throw new Error('Product not found');
  }
  
  products[index] = { ...products[index], ...updates };
  setItem(STORAGE_KEYS.PRODUCTS, products);
  return products[index];
};

export const deleteProduct = (id) => {
  const products = getProducts();
  const filtered = products.filter(p => p.id !== id);
  setItem(STORAGE_KEYS.PRODUCTS, filtered);
};