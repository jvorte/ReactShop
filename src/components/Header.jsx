// src/components/Header.jsx
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { cart } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const cartQuantity = cart.reduce((total, product) => total + product.quantity, 0);

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">E-commerce Store</h1>
        <nav>
          <ul className="flex space-x-6">
          <li>  <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search products..."
        className="mb-4 p-2 border rounded"
      /></li>
            <li><a href="/" className="hover:text-gray-400">Home</a></li>
         
            <li>
              <a href="/cart" className="hover:text-gray-400">
                Cart <span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs">{cartQuantity}</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
