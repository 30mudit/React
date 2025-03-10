import { STORAGE_KEYS, getItem, setItem } from './localStorage';
import { getProduct } from './productService';

export const getCart = () => {
  return getItem(STORAGE_KEYS.CART) || [];
};

export const addToCart = (productId, quantity = 1) => {
  const cart = getCart();
  const product = getProduct(productId);
  
  if (!product) {
    throw new Error('Product not found');
  }
  
  if (product.stock < quantity) {
    throw new Error('Not enough stock');
  }
  
  const existingItem = cart.find(item => item.productId === productId);
  
  if (existingItem) {
    if (product.stock < existingItem.quantity + quantity) {
      throw new Error('Not enough stock');
    }
    existingItem.quantity += quantity;
  } else {
    cart.push({
      productId,
      quantity,
      price: product.price
    });
  }
  
  setItem(STORAGE_KEYS.CART, cart);
  return cart;
};

export const updateCartItem = (productId, quantity) => {
  const cart = getCart();
  const product = getProduct(productId);
  
  if (!product) {
    throw new Error('Product not found');
  }
  
  if (product.stock < quantity) {
    throw new Error('Not enough stock');
  }
  
  const item = cart.find(item => item.productId === productId);
  if (!item) {
    throw new Error('Item not in cart');
  }
  
  item.quantity = quantity;
  setItem(STORAGE_KEYS.CART, cart);
  return cart;
};

export const removeFromCart = (productId) => {
  const cart = getCart();
  const filtered = cart.filter(item => item.productId !== productId);
  setItem(STORAGE_KEYS.CART, filtered);
  return filtered;
};

export const clearCart = () => {
  setItem(STORAGE_KEYS.CART, []);
};

export const getCartTotal = () => {
  const cart = getCart();
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
};