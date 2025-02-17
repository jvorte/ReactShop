import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cart, getTotalAmount } = useCart();
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    navigate('/order');
  };

  return (
    <div className="container mx-auto px-6 py-8 max-w-4xl">
      <h1 className="text-3xl font-semibold mb-8 text-center">Checkout</h1>
      
      {cart.length === 0 ? (
        <div className="text-center text-xl text-gray-500">
          Your cart is empty.
        </div>
      ) : (
        <div>
          {cart.map(product => (
            <div key={product.id} className="flex justify-between items-center border-b py-6 mb-6 bg-white shadow-lg rounded-lg">
              <div className="flex items-center">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-20 h-20 object-cover rounded-md mr-6 shadow-md"
                />
                <div>
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="text-lg text-gray-600">${product.price}</p>
                  <p className="text-lg text-gray-600">Quantity: {product.quantity}</p>
                </div>
              </div>
            </div>
          ))}
          
          <div className="mt-6 text-2xl font-semibold text-right">
            Total: <span className="text-blue-500">${getTotalAmount()}</span>
          </div>
          <div className="flex justify-end mt-8">
            <button 
              onClick={handlePlaceOrder}
              className="bg-green-500 text-white py-2 px-8 rounded-md hover:bg-green-600 transition-colors duration-200"
            >
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
