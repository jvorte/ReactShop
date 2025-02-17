import React, { useState } from 'react';

const Order = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Order placed:', formData);
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
    <h2 className="text-2xl font-semibold mb-6">Checkout</h2>

    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Payment Method</label>
        <select
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="creditCard">Credit Card</option>
          <option value="paypal">PayPal</option>
          <option value="cashOnDelivery">Cash on Delivery</option>
        </select>
      </div>
      <div className="col-span-2">
        <label className="flex items-center">
          <input
            type="checkbox"
            name="terms"
            onChange={handleChange}
            className="mr-2"
            required
          />
          I agree to the terms and conditions
        </label>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-200 col-span-2"
      >
        Submit Order
      </button>
    </form>
  </div>
  
  
  );
};

export default Order;