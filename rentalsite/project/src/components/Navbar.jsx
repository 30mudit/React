import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
import { useTheme } from '../contexts/ThemeContext';

function Navbar() {
  const { user, logout } = useAuth();
  const { itemCount, setIsOpen: setCartOpen } = useCart();
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <nav className="bg-white dark:bg-dark-bg shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-primary">
            Store
          </Link>

          <div className="hidden md:flex space-x-4">
            <Link to="/products" className="hover:text-primary transition-colors">
              Products
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? '🌞' : '🌙'}
            </button>

            <button
              onClick={() => setCartOpen(true)}
              className="relative p-2"
              aria-label="Shopping cart"
            >
              🛒
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>

            {user ? (
              <Menu as="div" className="relative">
                <Menu.Button className="flex items-center space-x-1 hover:text-primary transition-colors">
                  <span>{user.name}</span>
                  <span>▼</span>
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-48 bg-white dark:bg-dark-bg rounded-md shadow-float">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={logout}
                          className={`${
                            active ? 'bg-gray-100 dark:bg-gray-800' : ''
                          } w-full text-left px-4 py-2 text-sm`}
                        >
                          Logout
                        </button>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            ) : (
              <div className="space-x-2">
                <Link to="/login" className="hover:text-primary transition-colors">
                  Login
                </Link>
                <Link to="/signup" className="btn-primary">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;