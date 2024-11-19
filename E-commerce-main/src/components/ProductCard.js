// src/components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 w-72 m-auto bg-gray-200">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-xl font-bold mb-2">{product.name}</h2>
      <p className="text-lg mb-2">${product.price}</p>
      <Link to={`/product/${product.id}`} className="bg-blue-500 text-white px-4 py-2">View Details</Link>
    </div>
  );
}

export default ProductCard;
