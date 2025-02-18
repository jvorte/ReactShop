import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#131921] text-white p-4 mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img className="logo mr-2" src="public/e-commerce.png" alt="eShop Logo" />
          <h1 className="text-xl font-bold">eShop</h1>
        </div>
        <div className="text-sm">
          <p>&copy; {new Date().getFullYear()} eShop. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="/privacy" className="hover:text-gray-400">Privacy Policy</a>
          <a href="/terms" className="hover:text-gray-400">Terms of Service</a>
          <a href="/contact" className="hover:text-gray-400">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;