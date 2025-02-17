import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

const ProductDetails = ({ products }) => {
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold mb-4">{product.title}</h1>
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-64 object-cover rounded-md mb-4" 
        />
        <p className="text-lg mb-4">{product.description}</p>
        <p className="text-xl font-bold mb-4">Price: ${product.price}</p>
      </div>
    </div>
  );
};

ProductDetails.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ProductDetails;
