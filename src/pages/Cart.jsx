import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, getTotalAmount } = useCart();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-6 py-8 max-w-4xl">
      <h1 className="text-3xl font-semibold mb-8 text-center">Your Cart</h1>
      
      {cart.length === 0 ? (
        <div className="text-center text-xl text-gray-500">
          Your cart is empty.
        </div>
      ) : (
        <div>
          {cart.map(product => (
            <div key={product.id} className="flex justify-between items-center border-b py-6 mb-6 bg-white shadow-lg rounded-lg">
              <div className="flex items-center ps-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-20 h-20 object-cover rounded-md mr-6 shadow-md"
                />
                <div>
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="text-lg text-gray-600">${product.price}</p>
                  <div className="flex items-center mt-4">
                    <button 
                      onClick={() => decreaseQuantity(product.id)} 
                      className="bg-gray-300 text-gray-700 py-1 px-2 rounded-md hover:bg-gray-400 transition-colors"
                    >
                      -
                    </button>
                    <span className="mx-4 text-xl font-semibold">{product.quantity}</span>
                    <button 
                      onClick={() => increaseQuantity(product.id)} 
                      className="bg-gray-300 text-gray-700 py-1 px-2  rounded-md hover:bg-gray-400 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => removeFromCart(product.id)} 
                className="bg-red-500 text-white py-1 px-4 me-4 rounded-md hover:bg-red-600 transition-colors"
              >
                Remove
              </button>
            </div>
          ))}
          
          <div className="mt-6 text-2xl font-semibold text-right">
            Total: <span className="text-blue-500">${getTotalAmount()}</span>
          </div>
          <div className="flex justify-end mt-8">
            <button 
              onClick={() => navigate('/checkout')}
              className="bg-blue-500 text-white py-2 px-8 rounded-md hover:bg-blue-600 transition-colors duration-200"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
