import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useCart } from '../contexts/CartContext';
import { motion } from 'framer-motion';

function Cart() {
  const { cart, isOpen, setIsOpen, removeFromCart, updateQuantity, total } = useCart();

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col bg-white dark:bg-dark-bg shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium">Shopping Cart</Dialog.Title>
                        <button
                          type="button"
                          className="text-gray-400 hover:text-gray-500"
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          ✕
                        </button>
                      </div>

                      {cart.length === 0 ? (
                        <div className="mt-8 text-center">
                          <p className="text-gray-500">Your cart is empty</p>
                        </div>
                      ) : (
                        <div className="mt-8">
                          <div className="flow-root">
                            <ul className="-my-6 divide-y divide-gray-200">
                              {cart.map((item) => (
                                <motion.li
                                  key={item.id}
                                  layout
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  className="flex py-6"
                                >
                                  <div className="flex-1 ml-4">
                                    <div className="flex justify-between text-base font-medium">
                                      <h3>{item.name}</h3>
                                      <p className="ml-4">${item.price}</p>
                                    </div>
                                    <div className="flex items-center mt-2">
                                      <button
                                        className="text-gray-500 hover:text-gray-700 px-2"
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                      >
                                        -
                                      </button>
                                      <span className="mx-2">{item.quantity}</span>
                                      <button
                                        className="text-gray-500 hover:text-gray-700 px-2"
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                      >
                                        +
                                      </button>
                                      <button
                                        type="button"
                                        className="ml-4 text-error hover:text-error/80"
                                        onClick={() => removeFromCart(item.id)}
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>

                    {cart.length > 0 && (
                      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flex justify-between text-base font-medium">
                          <p>Subtotal</p>
                          <p>${total.toFixed(2)}</p>
                        </div>
                        <div className="mt-6">
                          <button
                            className="w-full btn-primary"
                            onClick={() => {
                              // TODO: Implement checkout
                              alert('Checkout functionality coming soon!');
                            }}
                          >
                            Checkout
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default Cart;