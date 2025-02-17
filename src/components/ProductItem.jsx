import React from 'react';
import PropTypes from 'prop-types';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductItem = ({ product }) => {
  const { addToCart } = useCart();

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
    <div className="bg-white pb-5 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-xs mx-auto h-96 flex flex-col text-center">
      
      {/* Μείωση μεγέθους εικόνας με max-height και object-fit */}
      <img 
        src={product.image} 
        alt={product.title} 
        className="w-65 h-35  object-cover rounded-md mb-4" 
      />
      
      <h2 className="text-lg font-semibold mb-2 overflow-hidden text-ellipsis whitespace-nowrap max-h-12">
        {product.title}
      </h2>
      
      {/* <p className="text-gray-700 mb-4 flex-grow overflow-hidden">{product.description}</p> */}
      <p className="text-xl font-bold mb-4">${product.price}</p>
      
      <button 
        onClick={handleAddToCart} 
        className="w-full bg-blue-500 text-white py-1 px-2 rounded-md hover:bg-blue-600 transition-colors duration-200 mb-2"
      >
        Add to Cart
      </button>
      
      <Link 
        to={`/product/${product.id}`} 
        className="w-full bg-green-500 text-white py-1 px-2 rounded-md hover:bg-green-600 transition-colors duration-200 block text-center"
      >
        View Product
      </Link>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductItem;
