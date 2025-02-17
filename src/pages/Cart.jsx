import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, getTotalAmount } = useCart();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>
      
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
                  <div className="flex items-center mt-2">
                    <button 
                      onClick={() => decreaseQuantity(product.id)} 
                      className="bg-gray-300 text-gray-700 py-1 px-2 rounded-md hover:bg-gray-400"
                    >
                      -
                    </button>
                    <span className="mx-2">{product.quantity}</span>
                    <button 
                      onClick={() => increaseQuantity(product.id)} 
                      className="bg-gray-300 text-gray-700 py-1 px-2 rounded-md hover:bg-gray-400"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => removeFromCart(product.id)} 
                className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
          
          <div className="mt-6 text-xl font-semibold">
            Total: ${getTotalAmount()}
          </div>
          <button 
            onClick={() => navigate('/checkout')}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-200"
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
