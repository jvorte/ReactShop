// src/components/Header.jsx
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { cart } = useCart();
  const cartQuantity = cart.reduce((total, product) => total + product.quantity, 0);

  return (
    <header className="bg-[#131921] text-white p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img className="logo mr-2" src="public/e-commerce.png" alt="eShop Logo" />
          <h1 className="text-xl font-bold">eShop</h1>
        </div>
        <nav>
          <ul className="flex space-x-8 text-lg">
            <li><a href="/" className="hover:text-gray-400">All</a></li>
            <li><a href="/" className="hover:text-gray-400">Jacket</a></li>
            <li><a href="/" className="hover:text-gray-400">T-Shirts</a></li>
            <li><a href="/" className="hover:text-gray-400">Laptops</a></li>
            <li><a href="/" className="hover:text-gray-400">Gaming </a></li>
            <li><a href="/" className="hover:text-gray-400">Jacket Women</a></li>
            <li><a href="/" className="hover:text-gray-400">Car</a></li>
            <li><a href="/" className="hover:text-gray-400">Hobbys</a></li>
            <li><a href="/" className="hover:text-gray-400">Home</a></li>
            <li><a href="/" className="hover:text-gray-400">Kitchen</a></li>
            <li><a href="/" className="hover:text-gray-400">Pc</a></li>
            <li><a href="/" className="hover:text-gray-400">Summer</a></li>
            <li><a href="/" className="hover:text-gray-400">Fishing</a></li>
            <li><a href="/" className="hover:text-gray-400">Tools</a></li>
            <li><a href="/" className="hover:text-gray-400">Electronics</a></li>
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
