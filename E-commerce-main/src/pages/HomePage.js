// src/pages/HomePage.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import products from '../components/All_Products';
import glasses from '../assets/GLASSES/glasses (1).jpg'

const HomePage = () => {
  const { addToCart } = useContext(CartContext);

  // Assuming we have a product with ID 1 for the 50% discount
  const discountProduct = products.find(product => product.id === 1);

  // Best selling products
  const bestSellingEyewear = products.find(product => product.category === 'glasses');
  const bestSellingWatch = products.find(product => product.category === 'watch');

  // New products
  const newProducts = products.slice(0, 3); // Assuming first three products are new

  return (
    <div className="p-4 my-20">
         {/* Hero Section */}
        <section className="hero bg-cover bg-center h-96" style={{ backgroundImage: `url(${glasses})` }}>
        <div className="container mx-auto h-full flex items-center justify-center">
          <div className="text-center text-black">
            <h1 className="text-5xl font-bold mb-4 color">Welcome to Our Store</h1>
            <p className="text-xl mb-4">Find the best watches and eyewear here</p>
            <button className="bg-blue-500 text-white px-6 py-3">Shop Now</button>
          </div>
        </div>
      </section>
      <section className="p-4">
        {/* <h2 className="text-3xl font-bold mb-4">Featured Products</h2> */}
        {/* Add featured products here */}
      </section>
    

      {/* Best Selling Products Section */}
      <section className="best-selling mb-8">
        <h2 className="text-center text-lg md:text-2xl lg:text-4xl font-bold mb-4">Best Selling Products</h2>
        <div className="flex space-x-4 lg:w-2/5 m-auto bg-gray-100">
          {bestSellingEyewear && (
            <div className="border p-4 w-1/2">
              <img src={bestSellingEyewear.image} alt={bestSellingEyewear.name} className="w-full h-48 object-cover mb-4" />
              <h3 className="text-xl font-bold mb-2">{bestSellingEyewear.name}</h3>
              <p className="text-lg mb-2">${bestSellingEyewear.price}</p>
              <Link to={`/product/${bestSellingEyewear.id}`} className="bg-blue-500 text-white px-4 py-2">View Details</Link>
            </div>
          )}
          {bestSellingWatch && (
            <div className="border p-4 w-1/2">
              <img src={bestSellingWatch.image} alt={bestSellingWatch.name} className="w-full h-48 object-cover mb-4" />
              <h3 className="text-xl font-bold mb-2">{bestSellingWatch.name}</h3>
              <p className="text-lg mb-2">${bestSellingWatch.price}</p>
              <Link to={`/product/${bestSellingWatch.id}`} className="bg-blue-500 text-white px-4 py-2">View Details</Link>
            </div>
          )}
        </div>
      </section>

      {/* Discount Product Hero Section */}
      <section className="discount-hero bg-gray-800 text-white p-8 mb-8">
        <h2 className="text-3xl font-bold mb-4">50% Discount</h2>
        <div className="flex space-x-4 ">
          {discountProduct && (
            <div className="border p-4 w-full">
              <img src={discountProduct.image} alt={discountProduct.name} className="m-auto h-48 object-cover mb-4" />
              <h3 className="text-xl font-bold mb-2">{discountProduct.name}</h3>
              <p className="text-lg mb-2">
                <span className="line-through">${discountProduct.price}</span>{' '}
                <span className="text-red-200">${(discountProduct.price * 0.5).toFixed(2)}</span>
              </p>
              <Link to={`/product/${discountProduct.id}`} className="bg-blue-500 text-white px-4 py-2">View Details</Link>
            </div>
          )}
        </div>
      </section>

      {/* New Products Section */}
      <section className="new-products mb-8">
        <h2 className="text-center text-lg md:text-2xl lg:text-4xl font-bold mb-4">New Products</h2>
        <div className="flex space-x-4 lg:w-3/5 gap-1 m-auto">
          {newProducts.map(product => (
            <div key={product.id} className="border p-4 w-1/2">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-lg mb-2">${product.price}</p>
              <button onClick={() => addToCart(product)} className="bg-green-500 text-white px-4 py-2">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
