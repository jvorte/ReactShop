import React, { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    if (product && product.id != null && product.price != null) {
      setCart(prevCart => {
        const existingProduct = prevCart.find(item => item.id === product.id);
        if (existingProduct) {
          return prevCart.map(item =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          );
        }
        return [...prevCart, { ...product, quantity: 1 }];
      });
    } else {
      console.error('Invalid product object:', product);
    }
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(product => product.id !== productId));
  };

  const increaseQuantity = (productId) => {
    setCart(prevCart =>
      prevCart.map(product =>
        product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCart(prevCart =>
      prevCart.map(product =>
        product.id === productId && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const getTotalAmount = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, getTotalAmount }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
