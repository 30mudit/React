import { STORAGE_KEYS, getItem, setItem } from './localStorage';

const generateId = () => Date.now().toString(36) + Math.random().toString(36).substr(2);

export const register = async (userData) => {
  const users = getItem(STORAGE_KEYS.USERS) || [];
  
  // Check if email already exists
  if (users.some(user => user.email === userData.email)) {
    throw new Error('Email already registered');
  }

  const newUser = {
    id: generateId(),
    ...userData,
    createdAt: new Date().toISOString()
  };

  users.push(newUser);
  setItem(STORAGE_KEYS.USERS, users);
  
  // Set current user
  const { password, ...userWithoutPassword } = newUser;
  setItem(STORAGE_KEYS.CURRENT_USER, userWithoutPassword);
  
  return userWithoutPassword;
};

export const login = async (credentials) => {
  const users = getItem(STORAGE_KEYS.USERS) || [];
  const user = users.find(u => u.email === credentials.email && u.password === credentials.password);
  
  if (!user) {
    throw new Error('Invalid credentials');
  }

  const { password, ...userWithoutPassword } = user;
  setItem(STORAGE_KEYS.CURRENT_USER, userWithoutPassword);
  
  return userWithoutPassword;
};

export const logout = () => {
  localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
};

export const getCurrentUser = () => {
  return getItem(STORAGE_KEYS.CURRENT_USER);
};