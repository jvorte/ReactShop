import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { cart } = useCart();
  const cartQuantity = cart.reduce((total, product) => total + product.quantity, 0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-[#171b21] text-white p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img className="logo mr-2" src="/shop.png" alt="eShop Logo" />
          <h1 className="text-xl font-bold">eShop</h1>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <nav className={`w-full md:w-auto ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row justify-center md:justify-end space-y-4 md:space-y-0 md:space-x-8 text-lg">
            <li><a href="/" className="hover:text-gray-400">All</a></li>
            <li><a href="/" className="hover:text-gray-400">Jacket</a></li>
            <li><a href="/" className="hover:text-gray-400">T-Shirts</a></li>
            <li><a href="/" className="hover:text-gray-400">Laptops</a></li>
            <li><a href="/" className="hover:text-gray-400">Gaming</a></li>
            <li><a href="/" className="hover:text-gray-400">Jacket Women</a></li>
            <li><a href="/" className="hover:text-gray-400">Car</a></li>
            <li><a href="/" className="hover:text-gray-400">Hobbys</a></li>
            <li><a href="/" className="hover:text-gray-400">Home</a></li>
            <li><a href="/" className="hover:text-gray-400">Kitchen</a></li>
            <li><a href="/" className="hover:text-gray-400">Pc's</a></li>
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
