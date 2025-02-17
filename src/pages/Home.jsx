import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import Filters from '../components/Filters';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Προσθήκη mock δεδομένων ή fetch από API
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);  // Αρχικά τα προϊόντα είναι τα ίδια με τα φιλτραρισμένα
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    // Φίλτρο προϊόντων βάσει αναζήτησης
    const filtered = products.filter(product => 
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery, products]);  // Ενημέρωση φίλτρου όταν αλλάζει η αναζήτηση ή τα προϊόντα

  const handleFilterChange = ({ category, priceRange, rating }) => {
    let filtered = products;

    if (category) {
      filtered = filtered.filter(product => product.category === category);
    }

    if (priceRange && priceRange.length === 2) {
      filtered = filtered.filter(product => product.price >= priceRange[0] && product.price <= priceRange[1]);
    }

    if (rating) {
      filtered = filtered.filter(product => product.rating.rate >= rating);
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="container mx-auto p-4">
   
   <h1 className="text-3xl font-semibold mb-6 text-center">Our Products</h1>
      <Filters onFilterChange={handleFilterChange} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default Home;
