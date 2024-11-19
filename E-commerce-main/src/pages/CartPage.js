// src/pages/CartPage.js
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, cartTotal, cartQuantity } = useContext(CartContext);

  if (cart.length === 0) {
    return <div className="p-4">Your cart is empty</div>;
  }

  return (
    <div className="p-4 my-20">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      <div className="mb-4">
        {cart.map(item => (
          <div key={item.id} className="flex justify-between items-center mb-4">
            <img src={item.image} alt={item.name} className="w-16 h-16" />
            <div>{item.name}</div>
            <div>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                className="border w-12 text-center"
              />
            </div>
            <div>${item.price * item.quantity}</div>
            <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white px-4 py-2">Remove</button>
          </div>
        ))}
      </div>
      <div className="border-t pt-4">
        <h2 className="text-2xl font-bold">Total: ${cartTotal}</h2>
        <p>Total Items: {cartQuantity}</p>
        <button onClick={clearCart} className="mt-4 bg-red-500 text-white px-4 py-2">Clear Cart</button>
      </div>
    </div>
  );
};

export default CartPage;
