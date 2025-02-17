import React, { useState } from 'react';

const Filters = ({ onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [rating, setRating] = useState(0);

  const categories = ['Men', 'Women', 'Electronics', 'Accessories'];

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    onFilterChange({ category: e.target.value, priceRange, rating });
  };

  const handlePriceChange = (e) => {
    const newPriceRange = [...priceRange];
    newPriceRange[e.target.name === 'min' ? 0 : 1] = e.target.value;
    setPriceRange(newPriceRange);
    onFilterChange({ category: selectedCategory, priceRange: newPriceRange, rating });
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
    onFilterChange({ category: selectedCategory, priceRange, rating: e.target.value });
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
          <select
            onChange={handleCategoryChange}
            value={selectedCategory}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Price Range</label>
          <div className="flex space-x-2">
            <input
              type="number"
              name="min"
              value={priceRange[0]}
              onChange={handlePriceChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Min"
            />
            <span className="text-xl font-semibold text-gray-700">-</span>
            <input
              type="number"
              name="max"
              value={priceRange[1]}
              onChange={handlePriceChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Max"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Rating</label>
          <select
            onChange={handleRatingChange}
            value={rating}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value={0}>All</option>
            <option value={4}>4 stars and above</option>
            <option value={3}>3 stars and above</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
