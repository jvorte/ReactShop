import React, { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import Filters from "../components/Filters";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Fetch products from the API
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data); // Initially, the products are the same as the filtered products
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    // Filter products based on search query
    const filtered = products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery, products]);

  const handleFilterChange = ({ category, priceRange, rating }) => {
    let filtered = products;

    if (category && category !== "All Products") {
      filtered = filtered.filter((product) => product.category === category);
    }

    if (priceRange && priceRange.length === 2) {
      filtered = filtered.filter(
        (product) =>
          product.price >= priceRange[0] && product.price <= priceRange[1]
      );
    }

    if (rating) {
      filtered = filtered.filter((product) => product.rating.rate >= rating);
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="container mx-auto">
      {/* Header section with Search and Filters */}
      <div className="w-full bg-[#232F3E] p-4 mb-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search */}
          <div className="flex items-center w-full md:w-1/2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="flex-grow p-2 border bg-white border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>

          {/* Filters */}
          <div className="w-full md:w-1/2">
            <Filters onFilterChange={handleFilterChange} />
          </div>
        </div>
      </div>

      {/* Product List */}
      <div className="flex justify-center">
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
};

export default Home;
