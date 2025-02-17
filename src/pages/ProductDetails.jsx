import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.title} added to cart!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  return (
    <div className="container mx-auto p-6">
      <button 
        onClick={() => navigate(-1)} 
        className="mb-6 bg-gray-600 text-white py-2 px-6 rounded-lg hover:bg-gray-700 transition-colors duration-200"
      >
        Back
      </button>
      
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full md:w-1/2 h-64 object-cover rounded-md shadow-lg mb-4 md:mb-0 transition-transform duration-300 hover:scale-105"
          />
          <div className="md:ml-8 text-center md:text-left">
            <h2 className="text-3xl font-semibold text-gray-900">{product.title}</h2>
            <p className="mt-2 text-lg text-gray-700">{product.description}</p>
            <p className="mt-4 text-xl font-bold text-gray-800">${product.price}</p>
            <button 
              onClick={handleAddToCart}
              className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-md shadow-md hover:bg-blue-600 hover:shadow-lg transition-all duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
