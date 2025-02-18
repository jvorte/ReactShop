import React, { useState } from 'react';

const Filters = ({ onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [rating, setRating] = useState(0);

  const categories = ['All Products', 'Men', 'Women', 'Electronics', 'Accessories'];

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
    <div className="p-1 rounded-lg mb-6 max-w-2xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <select
            onChange={handleCategoryChange}
            value={selectedCategory}
            className="w-full p-1 border bg-gray-50 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <div className="flex space-x-2">
            <input
              type="number"
              name="min"
              value={priceRange[0]}
              onChange={handlePriceChange}
              className="w-full p-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Min"
            />
            <span className="text-xl font-semibold text-gray-700">-</span>
            <input
              type="number"
              name="max"
              value={priceRange[1]}
              onChange={handlePriceChange}
              className="w-full p-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Max"
            />
          </div>
        </div>

        {/* <div>
          <select
            onChange={handleRatingChange}
            value={rating}
            className="w-full p-1 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
          >
            <option value={0} disabled>
              Select Rating
            </option>
            <option value={4}>4 stars and above</option>
            <option value={3}>3 stars and above</option>
          </select>
        </div> */}
      </div>
    </div>
  );
};

export default Filters;
