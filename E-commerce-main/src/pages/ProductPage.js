// src/pages/ProductPage.js
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import products from '../components/All_Products';
import { CartContext } from '../contexts/CartContext';

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id.toString() === id);
  const { addToCart } = useContext(CartContext);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="border p-4 w-72 m-auto bg-gray-200 my-40">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
      <p className="text-xl mt-4">${product.price}</p>
      <button onClick={() => addToCart(product)} className="mt-4 bg-blue-500 text-white px-4 py-2">Add to Cart</button>
    </div>
  );
};

export default ProductPage;
