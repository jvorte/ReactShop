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
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
      
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map(product => (
            <div key={product.id} className="flex justify-between items-center border-b py-4">
              <div className="flex items-center">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-16 h-16 object-cover rounded-md mr-4"
                />
                <div>
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-lg">${product.price}</p>
                  <p className="text-lg">Quantity: {product.quantity}</p>
                </div>
              </div>
            </div>
          ))}
          
          <div className="mt-6 text-xl font-semibold">
            Total: ${getTotalAmount()}
          </div>
          <button 
            onClick={handlePlaceOrder}
            className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-200"
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;